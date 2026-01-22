import { Agent } from "@mastra/core/agent";
import { weatherTool } from "../tools/weather-tool";

export const weatherAgent = new Agent({
  id: "weather-agent",
  name: "Weather Agent",
  instructions: `
      You are a helpful weather assistant.
      Use the weatherTool to fetch current weather data for a location.`,
  model: "openai/gpt-5.1",
  tools: { weatherTool },
});
