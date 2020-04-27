<template>
	<div class="container">
		<nuxt-link class="backButton" id="blogDisplay" :to="'/blog/'"
			>« Return to List <br />
			BLOGS</nuxt-link
		>
		<div class="blogContainer">
			<div class="blogTitleImageHolder">
				<img class="blogTitleImg" :src="`/img/blog/${blogItem.titleImage}.jpg`" alt="blogImage" />
			</div>
			<div class="blogTitle">{{ blogItem.name }}</div>
			<div class="blogContentHolder">
				<div class="blogContent" v-html="blogItem.content"></div>
			</div>
		</div>
	</div>
</template>

<script>
import ServerService from '../../static/ServerService.js';

export default {
	transition: 'fade',
	head() {
		return {
			title: this.title,
			meta: [
				{
					hid: 'blog',
					name: 'Blog',
					content: 'The blog of Full Stack Engineer Aghil Jose',
				},
			],
		};
	},
	data() {
		return {
			title: 'Aghil Jose | Full Stack Engineer',
			blogItem: {},
			currentRoute: '',
		};
	},
	async mounted() {
		if (this.$store.state.blogs.blogs.length > 1) {
			let blogsContent = this.$store.state.blogs.blogs;
			blogsContent.forEach((blogContent) => {
				if (blogContent.name == this.$route.params.name) {
					this.blogItem = blogContent;
				}
			});
		} else {
			let blogsContent = await ServerService.getBlog(this.$route.params.name);
			this.blogItem = blogsContent[0];
		}
		this.$emit('currentRoute', 'BLOG');
	},
	validate({ params }) {
		return isNaN(+params.name);
	},
};
</script>

<style scoped>
.backButton {
	position: absolute;
	text-decoration: none;
	top: 10%;
	color: var(--primary-color);
	z-index: 6;
}
.container {
	/* flex-direction: column; */
}
.blogContainer {
	position: absolute;
	width: 100%;
	height: 100%;
	overflow: auto;
	-ms-overflow-style: none;
	color: var(--primary-color);
}
.blogContainer::-webkit-scrollbar {
	display: none;
}
.blogTitleImageHolder {
	/* position: absolute; */
	top: 0%;
	width: 100%;
	height: 40%;
	display: flex;
	justify-content: center;
}
.blogTitleImg {
	height: 100%;
}
.blogTitle {
	/* position: absolute; */
	top: 40%;
	width: 100%;
	text-align: center;
	font-size: 4rem;
}
.blogContentHolder {
	/* position: absolute; */
	display: flex;
	justify-content: center;
	width: 100%;
	top: 50%;
	font-size: 1rem;
}
.blogContent {
	width: 50%;
}
@media only screen and (max-width: 600px) {
	.backButton {
		position: unset;
	}
	.blogContainer {
		top: 10%;
		height: 85%;
	}
	.blogTitleImageHolder {
		height: 35%;
	}
	.blogTitle {
		font-size: 2rem;
	}
	.blogContent {
		width: 100%;
	}
}
</style>
