export type TagName = 'Tailwind' | 'Svelte';

export type Project = {
	title: string;
	id: string;
	thumbnail: string;
	date: string;
	description: string;
	repository: string;
	tags: TagName[];
	website?: string;
};
