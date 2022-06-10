import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		vite:{
			server: {
	 	fs: {
	 		// Allow serving files from the static folder
	 		allow: [".."],
			// kit.vite.server.fs.allow: ['locales']
	 	}
	 }
		},
		adapter: adapter(),
		
	},
	 
};

export default config;
