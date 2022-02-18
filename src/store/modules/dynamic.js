const state = () => ({
    test: 'test'
})

const getters = {
    getFormFields: state => state
}

const actions = {
    setDynamicState({commit}, newState) {
      commit('SET_DYNAMIC_STATE', newState)
    },
    updateDynamicState({commit}, update) {
        commit('UPDATE_DYNAMIC_STATE', update)
    }
}

const mutations = {
    SET_DYNAMIC_STATE: (state, newState) => {
      state = newState
    },
    UPDATE_DYNAMIC_STATE: (state, update) => {
        state[update.key] = update.value
    },
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
}
