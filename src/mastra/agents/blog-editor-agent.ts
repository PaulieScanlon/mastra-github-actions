import { Agent } from '@mastra/core/agent';
import { readFileTool } from '../tools/blog-editor-tool';
import { readFileSync } from 'fs';
import { join } from 'path';

const styleGuide = readFileSync(join(import.meta.dirname, '..', 'config', 'STYLE_GUIDE.md'), 'utf-8');

export const blogEditorAgent = new Agent({
  id: 'blog-editor-agent',
  name: 'Blog Editor Agent',
  instructions: `You check blog posts for style guide violations. Use readFileTool to read the file, then report any violations of the style guide below.

For each issue found, report:
- Line number
- Current text
- Corrected text

${styleGuide}`,
  model: 'openai/gpt-4o',
  tools: { readFileTool },
});
