<template>
	<div class="container">
		Working on Portfolio Content
	</div>
</template>

<script>
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
					hid: 'portfolio',
					name: 'Portfolio',
					content: 'The portfolio of Full Stack Engineer Aghil Jose',
				},
			],
		};
	},
};
</script>

<style></style>
