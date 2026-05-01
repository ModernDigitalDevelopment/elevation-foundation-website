import { createConnection } from 'mysql2/promise';
import { readFileSync } from 'fs';

const content = readFileSync('/home/ubuntu/press-release-blog-post.md', 'utf8');

const conn = await createConnection(process.env.DATABASE_URL);

const slug = 'sotilitarianism-public-launch-new-economic-operating-system';
const title = 'We Are Building the New Economic Operating System — And It Is Already Running';
const excerpt = 'The Elevation Foundation today publicly launches Sotilitarianism — a governance philosophy backed by 20 open-source smart contracts, a peer-reviewed academic paper, and a live DApp. The core innovation: a stablecoin minted from efficiency, not collateral.';
const author = 'Cornelius Lawrence';
const category = 'Announcement';
const tags = JSON.stringify(['Sotilitarianism', 'Press Release', 'Blockchain', 'Governance', 'SST', 'Transparently', 'Launch']);
const published = 1;
 const publishedAt = new Date();
 const readTime = '8 min read';

// Check if it already exists
const [existing] = await conn.query('SELECT id FROM blog_posts WHERE slug = ?', [slug]);

if (existing.length > 0) {
  await conn.query(
    'UPDATE blog_posts SET title=?, content=?, excerpt=?, author=?, category=?, tags=?, published=?, publishedAt=? WHERE slug=?',
    [title, content, excerpt, author, category, tags, published, publishedAt, slug]
  );
  console.log('Updated existing press release post, id:', existing[0].id);
} else {
  const [result] = await conn.query(
    'INSERT INTO blog_posts (title, slug, content, excerpt, author, category, tags, published, publishedAt, readTime) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [title, slug, content, excerpt, author, category, tags, published, publishedAt, readTime]
  );
  console.log('Inserted press release post, id:', result.insertId);
}

await conn.end();
