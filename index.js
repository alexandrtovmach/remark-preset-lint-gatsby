/**
 * Please save alphabetical order of rules
 */

module.exports.plugins = [
  require("remark-lint"),
  require("remark-preset-lint-markdown-style-guide"), // rules preset
  require("remark-frontmatter"), // YAML style of meta info in top of file
  require("remark-lint-checkbox-content-indent"), // checkbox indentation
  require("remark-lint-final-newline"), // additional line at the end of file
  require("remark-lint-no-heading-indent"), // prevent trailing space for headers
  require("remark-lint-no-tabs"), // force using spaces instead of tabs
  require("remark-lint-no-trailing-spaces"), // prevent trailing spaces for all blocks
  [require("remark-lint-emphasis-marker"), "_"], // emphasis marker
  [require("remark-lint-first-heading-level"), 2], // first header level in top of file
  [require("remark-lint-list-item-indent"), false], // indentation for list items
  [require("remark-lint-list-item-spacing"), false], // additional line for list item
  [require("remark-lint-maximum-line-length"), false], // max line length
  [require("remark-lint-no-emphasis-as-heading"), false], // custom stylization for headers
  [require("remark-lint-ordered-list-marker-value"), false], // turned off until https://github.com/remarkjs/remark-lint/pull/219 will be merged
  [require("remark-lint-unordered-list-marker-style"), "-"], // unordered list markers
  [
    require("remark-lint-checkbox-character-style"), // checkbox marker style
    {
      checked: "x",
      unchecked: " "
    }
  ],
  [
    require("remark-lint-fenced-code-flag"), // allowed list of languages for codebox
    require("./src/languages")
  ],
  [
    require("remark-lint-prohibited-strings"), // word grammar parse
    require("./src/words")
  ],
];
