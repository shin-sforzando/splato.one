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
  - [Storybook](#storybook)
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
  - [Supabase](https://app.supabase.com/)
- [git-secret](https://git-secret.io)

## How to

```shell
$ yarn run
<snip>
   - build
      next build
   - build-storybook
      build-storybook
   - chromatic
      npx chromatic --project-token=$CHROMATIC_PROJECT_TOKEN
   - dev
      next dev
   - hide
      git secret hide
   - lint
      next lint --dir src
   - lint:fix
      yarn lint --fix
   - prepare
      husky install
   - prettier
      prettier --write './**/*.{js,jsx,ts,tsx,json}'
   - reveal
      git secret reveal
   - start
      next start
   - storybook
      start-storybook -p 6006
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

`yarn dev` to start development server.

### Test

To test using Jest, `yarn test:jest`.

To test using Playwright, `yarn test:e2e`.

To test both, `yarn test`.

### Storybook

Every time you push to GitHub, it is automatically deployed to Chromatic.

`yarn storybook` to open Storybook manually.

### Document

#### CHANGELOG.md

To update CHANGELOG.md, `git cliff --unreleased --output CHANGELOG.md`.

### Deploy

Every time you push to GitHub, it is automatically deployed to Vercel.

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
