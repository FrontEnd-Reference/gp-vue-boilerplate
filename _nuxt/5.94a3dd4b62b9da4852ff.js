(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{198:function(e,t,r){"use strict";r.r(t);var n=r(141),o=r(305),c={components:{LayoutDefaultContainer:n.a,AtomResponsiveImage:o.a},props:{options:{type:Object,default:function(){return null}},picture:{type:Object,required:!1,default:function(){return{sources:[{media:"default",srcset:"img/sample-a-16-9/412x232.jpg"},{media:"xs",srcset:"img/sample-a-16-9/768x432.jpg"},{media:"sm",srcset:"img/sample-a-16-9/992x558.jpg"},{media:"md",srcset:"img/sample-a-16-9/1200x675.jpg"},{media:"lg",srcset:"img/sample-a-16-9/1600x900.jpg"},{media:"xl",srcset:"img/sample-a-16-9/1920x1080.jpg"}]}}}}},l=(r(356),r(14)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("layout-default-container",e._b({staticClass:"organism-picture",scopedSlots:e._u([{key:"container",fn:function(){return[r("atom-responsive-image",e._b({},"atom-responsive-image",e.picture,!1))]},proxy:!0}])},"layout-default-container",e.options,!1))}),[],!1,null,null,null);t.default=component.exports},290:function(e,t,r){"use strict";(function(e){r(67),r(17),r(7),r(24),r(30),r(297);var n=r(300),o={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",webp:"image/webp"};t.a={props:{loading:{type:String,required:!1,default:function(){return"auto"}},sourceClientOnly:{type:Boolean,required:!1,default:function(){return!0}},placeholder:{type:String,required:!1,default:function(){return"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}},sources:{type:[Array,Object],default:function(){return[{media:"default",srcset:"img/sample-a-16-9/412x232.jpg"},{media:"xs",srcset:"img/sample-a-16-9/768x432.jpg"},{media:"sm",srcset:"img/sample-a-16-9/992x558.jpg"},{media:"md",srcset:"img/sample-a-16-9/1200x675.jpg"},{media:"lg",srcset:"img/sample-a-16-9/1600x900.jpg"},{media:"xl",srcset:"img/sample-a-16-9/1920x1080.jpg"}]}},width:{type:Number,required:!1,default:function(){return null}},height:{type:Number,required:!1,default:function(){return null}},title:{type:String,required:!1,default:function(){return"image title"}},alt:{type:String,required:!1,default:function(){return"image description"}}},computed:{sorted:function(){return function(e,pattern){return e.sort((function(a,b){return pattern.indexOf(a.media)===pattern.indexOf(b.media)?0:pattern.indexOf(a.media)>pattern.indexOf(b.media)?1:-1}))}([].concat(this.sources),Array.from(n.a.keys())).reverse()},items:function(){var e=this;return this.sorted.map((function(source){var t;return(source=Object.assign({},source)).type="",e.sourceClientOnly,source.type=o[(t=source.srcset.replace(/.*\.(\w{3,4}).*$/,"$1"),/\w+$/.exec(t)[0])],source.media=n.a.get(source.media),source}))}},methods:{onLoad:function(){"objectFitImages"in e&&e.objectFitImages(this.$el.querySelector("img"))}}}}).call(this,r(28))},291:function(e,t,r){var content=r(303);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(60).default)("baea8822",content,!0,{sourceMap:!1})},297:function(e,t,r){"use strict";var n=r(10),o=r(49),c=r(61),l=r(142),m=r(110),d=r(20),f=r(83).f,x=r(112).f,h=r(21).f,A=r(298).trim,w=n.Number,y=w,v=w.prototype,j="Number"==c(r(111)(v)),N="trim"in String.prototype,I=function(e){var t=m(e,!1);if("string"==typeof t&&t.length>2){var r,n,o,c=(t=N?t.trim():A(t,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var code,l=t.slice(2),i=0,d=l.length;i<d;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+t};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof w&&(j?d((function(){v.valueOf.call(r)})):"Number"!=c(r))?l(new y(I(t)),r,w):I(t)};for(var E,O=r(15)?f(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;O.length>_;_++)o(y,E=O[_])&&!o(w,E)&&h(w,E,x(y,E));w.prototype=v,v.constructor=w,r(29)(n,"Number",w)}},298:function(e,t,r){var n=r(11),o=r(50),c=r(20),l=r(299),m="["+l+"]",d=RegExp("^"+m+m+"*"),f=RegExp(m+m+"*$"),x=function(e,t,r){var o={},m=c((function(){return!!l[e]()||"​"!="​"[e]()})),d=o[e]=m?t(h):l[e];r&&(o[r]=d),n(n.P+n.F*m,"String",o)},h=x.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(d,"")),2&t&&(e=e.replace(f,"")),e};e.exports=x},299:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},300:function(e,t,r){"use strict";r(67),r(194),r(17),r(7),r(24),r(144);var n,o=r(301),c=new Map(Object.entries(o));t.a=(n=new Map,c.forEach((function(e,t){n.set(t.replace("--",""),e)})),n)},301:function(e){e.exports=JSON.parse('{"--default":"all","--default-max":"(max-width: 575px)","--xs":"(min-width: 576px)","--xs-max":"(max-width: 767px)","--sm":"(min-width: 768px)","--sm-max":"(max-width: 991px)","--md":"(min-width: 992px)","--md-max":"(max-width: 1199px)","--lg":"(min-width: 1200px)","--lg-max":"(max-width: 1599px)","--xl":"(min-width: 1600px)","--xl-max":"(max-width: 1919px)","--xxl":"(min-width: 1920px)"}')},302:function(e,t,r){"use strict";var n=r(291);r.n(n).a},303:function(e,t,r){(t=r(59)(!1)).push([e.i,"picture,picture img{display:block}picture img{width:100%;max-width:100%}",""]),e.exports=t},304:function(e,t){},305:function(e,t,r){"use strict";var n=r(290).a,o=(r(302),r(14)),c=r(304),l=r.n(c),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("picture",{staticClass:"atom-responsive-image"},[e._l(e.items,(function(source,t){return r("source",e._b({key:t},"source",source,!1))})),e._v(" "),r("img",{attrs:{src:e.placeholder,alt:e.alt,title:e.title,loading:e.loading,width:e.width,height:e.height},on:{load:e.onLoad}})],2)}),[],!1,null,null,null);"function"==typeof l.a&&l()(component);t.a=component.exports},340:function(e,t,r){var content=r(357);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(60).default)("bad5e8a8",content,!0,{sourceMap:!1})},356:function(e,t,r){"use strict";var n=r(340);r.n(n).a},357:function(e,t,r){(t=r(59)(!1)).push([e.i,'.organism-picture{position:relative;width:100%}.organism-picture:before{display:block;width:100%;padding-top:56.25%;content:""}.organism-picture img{position:absolute;top:0;left:0;width:100%}',""]),e.exports=t}}]);