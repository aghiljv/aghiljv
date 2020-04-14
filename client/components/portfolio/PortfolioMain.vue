<template>
	<div class="portfolioHolder" id="portfolioDisplay">
		<img class="portImage" :src="`/img/portfolio/${portfolioImage}.jpg`" alt="portfolioImage" />
		<div class="portName">{{ portfolioName }}</div>
	</div>
</template>

<script>
export default {
	props: ['portfolioName', 'portfolioImage']
};
</script>

<style scoped>
.portfolioHolder {
	margin: 1%;
	padding: 1%;
	width: 100%;
	display: inline-block;
	transition: 0.5s;
}
#portfolioDisplay {
	opacity: 1;
	transition: 0.5s;
}
.portImage {
	position: inherit;
	width: 100%;
}
.portName {
	text-align: center;
	font-size: 2rem;
}
</style>
