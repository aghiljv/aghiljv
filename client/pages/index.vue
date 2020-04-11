<template>
	<div class="container">
		<!-- <HomePageIntro /> -->
		<HomePage />
	</div>
</template>

<script>
import HomePage from '../components/HomePage.vue';
// import HomePageIntro from '../components/HomePageIntro.vue';

export default {
	data() {
		return {
			title: 'Aghil Jose | Full Stack Engineer',
		};
	},
	head() {
		return {
			title: this.title,
			meta: [
				{
					hid: 'home',
					name: 'Home Portfolio',
					content: 'The portfolio and blog of Full Stack Engineer Aghil Jose',
				},
			],
		};
	},
	components: {
		HomePage,
		// HomePageIntro,
	},
};
</script>

<style scoped></style>
