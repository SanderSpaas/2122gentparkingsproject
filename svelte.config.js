// import adapter from '@sveltejs/adapter-auto';
// import node from '@sveltejs/adapter-node';
// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-netlify';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
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