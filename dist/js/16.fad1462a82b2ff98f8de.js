webpackJsonp([16],{322:function(t,e,n){var o,r;o=n(403);var a=n(388);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,t.exports=o},388:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Page",[n("HeaderBar",{attrs:{title:"头部一",leftFontCode:"e5c4","left-text":"返回","right-text":"菜单"},on:{onLeft:t.backPage,onRight:t.onRightClick},slot:"header"}),t._v(" "),n("HeaderBar",{attrs:{title:"头部二"}}),t._v(" "),n("HeaderBar",{attrs:{leftFontCode:"e5c4",title:"头部三"}},[n("div",{slot:"title"},[t._v("slot头部三")])]),t._v(" "),n("HeaderBar",{attrs:{leftFontCode:"e5c4",rightFontCode:"e145",rightText:"添加",leftText:"返回",title:"头部四"}}),t._v(" "),n("header-bar",{attrs:{title:"头部五"},on:{onLeft:t.backPage,onRight:t.onRightClick}},[n("div",{slot:"left"},[t._v("\n            slotLeft\n        ")]),t._v(" "),n("div",{slot:"right"},[t._v("\n            slotLeft\n        ")])])],1)},staticRenderFns:[]}},403:function(t,e,n){"use strict";var o=n(49);Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{backPage:function(){this.$router.back()},onRightClick:function(){window.alert("你点击了我")}},components:{HeaderBar:o.c,Page:o.b}}}});