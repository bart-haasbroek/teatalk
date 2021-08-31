import data from 'assets/data/topics.json';

export const state = () => ({
    topics: data,
    shownTopicsIds: [],
    favorites: [],
    currentTopicId: undefined,
    showFavorites: false,
});

function getRandomTopicId(topics) {
    const topicAmount = topics.length;
    const randomIndex = Math.floor(Math.random() * topicAmount) + 1;
    return topics[randomIndex - 1].id;
}

export const actions = {
    getFavorites(context) {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        context.commit("updateFavoriteTopics", favorites);
    },
    showFavorites(context, payload) {
        context.commit('showFavorites', payload);
        context.dispatch('nextTopic');
    },
    nextTopic(context) {
        const topics = context.getters.getTopics;
        if (topics.length === 0) {
            return undefined;
        }
        let shownTopicsIds = [...context.getters.getshownTopicsIds];
        let topicId;
        while (!topicId || shownTopicsIds.indexOf(topicId) > -1) {
            topicId = getRandomTopicId(topics);
        }
        shownTopicsIds.push(topicId);
        context.commit("setCurrentTopicId", { topicId, shownTopicsIds });
    },
    resetTopics(context) {
        const topicId = getRandomTopicId(context.getters.getTopics);
        const shownTopicsIds = [topicId];
        context.commit("setCurrentTopicId", { topicId, shownTopicsIds });
    },
    toggleFavoriteTopic(context) {
        const isShowingFavorites = context.state.showFavorites;
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
        if (isShowingFavorites) {
            context.dispatch('nextTopic');
        }
    },
};

export const mutations = {
    setTopics(state, payload) {
        state.topics = payload;
    },
    setCurrentTopicId(state, payload) {
        const { topicId, shownTopicsIds } = payload;
        state.currentTopicId = topicId;
        state.shownTopicsIds = shownTopicsIds;
    },
    updateFavoriteTopics(state, payload) {
        state.favorites = payload;
    },
    showFavorites(state, payload) {
        state.showFavorites = payload;
        state.shownTopicsIds = [];
    },
};

export const getters = {
    getCurrentTopicId: (state) => {
        return state.currentTopicId;
    },
    getTopics: (state) => {
        const showFavorites = state.showFavorites;
        const favoriteTopicIds = state.favorites;
        const favorites = state.topics.filter((topic) => favoriteTopicIds.indexOf(topic.id) > -1);
        return showFavorites ? favorites : state.topics;
    },
    getRandomTopic: (state, getters) => {
        return getters.getTopics.find((topic) => topic.id === state.currentTopicId);
    },
    getFavoriteTopics: (state) => {
        return state.favorites;
    },
    getshownTopicsIds: (state) => {
        return state.shownTopicsIds;
    },
    allTopicsShown: (state, getters) => {
        const topics = getters.getTopics;
        return state.shownTopicsIds.length === topics.length;
    },
    currentTopicIsFavorite: (_, getters) => {
        const favorites = getters.getFavoriteTopics;
        const currentTopicId = getters.getCurrentTopicId;
        return favorites.indexOf(currentTopicId) > -1;
    },
};
