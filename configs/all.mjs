// @ts-check

import TypescriptEslint from 'typescript-eslint';
import { default as base } from './base.mjs';
import { default as problems } from './problems.mjs';
import { default as style } from './style.mjs';
import { default as todo } from './todo.mjs';

export default TypescriptEslint.config(
    base,
    problems,
    style,
    todo
);
