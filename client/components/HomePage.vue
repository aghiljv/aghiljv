<template>
	<div class="contentContainer">
		<div class="homeTitle">
			<p id="homeTitle1">FULL STACK</p>
			<p id="homeTitle2">ENGINEER</p>
		</div>
		<div class="skillAndLogo">
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
			<div class="logoHolder">
				<img id="homeLogoID" src="/img/common/homelogo.png" class="logoImg" alt="Aghil Jose Logo" />
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.contentContainer {
	position: absolute;
	overflow: auto;
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-rows: 60vh 40vh;
}
.homeTitle {
	position: relative;
	font-size: 10vw;
	padding: 0% 0% 0% 5%;
}
.skillAndLogo {
	position: relative;
	display: grid;
	grid-template-columns: 6fr 4fr;
	grid-template-rows: auto;
}
#homeLogoID {
	object-fit: contain;
}
.logoHolder {
	display: flex;
	justify-content: center;
}
.skillHolder {
	font-size: 1vw;
}
.skillClass {
	padding: 2%;
	display: inline-block;
	animation: jump 0.5s linear infinite;
}
.skillHolder :hover {
	transform: scale(1.5);
}
.skillHolder :nth-child(2) {
	animation-delay: 0.25s;
}
.skillHolder :nth-child(3) {
	animation-delay: 0.5s;
}
.skillHolder :nth-child(4) {
	animation-delay: 0.75s;
}
.skillHolder :nth-child(5) {
	animation-delay: 1s;
}
.skillHolder :nth-child(6) {
	animation-delay: 1.25s;
}
.skillHolder :nth-child(7) {
	animation-delay: 1.5s;
}
.skillHolder :nth-child(8) {
	animation-delay: 1.75s;
}
.skillHolder :nth-child(9) {
	animation-delay: 2s;
}
.skillHolder :nth-child(10) {
	animation-delay: 2.25s;
}
.skillHolder :nth-child(11) {
	animation-delay: 2.5s;
}
.skillHolder :nth-child(12) {
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
	.contentContainer {
		grid-template-rows: 25vh 55vh;
	}
	.homeTitle {
		font-size: 14vw;
		padding: 0% 0% 0% 0%;
		margin: 0%;
	}
	.skillAndLogo {
		top: 0%;
		grid-template-columns: auto;
	}
	.skillHolder {
		font-size: 3.5vw;
	}
}
</style>
