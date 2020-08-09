<template>
	<div id="introAnimComp" class="homeAnimClass">
		<img id="introLogo" src="/img/common/homelogo.png" alt="Logo for Animation" />
		<div id="loadingText">LOADING</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
#introAnimComp {
	position: absolute;
	height: 100%;
	width: 100%;
	background: black;
	opacity: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	transition: 0.5s;
	z-index: 1000;
}
#logoHolder {
	height: 50%;
	width: 50%;
}
#introLogo {
	position: absolute;
	height: 50%;
	/* animation: spin 2s linear infinite; */
	animation: logoAnim 10s linear forwards;
}

#loadingText {
	position: absolute;
	bottom: 20%;
	color: white;
	animation: pulse 1s linear infinite;
}

@keyframes pulse {
	0% {
		transform: scale(1);
	}
	10% {
		transform: scale(2);
	}
	20% {
		transform: scale(1);
	}
	30% {
		transform: scale(2);
	}
	40% {
		transform: scale(1);
	}
	100% {
		transform: scale(1);
	}
}
@keyframes logoAnim {
	0% {
		-webkit-transform: scale(0) rotate(0deg);
		transform: scale(0) rotate(0deg);
	}
	20% {
		-webkit-transform: scale(1) rotate(360deg);
		transform: scale(1) rotate(360deg);
	}
	40% {
		-webkit-transform: scale(1) rotate(720deg);
		transform: scale(1) rotate(720deg);
	}
	60% {
		-webkit-transform: scale(1) rotate(1080deg);
		transform: scale(1) rotate(1080deg);
	}
	80% {
		-webkit-transform: scale(1) rotate(1440deg);
		transform: scale(1) rotate(1440deg);
	}
	100% {
		-webkit-transform: scale(0) rotate(1800deg);
		transform: scale(0) rotate(1800deg);
	}
}
</style>
