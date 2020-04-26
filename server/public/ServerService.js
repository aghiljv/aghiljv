import axios from 'axios';

// const url = 'http://localhost:5000/api/posts/';
const url = 'https://aghiljv.herokuapp.com/api/posts/';

// const blogUrl = 'http://localhost:5000/api/blogs/';
const blogUrl = 'https://aghiljv.herokuapp.com/api/blogs/';

class ServerService {
	//Get posts
	static getPortfolios() {
		return new Promise((resolve, reject) => {
			try {
				axios.get(url).then((response) => {
					const data = response.data;
					resolve(
						data.map((post) => ({
							...post,
						}))
					);
				});
			} catch (err) {
				reject(err);
			}
		});
	}

	//Get Blogs
	static getBlogs() {
		return new Promise((resolve, reject) => {
			try {
				axios.get(blogUrl).then((response) => {
					const blogData = response.data;
					resolve(
						blogData.map((blog) => ({
							...blog,
						}))
					);
				});
			} catch (err) {
				reject(err);
			}
		});
	}

	static getBlog(name) {
		return new Promise((resolve, reject) => {
			try {
				axios.get(`${blogUrl}${name}`).then((response) => {
					const blogData = response.data;
					resolve(
						blogData.map((blog) => ({
							...blog,
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

export default ServerService;
