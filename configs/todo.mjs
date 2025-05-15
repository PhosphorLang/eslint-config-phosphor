// @ts-check

import TypescriptEslint from 'typescript-eslint';

export default TypescriptEslint.config(
    {
        rules:
        {
            'no-warning-comments': [
                'warn',
                {
                    'terms': [
                        'TODO:',
                        'FIXME:'
                    ],
                    'location': 'anywhere'
                }
            ]
        }
    }
);
