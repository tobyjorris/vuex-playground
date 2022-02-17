import Vue from 'vue'
import Vuex from 'vuex'
import name from "@/store/modules/name";
import preferences from "@/store/modules/preferences";
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        name,
        preferences
    }
})

export default store
