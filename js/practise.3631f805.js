(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["practise"],{"1f97":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.displayImg?i("div",{staticClass:"text-center"},[i("img",{staticClass:"rounded img-fluid",attrs:{alt:t.uuid,src:t.imgUrl}})]):i("div",[i("h1",[t._v(t._s(t.$t("make_a_choice")))]),i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-auto"},[i("button",{staticClass:"btn btn-primary btn-lg",attrs:{disabled:t.disabled},on:{click:function(e){return t.$emit("submit",!1)}}},[t._v(t._s(t.$t("real")))])]),i("div",{staticClass:"col-auto"},[i("button",{staticClass:"btn btn-primary btn-lg",attrs:{disabled:t.disabled},on:{click:function(e){return t.$emit("submit",!0)}}},[t._v(t._s(t.$t("fake")))])])])])},r=[],a=(i("c5f6"),i("f559"),i("d225")),s=i("b0b4"),o=i("308d"),u=i("6bb5"),c=i("4e2b"),d=i("9ab4"),f=i("60a3"),b=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(o["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.displayImg=!0,t}return Object(c["a"])(e,t),Object(s["a"])(e,[{key:"created",value:function(){this.uuidChanged()}},{key:"uuidChanged",value:function(){var t=this;this.displayImg=!0,setTimeout(function(){t.displayImg=!1},1e3*this.timeout)}},{key:"imgUrl",get:function(){return this.image.startsWith("http")?this.image:"".concat("https://127.0.0.1:8000/uploads/images","/").concat(this.image)}}]),e}(f["c"]);d["a"]([Object(f["b"])(String)],b.prototype,"uuid",void 0),d["a"]([Object(f["b"])(String)],b.prototype,"image",void 0),d["a"]([Object(f["b"])(Number)],b.prototype,"timeout",void 0),d["a"]([Object(f["b"])(Boolean)],b.prototype,"disabled",void 0),d["a"]([Object(f["d"])("uuid")],b.prototype,"uuidChanged",null),b=d["a"]([Object(f["a"])({})],b);var l=b,p=l,g=i("2877"),h=Object(g["a"])(p,n,r,!1,null,"202490f4",null);e["a"]=h.exports},"5dbc":function(t,e,i){var n=i("d3f4"),r=i("8b97").set;t.exports=function(t,e,i){var a,s=e.constructor;return s!==i&&"function"==typeof s&&(a=s.prototype)!==i.prototype&&n(a)&&r&&r(t,a),t}},"64c3":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Question",{attrs:{uuid:t.uuid,timeout:t.timeout,image:t.imageFile,disabled:t.disabled},on:{submit:t.submit}})],1)},r=[],a=i("d225"),s=i("b0b4"),o=i("308d"),u=i("6bb5"),c=i("4e2b"),d=i("9ab4"),f=i("60a3"),b=i("1f97"),l=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(o["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.disabled=!1,t}return Object(c["a"])(e,t),Object(s["a"])(e,[{key:"submit",value:function(t){var e=this;this.disabled||(this.disabled=!0,this.$store.dispatch("answerQuestion",{uuid:this.uuid,fake:t,stage:"practise"}).then(function(){return e.disabled=!1}).then(function(){e.done&&e.$router.push("/intro-short")}))}},{key:"images",get:function(){return this.$store.getters.practiseImages}},{key:"timeout",get:function(){return this.$store.getters.timeoutShort}},{key:"uuid",get:function(){return this.image.uuid}},{key:"currentIndex",get:function(){return this.$store.getters.currentPractiseIndex}},{key:"imageFile",get:function(){return this.image.image}},{key:"image",get:function(){return this.done?{image:"",uuid:""}:this.images[this.currentIndex].image}},{key:"done",get:function(){return this.currentIndex>=this.images.length}}]),e}(f["c"]);l=d["a"]([Object(f["a"])({components:{Question:b["a"]}})],l);var p=l,g=p,h=i("2877"),m=Object(h["a"])(g,n,r,!1,null,"94e8b56c",null);e["default"]=m.exports},"8b97":function(t,e,i){var n=i("d3f4"),r=i("cb7c"),a=function(t,e){if(r(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=i("9b43")(Function.call,i("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,i){return a(t,i),e?t.__proto__=i:n(t,i),t}}({},!1):void 0),check:a}},aa77:function(t,e,i){var n=i("5ca1"),r=i("be13"),a=i("79e5"),s=i("fdef"),o="["+s+"]",u="​",c=RegExp("^"+o+o+"*"),d=RegExp(o+o+"*$"),f=function(t,e,i){var r={},o=a(function(){return!!s[t]()||u[t]()!=u}),c=r[t]=o?e(b):s[t];i&&(r[i]=c),n(n.P+n.F*o,"String",r)},b=f.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(d,"")),t};t.exports=f},c5f6:function(t,e,i){"use strict";var n=i("7726"),r=i("69a8"),a=i("2d95"),s=i("5dbc"),o=i("6a99"),u=i("79e5"),c=i("9093").f,d=i("11e9").f,f=i("86cc").f,b=i("aa77").trim,l="Number",p=n[l],g=p,h=p.prototype,m=a(i("2aeb")(h))==l,v="trim"in String.prototype,y=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():b(e,3);var i,n,r,a=e.charCodeAt(0);if(43===a||45===a){if(i=e.charCodeAt(2),88===i||120===i)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var s,u=e.slice(2),c=0,d=u.length;c<d;c++)if(s=u.charCodeAt(c),s<48||s>r)return NaN;return parseInt(u,n)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof p&&(m?u(function(){h.valueOf.call(i)}):a(i)!=l)?s(new g(y(e)),i,p):y(e)};for(var _,I=i("9e1e")?c(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;I.length>O;O++)r(g,_=I[O])&&!r(p,_)&&f(p,_,d(g,_));p.prototype=h,h.constructor=p,i("2aba")(n,l,p)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=practise.3631f805.js.map