<template>
    <div class="prodinfo-container">
        <top-bar topTitle="设计宝贝"></top-bar>
        <div class="lt_content mui-scroll-wrapper">
            <div class="mui-scroll">
                <detail-swiper class="mt-40" :url="'detail-design-list.json?id=' + id"></detail-swiper>
                <div class="products-desc-container">
                    <div class="product-desc">
                        <ul>
                            <li class="product-desc-title">
                                <span v-text="prodInfo.title"></span>
                            </li>
                            <li class="designer-info">
                                <p><span v-text="prodInfo.designer"></span></p>
                                <p><span v-text="prodInfo.zhaiyao"></span></p>
                                <p>联系电话：<span v-text="prodInfo.designer_tel"></span></p>
                                <div :class="prodInfo.is_activity?'activity show':'activity'">
                                    <p><span v-text="prodInfo.discount"></span>折</p>
                                    <img src="../../assets/images/activity.png">
                                </div>
                            </li>
                            <li class="share clearfix">
                                <p><i class="icomoon_font icomoon_font_great"></i><span v-text="prodInfo.great_comment"></span>人赞过</p>
                                <p><i class="icomoon_font icomoon_font_share"></i>分享</p>
                            </li>
                        </ul>
                    </div>
                    <div class="product-detail">
                        <p>宝贝详情：</p>
                        <p>商品参数商品货号库存情况,上架时间：联系客服</p>
                    </div>
                    <div class="product-evaluate">
                        <div class="evaluate-head clearfix">
                             <h3 class="f_left">宝贝评价(6)</h3>
                             <a class="f_right" href="category_v2.php?id=97">查看全部 ></a>
                        </div>
                        <img src="../../assets/images/user_icon.png"><span>l****3</span>
                        <p>商品参数商品货号库存情况,上架时间：联系客服</p>
                    </div>
                </div>
            </div>
        </div>
            
        <div class="add-cart-content">
            <a href="tel:0662-3858188" class="contact-customer">
                <i class="icomoon_font icomoon_font_contect"></i>
                <span>联系客服</span>
            </a>
            <a href="javascript:;" class="add-cart">收藏</a>
            <a href="javascript:;" class="books-design">预约设计</a>
        </div>
            
    </div>
</template>
<script>
     //import detailSwiper from '../../components/products/detailswiper.vue';
     import localStorageTool from '../common/localstorageTool.js';
     export default {
        components:{
              detailSwiper:() => import('../../components/products/detailswiper.vue'),
        },
        data(){
            return{
                id:this.$route.query.id,
                prodInfo:{},
            }
        },
        created(){
            this.$ajax('detail-design-list.json')
            .then(res=>{
                this.prodInfo = res.data.find((item)=>{
                    return item.id === parseInt(this.id);
                });
            })
            .catch(err=>{

            });
        },
        mounted(){
            var _self = this;
            mui('.mui-scroll-wrapper').scroll({
                scrollY: true, //是否竖向滚动
                scrollX: false, //是否横向滚动
                startX: 0, //初始化时滚动至x
                startY: 0, //初始化时滚动至y
                indicators: false, //是否显示滚动条
                deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
                bounce: true //是否启用回弹
            });
            mui('.add-cart-content').on('tap','.add-cart', function(e){
               mui.toast('功能完善中...');
            });
            mui('.add-cart-content').on('tap','.books-design', function(e){
               _self.$router.push({name:'BooksDesign',query:{id:_self.id}});
            });
        },
        methods:{
        }
     }
</script>
<style scoped>
.mt-40{
  margin-top: 40px;
}

.prodinfo-container{
    background-color: #ccc;
}

.add-cart-content{
    width: 100%;
    height: 50px;
    background-color: rgba(255,255,255,0.8) ;
    position: fixed;
    bottom: 50px;
    left: 0;
    margin-top: 10px;
    line-height: 50px;
    font-size: 14px;
    z-index: 99;
}

.add-cart-content a{
    float: left;
    width: 33.333%;
    font-size:16px;
    text-align: center;
}

.contact-customer{
    color: #aaa;
}
.contact-customer i{
    display: block;
    line-height: 25px;
    font-size: 20px;
}
.contact-customer span{
    font-size: 12px;
    height: 25px;
    line-height: 25px;
    display: block;
}

.books-design{
    background-color: #ff0000;
    color: #fff;

}
.add-cart{
    background-color: #ffc428;
    color: #fff;
}

.products-desc-container{

    padding-bottom: 100px;
    background-color: #F5F5F5;
}
.product-desc{
    padding: 15px;
    background-color: #fff;
}
.designer-info{
    font-size: 12px;
    color: #8f8f94;
    text-align: right;
    position: relative;
}

.activity{
    position: absolute;
    top: 0;
    left: 0;
    display: none;
}

.show{
    display: block;
}

.activity p{
     color: #ffc428;
    font-size: 24px;
     height: 100%;
    line-height: 55px;
}

.activity span{
    color: #ffc428;
    font-size: 24px;
    height: 100%;
    line-height: 55px;
}

.activity img{
    position: absolute;
    top: 0;
    left:40%;
    width: 100%;
}
.designer-info>p:first-child{
    font-size: 24px;
    color: #ffc428;
}

.designer-info>div{
    margin-top:5px;
}
.designer-info>p:nth-child(2){
    padding: 15px 0 0px;
    font-size: 14px;
}
.product-desc-title{
    padding-bottom: 20px;
    color: #000;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.share{
    padding-top: 20px;
}
.share p{
    float: left;
    width: 50%;
    text-align: center;
    height: 30px;
    line-height: 30px;
}

.share p i{
    padding: 0 6px;
}
.product-props{
    margin-top: 10px;
    padding: 15px;
    background-color: #fff;
}
.product-props p{
    padding: 2px 0;
}

.product-props p~p{
    text-indent: 4em;

}
.product-evaluate{
    margin-top: 10px;
    padding: 15px;
    background-color: #fff;
}
.evaluate-head{
    margin-bottom: 5px;
}
.product-evaluate h3{
    font-size: 14px;
    vertical-align: center;
}
.product-evaluate img{
    width: 30px;
    height: 30px;
    vertical-align: middle;
}
.product-evaluate span{
    height: 30px;
    line-height: 30px;
    margin-left: 10px;
}
.product-evaluate p{
    margin-top: 5px;
}

.product-detail{
    margin-top: 10px;
    padding: 15px;
    background-color: #fff;
}
.product-detail h3{
    font-size: 14px;
}
.product-detail p{
    margin-top: 5px;
}
</style>