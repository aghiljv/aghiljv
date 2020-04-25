<template>
	<div class="container">
		<img src="/img/homelogo.png" class="contactImg" alt="Aghil Jose" />
		<div class="contactDescHolder">
			<p>
				I am mostly active on
				<a href="https://www.linkedin.com/in/aghil-jose/" target="_blank" rel="noopener noreferrer"
					><u>LinkedIn</u>
				</a>
				and reachable <a href="mailto:aghiljv@gmail.com"><u>via email</u></a>
			</p>
			<p>But you can also find me in most places on internet as <u>@aghiljv</u></p>
			<p>
				You can also check out my <span @click="downloadResume()"><u>resume</u></span>
			</p>
		</div>
		<div class="experienceHolder">
			<a
				href="https://www.linkedin.com/in/aghil-jose/"
				target="_blank"
				rel="noopener noreferrer"
				class="indConatct"
			>
				<img class="contactContent" src="/img/linkedinp.png" alt="LinkedIn" />
				<div class="contactContent">LinkedIn</div>
			</a>
			<a href="https://github.com/aghiljv" target="_blank" rel="noopener noreferrer" class="indConatct">
				<img class="contactContent" src="/img/githubp.png" alt="GitHub" />
				<div class="contactContent">GitHub</div>
			</a>
			<a href="https://twitter.com/aghiljv/" target="_blank" rel="noopener noreferrer" class="indConatct">
				<img class="contactContent" src="/img/twitterp.png" alt="Twitter" />
				<div class="contactContent">Twitter</div>
			</a>
			<a href="https://www.instagram.com/aghiljv/" target="_blank" rel="noopener noreferrer" class="indConatct">
				<img class="contactContent" src="/img/instagramp.png" alt="Instagram" />
				<div class="contactContent">Instagram</div>
			</a>
			<a href="https://www.facebook.com/aghiljv" target="_blank" rel="noopener noreferrer" class="indConatct">
				<img class="contactContent" src="/img/facebookp.png" alt="Facebook" />
				<div class="contactContent">Facebook</div>
			</a>
		</div>
	</div>
</template>

<script>
import ServerService from '../static/ServerService.js';
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
					hid: 'contact',
					name: 'Contact',
					content: 'Contact Full Stack Engineer Aghil Jose',
				},
			],
		};
	},
	methods: {
		async downloadResume() {
			await ServerService.downloadResume();
		},
	},
	components: {},
};
</script>

<style scoped>
.contactImg {
	position: absolute;
	width: 45%;
	left: 0%;
	top: 10%;
	/* filter: grayscale(1);*/
}

.contactTitleHolder {
	position: absolute;
	font-size: 8rem;
	color: var(--color-primary);
	top: 20%;
	left: 20%;
}
.contactDescHolder {
	position: absolute;
	width: 35%;
	top: 35%;
	left: 45%;
	text-align: left;
}
p {
	padding-top: 5%;
	font-size: 1.5rem;
}
a {
	text-decoration: none;
	color: var(--color-primary);
	font-weight: bolder;
}
span {
	cursor: pointer;
}
.logoImg {
	position: absolute;
	right: 5%;
	width: 25%;
	bottom: 5%;
}
.experienceHolder {
	position: absolute;
	top: 60%;
	left: 45%;
	widows: 35%;
	display: flex;
	flex-direction: column;
}
.indConatct {
	display: inline-flex;
	align-items: center;
	padding: 1%;
}
.contactContent {
	display: inline-block;
	width: 20%;
	padding: 1%;
}
img.contactContent {
	width: 10%;
	filter: var(--invert-value);
}

@media only screen and (max-width: 600px) {
	.contactImg {
		top: 5%;
		width: 100%;
	}
	.contactTitleHolder {
		font-size: 2.5rem;
		top: 55%;
		left: 0%;
	}
	.contactDescHolder {
		width: 100%;
		left: 0%;
		top: 55%;
	}
	.logoImg {
		top: 110%;
		width: 100%;
		right: 0%;
	}
	.experienceHolder {
		top: 90%;
		left: 0%;
	}
}
</style>
