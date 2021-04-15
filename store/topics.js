import data from 'assets/data/topics.json';

export const state = () => ({
    topics: data,
    shownTopics: [],
    favorites: [],
    currentTopicId: undefined,
});

export const actions = {
    getFavorites(context) {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        context.commit("updateFavoriteTopics", favorites);
    },
    nextTopic(context) {
        const topicAmount = context.getters.getTopicAmount;
        let shownTopics = [...context.getters.getShownTopics];
        let randomId;
        while (!randomId || shownTopics.indexOf(randomId) > -1) {
            randomId = Math.floor(Math.random() * topicAmount) + 1;
        }
        shownTopics.push(randomId);
        context.commit("setCurrentTopicId", { topicId: randomId, shownTopics });
    },
    resetTopics(context) {
        const topicAmount = context.getters.getTopicAmount;
        const randomId = Math.floor(Math.random() * topicAmount) + 1;
        const shownTopics = [randomId]
        context.commit("setCurrentTopicId", { topicId: randomId, shownTopics });
    },
    toggleFavoriteTopic(context) {
        const topicId = context.getters.getCurrentTopicId;
        const favorites = [...context.getters.getFavoriteTopics];
        const favoriteIndex = favorites.indexOf(topicId);
        if (favoriteIndex === -1) {
            favorites.push(topicId);
        } else {
            favorites.splice(favoriteIndex, 1);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites))
        context.commit("updateFavoriteTopics", favorites);
    },
};

export const mutations = {
    setTopics(state, payload) {
        state.topics = payload;
    },
    setCurrentTopicId(state, payload) {
        const { topicId, shownTopics } = payload;
        state.currentTopicId = topicId;
        state.shownTopics = shownTopics;
    },
    updateFavoriteTopics(state, payload) {
        state.favorites = payload;
    },
};

export const getters = {
    getCurrentTopicId: (state) => {
        return state.currentTopicId;
    },
    getRandomTopic: (state) => {
        return state.topics.find((topic) => topic.id === state.currentTopicId);
    },
    getTopicAmount: (state) => {
        return state.topics.length;
    },
    getFavoriteTopics: (state) => {
        return state.favorites;
    },
    getShownTopics: (state) => {
        return state.shownTopics;
    },
    allTopicsShown: (state, getters) => {
        const topicAmount = getters.getTopicAmount;
        return state.shownTopics.length === topicAmount;
    },
    currentTopicIsFavorite: (_, getters) => {
        const favorites = getters.getFavoriteTopics;
        const currentTopicId = getters.getCurrentTopicId;
        return favorites.indexOf(currentTopicId) > -1;
    },
};
