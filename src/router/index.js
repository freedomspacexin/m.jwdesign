import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home.vue';
import Category from '@/components/category/category.vue';
import CategoryItems from '@/components/category/categoryitems.vue';
import CategoryGrides from '@/components/category/categorygride.vue';
import Activity from '@/components/activity/activity.vue';
import Cart from '@/components/cart/cart.vue';
import Personal from '@/components/personal/personalcenter.vue';
import ProductDetail from '@/components/products/productdetail.vue';

Vue.use(Router)

export default new Router({
  linkActiveClass:'mui-active',
  routes: [
    {path:'/', redirect:'/home' },
    {path: '/home', name: 'Home', component: Home},
    {path: '/category', redirect:'category/items?dataId=1', name: 'Category', component: Category, children:[
			{name:'category_items',path:'items', component:CategoryItems},
			{name:'category_grides',path:'grides', component:CategoryGrides}
		]},
    {path: '/activity', name: 'Activity', component: Activity},
    {path: '/cart', name: 'Cart', component: Cart},
    {path: '/personal', name: 'Personal', component: Personal},
    {path: '/productDetail', name: 'ProductDetail', component: ProductDetail}
  ]
})
