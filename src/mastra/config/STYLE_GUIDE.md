# Blog Style Guide

## Headings

H1/title: Use title case (capitalize first letter of each word)
H2 and H3: Use sentence case (only first word capitalized)

Examples of H2/H3 violations:
- "## Other Notable Updates" → "## Other notable updates"
- "## What's Next" → "## What's next?"
- "## Preview: The Next Evolution" → "## Preview: The next evolution"

Dates in headings are exempt from case rules.

## Frontmatter

Required fields: title, publishedAt, summary, author, draft, categories

## Images

All images must have alt text.

## Links

No empty link text.

## Lists

List items with a bold label should use a colon separator and not end with a period.

Example: `- **Structured Output** ([PR #11701](...)): Pass a Zod schema to get typed results`

Not: `- **Structured Output** ([PR #11701](...)) - Pass a Zod schema to get typed results.`

## Code Blocks

Text directly before a code block should end with a colon.

Example: "Composite storage lets you choose the right backend per domain:"

Code blocks must have a language attribute (e.g., ```typescript, ```bash, ```json).

## Methods

Mastra methods should be prefixed with a dot and surrounded by backticks.

Example: `.generate()` not `generate()`

In headings: "## Human-in-the-Loop for `.generate()`"

## Spelling

Check for obvious spelling errors. Ignore technical terms and product names.
