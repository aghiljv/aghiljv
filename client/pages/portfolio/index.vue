<template>
	<div class="container">
		<div class="portfolioContainer" v-touch:swipe.bottom="swipeUpAction" v-touch:swipe.top="swipeDownAction">
			<PortfolioMain :portfolioName="portfolio.name" :portfolioImage="portfolio.titleImage" />
		</div>
	</div>
</template>

<script>
import ServerService from '../../static/ServerService.js';
import PortfolioMain from '../../components/portfolio/PortfolioMain.vue';
export default {
	components: {
		PortfolioMain
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
			firstLoad: true
		};
	},
	head() {
		return {
			title: this.title,
			meta: [
				{
					hid: 'portfolio',
					name: 'Portfolio',
					content: 'The portfolio of Full Stack Engineer Aghil Jose'
				}
			]
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
		}
	},
	watch: {
		scrollState() {
			if (this.scrollState == 'up') {
				if (this.currentIndex > 0) {
					this.switchPortfolio(0);
					setTimeout(() => {
						this.currentIndex--;
					}, 500);
				}
			} else if (this.scrollState == 'down') {
				if (this.currentIndex < this.maxIndex - 1) {
					this.switchPortfolio(0);
					setTimeout(() => {
						this.currentIndex++;
					}, 500);
				}
			} else {
				this.switchPortfolio(1);
			}
		}
	},
	computed: {
		portfolios() {
			return this.$store.state.portfolios.portfolios;
		},
		portfolio() {
			return this.portfolios[this.currentIndex];
		},
		maxIndex() {
			return this.$store.state.portfolios.portfolios.length;
		}
	}
};
</script>

<style scoped>
.portfolioContainer {
	position: absolute;
	width: 100%;
}
@media only screen and (max-width: 600px) {
	.portfolioContainer {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
	}
}
</style>
