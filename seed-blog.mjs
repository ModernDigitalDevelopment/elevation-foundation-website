import { readFileSync } from "fs";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { blogPosts } from "./drizzle/schema.ts";
import dotenv from "dotenv";

dotenv.config();

const essays = JSON.parse(
  readFileSync("/home/ubuntu/read_sotility_essays.json", "utf-8")
);

const conn = await mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(conn);

let inserted = 0;
let skipped = 0;

for (const item of essays.results) {
  const { title, slug, summary, category, body_markdown } = item.output;
  if (!title || !slug || !body_markdown) {
    console.log(`Skipping (missing fields): ${item.input}`);
    skipped++;
    continue;
  }

  // Sanitize slug
  const cleanSlug = slug
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .substring(0, 120);

  try {
    await db.insert(blogPosts).values({
      title: title.substring(0, 255),
      slug: cleanSlug,
      excerpt: summary ? summary.substring(0, 500) : title,
      content: body_markdown,
      category: category || "Philosophy",
      tags: JSON.stringify(["Sotilitarianism", "Philosophy", "Blockchain Governance"]),
      published: true,
      author: "Cornelius Lawrence",
      readTime: String(Math.max(3, Math.ceil(body_markdown.split(/\s+/).length / 200))) + " min read",
    });
    console.log(`✅ Inserted: ${title}`);
    inserted++;
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      console.log(`⏭️  Already exists: ${cleanSlug}`);
      skipped++;
    } else {
      console.error(`❌ Error inserting "${title}":`, err.message);
      skipped++;
    }
  }
}

console.log(`\nDone. Inserted: ${inserted}, Skipped: ${skipped}`);
await conn.end();
