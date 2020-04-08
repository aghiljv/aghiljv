<template>
	<div class="customButton" :style="style" @mouseover="mouseOver" @mouseleave="mouseLeave">{{ buttonName }}</div>
</template>
<script>
export default {
	props: ['buttonName', 'buttonColor', 'colorHover'],
	data() {
		return {
			hovering: false,
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
	},
};
</script>
<style scoped>
.customButton {
	width: 30%;
	height: 20%;
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
@media only screen and (max-width: 600px) {
	.customButton {
		width: 45%;
		height: 40%;
		font-size: 0.8rem;
	}
}
</style>
