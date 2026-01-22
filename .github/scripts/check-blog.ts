import 'dotenv/config';
import { mastra } from '../../src/mastra/index.js';

const filePath = process.argv[2];

if (!filePath) {
  console.error('Usage: npx tsx .github/scripts/check-blog.ts <file-path>');
  process.exit(1);
}

async function main() {
  const agent = mastra.getAgent('blogEditorAgent');
  const response = await agent.generate(`Check the file at ${filePath} for spelling, grammar, and style issues.`);

  console.log(response.text);
}

main().catch(console.error);

