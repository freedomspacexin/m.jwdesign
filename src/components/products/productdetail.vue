<template>
    <div class="prodinfo-container">
        <top-bar topTitle="商品详情"></top-bar>
        <div class="lt_content mui-scroll-wrapper">
            <div class="mui-scroll">
                <detail-swiper class="mt-40" :url="'detail-products-list.json?id=' + id"></detail-swiper>
                <div class="products-desc-container">
                    <div class="product-desc">
                        <ul>
                            <li class="price">
                                <p><s>￥</s>{{prodInfo.sell_price}}</p>
                                <div>市场价：<del>￥{{prodInfo.market_price}}</del></div>
                            </li>
                            <li class="product-desc-title">
                                <span>{{prodInfo.title}}</span>
                            </li>
                       
                            <li class="share clearfix">
                                <p><i class="icomoon_font icomoon_font_great"></i>14人赞过</p>
                                <p><i class="icomoon_font icomoon_font_share"></i>分享</p>
                            </li>
                        </ul>
                    </div>
                    <div class="product-props">
                        <p>商品参数：</p>
                        <p>商品货号：{{prodInfo.goods_no}}</p>
                        <p>库存情况：{{prodInfo.stock_quantity}}件</p>
                        <p>上架时间：{{prodInfo.add_time}}</p>
                    </div>
                    <div class="product-evaluate">
                        <div class="evaluate-head clearfix">
                             <h3 class="f_left">宝贝评价(6)</h3>
                             <a class="f_right" href="category_v2.php?id=97">查看全部 ></a>
                        </div>
                        <img src="../../assets/images/user_icon.png"><span>l****3</span>
                        <p>商品参数商品货号库存情况,上架时间：联系客服</p>
                    </div>
                    <div class="product-detail">
                        <h3>宝贝详情</h3>
                        <p>商品参数商品货号库存情况,上架时间：联系客服</p>
                    </div>
                </div>
            </div>
        </div>
            
        <div class="add-cart-content">
            <a href="javascript:;" class="contact-customer">
                <i class="icomoon_font icomoon_font_contect"></i>
                <span>联系客服</span>
            </a>
            <a href="javascript:;" class="add-cart">加入购物车</a>
            <a href="javascript:;" class="shopping">立即购买</a>
        </div>
            
    </div>
</template>
<script>
     import detailSwiper from '../../components/products/detailswiper.vue';
     import localStorageTool from '../common/localstorageTool.js';
     export default {
        components:{
              detailSwiper:detailSwiper,
        },
        data(){
            return{
                id:this.$route.query.id,
                prodInfo:{},
            }
        },
        created(){
            this.$ajax('cart-products-list.json')
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
                _self.addCart();
            });
        },
        methods:{
            addCart(){
                var _self = this;
                localStorageTool.updateProds({id:this.id,num:1},function(){
                    mui.confirm('添加成功，去购物车看看？', '温馨提示', ['是', '否'], function(e) {
                        if (e.index == 0) {
                            _self.$router.push({name:'Cart'});
                        } else {
                            //TODO
                        }
                    });
                });
            },
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

.shopping{
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
.price{
    font-size: 12px;
    color: #8f8f94;
}
.price>p{
    font-size: 24px;
    color: #ffc428;
}
.price>div{
    margin-top:5px;
}
.price>p>s{
    font-size: 16px;
}
.product-desc-title{
    color: #000;
    font-weight: 700;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
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
.product-desc-title{
    padding: 10px 0;
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