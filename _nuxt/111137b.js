(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4,48,67],{215:function(t,e,o){var content=o(221);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(86).default)("81762e40",content,!0,{sourceMap:!1})},216:function(t,e,o){"use strict";o.r(e);var n={},r=(o(220),o(30)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card bg-gray-800 rounded-md"},[t._t("default")],2)}),[],!1,null,"176aa006",null);e.default=component.exports},217:function(t,e,o){"use strict";o.r(e);var n={props:{href:{type:String,default:"#"}}},r=o(30),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{attrs:{href:t.href,target:"_blank",rel:"noreferrer noopener"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},218:function(t,e,o){var content=o(225);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(86).default)("62c7fa01",content,!0,{sourceMap:!1})},219:function(t,e,o){"use strict";o.r(e);var n=o(20),r=(o(38),o(163),o(119),o(164),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(n.a)(t))console.log(t.text,t.css);else{var e=t.split(" "),o=e.shift(),r=e.join(" ");this.cssPropNVal[0]=o,this.cssPropNVal[1]=r,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:o,val:r})}}}}),l=(o(224),o(30)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(e){return t.toClipboard(t.name)},mouseover:function(e){return t.setCss(t.tooltip)},mouseleave:function(e){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);e.default=component.exports},220:function(t,e,o){"use strict";o(215)},221:function(t,e,o){var n=o(85),r=o(222),l=o(223),c=n((function(i){return i[1]})),d=r(l);c.push([t.i,'/*purgecss start ignore*/\n.card .prefix[data-v-176aa006]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-176aa006]:after{\n  content:url('+d+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-176aa006]:hover:after{\n  opacity:1\n}\n.card .content[data-v-176aa006]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),c.locals={},t.exports=c},222:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},223:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},224:function(t,e,o){"use strict";o(218)},225:function(t,e,o){var n=o(85)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},258:function(t,e,o){"use strict";o.r(e);var n={},r=o(30),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Card",[o("div",{staticClass:"prefix"},[o("Lnk",{staticClass:"whitespace-pre",attrs:{href:"https://tailwindcss.com/docs/box-sizing"}},[t._v("box-")])],1),t._v(" "),o("div",{staticClass:"content grid grid-cols-2 w-full gap-x-0.5"},[o("div",[o("TwClass",{staticClass:"mb-1",attrs:{name:"box-border",tooltip:"box-sizing: border-box"}},[t._v("border")]),t._v(" "),o("div",{staticClass:"h-20 p-3"},[o("div",{staticClass:"bg-gray-600 h-full p-3 relative"},[o("div",{staticClass:"h-full bg-black"}),t._v(" "),o("div",{staticClass:"h-2 w-2 rounded-full bg-red-600 absolute -top-1 -left-1"}),t._v(" "),o("div",{staticClass:"h-2 w-2 rounded-full bg-red-600 absolute -top-1 -right-1"}),t._v(" "),o("div",{staticClass:"h-2 w-2 rounded-full bg-red-600 absolute -bottom-1 -left-1"}),t._v(" "),o("div",{staticClass:"h-2 w-2 rounded-full bg-red-600 absolute -bottom-1 -right-1"})])])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"mb-1",attrs:{name:"box-content",tooltip:"box-sizing: content-box"}},[t._v("content")]),t._v(" "),o("div",{staticClass:"bg-gray-600 h-20 p-3"},[o("div",{staticClass:"bg-black h-full relative"},[o("div",{staticClass:"h-2 w-2 rounded-full bg-red-600 absolute -top-1 -left-1"}),t._v(" "),o("div",{staticClass:"h-2 w-2 rounded-full bg-red-600 absolute -top-1 -right-1"}),t._v(" "),o("div",{staticClass:"h-2 w-2 rounded-full bg-red-600 absolute -bottom-1 -left-1"}),t._v(" "),o("div",{staticClass:"h-2 w-2 rounded-full bg-red-600 absolute -bottom-1 -right-1"})])])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Lnk:o(217).default,TwClass:o(219).default,Card:o(216).default})}}]);