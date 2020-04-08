<template>
	<div class="container">
		<IndexContent />
	</div>
</template>

<script>
import IndexContent from '../components/IndexContent.vue';

export default {
	data() {
		return {
			title: 'Aghil Jose - Home',
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
		IndexContent,
	},
};
</script>

<style scoped></style>
