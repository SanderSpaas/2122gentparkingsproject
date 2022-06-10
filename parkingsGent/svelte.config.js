// import adapter from '@sveltejs/adapter-auto';
// import node from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		vite: {
			server: {
				fs: {
					// Allow serving files from the static folder
					allow: [".."],
					// kit.vite.server.fs.allow: ['locales']
				}
			}
		},
	},

};

export default config;