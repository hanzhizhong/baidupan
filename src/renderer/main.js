import Vue from 'vue'

import App from './App'

import router from './router'
import db from './api/user'

Vue.prototype.$db=db;

import './assets/css/font-awesome.min.css'
import './assets/css/iconfont.css'
import './assets/css/reset.css'



if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
    components: {App},
    template: '<App/>',
    router,
}).$mount('#app')
