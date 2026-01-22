import { Agent } from "@mastra/core/agent";
import { weatherTool } from "../tools/weather-tool";

export const weatherAgent = new Agent({
  id: "weather-agent",
  name: "Weather Agent",
  instructions: `You are a weather assistant. When asked for weather, use the weatherTool to fetch the data.
    Return the raw weather report exactly as received from the tool, plus a brief friendly summary.`,
  model: "openai/gpt-4o",
  tools: { weatherTool },
});
