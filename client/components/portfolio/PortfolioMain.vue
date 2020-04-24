<template>
	<div
		class="portfolioHolder"
		id="portfolioDisplay"
		:style="[index == activePortIndex ? { opacity: '1', 'z-index': '5' } : { opacity: '0' }]"
	>
		<div class="portfolioItem" :id="'portfolioItem' + index">
			<div class="portName">{{ portfolioName }}</div>
			<div class="portImageHolder">
				<img class="portImage" :src="`/img/portfolio/${portfolioImage}.jpg`" alt="portfolioImage" />
			</div>
			<div class="portfolioDesc">{{ portfolioBrief }}</div>
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
	/* border-bottom: 1px solid var(--color-primary); */
	/* padding: 1% 0% 1% 0%; */
	width: 100%;
}
.portImageHolder {
	/* position: relative;  */
	height: 60%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 1;
	transition: 0.5s;
}
.portImage {
	/* position: absolute;  */
	/* width: 100%; */
	transition: 0.5s;
}
.portfolioItem {
	position: absolute;
	top: 10%;
	left: 5%;
	height: 80%;
	width: 70%;
	padding: 1%;
	text-align: center;
	/* transition: 0.1s; */
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	z-index: 0;
}
.portName {
	/* position: absolute; */
	/* opacity: 0; */
	text-align: left;
	font-size: 5rem;
	transition: 0.5s;
	/* height: 100%; */
	width: 100%;
	justify-content: center;
	display: flex;
}
.portfolioDesc {
	/* opacity: 0; */
	transition: 0.5s;
	/* height: 100%; */
}
.portfolioHolder:nth-child(even) .portNumber {
	/* justify-content: flex-end; */
	/* right: 50%; */
}
.portfolioHolder:nth-child(odd) .portNumber {
	/* justify-content: flex-start; */
	/* left: 10%; */
}
.portNumber {
	font-size: 1rem;
	width: 100%;
	/* height: 100%; */
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.5s;
	/* position: absolute; */
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
	/* .portfolioHolder:hover .portImageHolder {
		opacity: 1;
		transform: translateX(15%);
	}
	.portfolioHolder:hover .portNumber {
		transform: translateX(-45%);
	}
	.portfolioHolder:hover .portName {
		opacity: 1;
		font-size: 2rem;
		transform: translate(-45%, -50%);
	}
	.portfolioHolder:hover .portfolioDesc {
		opacity: 1;
		transform: translate(30%, 45%);
	} */
}
</style>
