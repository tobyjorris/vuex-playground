import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import Vue from 'vue'
import App from "@/App";
import store from './store/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

library.add(faCircleQuestion)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('v-select', vSelect)

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')

