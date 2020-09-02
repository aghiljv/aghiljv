<template>
	<div class="container">
		<div class="aboutTextContents">
			<div class="aboutTitleContents">
				<div>
					<img src="/img/common/about.jpg" class="aboutImg" alt="Aghil Jose" />
				</div>
				<div class="aboutTitleHolder">HEY THERE, I'M <br />AGHIL JOSE</div>
			</div>
			<div class="aboutTextHolder">
				<div class="indTextHolder">
					<p>
						A Full Stack Engineer based in Trivandrum, Kerala, India. I'm into learning new technologies as
						well as working in challenging environments.
					</p>
					<p>
						I often build applications that leaves people wondering, "How was this built?". I hold
						experience in End-to-End Application Development and have worked with Accenture and Nissan Motor
						Coorperation. Experienced in Automotive visualization and virtual testing environment for
						Autonomous vehicles.
					</p>
					<p>
						A team player with strong inter-personal skills, with the ability to collaborate with
						cross-functional teams. Apart from these, I love football, travel, photography and reading.
					</p>
				</div>
				<div class="indTextHolder experienceHolder">
					<div class="experienceTitle">EXPERIENCE</div>
					<p>
						Nissan Motor Coorporation / Software Engineer / Sep 2018 - Present<br />
						Accenture / Associate Software Engineer / Jan 2018 - Jun 2018
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	transition: 'fade',
	data() {
		return {
			title: 'About | Aghil Jose | Full Stack Engineer',
		};
	},
	head() {
		return {
			title: this.title,
			meta: [
				{
					hid: 'about',
					name: 'About',
					content: 'About Full Stack Engineer Aghil Jose',
				},
			],
		};
	},
	components: {},
};
</script>

<style scoped>
.aboutImg {
	position: absolute;
	width: 25%;
	left: 0%;
	top: 5%;
}
.aboutTextContents {
	position: absolute;
	overflow: auto;
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-rows: 65vh 35vh;
}
.aboutTextContents::-webkit-scrollbar {
	display: none;
}
.aboutTitleContents {
	position: relative;
	display: grid;
	grid-template-columns: 30% 70%;
}
.aboutTitleHolder {
	position: relative;
	font-size: 8vw;
	color: var(--color-primary);
	top: 25%;
	left: -15%;
	height: 75%;
}
.aboutTextHolder {
	left: 25%;
	top: -35%;
	padding: 1%;
	position: relative;
	display: grid;
	grid-template-columns: auto auto;
	width: 75%;
	height: 135%;
}
.indTextHolder {
	position: relative;
	height: 100%;
	padding: 2%;
}
p {
	padding-top: 5%;
	font-size: 1vw;
}
.experienceHolder {
	position: relative;
	top: 40%;
}
.experienceTitle {
	font-size: 2vw;
}

@media only screen and (max-width: 600px) {
	.aboutTextContents {
		grid-template-columns: auto;
		grid-template-rows: 100vw 100vh;
	}
	.aboutTitleContents {
		grid-template-columns: auto;
		grid-template-rows: 75vw 25vw;
	}
	.aboutImg {
		top: 0%;
		height: 75vw;
		width: auto;
	}
	.aboutTitleHolder {
		font-size: 10vw;
		left: 0%;
		top: 0%;
		display: flex;
		height: 100%;
		align-items: center;
	}
	.aboutTextHolder {
		top: 0%;
		left: 0%;
		width: 100%;
		height: 90vw;
		grid-template-columns: auto;
		/* grid-template-rows: 60vw 30vw; */
	}
	.indTextHolder {
		padding: 0%;
	}
	.experienceHolder {
		top: 0%;
		left: 0%;
	}
	.experienceTitle {
		font-size: 5vw;
	}
	p {
		font-size: 3vw;
	}
}
</style>
