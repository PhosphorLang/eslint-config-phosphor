# ESLint Configs for the Phosphor Compiler Project

This package provides multiple ESLint configurations used by the Phosphor compiler. \
It is based on the recommended rules from [ESLint](https://github.com/eslint/eslint) and
[typescript-eslint](https://github.com/typescript-eslint/typescript-eslint).

## Configs

These are the available configurations:

- **default**: The default configuration which includes all other configs.
- **base**: The base can be used instead of the default and combined with any other non-default configuration.
- **problems**: Contains only rules catching possible problems and enforcing best practices.
- **style**: Contains additional stylistic rules.
- **todo**: Contains a rule marking "TODO:" and "FIXME:" comments for them to be easier found.

## Usage

Install via NPM:

```bash
npm install eslint-config-phosphor
```

Then import the default config in your `eslint.config.mjs` and add it to your Typescript ESLint config::

```javascript
import TypescriptEslint from 'typescript-eslint';
import EslintConfigPhosphor from 'eslint-config-phosphor'; // <-- This here is the relevant import.

export default TypescriptEslint.config(
    EslintConfigPhosphor.default, // <-- This here is the relevant addition to the Typescrpipt ESLint config.
    {
        files: ["**/*.ts"],
        languageOptions: {
            ecmaVersion: 2024,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
);
```

Or if you want to use (for example) everything but the stylistic rules:

```javascript
import TypescriptEslint from 'typescript-eslint';
import EslintConfigPhosphor from 'eslint-config-phosphor';

export default TypescriptEslint.config(
    EslintConfigPhosphor.base,
    EslintConfigPhosphor.problems,
    EslintConfigPhosphor.todo,
    {
        files: ["**/*.ts"],
        languageOptions: {
            ecmaVersion: 2024,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
);
```

## Notes:

This ruleset is meant to be used for Typescript projects, as such it contains the `typescript-eslint` parser and rules.
It is not meant to be used for Javascript projects. \
The "ecmaVersion" (in "languageOptions") is set to 2024.
If you can only support a lower version of ECMAScript you have to overwrite it. \

We recommend the following config for Typescript:

```json
{
    "strict": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitAny": true,
    "noImplicitOverride": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
}
```

As such, the provided rulesets contain no rules that overlap with what the Typescript compiler provides under these settings.

## Contributing

Feel free to suggest any new configs or rules if you feel it matches the intentation or style of the Phosphor compiler's code base!
