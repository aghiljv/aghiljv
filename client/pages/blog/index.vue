<template>
	<div class="container">
		Working on Blog Content
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'Aghil Jose - Blog',
		};
	},
	head() {
		return {
			title: this.title,
			meta: [
				{
					hid: 'blog',
					name: 'Blog',
					content: 'The blog of Full Stack Engineer Aghil Jose',
				},
			],
		};
	},
};
</script>

<style></style>
