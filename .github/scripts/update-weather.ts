import 'dotenv/config';
import { mastra } from '../../src/mastra/index.js';
import { writeFileSync } from 'fs';

async function main() {
  const agent = mastra.getAgent('weatherAgent');
  const response = await agent.generate('What is the weather in London?');

  writeFileSync('README.md', `# Weather\n\n${response.text}\n`);
  console.log('README updated');
}

main().catch(console.error);
