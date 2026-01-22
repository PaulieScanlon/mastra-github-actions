import 'dotenv/config';
import { mastra } from '../../src/mastra/index.js';
import { writeFileSync } from 'fs';
import { z } from 'zod';

const LOCATION = 'London';

async function main() {
  const agent = mastra.getAgent('weatherAgent');

  const response = await agent.generate(`Get the weather for ${LOCATION}`, {
    structuredOutput: {
      schema: z.object({
        report: z.string(),
        summary: z.string(),
      }),
    },
  });

  const { report, summary } = response.object;

  const date = new Intl.DateTimeFormat('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date());

  const readme = `# Weather

| Report | Summary | Date |
|--------|---------|------|
| ${report.trim()} | ${summary} | ${date} |
`;

  writeFileSync('README.md', readme);
  console.log('README updated');
}

main().catch(console.error);
