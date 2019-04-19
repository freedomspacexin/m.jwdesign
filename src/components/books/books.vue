<template>
    <div class="books-container"> 
        <top-bar topTitle="预约设计"></top-bar>
            <div class="books-content">
                <div class="designer-card">
                    <ul>
                        <li class="designer-info">
                            <p>{{prodInfo.designer}}</p>
                            <p>{{prodInfo.zhaiyao}}</p>
                            <p>联系电话：{{prodInfo.designer_tel}}</p>
                        </li>
                    </ul>
                </div>
                <div class="customer-tip">
                        <span>尊敬的客户：</span>
                        <p>请补全您的个人信息，便于详细了解您的装饰要求，12小时内将有专人与您电话联系。</p>
                    </div>
                <div class="customer-info">
                    <ul>
                        <li>
                            <span>您的姓名：</span>
                            <input type="text" name="">
                        </li>
                        <li>
                            <span>联系方式：</span>
                            <input type="number" name="" placeholder="Tel">
                        </li>
                        <li class="info-item clearfix">
                            <div class="area f_left">
                            <span>设计面积：</span>
                            <select>
                               <option value="">所有面积</option>
                               <option selected value="1">70平米以下</option>
                               <option value="2">70-80平米</option>
                               <option value="3">80-90平米</option>
                               <option value="4">90-100平米</option>
                               <option value="5">100-110平米</option>
                               <option value="6">110-120平米</option>
                               <option value="7">120-130平米</option>
                               <option value="8">130平米以上</option>
                           </select>
                           <i class="icomoon_font icomoon_font_drop drop"></i>
                           </div>
                           <div class="budget f_right">
                            <span>设计预算：</span>
                            <select>
                               <option value="">所有预算</option>
                               <option selected value="1">5万以下</option>
                               <option value="2">5-8万</option>
                               <option value="3">8-10万</option>
                               <option value="4">10-12万</option>
                               <option value="5">12-16万</option>
                               <option value="6">16-20万</option>
                               <option value="7">20-30万</option>
                               <option value="8">30万以上</option>
                           </select>
                           <i class="icomoon_font icomoon_font_drop drop"></i>
                           </div>
                        </li>
                        <li>
                            <div class="mui-input-row">
                                <input name="address" type="text" readonly placeholder="省市区">
                            </div>
                        </li>
                        <li class="commit-button">
                            <a href="javascript:;" class="mui-btn mui-btn-success">
                                免费获取设计方案
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
    </div>
</template>
<script>
     import cityData from '../../../static/lib/mui/js/city.js';
     import '../../../static/lib/mui/js/mui.picker.js';
     import '../../../static/lib/mui/js/mui.poppicker.js';
     export default {
        data(){
            return{
                id:this.$route.query.id,
                prodInfo:{},
            }
        },
        created(){
            this.$ajax('detail-design-list.json')
            .then(res=>{
                this.prodInfo = res.data.find((item)=>{
                    return item.id === parseInt(this.id);
                });
            })
            .catch(err=>{

            });
        },
        methods:{
            goBack(){
                this.$router.go(-1); //根据浏览器记录返回上一次
            }
        },
        mounted(){
            /*渲染*/
            var cityPicker = new mui.PopPicker({layer:3});
            cityPicker.setData(cityData.cityData);
            /*城市选择*/
            mui('.customer-info').on('tap','[name="address"]',function(){
                cityPicker.show(function(items) {
                    if(items[0].text == items[1].text){
                        items[0].text = '';
                    }
                    //返回 false 可以阻止选择框的关闭
                    mui('[name="address"]')[0].value=items[0].text+items[1].text+(items[2].text||'');
                });
            });
            mui('.customer-info').on('tap','.commit-button a', function(e){
                mui.toast('功能完善中...');
            });
        },
     }
</script>
<style scoped>
.books-container{
    padding-bottom: 50px;
}

.books-content{
    padding-top: 40px;
    background-color: #F5F5F5;
}

.designer-card{
    padding: 15px;
    background-color: #fff;
}
.designer-info{
    font-size: 12px;
    color: #8f8f94;
    text-align: right;
    position: relative;
}
.designer-info>p:first-child{
    font-size: 24px;
    color: #ffc428;
}

.designer-info>div{
    margin-top:5px;
}
.designer-info>p:nth-child(2){
    padding: 15px 0 0px;
    font-size: 14px;
}
.customer-info{
    padding: 15px;
    margin-top:10px;
    background-color: #fff;
}
.customer-tip{
    padding: 15px;
    margin-top:10px;
    background-color: #fff;
}

.customer-tip span{
    font-size: 18px;
}
.customer-tip p{
    text-indent: 2em;
}
.mui-input-row select{
    font-size: 12px;
    
 }
.info-item select{
    width: auto;
    padding: 10px 0;
 }

.info-item div{
   width: 50%;
   text-align: center;
   position: relative;
}

.info-item span{
}
.info-item .area{
    border-bottom: 1px solid rgba(0, 0, 0, .2);
   border-top: 1px solid rgba(0, 0, 0, .2);
   border-left: 1px solid rgba(0, 0, 0, .2); 
}

.info-item .drop{
    position: absolute;
    right: 1px;
    top: 50%;
    margin-top: -10px;

}

.info-item .budget{
    border: 1px solid rgba(0, 0, 0, .2);
}
.mui-input-row{
    margin-top: 15px;
}

.commit-button a{
    width: 100%;
}


</style>