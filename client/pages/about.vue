<template>
	<div class="container">
		<img src="/img/about.jpg" class="aboutImg" />
		<div class="aboutTitleHolder">HEY THERE, I'M <br />AGHIL JOSE</div>
		<div class="aboutDescHolder">
			<p>
				A Full Stack Engineer based in Trivandrum, Kerala, India. I'm into learning new technologies as well as
				working in challenging environments.
			</p>
			<p>
				I often build applications that leaves people wondering, "How was this bult?". I hold experience in
				End-to-End Application Development and have worked with Accenture and Nissan Motor Coorperation.
				Experienced in Automotive visualization and virtual testing environment for Autonomous vehicles.
			</p>
			<p>
				A team player with strong inter-personal skills, with the ability to collaborate with cross-functional
				teams. Apart from these, I love football, travel, photography and reading.
			</p>
		</div>
		<img src="/img/logo.png" class="logoImg" />
	</div>
</template>

<script>
export default {
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
	/* filter: grayscale(1); */
}
.aboutTitleHolder {
	position: absolute;
	font-size: 8rem;
	color: var(--color-primary);
	top: 20%;
	left: 20%;
}
.aboutDescHolder {
	position: absolute;
	width: 30%;
	top: 55%;
	left: 30%;
	text-align: left;
}
p {
	padding-top: 5%;
}
.logoImg {
	position: absolute;
	right: 5%;
	width: 25%;
	bottom: 5%;
}

@media only screen and (max-width: 600px) {
	.aboutImg {
		top: 10%;
		width: 50%;
	}
	.aboutTitleHolder {
		font-size: 2rem;
		top: 55%;
		left: 0%;
	}
	.aboutDescHolder {
		width: 100%;
		left: 0%;
		top: 65%;
	}
	.logoImg {
		top: 110%;
		width: 100%;
		right: 0%;
	}
}
</style>
