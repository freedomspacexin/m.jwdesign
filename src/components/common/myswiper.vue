<template>
	<div>
		<!-- home也轮播图 -->
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(img,index) in imgs" :key="index"><a href="javascript:;"><img :src="domain+img.imgurl"></a></mt-swipe-item>
        </mt-swipe>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				imgs:[{"imgurl":"/static/server/images/home_banner1.jpg"},{"imgurl":"/static/server/images/home_banner2.jpg"},{"imgurl":"/static/server/images/home_banner3.jpg"},{"imgurl":"/static/server/images/home_banner4.jpg"},{"imgurl":"/static/server/images/home_banner5.jpg"}],
				domain:'',
			}
		},
		props:['url'],
		created(){
			var urls = this.url.split('?');
			if(process.env.NODE_ENV == 'production'){
				this.domain = '/view.jw.design.io';
			}
			// switch(urls[0]){
			// 	case 'home_banner.json':
			// 		this.$ajax('home_banner.json')
			// 			.then(res=>{
			// 				this.imgs = res.data;
			// 				console.log(this.imgs);
			// 		})
			// 		.catch(err=>{
			// 			console.log(err);
			// 		});
			// 		break;
			// }
		}
	}
</script>
<style scoped>
/*轮播图样式*/
.mint-swipe{
    height:150px;
    width: 100%;
	background-color: #efefef;     
}
.mint-swipe-items-wrap{
	min-height: 150px;
}
.mint-swipe img {
	width: 100%;
}
</style>