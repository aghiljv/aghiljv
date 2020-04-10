<template>
	<div class="customButton" @mouseover="mouseOver" @mouseleave="mouseLeave" :style="style">
		<img :src="`img/${imgName}`" alt="Custom Button" />
	</div>
</template>
<script>
export default {
	props: ['buttonName', 'buttonColor', 'colorHover'],
	data() {
		return {
			hovering: false,
			tempName: 'download.png',
		};
	},
	methods: {
		mouseOver() {
			this.hovering = true;
		},
		mouseLeave() {
			this.hovering = false;
		},
	},
	computed: {
		style() {
			if (!this.hovering) {
				return 'background: ' + this.$props.buttonColor;
			} else {
				return 'background: ' + this.$props.colorHover;
			}
		},
		imgName() {
			return this.$props.buttonName + '.png';
		},
	},
};
</script>
<style scoped>
.customButton {
	width: 10vh;
	height: 10vh;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 2%;
	cursor: pointer;
	transition: 0.5s;
}
.customButton:hover {
	transform: scale(1.1);
}
img {
	position: relative;
	height: 80%;
}
@media only screen and (max-width: 600px) {
	.customButton {
		width: 5vh;
		height: 5vh;
		font-size: 0.8rem;
	}
}
</style>
