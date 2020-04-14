export const state = () => ({
	portfolios: [
		{
			_id: '5e9311b61c9d4400003cf285',
			name: 'Feel',
			titleImage: 'feel'
		}
	]
});

export const mutations = {
	add(state, data) {
		state.portfolios = data;
	}
};
