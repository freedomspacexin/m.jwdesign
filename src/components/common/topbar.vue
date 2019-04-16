<template>
         <div class="container"> 
            <!--搜索栏-->
            <header class="jw-top-bar">
                <div class="top-bar_box">
                    <a href="javascript:;" class="icon_back"><i class="icomoon_font icomoon_font_back" @click="goBack"></i></a>
                    <h3 action="#">{{topTitle}}</h3>
                    <a href="#" class="menu"><i class="icomoon_font icomoon_font_menu"></i></a>
                </div>
            </header>
    </div>
</template>
<script>
     export default {
        props:['topTitle'],
        mounted(){
        },
        methods:{
            goBack(){
                this.$router.go(-1); //根据浏览器记录返回上一次
            }
        },
        mounted(){
            var that = this;
            mui(".top-bar_box").on('tap','.icon_back',function(){
                that.goBack();
            });
            mui('.top-bar_box').on('tap','.menu', function(e){
                mui.toast('功能完善中...');
            });
        }
     }
</script>
<style scoped>
.container{
    width: 100%;
}

.jw-top-bar {
    width: 100%;
    height: 40px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    background-color: #E0E0E0;
}

.jw-top-bar .top-bar_box {
    width: 100%;
    height: 40px;
    min-width: 320px;
    max-width: 640px;
    margin: 0 auto;
    background: rgba(201, 21, 35, 0);/*0~0.85*/
    position: relative;
    color: #ffc428;
}

.jw-top-bar .top-bar_box .icon_back {
    text-align: center;
    position: absolute;
    width: 60px;
    height: 40px;
    line-height: 40px;
    left: 0px;
    top: 0;
    z-index: 1;
    font-size: 28px;
}

.jw-top-bar .top-bar_box .menu {
    position: absolute;
    right: 0px;
    top: 0;
    width: 50px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #ffc428;
    font-size: 24px;
}

.jw-top-bar .top-bar_box h3 {
    position: absolute;
    padding-left: 60px;
    padding-right: 50px;
    text-align: center;
    line-height: 40px;
    height: 40px;
    left: 0;
    top: 0;
    width: 100%;
    font-size: 16px;
}
</style>