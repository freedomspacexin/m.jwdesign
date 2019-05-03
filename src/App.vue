<template>
    <div>
      <!-- 路由留坑 -->
          <!-- <transition name="router" mode="out-in"> -->
        <router-view></router-view>
          <!-- </transition> -->
      <!-- 公共底部内容 -->
        <nav class="mui-bar mui-bar-tab">
          <router-link class="mui-tab-item" :to="{name:'Home'}">
              <span class="icomoon_font icomoon_font_home"></span>
              <span class="mui-tab-label">首页</span>
          </router-link>
          <router-link class="mui-tab-item" :to="{name:'Category'}">
              <span class="icomoon_font icomoon_font_category"></span>
              <span class="mui-tab-label">分类</span>
          </router-link>
          <router-link class="mui-tab-item" :to="{name:'Activity'}">
              <span class="icomoon_font icomoon_font_active"></span>
              <span class="mui-tab-label">活动</span>
          </router-link>
          <router-link class="mui-tab-item cart" :to="{name:'Cart'}">
              <span class="icomoon_font icomoon_font_cart"><span class="cart-count" v-bind="goodsNum"></span></span>
              <span class="mui-tab-label">购物车</span>
          </router-link>
          <router-link class="mui-tab-item" :to="{name:'Personal'}">
              <span class="icomoon_font icomoon_font_personal"></span>
              <span class="mui-tab-label">个人中心</span>
          </router-link>
      </nav>
          
    </div>
</template>
<script>
    import connect from './components/common/connect.js';
    import localStorageTool from './components/common/localstorageTool.js';
    export default {
        data(){
            return {
                goodsNum:localStorageTool.getTotalProdsNum(),
            }
        },
        created(){
            connect.$on('addShopCart', (num)=>{
                this.goodsNum += num ;
            });
        },
        mounted(){
          mui('body').on('tap','a',function(){
            window.location.href = this.href
          });
        }
    }
</script>
<style>
/*过渡动画*/
.router-enter-active, .router-leave-active{
    transition:opacity 0.2s;/*opacity 作于的动画属性  过渡时间*/
}
.router-enter, .router-leave-to{
    opacity: 0;/*某一时该状态*/
}
.cart{
  position: relative;
}
.cart-count{
    font-size: 10px;
    line-height: 1.4;
    position: absolute;
    top: 0px;
    left: 70%;
    margin-left: -10px;
    padding: 1px 5px;
    color: white;
    border-radius: 8px;
    background: red; 
    z-index: 1;
    display: none;
}
</style>