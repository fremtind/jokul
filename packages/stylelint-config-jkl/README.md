# `@fremtind/stylelint-config-jkl`

Jøkul config for [stylelint](https://github.com/stylelint/stylelint).

Based on the following rulesets:

-   [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
-   [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss)

## Installing

```bash
$ npm i --save stylelint @fremtind/stylelint-config-jkl
$ yarn add -D stylelint @fremtind/stylelint-config-jkl
```

## Usage

Create a file `stylelint.config.js` in the same directory as your `package.json`, and extend this config:

```javascript
module.exports = {
    extends: "@fremtind/stylelint-config-jkl",
};
```

Add a script to your `package.json`:

```json
"lint:styles": "stylelint '**/*.{css,scss,sass}' --cache"
```

Add `.stylelintcache` to your `.gitignore`.

## Rules

Rules are organized in separate files in the `rules/` folder according to their seciton in [List of rules](https://stylelint.io/user-guide/rules/list).

## Example and tests

The rules are tested against an example stylesheet in `examples/styles.scss`.
