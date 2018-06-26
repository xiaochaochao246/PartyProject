// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "mint-ui/lib/style.css"
import "mint-ui/lib/index.js"
import 'element-ui/lib/theme-chalk/index.css';
import MintUI from 'mint-ui'
import ElementUI from 'element-ui';
import "../static/style/init.css"
import myAxios from "./util/myAxios"

Vue.use(MintUI)

Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
