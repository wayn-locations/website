"use strict";(self["webpackChunkwebsite"]=self["webpackChunkwebsite"]||[]).push([[868],{2939:function(e,t,i){i.d(t,{DJ:function(){return l},Fq:function(){return n},K9:function(){return a},SB:function(){return c},i6:function(){return p}});var s=i(9726),r=i(62032),o=i(85495),a=[{field:"country",isRequired:!0},{field:"street",isRequired:!0},{field:"apt_suite",isRequired:!1},{field:"city",isRequired:!0},{field:"state",isRequired:!0},{field:"zip_code",isRequired:!0},{field:"lat",isRequired:!0},{field:"lng",isRequired:!0},{field:"kind",isRequired:!1},{field:"types",isRequired:!1},{field:"bedrooms_count",isRequired:!1},{field:"bathrooms_count",isRequired:!1},{field:"size",isRequired:!1},{field:"lot_size",isRequired:!1},{field:"main_floor_number",isRequired:!1},{field:"parking_capacity",isRequired:!1},{field:"motor_home_parking_types",isRequired:!1},{field:"amenities",isRequired:!1}],n=[{field:"styles",isRequired:!1},{field:"features",isRequired:!1},{field:"architectural_styles",isRequired:!1},{field:"bathrooms_types",isRequired:!1},{field:"ceiling_types",isRequired:!1},{field:"doors_types",isRequired:!1},{field:"exterior_types",isRequired:!1},{field:"floor_types",isRequired:!1},{field:"interior_types",isRequired:!1},{field:"kitchen_features",isRequired:!1},{field:"activities_types",isRequired:!1},{field:"walls_types",isRequired:!1},{field:"water_features",isRequired:!1},{field:"windows_types",isRequired:!1},{field:"description",isRequired:!0},{field:"title",isRequired:!0},{field:"images",isRequired:!0}],l=[{field:"crews_rules",isRequired:!1},{field:"allowed_activities",isRequired:!0},{field:"maximum_attendees_number",isRequired:!0},{field:"minimum_rental_hours",isRequired:!0},{field:"currency_code",isRequired:!0},{field:"pricing",isRequired:!0}],c=function(e,t){var i,o,a=0,n=0,l=(0,r.Z)(e);try{for(l.s();!(o=l.n()).done;){var c=o.value;if(i=c.field,0!=c.isRequired)switch((0,s.Z)(t[i])){case"undefined":console.log("false found undefined ",t[i]),++n;break;case"object":!t[i]||Array.isArray(t[i])&&!t[i].length?(++n,console.log("false found object ",t[i])):++a;break;case"string":t[i].length?++a:(++n,console.log("false found string",t[i]));break;default:++a;break}else++a}}catch(u){l.e(u)}finally{l.f()}var d=Math.floor(100*a/(a+n));return d},d=function(e){return c(a,e)},u=function(e){return c(n,e)},f=function(e){return c(l,e)},g=function(e,t){switch(e){case"BASICS":return d(t);case"SCENE":return u(t);case"GET_READY":return f(t);default:return 100}},p=function(e){var t,i=0,s=(0,r.Z)(o.b);try{for(s.s();!(t=s.n()).done;){var a=t.value;i+=Math.floor(g(a.id,e))}}catch(n){s.e(n)}finally{s.f()}return Math.floor(i/o.b.length)}},22992:function(e,t,i){i.r(t),i.d(t,{default:function(){return x}});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-container",[e.loading?i("v-card",{staticClass:"mx-auto text-center mt-12",attrs:{flat:""}},[i("v-progress-circular",{staticClass:"mx-auto",attrs:{indeterminate:"",size:"46",color:"success",loading:!0}})],1):e._e(),i("v-card",{staticClass:"pa-4 mx-auto",attrs:{disabled:e.loading,flat:"","max-width":"1080px"}},[i("v-row",{staticClass:"mt-16"},[i("v-col",[i("h3",{staticClass:"display-1"},[e._v("Moving on!")]),i("v-progress-linear",{staticClass:"my-6",attrs:{value:e.completionProgress,height:"10",color:"success",rounded:""}}),i("p",{staticClass:"caption"},[e._v(" Your listing is "+e._s(e.completionProgress)+"% done. Now let's get some details about your place so you can publish your listing. ")]),i("div",{staticClass:"my-8"},e._l(e.categories,(function(t,s){return i("div",{key:t.id+s},[i("div",[i("div",{staticClass:"d-flex flex-row"},[i("v-card",{staticClass:"rounded-circle text-center",style:"line-height: 50px;"+(e.calculateCategoryCompletion(t.id)<100?"":"border: 1px solid green"),attrs:{width:"50px",height:"50",outlined:""}},[e.calculateCategoryCompletion(t.id)<100?i("span",[e._v(" "+e._s(s+1)+" ")]):i("v-icon",{attrs:{color:"success"}},[e._v("mdi-check")])],1),i("div",{staticClass:"mx-4"},[i("span",{staticClass:"subtitle font-weight-bold"},[e._v(e._s(t.name))]),i("p",{staticClass:"caption"},[e._v(e._s(t.description))])]),i("div",{staticClass:"ml-auto"},["BASICS"==t.id||e.basicsCompletionProgress>=100?i("v-card",{attrs:{flat:"",route:"",to:{name:"Locations.Edit",params:{id:e.location.id,category:t.id.trim().toLowerCase(),step:t.steps[0].name.trim().toLowerCase()}}}},[e.calculateCategoryCompletion(t.id)<100?i("v-btn",{attrs:{color:"success",depressed:"",large:""}},[e._v(" continue ")]):i("v-btn",{attrs:{color:"success",depressed:"",large:"",text:""}},[e._v(" edit ")])],1):e._e()],1)],1),i("v-progress-linear",{staticClass:"my-6",attrs:{value:e.calculateCategoryCompletion(t.id),height:"5",color:"green",rounded:""}})],1),s+1<e.categories.length?i("v-divider",{staticClass:"mt-2 mb-4"}):e._e()],1)})),0)],1),i("v-col",{staticClass:"pa-8",attrs:{cols:"6"}},[i("div",{staticClass:"mx-auto",staticStyle:{"max-width":"400px"}},[i("v-img",{attrs:{src:e.progressImage}})],1)])],1),i("v-divider"),i("v-row",{staticClass:"mt-2"},[i("v-col",[i("v-btn",{attrs:{color:"primary",outlined:"",large:"",route:"",to:{name:"Locations.Mine"}}},[i("span",[e._v(" go to listing ")])])],1)],1)],1)],1)],1)},r=[],o=i(16198),a=(i(73210),i(35666),i(80994)),n=i(85495),l=i(2939),c={data:function(){return{categories:n.b,loading:!1,location:{}}},computed:{completionProgress:function(){return(0,l.i6)(this.location)},basicsCompletionProgress:function(){return(0,l.SB)(l.K9,this.location)},sceneCompletionProgress:function(){return(0,l.SB)(l.Fq,this.location)},getReadyCompletionProgress:function(){return(0,l.SB)(l.DJ,this.location)},progressImage:function(){return this.basicsCompletionProgress<100?"https://giggster.com/images/become-host-steps/step0.png":this.sceneCompletionProgress<100?"https://giggster.com/images/become-host-steps/step1.png":this.getReadyCompletionProgress<100?"https://giggster.com/images/become-host-steps/step2.png":"https://giggster.com/images/become-host-steps/step3.png"}},created:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadLocation();case 2:case"end":return t.stop()}}),t)})))()},methods:{calculateCategoryCompletion:function(e){switch(e){case"BASICS":return this.basicsCompletionProgress;case"SCENE":return this.sceneCompletionProgress;case"GET_READY":return this.getReadyCompletionProgress;default:return 100}},loadLocation:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,(0,a._C)(e.$route.params.id.trim());case 3:i=t.sent,e.location=i.data,e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()}},watch:{}},d=c,u=i(1001),f=i(43453),g=i.n(f),p=i(63150),m=i(53237),h=i(82102),v=i(99846),C=i(11418),R=i(96428),_=i(97047),q=i(90624),y=i(57003),b=i(62877),w=(0,u.Z)(d,s,r,!1,null,null,null),x=w.exports;g()(w,{VBtn:p.Z,VCard:m.Z,VCol:h.Z,VContainer:v.Z,VDivider:C.Z,VIcon:R.Z,VImg:_.Z,VProgressCircular:q.Z,VProgressLinear:y.Z,VRow:b.Z})}}]);
//# sourceMappingURL=view-location-progress-legacy.cc879daf.js.map