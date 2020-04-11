<template>
	<div id="introAnimComp" class="homeAnimClass">
		<!-- <div id="logoHolder"> -->
		<img id="introLogo" src="/img/homelogo.png" alt="Logo for Animation" />
		<!-- <div id="rectForRed"></div>
		<div id="rectForGreen"></div>
		<div id="rectForBlue"></div> -->
		<!-- </div> -->

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
	animation: logoAnim 10s linear infinite;
}
/* #rectForRed {
	position: absolute;
	z-index: 1001;
	background: black;
	height: 8%;
	width: 15%;
	top: 35%;
	left: 40%;
	transform: rotate(-60deg);
	animation: rectRed 2s linear forwards;
}
#rectForGreen {
	position: absolute;
	z-index: 1001;
	background: black;
	height: 8%;
	width: 15%;
	top: 48%;
	left: 48%;
	transform: rotate(60deg);
	animation: rectGreen 2s linear forwards;
	animation-delay: 2s;
}
#rectForBlue {
	position: absolute;
	z-index: 1001;
	background: black;
	height: 8%;
	width: 15%;
	top: 55%;
	left: 39%;
	animation: rectBlue 2s linear forwards;
	animation-delay: 4s;
} */
/* #cirlceWrap {
	height: 50vh;
	width: 50vh;
	border-radius: 50%;
	background-image: linear-gradient(126deg, transparent 50%, black 50%),
		linear-gradient(90deg, black 50%, transparent 50%);
	z-index: 1001;
} */
#loadingText {
	position: absolute;
	bottom: 20%;
	color: white;
	animation: pulse 1s linear infinite;
}

/* @keyframes rectRed {
	0% {
		transform: rotate(-60deg) translate(0%, 0%);
	}
	50% {
		transform: rotate(-60deg) translate(50%, 0%);
	}
	100% {
		transform: rotate(-60deg) translate(100%, 0%);
	}
}
@keyframes rectGreen {
	0% {
		transform: rotate(60deg) translate(0%, 0%);
	}
	50% {
		transform: rotate(60deg) translate(50%, 0%);
	}
	100% {
		transform: rotate(60deg) translate(100%, 0%);
	}
}
@keyframes rectBlue {
	0% {
		transform: translate(0%, 0%);
	}
	50% {
		transform: translate(-50%, 0%);
	}
	100% {
		transform: translate(-100%, 0%);
	}
} */

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
	/* 50% {
		transform: scale(2);
	}
	60% {
		transform: scale(1);
	}
	70% {
		transform: scale(2);
	}
	80% {
		transform: scale(1);
	} */
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
