<template>
	<div>
		<Particle class="particleClass" v-bind:themeName="themeName" />
		<ProjectHeader class="headerClassMain" @changeBG="changeBG($event)" />
		<PhoneNavigator @changeBG="changeBG($event)" />
		<SocialLinks />
		<nuxt id="mainContent" />
		<PhoneNavButton class="navButton" v-bind:navAction="navAction" />
	</div>
</template>

<script>
import ProjectHeader from '../components/ProjectHeader.vue';
import PhoneNavigator from '../components/PhoneNavigator.vue';
import PhoneNavButton from '../components/PhoneNavButton.vue';
import SocialLinks from '../components/SocialLinks.vue';
import Particle from '../components/Particle.vue';
export default {
	components: {
		ProjectHeader,
		SocialLinks,
		Particle,
		PhoneNavigator,
		PhoneNavButton,
	},
	mounted() {},
	data() {
		return {
			themeName: 'Dark',
			navAction: false,
		};
	},
	methods: {
		changeBG(themeName) {
			this.themeName = themeName;
		},
	},
};
</script>

<style>
:root {
	--color-primary: white;
	--background-color-primary: black;
	--header-bg-color: rgba(0, 0, 0, 0.61);
	--link-text-color: rgb(114, 114, 114);
	--active-link-text-color: rgba(255, 255, 255, 1);
	--active-link-background-color: rgba(0, 0, 0, 0);
	--main-bg-img: url('/darkbg.jpg');
	--particle-color: white;
	--particle-bg-color: black;
	--intro-card-bg: rgba(25, 25, 25, 0.5);
	--intro-card-pic-border-color: rgba(50, 50, 50, 1);
	--intro-card-button-holder-color: rgba(50, 50, 50, 0);
	--intro-card-shadow: rgba(0, 0, 0, 0.2);
}
html {
	font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
		sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
	transition: 0.5s;
	background: var(--background-color-primary);
}
* {
	overflow: hidden;
}
*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}
.container {
	position: absolute;
	margin: 0 auto;
	min-height: 100%;
	width: 100%;
	display: flex;
	flex: 100%;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: var(--color-primary);
	z-index: 3;
}
.headerClassMain {
	position: fixed;
	top: 0;
	height: 10%;
	width: 100%;
	color: var(--color-primary);
	background: var(--header-bg-color);
	z-index: 5;
	text-align: left;
}
.particleClass {
	position: fixed;
	height: 100%;
	width: 100%;
	z-index: 2;
}
.navButton {
	position: absolute;
	bottom: 1%;
	z-index: 11;
	right: 1%;
	height: 100%;
	width: 100%;
}
@media only screen and (max-width: 600px) {
	.container {
		top: 10%;
		min-height: 80%;
	}
}
@media only screen and (min-width: 600px) {
	.navButton {
		display: none;
	}
}
</style>
