<template>
    <div>
           <top-search></top-search>
           <my-swiper class="mt-40" url="home_banner.json"></my-swiper>
           <category-title title="设计风格"></category-title>
           <nav class="design-style-container">
		        <ul class="design-style_wrapper clearfix">
		            <li><a href="javascript:;" data-id="#new-product">
		            	<img src="../../assets/images/design_style01.png">
		            	<h5>简约</h5>
		            </a></li>
		            <li><a href="javascript:;" data-id="#birthday-product">
		            	<img src="../../assets/images/design_style02.png">
		            	<h5>现代</h5>
		            </a></li>
		            <li><a href="javascript:;" data-id="#children-product">
		            	<img src="../../assets/images/design_style03.png">
		            	<h5>复古</h5>
		            </a></li>
		            <li><a href="javascript:;" data-id="#party-product">
		            	<img src="../../assets/images/design_style04.png">
		            	<h5>混搭</h5>
		            </a></li>      
		        </ul>
    	   </nav>
    	   <category-title></category-title>
           <section class="product-list">
               <product-items title="简约" url="products-simplest-list.json"></product-items>
               <product-items title="现代" url="products-modern-list.json"></product-items>
               <product-items title="复古" url="products-restore-list.json"></product-items>
               <product-items title="混搭" url="products-mashup-list.json"></product-items>
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