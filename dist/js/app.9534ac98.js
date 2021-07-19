(function(e){function t(t){for(var a,n,i=t[0],c=t[1],l=t[2],p=0,d=[];p<i.length;p++)n=i[p],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(a=!1)}a&&(s.splice(t--,1),e=n(n.s=r[0]))}return e}var a={},o={app:0},s=[];function n(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=a,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0177":function(e,t,r){"use strict";r("3343")},"054b":function(e,t,r){},"1ad3":function(e,t,r){},2195:function(e,t,r){},"2b63":function(e,t,r){},"31b5":function(e,t,r){},3200:function(e,t,r){"use strict";r("4abd")},3343:function(e,t,r){},4042:function(e,t,r){"use strict";r("da96")},4314:function(e,t,r){"use strict";r("31b5")},"4abd":function(e,t,r){},"4b4f":function(e,t,r){"use strict";r("d237")},5587:function(e,t,r){},"56a8":function(e,t,r){"use strict";r("2b63")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],n={name:"App",components:{}},i=n,c=r("2877"),l=Object(c["a"])(i,o,s,!1,null,null,null),u=l.exports,p=r("bc3a"),d=r.n(p),m=r("1da1"),k=(r("96cf"),r("d81d"),r("99af"),r("4de4"),r("2f62"));a["a"].use(k["a"]);var g=new k["a"].Store({state:{baseURL:"http://linker-api-deploy.herokuapp.com/api/",userFrame:{userName:"",userCategories:[],userOneCategoryList:[],isLinks:null,currentId:localStorage.getItem("currentId")},userToken:localStorage.getItem("token"),currentCategory:""},actions:{getUserCategories:function(e){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function r(){var a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d.a.get("".concat(t.getters.baseURL,"user/"),{headers:{Authorization:"Bearer "+t.getters.userToken}});case 3:a=r.sent,o=a.data.data.categories.map((function(e){return e})),e.commit("updateCategories",o),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),console.log(r.t0.data.data.code);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},getUserName:function(e){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function r(){var a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d.a.get("".concat(t.getters.baseURL,"user/"),{headers:{Authorization:"Bearer "+t.getters.userToken}});case 3:a=r.sent,console.log("get username: "+a.data.data.username),o=a.data.data.username,e.commit("updateUserName",o),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](0),console.log(r.t0.data.data.code);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()},getUserOneCategoryList:function(e,t){var r=this;return Object(m["a"])(regeneratorRuntime.mark((function a(){var o,s,n,i,c,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,o=t._id,localStorage.setItem("currentId",t._id),a.next=5,d.a.get("".concat(r.getters.baseURL,"category/").concat(o),{headers:{Authorization:"Bearer "+r.getters.userToken}});case 5:return s=a.sent,n=null,0!=s.data.data.links.length?(n=s.data.data.links,r.state.isLinks=!0):0==s.data.data.links.length&&(n="Have no links",r.state.isLinks=!1),a.next=10,d.a.get("".concat(r.getters.baseURL,"user/"),{headers:{Authorization:"Bearer "+r.getters.userToken}});case 10:i=a.sent,c=i.data.data.categories.map((function(e){return e})),l=c.filter((function(e){return e._id==t._id})),e.commit("updateCurrentCategory",l[0].title),e.commit("updateUserOneCategoryList",n),a.next=20;break;case 17:a.prev=17,a.t0=a["catch"](0),console.log(a.t0.response.data.code);case 20:case"end":return a.stop()}}),a,null,[[0,17]])})))()},getAllBookmarks:function(e){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function r(){var a,o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d.a.get("".concat(t.getters.baseURL,"bookmark/"),{headers:{Authorization:"Bearer "+t.getters.userToken}});case 3:a=r.sent,console.log(a.data.data),t.state.isLinks=!0,o=null,o=a.data.data,s="All bookmarks",e.commit("updateCurrentCategory",s),e.commit("updateUserOneCategoryList",o),r.next=16;break;case 13:r.prev=13,r.t0=r["catch"](0),console.log(r.t0.response.data.code);case 16:case"end":return r.stop()}}),r,null,[[0,13]])})))()},createCategory:function(e,t){var r=this;return Object(m["a"])(regeneratorRuntime.mark((function a(){var o,s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,o={title:t.categoryTitle},a.next=4,d.a.post("".concat(r.$store.getters.baseURL,"category/"),o,{headers:{Authorization:"Bearer "+r.$store.getters.userToken}});case 4:return a.next=6,d.a.get("".concat(r.getters.baseURL,"user/"),{headers:{Authorization:"Bearer "+r.getters.userToken}});case 6:s=a.sent,n=s.data.data.categories.map((function(e){return e})),e.commit("updateCategories",n),a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](0),console.log(a.t0.response.data.code);case 14:r.newShelf.isNewShelf=!r.newShelf.isNewShelf;case 15:case"end":return a.stop()}}),a,null,[[0,11]])})))()}},mutations:{updateCategories:function(e,t){e.userFrame.userCategories=t},updateUserName:function(e,t){e.userFrame.userName=t},updateCurrentId:function(e,t){console.log(t+" from mutation"),e.userFrame.currentId=t,console.log(e.userFrame.currentId+" after setting")},updateUserOneCategoryList:function(e,t){e.userFrame.userOneCategoryList=t},updateCurrentCategory:function(e,t){e.currentCategory=t}},getters:{baseURL:function(e){return e.baseURL},currentCategory:function(e){return e.currentCategory},userToken:function(e){return e.userToken},userCategories:function(e){return e.userFrame.userCategories},userName:function(e){return e.userFrame.userName},userOneCategoryList:function(e){return e.userFrame.userOneCategoryList},activeCategoryId:function(e){return console.log(e.userFrame.currentId),e.userFrame.currentId}}}),v=r("00e7"),_=r.n(v),b=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-block"},[r("div",{staticClass:"login-block__form"},[r("router-link",{attrs:{to:"/"}},[e._v(" Back ")]),r("div",{staticClass:"login-block__form__title-block"},[r("h1",{staticClass:"header-1"},[e._v(e._s(e.msg))])]),r("div",{staticClass:"login-block__form__inputs-block"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.userEmail,expression:"userEmail"}],staticClass:"paragraph-primary",attrs:{type:"text",placeholder:"email"},domProps:{value:e.userEmail},on:{input:function(t){t.target.composing||(e.userEmail=t.target.value)}}}),r("div",{staticClass:"signup-block__form__inputs-block__error-notice",class:{"signup-block__form__inputs-block__error-ntc__activated":e.invalidEmailError}},[r("p",{staticClass:"paragraph-secondary"},[e._v("Format of email is invalid.")])]),r("div",{staticClass:"signup-block__form__inputs-block__error-notice",class:{"signup-block__form__inputs-block__error-ntc__activated":e.userNotFoundError}},[r("router-link",{staticClass:"paragraph-secondary",attrs:{to:"/signup"}},[e._v("User not found. Have no account? Register here")])],1),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userPassword,expression:"userPassword"}],staticClass:"paragraph-primary",attrs:{type:"password",placeholder:"password"},domProps:{value:e.userPassword},on:{input:function(t){t.target.composing||(e.userPassword=t.target.value)}}}),r("div",{staticClass:"signup-block__form__inputs-block__error-notice",class:{"signup-block__form__inputs-block__error-ntc__activated":e.invalidPassword}},[r("p",{staticClass:"paragraph-secondary"},[e._v("Format of password is invalid.")])]),r("div",{staticClass:"signup-block__form__inputs-block__error-notice",class:{"signup-block__form__inputs-block__error-ntc__activated":e.incorrectPassword}},[r("p",{staticClass:"paragraph-secondary"},[e._v("Password is wrong, try again.")])]),r("div",{staticClass:"signup-block__form__inputs-block__error-notice",class:{"signup-block__form__inputs-block__error-ntc__activated":e.invalidEmailPasswordError}},[r("p",{staticClass:"paragraph-secondary"},[e._v(" Format of email and password is invalid. Pull yourself together! ")])])]),r("div",{staticClass:"login-block__form__submit-block"},[r("input",{staticClass:"paragraph-primary",attrs:{type:"submit",value:"Login"},on:{click:e.loginClick}})])],1),r("div",{staticClass:"login-block__links"},[r("router-link",{staticClass:"paragraph-secondary",attrs:{to:"/signup"}},[e._v("Have no account? Register here")])],1)])},h=[],w={data:function(){return{msg:"Welcome back to Linkbase",userEmail:"",userPassword:"",userToken:"",errorModel:[],invalidEmailError:"",invalidPassword:"",incorrectPassword:"",invalidEmailPasswordError:"",userNotFoundError:"",status:null}},methods:{loginClick:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={email:e.userEmail,password:e.userPassword},t.prev=1,console.log("From try"),t.next=5,d.a.post("".concat(e.$store.getters.baseURL,"user/login"),r);case 5:e.status=t.sent,e.invalidEmailError=!1,e.invalidPassword=!1,e.incorrectPassword=!1,e.userNotFoundError=!1,localStorage.setItem("token",e.status.data.token),console.log(e.$store.getters.userToken),console.log(e.status),e.$router.push("home"),t.next=40;break;case 16:t.prev=16,t.t0=t["catch"](1),console.log(t.t0.response.data.code),e.errorModel=t.t0.response.data.code,t.t1=e.errorModel,t.next="invalid_email"===t.t1?23:"invalid_password"===t.t1?26:"incorrect_password"===t.t1?29:"invalid_email_and_password"===t.t1?32:"user_not_found"===t.t1?35:38;break;case 23:return console.log("Invalid format of email"),e.invalidEmailError=!e.invalidEmailError,t.abrupt("break",40);case 26:return console.log("Invalid format of the pw, min 6 characters required"),e.invalidPassword=!e.invalidPassword,t.abrupt("break",40);case 29:return console.log("Incorrect password for user account"),e.incorrectPassword=!e.incorrectPassword,t.abrupt("break",40);case 32:return console.log("Combination of two above codes"),e.invalidEmailPasswordError=!e.invalidEmailPasswordError,t.abrupt("break",40);case 35:return console.log("User was not found in database"),e.userNotFoundError=!e.userNotFoundError,t.abrupt("break",40);case 38:return console.log("Unknown error"),t.abrupt("break",40);case 40:case"end":return t.stop()}}),t,null,[[1,16]])})))()}}},C=w,y=(r("972c"),Object(c["a"])(C,f,h,!1,null,"68349955",null)),E=y.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"signup-block"},[r("div",{staticClass:"signup-block__form"},[r("router-link",{attrs:{to:"/"}},[e._v(" Back ")]),r("div",{staticClass:"signup-block__form__title-block"},[r("h1",{staticClass:"header-1"},[e._v(e._s(e.msg))])]),r("div",{staticClass:"signup-block__form__inputs-block"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.userEmail,expression:"userEmail"}],staticClass:"paragraph-primary",attrs:{type:"text",placeholder:"email"},domProps:{value:e.userEmail},on:{input:function(t){t.target.composing||(e.userEmail=t.target.value)}}}),r("div",{staticClass:"signup-block__form__inputs-block__error-notice",class:{"signup-block__form__inputs-block__error-ntc__activated":e.invalidEmailError}},[r("p",{staticClass:"paragraph-secondary"},[e._v("Format of email is invalid.")])]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"paragraph-primary",attrs:{type:"text",placeholder:"user name"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),r("div",{staticClass:"signup-block__form__inputs-block__error-notice",class:{"signup-block__form__inputs-block__error-ntc__activated":e.userExistsError}},[r("router-link",{staticClass:"paragraph-secondary",attrs:{to:"/login"}},[e._v("The user is already exist. If you have an account, login here")])],1),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userPassword,expression:"userPassword"}],staticClass:"paragraph-primary",attrs:{type:"password",placeholder:"password"},domProps:{value:e.userPassword},on:{input:function(t){t.target.composing||(e.userPassword=t.target.value)}}}),r("div",{staticClass:"signup-block__form__inputs-block__error-notice",class:{"signup-block__form__inputs-block__error-ntc__activated":e.invalidPasswordError}},[r("p",{staticClass:"paragraph-secondary"},[e._v("Format of password is invalid.")])]),r("div",{staticClass:"signup-block__form__inputs-block__error-notice",class:{"signup-block__form__inputs-block__error-ntc__activated":e.invalidEmailPasswordError}},[r("p",{staticClass:"paragraph-secondary"},[e._v(" Formats of email and password are invalid. ")])])]),r("div",{staticClass:"signup-block__form__submit-block"},[r("input",{staticClass:"paragraph-primary",attrs:{type:"submit",value:"Sign up"},on:{click:[e.loginClick,function(t){return t.stopPropagation(),t.preventDefault(),e.submit()}]}})])],1),r("div",{staticClass:"signup-block__links"},[r("router-link",{staticClass:"paragraph-secondary",attrs:{to:"/login"}},[e._v("Have an account? Login here")])],1)])},B=[],S={data:function(){return{msg:"Welcome to Linkbase",userEmail:"",userName:"",userPassword:"",invalidEmailError:"",invalidPasswordError:"",invalidEmailPasswordError:"",userExistsError:""}},methods:{loginClick:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={username:e.userName,email:e.userEmail,password:e.userPassword},t.prev=1,console.log("From try"),t.next=5,d.a.post("".concat(e.$store.getters.baseURL,"user/signup"),r);case 5:return a=t.sent,t.next=8,d.a.post("".concat(e.$store.getters.baseURL,"user/login"),r);case 8:o=t.sent,e.invalidEmailError=!1,e.invalidPasswordError=!1,e.invalidEmailPasswordError=!1,e.userExistsError=!1,console.log(a.data),console.log(o.data),localStorage.setItem("token",e.status.data.token),e.$router.push("/home"),t.next=39;break;case 19:t.prev=19,t.t0=t["catch"](1),null!=t.t0.response.data.errors?(console.log(t.t0.response.status),e.errorModel=t.t0.response.data.errors):e.errorModel=[t.t0.response.data],t.t1=e.errorModel[0].msg||e.errorModel[0].message,t.next="invalid_email"===t.t1?25:"invalid_password"===t.t1?28:"invalid_email_and_password"===t.t1?31:"user_exists"===t.t1?34:37;break;case 25:return console.log("Invalid format of email"),e.invalidEmailError=!0,t.abrupt("break",39);case 28:return console.log("Invalid format of the pw, min 6 characters required"),e.invalidPasswordError=!0,t.abrupt("break",39);case 31:return console.log("Combination of two above codes"),e.invalidEmailPasswordError=!0,t.abrupt("break",39);case 34:return console.log("User already exists in database"),e.userExistsError=!0,t.abrupt("break",39);case 37:return console.log("Unknown error"),t.abrupt("break",39);case 39:case"end":return t.stop()}}),t,null,[[1,19]])})))()}}},P=S,N=(r("8af6"),Object(c["a"])(P,x,B,!1,null,"71d9fe20",null)),L=N.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"promo-block"},[r("div",{staticClass:"promo-container"},[r("div",{staticClass:"navigaion-bar-block"},[e._m(0),r("div",{staticClass:"navigaion-bar-block__login-and-signup"},[r("div",{staticClass:"paragraph-primary"},[r("router-link",{attrs:{to:"login"}},[e._v("Sign In")])],1),r("div",{staticClass:"paragraph-primary"},[r("router-link",{attrs:{to:"signup"}},[e._v("Sign up")])],1)])]),e._m(1)])])},R=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"navigaion-bar-block__logo"},[r("p",{staticClass:"paragraph-primary"},[e._v("Linkbase")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"promo-block__main"},[r("p",{staticClass:"promo-text"},[e._v("Linkbase. Bookmark Storage")])])}],T=(r("d2b8"),{}),$=Object(c["a"])(T,O,R,!1,null,null,null),I=$.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home-block"},[r("div",{staticClass:"home-block-container"},[r("navigation-bar",{attrs:{username:e.userName}}),r("category-block",{attrs:{categories:e.userCategories}}),r("bookmarks-block",{attrs:{bookmarks:e.userOneCategoryList}})],1)])},U=[],H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bookmarks-block"},[r("block-heading",{attrs:{blcHeader:e.currentCategory}}),r("bookmarks-list",{attrs:{bookmarks:e.bookmarks,notice:this.$store.state.isLinks}})],1)},F=[],A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"button-block"},[r("p",{staticClass:"header-2"},[e._v(e._s(e.blcHeader))])]),r("hr")])},M=[],D={props:["blcHeader"]},z=D,q=(r("4b4f"),Object(c["a"])(z,A,M,!1,null,null,null)),Y=q.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.notice?r("div",[r("div",{class:{"popup-screen":e.isEditBookmark}},[r("div",{class:{"popup-block":e.isEditBookmark,empty:!e.isEditBookmark}},[r("div",{staticClass:"popup-block__header-line"},[r("p",{staticClass:"header-2"},[e._v("Change shelf")]),r("div",{staticClass:"popup-close",on:{click:e.ToggleEditBookmarkPopup}},[e._v("Cancel")])]),r("p",{staticClass:"paragraph-secondary"},[e._v("Change placement for bookmark")]),r("div",{staticClass:"change-category-block"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"selected-block",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?r:r[0]}}},e._l(this.$store.getters.userCategories,(function(t,a){return r("option",{key:a,staticClass:"option-block",domProps:{value:{title:t.title,id:t._id}}},[r("p",{staticClass:"paragraph-secondary"},[e._v(e._s(t.title))])])})),0),r("button",{staticClass:"confirm-button",attrs:{type:"submit"},on:{click:e.changeBookmarkPlacing}},[e._v(" Edit ")])])])]),e._l(e.bookmarks,(function(t,a){return r("div",{key:a},[r("bookmarks-item",{attrs:{bookmarkLogo:t.favicon[0],bookmarkHeader:t.title,bookmarkDescription:t.description,bookmarkDate:e.bookmarkDateItem(t),bookmarkLink:t.link,bookmark:t},on:{"button-trigger":function(r){return e.ToggleEditBookmarkPopup(t)}}})],1)}))],2):r("div",[e._v("This is where your bookmarks will be located.")])},J=[],W=(r("d3b7"),r("25f0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bookmark-block"},[r("div",{staticClass:"bookmark-block__logo-section"},[r("a",{attrs:{href:""+e.bookmarkLink,target:"_blank"}},[r("img",{staticClass:"bookmark-block__logo-section__logo",attrs:{src:""+e.bookmarkLogo,alt:""}})])]),r("div",{staticClass:"bookmark-block__informartion-section"},[r("div",{staticClass:"bookmark-block__informartion-section__primary"},[r("a",{attrs:{href:""+e.bookmarkLink,target:"_blank"}},[r("p",{staticClass:"header-2"},[e._v(e._s(e.bookmarkHeader))])]),r("p",{staticClass:"paragraph-primary"},[e._v(e._s(e.bookmarkDescription))])]),r("div",{staticClass:"bookmark-block__informartion-section__secondary"},[r("a",{staticClass:"paragraph-secondary",attrs:{href:""+e.bookmarkLink,target:"_blank"}},[e._v(e._s(e.bookmarkLink))]),r("p",{staticClass:"paragraph-secondary"},[e._v(e._s(e.bookmarkDate))]),r("form",[r("div",{staticClass:"confirm-button-edit",on:{click:function(t){return e.$emit("button-trigger")}}},[r("p",{staticClass:"paragraph-secondary"},[e._v("change shelf")])])]),r("form",[r("button",{staticClass:"confirm-button-delete",attrs:{type:"submit"},on:{click:function(t){return e.deleteBookmark(e.bookmark)}}},[r("p",{staticClass:"paragraph-secondary"},[e._v("delete")])])])])])])}),V=[],K={props:["bookmarkLogo","bookmarkHeader","bookmarkDescription","bookmarkLink","bookmarkDate","isPopup","bookmark"],data:function(){return{bookmarkReq:null,currentBookmarkId:""}},methods:{deleteBookmark:function(e){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.currentBookmarkId=e._id,r.next=4,d.a.delete("".concat(t.$store.getters.baseURL,"bookmark/").concat(t.currentBookmarkId),{headers:{Authorization:"Bearer "+t.$store.getters.userToken}});case 4:t.bookmarkReq=r.sent,t.isEditBookmark=!t.isEditBookmark,r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),console.log(r.t0.data.data.code);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()}}},Q=K,X=(r("3200"),Object(c["a"])(Q,W,V,!1,null,"770e21c6",null)),Z=X.exports,ee={components:{BookmarksItem:Z},props:["bookmarks","notice"],data:function(){return{bookmark:null,isEditBookmark:!1,editBookmarkName:"",currentBookmarkId:"",selected:null}},methods:{ToggleEditBookmarkPopup:function(e){this.currentBookmarkId=e._id,this.isEditBookmark=!this.isEditBookmark},bookmarkDateItem:function(e){var t=new Date(e.date),r="";return t.getMonth()<10&&t.getDate()<10?r="0"+t.getDate().toString()+".0"+t.getMonth().toString()+"."+t.getFullYear().toString()+" at "+t.getHours().toString()+":"+t.getMinutes().toString():t.getDate()<10?r="0"+t.getDate().toString()+"."+t.getMonth().toString()+"."+t.getFullYear().toString()+" at "+t.getHours().toString()+":"+t.getMinutes().toString():t.getMonth()<10&&(r=t.getDate().toString()+".0"+(t.getMonth()+1).toString()+"."+t.getFullYear().toString()+" at "+t.getHours().toString()+":"+t.getMinutes().toString()),r},changeBookmarkPlacing:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r={category:e.selected.id},console.log(r),console.log("bookmark id: "+e.currentBookmarkId),t.next=6,d.a.put("".concat(e.$store.getters.baseURL,"bookmark/").concat(e.currentBookmarkId),r,{headers:{Authorization:"Bearer "+e.$store.getters.userToken}});case 6:e.bookmark=t.sent,e.isEditBookmark=!e.isEditBookmark,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0.response.data.code);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}},te=ee,re=(r("ba4a"),Object(c["a"])(te,G,J,!1,null,null,null)),ae=re.exports,oe={components:{BookmarksList:ae,BlockHeading:Y},props:["bookmarks"],computed:{currentCategory:function(){return this.$store.getters.currentCategory?this.$store.getters.currentCategory:"Bookmarks"}}},se=oe,ne=(r("c1c7"),Object(c["a"])(se,H,F,!1,null,null,null)),ie=ne.exports,ce=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"category-block"},[r("block-heading",{attrs:{blcHeader:e.categoryInf.categoryHeader}}),r("category-list",{attrs:{categories:e.categories}})],1)},le=[],ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.categories?r("div",[r("div",{class:{"popup-screen":e.isEditShelf}},[r("form",{class:{"popup-block":e.isEditShelf,empty:!e.isEditShelf}},[r("div",{staticClass:"popup-block__header-line"},[r("p",{staticClass:"header-2"},[e._v("Edit shelf")]),r("div",{staticClass:"popup-close",on:{click:e.ToggleEditShelfPopup}},[e._v("Cancel")])]),r("div",{staticClass:"input-block"},[r("p",[e._v("New title")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.editShelfName,expression:"editShelfName"}],staticClass:"input-text-block",attrs:{type:"text",placeholder:"New title"},domProps:{value:e.editShelfName},on:{input:function(t){t.target.composing||(e.editShelfName=t.target.value)}}}),r("button",{staticClass:"confirm-button",attrs:{type:"submit"},on:{click:e.changeCategoryName}},[r("p",{staticClass:"paragraph-secondary"},[e._v("edit")])]),r("button",{staticClass:"delete-category",attrs:{type:"submit"},on:{click:e.deleteCategory}},[r("p",{staticClass:"paragraph-secondary"},[e._v("delete category")])])])])]),r("div",{staticClass:"category-list"},[r("all-bookmarks"),e._l(e.categories,(function(t,a){return r("div",{key:a},[r("category-item",{staticClass:"delete-category",attrs:{nameLink:t.title,category:t},on:{"button-trigger":function(r){return e.changeCurrentCategory(t)}}})],1)}))],2)]):r("div",[e._v("This is where your shelfs will be located.")])},pe=[],de=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"category-wrapper"},[r("div",{staticClass:"category-plate"},[r("p",{staticClass:"paragraph-primary",on:{click:function(t){return e.getUserOneCategoryList(e.category)}}},[e._v(" "+e._s(e.nameLink)+" ")]),r("div",{staticClass:"category-options__btn"},[r("div",{staticClass:"category-options__btn__points",on:{click:function(t){return e.$emit("button-trigger")}}},[r("div",{staticClass:"category-options__btn__points__point"}),r("div",{staticClass:"category-options__btn__points__point"}),r("div",{staticClass:"category-options__btn__points__point"})])])])])},me=[],ke={props:["nameLink","category"],methods:Object(k["b"])(["getUserOneCategoryList"]),data:function(){return{activeLink:!0}}},ge=ke,ve=(r("4314"),Object(c["a"])(ge,de,me,!1,null,"42eac7a0",null)),_e=ve.exports,be=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"category-plate",on:{click:e.getAllBookmarks}},[r("p",{staticClass:"paragraph-primary"},[e._v("All bookmarks")])])},fe=[],he={methods:Object(k["b"])(["getAllBookmarks"])},we=he,Ce=(r("fbc2"),Object(c["a"])(we,be,fe,!1,null,null,null)),ye=Ce.exports,Ee={data:function(){return{isEditShelf:!1,category:null,editShelfName:"",currentCategoryId:""}},components:{CategoryItem:_e,AllBookmarks:ye},props:["categories"],methods:{ToggleEditShelfPopup:function(){this.isEditShelf=!this.isEditShelf},changeCurrentCategory:function(e){this.isEditShelf=!this.isEditShelf,this.currentCategoryId=e._id},changeCategoryName:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r={title:e.editShelfName},console.log(r),t.next=5,d.a.put("".concat(e.$store.getters.baseURL,"category/").concat(e.currentCategoryId),r,{headers:{Authorization:"Bearer "+e.$store.getters.userToken}});case 5:e.category=t.sent,e.isEditShelf=!e.isEditShelf,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0.data.data.code);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},deleteCategory:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.delete("".concat(e.$store.getters.baseURL,"category/").concat(e.currentCategoryId),{headers:{Authorization:"Bearer "+e.$store.getters.userToken}});case 3:e.category=t.sent,e.isEditShelf=!e.isEditShelf,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0.data.data.code);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}},xe=Ee,Be=(r("56a8"),Object(c["a"])(xe,ue,pe,!1,null,null,null)),Se=Be.exports,Pe={data:function(){return{categoryInf:{categoryHeader:"Shelfs"}}},components:{CategoryList:Se,BlockHeading:Y},props:["categories"]},Ne=Pe,Le=(r("9820"),Object(c["a"])(Ne,ce,le,!1,null,null,null)),Oe=Le.exports,Re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{class:{"popup-screen":e.newShelf.isNewShelf}},[r("form",{class:{"popup-block":e.newShelf.isNewShelf,empty:!e.newShelf.isNewShelf}},[r("div",{staticClass:"popup-block__header-line"},[r("p",{staticClass:"header-2"},[e._v(e._s(e.newShelf.newShelfHeader))]),r("div",{staticClass:"popup-close",on:{click:e.ToggleNewShelfPopup}},[e._v("Cancel")])]),r("div",{staticClass:"input-block"},[r("p",{staticClass:"paragraph-secondary"},[e._v(e._s(e.newShelf.newShelfLabelMessage))]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newShelf.categoryTitle,expression:"newShelf.categoryTitle"}],staticClass:"input-text-block",attrs:{type:"text",placeholder:e.newShelf.newShelfInputPlaceHolder},domProps:{value:e.newShelf.categoryTitle},on:{input:function(t){t.target.composing||e.$set(e.newShelf,"categoryTitle",t.target.value)}}})]),r("button",{staticClass:"confirm-button",attrs:{type:"submit"},on:{click:e.createCategory}},[r("p",{staticClass:"paragraph-secondary"},[e._v("Add")])])])]),r("div",{class:{"popup-screen":e.newBookmark.isNewBookmark}},[r("form",{class:{"popup-block":e.newBookmark.isNewBookmark,empty:!e.newBookmark.isNewBookmark}},[r("div",{staticClass:"popup-block__header-line"},[r("p",{staticClass:"header-2"},[e._v(e._s(e.newBookmark.newBookmarkHeader))]),r("div",{staticClass:"popup-close",on:{click:e.ToggleNewBookmarkPopup}},[e._v("Cancel")])]),r("div",{staticClass:"input-block"},[r("p",[e._v(e._s(e.newBookmark.newBookmarkLabelMessage))]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"selected-block",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?r:r[0]}}},e._l(this.$store.getters.userCategories,(function(t,a){return r("option",{key:a,staticClass:"option-block",domProps:{value:{title:t.title,id:t._id}}},[r("p",{staticClass:"paragraph-secondary"},[e._v(e._s(t.title))])])})),0),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newBookmark.bookmarkTitle,expression:"newBookmark.bookmarkTitle"}],staticClass:"input-text-block",attrs:{type:"text",placeholder:e.newBookmark.newBookmarkInputPlaceHolder},domProps:{value:e.newBookmark.bookmarkTitle},on:{input:function(t){t.target.composing||e.$set(e.newBookmark,"bookmarkTitle",t.target.value)}}})]),r("button",{staticClass:"confirm-button",attrs:{type:"submit"},on:{click:e.createBookmark}},[r("p",{staticClass:"paragraph-secondary"},[e._v("Add")])])])]),r("div",{staticClass:"navigaion-bar-block"},[r("div",{staticClass:"navigaion-bar-block__logo-and-addings"},[r("p",{staticClass:"paragraph-primary"},[e._v("Linkbase")]),r("div",{staticClass:"paragraph-primary",on:{click:e.ToggleNewShelfPopup}},[e._v(" Add shelf ")]),r("div",{staticClass:"paragraph-primary",on:{click:e.ToggleNewBookmarkPopup}},[e._v(" Add bookmark ")])]),r("div",{staticClass:"navigaion-bar-block__username-and-exit",on:{click:e.closeHome}},[e._v(" "+e._s(e.username)+", exit ")])])])},Te=[],$e={props:["username"],data:function(){return{newShelf:{isNewShelf:!1,newShelfHeader:"New Shelf",newShelfLabelMessage:"Give a name of shelf",newShelfInputPlaceHolder:"Shelf Name",categoryTitle:""},newBookmark:{isNewBookmark:!1,newBookmarkHeader:"New Bookmark",newBookmarkLabelMessage:"Give a name of bookmark",newBookmarkInputPlaceHolder:"Link",bookmarkTitle:"",categoryId:""},user:null,selected:null}},methods:{ToggleNewShelfPopup:function(){this.newShelf.isNewShelf=!this.newShelf.isNewShelf},ToggleNewBookmarkPopup:function(){this.newBookmark.isNewBookmark=!this.newBookmark.isNewBookmark},createCategory:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r={title:e.newShelf.categoryTitle},t.next=4,d.a.post("".concat(e.$store.getters.baseURL,"category/"),r,{headers:{Authorization:"Bearer "+e.$store.getters.userToken}});case 4:console.log("after creating category"),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0.response.data.code);case 10:e.newShelf.isNewShelf=!e.newShelf.isNewShelf;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()},createBookmark:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log(e.newBookmark.bookmarkTitle),console.log(e.selected.id),r={link:e.newBookmark.bookmarkTitle,category:e.selected.id},t.next=6,d.a.post("".concat(e.$store.getters.baseURL,"bookmark/"),r,{headers:{Authorization:"Bearer "+e.$store.getters.userToken}});case 6:console.log("after creating bookmark"),e.newBookmark.isNewBookmark=!e.newBookmark.isNewBookmark,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0.response.data.code);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},closeHome:function(){this.$router.push("/")},chooseCategory:function(e){console.log("from chooseCategory"),this.newBookmark.categoryId=e._id,console.log(this.newBookmark.categoryId)}}},Ie=$e,je=(r("0177"),Object(c["a"])(Ie,Re,Te,!1,null,"422a10c7",null)),Ue=je.exports,He={computed:Object(k["c"])(["userCategories","userName","userOneCategoryList"]),methods:Object(k["b"])(["getUserCategories","getUserName","getUserOneCategoryList"]),mounted:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{e.getUserCategories(),e.getUserName(),e.getUserOneCategoryList()}catch(r){console.log(r.response.data)}case 1:case"end":return t.stop()}}),t)})))()},components:{categoryBlock:Oe,bookmarksBlock:ie,NavigationBar:Ue}},Fe=He,Ae=(r("4042"),Object(c["a"])(Fe,j,U,!1,null,null,null)),Me=Ae.exports,De=new b["a"]({mode:"history",routes:[{path:"/login",component:E},{path:"/signup",component:L},{path:"/",component:I},{path:"/home",component:Me}]});r("5ac6");a["a"].use(b["a"]),a["a"].use(k["a"]),a["a"].use(_.a),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(u)},router:De,Vuex:k["a"],axios:d.a,el:"#app",store:g}).$mount("#app")},"5ac6":function(e,t,r){},6169:function(e,t,r){},"7c13":function(e,t,r){},"8af6":function(e,t,r){"use strict";r("7c13")},"972c":function(e,t,r){"use strict";r("b249")},9820:function(e,t,r){"use strict";r("5587")},b249:function(e,t,r){},ba4a:function(e,t,r){"use strict";r("6169")},c1c7:function(e,t,r){"use strict";r("1ad3")},d237:function(e,t,r){},d2b8:function(e,t,r){"use strict";r("2195")},da96:function(e,t,r){},fbc2:function(e,t,r){"use strict";r("054b")}});
//# sourceMappingURL=app.9534ac98.js.map