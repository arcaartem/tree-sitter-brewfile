# Contributing to tree-sitter-brewfile

Thank you for your interest in contributing!

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   brew install tree-sitter
   ```

2. Generate the parser:
   ```bash
   tree-sitter generate
   ```

3. Run tests:
   ```bash
   tree-sitter test
   ```

## Adding Test Cases

Test cases are located in `test/corpus/`. Each test file follows this format:

```
================================================================================
Test name
================================================================================

<input Brewfile syntax>

--------------------------------------------------------------------------------

<expected parse tree>
```

## Improving Syntax Highlighting

Highlight queries are in `queries/highlights.scm`. Follow the tree-sitter query syntax.

## Submitting Changes

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes and add tests
4. Ensure tests pass (`tree-sitter test`)
5. Commit with clear message
6. Push and create a pull request

## Code of Conduct

Be respectful and constructive in all interactions.
