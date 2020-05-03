export const state = () => ({
	pageTitle: '',
});

export const mutations = {
	set(state, data) {
		state.pageTitle = data;
	},
};
