webpackJsonp([13],{iVTN:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("Qk47"),n={components:{detailSwiper:function(){return i.e(18).then(i.bind(null,"rYSP"))}},data:function(){return{id:this.$route.query.id,prodInfo:{}}},created:function(){var t=this;this.$ajax("cart-products-list.json").then(function(s){t.prodInfo=s.data.find(function(s){return s.id===parseInt(t.id)})}).catch(function(t){})},mounted:function(){var t=this;mui(".mui-scroll-wrapper").scroll({scrollY:!0,scrollX:!1,startX:0,startY:0,indicators:!1,deceleration:6e-4,bounce:!0}),mui(".add-cart-content").on("tap",".add-cart",function(s){t.addCart()}),mui(".add-cart-content").on("tap",".shopping",function(t){mui.toast("功能完善中...")})},methods:{addCart:function(){var t=this;a.a.updateProds({id:this.id,num:1},function(){mui.confirm("添加成功，去购物车看看？","温馨提示",["是","否"],function(s){0==s.index&&t.$router.push({name:"Cart"})})})}}},o={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"prodinfo-container"},[i("top-bar",{attrs:{topTitle:"商品详情"}}),t._v(" "),i("div",{staticClass:"lt_content mui-scroll-wrapper"},[i("div",{staticClass:"mui-scroll"},[i("detail-swiper",{staticClass:"mt-40",attrs:{url:"detail-products-list.json?id="+t.id}}),t._v(" "),i("div",{staticClass:"products-desc-container"},[i("div",{staticClass:"product-desc"},[i("ul",[i("li",{staticClass:"price"},[i("p",[i("s",[t._v("￥")]),i("span",{domProps:{textContent:t._s(t.prodInfo.sell_price)}})]),t._v(" "),i("div",[t._v("市场价："),i("del",[t._v("￥ "),i("span",{domProps:{textContent:t._s(t.prodInfo.market_price)}})])])]),t._v(" "),i("li",{staticClass:"product-desc-title"},[i("span",{domProps:{textContent:t._s(t.prodInfo.title)}})]),t._v(" "),t._m(0)])]),t._v(" "),i("div",{staticClass:"product-props"},[i("p",[t._v("商品参数：")]),t._v(" "),i("p",[t._v("商品货号："),i("span",{domProps:{textContent:t._s(t.prodInfo.goods_no)}})]),t._v(" "),i("p",[t._v("库存情况："),i("span",{domProps:{textContent:t._s(t.prodInfo.stock_quantity)}}),t._v("件")]),t._v(" "),i("p",[t._v("上架时间："),i("span",{domProps:{textContent:t._s(t.prodInfo.add_time)}})])]),t._v(" "),t._m(1),t._v(" "),t._m(2)])],1)]),t._v(" "),t._m(3)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"share clearfix"},[s("p",[s("i",{staticClass:"icomoon_font icomoon_font_great"}),this._v("14人赞过")]),this._v(" "),s("p",[s("i",{staticClass:"icomoon_font icomoon_font_share"}),this._v("分享")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"product-evaluate"},[s("div",{staticClass:"evaluate-head clearfix"},[s("h3",{staticClass:"f_left"},[this._v("宝贝评价(6)")]),this._v(" "),s("a",{staticClass:"f_right",attrs:{href:"category_v2.php?id=97"}},[this._v("查看全部 >")])]),this._v(" "),s("img",{attrs:{src:i("rvWd")}}),s("span",[this._v("l****3")]),this._v(" "),s("p",[this._v("商品参数商品货号库存情况,上架时间：联系客服")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"product-detail"},[s("h3",[this._v("宝贝详情")]),this._v(" "),s("p",[this._v("商品参数商品货号库存情况,上架时间：联系客服")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"add-cart-content"},[s("a",{staticClass:"contact-customer",attrs:{href:"tel:0662-3858188"}},[s("i",{staticClass:"icomoon_font icomoon_font_contect"}),this._v(" "),s("span",[this._v("联系客服")])]),this._v(" "),s("a",{staticClass:"add-cart",attrs:{href:"javascript:;"}},[this._v("加入购物车")]),this._v(" "),s("a",{staticClass:"shopping",attrs:{href:"javascript:;"}},[this._v("立即购买")])])}]};var r=i("VU/8")(n,o,!1,function(t){i("j/bV")},"data-v-356c7086",null);s.default=r.exports},"j/bV":function(t,s){}});