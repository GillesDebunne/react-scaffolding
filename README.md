# passenger-ui

## Install

Clone this repository. Run `yarn` to install dependencies, then

```
npm start
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
See its `README` for details [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Development

### prettier

[Prettier](https://github.com/prettier/prettier) is installed as a pre-commit hook.

All JS code is hence formatted by prettier on commit.

Install a prettier extension in your IDE and use the same configuration (see `package.json`) to format from your IDE.

### flow
[flow](https://flow.org/) is configured in the project. Add:
```
// @flow
```
at the beginning of all JS files to enable type checking.

Install a flow extension in your IDE and make sure to add types when requested.
Refrain from using `any`, do not commit code with flow errors.

storybook

eslint


