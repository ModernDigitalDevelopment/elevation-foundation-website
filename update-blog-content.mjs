/**
 * Direct database update script for blog post content.
 * Run with: node update-blog-content.mjs
 */
import { readFileSync } from 'fs';
import { createConnection } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error('DATABASE_URL not set');
  process.exit(1);
}

// Parse MySQL URL: mysql://user:pass@host:port/db
const url = new URL(DATABASE_URL);
const connConfig = {
  host: url.hostname,
  port: parseInt(url.port) || 3306,
  user: url.username,
  password: url.password,
  database: url.pathname.slice(1),
  ssl: { rejectUnauthorized: false },
  multipleStatements: false,
};

const updates = JSON.parse(readFileSync('/home/ubuntu/blog_updates_ready.json', 'utf8'));

async function main() {
  const conn = await createConnection(connConfig);
  console.log('Connected to database');

  let success = 0;
  let failed = 0;

  for (const post of updates) {
    try {
      const [result] = await conn.execute(
        'UPDATE blog_posts SET content = ?, excerpt = ? WHERE id = ?',
        [post.content, post.excerpt, post.id]
      );
      console.log(`  ✓ Updated ID=${post.id}: ${post.title.substring(0, 50)} (${post.content.length} chars)`);
      success++;
    } catch (err) {
      console.error(`  ✗ Failed ID=${post.id}: ${err.message}`);
      failed++;
    }
  }

  await conn.end();
  console.log(`\nDone: ${success} updated, ${failed} failed`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
