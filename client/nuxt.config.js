// const path = require('path');

export default {
	mode: 'universal',
	/*
	 ** Headers of the page
	 */
	head: {
		htmlAttrs: {
			lang: 'en',
		},
		title: 'Aghil Jose',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: 'The blog and portfolio of Aghil Jose | Full Stack Engineer',
			},
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/aghiljvlogo.png' }],
		script: [
			// { type: 'text/javascript', src: 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js' }
		],
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#fff' },
	/*
	 ** Global CSS
	 */
	css: [],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [{ src: '~/plugins/particlePlugin', ssr: false }],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
	],
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: {},
	// buildDir: '../server/public',
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		// extend(config, ctx) {},

		publicPath: '/assets/',
		/*
		 ** Run ESLint on save
		 */
		extend(config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
				});
			}
		},
	},
};
