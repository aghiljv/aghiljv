<template>
	<div class="particles">
		<div id="particles-js"></div>
	</div>
</template>

<script>
// import 'particles.js';
export default {
	data() {
		return {
			particleColor: '#808080',
			particleBg: '#000000',
			darkMode: true,
		};
	},
	props: ['themeName'],
	watch: {
		themeName() {
			if (this.$props.themeName == 'Light') {
				this.particleColor = '#808080';
				this.particleBg = '#ffffff';
			} else if (this.$props.themeName == 'Dark') {
				this.particleColor = '#808080';
				this.particleBg = '#000000';
				console.log(this.$props.themeName);
			}
			this.applyThemeChanges();
		},
	},
	mounted() {
		this.initParticles();
	},
	methods: {
		initParticles() {
			if (process.browser) {
				window.onNuxtReady(() => {
					this.drawBG();
				});
			}
		},
		drawBG() {
			window.particlesJS('particles-js', {
				particles: {
					number: {
						value: 80,
						density: {
							enable: true,
							value_area: 700,
						},
					},
					color: {
						value: this.particleColor,
					},
					// shape: {
					// 	type: 'image',
					// 	image: {
					// 		src: 'aghiljvlogo.png',
					// 		width: 5,
					// 		height: 5,
					// 	},
					// },
					shape: {
						type: 'circle',
						stroke: {
							width: 4,
							color: '#fff',
						},
					},
					opacity: {
						value: 0.5,
						random: false,
						anim: {
							enable: false,
							speed: 1,
							opacity_min: 0.1,
							sync: false,
						},
					},
					size: {
						value: 2,
						random: true,
						anim: {
							enable: false,
							speed: 40,
							size_min: 0.1,
							sync: false,
						},
					},
					line_linked: {
						enable: true,
						distance: 150,
						color: this.particleColor,
						opacity: 0.4,
						width: 1,
					},
					move: {
						enable: true,
						speed: 5,
						direction: 'none',
						random: false,
						straight: false,
						out_mode: 'out',
						bounce: false,
						attract: {
							enable: false,
							rotateX: 600,
							rotateY: 1200,
						},
					},
				},
				interactivity: {
					detect_on: 'canvas',
					events: {
						onhover: {
							enable: true,
							mode: 'grab',
						},
						onclick: {
							enable: true,
							mode: 'push',
						},
						resize: true,
					},
					modes: {
						grab: {
							distance: 140,
							line_linked: {
								opacity: 1,
							},
						},
						bubble: {
							distance: 400,
							size: 40,
							duration: 2,
							opacity: 8,
							speed: 3,
						},
						repulse: {
							distance: 200,
							duration: 0.4,
						},
						push: {
							particles_nb: 4,
						},
						remove: {
							particles_nb: 2,
						},
					},
				},
				retina_detect: true,
			});
			this.applyThemeChanges();
		},
		applyThemeChanges() {
			pJSDom[0].pJS.particles.color.value = this.particleColor;
			pJSDom[0].pJS.particles.shape.stroke.color = this.particleBg;
			pJSDom[0].pJS.particles.line_linked.color = this.particleColor;
			pJSDom[0].pJS.fn.particlesRefresh();
		},
	},
};
</script>

<style scoped>
#particles-js {
	background: var(--particle-bg-color);
	height: 100%;
	width: 100%;
}
</style>
