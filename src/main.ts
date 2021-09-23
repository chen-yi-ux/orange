import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import LabelAdd from '@/views/LabelAdd.vue';

import moment from 'moment';
import 'moment/locale/zh-cn';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

moment.locale('zh-cn'); //设置语言 或 moment.lang('zh-cn');
Vue.prototype.$moment = moment;//挂载到当前vue实例对象

Vue.use(Antd);

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);
Vue.component('LabelAdd', LabelAdd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

// if(document.documentElement.clientWidth > 500){
//   window.alert('请使用手机打开本页面，以保证浏览效果');
//   const img = document.createElement('img');
//   img.src = '/qrcode.png';
//   img.style.position = 'fixed';
//   img.style.left = '50%';
//   img.style.top = '50%';
//   img.style.transform = 'translate(-50%, -50%)';
//   img.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.25)';
//   document.body.appendChild(img);
// }
