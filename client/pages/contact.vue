<template>
	<div class="container">
		Just you wait
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'Aghil Jose - Contact',
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
	components: {},
};
</script>

<style scoped></style>
