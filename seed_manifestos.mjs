/**
 * Seed script: fetch all 7 manifesto posts from GitHub and insert into the blog DB.
 * Run from project root: node seed_manifestos.mjs
 */
import { createConnection } from "mysql2/promise";
import { config } from "dotenv";
import { readFileSync } from "fs";
import https from "https";

config();

const TOKEN = "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";
const OWNER = "ModernDigitalDevelopment";
const REPO = "sotilitarianism";

function fetchGitHub(path) {
  return new Promise((resolve, reject) => {
    const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}`;
    const options = {
      headers: {
        Authorization: `token ${TOKEN}`,
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "elevation-foundation-seeder",
      },
    };
    https.get(url, options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.content) {
            resolve(Buffer.from(parsed.content, "base64").toString("utf-8"));
          } else {
            reject(new Error(`No content in response for ${path}: ${JSON.stringify(parsed).slice(0, 200)}`));
          }
        } catch (e) {
          reject(e);
        }
      });
    }).on("error", reject);
  });
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function estimateReadTime(content) {
  const words = content.split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

// Extract first paragraph as excerpt
function extractExcerpt(content) {
  const lines = content.split("\n").filter(l => l.trim() && !l.startsWith("#") && !l.startsWith("---"));
  const first = lines[0] || "";
  return first.slice(0, 280).trim() + (first.length > 280 ? "…" : "");
}

// Extract title from first H1
function extractTitle(content, fallback) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : fallback;
}

const POSTS = [
  {
    file: "manifestos/sotilitarian-manifesto.md",
    fallbackTitle: "The Sotilitarian Manifesto",
    category: "Philosophy",
    tags: "Sotilitarianism,manifesto,capitalism 2.0,social capitalism,utilitarian capitalism,transparent economics",
    publishedAt: new Date("2025-01-15"),
    featured: true,
  },
  {
    file: "manifestos/sotilitarian-capitalism-part-1.md",
    fallbackTitle: "Sotilitarian Capitalism: Part I — The Foundations",
    category: "Philosophy",
    tags: "Sotilitarianism,capitalism 2.0,social capitalism,utilitarian capitalism,transparent economics,series",
    publishedAt: new Date("2025-02-01"),
    featured: false,
  },
  {
    file: "manifestos/sotilitarian-capitalism-part-2.md",
    fallbackTitle: "Sotilitarian Capitalism: Part II — The Economics",
    category: "Philosophy",
    tags: "Sotilitarianism,capitalism 2.0,DeFi,community finance,token economy,series",
    publishedAt: new Date("2025-02-15"),
    featured: false,
  },
  {
    file: "manifestos/sotilitarian-capitalism-part-3.md",
    fallbackTitle: "Sotilitarian Capitalism: Part III — The Politics",
    category: "Governance",
    tags: "Sotilitarianism,governance,blockchain governance,community sovereignty,series",
    publishedAt: new Date("2025-03-01"),
    featured: false,
  },
  {
    file: "manifestos/sotilitarian-capitalism-part-4.md",
    fallbackTitle: "Sotilitarian Capitalism: Part IV — The Technology",
    category: "Technology",
    tags: "Sotilitarianism,blockchain,smart contracts,Transparently,DeFi,series",
    publishedAt: new Date("2025-03-15"),
    featured: false,
  },
  {
    file: "manifestos/sotilitarian-capitalism-part-5.md",
    fallbackTitle: "Sotilitarian Capitalism: Part V — The Future",
    category: "Philosophy",
    tags: "Sotilitarianism,capitalism 2.0,post-capitalist economics,community finance,series",
    publishedAt: new Date("2025-04-01"),
    featured: false,
  },
  {
    file: "manifestos/sotilitarian-revolt.md",
    fallbackTitle: "The Sotilitarian Revolt",
    category: "Philosophy",
    tags: "Sotilitarianism,revolt,capitalism 2.0,social capitalism,economic empowerment,transparency tech",
    publishedAt: new Date("2025-04-15"),
    featured: false,
  },
];

async function main() {
  const db = await createConnection(process.env.DATABASE_URL);
  console.log("Connected to database");

  let seeded = 0;
  let skipped = 0;

  for (const post of POSTS) {
    try {
      console.log(`\nFetching: ${post.file}`);
      const content = await fetchGitHub(post.file);
      const title = extractTitle(content, post.fallbackTitle);
      const excerpt = extractExcerpt(content);
      const slug = slugify(title);
      const readTime = estimateReadTime(content);

      // Check if already exists
      const [existing] = await db.execute("SELECT id FROM blog_posts WHERE slug = ?", [slug]);
      if (existing.length > 0) {
        console.log(`  SKIP: ${slug} already exists`);
        skipped++;
        continue;
      }

      await db.execute(
        `INSERT INTO blog_posts (title, slug, excerpt, content, category, tags, author, published, publishedAt, readTime, createdAt, updatedAt)
         VALUES (?, ?, ?, ?, ?, ?, ?, 1, ?, ?, NOW(), NOW())`,
        [
          title,
          slug,
          excerpt,
          content,
          post.category,
          post.tags,
          "The Elevation Foundation",
          post.publishedAt,
          readTime,
        ]
      );

      console.log(`  SEEDED: "${title}" → /blog/${slug} (${readTime})`);
      seeded++;

      // Small delay to avoid GitHub rate limiting
      await new Promise(r => setTimeout(r, 500));
    } catch (err) {
      console.error(`  ERROR for ${post.file}:`, err.message);
    }
  }

  await db.end();
  console.log(`\n✅ Done: ${seeded} seeded, ${skipped} skipped`);
}

main().catch(console.error);
