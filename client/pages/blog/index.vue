<template>
	<div class="container">
		<div class="blogContainer" v-touch:swipe.right="swipeUpAction" v-touch:swipe.left="swipeDownAction">
			<BlogMain
				v-for="(portfolio, index) in portfolios"
				v-bind:item="portfolio"
				v-bind:index="index"
				v-bind:key="portfolio._id"
				:portfolioName="portfolio.name"
				:portfolioImage="portfolio.titleImage"
				:portfolioBrief="portfolio.briefdesc"
			/>
		</div>
	</div>
</template>

<script>
import BlogMain from '../../components/blog/BlogMain.vue'; //to change

export default {
	components: {
		BlogMain //to change
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
					hid: 'blog',
					name: 'Blog',
					content: 'The blog of Full Stack Engineer Aghil Jose'
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
		}
	},
	computed: {
		portfolios() {
			// console.log(this.$store.state.blogs.blogs);
			return this.$store.state.blogs.blogs;
		},
		// portfolio() {
		// 	return this.portfolios[this.currentIndex];
		// },
		maxIndex() {
			return this.$store.state.blogs.blogs.length;
		}
	}
};
</script>

<style scoped>
.blogContainer {
	position: absolute;
	width: 100%;
	height: 100%;
	overflow: auto;
	padding-top: 5%;
	/* display: flex;
	align-items: center;
	justify-content: center; */
}
/* @media only screen and (max-width: 600px) {
    .blogContainer {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }
} */
</style>
