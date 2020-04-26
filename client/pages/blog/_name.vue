<template>
	<div class="container">
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
		};
	},
	mounted() {
		let blogsContent = this.$store.state.blogs.blogs;
		blogsContent.forEach((blogContent) => {
			console.log(blogContent);
			if (blogContent.name == this.$route.params.name) {
				this.blogItem = blogContent;
			}
		});
	},
	validate({ params }) {
		return isNaN(+params.name);
	},
};
</script>

<style scoped>
.indBlog {
	position: absolute;
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
	.blogTitleImageHolder {
		height: 30%;
	}
	.blogTitle {
		font-size: 2rem;
	}
	.blogContent {
		width: 100%;
	}
}
</style>
