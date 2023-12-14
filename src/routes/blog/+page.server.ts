import { get } from '$lib/server/posts';

export async function load() {
	return {
		posts: get()

	};
}
