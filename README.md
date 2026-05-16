# oxlint-config-noir

[![Test](https://github.com/ardalanamini/oxlint-config-noir/actions/workflows/test.yml/badge.svg)](https://github.com/ardalanamini/oxlint-config-noir/actions/workflows/test.yml)
[![Npm Version](https://img.shields.io/npm/v/oxlint-config-noir.svg)](https://www.npmjs.com/package/oxlint-config-noir)
[![License](https://img.shields.io/github/license/ardalanamini/oxlint-config-noir.svg)](https://github.com/ardalanamini/oxlint-config-noir/blob/master/LICENSE)
[![Pull Requests](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/ardalanamini/oxlint-config-noir/pulls)
[![Known Vulnerabilities](https://snyk.io/test/github/ardalanamini/oxlint-config-noir/badge.svg?targetFile=package.json)](https://snyk.io/test/github/ardalanamini/oxlint-config-noir?targetFile=package.json)
[![Npm Total Downloads](https://img.shields.io/npm/dt/oxlint-config-noir.svg)](https://www.npmjs.com/package/oxlint-config-noir)
[![Npm Monthly Downloads](https://img.shields.io/npm/dm/oxlint-config-noir.svg)](https://www.npmjs.com/package/oxlint-config-noir)
[![Github Stars](https://img.shields.io/github/stars/ardalanamini/oxlint-config-noir.svg?style=social&label=Stars)](https://github.com/ardalanamini/oxlint-config-noir)
[![Github Forks](https://img.shields.io/github/forks/ardalanamini/oxlint-config-noir.svg?style=social&label=Fork)](https://github.com/ardalanamini/oxlint-config-noir)

Noir is an opinionated sharable `Oxlint` config.

## Installation

### Pnpm

```shell
pnpm add -D oxlint oxlint-config-noir
```

### Bun

```shell
bun add -d oxlint oxlint-config-noir
```

## Usage

Add `noir` configs to your `Oxlint` configuration file (`oxlint.config.ts`):

```typescript
import { defineConfig } from "oxlint";
import { config } from "oxlint-config-noir";

export default defineConfig({
  extends: [config.base],
});
```

### With [Stylistic](https://eslint.style) support:

```typescript
import { defineConfig } from "oxlint";
import { config } from "oxlint-config-noir";

export default defineConfig({
  extends: [config.stylistic],
});
```

### With [Import](https://github.com/import-js/eslint-plugin-import) ordering support:

```typescript
import { defineConfig } from "oxlint";
import { config } from "oxlint-config-noir";

export default defineConfig({
  extends: [config.importJS],
});
```

### With `Export` support:

```typescript
import { defineConfig } from "oxlint";
import { config } from "oxlint-config-noir";

export default defineConfig({
  extends: [config.exports],
});
```

### With all the configs at once:

```typescript
import { defineConfig } from "oxlint";
import { config } from "oxlint-config-noir";

export default defineConfig({
  extends: [config.recommended],
});
```
