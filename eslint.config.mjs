import { defineConfig, globalIgnores } from 'eslint/config';
import mocha from 'eslint-plugin-mocha';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([
    globalIgnores(['node_modules/*', 'output/*', '.idea/*', '**/yarn.lock']),
    {
        extends: compat.extends('eslint:recommended'),

        plugins: {
            mocha
        },

        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.mocha,
                actor: true,
                within: true,
                Feature: true,
                Scenario: true,
                xScenario: true,
                Before: true,
                BeforeSuite: true,
                AfterSuite: true,
                codecept_helper: true
            },

            ecmaVersion: 'latest',
            sourceType: 'module'
        },

        rules: {
            'mocha/no-exclusive-tests': 'error',
            'linebreak-style': ['error', 'unix'],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            'comma-dangle': ['error', 'never'],
            eqeqeq: 'error'
        }
    }
]);
