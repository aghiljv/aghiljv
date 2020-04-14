export const state = () => ({
	blogs: [
		{
			_id: '5e95ecc51c9d4400008c50bd',
			name: 'E2E Testing Benefits',
			titleImage: 'e2e',
			briefdesc: 'An article to inspire you to perform End to End Testing in application'
		}
	]
});

export const mutations = {
	add(state, data) {
		state.blogs = data;
	}
};
