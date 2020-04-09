<template>
	<div @mousemove="mouseMoveEvent($event)">
		<Particle class="particleClass" :themeName="themeName" />
		<ProjectHeader class="headerClassMain" @changeBG="changeBG($event)" :currentRoute="currentRoute" />
		<PhoneNavigator @changeBG="changeBG($event)" @currentRoute="updateHeader($event)" />
		<SocialLinks id="socialLinks" />
		<Routes @changeBG="changeBG($event)" id="sideRoutes" @currentRoute="updateHeader($event)" />
		<nuxt id="mainContent" />
		<PhoneNavButton class="navButton" :navAction="navAction" />
	</div>
</template>

<script>
import ProjectHeader from '../components/ProjectHeader.vue';
import Routes from '../components/Routes.vue';
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
		Routes,
	},
	mounted() {},
	data() {
		return {
			themeName: 'Dark',
			navAction: false,
			currentRoute: null,
		};
	},
	methods: {
		changeBG(themeName) {
			this.themeName = themeName;
		},
		updateHeader(currentRoute) {
			this.currentRoute = currentRoute;
		},
		mouseMoveEvent(e) {
			// let change = e.offsetX / 1000;
			let centreWidth = document.getElementById('mainContent').clientWidth / 2;
			let centreHeight = document.getElementById('mainContent').clientHeight / 2;
			let change = (centreHeight - e.clientY) / 100;

			// console.log(change);
			// console.log(document.getElementById('mainContent').clientWidth);
			document.getElementById('currentActiveRoute').style.transform = 'translateY(' + change + '%)';
		},
	},
};
</script>

<style>
:root {
	--color-primary: white;
	--background-color-primary: black;
	--header-bg-color: rgba(0, 0, 0, 0);
	--link-text-color: rgb(114, 114, 114);
	--active-link-text-color: rgba(255, 255, 255, 1);
	--active-link-background-color: rgba(0, 0, 0, 0);
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
#mainContent {
	/* transition: 0.5s; */
}
.container {
	position: absolute;
	margin: 0 auto;
	left: 5%;
	min-height: 100%;
	width: 80%;
	/* display: flex; */
	flex: 100%;
	/* justify-content: center; */
	/* align-items: center; */
	/* text-align: center; */
	color: white;
	color: var(--color-primary);
	z-index: 3;
	overflow: auto;
}
.headerClassMain {
	position: fixed;
	top: 0;
	height: 10%;
	width: 100%;
	color: var(--color-primary);
	/* background: var(--header-bg-color); */
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
		width: 90%;
	}
}
@media only screen and (min-width: 600px) {
	.navButton {
		display: none;
	}
}
</style>
