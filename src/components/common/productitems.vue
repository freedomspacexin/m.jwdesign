<template>
      <div class="product-items" id="product-items">
        <div class="product-head clearfix">
            <h3>{{title}}</h3><a href="category_v2.php?id=97">更多</a>
        </div>
        <div class="product-content">
            <div class="product-item"  v-for="(img,index) in imgs" :key="index">
                <a href="javascript:;">
                    <img v-lazy="domain + img.img_url" :key="img.img_url">
                    <div class="product-describe">
                        <h3>{{img.title}}</h3>
                        <span class="sell_price">${{img.sell_price}} &nbsp</span>
                        <del class="market_price">${{img.market_price}}</del>
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
        props:['title','url'],
        created(){
            var urls = this.url.split('?');
            if(process.env.NODE_ENV == 'production'){
                this.domain = '/view.jw.design.io';
            }
            switch(urls[0]){
                case 'products-simplest-list.json':
                    this.$ajax('products-simplest-list.json')
                        .then(res=>{
                            this.imgs = res.data;
                    })
                    .catch(err=>{
                        console.log(err);
                    });
                    break;
                case 'products-modern-list.json':
                    this.$ajax('products-modern-list.json')
                        .then(res=>{
                            this.imgs = res.data;
                    })
                    .catch(err=>{
                        console.log(err);
                    });
                    break;

                case 'products-restore-list.json':
                    this.$ajax('products-restore-list.json')
                        .then(res=>{
                            this.imgs = res.data;
                    })
                    .catch(err=>{
                        console.log(err);
                    });
                    break;
                case 'products-mashup-list.json':
                    this.$ajax('products-mashup-list.json')
                        .then(res=>{
                            this.imgs = res.data;
                    })
                    .catch(err=>{
                        console.log(err);
                    });
                    break;
    }
  }
}
</script>
<style scoped>

.product-content{
    min-height:200px; 
}

.product-items{
    padding: 0px 4%;
}

.product-head h3{
    float: left;
    text-align: center;
    font-size: 16px;
    color: #fff;
    line-height: 26px;
    height: 26px;
    background-color: rgba(68,40,28,0.3);
    width: 65px;
    border-radius: 30px;
  }

.product-head a{
    display: inline-block;
    text-align: center;
    padding: 5px 0px;
    font-size: 16px;
    float: right;
    line-height: 16px;
    height: 100%;
    color: #ddd;
}

.product-head a:after{
      content: "";
      display: inline-block;
      width: 10px;
      height: 14px;
      margin-left: 6px;
      margin-right: 5px;
      background:url("../../assets/images/more.png") no-repeat 5px 5px/5px 10px;
}
.product-content{
    width: 100%;
}

.product-content .product-item{
    margin: 15px 0px;
    width: 100%;
    height: 190px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.10);
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
    height: 140px;
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
