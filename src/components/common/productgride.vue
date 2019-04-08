<template>
        <div class="product-gride-container">
                <ul class="product-gride clearfix">
                    <li v-for="(img, index) in imgs" :key="index">
                        <img v-lazy="domain+img.img_url" :key="img.img_url"/>
                        <h3>{{img.title}}</h3>
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
}
</style>