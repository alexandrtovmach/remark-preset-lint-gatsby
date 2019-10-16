/**
 * Please save alphabetical order of rules
 */

module.exports.plugins = [
  require("remark-lint"),
  [require("remark-frontmatter"), "yaml"], // YAML style of meta info in top of file
  require("remark-preset-lint-recommended"), // recommended rules from remark
  [require("remark-lint-first-heading-level"), 2], // first header level in top of file
  [require("remark-lint-list-item-indent"), false], // indentation for list items
  [require("remark-lint-maximum-line-length"), false], // max line length
  [
    require("remark-lint-prohibited-strings"), // wording parse
    require("./src/words")
  ],
  [require("remark-lint-unordered-list-marker-style"), "-"], // unordered list markers
  [require("remark-lint-blockquote-indentation"), 2], // indentation for blockquotes
  [
    require("remark-lint-checkbox-character-style"), // checkbox marker style
    {
      checked: "x",
      unchecked: " "
    }
  ],
  require("remark-lint-checkbox-content-indent"), // checkbox indentation
  [require("remark-lint-code-block-style"), "fenced"], // codebox style
  require("remark-lint-definition-spacing"), // avoid whitespaces in definition labels
  [
    require("remark-lint-fenced-code-flag"), // allowed list of languages for codebox
    require("./src/languages")
  ],
  [require("remark-lint-fenced-code-marker"), "`"], // quote for codebox
  require("remark-lint-final-definition"), // markdown definition to be placed at the end of file
  [require("remark-lint-heading-style"), "atx"], // header style
  require("remark-lint-no-consecutive-blank-lines"), 
  require("remark-lint-no-file-name-articles")
  // require("remark-lint-no-file-name-consecutive-dashes"),
  // require("remark-lint-no-file-name-outer-dashes"),
  // require("remark-lint-no-heading-indent"),
  // [require("remark-lint-no-literal-urls"), false],
  // require("remark-lint-no-multiple-toplevel-headings"),
  // require("remark-lint-no-shell-dollars"),
  // require("remark-lint-no-table-indentation"),
  // require("remark-lint-no-tabs"),
  // require("remark-lint-no-trailing-spaces"),
  // require("remark-lint-rule-style"),
  // [require("remark-lint-strong-marker"), "*"],
  // [require("remark-lint-table-cell-padding"), "padded"],
  // require("remark-lint-table-pipes"),
];
