import { Agent } from '@mastra/core/agent';
import { readFileTool } from '../tools/blog-editor-tool';
import { readFileSync } from 'fs';
import { join } from 'path';

const styleGuide = readFileSync(join(import.meta.dirname, '..', 'config', 'STYLE_GUIDE.md'), 'utf-8');

export const blogEditorAgent = new Agent({
  id: 'blog-editor-agent',
  name: 'Blog Editor Agent',
  instructions: `You are a blog editor. Use readFileTool to read the file, then check it against the style guide below.

Only report actual issues that need fixing. Do NOT mention things that are fine or have no issues.

For each issue:
- Line number
- What's wrong
- Current text
- Corrected text

If no issues found, just say "No issues found."

${styleGuide}`,
  model: 'openai/gpt-4o',
  tools: { readFileTool },
});
