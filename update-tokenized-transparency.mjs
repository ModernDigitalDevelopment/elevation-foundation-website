import mysql from 'mysql2/promise';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const content = fs.readFileSync('/home/ubuntu/sst-mint-mechanism-whitepaper.md', 'utf8');

// Extract just the body (remove the title line since it's stored separately)
const bodyContent = content.split('\n').slice(1).join('\n').trim();

const conn = await mysql.createConnection(process.env.DATABASE_URL);

const [result] = await conn.execute(
  `UPDATE blog_posts SET 
    title = ?,
    content = ?,
    excerpt = ?
   WHERE id = 30001`,
  [
    'Tokenized Transparency: How Efficiency Becomes Money',
    bodyContent,
    'The world\'s stablecoins are warehouses. They store value. The SotilityStableToken (SST) is a factory — it creates value. SST is minted not against dollars held in reserve, but against the measurable efficiency surplus generated when an organization integrates Sotility Trust Tech and smart contracts. This paper defines the SST mint mechanism, models its economic implications, and argues that efficiency-backed currency is the most defensible monetary innovation since the gold standard.'
  ]
);

console.log('Updated rows:', result.affectedRows);
await conn.end();
