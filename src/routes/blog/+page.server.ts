import { get } from '$/lib/server/posts.js'

export async function load() {
	return {
		streamed: {
			posts: get()
		}
	};
}
