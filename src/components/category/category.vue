<template>
         <div class="category-container"> 
            <!--搜索栏-->
            <header class="jw_search">
                <div class="jw_search_box">
                    <a href="#" class="icon_logo "><i class="icomoon_font icomoon_font_back"></i></a>
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
                            <li>列表数据 111</li>  
                            <li>列表数据 222</li>  
                            <li>列表数据 333</li>  
                            <li>列表数据 444</li>  
                            <li>列表数据 555</li>  
                            <li>列表数据 666</li>  
                            <li>列表数据 777</li>  
                            <li>列表数据 888</li>  
                            <li>列表数据 999</li>  
                            <li>列表数据 1010</li>  
                            <li>列表数据 1111</li>  
                            <li>列表数据 1212</li>  
                            <li>列表数据 1313</li>  
                            <li>列表数据 1414</li>  
                            <li>列表数据 1515</li>  
                        </ul>  
                    </div>  
                </div>
                <div class="second-category-right mui-scroll-wrapper">
                    <div class="mui-scroll">  
                        <ul class="datalist mui-clearfix">  
                            <li>列表数据 111</li>  
                            <li>列表数据 222</li>  
                            <li>列表数据 333</li>  
                            <li>列表数据 444</li>  
                            <li>列表数据 555</li>  
                            <li>列表数据 666</li>  
                            <li>列表数据 777</li>  
                            <li>列表数据 888</li>  
                            <li>列表数据 999</li>  
                            <li>列表数据 1010</li>  
                            <li>列表数据 1111</li>  
                            <li>列表数据 1212</li>  
                            <li>列表数据 1313</li>  
                            <li>列表数据 1414</li>  
                            <li>列表数据 1515</li>  
                        </ul> 
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
     export default {
        mounted(){

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
        }
     }
</script>
<style scoped>

.datalist li { height: 100px; } 


.category-container{
    width: 100%;
    height: 1000%;
}
.first-category-left{
    width: 26%;
    height: 100%;
    float: left;
}

.first-category-left ul{
    width: 100%;
}
.first-category-left ul li{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background-color: #f3f4f5;
}

.first-category-left ul li.now{
    background-color: #fff;
    border-right: none;
}

.first-category-left ul li a{
    color: #666;
    display: block;
    width: 100%;
    height: 100%;
}

.second-category-right.mui-scroll-wrapper{
    padding: 50px 10px 10px;    
    left: 26%;
    width: 74%;
    height: 100%;

}

.first-category-left .mui-scroll{
    padding-top: 40px;
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