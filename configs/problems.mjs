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
            'no-extra-semi': 'error',
            'no-throw-literal': 'error',
            'no-cond-assign': 'error',
            'no-param-reassign': 'error',
            'guard-for-in': 'error',
            'curly': 'error',
            'prefer-promise-reject-errors': 'error',
            'prefer-const': [
                'error',
                {
                    'ignoreReadBeforeAssign': true
                }
            ],
            'no-constant-condition': [
                'error',
                {
                    'checkLoops': false
                }
            ],
            '@typescript-eslint/no-unused-vars': 'off', // Provided by the tsconfig.json
            '@typescript-eslint/no-unused-expressions': 'warn',
            '@typescript-eslint/no-floating-promises': 'warn',
            '@typescript-eslint/no-misused-promises': 'warn',
            '@typescript-eslint/promise-function-async': 'error',
            '@typescript-eslint/switch-exhaustiveness-check': 'error',
            '@typescript-eslint/restrict-plus-operands': 'error',
            '@stylistic/semi': [
                'error',
                'always'
            ]
        }
    }
);
