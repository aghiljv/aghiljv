import Vue from 'vue';

if (process.browser) {
	window.onNuxtReady(() => {
		const ParticlesJs = require('particles.js');
		Vue.use(ParticlesJs);
	});
}
