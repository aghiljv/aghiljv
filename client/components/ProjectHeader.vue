<template>
	<div class="headerClass">
		<div class="title">{{ currentRoute }}</div>
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
};
</script>

<style scoped>
.headerClass {
	padding: 1% 0% 1% 5%;
	transition: 0.5s;
	display: flex;
	align-items: center;
}
.title {
	width: 30%;
	font-size: 4rem;
	transition: 0.5s;
	color: var(--active-link-text-color);
}
@media only screen and (max-width: 600px) {
	.title {
		width: 100%;
		font-size: 3rem;
	}
}
@media only screen and (min-width: 600px) {
	.title {
		display: none;
	}
}
</style>
