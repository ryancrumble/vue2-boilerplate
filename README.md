# vue2-boilerplate

A boilerplate repo for Vue v2 applications.

#### Installed Packages
- For Typescript writing support `vue-class-component`, `vue-property-decorator`, and `vuex-module-decorators`.
- `Sass` for css pre-processor.
- `eslint` with `prettier` for linting and formatting.
- `jest` for unit testing.
- `husky` with `lint-staged` for pre-commit checks.

#### Additional Packages
- Depending on Api service, use `axios` or `apollo-graphql`.
- For datetime, use `date-fns` (`moment.js` now deprecated).
- Also consider `lodash.js` (core build) for utility library.
- E2E testing, use `Cypress`.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
