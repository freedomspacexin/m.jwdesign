<template>
         <div class="category-container"> 
            <!--搜索栏-->
            <header class="jw_search">
                <div class="jw_search_box">
                    <a href="javascript:;" class="icon_logo"><i class="icomoon_font icomoon_font_back"></i></a>
                    <form action="#">
                        <span class="icon_search mintui mintui-search"></span>
                        <input type="text" placeholder="placeholder"/>
                    </form>
                    <a href="#" class="login"><i class="icomoon_font icomoon_font_menu"></i></a>
                </div>
            </header>
            <div class="">
                <div class="first-category-left mui-scroll-wrapper">  
                    <div class="mui-scroll">  
                        <ul class="datalist mui-clearfix">  
                            <li class="category-title">
                                <img src="../../assets/images/guan_bangzhu.png"/>
                                <span>设计风格</span>
                            </li>  
                            <li class="cate category-item now">
                                <a href="javascript:;" class="1"" dataId="1">简约</a>
                            </li>  
                            <li class="cate category-item">
                                <a href="javascript:;" class="2"" dataId="2">现代</a>
                            </li>  
                            <li class="cate category-item">
                                <a href="javascript:;" class="3"" dataId="3">复古</a>
                            </li>  
                            <li class="cate category-item">
                                <a href="javascript:;" class="4"" dataId="4">混搭</a>
                            </li>  
                            <li class="category-title">
                                <img src="../../assets/images/guan_bangzhu.png"/>
                                <span>主题户型</span>
                            </li>
                            <li class="cate category-item">
                                <a href="javascript:;" class="5"" dataId="5">精致麻雀窝</a>
                            </li>  
                            <li class="cate category-item">
                                <a href="javascript:;" class="6"" dataId="6">温馨小小窝</a>
                            </li>  
                            <li class="cate category-item">
                                <a href="javascript:;" class="7"" dataId="7">甜蜜婚房</a>
                            </li>  
                            <li class="cate category-item">
                                <a href="javascript:;" class="8"" dataId="8">雅致清凉小窝</a>
                            </li>  
                            <li class="cate category-item">
                                <a href="javascript:;" class="9"" dataId="9">单身贵族</a>
                            </li> 
                            <li class="category-title">
                                <img src="../../assets/images/guan_bangzhu.png"/>
                                <span>飘窗设计</span>
                            </li> 
                            <li class="cate category-curtain">
                                <a href="javascript:;" class="10" dataId="10">田园风格</a>
                            </li>  
                            <li class="cate category-curtain">
                                <a href="javascript:;" class="11" dataId="11">古典风格</a>
                            </li>  
                            <li class="cate category-curtain">
                                <a href="javascript:;" class="12" dataId="12">北欧风格</a>
                            </li>  
                            <li class="cate category-curtain">
                                <a href="javascript:;" class="13" dataId="13">功能型</a>
                            </li>  
                            <li class="cate category-curtain">
                                <a href="javascript:;" class="14" dataId="14">休闲型</a>
                            </li>  
                            <li class="cate category-curtain">
                                <a href="javascript:;" class="15" dataId="15">景观型</a>
                            </li>

                             <li class="category-title" ref="categoryGride">
                                <img src="../../assets/images/guan_bangzhu.png"/>
                                <span>装饰选材</span>
                            </li> 
                            <li class="cate category-gride" ref="firstGride">
                                <a href="javascript:;" class="16" dataId="16">灯具</a>
                            </li>
                            <li class="cate category-gride">
                                <a href="javascript:;" class="17" dataId="17">衣柜</a>
                            </li>  
                            <li class="cate category-gride">
                                <a href="javascript:;" class="18" dataId="18">窗帘</a>
                            </li>  
                            <li class="cate category-gride">
                                <a href="javascript:;" class="19" dataId="19">瓷砖</a>
                            </li>  
                            <li class="cate category-gride">
                                <a href="javascript:;" class="20" dataId="20">沙发</a>
                            </li>  
                            <li class="cate category-gride">
                                <a href="javascript:;" class="21" dataId="21">油漆</a>
                            </li>    
                            <li class="cate category-gride">
                                <a href="javascript:;" class="22" dataId="22">五金</a>
                            </li>    
                            <li class="cate category-gride">
                                <a href="javascript:;" class="23" dataId="23">厨柜</a>
                            </li>    
                            <li class="cate category-gride">
                                <a href="javascript:;" class="24" dataId="24">沙窗</a>
                            </li>    
                        </ul>  
                    </div>  
                </div>
                <div class="second-category-right mui-scroll-wrapper">
                    <div class="mui-scroll" ref="categoryright">  
                        <ul>  
                            <li><router-view></router-view></li>
                            <!--  <li><category-items url="products-simplest-list.json"></category-items></li> --> 
                           <!--  <li><category-gride url="products-other-list.json"></category-gride></li>  -->
                        </ul> 
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
     export default {
        components:{
        },
        created(){
        },
        updated(){
        },
        beforeRouteEnter(to, from, next) {
            let toName =to.name;
            let fromName = from.name;
            next(vm=>{
                if(toName == "Category"){
                    vm.$router.replace({name:'category_items',query:{dataId:1}});
                }
            });
        },
        mounted(){
            var that = this;
            mui('.cate').each(function(index,item){
                this.classList.remove('now');
            });
            let id= this.$route.query.dataId || 1;
            /*选中的li*/
            var selectedEle =  mui('.'+id)[0].parentNode;
            selectedEle.classList.add('now');
            //滚动到选中的li
            let offsetH = selectedEle.offsetTop-selectedEle.offsetHeight * 2;
            mui(".first-category-left").scroll().scrollTo(0,-offsetH,0);
          
            mui.ready(function() {  
            //初始化区域滚动  
                mui(".mui-scroll-wrapper").scroll({
                    scrollY: true, //是否竖向滚动
                    scrollX: false, //是否横向滚动
                    startX: 0, //初始化时滚动至x
                    startY: 0, //初始化时滚动至y
                    indicators: false, //是否显示滚动条
                    deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
                    bounce: true //是否启用回弹
                });  
            });
            mui(".first-category-left").on('tap','a',function(){
               /* window.location.href = this.href;*/
                /*当前为选中，再点就不请求数据*/
                if(this.classList.contains('now')) return false;
                mui('.first-category-left ul li a').each(function(index,item){
                     this.parentNode.classList.remove('now')
                });
                this.parentNode.classList.add('now');
                // mui('.second-category-right').scroll().refresh();   //先刷新一次布局再scrollTo
                mui('.second-category-right').scroll().scrollTo(0, 0/*, 100*/); //100毫秒滚动到顶
                mui('.second-category-right').scroll().reLayout();
            });
            mui(".category-item").on('tap', 'a',function(){
                var dataId = this.getAttribute('dataId');
                that.$router.replace({name:'category_items',query:{dataId:dataId}});
            });

            mui(".category-gride").on('tap', 'a',function(){
                var dataId = this.getAttribute('dataId');
                that.$router.replace({name:'category_grides',query:{dataId:dataId}});
            });

            mui(".category-curtain").on('tap', 'a',function(){
                var dataId = this.getAttribute('dataId');
                that.$router.replace({name:'category_curtain',query:{dataId:dataId}});
            });


            mui(".jw_search_box").on('tap','.icon_logo',function(){
                that.goBack();
            });

            mui('.jw_search_box').on('tap','.login', function(e){
                mui.toast('功能完善中...');
            });
        },
        methods:{
            goBack(){
                this.$router.go(-1); //根据浏览器记录返回上一次
            }
        }
     }
</script>
<style scoped>
.category-container{
    width: 100%;
}
.first-category-left{
    width: 28%;
    height: 100%;
    float: left;
}

.first-category-left ul{
    width: 100%;
}
.first-category-left ul li{
    width: 96%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background-color: #f3f4f5;
   
}

.first-category-left ul li.now{
    background-color: #fff;
    border-right: none;
}


.first-category-left .category-title{
    background: #e8f1db;
    /*border-right: 1px solid #e5e5e5;*/
    border-right:none;
    box-shadow: 0px 4px 6px #cbd1c3;
    z-index: 50;
    position: relative;
}
.category-title img{
    position: absolute;
    top: 0;
    left: 0;
    vertical-align: middle;
}


.first-category-left ul li a{
    color: #666;
    display: block;
    width: 100%;
    height: 100%;
}

.second-category-right.mui-scroll-wrapper{
    padding: 40px 5px 50px;    
    left: 28%;
    width: 72%;
    height: 100%;
}

.first-category-left .mui-scroll{
    padding-top: 40px;
    padding-bottom: 50px;
}

.jw_search {
    width: 100%;
    height: 40px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    background-color: #E0E0E0;
}

.jw_search .jw_search_box {
    width: 100%;
    height: 40px;
    min-width: 320px;
    max-width: 640px;
    margin: 0 auto;
    background: rgba(201, 21, 35, 0);/*0~0.85*/
    position: relative;
    color: #ffc428;
}

.jw_search .jw_search_box .icon_logo {
    text-align: center;
    position: absolute;
    width: 60px;
    height: 40px;
    line-height: 40px;
    left: 0px;
    top: 0;
    z-index: 1;
}
.icon_logo i{
    font-size: 28px;
}
.login i{
    font-size: 24px;
}

.jw_search .jw_search_box .login {
    position: absolute;
    right: 0px;
    top: 0;
    width: 50px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #ffc428;
}

.jw_search .jw_search_box form {
    position: absolute;
    padding-left: 60px;
    padding-right: 50px;
    left: 0;
    top: 0;
    width: 100%;

}

.jw_search .jw_search_box .icon_search {
    position: absolute;
    left: 68px;
    top: 12px;
}

.jw_search .jw_search_box input {
    width: 100%;
    margin-top: 5px;
    height: 30px;
    border-radius: 15px;
    padding-left: 30px;
    background: #fff;
}

</style>