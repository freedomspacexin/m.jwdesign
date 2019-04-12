<template>
        <div class="">
            <top-bar topTitle="个人中心"></top-bar>
            <div class="personal-container">
            	<!-- the first 会员基本信息-->
            	<div class="user-info-content">
            		<img src="../../assets/images/personal_bg.jpg">
            		<div class="user">
						<img class="user-icon" src="../../assets/images/user_icon.png">
						<h4>别问我是谁</h4>
						<p>1503366888</p>
					</div>
					<div class="my-order">
						<div class="my-order-content">
						<span class="f_left">我的订单</span>
						<span class="f_right">查看全部订单</span>
						</div>
					</div>
            	</div>
            	<div class="order-status">
					<ul class="order-status-content">
						<li>
							<i class="icomoon_font icomoon_font_wallet"></i>
							<span>待付款</span>
						</li>
						<li>
							<i class="icomoon_font icomoon_font_delivery"></i>
							<span>待发货</span>
						</li>
						<li>
							<i class="icomoon_font icomoon_font_take"></i>
							<span>待收货</span>
						</li>
						<li>
							<i class="icomoon_font icomoon_font_evaluate"></i>
							<span>待评价</span><i class="evaluate-count">2</i>
						</li>
					</ul>
				</div>
            	<!-- the second 会员资金-->
            	<div class="assets-content">
            		<div class="item-content clearfix">
        				<div class="f_left">
        					<i class="icomoon_font icomoon_font_purse"></i>
        					<span>我的钱包</span>
        				</div>
        				<a class="f_right">
        						<span>￥12.8</span>
        						<i class="icomoon_font icomoon_font_more"></i>
        				</a>
        			</div>
        			<div class="item-content clearfix">
        				<div class="f_left">
        					<i class="icomoon_font icomoon_font_commission"></i>
        					<span>我的佣金</span>
        				</div>
        				<a class="f_right">
        						<span>1248.2</span>
        						<i class="icomoon_font icomoon_font_more"></i>
        				</a>
        			</div>
        			<div class="item-content clearfix">
        				<div class="f_left">
        					<i class="icomoon_font icomoon_font_cart"></i>
        					<span>购物车</span>
        				</div>
        				<a class="f_right">
        						<span>2</span>
        						<i class="icomoon_font icomoon_font_more"></i>
        				</a>
        			</div>
            	</div>
				
            	<!-- the third 会员管理-->
            	<div class="manager-content">
            		<div class="item-content clearfix">
        				<div class="f_left">
        					<i class="icomoon_font icomoon_font_store"></i>
        					<span>我的收藏</span>
        				</div>
        				<a class="f_right">
        						<i class="icomoon_font icomoon_font_more"></i>
        				</a>
        			</div>
        			<div class="item-content clearfix">
        				<div class="f_left">
        					<i class="icomoon_font icomoon_font_address"></i>
        					<span>地址管理</span>
        				</div>
        				<a class="f_right">
        						<i class="icomoon_font icomoon_font_more"></i>
        				</a>
        			</div>
        			<div class="item-content clearfix">
        				<div class="f_left">
        					<i class="icomoon_font icomoon_font_explain"></i>
        					<span>配送说明</span>
        				</div>
        				<a class="f_right">
        						<i class="icomoon_font icomoon_font_more"></i>
        				</a>
        			</div>
        			<div class="item-content clearfix">
        				<div class="f_left">
        					<i class="icomoon_font icomoon_font_password"></i>
        					<span>修改密码</span>
        				</div>
        				<a class="f_right">
        						<i class="icomoon_font icomoon_font_more"></i>
        				</a>
        			</div>
        			<div class="item-content clearfix">
        				<div class="f_left">
        					<i class="icomoon_font icomoon_font_message"></i>
        					<span>消息中心</span>
        				</div>
        				<a class="f_right">
        						<span>0</span>
        						<i class="icomoon_font icomoon_font_more"></i>
        				</a>
        			</div>
            	</div>
            </div>
        </div>
</template>
<script>
     export default {
     }
</script>
<style scoped>
.personal-container{
	background-color: #efefef;
}


.user-info-content{
	position: relative;
	padding-top: 40px; 
	min-height: 200px;
	width: 100%;
}

.user-info-content>img{
	position: absolute;
	width: 100%;
}
.user{
	position: absolute;
	left: 3%;
	width: 92%;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 3%;
    font-size: 16px;
    color: #000;
}
.user-icon{
	width: 19%;
    float: left;
    border-radius: 50%;

}

.user h4{
	padding: 5% 0px 1% 21%;
}

.user p{
	padding: 0px 0px 0px 21%;
	color: #000;
	font-size: 14px;
}

.my-order{
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 40%;
	background-image: url(../../assets/images/my_order_bg.png);
	background-repeat: no-repeat;
	background-size: cover;
}
.my-order-content{
	color: #000;
	font-size: 16px;
	width: 100%;
	position: absolute;
	bottom: 8px;
	left: 0;
	padding: 0px 15px 0px;
}

.my-order-content .f_left{

}

.my-order-content .f_left:before{
	content: "\e873";
    font-family: icomoon;
    font-size: 26px;
    color: #ffc428;
    padding: 5px;
}


.my-order-content .f_right{
	font-size: 14px;
	color: #aaa;
	padding: 5px;
}

.my-order-content .f_right::after{
	content: "\e409";
    font-family: icomoon;
    font-size: 14px;
    padding: 5px;
}

.order-status{
	border-top: 1px solid #ddd;
    width: 100%;
    overflow: hidden;
    background: #fff;
    padding: 3% 0 2%;
}
.order-status-content{
	width: 92%;
    margin: 0 auto;
}

.order-status-content li{
	width: 25%;
    float: left;
    text-align: center;
    position: relative;
}

.order-status-content li i:first-child{
	font-size: 30px;
	display: inline-block;
	width: 100%;
}

.icomoon_font_wallet{
	color: #70bf23;
}
.icomoon_font_delivery{
	color: #ff8949;
}
.icomoon_font_take{
	color: #30b8a2;
}
.icomoon_font_evaluate{
	color: #4db4f9;
}
.evaluate-count{
	position: absolute;
    top: -3px;
    left: 50%;
    z-index: 100;
    min-width: 15px;
    height: 15px;
    padding: 2px;
    margin-left: 5px;
    font-size: 12px;
    line-height: 12px;
    color: #fff;
    vertical-align: top;
    background: #ff0000;
    border-radius: 7px;
}

.assets-content{
	margin-top: 18px;
	background-color: #fff;
	padding: 0px 15px;
}
.item-content{
	position: relative;
	width: 100%;
	padding:4% 0;
	border-bottom: 1px solid #efefef;
}
.item-content .f_left span{
	padding-left: 30px;
	font-size: 14px;
	vertical-align: middle;
}

.icomoon_font_purse{
	position: absolute;
	text-align: bottom;
	left: -5px;
	top: 50%;
	margin-top: -8px;
	font-size: 26px;
	color: #5f7ea5;
}
.icomoon_font_commission{
	position: absolute;
	text-align: bottom;
	left:0px;
	top: 50%;
	margin-top: -8px;
	font-size: 18px;
	color: #fbb500;
}
.icomoon_font_cart{
	position: absolute;
	text-align: bottom;
	left: 0px;
	top: 50%;
	margin-top: -8px;
	font-size: 20px;
	color: #81a8ff;
}

.icomoon_font_store{
	position: absolute;
	text-align: bottom;
	left: -3px;
	top: 50%;
	margin-top: -8px;
	font-size: 24px;
	color: #a6d344;
}

.icomoon_font_address{
	position: absolute;
	text-align: bottom;
	left: 0px;
	top: 50%;
	margin-top: -8px;
	font-size: 16px;
	color: #fe5e9e;
}

.icomoon_font_explain{
	position: absolute;
	text-align: bottom;
	left: 0px;
	top: 50%;
	margin-top: -8px;
	font-size: 18px;
	color: #ea4848;
}

.icomoon_font_password{
	position: absolute;
	text-align: bottom;
	left: 0px;
	top: 50%;
	margin-top: -8px;
	font-size: 18px;
	color: #30b8a2;
}

.icomoon_font_message{
	position: absolute;
	text-align: bottom;
	left: 0px;
	top: 50%;
	margin-top: -8px;
	font-size: 20px;
	color: #00a9ef;
}



.item-content .f_right span{
	vertical-align: middle;
	margin-top: 2px;
	margin-right: -6px;
	color: #8a8a8a;
}
.icomoon_font_more{
	text-align: right;
	font-size: 16px;
	vertical-align: middle;
	color: #8a8a8a;
}

.manager-content{
	margin-top: 18px;
	background-color: #fff;
	padding: 0px 15px;
	margin-bottom: 50px;
}
</style>