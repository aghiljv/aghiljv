import axios from 'axios';

const url = '/api/posts/';

class PostService {
	//Get posts
	static getPosts() {
		return new Promise((resolve, reject) => {
			try {
				axios.get(url).then((response) => {
					const data = response.data;
					resolve(
						data.map((post) => ({
							...post,
							createdAt: new Date(post.createdAt),
						}))
					);
				});
			} catch (err) {
				reject(err);
			}
		});
	}

	//Create Posts
	static insertPost(text) {
		return axios.post(url, {
			text,
		});
	}

	//Delete Posts
	static deletePost(id) {
		return axios.delete(`${url}${id}`);
	}
}

export default PostService;
