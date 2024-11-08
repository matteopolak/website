import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import themes from 'daisyui/src/theming/themes';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				praise: ['Praise', 'sans-serif'],
				'into-light': ['Shadows Into Light', 'sans-serif']
			},
			animation: {
				blob: 'blob 7s infinite'
			},
			keyframes: {
				blob: {
					'0%': {
						transform: 'translate(0px, 0px) scale(1)'
					},
					'33%': {
						transform: 'translate(30px, -50px) scale(1.1)'
					},
					'66%': {
						transform: 'translate(-20px, 20px) scale(0.9)'
					},
					'100%': {
						transform: 'translate(0px, 0px) scale(1)'
					}
				}
			}
		}
	},
	plugins: [typography, daisyui],
	daisyui: {
		logs: false,
		themes: [
			{
				light: {
					...themes.light,
					primary: '#9377f7',
					'primary-content': '#fff',
					secondary: '#788efa',
					'secondary-content': '#fff',
					accent: '#f54760',
					'accent-content': '#fff',
					info: '#5dbcfc',
					'info-content': '#fff',
					success: '#48c276',
					'success-content': '#fff',
					warning: '#faca15',
					'warning-content': '#fff',
					error: '#f56565',
					'error-content': '#fff',
					'.text-extreme': {
						color: '#000'
					},
					'.btn-github': {
						'background-color': '#262626',
						color: '#f5f5f5',
						'border-color': '#262626'
					},
					'.btn-github:hover': {
						'background-color': '#1a1a1a',
						'border-color': '#1a1a1a'
					},
					'.btn-linkedin': {
						'background-color': '#3b83f6',
						'border-color': '#3b83f6',
						color: '#fff'
					},
					'.btn-linkedin:hover': {
						'background-color': '#1e6cd2',
						'border-color': '#1e6cd2'
					}
				}
			},
			{
				dark: {
					...themes.dark,
					primary: '#c4b5fd',
					'primary-content': '#000',
					secondary: '#a5b4fc',
					'secondary-content': '#000',
					accent: '#ff8596',
					'accent-content': '#000',
					info: '#7dd3fc',
					'info-content': '#000',
					success: '#86efac',
					'success-content': '#000',
					warning: '#fef08a',
					'warning-content': '#000',
					error: '#fca5a5',
					'error-content': '#000',
					'.text-extreme': {
						color: '#fff'
					},
					'.btn-github': {
						'background-color': '#f5f5f5',
						'border-color': '#f5f5f5',
						color: '#404040'
					},
					'.btn-github:hover': {
						'background-color': '#e5e5e5',
						'border-color': '#e5e5e5'
					},
					'.btn-linkedin': {
						'background-color': '#4e8ef5',
						'border-color': '#4e8ef5',
						color: '#fff'
					},
					'.btn-linkedin:hover': {
						'background-color': '#1e6cd2',
						'border-color': '#1e6cd2'
					}
				}
			}
		]
	}
} satisfies Config;
