# Changed Files

Finds files that have uncommitted changes using [simple-git](https://github.com/steveukx/git-js). In other words, the action finds files that have been changed or created by other actions.

Uses [micromatch](https://github.com/micromatch/micromatch#why-use-micromatch) for pattern matching.

## Usage

```yaml
- name: Look for changed files
  uses: ./.github/actions/changed-files
  id: lfcf
  with:
      # See the micromatch docs for more examples: https://github.com/micromatch/micromatch#matching-features
      patterns: |
          **/__image_snapshots__/*
          **/new.txt

- name: Upload changed files
  if: steps.lfcf.outputs.has_changed_files == 'true'
  uses: actions/upload-artifact@v2
  with:
      name: changed-files
      # GitHub will find the lowest common folder to reduce the number of folders
      # in the uploaded artifact. If you want to preserve the same folder structure
      # as in your repository when downloading the artifact, include a file from
      # the root of your repository.
      path: |
          package.json
          ${{ steps.lfcf.outputs.changed_files }}
```

## Input

### input.patterns

A [`micromatch`-compatible pattern](https://github.com/micromatch/micromatch#matching-features), optionally a multiline string with several patterns. Refer to the `micromatch` documentation for advanced pattern examples.

**Type:** `String` (required)

### input.ignore

An [option passed to `micromatch`](https://github.com/micromatch/micromatch#optionsignore), optionally a multiline string with several patterns. Refer to the `micromatch` documentation for advanced pattern examples.

**Type:** `String`

### input.output

Set it to `array` if you want a stringified JSON array as output instead of the default multiline string.

**Type:** `"string" | "array"`

**Default:** `"string"`

## Outputs

### outputs.has_changed_files

`true` if there are new or changed files matching a pattern, otherwise it's `false`.

**Type:** `Boolean`

### outputs.changed_files

Either a stringified JSON array or a string with files separated by newline, depending on the [`output` variable](#inputoutput).

**Type:** `String`

**Default:** a string with files separated by newline
