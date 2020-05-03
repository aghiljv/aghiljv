<template>
	<div class="phoneNavClass" id="phoneNavID" @click="toggleNav">
		<nuxt-link class="indRoute" to="/" @click.native="selectedRoute('HOME')">HOME</nuxt-link>
		<nuxt-link class="indRoute" to="/portfolio" @click.native="selectedRoute('PORTFOLIO')">PORTFOLIO</nuxt-link>
		<nuxt-link class="indRoute" to="/blog" @click.native="selectedRoute('BLOG')">BLOG</nuxt-link>
		<nuxt-link class="indRoute" to="/about" @click.native="selectedRoute('ABOUT')">ABOUT</nuxt-link>
		<nuxt-link class="indRoute" to="/contact" @click.native="selectedRoute('CONTACT')">CONTACT</nuxt-link>
		<div class="indRoute" @click="switchTheme">{{ themeName }}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			themeName: 'Light Theme',
		};
	},
	mounted() {
		if (document.getElementsByClassName('nuxt-link-exact-active')[0] != null) {
			this.currentRoute = document.getElementsByClassName('nuxt-link-exact-active')[0].textContent;
			this.$emit('currentRoute', this.currentRoute);
		}
	},
	methods: {
		toggleNav() {
			document.getElementById('phoneNavID').style.bottom = '-120%';
			document.getElementById('nav-icon').classList.toggle('open');
		},
		switchTheme() {
			let root = document.documentElement;
			if (this.themeName == 'Light Theme') {
				root.style.setProperty('--background-color-primary', 'white');
				root.style.setProperty('--color-primary', 'black');
				root.style.setProperty('--header-bg-color', 'rgba(0, 0, 0, 0.1)');
				root.style.setProperty('--link-text-color', 'rgb(114, 114, 114)');
				root.style.setProperty('--active-link-text-color', 'rgba(0,0,0,1)');
				root.style.setProperty('--active-link-background-color', 'white');
				root.style.setProperty('--particle-bg-color', 'white');
				root.style.setProperty('--intro-card-bg', 'rgba(225, 225, 225, 0.5)');
				root.style.setProperty('--intro-card-pic-border-color', 'rgba(205, 205, 205, 1)');
				root.style.setProperty('--intro-card-button-holder-color', 'rgba(205, 205, 205, 0)');
				root.style.setProperty('--intro-card-shadow', 'rgba(0, 0, 0, 0.2)');
				root.style.setProperty('--invert-value', 'invert(1)');
				this.$emit('changeBG', 'Light');
				this.themeName = 'Dark Theme';
			} else {
				root.style.setProperty('--background-color-primary', 'black');
				root.style.setProperty('--color-primary', 'white');
				root.style.setProperty('--header-bg-color', ' rgba(0, 0, 0, 0.6)');
				root.style.setProperty('--link-text-color', 'rgb(114, 114, 114)');
				root.style.setProperty('--active-link-text-color', 'rgba(255, 255, 255, 1)');
				root.style.setProperty('--active-link-background-color', 'white');
				root.style.setProperty('--particle-bg-color', 'black');
				root.style.setProperty('--intro-card-bg', 'rgba(25, 25, 25, 0.5)');
				root.style.setProperty('--intro-card-pic-border-color', 'rgba(50, 50, 50, 1)');
				root.style.setProperty('--intro-card-button-holder-color', 'rgba(50, 50, 50, 0)');
				root.style.setProperty('--intro-card-shadow', 'rgba(0, 0, 0, 0.2)');
				root.style.setProperty('--invert-value', 'invert(0)');
				this.$emit('changeBG', 'Dark');
				this.themeName = 'Light Theme';
			}
		},
		selectedRoute(currentRoute) {
			this.currentRoute = currentRoute;
			this.$emit('currentRoute', currentRoute);
		},
	},
};
</script>

<style scoped>
.phoneNavClass {
	position: absolute;
	bottom: -120%;
	width: 100%;
	height: 100%;
	z-index: 10;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	background: var(--background-color-primary);
	transition: 0.5s;
}
.indRoute {
	color: var(--link-text-color);
	text-decoration: none;
	margin: 1%;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.nuxt-link-exact-active {
	color: var(--active-link-text-color);
	font-weight: bolder;
}
@media only screen and (min-width: 600px) {
	.phoneNavClass {
		display: none;
	}
}
</style>
