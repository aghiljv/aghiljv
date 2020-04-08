import axios from 'axios';

const url = 'http://localhost:5000/api/posts/';

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

	static downloadResume() {
		axios.get(`${url}downloadResume`, { responseType: 'blob' }).then((response) => {
			var fileURL = window.URL.createObjectURL(new Blob([response.data]));
			var fileLink = document.createElement('a');
			fileLink.href = fileURL;
			fileLink.setAttribute('download', 'Resume Aghil Jose.pdf');
			document.body.appendChild(fileLink);
			fileLink.click();
		});
	}
}

export default PostService;
