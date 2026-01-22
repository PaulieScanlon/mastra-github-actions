import { Mastra } from '@mastra/core/mastra';
import { blogEditorAgent } from './agents/blog-editor-agent';

export const mastra = new Mastra({
  agents: { blogEditorAgent },
});
