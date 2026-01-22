import { Agent } from '@mastra/core/agent';
import { readFileTool } from '../tools/blog-editor-tool';
import { readFileSync } from 'fs';
import { join } from 'path';

const styleGuide = readFileSync(join(import.meta.dirname, '..', 'config', 'STYLE_GUIDE.md'), 'utf-8');

export const blogEditorAgent = new Agent({
  id: 'blog-editor-agent',
  name: 'Blog Editor Agent',
  instructions: `You are a blog editor. Use readFileTool to read the file, then check it against the style guide below. Report all violations found.

For each issue:
- Line number
- What's wrong
- Current text
- Corrected text

${styleGuide}`,
  model: 'openai/gpt-4o',
  tools: { readFileTool },
});
