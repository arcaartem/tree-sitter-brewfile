# tree-sitter-brewfile

[![CI](https://github.com/arcaartem/tree-sitter-brewfile/workflows/CI/badge.svg)](https://github.com/arcaartem/tree-sitter-brewfile/actions)

Tree-sitter grammar for Homebrew Brewfiles with syntax highlighting support.

## Installation

### lazy.nvim

```lua
{
  "nvim-treesitter/nvim-treesitter",
  opts = {
    ensure_installed = { "brewfile" },
  },
  config = function()
    require("nvim-treesitter.parsers").get_parser_configs().brewfile = {
      install_info = {
        url = "https://github.com/arcaartem/tree-sitter-brewfile",
        files = {"src/parser.c"},
        branch = "main",
        generate_requires_npm = true,
        requires_generate_from_grammar = true,
      },
      filetype = "brewfile",
    }
  end,
}
-- Add grammar repo to runtime path for automatic query loading
{
  "arcaartem/tree-sitter-brewfile",
  lazy = false,
}
```

Add filetype detection to `~/.config/nvim/filetype.lua`:

```lua
vim.filetype.add({
  filename = {
    ['Brewfile'] = 'brewfile',
    ['.Brewfile'] = 'brewfile',
  },
})
```

**Note:** Adding the grammar repo as a plugin ensures queries load automatically and update with `:TSUpdate brewfile`.

## Development

```bash
brew install tree-sitter-cli
tree-sitter generate
tree-sitter test
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

MIT
