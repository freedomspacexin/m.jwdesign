<template>
	<div>
		<!-- home也轮播图 -->
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(img,index) in imgs" :key="index"><a :href="img.url"><img :src="domain+img.imgurl"></a></mt-swipe-item>
        </mt-swipe>
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
				case 'home_banner.json':
					this.$ajax('home_banner.json')
						.then(res=>{
							this.imgs = res.data;
					})
					.catch(err=>{
						console.log(err);
					});
			}
		}
	}
</script>
<style scoped>
/*轮播图样式*/
.mint-swipe{
    height:160px; 
}
.mint-swipe img {
	width: 100%;
}
</style>