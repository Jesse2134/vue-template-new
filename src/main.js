// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 解决IE Promise 兼容
import "babel-polyfill";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css'

import App from './App'
import router from '@/router'
import BaseVue from '@/views/common/base'

Vue.use(ElementUI, {
  size: 'small',
  zIndex: 3000
});
Vue.config.productionTip = false;

/* eslint-disable no-new */

const ChildVue = Vue.extend(BaseVue);

new ChildVue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
