import Vue from 'vue'
import Vuex from 'vuex'
import name from "@/store/modules/name";
import preferences from "@/store/modules/preferences";
import dynamic from "@/store/modules/dynamic";
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        name,
        preferences,
        dynamic
    }
})

export default store
