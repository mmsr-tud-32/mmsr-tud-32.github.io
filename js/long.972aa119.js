(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["long"],{"1f97":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.displayImg?n("div",{staticClass:"text-center"},[n("img",{staticClass:"rounded",attrs:{alt:t.uuid,src:t.imgUrl}})]):n("div",[n("h1",[t._v(t._s(t.$t("make_a_choice")))]),n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-auto"},[n("button",{staticClass:"btn btn-primary btn-lg",on:{click:function(e){return t.$emit("submit",!1)}}},[t._v(t._s(t.$t("real")))])]),n("div",{staticClass:"col-auto"},[n("button",{staticClass:"btn btn-primary btn-lg",on:{click:function(e){return t.$emit("submit",!0)}}},[t._v(t._s(t.$t("fake")))])])])])},r=[],a=(n("c5f6"),n("d225")),o=n("b0b4"),u=n("308d"),c=n("6bb5"),s=n("4e2b"),f=n("9ab4"),l=n("60a3"),b=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(u["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.displayImg=!0,t}return Object(s["a"])(e,t),Object(o["a"])(e,[{key:"created",value:function(){this.uuidChanged()}},{key:"uuidChanged",value:function(){var t=this;this.displayImg=!0,setTimeout(function(){t.displayImg=!1},1e3*this.timeout)}},{key:"imgUrl",get:function(){return"".concat("https://127.0.0.1:8000/uploads/images","/").concat(this.image)}}]),e}(l["c"]);f["a"]([Object(l["b"])(String)],b.prototype,"uuid",void 0),f["a"]([Object(l["b"])(String)],b.prototype,"image",void 0),f["a"]([Object(l["b"])(Number)],b.prototype,"timeout",void 0),f["a"]([Object(l["d"])("uuid")],b.prototype,"uuidChanged",null),b=f["a"]([Object(l["a"])({})],b);var g=b,p=g,d=n("2877"),m=Object(d["a"])(p,i,r,!1,null,"6ac14704",null);e["a"]=m.exports},"5dbc":function(t,e,n){var i=n("d3f4"),r=n("8b97").set;t.exports=function(t,e,n){var a,o=e.constructor;return o!==n&&"function"==typeof o&&(a=o.prototype)!==n.prototype&&i(a)&&r&&r(t,a),t}},"8b97":function(t,e,n){var i=n("d3f4"),r=n("cb7c"),a=function(t,e){if(r(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:a}},"9f0c":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Question",{attrs:{uuid:t.uuid,timeout:t.timeout,image:t.imageFile},on:{submit:t.submit}})],1)},r=[],a=n("d225"),o=n("b0b4"),u=n("308d"),c=n("6bb5"),s=n("4e2b"),f=n("9ab4"),l=n("60a3"),b=n("1f97"),g=function(t){function e(){return Object(a["a"])(this,e),Object(u["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),Object(o["a"])(e,[{key:"submit",value:function(t){var e=this;this.$store.dispatch("answerLongQuestion",{uuid:this.uuid,fake:t}).then(function(){e.currentLongIndex>=e.longImages.length&&e.$router.push("/submit")})}},{key:"longImages",get:function(){return this.$store.getters.longImages}},{key:"timeout",get:function(){return this.$store.getters.timeoutLong}},{key:"uuid",get:function(){return this.image.uuid}},{key:"currentLongIndex",get:function(){return this.$store.getters.currentLongIndex}},{key:"imageFile",get:function(){return this.image.image}},{key:"image",get:function(){return this.longImages[this.currentLongIndex].image}}]),e}(l["c"]);g=f["a"]([Object(l["a"])({components:{Question:b["a"]}})],g);var p=g,d=p,m=n("2877"),h=Object(m["a"])(d,i,r,!1,null,"a61789f2",null);e["default"]=h.exports},aa77:function(t,e,n){var i=n("5ca1"),r=n("be13"),a=n("79e5"),o=n("fdef"),u="["+o+"]",c="​",s=RegExp("^"+u+u+"*"),f=RegExp(u+u+"*$"),l=function(t,e,n){var r={},u=a(function(){return!!o[t]()||c[t]()!=c}),s=r[t]=u?e(b):o[t];n&&(r[n]=s),i(i.P+i.F*u,"String",r)},b=l.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(s,"")),2&e&&(t=t.replace(f,"")),t};t.exports=l},c5f6:function(t,e,n){"use strict";var i=n("7726"),r=n("69a8"),a=n("2d95"),o=n("5dbc"),u=n("6a99"),c=n("79e5"),s=n("9093").f,f=n("11e9").f,l=n("86cc").f,b=n("aa77").trim,g="Number",p=i[g],d=p,m=p.prototype,h=a(n("2aeb")(m))==g,v="trim"in String.prototype,y=function(t){var e=u(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():b(e,3);var n,i,r,a=e.charCodeAt(0);if(43===a||45===a){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+e}for(var o,c=e.slice(2),s=0,f=c.length;s<f;s++)if(o=c.charCodeAt(s),o<48||o>r)return NaN;return parseInt(c,i)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof p&&(h?c(function(){m.valueOf.call(n)}):a(n)!=g)?o(new d(y(e)),n,p):y(e)};for(var _,I=n("9e1e")?s(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;I.length>O;O++)r(d,_=I[O])&&!r(p,_)&&l(p,_,f(d,_));p.prototype=m,m.constructor=p,n("2aba")(i,g,p)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=long.972aa119.js.map