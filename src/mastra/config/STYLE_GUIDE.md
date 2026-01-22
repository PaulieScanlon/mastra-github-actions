# Technical Blog Style Guide

This guide defines the rules for writing technical blog posts. Only flag violations where the text needs to be changed.

---

## 1. Frontmatter

Required fields:
- `title` - The post title (in quotes)
- `publishedAt` - Date in YYYY-MM-DD format (in quotes)
- `summary` - Brief description (in quotes)
- `author` - Author name (in quotes)
- `draft` - Boolean (true/false, no quotes)
- `categories` - Array format: `["changelogs"]`

✗ `categories: "changelogs"`
✓ `categories: ["changelogs"]`

---

## 2. Headings

### Title/H1
Use title case (capitalize first letter of each word).

✓ `title: "Mastra Changelog 2026-01-20"`
✓ `title: "Server Adapters and Composite Storage"`

### H2, H3, and H4
Use sentence case (only first word capitalized).

✗ `## Other Notable Updates`
✓ `## Other notable updates`

✗ `## What's Next`
✓ `## What's next`

✗ `### Server Adapters`
✓ `### Server adapters`

✗ `## Preview: The Next Evolution`
✓ `## Preview: the next evolution`

✗ `#### New Model Support`
✓ `#### New model support`

### Exceptions
- Dates are exempt: `## Mastra Changelog 2026-01-20` is correct
- Proper nouns stay capitalized: `## Using Mastra with React` is correct
- Product names stay capitalized: `## TanStack Query migration` is correct

### Heading Hierarchy
Do not skip levels. H2 must come before H3.

✗ Going from `##` directly to `####`
✓ Going from `##` to `###`

### Content After Headings
A heading must be followed by paragraph text, not another heading or code block.

✗
```
## Section Title
### Subsection
```

✓
```
## Section Title
Brief intro paragraph explaining this section.

### Subsection
```

✗
```
## Configuration
\`\`\`typescript
const config = {};
\`\`\`
```

✓
```
## Configuration
Here's how to configure the storage layer:

\`\`\`typescript
const config = {};
\`\`\`
```

---

## 3. Methods and Code References

### Method Names
Always prefix with a dot and wrap in backticks.

✗ `generate()`
✓ `.generate()`

✗ `stream()`
✓ `.stream()`

✗ generate
✓ `.generate()`

### In Headings
✗ `## Human-in-the-Loop for generate()`
✓ `## Human-in-the-loop for \`.generate()\``

### Inline Code (Must Use Backticks)
All code references in prose must be wrapped in backticks:

**Package names:**
✗ @mastra/core
✓ `@mastra/core`

✗ ai-sdk
✓ `ai-sdk`

**Method names:**
✗ generate()
✓ `.generate()`

**File names:**
✗ package.json
✓ `package.json`

**Config values and booleans:**
✗ Set draft to true
✓ Set `draft` to `true`

**Variable and property names:**
✗ The connectionString property
✓ The `connectionString` property

**CLI commands:**
✗ Run npm install
✓ Run `npm install`

**Version numbers in package context:**
✗ @mastra/core (0.1.27-alpha.64)
✓ `@mastra/core` (0.1.27-alpha.64)

---

## 4. Code Blocks

### Language Attribute
Every code block must specify a language.

✗ \`\`\`
✓ \`\`\`typescript
✓ \`\`\`bash
✓ \`\`\`json
✓ \`\`\`shell

### Introductory Text
Text immediately before a code block must end with a colon.

✗ `Here's an example`
✓ `Here's an example:`

✗ `You can configure it like this`
✓ `You can configure it like this:`

---

## 5. Lists

### Labeled List Items
Use bold label followed by colon, no trailing period.

✓ `- **Structured Output**: Pass a Zod schema to get typed results`
✗ `- **Structured Output** - Pass a Zod schema to get typed results.`
✗ `- **Structured Output**: Pass a Zod schema to get typed results.`

### With PR Links
Place PR link after the label, before the colon.

✓ `- **Structured Output** ([PR #11701](url)): Pass a Zod schema to get typed results`

### Introductory Text
Text introducing a bullet list should end with a colon.

✗ `The storage primitive handles`
✓ `The storage primitive handles:`

---

## 6. Links

### Link Text
Use descriptive text, never "click here" or "here".

✗ `[click here](url)`
✓ `[View the documentation](url)`

✗ `[here](url)`
✓ `[full release notes](url)`

### PR Links
Use consistent format in parentheses: `([PR #1234](url))`

### No Empty Links
Links must have text content.

---

## 7. Images

### Alt Text
All images must have alt text.

✗ `![](image.png)`
✓ `![Model settings in Mastra local dev](image.png)`

---

## 8. YouTube Embeds

Include `?rel=0` in YouTube URLs to disable related videos.

✗ `src="https://www.youtube.com/embed/spGlcTEjuXY"`
✓ `src="https://www.youtube.com/embed/spGlcTEjuXY?rel=0"`

---

## 9. Release Tags

For changelog posts, use the release tag format after the intro paragraph:

✓ `**Release:** \`@mastra/core@1.0.0\``

---

## 10. Package Version Listings

When listing package versions, use this format:

✓ `- \`@mastra/core\` (0.1.27-alpha.64)`
✓ `- \`@mastra/evals\` (0.0.1-alpha.0) [NEW]`

---

## 11. Spelling

Check for obvious spelling errors. Ignore:
- Technical terms
- Product names (Mastra, React, TypeScript)
- Code and variable names
- Package names

---

## DO NOT FLAG

The following are style preferences, not violations:
- Active vs passive voice
- Sentence length or complexity
- Use of contractions (it's, don't, we're)
- Informal tone or emoji usage
- Oxford comma usage
- Paragraph length
- Sentence fragments (often intentional for emphasis)
- Sign-off style ("Happy building! 🚀")

---

## Output Rules

1. ONLY report lines that need to be CHANGED
2. If current text equals corrected text, DO NOT report it
3. Skip lines that are already correct
4. Never say "no change needed" or "correct as is"
