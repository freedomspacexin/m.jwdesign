<template>
	<div>
        <div class="swiper-container">
  			<div class="swiper-wrapper">
 			   <div class="swiper-slide" v-for="(img,index) in imgs" :key="index">
 			   	   <a href="javascript:;"><img :src="domain+img.imgurl"></a>
 			   </div>
 			</div>
 			  <!-- Add Pagination -->
    		<div class="swiper-pagination"></div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				imgs:[],
				domain:'',
			}
		},
		props:['url'],
		created(){
			var urls = this.url.split('?');
			if(process.env.NODE_ENV == 'production'){
				this.domain = '/view.jw.design.io';
			}
			switch(urls[0]){
				case 'detail-products-list.json':
					var id = urls[1].split('=')[1];
					this.$ajax('detail-products-list.json')
						.then(res=>{
							this.imgs = res.data.find(function(item){
								return item.id === parseInt(id);
							}).img_urls;
						})
						.catch(err=>{

						});
					break;
			}
		},
		updated(){
	   		var swiper = new Swiper('.swiper-container', {
     			 pagination: {
        			el: '.swiper-pagination',
     			 },
   			 }); 
		}
	}
</script>
<style scoped>
/*轮播图样式*/
.swiper-slide{
	width: 100%;
	margin: 0 auto;
    overflow: hidden;
    height: 320px;
}
.swiper-slide a{
	width: 100%;
	height: 100%;
}
.swiper-slide img {
	display: block;
	margin: 0 auto;
	width: 100%;
}
</style>