webpackJsonp([0],{353:function(o,t,e){t=o.exports=e(0)(),t.push([o.i,".abc{color:#00abeb}",""])},376:function(o,t,e){var n=e(353);"string"==typeof n&&(n=[[o.i,n,""]]);e(1)(n,{});n.locals&&(o.exports=n.locals)},394:function(o,t){o.exports={render:function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("Page",[e("HeaderBar",{attrs:{title:"9宫格组件",leftFontCode:"e5c4"},on:{onLeft:o.back},slot:"header"}),o._v(" "),e("div",[e("grid",{attrs:{list:o.gdata,rowHeight:"3",columnCount:"3"},on:{"on-item":o.itclick}})],1)],1)},staticRenderFns:[]}},402:function(o,t,e){"use strict";var n=e(50),i=e.n(n),r=e(49);Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{gdata:[{classNames:"abc",iconColor:"red",position:"bottom",text:"111"},{iconColor:"#333",position:"bottom",text:"222"},{iconColor:"#333",position:"bottom",text:"333"},{iconColor:"#333",position:"bottom",text:"444"},{iconColor:"#333",position:"bottom",text:"555"},{iconColor:"#333",position:"bottom",text:"666"},{iconColor:"#333",position:"bottom",text:"777"},{iconColor:"#333",position:"bottom",text:"888"},{iconColor:"#333",position:"bottom",text:"999"},{iconColor:"#333",position:"bottom",text:"000"}]}},methods:{itclick:function(o){alert(i()(o))},back:function(){window.history.back()}},components:{Grid:r.n,Page:r.b,HeaderBar:r.c}}},76:function(o,t,e){var n,i;e(376),n=e(402);var r=e(394);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,o.exports=n}});