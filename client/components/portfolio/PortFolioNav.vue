<template>
	<div
		class="portfolioNavHolder"
		:id="'portNav' + index"
		@mousemove="mouseMove($event)"
		@mouseover="activePort(index)"
		@mouseleave="activePort(-1)"
	>
		<div class="portImageHolder">
			{{ portfolioName }}
		</div>
	</div>
</template>

<script>
export default {
	props: ['portfolioName', 'portfolioImage', 'index'],
	methods: {
		activePort(index) {
			this.$emit('setActiveOpacity', index);
		},
		mouseMove(e) {
			this.$emit('setDetPos', e);
		},
	},
};
</script>

<style scoped>
.portfolioNavHolder {
	height: 100%;
	display: inline-flex;
	align-items: center;
	width: 100%;
	transition: 0.5s;
}
.portImageHolder {
	position: relative;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	opacity: 1;
	transition: 0.5s;
	margin: 1%;
	filter: grayscale(1);
	letter-spacing: 2px;
	/* background: #ff0000; */
	font-size: 4rem;
	text-transform: uppercase;
	-webkit-text-stroke: 1px rgba(255, 255, 255, 1);
	-webkit-text-fill-color: rgba(255, 255, 255, 0);
	z-index: 2;
}
.portImageHolder:hover {
	filter: grayscale(0);
	-webkit-text-fill-color: rgba(255, 255, 255, 1);
	letter-spacing: 0px;
	z-index: 6;
	/* transform: scale(2.5); */
	/* font-size: 5rem; */
}
.portfolioNavHolder:hover {
	/* transform: scale(1.5); */
}
.portImage {
	/* position: absolute;  */
	width: 100%;
	transition: 0.5s;
}
.portName {
	font-size: 2rem;
}

@media only screen and (max-width: 600px) {
	.portfolioNavHolder {
		flex-direction: column;
		height: 60%;
		padding: 5% 0% 5% 0%;
	}
}
@media only screen and (min-width: 600px) {
	/* .portfolioNavHolder:hover .portImageHolder {
		opacity: 1;
		transform: translateX(15%);
	}
	.portfolioNavHolder:hover .portNumber {
		transform: translateX(-45%);
	}
	.portfolioNavHolder:hover .portName {
		opacity: 1;
		font-size: 2rem;
		transform: translate(-45%, -50%);
	}
	.portfolioNavHolder:hover .portfolioDesc {
		opacity: 1;
		transform: translate(30%, 45%);
	} */
}
</style>
