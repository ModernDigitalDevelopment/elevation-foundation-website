import { storagePut } from './server/storage';
import { readFileSync } from 'fs';

// Map of article IDs to local image files
const uploads = [
  { id: 1,     file: 'article-cover-sotilitarianism-complete-vision.png' },
  { id: 2,     file: 'article-cover-sotilitarian-economic-framework.png' },
  { id: 3,     file: 'article-cover-five-layer-architecture.png' },
  { id: 4,     file: 'article-cover-smart-contracts-social-infrastructure.png' },
  { id: 6,     file: 'article-cover-sotilitarian-revolt-system.png' },
  { id: 7,     file: 'article-cover-tokenizing-social-value.png' },
  { id: 11,    file: 'article-cover-transparently-governance-dapp.png' },
  { id: 17,    file: 'article-cover-wesolar-decentralized-solar.png' },
  { id: 30001, file: 'article-cover-tokenized-transparency-efficiency.png' },
  { id: 60001, file: 'article-cover-sotilitarianism-public-launch.png' },
  { id: 90003, file: 'article-cover-sotilitarian-manifesto.png' },
  { id: 90004, file: 'article-cover-sotilitarian-capitalism-intro.png' },
  { id: 90005, file: 'article-cover-capitalism-part2-economics.png' },
  { id: 90006, file: 'article-cover-capitalism-part3-politics.png' },
  { id: 90007, file: 'article-cover-capitalism-part4-technology.png' },
  { id: 90008, file: 'article-cover-sotilitarian-revolt-standalone.png' },
];

const BASE_DIR = '/home/ubuntu/webdev-static-assets';

console.log('\nUploading 16 article cover images via storagePut...\n');

const results: Array<{id: number, url: string}> = [];

for (const item of uploads) {
  const localPath = `${BASE_DIR}/${item.file}`;
  try {
    const data = readFileSync(localPath);
    const { url } = await storagePut(`article-covers/${item.file}`, data, 'image/png');
    console.log(`OK  id=${item.id}  ${url}`);
    results.push({ id: item.id, url });
  } catch (e) {
    console.error(`FAIL id=${item.id}  ${String(e).substring(0, 80)}`);
  }
}

console.log('\n--- SQL UPDATE STATEMENTS ---');
for (const r of results) {
  console.log(`UPDATE blog_posts SET coverImage = '${r.url}' WHERE id = ${r.id};`);
}

process.exit(0);
