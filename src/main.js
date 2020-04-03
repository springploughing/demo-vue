import Vue from 'vue';
import App from './App.vue';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './router';
import VueRouter from 'vue-router';
import i18n from './i18n';

Vue.config.productionTip = false

// Vue.use(ElementUI, { size: 'small', zIndex: 2000});
Vue.use(Antd);

Vue.use(VueRouter);

new Vue({
    router,
    i18n,
    render: h => h(App),
}).$mount('#app')