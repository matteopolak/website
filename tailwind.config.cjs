const colours = require('tailwindcss/colors');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				praise: ['Praise', 'sans-serif'],
			},
			animation: {
				blob: 'blob 7s infinite',
			},
			keyframes: {
				blob: {
					'0%': {
						transform: 'translate(0px, 0px) scale(1)',
					},
					'33%': {
						transform: 'translate(30px, -50px) scale(1.1)',
					},
					'66%': {
						transform: 'translate(-20px, 20px) scale(0.9)',
					},
					'100%': {
						transform: 'tranlate(0px, 0px) scale(1)',
					},
				},
			}
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
					...require('daisyui/src/theming/themes')['black'],
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
					...require('daisyui/src/theming/themes')['synthwave'],
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
					...require('daisyui/src/theming/themes')['lofi'],
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
					...require('daisyui/src/theming/themes')['pastel'],
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
					...require('daisyui/src/theming/themes')['light'],
					primary: '#c4b5fd',
					secondary: '#a5b4fc',
					accent: '#fb7185',
					info: '#7dd3fc',
					success: '#86efac',
					warning: '#fef08a',
					error: '#fca5a5',
					'secondary-content': '#000',
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
					...require('daisyui/src/theming/themes')['dark'],
					primary: '#c4b5fd',
					secondary: '#a5b4fc',
					accent: '#fb7185',
					info: '#7dd3fc',
					success: '#86efac',
					warning: '#fef08a',
					error: '#fca5a5',
					'secondary-content': '#000',
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
