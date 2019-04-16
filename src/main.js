'use strict';
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//第三方组件---------- start-------------
//界面组件（mint-ui）
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'swiper/dist/css/swiper.css';
import '../static/lib/mui/css/mui.css';
import '../static/lib/mui/css/mui.picker.css';
import '../static/lib/mui/css/mui.poppicker.css';
//全部安装组件，实际开发要求为按需配置安装组件
Vue.use(Mint)

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
import topSearch from './components/topsearch/topsearch.vue'
import mySwiper from './components/common/myswiper.vue'
import categoryTitle from './components/common/categorytitle.vue'
import rightSwiper from './components/common/rightswiper.vue'
import productGride from './components/common/productgride.vue'
import copyright from './components/common/copyright.vue'
import topBar from './components/common/topbar.vue';

//Axios拦截器监听请求发送和响应作出相应的加载界面
Axios.interceptors.request.use(function(config){
    //显示图标
    Mint.Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
	return config
})

Axios.interceptors.response.use(function(config){
	//隐藏图标
    Mint.Indicator.close()
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
