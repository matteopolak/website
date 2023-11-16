const colours = require('tailwindcss/colors');

const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				'praise': ['Praise', 'sans-serif'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui')
	],
	daisyui: {
		themes: [
			{
				black: {
					...require('daisyui/src/theming/themes')['[data-theme=black]'],
					'.btn-github': {
						background: '#171515',
						border: 'none',
						color: '#fff',
					},
					'.btn-github:hover': {
						background: '#000',
					},
					'.btn-linkedin': {
						color: '#fff',
						border: 'none',
						background: '#152238',
					},
					'.btn-linkedin:hover': {
						background: '#052238',
					},
				}
			},
			{
				synthwave: {
					...require('daisyui/src/theming/themes')['[data-theme=synthwave]'],
					'.btn-github': {
						background: '#4f4f4b',
						border: 'none',
						color: '#fff',
					},
					'.btn-github:hover': {
						background: '#3f3f3b',
					},
					'.btn-linkedin': {
						color: '#fff',
						border: 'none',
						background: '#3a3a59',
					},
					'.btn-linkedin:hover': {
						background: '#2a2a49',
					},
				}
			},
			{
				lofi: {
					...require('daisyui/src/theming/themes')['[data-theme=lofi]'],
					'.btn-github': {
						background: '#4f4f4b',
						border: 'none',
						color: '#fff',
					},
					'.btn-github:hover': {
						background: '#3f3f3b',
					},
					'.btn-linkedin': {
						color: '#fff',
						border: 'none',
						background: '#000133',
					},
					'.btn-linkedin:hover': {
						background: '#000033',
					},
				}
			},
			{
				pastel: {
					...require('daisyui/src/theming/themes')['[data-theme=pastel]'],
					'.btn-github': {
						background: '#4f4f4b',
						border: 'none',
						color: '#fff',
					},
					'.btn-github:hover': {
						background: '#3f3f3b',
					},
					'.btn-linkedin': {
						color: '#fff',
						border: 'none',
						background: '#3d426b',
					},
					'.btn-linkedin:hover': {
						background: '#2d326b',
					},
				}
			},
			{
				light: {
					...require('daisyui/src/theming/themes')['[data-theme=light]'],
					primary: '#9f1239',
					'.btn-github': {
						background: '#171515',
						border: 'none',
						color: '#fff',
					},
					'.btn-github:hover': {
						background: '#000',
					},
					'.btn-linkedin': {
						color: '#fff',
						border: 'none',
						background: '#0077b5',
					},
					'.btn-linkedin:hover': {
						background: '#006097',
					},
				}
			},
			{
				dark: {
					...require('daisyui/src/theming/themes')['[data-theme=dark]'],
					primary: colours.teal[500],
					'.btn-github': {
						background: '#ccc',
						border: 'none',
						color: '#171515',
					},
					'.btn-github:hover': {
						background: '#aaa',
					},
					'.btn-linkedin': {
						color: '#fff',
						border: 'none',
						background: '#0077b5',
					},
					'.btn-linkedin:hover': {
						background: '#006097',
					},
				}
			}
		]
	}
};

module.exports = config;
