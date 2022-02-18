const state = () => ({
    firstName: '',
    middleName: '',
    lastName: ''
})

const getters = {
    getFirstName: state => state.firstName,
    getMiddleName: state => state.middleName,
    getLastName: state => state.lastName
}

const mutations = {
    setFirstName: (state, value) => {
        state.firstName = value
    },
    setMiddleName: (state, value) => {
        state.middleName = value
    },
    setLastName: (state, value) => {
        state.lastName = value
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
}
