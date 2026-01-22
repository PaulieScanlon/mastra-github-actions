import { mastra } from '../../src/mastra/index.js';
import { readFileSync, writeFileSync } from 'fs';

const LOCATION = 'San Francisco';
const README_PATH = 'README.md';
const WEATHER_START = '<!-- WEATHER_START -->';
const WEATHER_END = '<!-- WEATHER_END -->';

async function main() {
  const agent = mastra.getAgent('weatherAgent');
  const response = await agent.generate(`What's the current weather in ${LOCATION}? Give a brief summary.`);

  const weatherText = response.text;
  const timestamp = new Date().toISOString();

  const weatherSection = `${WEATHER_START}
## 🌤️ Current Weather

| Location | Updated |
|----------|---------|
| ${LOCATION} | ${timestamp} |

${weatherText}
${WEATHER_END}`;

  const readme = readFileSync(README_PATH, 'utf-8');

  let newReadme: string;
  if (readme.includes(WEATHER_START)) {
    newReadme = readme.replace(
      new RegExp(`${WEATHER_START}[\\s\\S]*?${WEATHER_END}`),
      weatherSection
    );
  } else {
    newReadme = readme + '\n\n' + weatherSection;
  }

  writeFileSync(README_PATH, newReadme);
  console.log('README updated with weather data');
}

main().catch(console.error);

