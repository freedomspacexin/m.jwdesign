<template>
      <div class="product-items" id="product-items">
        <div class="product-content">
            <div class="product-item"  v-for="(img,index) in imgs" :key="index">
                <a href="javascript:;" :data-id="img.id">
                    <img v-lazy="domain + img.img_url" :key="img.img_url">
                    <div class="product-describe">
                        <h3>{{img.title}}</h3>
                        <span class="sell_price">{{img.designer}} &nbsp</span>
                        <span class="market_price">找他设计</span>
                    </div>
                </a>
            </div>
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

    watch: {
          '$route' (to, from) {
                this.getData();
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
        mui('.product-content').on('tap','a', function(e){
            let id = this.getAttribute('data-id');
            _self.$router.push({name:'DesignDetail',query:{id:id}});
        });
    },
    methods:{
        getData(){
            var url = 'category-products-list'+this.$route.query.dataId+'.json';
            this.$ajax(url)
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

.product-content{
    min-height:150px; 
}

.product-items{
    margin-right: 13px;
    height: 25%;
    margin-top: -5px;
}

.product-content{
    width: 100%;
}

.product-content .product-item{
    margin: 15px 0px;
    width: 100%;
    min-height: 150px;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.10);
}

.product-content .product-item a{
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #684028;
    font-size: 14px;
}

.product-content .product-item img{
    width: 100%;
    height: 100px;
    display: block;
}
.product-describe{
    height: 50px;
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
</style>
