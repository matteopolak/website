module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:svelte/recommended'],
	plugins: ['svelte', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	settings: {
		'svelte/typescript': () => require('typescript')
	},
	parserOptions: {
		project: './tsconfig.json',
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
	}
};
