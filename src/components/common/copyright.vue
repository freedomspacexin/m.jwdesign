<template>
    <footer class="footer" >
        <h2 class="footer-banner_title">骏威装饰</h2>
        <ul class="clearfix">
            <li id="appDownloadLink"><a href="javascript:;">下载APP</a></li>
            <li><a href="tel:0662-3858188">联系我们</a></li>
            <li><a href="javascript:;">全站公告</a></li>
            <li><a href="javascript:;">经营资质</a></li>
        </ul>
        <p>Copyright © 2019 广东阳江骏威装饰有限公司 版权所有</p>
        <div> 网站备案号：<a href="javascript:;" target="_blank">粤XXXXXXXXX</a></div >
    </footer>
</template>
<script>
     export default {
        mounted(){
           mui('.footer').on('tap','a', function(e){
                mui.toast('敬请期待');
           });
        },
     }
</script>
<style scoped>
.footer{
  background:#414141;
  padding: 8px;
  text-align: center;
  color: #a0a0a0;
  font-size: 12px;
  margin-bottom: 50px;
  margin-top: 10px;
}
.footer .footer-banner_title{
    font-size: 20px;
    color: #a0a0a0;
    text-align: center;
    line-height: 24px;
    display: block;
    padding-bottom: 10px;
}
.footer a{
    color: #a0a0a0;
}
.footer ul{}
.footer ul li{
      height: 28px;
      line-height: 28px;
      margin: 0px 1%;
      float: left;
      width: 23%;
      border: 1px solid #a0a0a0;
}
.footer ul li a{
    display: inline-block;
        width: 100%;
        height: 100%;
        font-size: 0.8em;
}
.footer p{
    margin-top: 10px;
}
</style>