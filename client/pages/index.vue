<template>
	<div class="container">
		<HomePage />
	</div>
</template>

<script>
import HomePage from '../components/HomePage.vue';

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
	mounted() {},
	methods: {
		introAnimRemove() {
			document.getElementById('introAnimComp').style.opacity = 0;
			setTimeout(this.sendElementDown, 1000);
		},
		sendElementDown() {
			document.getElementById('introAnimComp').style.display = 'none';
		},
	},
	components: {
		HomePage,
	},
};
</script>

<style scoped></style>
