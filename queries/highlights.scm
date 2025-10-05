; Brewfile-specific keywords
[
  "tap"
  "brew"
  "cask"
  "mas"
  "vscode"
  "whalebrew"
  "cask_args"
] @keyword

; Strings
(string) @string

; Symbols
(symbol) @constant.builtin

; Numbers
(number) @number

; Booleans
(boolean) @boolean

; Comments
(comment) @comment

; Hash keys in arguments
(pair
  key: (identifier) @property)

; Array/Hash delimiters
[
  "["
  "]"
  "{"
  "}"
] @punctuation.bracket

; Commas and colons
[
  ","
  ":"
] @punctuation.delimiter
