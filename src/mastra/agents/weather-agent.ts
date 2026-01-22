import { Agent } from '@mastra/core/agent';
import { weatherTool } from '../tools/weather-tool';

export const weatherAgent = new Agent({
  id: 'weather-agent',
  name: 'Weather Agent',
  instructions: `You are a helpful weather assistant that provides accurate weather information.
Use the weatherTool to fetch current weather data. Keep responses concise but informative.`,
  model: 'openai/gpt-4o',
  tools: { weatherTool },
});
