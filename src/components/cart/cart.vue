<template>
        <div class="cart-content">
             <top-bar topTitle="购物车"></top-bar>
             <div ref='noProduct' :class="payment.isEmpty?'W_car_box show':'W_car_box'">
							<div class="W_car">
								<img src="../../assets/images/W_car.png"/>
							</div>
							<p>暂无商品</p>
							<a href="javascript:;">快去选购吧 ></a>
			 </div>
             <div class="pay-detail">
             	<ul class="mui-table-view">
					<li class="mui-table-view-cell cart-item" v-for="(goods,index) in goodsList" :key="goods.id">
						<div class="mui-slider-right mui-disabled">
							<a href="javascript:;" class="mui-btn mui-btn-red" :data-index="index">删除</a>
						</div>
						<div class="mui-slider-handle">
							<div class="cart-product-content">
										<div class="product-selected">
  											<input type="checkbox" :value="goods.id" :checked="goods.isPicked"/>
  											<label :data-index="index" for="checkbox" class="picked"></label>
										</div>
										<div class="product-pic">
											<img v-lazy="domain+goods.img_url" :key="goods.img_url"/>
										</div>
										<div class="product-detail">
											<p class="product-title">{{goods.title}}</p>
											<div class="product-nums">
												<p class="product-count">数量：<span>{{goods.num}}</span></p>
												<span class="product-money">小计：¥<span>{{goods.sell_price*goods.num}}</span></span>
											</div>
											<div class="product-change-count">
												<span data-sub="true" :data-index="index">-</span>
												<span>{{goods.num}}</span>
												<span data-add="true" :data-index="index">+</span>
											</div>
										</div>
									</div>
						</div>
					</li>
				</ul>
             </div>
             <div class="pay-content">
		        	<div class="all">
  						<input type="checkbox" :checked="isAllSelected">
  						<label for="selected-all" class="chekbox-all"></label>
					</div>
		        	<span class="selected-all">全选</span>
		        	<a href="javascript:;" class="go-pay">结算({{payment.num}})</a>
		        	<span class="total-money"><span>合计&nbsp:&nbsp</span><i>¥{{payment.sum}}</i></span>
	        </div>
        </div>
</template>
<script>
	//引入商品操作工具对象
	import localStorageTool from '../common/localstorageTool.js';
	//通知底部变更数据
	import connect from '../common/connect.js';
    export default {
     	data(){
     		return {
     			goodsList:[],//商品数组数据
     			domain:'',
     		}
     	},
     	created(){
     		if(process.env.NODE_ENV == 'production'){
                this.domain = '/view.jw.design.io';
            }
			 localStorageTool.saveProds({"57":2,"58":1});///*设置默认*/
     		//获取local的数据
        	let prods = localStorageTool.getProds(); 
        	//判断如果没有商品，return

        	if(Object.keys(prods).length === 0)return;
        	//prods{"87":4,"89":10,"93":11,"95":16} id:count
        	let ids = Object.keys(prods);
        	//发起请求，将数据挂上
        	this.$ajax('cart-products-list.json')
        		.then(res=>{
            		let allGoods = res.data;
            		ids.forEach((ele,index)=>{
            	 		this.goodsList.push(allGoods.find(function(item){
            				return item.id === parseInt(ele);
            			}));
            		});

             		//prods{"87":4,"89":10,"93":11,"95":16}   ele.id-> 87
             		//添加num属性
            		this.goodsList.forEach((ele,index)=>{
                 		if(prods[ele.id]){ //数量
                    		//在vue中添加属性，直接点出来的方法是没有办法做到响应
							//添加属性一定要this.$set
                    		this.$set(ele,'num',prods[ele.id]);
                    		this.$set(ele,'isPicked',true);
                		}
            		});
        		})
        		.catch(err=>{
            		console.log(err);
        		});
     	},
     	mounted(){
     		var that = this;
     		let prods = localStorageTool.getProds(); 
        	//判断如果没有商品，return
        	if(Object.keys(prods).length === 0){
        		this.$refs.noProduct.classList.add('show');
        		return;
        	} else {
        		this.$refs.noProduct.classList.remove('show');
        	}


     		mui.init();
     		mui('.pay-detail').on('tap', '.mui-btn', function (e) {
        		var li = this.parentNode.parentNode;
        		var index = parseInt(this.getAttribute('data-index'));
        		mui.confirm('你要删除这件商品吗？', '温馨提示', ['确定', '取消'], function (e) {
            		if (e.index == 0) {
                		that.del(index, function (data) {
                    		if (data == true) {
                        		mui.toast('删除成功');
                    		} else if (data.error) {
                        		mui.toast(data.message);
                    		}
                		});
            		} else {
                		mui.swipeoutClose(li);
            		}
        		});
    		});
    		mui('.pay-detail').on('tap','.product-change-count span', function(e){
    			let index = this.getAttribute('data-index');
    			if (this.getAttribute('data-sub')){
    				that.sub(index);
    			}
    			if (this.getAttribute('data-add')){
    				that.add(index);
    			}
    		});
    		mui('.pay-content').on('tap','.chekbox-all', function(e){
    			 that.selectedAll();
    		});
    		mui('.pay-detail').on('tap','.picked', function(e){
    			  let index = this.getAttribute('data-index');
    			  that.goodsList[index].isPicked = !that.goodsList[index].isPicked;
                  that.goodsList.splice(index, 1, that.goodsList[index]);
    		});

     	},
     	methods:{
     		add(i){
   		         this.goodsList[i].num++;
   		         connect.$emit('addShopCart',1);
   		         localStorageTool.updateProds({
   		             id:this.goodsList[i].id,
   		             num:1, //如果存在，追加1，否则新增1
   		         })
   		     },
   		     sub(i){
   		         if(this.goodsList[i].num<= 1) return;
   		         this.goodsList[i].num--;
   		         connect.$emit('addShopCart',-1);//加上-1就是减一
   		         localStorageTool.updateProds({
   		             id:this.goodsList[i].id,
   		             num:-1, //如果存在，追加1，否则新增1
   		         })
   		     },
   		     del(i,callback){
   		         //删除内存，删除storage,通知下方number小球
   		         let goods = this.goodsList[i];
   		         //删除storage
   		         localStorageTool.deleteProdById(goods.id)
   		         //通知下方number小球
   		         connect.$emit('addShopCart',-goods.num);
   		         //删除内存
   		         this.goodsList.splice(i,1);
   		         callback && callback(true);
   		     },
   		     selectedAll(){
   		     	let checked = true;
                // 全选
                if(this.isAllSelected){
                    checked = false;
                }
                this.goods = this.goodsList.map(el => {
                    this.$set(el,'isPicked',checked);
                    return el;
                })
   		     },
   		     isPicked(i){
   		     	let goods = this.goodsList[i];
   		     	goods.isPicked = !goods.isPicked;
   		     	var isPickedCount=0;
   		     	this.goodsList.forEach((ele,index)=>{
   		     		if(ele.isPicked){
   		     			isPickedCount++;
   		     		}
   		     	});
   		     	if (isPickedCount == this.goodsList.length){
   		     		this.allSelectedValue = true;
   		     	} else {
   		     		this.allSelectedValue = false;
   		     	}
   		     },
     	},
     	computed:{
        	payment(){
        	    // 1:如果商品没有被选中，遍历数组中，哪些商品有被选中，如果是
        	    // 2:计算总金额= 单价 * 件数
        	    // 3:将以上总金额累计
        	    // 4:如果是 +元素的num 件数 
        	    let num = 0;
        	    let sum = 0;
        	    let isEmpty = false;
        	    if (!this.goodsList || this.goodsList.length === 0) {
        	    	isEmpty = true;
        	    } else {
        	    	isEmpty = false;
        	    }
        	    this.goodsList.forEach((ele)=>{
        	        if(ele.isPicked){
        	            //选中
        	            sum += ele.num * ele.sell_price;//总价
        	            num += ele.num;//金额
        	        }
        	    })
        	    return {
        	        num,sum,isEmpty
        	    };
        	},
        	// 是否全选
            isAllSelected(){
                return this.goodsList.every((el) => {
                    return el.isPicked;
                })
            },
    	},

    }
</script>
<style scoped>

.W_car_box{
	width: 100%;
    margin: 0 auto;
    text-align: center;
    margin-top: 25%;
    background-color: #fff;
    display: none;
 }

 .W_car_box.show{
 	display: block;
 }
.W_car {
    width: 95%;
}
.W_car img{
	margin: 0 auto;
	display: block;
	width: 80px;
}

.W_car_box p {
    font-size: 16px;
    color: #8a8a8a;
    display: inline-block;
    margin-top: 5%;
}

.W_car_box a {
    font-size: 0.75rem;
    display: block;
    margin-top: 1%;
}

.cart-content{
}
.pay-detail{
	padding-top: 40px;
	padding-bottom: 95px;
}
.cart-product-content{
	width: 100%;
    margin: 0 auto;
    overflow: hidden;
}
.product-selected{
	width: 4%;
    float: left;
    position: absolute;
    top: 50%;
    margin-top: -3%;
}

.mui-table-view:before{
	background-color: unset;
	height: 0px; 
}
.mui-table-view:after{
	background-color: unset;
	height: 0px; 
}
.mui-table-view-cell:after{
	background-color: unset;
	height: 0px; 
}

.cart-item{
	border-bottom: 1px solid #e5e5e5;
}

.product-selected>input{
	visibility:hidden;
}
.product-selected label{
	position: absolute;
	left: 0px;
	top:50%;
	margin-top: -10px;
	width: 20px;
	height: 20px;
	border: 1px solid #e5e5e5;
	border-radius: 50%;
}

/*这段代码是当input选中时,给input的相邻标签label加一个背景图片*/
.product-selected input:checked+label::before{
	content: "\e86c";
	font-family: icomoon;
	position: absolute;
	font-size: 26px;
	color: #ffc428;
	left: -4px;
	top: -1px;
}

.product-pic{
	float: left;
    width: 33%;
    min-height: 80px;
    margin-left: 12%;
}
.product-pic img{
	width: 100%;
	vertical-align: middle;
}
.product-detail{
	float: right;
    width: 52%;
    height: 100%;
    padding-left: 2%;
    padding-top: 2%;
}
.product-title{
    font-size: 14px;
    color: #282828;
    width: 100%;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.product-nums{
	margin-top: 8%;
	width: 100%;
}
.product-nums .product-count{
    font-size: 12px;
    color: #8a8a8a;
}
.product-nums .product-money{
    color: #fd3a9f;
    font-size: 0.65rem;
}

.product-change-count{
	position: absolute;
	right: 0px;
    width: 50%;
    bottom: 0px;
}
.product-change-count span{
	display: inline-block;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    width: 28.5%;
    height: 40px;
    float: left;
    text-align: center;
    line-height: 40px;
    margin-left: 4%;
}

.product-change-count span:nth-child(1){
	margin-left: 0px;
}

.product-change-count span:nth-child(2) {
    width: 34.5%;
}

.pay-content{
	width: 100%;
    height: 45px;
    background: #fff;
    position: fixed;
    bottom: 50px;
    left: 0;
    margin-top: 10px;
    line-height: 45px;
    border-top: 1px solid #e5e5e5;
    color: #282828;
    font-size: 14px;
}
.selected-all{
	float: left;
    width: 16%;
    overflow: hidden;
    text-align: right;
}

.all{
	position: absolute;
	width: 4%;
    left: 4%;
}


.all>input{
	visibility:hidden;
}
.all label{
	position: absolute;
	left: 0px;
	top:50%;
	margin-top: -10px;
	width: 20px;
	height: 20px;
	border: 1px solid #afafaf;
	border-radius: 50%;
}

/*这段代码是当input选中时,给input的相邻标签label加一个背景图片*/
.all input:checked+label::before{
	content: "\e86c";
	font-family: icomoon;
	position: absolute;
	font-size: 26px;
	color: #ffc428;
	left: -4px;
	top: -14px;
}

.selected-all{
	margin-left: 5%;
}



.go-pay{
	float: right;
    background: #ffc428;
    font-size:16px;
    color: #fff;
    height: 44px;
    text-align: center;
    line-height: 44px;
    width: 30%;
}

.total-money{
	float: right;
	padding-right: 20px;
}

.total-money span{
	font-size: 14px;
	font-weight: 700;
}

.total-money i{
	color: #ffc428;
}
</style>