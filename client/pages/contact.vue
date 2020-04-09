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
			title: 'Aghil Jose | Full Stack Engineer',
		};
	},
	head() {
		return {
			title: this.title,
			meta: [
				{
					hid: 'contact',
					name: 'Contact',
					content: 'The contact of Full Stack Engineer Aghil Jose',
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
