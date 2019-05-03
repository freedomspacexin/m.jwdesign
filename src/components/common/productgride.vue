<template>
        <div class="product-gride-container">
                <ul class="product-gride clearfix">
                    <li v-for="(img, index) in imgs" :key="index">
                        <a href="javascript:;" :data-id="img.category_id" :data-style="img.category_style">
                        <img v-lazy="domain+img.img_url" :key="img.img_url"/>
                        <h3 v-text="img.title"></h3>
                        </a>
                    </li>
                </ul>
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
                case 'products-window-list.json':
                    this.$ajax('products-window-list.json')
                        .then(res=>{
                            this.imgs = res.data;
                    })
                    .catch(err=>{
                        console.log(err);
                    });
                    break;
                case 'products-other-list.json':
                    this.$ajax('products-other-list.json')
                        .then(res=>{
                            this.imgs = res.data;
                    })
                    .catch(err=>{
                        console.log(err);
                    });
                    break;
            }
    },
    mounted(){
        var _self = this;
        mui('.product-gride-container').on('tap','a', function(e){
            let id = this.getAttribute('data-id');
            let style = this.getAttribute('data-style');
            if(style == 'curtain'){
                _self.$router.push({name:'category_curtain',query:{dataId:id}});
            } else if(style == 'other') {
                _self.$router.push({name:'category_grides',query:{dataId:id}});
            }
        });
    }
}
</script>
<style scoped>
.product-gride-container{

}

.product-gride-container li{
    width: 31%;
    margin: 6px 1.1%;
    float: left;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.10);
}
.product-gride-container li img{
    width: 100%;
    height: 120px;
}
.product-gride h3{
    padding: 5px 5px;
    text-align: center;
    color: #666;
}
</style>