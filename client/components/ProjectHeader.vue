<template>
	<div class="headerClass">
		<div class="title">{{ currentRoute }}</div>
		<div class="routeClass">
			<nuxt-link class="indRoute" to="/">HOME</nuxt-link>
			<nuxt-link class="indRoute" to="/portfolio">PORTFOLIO</nuxt-link>
			<nuxt-link class="indRoute" to="/blog">BLOG</nuxt-link>
			<nuxt-link class="indRoute" to="/contact">CONTACT</nuxt-link>
			<div class="indRoute" @click="switchTheme">{{ themeName }}</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			themeName: 'Light Theme',
		};
	},
	props: ['currentRoute'],
	methods: {
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
				this.$emit('changeBG', 'Dark');
				this.themeName = 'Light Theme';
			}
		},
	},
};
</script>

<style scoped>
.headerClass {
	padding: 1% 0% 1% 5%;
	transition: 0.5s;
	display: flex;
	/* display: none; */
	align-items: center;
}
.title {
	width: 30%;
	font-size: 4rem;
	transition: 0.5s;
	color: var(--active-link-text-color);
}
.title:hover {
	/* font-size: 3.5rem; */
}
.routeClass {
	position: absolute;
	width: 40%;
	height: 100%;
	right: 0%;
	display: flex;
	display: none;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
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
	/* background: var(--active-link-background-color); */
	color: var(--active-link-text-color);
	font-weight: bolder;
}
@media only screen and (max-width: 600px) {
	.title {
		width: 100%;
		font-size: 2rem;
	}
	.routeClass {
		display: none;
		width: 60%;
	}
}
@media only screen and (min-width: 600px) {
	.title {
		display: none;
	}
}
</style>
