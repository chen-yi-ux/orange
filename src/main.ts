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
import labelListModel from '@/models/labelListModel';
import recordListModel from '@/models/recordListModel';

moment.locale('zh-cn'); //设置语言 或 moment.lang('zh-cn');
Vue.prototype.$moment = moment;//挂载到当前vue实例对象

Vue.use(Antd);

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);
Vue.component('LabelAdd', LabelAdd);

window.recordList = recordListModel.fetch();
window.labelList = labelListModel.fetch();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
