import { getDb } from './server/db';
import { blogPosts } from './drizzle/schema';
import { asc } from 'drizzle-orm';

const db = await getDb();
if (!db) { console.error('No DB connection'); process.exit(1); }
const posts = await db.select({ id: blogPosts.id, title: blogPosts.title, coverImage: blogPosts.coverImage }).from(blogPosts).orderBy(asc(blogPosts.id));

console.log(`\nTotal articles in DB: ${posts.length}\n`);

let ok = 0, fail = 0, missing = 0;

for (const post of posts) {
  const title = post.title.substring(0, 50);
  if (!post.coverImage) {
    console.log(`MISSING  id=${post.id} "${title}"`);
    missing++;
    continue;
  }
  try {
    const res = await fetch(post.coverImage, { method: 'HEAD' });
    const filename = post.coverImage.split('/').pop()?.substring(0, 55) ?? '';
    if (res.ok) {
      console.log(`OK       id=${post.id} ${filename}`);
      ok++;
    } else {
      console.log(`FAIL(${res.status}) id=${post.id} ${filename}`);
      console.log(`         URL: ${post.coverImage}`);
      fail++;
    }
  } catch(e) {
    console.log(`ERROR    id=${post.id} ${String(e).substring(0, 60)}`);
    fail++;
  }
}

console.log(`\nSummary: ${ok} OK  |  ${fail} FAILED  |  ${missing} MISSING`);
process.exit(0);
