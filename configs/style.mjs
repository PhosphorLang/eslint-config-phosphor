// @ts-check

import TypescriptEslint from 'typescript-eslint';
import Stylistic from '@stylistic/eslint-plugin-ts';

export default TypescriptEslint.config(
    {
        plugins: {
            '@stylistic': Stylistic,
        },
        rules:
        {
            'spaced-comment': 'warn',
            'no-multi-spaces': 'warn',
            'no-whitespace-before-property': 'warn',
            'sort-imports': [
                'warn',
                {
                    'ignoreCase': true
                }
            ],
            'capitalized-comments': [
                'warn',
                'always',
                {
                    'ignoreConsecutiveComments': true
                }
            ],
            'no-extra-semi': 'error',
            '@stylistic/space-before-function-paren': [
                'warn',
                'always'
            ],
            '@stylistic/semi': [
                'error',
                'always'
            ],
            '@typescript-eslint/explicit-member-accessibility': [
                'error',
                {
                    'accessibility': 'explicit',
                    'overrides': {
                        'constructors': 'off'
                    }
                }
            ],
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    'selector': 'default',
                    'format': ['camelCase'],
                    'leadingUnderscore': 'forbid',
                    'trailingUnderscore': 'forbid'
                },
                {
                    'selector': 'import',
                    'format': ['PascalCase', 'camelCase'],
                    'leadingUnderscore': 'forbid',
                    'trailingUnderscore': 'forbid'
                },
                {
                    'selector': 'typeLike',
                    'format': ['PascalCase'],
                    'leadingUnderscore': 'forbid',
                    'trailingUnderscore': 'forbid'
                },
                {
                    'selector': 'enumMember',
                    'format': ['PascalCase'],
                    'leadingUnderscore': 'forbid',
                    'trailingUnderscore': 'forbid'
                }
            ],
            '@typescript-eslint/explicit-function-return-type': 'error'
        }
    }
);
