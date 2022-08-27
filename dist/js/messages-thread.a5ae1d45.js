"use strict";(self["webpackChunkwebsite"]=self["webpackChunkwebsite"]||[]).push([[640],{61747:function(t,s,e){e.d(s,{Io:function(){return o},MW:function(){return n},bG:function(){return d},gK:function(){return i},vW:function(){return r}});var a=e(76051);const r=async function(){const t=await a.ZP.get("/messages");return t.data},i=async function(t,s,e,r){const i=await a.ZP.post("/messages",{message:t,location_id:s,booking_inputs:e,has_flexible_dates:r});return i.data},n=async function(t,s){const e=await a.ZP.post("/messages/compose-from-booking",{message:s,booking_id:t});return e.data},o=async function(t){const s=await a.ZP.get(`/messages/${t}`);return s.data},d=async function(t,s){const e=await a.ZP.post(`messages/${t}`,{message:s});return e.data}},25934:function(t,s,e){var a;e.d(s,{Z:function(){return h}});var r=new Uint8Array(16);function i(){if(!a&&(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!a))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(r)}var n=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function o(t){return"string"===typeof t&&n.test(t)}for(var d=o,c=[],u=0;u<256;++u)c.push((u+256).toString(16).substr(1));function l(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(c[t[s+0]]+c[t[s+1]]+c[t[s+2]]+c[t[s+3]]+"-"+c[t[s+4]]+c[t[s+5]]+"-"+c[t[s+6]]+c[t[s+7]]+"-"+c[t[s+8]]+c[t[s+9]]+"-"+c[t[s+10]]+c[t[s+11]]+c[t[s+12]]+c[t[s+13]]+c[t[s+14]]+c[t[s+15]]).toLowerCase();if(!d(e))throw TypeError("Stringified UUID is invalid");return e}var p=l;function g(t,s,e){t=t||{};var a=t.random||(t.rng||i)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,s){e=e||0;for(var r=0;r<16;++r)s[e+r]=a[r];return s}return p(a)}var h=g},38630:function(t,s,e){e.r(s),e.d(s,{default:function(){return M}});var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("v-container",{staticClass:"ma-0 pa-0",staticStyle:{height:"100%","background-color":"#f8f8f8"}},[e("div",{staticClass:"sticky-top",staticStyle:{"z-index":"2"}},[e("v-card",{staticStyle:{"border-bottom":"1px solid #d2d2d2 !important","border-radius":"0"},attrs:{height:"70px",flat:""}},[t.loading?t._e():e("v-card-text",[e("p",{staticClass:"subtitle-1 black--text py-0 my-0 font-weight-bold"},[t._v(" "+t._s(t.getThreadUser()?t.getThreadUser().name:"")+" ")]),e("p",{staticClass:"caption"},[t._v("Response Time: 1 day")])]),e("div",{staticClass:"pa-4"},[t.loading?e("v-progress-circular",{staticClass:"mx-auto",attrs:{indeterminate:"",size:"32",color:"success",loading:!0}}):t._e()],1)],1)],1),e("v-row",{staticClass:"pb-4",attrs:{id:"messages-container",align:"end"}},[t.loading?e("div",{staticClass:"d-flex justify-center my-2 pa-12 ma-0",staticStyle:{width:"100%"}},[e("v-progress-circular",{staticClass:"mx-auto",attrs:{indeterminate:"",size:"56",color:"success",loading:!0}})],1):t._e(),e("v-col",[e("v-container",{staticStyle:{"max-width":"700px"}},[t._l(t.sortedMessages,(function(s,a){return e("div",{key:s.id+"_"+t.uuid(),class:["d-flex flex-row align-end my-2",s.user_id==t.currentUser.id?"justify-end":null]},[s.user_id==t.currentUser.id?e("v-card",{staticClass:"black--text mr-3 rounded-lg pa-2",style:t.sortedMessages[a+1]&&t.sortedMessages[a+1].user_id==s.user_id?"":"border-bottom-right-radius: 0px !important",attrs:{"max-width":"500px","min-width":"100px",color:"#4caf50CC",flat:""}},[e("v-card-text",{staticClass:"white--text subtitle-1"},[e("p",[e("span",{staticClass:"subtitle-1 font-weight-bold"},[t._v(t._s(t.currentUser.name))]),e("span",{staticClass:"mx-2"}),e("span",{staticClass:"caption"},[t._v(" "+t._s(t._f("timeFormat")(s.updated_at))+" "),t.isMessageReadByTheParticipant(s.updated_at)?e("v-icon",{staticClass:"mx-2",attrs:{color:"white",size:"20"}},[t._v(" mdi-check-all ")]):t._e()],1)]),t._v(" "+t._s(s.body)+" ")])],1):t._e(),t.sortedMessages[a+1]&&t.sortedMessages[a+1].user_id==s.user_id?e("user-avatar",{staticStyle:{opacity:"0"},attrs:{size:48}}):e("user-avatar",{attrs:{image:t.getParticipantById(s.user_id).avatar,size:48}}),s.user_id!=t.currentUser.id?e("v-card",{staticClass:"black--text ml-3 rounded-lg pa-2",style:t.sortedMessages[a+1]&&t.sortedMessages[a+1].user_id==s.user_id?"":"border-bottom-left-radius: 0px !important",attrs:{"max-width":"500px","min-width":"100px",color:"#2196f3CC",flat:""}},[e("v-card-text",{staticClass:"white--text subtitle-1"},[e("p",[e("span",{staticClass:"subtitle-1 font-weight-bold"},[t._v(t._s(t.getParticipantById(s.user_id).name))]),e("span",{staticClass:"mx-2"}),e("span",{staticClass:"caption"},[t._v(" "+t._s(t._f("timeFormat")(s.updated_at))+" ")])]),t._v(" "+t._s(s.body)+" ")])],1):t._e()],1)})),t._l(t.pendingMessages,(function(s){return e("div",{key:s.body+"_"+t.uuid(),class:["d-flex flex-row align-center my-2 justify-end"]},[e("v-progress-circular",{staticClass:"mx-4",attrs:{color:"success",size:"24",indeterminate:""}}),e("v-card",{staticClass:"black--text mr-3 rounded-xl pa-2",attrs:{"max-width":"500px","min-width":"100px",color:"#4caf5066",flat:""}},[e("v-card-text",{staticClass:"white--text subtitle-1"},[t._v(" "+t._s(s.body)+" ")])],1),e("user-avatar",{attrs:{image:t.currentUser.avatar,size:48}})],1)}))],2)],1)],1),e("div",{staticClass:"message-input-box",staticStyle:{"background-color":"#e4e4e455"}},[e("v-container",{staticClass:"ma-0 pa-0 mx-auto",staticStyle:{"max-width":"700px"}},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",[e("v-card",{staticStyle:{"background-color":"transparent"},attrs:{flat:""}},[e("v-card-text",[e("v-text-field",{staticStyle:{"background-color":"white"},attrs:{placeholder:"Type Something","append-icon":"mdi-send",outlined:"","hide-details":""},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.send.apply(null,arguments)},"click:append":t.send},model:{value:t.msg,callback:function(s){t.msg=s},expression:"msg"}})],1)],1)],1)],1)],1)],1)],1)],1)},r=[],i=e(61747),n=e(76942),o=e(25934),d=e(30381),c=e.n(d),u=e(80394),l={components:{UserAvatar:n.Z},props:{},data(){return{thread:{},pendingMessages:[],loading:!1,msg:null}},updated(){this.scrollToEnd()},async created(){await this.loadMessages(),u.c.$on("message-for-thread-"+this.thread.id,this.showNewMessage)},computed:{currentUser(){return this.$store.getters["User/user"]},sortedMessages(){const t=[...this.thread.messages||[]];return t.sort(((t,s)=>Number(new Date(t.updated_at))-Number(new Date(s.updated_at)))),t}},methods:{showNewMessage(t){let s=[...this.thread.messages||[]];s.push(t),this.getThreadParticipant().last_read=new Date,this.thread.messages=[...s]},isMessageReadByTheParticipant(t){return c()(t).isBefore(this.getThreadParticipant().last_read)},async loadMessages(){this.loading=!0;const t=await(0,i.Io)(this.$route.params.id);this.thread=t.data,this.loading=!1},scrollToEnd(){var t=this.$el.querySelector("#messages-container"),s=t.scrollHeight;t.scrollTop=s},getParticipantById(t){for(let s of this.thread.participants)if(s.user_id==t)return s.user;return null},async send(){if(!this.msg||""==this.msg.trim())return!1;const t={user_id:this.currentUser.id,body:this.msg};this.msg=null,this.pendingMessages.push(t);const s=await(0,i.bG)(this.thread.id,t.body),e=Object.assign([],this.thread.messages);e.push(s.data),this.thread.messages=e,this.pendingMessages.splice(this.pendingMessages.indexOf(t),1)},getThreadUser(){return this.getThreadParticipant().user},getThreadParticipant(){return this.thread.participants?this.thread.participants[0].user_id==this.currentUser.id?this.thread.participants[1]:this.thread.participants[0]:{}},uuid(){return(0,o.Z)()}},watch:{"$route.params.id"(){this.thread={},this.loadMessages()}}},p=l,g=e(1001),h=e(43453),m=e.n(h),f=e(53237),y=e(37118),v=e(82102),_=e(99846),x=e(96428),b=e(90624),w=e(62877),C=e(55978),k=(0,g.Z)(p,a,r,!1,null,"67ad5e19",null),M=k.exports;m()(k,{VCard:f.Z,VCardText:y.ZB,VCol:v.Z,VContainer:_.Z,VIcon:x.Z,VProgressCircular:b.Z,VRow:w.Z,VTextField:C.Z})}}]);
//# sourceMappingURL=messages-thread.a5ae1d45.js.map