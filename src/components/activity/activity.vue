<template>
        <div class="">
            <top-bar topTitle="活动专区"></top-bar>
            <section class="activity-product">
            	<div ref="item" class="activity-item" v-for="(img, index) in imgs" :key="index">
            		<div :class="img.hasStop?'show':'hide'">活动已结束</div>
            		<div class="activity-item-title clearfix">
	                    <span class="f_left icomoon_font icomoon_font_timer"></span>
	                    <span class="name f_left">活动倒计时</span>

	                    <div class="time f_left">
	                        <span>{{img.h1}}</span>
	                        <span>{{img.h2}}</span>
	                        <span>:</span>
	                        <span>{{img.m1}}</span>
	                        <span>{{img.m2}}</span>
	                        <span>:</span>
	                        <span>{{img.s1}}</span>
	                        <span>{{img.s2}}</span>
	                        <!-- 临时解决内存更改但不能更新界面倒计时-->
	                        <span style="display: none;">{{s2}}</span>
	                    </div>
                    </div>
                    <div class="activity-item-content">
                    	<span :class="{'7.5':'discount_7_5','8.5':'discount_8_5','9.5':'discount_9_5'}[img.discount]"></span>
       					<a href="javascript:;">
       					    <img v-lazy="domain + img.img_url" :key="img.img_url">
       					    <div class="product-describe">
       					        <h3>{{img.title}}</h3>
       					        <span class="sell_price">{{img.designer}}</span>
       					        <del class="market_price">找他设计</del>
       					    </div>
       					</a>
                    </div>
            	</div>
            </section>
        </div>
</template>
<script>
     export default {
     	data(){
     		return {
     			imgs:[],
     			domain:'',
     			h1:0,
     			h2:0,
     			m1:0,
     			m2:0,
     			s1:0,
     			s2:0,
     		}
     	},
     	created(){
     		var that = this;
     		if(process.env.NODE_ENV == 'production'){
                this.domain = '/view.jw.design.io';
            }
            this.getData(function(data){
            	that.downTime(data)
            });
     	},
     	methods:{
     		getData(callback){
            var url = 'activity-products-list.json';
            this.$ajax(url)
                    .then(res=>{
                        this.imgs = res.data;
                        callback && callback(this.imgs);
                })
                .catch(err=>{
                    console.log(err);
                });
       		},
       		downTime(data){
    			 /*思路：
			     * 1.设定倒计总时长，（时长应从服务端获取，不允许客户端更改）
			     * 2.转化为时分秒
			     * 3.获取元素设置innerHTML*/
			    var that = this;
			    data.forEach(function(item,index){
			    		var time = item.down_time;
				    	var timer = setInterval(function () {
				        time--;
				        var h = Math.floor(time / 3600);
				        var m = Math.floor(time % 3600 / 60);
				        var s = time % 60;
				        that.h1 = Math.floor(h/10);
				        that.h2 = h%10;
				        that.imgs[index].h1 = that.h1;
				        that.imgs[index].h2 = that.h2;
				        that.m1 = Math.floor(m/10);
				        that.m2 = m%10;
				        that.imgs[index].m1 = that.m1;
				        that.imgs[index].m2 = that.m2;
				        that.s1 = Math.floor(s/10);
				        that.s2 = s%10;
				        that.imgs[index].s1 = that.s1;
				        that.imgs[index].s2 = that.s2;
				        if(time <= 0){
				            clearInterval(timer);
				            that.imgs[index].hasStop = true;
				        }
	    				}, 1000);
			    });
       		}
     	},
     	updated(){
     	},
     	mounted(){			   
     	}

     }
</script>
<style scoped>
.activity-product{
	padding: 40px 15px 60px;
}

.activity-item{
	position: relative;
	margin-top: 15px;
	min-height: 200px;
	width: 100%;
	box-shadow: 0 0 8px 0 rgba(0,0,0,0.10);
}

.activity-item div:first-child{
	color: #ffc428;
	text-align: center;
	font-size: 24px;
	top: 0px;
	left: 0px;
	position: absolute;
	width: 100%;
	height:100%;
	line-height: 230px;
	background-color: rgba(0,0,0,0.5);
	z-index: 1000;
}

.activity-item .show{
    display: block;
}

.activity-item .hide{
	display: none;
}



.icomoon_font_timer{
	font-size: 20px;
	color: #ffc428;
	margin-left: 6px;
}

.activity-item-title{
	 padding-top: 7px;
}

.activity-item-title .name {
    float: left;
    margin-left: 10px;
    font-size: 16px;
    color: #ffc428;
}

.activity-item-title .time{
	margin-left: 10px;
}

.activity-item-title .time span {
    float: left;
    line-height: 16px;
    text-align: center;
    width: 16px;
    height: 16px;
    background-color: #333;
    color: #fff;
    margin-left: 3px;
}
.activity-item-content{
	padding: 10px 10px 0;
}

.activity-item-content>span{
	position: absolute;
	width: 50px;
	height: 50px;
	background-size: cover;
	background-repeat: no-repeat;
}

.activity-item-content .discount_7_5{
	background-image: url('../../assets/images/discount_7_5.png');
}

.activity-item-content .discount_8_5{
	background-image: url('../../assets/images/discount_8_5.png');
}

.activity-item-content .discount_9_5{
	background-image: url('../../assets/images/discount_9_5.png');
}


.activity-item-content a{
	display: inline-block;
    width: 100%;
    height: 100%;
    color: #684028;
    font-size: 14px;
}

.activity-item-content img{
    width: 100%;
    height: 160px;
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