import Vue from 'vue'
import App from './App.vue'

// 引入全局样式文件
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

new Vue({
  el: '#app',
  render: h => h(App)
})
