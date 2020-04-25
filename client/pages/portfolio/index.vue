<template>
	<div class="container">
		<div class="portfolioContainer" v-touch:swipe.right="swipeUpAction" v-touch:swipe.left="swipeDownAction">
			<div class="portContentContainer">
				<PortfolioMain
					v-for="(portfolio, index) in portfolios"
					v-bind:item="portfolio"
					v-bind:index="index"
					v-bind:key="portfolio._id"
					:portfolioName="portfolio.name"
					:portfolioImage="portfolio.titleImage"
					:portfolioBrief="portfolio.briefdesc"
					:activePortIndex="activePortIndex"
				/>
			</div>
			<div class="portNavContainer">
				<PortfolioNav
					v-for="(portfolio, index) in portfolios"
					v-bind:index="index"
					v-bind:key="portfolio._id"
					:portfolioName="portfolio.name"
					:portfolioImage="portfolio.titleImage"
					@setActiveOpacity="setActiveOpacity($event)"
					@setDetPos="setDetPos($event)"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import ServerService from '../../static/ServerService.js';
import PortfolioMain from '../../components/portfolio/PortfolioMain.vue';
import PortfolioNav from '../../components/portfolio/PortfolioNav.vue';
export default {
	components: {
		PortfolioMain,
		PortfolioNav,
	},
	data() {
		return {
			title: 'Aghil Jose | Full Stack Engineer',
			scrollState: null,
			swipeState: null,
			scrollDirecton: 0,
			currentIndex: 0,
			minIndex: 0,
			error: '',
			currentDeltaY: 0,
			firstLoad: true,
			activePortIndex: -1,
		};
	},
	head() {
		return {
			title: this.title,
			meta: [
				{
					hid: 'portfolio',
					name: 'Portfolio',
					content: 'The portfolio of Full Stack Engineer Aghil Jose',
				},
			],
		};
	},
	mounted() {
		document.getElementById('mainContent').addEventListener('wheel', this.handleScroll);
	},
	methods: {
		handleScroll(e) {
			this.firstLoad = false;
			if (e.deltaY < -20) {
				this.scrollState = 'up';
			} else if (e.deltaY > 20) {
				this.scrollState = 'down';
			}
			if (e.deltaY == -1 || e.deltaY == 1) {
				this.scrollState = null;
			}
		},
		switchPortfolio(opacityState) {
			document.getElementById('portfolioDisplay').style.opacity = opacityState;
		},
		swipeUpAction() {
			this.scrollState = 'up';
			setTimeout(() => {
				this.scrollState = null;
			}, 500);
		},
		swipeDownAction() {
			this.scrollState = 'down';
			setTimeout(() => {
				this.scrollState = null;
			}, 500);
		},
		setActiveOpacity(index) {
			this.activePortIndex = index;
		},
		setDetPos(e) {
			let currentNavId = 'portNav' + this.activePortIndex;
			let currentDetId = 'portfolioItem' + this.activePortIndex;
			let centreWidth = document.getElementById(currentNavId).clientWidth / 2;
			let centreHeight = document.getElementById(currentNavId).clientHeight / 2;
			let changeY = (centreHeight - e.offsetY) / -50;
			let changeX = (centreWidth - e.offsetX) / -20;

			document.getElementById(currentDetId).style.transform = 'translate(' + changeX + '%, ' + changeY + '%)';
		},
	},
	watch: {
		scrollState() {
			if (this.scrollState == 'up') {
				if (this.currentIndex > 0) {
					// this.switchPortfolio(0);
					setTimeout(() => {
						this.currentIndex--;
					}, 500);
				}
			} else if (this.scrollState == 'down') {
				if (this.currentIndex < this.maxIndex - 1) {
					// this.switchPortfolio(0);
					setTimeout(() => {
						this.currentIndex++;
					}, 500);
				}
			} else {
				// this.switchPortfolio(1);
			}
		},
	},
	computed: {
		portfolios() {
			return this.$store.state.portfolios.portfolios;
		},
		// portfolio() {
		// 	return this.portfolios[this.currentIndex];
		// },
		maxIndex() {
			return this.$store.state.portfolios.portfolios.length;
		},
	},
};
</script>

<style scoped>
.portfolioContainer {
	position: absolute;
	width: 100%;
	height: 100%;
	overflow: auto;
	bottom: 0%;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.portfolioContainer::-webkit-scrollbar {
	display: none;
}
.portContentContainer {
	position: absolute;
	height: 100%;
	width: 100%;
	left: 0%;
}
.portNavContainer {
	position: absolute;
	height: 50%;
	width: 50%;
	right: 0%;
	display: flex;
	flex-direction: column;
	margin: 1%;
}
@media only screen and (max-width: 600px) {
	.portNavContainer {
		width: 100%;
	}
}
</style>
