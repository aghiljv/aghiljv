<template>
	<div class="container">
		<img src="/img/about.jpg" class="aboutImg" alt="Aghil Jose" />
		<div class="aboutTitleHolder">HEY THERE, I'M <br />AGHIL JOSE</div>
		<div class="aboutTextHolder">
			<div class="indTextHolder">
				<p>
					A Full Stack Engineer based in Trivandrum, Kerala, India. I'm into learning new technologies as well
					as working in challenging environments.
				</p>
				<p>
					I often build applications that leaves people wondering, "How was this bult?". I hold experience in
					End-to-End Application Development and have worked with Accenture and Nissan Motor Coorperation.
					Experienced in Automotive visualization and virtual testing environment for Autonomous vehicles.
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
</template>

<script>
export default {
	transition: 'fade',
	data() {
		return {
			title: 'Aghil Jose | Full Stack Engineer',
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
.aboutTitleHolder {
	position: absolute;
	font-size: 8vw;
	color: var(--color-primary);
	top: 15%;
	left: 20%;
}
.aboutTextHolder {
	position: absolute;
	top: 50%;
	left: 30%;
	display: grid;
	grid-template-columns: auto auto;
}
.indTextHolder {
	padding: 5%;
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
	.aboutImg {
		top: 10%;
		width: 50%;
	}
	.aboutTitleHolder {
		font-size: 12vw;
		top: 55%;
		left: 0%;
	}
	.aboutTextHolder {
		top: 75%;
		left: 0%;
		grid-template-columns: auto;
	}
	.indTextHolder {
		padding: 5% 0% 0% 0%;
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
