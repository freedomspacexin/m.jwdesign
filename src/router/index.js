//import Vue from 'vue'
//import Router from 'vue-router'
const Home = r => require(['@/components/home/home.vue'],r);
const Category = r => require(['@/components/category/category.vue'],r);
const CategoryItems = r => require(['@/components/category/categoryitems.vue'],r);
const CategoryGrides = r => require(['@/components/category/categorygride.vue'],r);
const CategoryCurtain = r => require(['@/components/category/categorycurtain.vue'],r);
const Activity = r => require(['@/components/activity/activity.vue'],r);
const Cart = r => require(['@/components/cart/cart.vue'],r);
const Personal = r => require(['@/components/personal/personalcenter.vue'],r);
const ProductDetail = r => require(['@/components/products/productdetail.vue'],r);
const DesignDetail = r => require(['@/components/products/designdetail.vue'],r);
const BooksDesign = r => require(['@/components/books/books.vue'],r);

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass:'mui-active',
  routes: [
    {path:'/', redirect:'/home' },
    {path: '/home', name: 'Home', component: Home},
    {path: '/category', name: 'Category', component: Category, children:[
			{name:'category_items',path:'items', component:CategoryItems},
      {name:'category_grides',path:'grides', component:CategoryGrides},
			{name:'category_curtain',path:'curtain', component:CategoryCurtain}
		]},
    {path: '/activity', name: 'Activity', component: Activity},
    {path: '/cart', name: 'Cart', component: Cart},
    {path: '/personal', name: 'Personal', component: Personal},
    {path: '/productDetail', name: 'ProductDetail', component: ProductDetail},
    {path: '/designDetail', name: 'DesignDetail', component: DesignDetail},
    {path: '/booksDesign', name: 'BooksDesign', component: BooksDesign}
  ]
})
