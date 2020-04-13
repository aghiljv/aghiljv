<template>
	<div class="container">
		<h1>Latest Posts</h1>
		<div class="create-post">
			<label for="create-post">Say Something</label>
			<input type="text" id="create-post" v-model="text" placeholder="Create post" />
			<button v-on:click="createPost">Post</button>
		</div>
		<hr />
		<p class="error" v-if="error">{{ error }}</p>
		<div class="posts-container">
			<div
				class="post"
				v-for="(post, index) in posts"
				v-bind:item="post"
				v-bind:index="index"
				v-bind:key="post._id"
				v-on:dblclick="deletePost(post._id)"
			>
				{{ `${post.name}` }}
				<p class="text">{{ post.titleImage }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import ServerService from '../static/ServerService.js';

export default {
	name: 'PostComponent',
	data() {
		return {
			posts: [],
			error: '',
			text: '',
		};
	},
	async created() {
		try {
			this.posts = await ServerService.getPosts();
		} catch (err) {
			this.error = err.message;
		}
	},
	methods: {
		async createPost() {
			await ServerService.insertPost(this.text);
			this.posts = await ServerService.getPosts();
		},
		async deletePost(id) {
			await ServerService.deletePost(id);
			this.posts = await ServerService.getPosts();
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
	display: flex;
	flex-direction: column;
	flex: 1;
	height: 100%;
}
.posts-container {
	align-items: center;
	justify-content: center;
}
.post {
	margin: 1%;
	padding: 1%;
	width: 50%;
	display: inline-block;
	border: 1px solid rgba(54, 197, 18, 0.5);
	background: rgba(54, 197, 18, 0.137);
}
</style>
