# splato.one

<!-- Badges -->

[![Last Commit](https://img.shields.io/github/last-commit/shin-sforzando/splato.one)](https://github.com/shin-sforzando/splato.one/graphs/commit-activity)
[![CI](https://github.com/shin-sforzando/splato.one/actions/workflows/ci.yml/badge.svg)](https://github.com/shin-sforzando/splato.one/actions/workflows/ci.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

<!-- Screenshots -->

![Splatoon3](https://user-images.githubusercontent.com/32637762/184409319-825268ca-bedc-4a69-929f-a55ee2ebc06d.png)

<!-- Synopsis -->

A service to record your Splatoon&reg;3 battles.

<!-- TOC -->

- [Prerequisites](#prerequisites)
- [How to](#how-to)
  - [Setup](#setup)
    - [Reveal secrets](#reveal-secrets)
  - [Develop](#develop)
  - [Test](#test)
  - [Document](#document)
    - [CHANGELOG.md](#changelogmd)
  - [Deploy](#deploy)
- [Misc](#misc)
  - [Notes](#notes)
  - [LICENSE](#license)
  - [Contributors](#contributors)

## Prerequisites

- Node.js
  - Next.js
    - [next-axiom](https://github.com/axiomhq/next-axiom) as **Logger**
  - ESLint
  - Prettier
  - Stylelint
  - Jest
  - Playwright
  - Storybook
- Tailwind CSS v3+
- [git-secret](https://git-secret.io)

## How to

```shell
$ yarn run
<snip>
info Project commands
   - build
      next build
   - dev
      next dev
   - hide
      git secret hide
   - lint
      next lint --fix --dir src
   - prepare
      husky install
   - prettier
      prettier --write './**/*.{js,jsx,ts,tsx,json}'
   - reveal
      git secret reveal
   - start
      next start
   - stylelint
      stylelint --fix './**/*.{css,scss,sass}'
   - test
      yarn test:jest && yarn test:e2e
   - test:e2e
      playwright test
   - test:jest
      jest --updateSnapshot
   - test:watch
      jest --watchAll
```

### Setup

#### Reveal secrets

To reveal secret files, `yarn reveal`.

To hide secret files,  `yarn hide`.

### Develop

(T. B. D.)

### Test

(T. B. D.)

### Document

#### CHANGELOG.md

To update CHANGELOG.md, `git cliff --unreleased --output CHANGELOG.md`.

### Deploy

(T. B. D.)

## Misc

### Notes

This repository is [Commitizen](https://commitizen.github.io/cz-cli/) friendly, following [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow).
See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

### LICENSE

"Splatoon" is registered trademark of Nintendo.

This project is licensed under the MIT License, see the [LICENSE](./LICENSE) for details.

### Contributors

- [sforzando LLC. and Inc.](https://sforzando.co.jp/)
  - [Shin'ichiro Suzuki](https://github.com/shin-sforzando)
