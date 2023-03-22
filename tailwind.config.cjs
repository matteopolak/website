const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography'),
		require('daisyui')
	],
	daisyui: {
		themes: [
			{
				black: {
					...require('daisyui/src/colors/themes')['[data-theme=black]'],
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
					...require('daisyui/src/colors/themes')['[data-theme=synthwave]'],
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
					...require('daisyui/src/colors/themes')['[data-theme=lofi]'],
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
					...require('daisyui/src/colors/themes')['[data-theme=pastel]'],
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
					...require('daisyui/src/colors/themes')['[data-theme=light]'],
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
					...require('daisyui/src/colors/themes')['[data-theme=dark]'],
					primary: '#be123c',
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
			}
		]
	}
};

module.exports = config;
