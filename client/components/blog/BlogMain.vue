<template>
	<nuxt-link class="blogHolder" id="blogDisplay" :to="'/blog/' + blogName">
		<div class="portImageHolder">
			<img class="portImage" :src="`/img/blog/${blogImage}.jpg`" alt="blogImage" />
		</div>
		<div class="blogItem">
			<div class="portName">{{ blogName }}</div>
			<div class="blogDesc">{{ blogBrief }}</div>
		</div>
	</nuxt-link>
</template>

<script>
export default {
	props: ['blogName', 'blogImage', 'blogBrief', 'index'],
};
</script>

<style scoped>
.blogHolder {
	width: 100%;
	height: 30%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1% 0% 1% 0%;
	text-decoration: none;
	color: var(--primary-color);
}
#blogDisplay {
	opacity: 1;
	transition: 0.5s;
}
.portImageHolder {
	position: relative;
	height: 100%;
	width: 30%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.portImage {
	width: 100%;
	transition: 0.5s;
}
.blogItem {
	position: relative;
	height: 100%;
	width: 70%;
	padding: 1%;
}
.portName {
	text-align: left;
	font-size: 2rem;
}
@media only screen and (max-width: 600px) {
	.blogHolder {
		flex-direction: column;
		height: 50%;
		padding: 5% 0% 5% 0%;
	}
	.portImageHolder {
		width: 100%;
	}
	.blogItem {
		width: 100%;
	}
}
@media only screen and (min-width: 600px) {
	.blogHolder:hover .portImage {
		transform: scale(1.1);
	}
}
</style>
