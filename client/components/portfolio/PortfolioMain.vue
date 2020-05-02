<template>
	<div class="portfolioHolder" id="portfolioDisplay">
		<div
			class="portfolioItem"
			:style="[index == activePortIndex ? { opacity: '1', 'z-index': '5' } : { opacity: '0' }]"
			:id="'portfolioItem' + index"
		>
			<div class="portImageHolder">
				<img class="portImage" :src="`/img/portfolio/${portfolioImage}.jpg`" alt="portfolioImage" />
			</div>
			<!-- <div class="portfolioDesc">{{ portfolioBrief }}</div> -->
		</div>
	</div>
</template>

<script>
export default {
	props: ['portfolioName', 'portfolioImage', 'portfolioBrief', 'index', 'activePortIndex'],
};
</script>

<style scoped>
.portfolioHolder {
	height: 100%;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 100%;
}
.portImageHolder {
	height: 60%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 1;
	transition: 0.5s;
}
.portImage {
	transition: 0.5s;
}
.portfolioItem {
	position: absolute;
	top: 10%;
	left: 5%;
	height: 80%;
	width: 50%;
	padding: 1%;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	z-index: -1;
}
.portName {
	text-align: left;
	font-size: 5vw;
	transition: 0.5s;
	width: 100%;
	justify-content: center;
	display: flex;
}
.portfolioDesc {
	transition: 0.5s;
}
.portNumber {
	font-size: 1vw;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.5s;
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
}
</style>
