import Vue from 'vue'
import App from './App.vue'

// 引入全局样式文件
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';
// 导入路由模块
import router from './routes/router';

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
