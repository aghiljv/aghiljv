<template>
	<nuxt-link class="portfolioNavHolder" :id="'portNav' + index" :to="'/portfolio/' + portfolioName">
		<div
			class="portImageHolder"
			@mousemove="mouseMove($event)"
			@mouseover="activePort(index)"
			@mouseleave="activePort(-1)"
		>
			{{ portfolioName }}
		</div>
	</nuxt-link>
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
	text-decoration: none;
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
	font-size: 3.5vw;
	text-transform: uppercase;
	-webkit-text-stroke: 1px var(--color-primary);
	-webkit-text-fill-color: rgba(255, 255, 255, 0);
	z-index: 0;
}
.portImageHolder:hover {
	filter: grayscale(0);
	-webkit-text-fill-color: var(--color-primary);
	letter-spacing: 0px;
	z-index: 6;
	/* transform: scale(2.5); */
	/* font-size: 5rem; */
}
.portImage {
	/* position: absolute;  */
	width: 100%;
	transition: 0.5s;
}
.portName {
	font-size: 2vw;
}

@media only screen and (max-width: 600px) {
	.portImageHolder {
		font-size: 8vw;
	}
}
@media only screen and (min-width: 600px) {
}
</style>
