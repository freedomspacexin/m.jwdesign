'use strict';
// import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//第三方组件---------- start-------------
//界面组件（mint-ui）
//import Mint from 'mint-ui'
import Indicator from 'mint-ui/lib/indicator';
import Swipe from 'mint-ui/lib/swipe';
import SwipeItem from 'mint-ui/lib/swipe-item';
import Lazyload from 'mint-ui/lib/lazyload';
import 'mint-ui/lib/style.css'
import 'swiper/dist/css/swiper.css';
// import '../static/lib/mui/css/mui.css';
import '../static/lib/mui/css/mui.picker.css';
import '../static/lib/mui/css/mui.poppicker.css';
//全部安装组件，实际开发要求为按需配置安装组件
// Vue.use(Mint)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(Lazyload);

//http组件：axios组件
import Axios from 'axios'
Vue.prototype.$ajax = Axios
var domain = ''
if (process.env.NODE_ENV == 'production'){
    domain = '/view.jw.design.io';
}
Axios.defaults.baseURL = domain+'/static/server/api/'

//第三方组件---------- end-------------

//默认样式重置
import './assets/css/reset.css'
import './assets/css/common.css'

//自定义组件---------- start------------
//首页组件不必按需引入
import mySwiper from './components/common/myswiper.vue';
import topSearch from './components/topsearch/topsearch.vue';
import categoryTitle from './components/common/categorytitle.vue';
//const topSearch = () => import('./components/topsearch/topsearch.vue'); // 异步组件，按需引入。加载哪里哪里会先显示
//const mySwiper = () => import('./components/common/myswiper.vue'); // 异步组件，按需引入。加载哪里哪里会先显示
//const categoryTitle = () => import('./components/common/categorytitle.vue'); // 异步组件，按需引入。加载哪里哪里会先显示
const rightSwiper = () => import('./components/common/rightswiper.vue'); // 异步组件，按需引入。加载哪里哪里会先显示
const productGride = () => import('./components/common/productgride.vue'); // 异步组件，按需引入。加载哪里哪里会先显示
const copyright = () => import('./components/common/copyright.vue'); // 异步组件，按需引入。加载哪里哪里会先显示
const topBar = () => import('./components/common/topbar.vue'); // 异步组件，按需引入。加载哪里哪里会先显示

//Axios拦截器监听请求发送和响应作出相应的加载界面
Axios.interceptors.request.use(function(config){
    //显示图标
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
	return config
})

Axios.interceptors.response.use(function(config){
	//隐藏图标
    Indicator.close()
    //获取到config中的data，进行加工
	return config
})

/*全局自定义组件*/
Vue.component('topSearch',topSearch)
Vue.component('mySwiper',mySwiper)
Vue.component('categoryTitle',categoryTitle)
Vue.component('rightSwiper',rightSwiper)
Vue.component('productGride',productGride)
Vue.component('copyright',copyright)
Vue.component('topBar',topBar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
