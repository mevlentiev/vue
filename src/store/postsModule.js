import axios from "axios";

export const postsModule = {
    namespaced: true,
    state: () => ({
        posts: [],
        options: [
            {
                value: 'title',
                title: "Sorting by title"
            },
            {
                value: 'body',
                title: "Sorting by text"
            }
        ],
        selectedOption: 'default',
        searchQuery: '',
        limit: 10,
        page: 1,
        totalPages: 0,
        isLoading: false
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((post1, post2) => post1[state.selectedOption]?.localeCompare(post2[state.selectedOption]))
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        setPosts (state, posts) {
            state.posts = posts
        },
        setSelectedOption (state, selectedOption) {
            state.selectedOption = selectedOption
        },
        setSearchQuery (state, searchQuery) {
            state.searchQuery = searchQuery
        },
        setPage (state, page) {
            state.page = page
        },
        setTotalPages (state, totalPages) {
            state.totalPages = totalPages
        },
        setIsLoading (state, isLoading) {
            state.isLoading = isLoading
        }
    },
    actions: {
        async fetchPosts({state, commit}) {
            commit('setIsLoading', true);

            await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: state.limit,
                    _page: state.page
                }
            })
                .then(response => {
                    commit('setTotalPages', Math.ceil(response.headers.get('x-total-count') / state.limit));
                    commit('setPosts', response.data);
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() =>  commit('setIsLoading', false));
        },

        async loadMorePosts({state, commit}) {
            commit('setPage', state.page + 1);

            await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: state.limit,
                    _page: state.page
                }
            })
                .then(response => {
                    commit('setPosts', [...state.posts,...response.data]);
                })
                .catch(error => {
                    console.log(error)
                });
        }
    }
}