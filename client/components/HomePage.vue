<template>
	<div class="homeTitle">
		<p id="homeTitle1">FULL STACK</p>
		<p id="homeTitle2">ENGINEER</p>
		<div class="logoHolder">
			<img id="homeLogoID" src="/img/homelogo.png" class="logoImg" alt="Aghil Jose Logo" />
		</div>
		<div class="skillHolder">
			<div class="skillClass">Javascript</div>
			<div class="skillClass">Java</div>
			<div class="skillClass">MongoDB</div>
			<div class="skillClass">NodeJS</div>
			<div class="skillClass">Express</div>
			<div class="skillClass">Unity 3D</div>
			<div class="skillClass">Angular</div>
			<div class="skillClass">React</div>
			<div class="skillClass">VueJS</div>
			<div class="skillClass">NuxtJS</div>
			<div class="skillClass">HTML5</div>
			<div class="skillClass">CSS3</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.homeTitle {
	font-size: 12vw;
	padding: 0% 0% 0% 5%;
}
#homeLogoID {
	bottom: 0%;
	height: 100%;
	right: 0%;
}
.logoHolder {
	position: absolute;
	width: 95%;
	height: 49%;
	bottom: 0%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
.skillHolder {
	position: absolute;
	font-size: 1vw;
	top: 60%;
	height: 40%;
	width: 60%;
}
.skillClass {
	padding: 2%;
	display: inline-block;
	animation: jump 0.5s linear infinite;
}
.skillHolder :hover {
	transform: scale(1.5);
}
div :nth-child(2) {
	animation-delay: 0.25s;
}
div :nth-child(3) {
	animation-delay: 0.5s;
}
div :nth-child(4) {
	animation-delay: 0.75s;
}
div :nth-child(5) {
	animation-delay: 1s;
}
div :nth-child(6) {
	animation-delay: 1.25s;
}
div :nth-child(7) {
	animation-delay: 1.5s;
}
div :nth-child(8) {
	animation-delay: 1.75s;
}
div :nth-child(9) {
	animation-delay: 2s;
}
div :nth-child(10) {
	animation-delay: 2.25s;
}
div :nth-child(11) {
	animation-delay: 2.5s;
}
div :nth-child(12) {
	animation-delay: 2.75s;
}
@keyframes jump {
	0% {
		transform: translateY(0%);
	}
	50% {
		transform: translateY(1%);
	}
	100% {
		transform: translateY(0%);
	}
}
@media only screen and (max-width: 600px) {
	.homeTitle {
		font-size: 15vw;
		padding: 0% 0% 0% 0%;
	}
	.skillHolder {
		top: 30%;
		height: 20%;
		width: 100%;
		font-size: 3.5vw;
	}
	.logoHolder {
		width: 100%;
		height: 50%;
		justify-content: center;
	}
}
</style>
