<template>
	<div id="nav-icon" @click="bringUpPhoneNav">
		<span></span>
		<span></span>
		<span></span>
		<span></span>
	</div>
</template>

<script>
export default {
	methods: {
		bringUpPhoneNav() {
			document.getElementById('nav-icon').classList.toggle('open');
			if (document.getElementById('phoneNavID').style.bottom != '0%') {
				document.getElementById('phoneNavID').style.bottom = '0%';
			} else {
				document.getElementById('phoneNavID').style.bottom = '-120%';
			}
		},
	},
};
</script>

<style scoped>
#nav-icon {
	width: 12%;
	height: 10vw;
	-webkit-transform: rotate(0deg);
	-moz-transform: rotate(0deg);
	-o-transform: rotate(0deg);
	transform: rotate(0deg);
	-webkit-transition: 0.5s ease-in-out;
	-moz-transition: 0.5s ease-in-out;
	-o-transition: 0.5s ease-in-out;
	transition: 0.5s ease-in-out;
	cursor: pointer;
}

#nav-icon span {
	display: block;
	position: absolute;
	height: 10%;
	width: 100%;
	background: var(--color-primary);
	opacity: 1;
	left: 0;
	-webkit-transform: rotate(0deg);
	-moz-transform: rotate(0deg);
	-o-transform: rotate(0deg);
	transform: rotate(0deg);
	-webkit-transition: 0.25s ease-in-out;
	-moz-transition: 0.25s ease-in-out;
	-o-transition: 0.25s ease-in-out;
	transition: 0.25s ease-in-out;
}

/* Icon 3 */

#nav-icon span:nth-child(1) {
	top: 0%;
}

#nav-icon span:nth-child(2),
#nav-icon span:nth-child(3) {
	top: 45%;
}

#nav-icon span:nth-child(4) {
	bottom: 0%;
}

#nav-icon.open span:nth-child(1) {
	top: 30%;
	width: 0%;
	left: 50%;
}

#nav-icon.open span:nth-child(2) {
	-webkit-transform: rotate(45deg);
	-moz-transform: rotate(45deg);
	-o-transform: rotate(45deg);
	transform: rotate(45deg);
}

#nav-icon.open span:nth-child(3) {
	-webkit-transform: rotate(-45deg);
	-moz-transform: rotate(-45deg);
	-o-transform: rotate(-45deg);
	transform: rotate(-45deg);
}

#nav-icon.open span:nth-child(4) {
	top: 30%;
	width: 0%;
	left: 50%;
}
</style>
