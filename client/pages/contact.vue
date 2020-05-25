<template>
	<div class="container">
		<div class="contentContainer">
			<img src="/img/homelogo.png" class="contactImg" alt="Aghil Jose" />
			<div class="contactTextContent">
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
				<div class="contactHolder">
					<a
						href="https://www.linkedin.com/in/aghil-jose/"
						target="_blank"
						rel="noopener noreferrer"
						class="indConatct"
					>
						<div class="contactTitleContent">
							<img class="contactContent" src="/img/linkedinp.png" alt="LinkedIn" />
							<div class="contactContent">LinkedIn</div>
						</div>
						<div class="contactDesc">
							I am mostly active around here with posts and articles on a regualr basis which are relevant
							to the profession.
						</div>
					</a>
					<a href="https://github.com/aghiljv" target="_blank" rel="noopener noreferrer" class="indConatct">
						<div class="contactTitleContent">
							<img class="contactContent" src="/img/githubp.png" alt="GitHub" />
							<div class="contactContent">GitHub</div>
						</div>
						<div class="contactDesc">
							This is the place where I do my personal and fun projects. Although, most of the
							repositories are private.
						</div>
					</a>
					<a href="https://twitter.com/aghiljv/" target="_blank" rel="noopener noreferrer" class="indConatct">
						<div class="contactTitleContent">
							<img class="contactContent" src="/img/twitterp.png" alt="Twitter" />
							<div class="contactContent">Twitter</div>
						</div>
						<div class="contactDesc">
							I am not much for the twitterverse. But, I have my moments.
						</div>
					</a>
					<a
						href="https://www.instagram.com/aghiljv/"
						target="_blank"
						rel="noopener noreferrer"
						class="indConatct"
					>
						<div class="contactTitleContent">
							<img class="contactContent" src="/img/instagramp.png" alt="Instagram" />
							<div class="contactContent">Instagram</div>
						</div>
						<div class="contactDesc">
							This is the platform I use to showcase one of my hobbies - Photography.
						</div>
					</a>
					<a
						href="https://www.facebook.com/aghiljv"
						target="_blank"
						rel="noopener noreferrer"
						class="indConatct"
					>
						<div class="contactTitleContent">
							<img class="contactContent" src="/img/facebookp.png" alt="Facebook" />
							<div class="contactContent">Facebook</div>
						</div>
						<div class="contactDesc">
							I just go in for the memes.
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ServerService from '../static/ServerService.js';
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
.contentContainer {
	position: absolute;
	display: grid;
	grid-template-columns: 30vw 50vw;
	min-height: 100%;
}
.contactImg {
	position: relative;
	width: 90%;
	left: 0%;
	top: 10%;
}
.contactTextContent {
	position: relative;
	top: 30%;
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: 30vh 40vh;
}
.contactTitleHolder {
	position: absolute;
	font-size: 8vw;
	color: var(--color-primary);
	top: 20%;
	left: 20%;
}
.contactDescHolder {
	width: 60%;
	top: 30%;
	left: 45%;
	text-align: left;
}
.contactTitleContent {
	display: flex;
	align-items: center;
}
.contactDesc {
	padding-left: 12%;
	position: relative;
	font-size: 0.8vw;
	font-weight: lighter;
}
p {
	padding-top: 5%;
	font-size: 1.25vw;
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
.contactHolder {
	top: 60%;
	left: 45%;
	display: grid;
	grid-template-columns: auto auto;
}
.indConatct {
	/* display: inline-flex; */
	align-items: center;
	padding: 1%;
}
.contactContent {
	display: inline-block;
	width: 80%;
	padding: 1%;
	font-size: 1vw;
}
img.contactContent {
	width: 10%;
	filter: var(--invert-value);
}

@media only screen and (max-width: 600px) {
	.contentContainer {
		grid-template-columns: auto;
		grid-template-rows: 30%;
	}
	.contactImg {
		top: 0%;
		width: 100%;
	}
	.contactTextContent {
		top: 0%;
		grid-template-rows: auto;
	}
	.contactTitleHolder {
		font-size: 2.5vw;
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
	.contactHolder {
		top: 90%;
		left: 0%;
		grid-template-columns: auto;
	}
	p {
		font-size: 5vw;
	}
	.contactDesc {
		font-size: 3vw;
	}
	.contactContent {
		font-size: 5vw;
	}
}
</style>
