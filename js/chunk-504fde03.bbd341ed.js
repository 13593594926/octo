(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-504fde03"],{"4bee":function(t,e,a){"use strict";a("ccf2")},"937a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"zb_box"},[a("header",[a("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.$router.go(-1)}}}),a("h3",[t._v("预约课程")])],1),a("div",{staticClass:"zb_otItem"},[a("van-image",{attrs:{round:"",width:".8rem",height:".8rem",src:t.list.avatar}}),a("div",[a("p",[a("span",[t._v(t._s(t.list.real_name))])]),a("p",[t._v("男 30年教龄")])]),a("div",{staticClass:"yuyue",on:{click:function(e){return t.$router.push("/teacher?id+${list.id}")}}},[t._v("查看详情")])],1),t._m(0),t._m(1),a("van-button",{staticClass:"zb_btn",on:{click:t.yuyue}},[t._v("立即预约")])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"zb_optitle"},[a("span"),a("p",[t._v("选择时间 "),a("span",[t._v(" (北京时间)")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"zb_empty"},[a("img",{attrs:{src:"https://wap.365msmk.com/img/empty.0d284c2e.png",alt:""}}),a("p",[t._v("暂无信息")])])}],c=a("9870"),i={name:"demo",props:[],components:{},data(){return{list:{}}},computed:{},watch:{},methods:{yuyue(){this.$$toast("请选择预约时间")}},beforeCreate(){},created(){},async mounted(){let{data:t}=await Object(c["g"])(this.$route.query.id);this.list=t.data.teacher,console.log(this.list)}},r=i,o=(a("4bee"),a("2c07")),u=Object(o["a"])(r,s,n,!1,null,"36e7e773",null);e["default"]=u.exports},ccf2:function(t,e,a){}}]);
//# sourceMappingURL=chunk-504fde03.bbd341ed.js.map