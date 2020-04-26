<template>
	<div @mousemove="mouseMoveEvent($event)">
		<HomePageIntro />
		<Particle class="particleClass" :themeName="themeName" />
		<ProjectHeader class="headerClassMain" @changeBG="changeBG($event)" :currentRoute="currentRoute" />
		<PhoneNavigator @changeBG="changeBG($event)" @currentRoute="updateHeader($event)" />
		<SocialLinks id="socialLinks" @currentRoute="updateHeader($event)" />
		<Routes @changeBG="changeBG($event)" id="sideRoutes" @currentRoute="updateHeader($event)" />
		<main @currentRoute="updateHeader($event)"><nuxt id="mainContent" /></main>

		<PhoneNavButton class="navButton" :navAction="navAction" />
	</div>
</template>

<script>
import ServerService from '../static/ServerService.js';

import HomePageIntro from '../components/HomePageIntro.vue';
import ProjectHeader from '../components/ProjectHeader.vue';
import Routes from '../components/Routes.vue';
import PhoneNavigator from '../components/PhoneNavigator.vue';
import PhoneNavButton from '../components/PhoneNavButton.vue';
import SocialLinks from '../components/SocialLinks.vue';
import Particle from '../components/Particle.vue';
import Lethargy from 'lethargy';
export default {
	head() {
		return {
			meta: [
				{
					hid: 'base',
					name: 'Base Layout',
					content: 'The portfolio and blog of Full Stack Engineer Aghil Jose',
				},
			],
		};
	},
	components: {
		HomePageIntro,
		ProjectHeader,
		SocialLinks,
		Particle,
		PhoneNavigator,
		PhoneNavButton,
		Routes,
	},
	async mounted() {
		setTimeout(this.introAnimRemove, 8000);
		try {
			this.$store.commit('portfolios/add', await ServerService.getPortfolios());
		} catch (err) {
			this.error = err.message;
		}
		try {
			this.$store.commit('blogs/add', await ServerService.getBlogs());
		} catch (err) {
			this.error = err.message;
		}
		// if (document.getElementsByClassName('nuxt-link-exact-active')[0] != null) {
		// 	this.currentRoute = document.getElementsByClassName('nuxt-link-exact-active')[0].textContent;
		// 	console.log(this.currentRoute);
		// }
	},
	data() {
		return {
			themeName: 'Dark',
			navAction: false,
			currentRoute: null,
		};
	},
	methods: {
		introAnimRemove() {
			document.getElementById('introAnimComp').style.opacity = 0;
			setTimeout(this.sendElementDown, 1000);
		},
		sendElementDown() {
			document.getElementById('introAnimComp').style.display = 'none';
		},
		changeBG(themeName) {
			this.themeName = themeName;
		},
		updateHeader(currentRoute) {
			console.log(currentRoute);
			this.currentRoute = currentRoute;
		},
		mouseMoveEvent(e) {
			let centreWidth = document.getElementById('mainContent').clientWidth / 2;
			let centreHeight = document.getElementById('mainContent').clientHeight / 2;
			let changeY = (centreHeight - e.clientY) / 100;
			let changeX = (centreWidth - e.clientX) / 200;

			document.getElementById('currentActiveRoute').style.transform = 'translateY(' + changeY + '%)';
			if (document.getElementById('homeTitle1') != null) {
				document.getElementById('homeTitle1').style.transform = 'translateX(' + changeX + '%)';
				document.getElementById('homeTitle2').style.transform = 'translateX(' + -changeX + '%)';
			}
		},
	},
};
</script>

<style>
:root {
	--color-primary: rgba(255, 255, 255, 1);
	--background-color-primary: rgba(0, 0, 0, 1);
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
	--invert-value: invert(0);
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
	left: 5%;
	min-height: 100%;
	width: 80%;
	flex: 100%;
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
	bottom: 2.5%;
	z-index: 11;
	right: 3%;
}
@media only screen and (max-width: 600px) {
	.container {
		top: 10%;
		min-height: 80%;
		width: 90%;
	}
	#sideRoutes {
		display: none;
	}
}
@media only screen and (min-width: 600px) {
	.navButton {
		display: none;
	}
}

.fade-enter-active {
	animation: fade-in 0.5s;
}
.fade-leave-active {
	animation: fade-out 0.5s;
}
@keyframes fade-in {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
@keyframes fade-out {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}
</style>
