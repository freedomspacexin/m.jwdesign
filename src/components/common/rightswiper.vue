<template>
    <div class="swiper-container" id="swiper-right">
        <div class="swiper-wrapper">
            <div class="swiper-slide swiper-slide-active" style="margin-right: 10px;" v-for="(img,index) in imgs" :key="index">
                <a href="javascript:;" :data-id="img.id" class="item">
                    <img v-lazy="domain + img.img_url" :key="img.img_url"/>
                    <div class="product-describe">
                        <h3 v-text="img.title"></h3>
                        <span class="sell_price" v-text="img.designer"> &nbsp</span>
                        <span class="market_price">找他设计</span>
                    </div>
                </a>
            </div>
            <div class="swiper-slide" style="margin-right: 10px;">
                <a href="javascript:;" class="more">
                    <span>查看更多</span>
                </a>
            </div>
        </div>
        <div class="right-white"></div>
        <div class="left-white"></div>
    </div>
</template>
<script>
 import Swiper from 'swiper';
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
                case 'products-small-style-list.json':
                    this.$ajax('products-small-style-list.json')
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
        mui('.swiper-wrapper').on('tap','a.item', function(e){
            let id = this.getAttribute('data-id');
            _self.$router.push({name:'DesignDetail',query:{id:id}});
        });
        mui('.swiper-wrapper').on('tap','.more', function(e){
            _self.$router.push({name:'category_items',query:{dataId:5}});
        });
    },
    updated(){
        new Swiper('#swiper-right', {
            slidesPerView: 'auto',
            spaceBetween: 10,
        });
    }
}
</script>
<style scoped>
.swiper-container{
    position: relative;
    width: 100%;
    height: 190px;
    /*background-color: pink;*/
}
.right-white{
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    background-color: #fff;
    width: 4%;
    z-index: 999;
}

.left-white{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #fff;
    width: 4%;
    z-index: 999;
}

.swiper-container .swiper-slide{
      margin: 4px 0px;
      font-size: 16px;
      background: #fff;
      height: 182px;
      width: 74%;
      box-shadow: 0 0 5px 0 rgba(0,0,0,0.10);
}

.swiper-container .swiper-slide a{
        display: inline-block;
        width: 100%;
        height: 100%;
}

.swiper-container .swiper-slide a img{
        display: block;
        width: 100%;
        height: 130px;
}

.product-describe{
    color: #684028;
    font-size: 14px;
    height: 52px;
    padding: 8px;
}

.product-describe h3{
    margin-bottom: 4px;
}

.product-describe .sell_price{
    font-size: 16px;

}

.product-describe .market_price{
    font-size: 12px;
    color: #ccc;
}

.swiper-container .swiper-slide:last-child{
        width: 23%;
        display: block;
        height: 182px;
        margin-right: 2%;
}

.swiper-container .swiper-slide:last-child a{
        position: relative;
        text-align: center;
}

.swiper-container .swiper-slide:last-child a span{
        font-size: 14px;
        line-height:182px;
}
</style>