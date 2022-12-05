# @fremtind/jkl-action-paths-filter

Inspired by [dorny/paths-filter](https://github.com/dorny/paths-filter), but simplified for our use-case.

## Usage

```yaml
- name: Check for changes that require extra verification
  if: "!contains(github.event.sender.login, 'fremtind-bot')"
  uses: ./actions/paths-filter
  id: changes
  with:
      filters: |
          testlint:
            - "**/*.js"
            - "**/*.scss"
            - "**/*.ts"
            - "**/*.tsx"
            - "pnpm-lock.yaml"
          visual:
            - "cypress/**"
            - "packages/**/*.mdx"
            - "**/*.js"
            - "**/*.scss"
            - "**/!(*.d|*.test).ts"
            - "**/!(*.test).tsx"
            - "pnpm-lock.yaml"
          preview:
            - "portal/src/texts/**"

- name: Setup pnpm
  if: (steps.changes.outputs.visual == 'true' || steps.changes.outputs.testlint == 'true') && !contains(github.event.sender.login, 'fremtind-bot')
  uses: pnpm/action-setup@v2
  with:
      version: 7
```
