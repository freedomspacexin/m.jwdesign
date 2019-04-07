import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home.vue';
import Category from '@/components/category/category.vue';
import Activity from '@/components/activity/activity.vue';
import Cart from '@/components/cart/cart.vue';
import Personal from '@/components/personal/personalcenter.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/category', name: 'Category', component: Category},
    {path: '/activity', name: 'Activity', component: Activity},
    {path: '/cart', name: 'Cart', component: Cart},
    {path: '/personal', name: 'Personal', component: Personal}
  ]
})
