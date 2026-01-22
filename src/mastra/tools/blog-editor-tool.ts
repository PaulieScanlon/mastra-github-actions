import { createTool } from '@mastra/core/tools';
import { z } from 'zod';
import { readFileSync } from 'fs';

export const readFileTool = createTool({
  id: 'read-file',
  description: 'Read the content of a file given its path',
  inputSchema: z.object({
    filePath: z.string().describe('Path to the file to read'),
  }),
  outputSchema: z.object({
    content: z.string(),
    filePath: z.string(),
  }),
  execute: async ({ filePath }) => {
    const content = readFileSync(filePath, 'utf-8');
    return { content, filePath };
  },
});

