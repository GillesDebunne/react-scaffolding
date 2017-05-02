# passenger-ui

# Initial setup

Clone this repository. Run `yarn` to install all dependencies, then

```
yarn start
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
See its `README` for details [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

# Environment setup

## prettier

[Prettier](https://github.com/prettier/prettier) is an opinionated code formatter. 

It is configured as a pre-commit hook, and the entire JS code is formatted by prettier on commit.

Install a prettier extension in your IDE and use the same configuration (see `package.json`) to format from your IDE.

## flow
[flow](https://flow.org/) is a JS type checker. Add:
```
// @flow
```
at the beginning of all JS files to enable type checking.

Install a flow extension in your IDE and make sure to add types when requested.

Refrain from using `any`, do not commit code with flow errors.

You can globally install [flow-coverage-report](https://github.com/rpl/flow-coverage-report) to create a flow coverage report of the entire project. Your IDE should also be able to display the flow coverage of the currently opened file.

## Storybook
[Storybook](https://storybooks.js.org/) is used to develop and test components in isolation. Start it using:

```
yarn storybook
```

Create stories for all dumb components, with nominal and limit cases. For `MyComponent.js`, create an associated `MyComponent.stories.js` file, located next to it.

## ESLint

The configuration is pretty restricitive at the moment, and will be relaxed if needed. 
It is based on the [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) plugin, with [react](https://github.com/yannickcr/eslint-plugin-react) and [flowtype](https://github.com/gajus/eslint-plugin-flowtype) added.

A config for [prettier](https://www.npmjs.com/package/eslint-config-prettier) is added to disable all prettier-handled formatting in the above rules.

Make sure your IDE enforces this configuration.

## Jest

Test files have a `.test.js` extension. They should be located next to the main file they exercise.

Run all tests (by default only those affected by your ongoing changes since the last commit) using:
```
yarn test
```

To get a test code coverage report of the entire code base, run:

```
yarn coverage
```

## TODO

Onboarding guide when starting from scratch

Add Checks and metrics on CI

Explain and use snapshot testing

