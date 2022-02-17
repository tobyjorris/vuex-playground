const state = () => ({
    favorites: {
        color: '',
        season: {},
        foods: []
    }
})

const actions = {
    updatePreferences({commit}, update) {
        commit('UPDATE_PREFERENCES', update)
    }
}

const mutations = {
    UPDATE_PREFERENCES: (state, update) => {
        state.favorites[update.key] = update.value
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
}
