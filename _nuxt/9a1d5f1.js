(window.webpackJsonp=window.webpackJsonp||[]).push([[51,5,49,67],{220:function(t,e,o){var content=o(226);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(92).default)("4aef825e",content,!0,{sourceMap:!1})},221:function(t,e,o){"use strict";o.r(e);var r={},n=(o(225),o(28)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card bg-coolGray-800 rounded-md"},[t._t("default")],2)}),[],!1,null,"0e044b34",null);e.default=component.exports},222:function(t,e,o){var content=o(230);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(92).default)("62c7fa01",content,!0,{sourceMap:!1})},223:function(t,e,o){"use strict";o.r(e);var r={props:{href:{type:String,default:"#"}}},n=o(28),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{attrs:{href:t.href,target:"_blank",rel:"noreferrer noopener"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},224:function(t,e,o){"use strict";o.r(e);var r=o(20),n=(o(40),o(165),o(122),o(166),{props:{name:{type:String,default:""},tooltip:{type:[String,Object],default:"",required:!1}},data:function(){return{cssPropNVal:[]}},methods:{toClipboard:function(text){navigator.clipboard.writeText(text),this.$nuxt.$emit("toTooltip",text)},setCss:function(t){if("object"===Object(r.a)(t))console.log(t.text,t.css);else{var e=t.split(" "),o=e.shift(),n=e.join(" ");this.cssPropNVal[0]=o,this.cssPropNVal[1]=n,t.endsWith(";")&&console.log("ends with ;"),this.$nuxt.$emit("mouseOnClass",{prop:o,val:n})}}}}),l=(o(229),o(28)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tw-class cursor-pointer",on:{click:function(e){return t.toClipboard(t.name)},mouseover:function(e){return t.setCss(t.tooltip)},mouseleave:function(e){return t.$nuxt.$emit("mouseOnClass",!1)}}},[t._t("default")],2)}),[],!1,null,"6ff0f84a",null);e.default=component.exports},225:function(t,e,o){"use strict";o(220)},226:function(t,e,o){var r=o(91),n=o(227),l=o(228),d=r((function(i){return i[1]})),c=n(l);d.push([t.i,'/*purgecss start ignore*/\n.card .prefix[data-v-0e044b34]{\n  position:relative;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  white-space:pre;\n  border-top-left-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.card .prefix a[data-v-0e044b34]:after{\n  content:url('+c+');\n  width:1.25rem;\n  height:1.25rem;\n  position:absolute;\n  top:-1px;\n  right:-1.5rem;\n  padding-top:0px;\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  opacity:0\n}\n.card .prefix a[data-v-0e044b34]:hover:after{\n  opacity:1\n}\n.card .content[data-v-0e044b34]{\n  padding:0.5rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/',""]),d.locals={},t.exports=d},227:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},228:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiIC8+Cjwvc3ZnPgo="},229:function(t,e,o){"use strict";o(222)},230:function(t,e,o){var r=o(91)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},302:function(t,e,o){"use strict";o.r(e);var r={},n=o(28),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Card",[o("div",{staticClass:"prefix"},[o("Lnk",{attrs:{href:"https://tailwindcss.com/docs/background-attachment"}},[t._v("bg-")])],1),t._v(" "),o("div",{staticClass:"content"},[o("div",{staticClass:"grid grid-cols-3 gap-2"},[o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"bg-fixed",tooltip:"background-attachment: fixed"}},[t._v("fixed")]),t._v(" "),o("div",{staticClass:"scroll-box h-14 w-full mt-1 rounded overflow-y-scroll bg-fixed",staticStyle:{"background-image":"url(placeholder-light-blue.svg)"}},[o("div",{staticClass:"h-52"})])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"bg-local",tooltip:"background-attachment: local"}},[t._v("local")]),t._v(" "),o("div",{staticClass:"scroll-box h-14 w-full mt-1 rounded overflow-y-scroll bg-local",staticStyle:{"background-image":"url(placeholder-light-blue.svg)"}},[o("div",{staticClass:"h-52"})])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"bg-scroll",tooltip:"background-attachment: scroll"}},[t._v("scroll")]),t._v(" "),o("div",{staticClass:"scroll-box h-14 w-full mt-1 rounded overflow-y-scroll bg-scroll",staticStyle:{"background-image":"url(placeholder-light-blue.svg)"}},[o("div",{staticClass:"h-52"})])],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"bg-auto",tooltip:"background-size: auto"}},[t._v("auto")]),t._v(" "),o("div",{staticClass:"bg-no-repeat h-14 w-full mt-1 rounded bg-auto",staticStyle:{"background-image":"url(placeholder-light-blue.svg)"}})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"bg-cover",tooltip:"background-size: cover"}},[t._v("cover")]),t._v(" "),o("div",{staticClass:"bg-no-repeat h-14 w-full mt-1 rounded bg-cover",staticStyle:{"background-image":"url(placeholder-light-blue.svg)"}})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"bg-contain",tooltip:"background-size: contain"}},[t._v("contain")]),t._v(" "),o("div",{staticClass:"bg-no-repeat h-14 w-full mt-1 rounded bg-contain",staticStyle:{"background-image":"url(placeholder-light-blue.svg)"}})],1)]),t._v(" "),o("div",{staticClass:"grid grid-cols-3 gap-2 mt-2"},[o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"bg-repeat",tooltip:"background-repeat: repeat"}},[t._v("repeat")]),t._v(" "),o("div",{staticClass:"h-16 mt-1 rounded bg-coolGray-700 bg-repeat",staticStyle:{"background-image":"url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"}})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"bg-no-repeat",tooltip:"background-repeat: no-repeat"}},[t._v("no-repeat")]),t._v(" "),o("div",{staticClass:"h-16 mt-1 rounded bg-coolGray-700 bg-no-repeat",staticStyle:{"background-image":"url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"}})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"bg-repeat-x",tooltip:"background-repeat: repeat-x"}},[t._v("repeat-x")]),t._v(" "),o("div",{staticClass:"h-16 mt-1 rounded bg-coolGray-700 bg-repeat-x",staticStyle:{"background-image":"url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"}})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"bg-repeat-y",tooltip:"background-repeat: repeat-y"}},[t._v("repeat-y")]),t._v(" "),o("div",{staticClass:"h-16 mt-1 rounded bg-coolGray-700 bg-repeat-y",staticStyle:{"background-image":"url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"}})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"bg-repeat-round",tooltip:"background-repeat: round"}},[t._v("repeat-round")]),t._v(" "),o("div",{staticClass:"h-16 mt-1 rounded bg-coolGray-700 bg-repeat-round",staticStyle:{"background-image":"url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"}})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"bg-repeat-space",tooltip:"background-repeat: space"}},[t._v("repeat-space")]),t._v(" "),o("div",{staticClass:"h-16 mt-1 rounded bg-coolGray-700 bg-repeat-space",staticStyle:{"background-image":"url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"}})],1)]),t._v(" "),o("div",{staticClass:"grid grid-cols-3 gap-2 mt-2"},[o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"bg-left-top",tooltip:"background-position: left top"}},[t._v("left-top")]),t._v(" "),o("div",{staticClass:"mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-left-top",staticStyle:{"background-image":"url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"}})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"bg-top",tooltip:"background-position: top"}},[t._v("top")]),t._v(" "),o("div",{staticClass:"mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-top",staticStyle:{"background-image":"url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"}})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"bg-right-top",tooltip:"background-position: right top"}},[t._v("right-top")]),t._v(" "),o("div",{staticClass:"mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-right-top",staticStyle:{"background-image":"url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"}})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"bg-left",tooltip:"background-position: left"}},[t._v("left")]),t._v(" "),o("div",{staticClass:"mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-left",staticStyle:{"background-image":"url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"}})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"bg-center",tooltip:"background-position: center"}},[t._v("center")]),t._v(" "),o("div",{staticClass:"mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-center",staticStyle:{"background-image":"url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"}})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"bg-right",tooltip:"background-position: right"}},[t._v("right")]),t._v(" "),o("div",{staticClass:"mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-right",staticStyle:{"background-image":"url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"}})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"bg-left-bottom",tooltip:"background-position: left bottom"}},[t._v("left-bottom")]),t._v(" "),o("div",{staticClass:"mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-left-bottom",staticStyle:{"background-image":"url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"}})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"bg-bottom",tooltip:"background-position: bottom"}},[t._v("bottom")]),t._v(" "),o("div",{staticClass:"mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-bottom",staticStyle:{"background-image":"url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"}})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"bg-right-bottom",tooltip:"background-position: right bottom"}},[t._v("right-bottom")]),t._v(" "),o("div",{staticClass:"mt-1 h-14 rounded bg-no-repeat bg-coolGray-700 bg-right-bottom",staticStyle:{"background-image":"url(jordan-whitt-EerxztHCjM8-unsplash.jpg)"}})],1)]),t._v(" "),o("div",{staticClass:"grid grid-cols-3 gap-2 mt-2"},[o("div",[o("TwClass",{staticClass:"text-xs",attrs:{name:"bg-gradient-to-tl",tooltip:"background-image: linear-gradient(to top left, var(--tw-gradient-stops))"}},[t._v("gradient-to-tl")]),t._v(" "),o("div",{staticClass:"rounded mt-1 h-12 bg-gradient-to-tl from-yellow-400 via-red-500 to-pink-500"})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"text-xs",attrs:{name:"bg-gradient-to-t",tooltip:"background-image: linear-gradient(to top, var(--tw-gradient-stops))"}},[t._v("gradient-to-t")]),t._v(" "),o("div",{staticClass:"rounded mt-1 h-12 bg-gradient-to-t from-yellow-400 via-red-500 to-pink-500"})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"text-xs",attrs:{name:"bg-gradient-to-tr",tooltip:"background-image: linear-gradient(to top right, var(--tw-gradient-stops))"}},[t._v("gradient-to-tr")]),t._v(" "),o("div",{staticClass:"rounded mt-1 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500"})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"text-xs",attrs:{name:"bg-gradient-to-l",tooltip:"background-image: linear-gradient(to left, var(--tw-gradient-stops))"}},[t._v("gradient-to-l")]),t._v(" "),o("div",{staticClass:"rounded mt-1 h-12 bg-gradient-to-l from-yellow-400 via-red-500 to-pink-500"})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"text-xs",attrs:{name:"bg-none",tooltip:"background-image: none"}},[t._v("none")]),t._v(" "),o("div",{staticClass:"rounded mt-1 h-12 bg-none from-yellow-400 via-red-500 to-pink-500"})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"text-xs",attrs:{name:"bg-gradient-to-r",tooltip:"background-image: linear-gradient(to right, var(--tw-gradient-stops))"}},[t._v("gradient-to-r")]),t._v(" "),o("div",{staticClass:"rounded mt-1 h-12 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"text-xs",attrs:{name:"bg-gradient-to-bl",tooltip:"background-image: linear-gradient(to bottom left, var(--tw-gradient-stops))"}},[t._v("gradient-to-bl")]),t._v(" "),o("div",{staticClass:"rounded mt-1 h-12 bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500"})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"text-xs",attrs:{name:"bg-gradient-to-b",tooltip:"background-image: linear-gradient(to bottom, var(--tw-gradient-stops))"}},[t._v("gradient-to-b")]),t._v(" "),o("div",{staticClass:"rounded mt-1 h-12 bg-gradient-to-b from-yellow-400 via-red-500 to-pink-500"})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"text-xs",attrs:{name:"bg-gradient-to-br",tooltip:"background-image: linear-gradient(to bottom right, var(--tw-gradient-stops))"}},[t._v("gradient-to-br")]),t._v(" "),o("div",{staticClass:"rounded mt-1 h-12 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500"})],1)]),t._v(" "),o("div",{staticClass:"mt-2 grid grid-cols-3 gap-2"},[o("div",[o("div",{staticClass:"text-red-600 w-max"},[t._v("{color}")]),t._v(" "),o("div",{staticClass:"rounded mt-1 h-7 bg-red-600"})]),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"bg-transparent",tooltip:"background-color: transparent"}},[t._v("transparent")]),t._v(" "),o("div",{staticClass:"rounded mt-1 h-7 bg-transparent"})],1),t._v(" "),o("div",[o("TwClass",{staticClass:"w-max",attrs:{name:"bg-current",tooltip:"background-color: currentColor"}},[t._v("current")]),t._v(" "),o("div",{staticClass:"rounded mt-1 h-7 bg-current text-emerald-400 font-sans flex justify-center items-center"},[t._v("Hi")])],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Lnk:o(223).default,TwClass:o(224).default,Card:o(221).default})}}]);