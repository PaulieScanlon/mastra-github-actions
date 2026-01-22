import { Agent } from '@mastra/core/agent';
import { readFileTool } from '../tools/blog-editor-tool';
import { readFileSync } from 'fs';
import { join } from 'path';

const styleGuide = readFileSync(join(import.meta.dirname, '..', 'config', 'STYLE_GUIDE.md'), 'utf-8');

export const blogEditorAgent = new Agent({
  id: 'blog-editor-agent',
  name: 'Blog Editor Agent',
  instructions: `You check blog posts for style guide violations. Use readFileTool to read the file, then report any violations of the style guide below.

CRITICAL: Before reporting any issue, verify that the corrected text is DIFFERENT from the current text. If they are the same, DO NOT report it - it means there is no issue.

For each genuine issue where the corrected text differs from current text:
- Line number
- Current text
- Corrected text

If no issues are found (or all "issues" have identical current/corrected text), respond with: "No issues found."

${styleGuide}`,
  model: 'openai/gpt-4o',
  tools: { readFileTool },
});
