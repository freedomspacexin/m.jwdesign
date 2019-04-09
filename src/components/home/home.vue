<template>
    <div>
           <top-search></top-search>
          <my-swiper class="mt-40" url="home_banner.json"></my-swiper>
           <category-title title="设计风格"></category-title>
           <nav class="design-style-container">
		        <ul class="design-style_wrapper clearfix">
		            <li><a href="javascript:;" data-id="#simplest">
		            	<img src="../../assets/images/design_style01.png">
		            	<h5>简约</h5>
		            </a></li>
		            <li><a href="javascript:;" data-id="#modern">
		            	<img src="../../assets/images/design_style02.png">
		            	<h5>现代</h5>
		            </a></li>
		            <li><a href="javascript:;" data-id="#restore">
		            	<img src="../../assets/images/design_style03.png">
		            	<h5>复古</h5>
		            </a></li>
		            <li><a href="javascript:;" data-id="#mashup">
		            	<img src="../../assets/images/design_style04.png">
		            	<h5>混搭</h5>
		            </a></li>      
		        </ul>
    	   </nav>
    	   <category-title></category-title>
         <section class="product-list">
               <product-items ref="simplest" title="简约" url="products-simplest-list.json"></product-items>
               <product-items ref="modern" title="现代" url="products-modern-list.json"></product-items>
               <product-items ref="restore" title="复古" url="products-restore-list.json"></product-items>
               <product-items id="mashup" ref="mashup" title="混搭" url="products-mashup-list.json"></product-items>
           </section>
           <category-title title="经典小户型"></category-title>
           <right-swiper class="content-container" url="products-small-style-list.json"></right-swiper>
           <category-title title="飘窗设计"></category-title>
           <product-gride class="content-container" url="products-window-list.json"></product-gride>
           <category-title title="装饰选材"></category-title>
           <product-gride class="content-container" url="products-other-list.json"></product-gride>
           <copyright></copyright>
    </div>
</template>
<script>
     import productItems from '../../components/common/productitems.vue';
     export default {
            components:{
              productItems:productItems
            },

            mounted(){
                var that = this;
                mui(".design-style_wrapper").on('tap','a',function(){
                   console.log();
                   switch(this.getAttribute("data-id")) {
                      case '#simplest':
                        that.myScrollTo({toT:that.$refs.simplest.$el.offsetTop-50});
                        break;  
                      case '#modern':
                        that.myScrollTo({toT:that.$refs.modern.$el.offsetTop-50});
                        break;
                      case '#restore':
                        that.myScrollTo({toT:that.$refs.restore.$el.offsetTop-50});
                        break;
                      case '#mashup':
                        that.myScrollTo({toT:that.$refs.restore.$el.offsetTop-50});
                        break;                      
                   }
              });
            },

            methods:{
                myScrollTo(options){
                  var defaults = {
                      toT : 0,    //滚动目标位置
                      durTime : 500,  //过渡动画时间
                      delay : 30,     //定时器时间
                      callback:null   //回调函数
                  };
                  var opts = Object.assign(defaults,options)
                  var timer = null
                  var _this = this
                  //var curTop = _this.scrollTop()//滚动条当前的位置
                  var curTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
                  var subTop = opts.toT - curTop    //滚动条目标位置和当前位置的差值
                  var index = 0
                  var dur = Math.round(opts.durTime / opts.delay)
                  var smoothScroll = function(t){
                      index++;
                      var per = Math.round(subTop/dur);
                      if(index >= dur){
                          window.scrollTo(0,t);
                          window.clearInterval(timer);
                          if(opts.callback && typeof opts.callback == 'function'){
                              opts.callback();
                          }
                          return;
                      }else{
                          window.scrollTo(0,curTop + index*per);
                      }
                  };
                  timer = window.setInterval(function(){
                      smoothScroll(opts.toT);
                  }, opts.delay);
                  return _this;
                },
            }
     }
</script>
<style>

.mt-40{
  margin-top: 40px;
}

.content-container{
   padding: 0px 4%;
}

.design-style-container {
    padding: 0 13px;
}
.design-style-container .design-style_wrapper {
    color: #FFFFFF;
    text-align: center;

}

.design-style-container .design-style_wrapper li {
    float: left;
    width: 25%;
    color: #fff; 
}
.design-style-container .design-style_wrapper li img {
	width: 80%;
}

.design-style-container .design-style_wrapper li a {
        display: inline-block;
        cursor: pointer;
        width: 100%;
        height: 100%;
        color: #ccc;
        font-size: 16px;
}

</style>