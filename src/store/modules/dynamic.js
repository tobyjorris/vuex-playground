import Vue from 'vue'

const state = () => ({

})

const getters = {
    getFormFields: state => state['form']
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
        const formName = Object.keys(newState)[0]
        Vue.set(state,formName, newState[formName])
    },
    UPDATE_DYNAMIC_STATE: (state, update) => {
        state[update.form][update.key] = update.value
    },
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
}
