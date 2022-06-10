// import adapter from '@sveltejs/adapter-auto';
import node from '@sveltejs/adapter-node';

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
		adapter: node(),
		
	},
	 
};

export default config;
