(window.webpackJsonp=window.webpackJsonp||[]).push([[71,5,49,67],{220:function(t,n,e){var content=e(226);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(92).default)("4aef825e",content,!0,{sourceMap:!1})},221:function(t,n,e){"use strict";e.r(n);var o={},r=(e(225),e(28)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"card bg-coolGray-800 rounded-md"},[t._t("default")],2)}),[],!1,null,"0e044b34",null);n.default=component.exports},222:function(t,n,e){var content=e(230);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(92).default)("62c7fa01",content,!0,{sourceMap:!1})},223:function(t,n,e){"use strict";e.r(n);var o={props:{href:{type:String,default:"#"}}},r=e(28),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("a",{attrs:{href:t.href,target:"_blank",rel:"noreferrer noopener"}},[t._t("default")],2)}),[],!1,null,null,null);n.default=component.exports},224:function(t,n,e){"use strict";e.r(n);var o=e(20),r=(e(40),e(165),e(122),e(166),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(o.a)(t))console.log(t.text,t.css);else{var n=t.split(" "),e=n.shift(),r=n.join(" ");this.cssPropNVal[0]=e,this.cssPropNVal[1]=r,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:e,val:r})}}}}),l=(e(229),e(28)),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(n){return t.toClipboard(t.name)},mouseover:function(n){return t.setCss(t.tooltip)},mouseleave:function(n){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);n.default=component.exports},225:function(t,n,e){"use strict";e(220)},226:function(t,n,e){var o=e(91),r=e(227),l=e(228),c=o((function(i){return i[1]})),m=r(l);c.push([t.i,'/*purgecss start ignore*/\n.card .prefix[data-v-0e044b34]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-0e044b34]:after{\n  content:url('+m+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-0e044b34]:hover:after{\n  opacity:1\n}\n.card .content[data-v-0e044b34]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),c.locals={},t.exports=c},227:function(t,n,e){"use strict";t.exports=function(t,n){return n||(n={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},228:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},229:function(t,n,e){"use strict";e(222)},230:function(t,n,e){var o=e(91)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},322:function(t,n,e){"use strict";e.r(n);var o={},r=e(28),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("Card",[e("div",[e("Lnk",{staticClass:"font-sans text-sm text-coolGray-400 m-2",attrs:{href:"https://tailwindcss.com/docs/font-variant-numeric"}},[t._v("Font variant numeric")])],1),t._v(" "),e("div",{staticClass:"content grid grid-cols-2 gap-y-2"},[e("TwClass",{staticClass:"w-max",attrs:{name:"normal-nums",tooltip:"font-variant-numeric: normal"}},[t._v("normal-nums")]),t._v(" "),e("p",{staticClass:"font-sans text-sm normal-nums"},[t._v("1234567890")]),t._v(" "),e("TwClass",{staticClass:"w-max",attrs:{name:"ordinal",tooltip:"font-variant-numeric: ordinal"}},[t._v("ordinal")]),t._v(" "),e("p",{staticClass:"font-sans text-sm ordinal"},[t._v("1st")]),t._v(" "),e("TwClass",{staticClass:"w-max",attrs:{name:"slashed-zero",tooltip:"font-variant-numeric: slashed-zero"}},[t._v("slashed-zero")]),t._v(" "),e("p",{staticClass:"font-sans text-sm slashed-zero"},[t._v("0")]),t._v(" "),e("TwClass",{staticClass:"w-max",attrs:{name:"lining-nums",tooltip:"font-variant-numeric: lining-nums"}},[t._v("lining-nums")]),t._v(" "),e("p",{staticClass:"font-sans text-sm lining-nums"},[t._v("1234567890")]),t._v(" "),e("TwClass",{staticClass:"w-max",attrs:{name:"oldstyle-nums",tooltip:"font-variant-numeric: oldstyle-nums"}},[t._v("oldstyle-nums")]),t._v(" "),e("p",{staticClass:"font-sans text-sm oldstyle-nums"},[t._v("1234567890")]),t._v(" "),e("TwClass",{staticClass:"w-max",attrs:{name:"proportional-nums",tooltip:"font-variant-numeric: proportional-nums"}},[t._v("proportional-nums")]),t._v(" "),e("div",[e("p",{staticClass:"font-sans text-sm proportional-nums"},[t._v("121212")]),t._v(" "),e("p",{staticClass:"font-sans text-sm proportional-nums"},[t._v("909090")])]),t._v(" "),e("TwClass",{staticClass:"w-max",attrs:{name:"tabular-nums",tooltip:"font-variant-numeric: tabular-nums"}},[t._v("tabular-nums")]),t._v(" "),e("div",[e("p",{staticClass:"font-sans text-sm tabular-nums"},[t._v("121212")]),t._v(" "),e("p",{staticClass:"font-sans text-sm tabular-nums"},[t._v("909090")])]),t._v(" "),e("TwClass",{staticClass:"w-max",attrs:{name:"diagonal-fractions",tooltip:"font-variant-numeric: diagonal-fractions"}},[t._v("diagonal-fractions")]),t._v(" "),e("p",{staticClass:"font-sans text-sm diagonal-fractions"},[t._v("1/2 3/4 5/6")]),t._v(" "),e("TwClass",{staticClass:"w-max",attrs:{name:"stacked-fractions",tooltip:"font-variant-numeric: stacked-fractions"}},[t._v("stacked-fractions")]),t._v(" "),e("p",{staticClass:"font-sans text-sm stacked-fractions"},[t._v("1/2 3/4 5/6")])],1)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Lnk:e(223).default,TwClass:e(224).default,Card:e(221).default})}}]);