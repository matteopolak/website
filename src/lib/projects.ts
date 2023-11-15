export type Project = {
	title: string;
	thumbnail: string;
	date: string;
	description: string;
	repository: string;
	tags: string[];
	website?: string;
};

export const projects = [
	{
		title: 'Quasi',
		thumbnail: '/images/projects/quasi.webp',
		date: 'November 2023',
		description:
			'Quasi is an interpreted programming language with similar features to many mainstream languages. It supports variables, scopes, functions, expressions, and more.',
		repository: 'https://github.com/matteopolak/quasi',
		tags: ['Rust', 'Programming Language', 'Interpreter', 'Web Assembly'],
	},
	{
		title: 'Noteboard',
		thumbnail: '/images/projects/noteboard.webp',
		date: 'September 2023',
		description:
			'Noteboard is a music-based collaborative drawing tool. It allows everyone to create and share their own music creations in real-time with anyone around the world.',
		repository: 'https://github.com/matteopolak/noteboard',
		website: 'https://noteboard.matteopolak.com',
		tags: ['Svelte', 'TypeScript'],
	},
	{
		title: 'StatPixel',
		thumbnail: '/images/projects/statpixel.webp',
		date: 'August 2023',
		description:
			'StatPixel is a Discord bot that gives users access to huge amounts of data about Hypixel player performance, history, statistics, and much more, all in Discord.',
		repository: 'https://github.com/statpixel-rs/statpixel',
		website: 'https://statpixel.xyz',
		tags: [
			'Rust',
			'Skia',
			'PostgreSQL',
			'Discord',
			'Redis',
			'Axum',
			'Svelte',
			'TypeScript',
		],
	},
	{
		title: 'Personal Website v2',
		thumbnail: '/images/projects/personal-website-v2.webp',
		date: 'January 2023',
		description: `This is the second iteration of my personal website. It is built using SvelteKit and DaisyUI and it's hosted on Cloudflare Pages.`,
		repository: 'https://github.com/matteopolak/website',
		tags: ['Svelte', 'TypeScript'],
	},
	{
		title: 'Minecraft Authenticator',
		thumbnail: '/images/projects/minecraft-authenticator.webp',
		date: 'January 2023',
		description:
			'This npm library allows for password-based authentication for Minecraft: Java Edition. It includes support for proxied authentication, which is useful for authenticating a large number of accounts very quickly.',
		repository: 'https://github.com/matteopolak/minecraft-auth',
		tags: ['Node.js', 'TypeScript'],
	},
	{
		title: 'Minecraft Name Index',
		thumbnail: '/images/projects/minecraft-name-index.webp',
		date: 'January 2023',
		description:
			'This tool periodically scans the top 400,000 English words to check their availability as usernames on Minecraft: Java Edition. The names are ranked based on their frequency in the English language, and they are tagged with various information such as whether they are real names, taken, recently available, or banned. This tool allows players to easily find unique and desirable names for their Minecraft accounts.',
		repository: 'https://github.com/matteopolak/minecraft',
		tags: ['Diesel', 'Rust', 'Svelte', 'TypeScript'],
	},
	{
		title: 'Notes App',
		thumbnail: '/images/projects/geonotes-app.webp',
		date: 'November 2022',
		description:
			'GeoNotes is a mobile application built with Flutter that allows users to easily create and store notes on the cloud. The notes are synced across all devices, so users can view and edit them wherever they are logged in to their account. This app is perfect for those who are always on-the-go and need to jot down quick notes, ideas or reminders that can be accessed from any device.',
		repository: 'https://github.com/matteopolak/geonotes',
		tags: ['Dart', 'Firebase', 'Flutter'],
	},
	{
		title: 'Chat Generator AI',
		thumbnail: '/images/projects/chat-generator-ai.webp',
		date: 'November 2022',
		description:
			'Chat Generator AI is an addition to the "Twitch Chat Downloader" project. It uses TensorFlow and an LSTM model to generate Twitch chat messages from a repository of previous chat messages. With this tool, users can use the "Twitch Chat Downloader" to generate their first dataset and use this AI to generate more chat messages. This project helps users to get more data for testing or even for fun.',
		repository: 'https://github.com/matteopolak/chat-generator',
		tags: ['Python', 'TensorFlow'],
	},
	{
		title: 'Twitch Chat Downloader',
		thumbnail: '/images/projects/twitch-chat-downloader.webp',
		date: 'November 2022',
		description:
			'This tool allows users to download or archive chat messages from any Twitch live stream that aired in the last 30 days. It can download large amounts of chat messages quickly, with the capability of downloading up to 5,000,000 messages per hour, depending on network speed. It includes features like multi-threading and connection pooling for efficient data retrieval and buffered writing for efficient storage. Users can download chat messages from multiple channels and videos in parallel, and it also includes a user-friendly graphical interface for browsing previous live streams.',
		repository: 'https://github.com/matteopolak/tcd',
		tags: ['Prisma', 'Rust', 'Twitch'],
	},
	{
		title: 'Discord Bot Framework',
		thumbnail: '/images/projects/discord-bot-framework.webp',
		date: 'October 2022',
		description:
			'Framecord is a modular and extensible framework for creating Discord bots. It uses the discord.js library internally, and utilizes modern Discord features, like slash commands, buttons, and modals.',
		repository: 'https://github.com/matteopolak/framecord',
		tags: ['Discord', 'Node.js', 'TypeScript'],
	},
	{
		title: 'BaerScript',
		thumbnail: '/images/projects/baerscript-programming-language.webp',
		date: 'September 2022',
		description:
			"This project is an interpreter for an esoteric programming language called BaerScript. An esoteric programming language is a type of programming language that is designed to be difficult to use for practical purposes. BaerScript has a unique feature where it has a buffer that can be modified in each column. However, it is also Turing complete, which means it has the ability to perform any computation, but it's not recommended to use it for any practical purposes.",
		repository: 'https://github.com/matteopolak/baerscript',
		tags: ['Rust'],
	},
	{
		title: 'Password Generator',
		thumbnail: '/images/projects/password-generator.webp',
		date: 'August 2021',
		description:
			'This tool allows users to generate cryptographically secure passwords using a variety of options. It can generate arbitrarily long passwords with built-in character sets, having support for custom character sets too.',
		repository: 'https://github.com/matteopolak/password',
		tags: ['Rust'],
	},
	{
		title: 'Jukebox Music Client',
		thumbnail: '/images/projects/jukebox-music-client.webp',
		date: 'June 2022',
		description:
			'This project is a Discord bot that allows users to play music in voice channels. It uses a dedicated text channel to accept new tracks, such as playlists, songs, or titles. Users can manage the queue, playback, and even audio effects using various buttons. It supports multiple music streaming platforms, including Spotify, YouTube, Apple Music, SoundCloud, and even Gutenberg (a book repository), reading the books out loud.',
		repository: 'https://github.com/matteopolak/jukebox',
		tags: ['Discord', 'FFmpeg', 'Node.js', 'TypeScript'],
	},
] satisfies Project[];
