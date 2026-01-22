import 'dotenv/config';
import { mastra } from '../../src/mastra/index.js';
import { writeFileSync } from 'fs';

async function main() {
  const agent = mastra.getAgent('weatherAgent');
  const response = await agent.generate("What's the weather in London?");

  const weather = response.text.replace(/\n/g, ' ').trim();
  const date = new Date().toISOString();

  const readme = `# Weather

| Weather | Date |
|---------|------|
| ${weather} | ${date} |
`;

  writeFileSync('README.md', readme);
  console.log('README updated');
}

main().catch(console.error);
