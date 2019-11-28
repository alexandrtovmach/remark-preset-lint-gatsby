# remark-preset-lint-gatsby

[Remark](https://github.com/remarkjs/remark) preset with settings for linting markdown Gatsby docs.

## Install

```sh
npm i remark-preset-lint-gatsby
# or
yarn add remark-preset-lint-gatsby
```

Add preset to [remark configuration](https://github.com/unifiedjs/unified-engine/blob/master/doc/configure.md) as plugin:

```js
{
  "plugins": [
    "remark-preset-lint-gatsby"
  ]
}
```

## Rules

Includes [`remark-preset-lint-markdown-style-guide`](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-file-extension) with few overrides and addtional rules below:

| Rule                                                                                                                                            | Setting                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`checkbox-character-style`](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-checkbox-character-style)                 | `{checked: "x", unchecked: " "}`                                                                                                                      |
| [`checkbox-content-indent`](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-checkbox-content-indent)                   |                                                                                                                                                       |
| [`emphasis-marker`](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-emphasis-marker)                                   | `'_'`                                                                                                                                                 |
| [`fenced-code-flag`](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-fenced-code-flag)                                 | [languages list](./src/languages.js) based on [Gtasby Styleguide](https://www.gatsbyjs.org/contributing/gatsby-style-guide/#code-formatting-type-tab) |
| [`final-newline`](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-final-newline)                                       |                                                                                                                                                       |
| [`first-heading-level`](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-first-heading-level)                           | `2`                                                                                                                                                   |
| [`item-content-indent`](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-list-item-content-indent)                      | `false`                                                                                                                                               |
| [`list-item-spacing`](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-list-item-spacing)                               | `false`                                                                                                                                               |
| [`maximum-line-length`](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-maximum-line-length)                           | `false`                                                                                                                                               |
| [`no-duplicate-headings`](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-duplicate-headings)                       | `false`                                                                                                                                               |
| [`no-duplicate-headings-in-section`](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-duplicate-headings-in-section) |                                                                                                                                                       |
| [`no-emphasis-as-heading`](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-emphasis-as-heading)                     | `false`                                                                                                                                               |
| [`no-heading-indent`](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-heading-indent)                               |                                                                                                                                                       |
| [`no-heading-punctuation`](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-heading-punctuation)                     | `'.'`                                                                                                                                                 |
| [`no-tabs`](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-tabs)                                                   |                                                                                                                                                       |
| [`no-trailing-spaces`](https://github.com/verekia/remark-lint-no-trailing-spaces)                                                               |                                                                                                                                                       |
| [`ordered-list-marker-value`](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-ordered-list-marker-value)               | `false`                                                                                                                                               |
| [`prohibited-strings`](https://github.com/Trott/remark-lint-prohibited-strings)                                                                 | [word list](./src/words.js)                                                                                                                           |
| [`unordered-list-marker-style`](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-unordered-list-marker-style)           | `'-'`                                                                                                                                                 |
