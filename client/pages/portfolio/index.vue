<template>
	<div class="container">
		<div class="portfolioContainer" v-touch:swipe.top="swipeDownAction" v-touch:swipe.bottom="swipeUpAction">
			<PortfolioMain
				v-for="(portfolio, index) in portfolios"
				v-bind:item="portfolio"
				v-bind:index="index"
				v-bind:key="portfolio._id"
				v-if="index == currentIndex"
				:portfolioName="portfolio.name"
				:portfolioImage="portfolio.titleImage"
			/>
		</div>
	</div>
</template>

<script>
import ServerService from '../../static/ServerService.js';
import PortfolioMain from '../../components/portfolio/PortfolioMain.vue';
export default {
	components: {
		PortfolioMain,
	},
	data() {
		return {
			title: 'Aghil Jose | Full Stack Engineer',
			portfolios: [],
			scrollState: null,
			currentIndex: 0,
			minIndex: 0,
			maxIndex: 0,
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
	async created() {
		try {
			this.portfolios = await ServerService.getPortfolios();
		} catch (err) {
			this.error = err.message;
		}
	},
	mounted() {
		document.getElementById('mainContent').addEventListener('wheel', this.handleScroll);
	},
	methods: {
		handleScroll(e) {
			if (e.deltaY < -20) {
				this.scrollState = 'up';
			} else if (e.deltaY > 20) {
				this.scrollState = 'down';
			}
		},
		swipeUpAction() {
			this.scrollState = 'up';
		},
		swipeDownAction() {
			this.scrollState = 'down';
		},
	},
	watch: {
		scrollState() {
			if (this.currentIndex > 0) {
				this.currentIndex--;
			} else if (this.currentIndex < this.maxIndex) {
				this.currentIndex++;
			}
		},
		portfolios() {
			this.maxIndex = this.portfolios.length;
		},
	},
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
