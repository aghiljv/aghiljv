<template>
	<div class="socialClass">
		<div class="computerScreen">
			<ul>
				<li style="background: #0077b7">
					<a href="https://www.linkedin.com/in/aghil-jose/" target="_blank" rel="noopener noreferrer">
						<img style="width : 100%; display : flex;" src="/img/linkedin.png" alt="LinkedIn" />
					</a>
				</li>
				<li
					style="background: radial-gradient(circle at 25% 110%,#fdf497 0,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%),radial-gradient(circle at 25% 110%,#b9a800 0,#938500 5%,#b10f00 45%,#8c0061 60%,#002ca9 90%)"
				>
					<a href="https://www.instagram.com/aghiljv/" target="_blank" rel="noopener noreferrer">
						<img style="width : 100%; display : flex;" src="/img/instagram.png" alt="Instagram" />
					</a>
				</li>
				<li style="background: #50abf1">
					<a href="https://twitter.com/aghiljv/" target="_blank" rel="noopener noreferrer">
						<img style="width : 100%; display : flex;" src="/img/twitter.png" alt="Twitter" />
					</a>
				</li>
				<li style="background: #3a559f">
					<a href="https://www.facebook.com/aghiljv" target="_blank" rel="noopener noreferrer">
						<img style="width : 100%; display : flex;" src="/img/facebook.png" alt="Facebook" />
					</a>
				</li>
				<li style="background: #2c2c2c">
					<a href="https://github.com/aghiljv" target="_blank" rel="noopener noreferrer">
						<img style="width : 100%; display : flex;" src="/img/github.png" alt="GitHub" />
					</a>
				</li>
			</ul>
		</div>
		<!-- for Phones -->
		<div class="phoneScreen">
			<ul>
				<li style="background: #0077b7">
					<a href="https://www.linkedin.com/in/aghil-jose/" target="_blank" rel="noopener noreferrer">
						<img style="width : 100%; display : flex;" src="/img/linkedinp.png" alt="LinkedIn" />
					</a>
				</li>
				<li
					style="background: radial-gradient(circle at 25% 110%,#fdf497 0,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%),radial-gradient(circle at 25% 110%,#b9a800 0,#938500 5%,#b10f00 45%,#8c0061 60%,#002ca9 90%)"
				>
					<a href="https://www.instagram.com/aghiljv/" target="_blank" rel="noopener noreferrer">
						<img style="width : 100%; display : flex;" src="/img/instagramp.png" alt="Instagram" />
					</a>
				</li>
				<li style="background: #50abf1">
					<a href="https://twitter.com/aghiljv/" target="_blank" rel="noopener noreferrer">
						<img style="width : 100%; display : flex;" src="/img/twitterp.png" alt="Twitter" />
					</a>
				</li>
				<li style="background: #3a559f">
					<a href="https://www.facebook.com/aghiljv" target="_blank" rel="noopener noreferrer">
						<img style="width : 100%; display : flex;" src="/img/facebookp.png" alt="Facebook" />
					</a>
				</li>
				<li style="background: #2c2c2c">
					<a href="https://github.com/aghiljv" target="_blank" rel="noopener noreferrer">
						<img style="width : 100%; display : flex;" src="/img/githubp.png" alt="GitHub" />
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>

<style scoped>
.socialClass {
	position: fixed;
	display: flex;
	align-items: center;
	height: 100%;
	width: 5%;
	z-index: 4;
}
.computerScreen {
	position: absolute;
	left: -30%;
	font-size: 0.5vw;
	color: white;
	transition: 0.5s;
	width: 100%;
}
.phoneScreen {
	position: absolute;
	bottom: 0.5%;
	font-size: 0.5vw;
	color: white;
	transition: 0.5s;
	width: 100%;
	z-index: 1;
}
ul {
	list-style-type: none;
	padding: 0%;
	text-align: left;
	width: 100%;
}
li {
	width: 85%;
	transition: 0.5s;
}

@media only screen and (max-width: 600px) {
	.computerScreen {
		display: none;
	}
	.socialClass {
		align-items: flex-end;
		width: 100%;
		bottom: 1%;
		height: 10%;
	}
	ul {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	li {
		width: 12vw;
	}
}
@media only screen and (min-width: 600px) {
	.phoneScreen {
		display: none;
	}
	li:hover {
		transform: translateX(20%);
	}
}
</style>
