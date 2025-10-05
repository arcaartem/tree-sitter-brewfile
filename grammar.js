module.exports = grammar({
  name: 'brewfile',

  extras: $ => [
    /\s/,
    $.comment,
  ],

  rules: {
    source_file: $ => repeat($._statement),

    _statement: $ => choice(
      $.tap_statement,
      $.brew_statement,
      $.cask_statement,
      $.mas_statement,
      $.vscode_statement,
      $.whalebrew_statement,
      $.cask_args_statement,
      $.comment,
    ),

    // tap "repo/name" or tap "repo/name", "url"
    tap_statement: $ => seq(
      'tap',
      $.string,
      optional(seq(',', $.string)),
    ),

    // brew "package", optional args
    brew_statement: $ => seq(
      'brew',
      $.string,
      optional(seq(',', $.arguments)),
    ),

    // cask "app" or cask "app", args
    cask_statement: $ => seq(
      'cask',
      $.string,
      optional(seq(',', $.arguments)),
    ),

    // mas "app", id: 12345
    mas_statement: $ => seq(
      'mas',
      $.string,
      optional(seq(',', $.arguments)),
    ),

    // vscode "extension"
    vscode_statement: $ => seq(
      'vscode',
      $.string,
    ),

    // whalebrew "image"
    whalebrew_statement: $ => seq(
      'whalebrew',
      $.string,
    ),

    // cask_args appdir: "/Applications"
    cask_args_statement: $ => seq(
      'cask_args',
      $.arguments,
    ),

    // Arguments can be key: value pairs
    arguments: $ => seq(
      $.pair,
      repeat(seq(',', $.pair)),
    ),

    pair: $ => seq(
      field('key', $.identifier),
      ':',
      field('value', choice(
        $.array,
        $.hash,
        $.symbol,
        $.string,
        $.number,
        $.boolean,
        $.identifier,
      )),
    ),

    // Array: ["item1", "item2"]
    array: $ => seq(
      '[',
      optional(seq(
        $._array_element,
        repeat(seq(',', $._array_element)),
        optional(','),
      )),
      ']',
    ),

    _array_element: $ => choice(
      $.string,
      $.number,
      $.boolean,
      $.symbol,
      $.identifier,
    ),

    // Hash: { key: value, key2: value2 }
    hash: $ => seq(
      '{',
      optional(seq(
        $.pair,
        repeat(seq(',', $.pair)),
        optional(','),
      )),
      '}',
    ),

    identifier: $ => /[a-z_][a-z0-9_]*/,

    symbol: $ => /:[a-z_][a-z0-9_]*/,

    string: $ => /"[^"]*"/,

    number: $ => /\d+/,

    boolean: $ => choice('true', 'false'),

    comment: $ => /#[^\n]*/,
  }
});
