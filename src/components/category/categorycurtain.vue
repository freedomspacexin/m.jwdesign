<template>
        <div class="product-gride-container">
                <ul class="product-gride clearfix">
                    <li v-for="(img, index) in imgs" :key="index">
                        <a href="javascript:;" :data-id="img.id">
                            <img v-lazy="domain+img.img_url" :key="img.img_url"/>
                            <div class="product-describe">
                            <h3 v-text="img.title"></h3>
                            <span class="sell_price" v-text="img.designer"> &nbsp</span>
                            <span class="market_price">找他设计</span>
                        </div>
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
    created(){
            if(process.env.NODE_ENV == 'production'){
                this.domain = '/view.jw.design.io';
            }
            this.getData();
    },
    mounted(){
        var _self = this;
        mui('.product-gride-container').on('tap','a', function(e){
            let id = this.getAttribute('data-id');
            //跳转到设计详情
            _self.$router.push({name:'DesignDetail',query:{id:id}});
        });
    },
    methods:{
        getData(){
            var url = 'category-products-gride'+this.$route.query.dataId+'.json';
            this.$ajax(url)
                    .then(res=>{
                        this.imgs = res.data;
                })
                .catch(err=>{
                    console.log(err);
                });
        }
    },
    watch:{
        '$route' (to, from) {
                this.getData();
        }
    }
}
</script>
<style scoped>
.product-gride-container{
    margin-top: 4px;
}

.product-gride-container li{
    width: 44%;
    margin: 6px 1%;
    float: left;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.10);
}

.product-gride-container li a{
    color: #666;;
}

.product-gride-container li:nth-child(2n+1){
    margin-right: 8px;
}

.product-describe{
    padding: 6px;
}

.product-gride-container li img{
    width: 100%;
    height: 120px;
}

.product-describe h3{
    margin-bottom: 4px;
}

.product-describe .sell_price{
    font-size: 14px;

}

.product-describe .market_price{
    font-size: 12px;
    color: #ccc;
}
</style>