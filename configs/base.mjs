// @ts-check

import TypescriptEslint from 'typescript-eslint';
import Stylistic from '@stylistic/eslint-plugin-ts';

export default TypescriptEslint.config(
    TypescriptEslint.configs.eslintRecommended,
    TypescriptEslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            ecmaVersion: 2024,
        },
        plugins: {
            '@stylistic': Stylistic,
        }
    }
);
