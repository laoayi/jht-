import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import echarts from 'echarts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import "babel-polyfill";
import JSEncrypt from 'node-jsencrypt'

const  publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCm4ejUeYwtinm2ShD8MrPZ/6SS+PEgX59G42kNrfJQLDTqhGj8Qxd9a2ciCPF0oNkm1AP9R/82q6jHq8PJpAF/OVz0iacxwiWkAfroomu8yvK3Uw0wCjf7tNzqTVYA+AlTI54+COxYDXzWw6Kt82kGsqS6iZ34X2fVLGgcK6MCQwIDAQAB";
const crypt = new JSEncrypt();
crypt.setPublicKey(publicKey);

axios.defaults.baseURL = 'https://admin.jhtai8.com/'
const instance = axios.create({
    baseURL: 'https://admin.jhtai8.com/',
    headers: { 'content-type': 'application/json' },
    timeout: 1000,
  });

Vue.use(ElementUI, { size: 'small' });
Vue.prototype.$axios = instance;
Vue.prototype.$http = axios
Vue.prototype.$rsa = crypt;



Vue.prototype.$echarts = echarts 

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    const role = localStorage.getItem('ms_username');
    if(!role && to.path !== '/login'){
        next('/login');
    }else if(to.meta.permission){
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        // role === 'admin' ? next() : next('/403');
        next();
    }else{
        // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            });
        }else{
            next();
        }
    }
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');


