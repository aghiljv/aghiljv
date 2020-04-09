<template>
	<div class="contentClass">
		<div class="introCard">
			<div class="imageHolder"></div>
			<div class="buttonsHolder">
				<CustomButton
					buttonName="download"
					buttonColor="rgba(44, 62, 80, 0.5)"
					colorHover="rgba(44, 62, 80, 1)"
					@click.native="downloadResume"
				/>
				<CustomButton
					buttonName="mail"
					buttonColor="rgba(150, 40, 27, 0.5)"
					colorHover="rgba(150, 40, 27, 1)"
				/>
			</div>
		</div>
		<div id="introContent" class="textContent">
			A Software Engineer with experience in End-to-End Application Development and have worked with Accenture and
			Nissan Digital. I specialize in building application to the needs of the business and clients in Agile
			Environment. Experienced in Automotive visualization and virtual testing environment for Autonomous
			vehicles. A team player with strong inter-personal skills, with the ability to collaborate with
			multi-functional teams. Apart from these, I love football, travel, photography and reading.
		</div>
	</div>
</template>

<script>
import PostService from '../static/PostService.js';
import CustomButton from './CustomButton.vue';
export default {
	components: {
		CustomButton,
	},
	methods: {
		async downloadResume() {
			await PostService.downloadResume();
		},
	},
};
</script>

<style scoped>
.contentClass {
	top: 1vh;
	width: 100%;
	height: 90%;
	position: absolute;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	text-align: left;
}
.textContent {
	/* position: inherit; */
	/* left: 5%; */
	width: 50%;
}
.introCard {
	/* position: fixed; */
	/* right: 5%; */
	/* top: 15%; */
	width: 35%;
	height: 70%;
	background: var(--intro-card-bg);
	border-radius: 1%;
	display: flex;
	box-shadow: 0 4px 8px 0 var(--intro-card-shadow), 0 6px 20px 0 var(--intro-card-shadow);
	justify-content: space-evenly;
	flex-direction: column;
	padding: 2%;
	align-items: center;
}
.imageHolder {
	border: 10px solid var(--intro-card-pic-border-color);
	height: 35vh;
	width: 35vh;
	border-radius: 50%;
	background-image: url('../assets/intro.png');
	background-size: cover;
}
.buttonsHolder {
	background: var(--intro-card-button-holder-color);
	width: 100%;
	height: 30%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: flex-end;
	border-radius: 1%;
}
@media only screen and (max-width: 600px) {
	.contentClass {
		top: 1vh;
		width: 90%;
		height: 80vh;
		position: relative;
		display: block;
		align-items: center;
		flex-direction: column-reverse;
		justify-content: space-around;
		overflow: auto;
	}
	.textContent {
		width: 100%;
		padding: 5% 0% 5% 0%;
	}
	.introCard {
		height: 40%;
		width: 100%;
		padding: 5%;
		/* font-size: 0.6rem; */
	}
	.imageHolder {
		height: 20vh;
		width: 20vh;
	}
}
</style>
