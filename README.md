# eslint-config

This repository contains some custom [ESLint](https://eslint.org/) rules.

This project only works with Node.js 12 and later.

## Rules

### readable-stringify

The `readable-stringify` rule can be used to enforce the use of [JSON.stringify](
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
with 3 arguments. The last arguments should be a number to ensure the output
of JSON.stringify is indented and human readable.

This rule takes the following option:
* `spacing` (default value `2`): the expected value for the third argument

## Contributing

### Set up

In order to run this project, you will need [Node.js](https://nodejs.org/). On
MacOS or Linux, the easiest way to install Node.js is to use [nvm](https://github.com/nvm-sh/nvm).

Also, you will need to install ESLint locally. This can be done using npm (which is 
provided with Node.js).

Simply run
```shell script
npm install
```
at the root of the project.

### Running tests

This project has 2 set of tests:
* unit tests - in the `tests` directory
* end to end tests - in the `e2e` directory

To start the unit tests run
```shell script
npm run test-unit
```

To start the 2e2 tests run
```shell script
npm run test-2e2
```

you can also run all the tests at once with
```shell script
npm test
```

### Adding a new rule

To add a new rule, please add a new file in the `rules` directory with the code
of the rule inside.

Also, please consider updating the unit tests and the end-to-end tests to cover
the new rule.
