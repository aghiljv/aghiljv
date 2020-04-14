<template>
	<div class="portfolioHolder" id="portfolioDisplay">
		<div class="portImageHolder">
			<img class="portImage" :src="`/img/portfolio/${portfolioImage}.jpg`" alt="portfolioImage" />
		</div>
		<div class="portfolioItem">
			<div class="portName">{{ portfolioName }}</div>
			<div class="portfolioDesc">{{ portfolioBrief }}</div>
		</div>
		<!-- <hr style="width: 100%" /> -->
	</div>
</template>

<script>
export default {
	props: ['portfolioName', 'portfolioImage', 'portfolioBrief']
};
</script>

<style scoped>
.portfolioHolder {
	width: 100%;
	height: 30%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid var(--color-primary);
	padding: 1% 0% 1% 0%;
}
#portfolioDisplay {
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
	/* position: absolute;  */
	width: 100%;
}
.portfolioItem {
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
	.portfolioHolder {
		flex-direction: column;
		height: 60%;
		padding: 5% 0% 5% 0%;
	}
	.portImageHolder {
		width: 100%;
	}
	.portfolioItem {
		width: 100%;
	}
}
@media only screen and (min-width: 600px) {
	.portfolioHolder:hover {
		transform: scale(1.01);
	}
}
</style>
