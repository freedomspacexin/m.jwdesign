<template>
	<!--搜索栏-->
    <header class="jw_search">
        <div class="jw_search_box">
            <!--双飞翼布局-->
            <a href="javascript:;" class="icon_logo">骏威装饰-商品</a>
            <form action="#">
                <span class="icon_search mintui mintui-search"></span>
                <input type="text" placeholder="placeholder"/>
            </form>
            <a href="#" class="login">登录</a>
        </div>
    </header>
</template>
<script>
	 export default {
        mounted(){
            mui('.jw_search_box').on('tap','.login', function(e){
                mui.toast('功能完善中...');
            });
        },
     }
</script>
<style scoped>

.jw_container {
    width: 100%;
    min-width: 320px;
    max-width: 640px;
    margin: 0 auto;
}


.jw_search {
    width: 100%;
    height: 40px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    background-image: url(../../assets/images/title_bg.png);
    background-repeat: repeat-y;
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
    position: absolute;
    width: 60px;
    height: 40px;
    left: 0px;
    top: 0;
    font-size: 0;
    z-index: 1;
    background:url("../../assets/images/jw_logo.png") no-repeat center/40px 40px;
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