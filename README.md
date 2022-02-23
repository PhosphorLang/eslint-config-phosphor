# ESLint Configs for the Phosphor Compiler Project

This package provides multiple ESLint configurations used by the Phosphor compiler. \
It is based on the recommended rules from [ESLint](https://github.com/eslint/eslint) and
[typescript-eslint](https://github.com/typescript-eslint/typescript-eslint).

## Configs

These are the available configurations:

- **eslint-config-phosphor**: The default configuration which includes all other configs.
- **eslint-config-phosphor/base**: The base can be used instead of the default and combined with any other non-default configuration.
- **eslint-config-phosphor/problems**: Contains only rules catching possible problems and enforcing best practices.
- **eslint-config-phosphor/style**: Contains additional stylistic rules.
- **eslint-config-phosphor/todo**: Contains a rule marking "TODO:" and "FIXME:" comments for them to be easier found.

## Usage

Install via NPM:

```bash
npm install eslint-config-phosphor
```

And add the following to your `.eslintrc.json`:

```json
{
    "extends": [
        "eslint-config-phosphor"
    ]
}
```

Or if you want to use (for example) everything but the stylistic rules:

```json
{
    "extends": [
        "eslint-config-phosphor/base",
        "eslint-config-phosphor/problems",
        "eslint-config-phosphor/todo"
    ]
}
```

## Notes:

This ruleset is meant to be used for Typescript projects, as such it contains the `typescript-eslint` parser and rules.
For it to work you have to provide a "project" (the "tsconfig.json") in the "parserOptions".
It is not meant to be used for Javascript projects. \
The "es6" environment is set to true and "ecmaVersion" (in "parserOptions") to 2021.
If you can only support a lower version of ECMAScript you have to overwrite these values. \
No other environment is set by default. We recommend setting at least "node" and "browser" to true or false matching your environment.

We recommend the following config for Typescript:

```json
{
    "strict": true,
    "noImplicitReturns": true,
    "noImplicitAny": true,
    "noImplicitThis": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
}
```

As such, the provided rulesets contain no rules that overlap with what the Typescript compiler provides under these settings.

## Contributing

Feel free to suggest any new configs or rules if you feel it matches the intentation or style of the Phosphor compiler's code base!
