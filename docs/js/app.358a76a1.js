(function(e){function t(t){for(var c,o,l=t[0],i=t[1],u=t[2],b=0,f=[];b<l.length;b++)o=l[b],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(c=!1)}c&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},r={app:0},a=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"1b12":function(e,t,n){},2005:function(e,t,n){"use strict";n("3a68")},"2e12":function(e,t,n){},"3a68":function(e,t,n){},4902:function(e,t,n){"use strict";n("75d8")},"75d8":function(e,t,n){},"9c40":function(e,t,n){"use strict";n("1b12")},b86b:function(e,t,n){},b99a:function(e,t,n){"use strict";n("b86b")},cc0d:function(e,t,n){"use strict";n("2e12")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,a,o){var l=Object(c["m"])("Board");return Object(c["h"])(),Object(c["d"])("main",null,[Object(c["f"])(l)])}var a=Object(c["o"])("data-v-0d6ee932");Object(c["j"])("data-v-0d6ee932");var o={class:"board"},l={key:0,class:"alert"},i={class:"board__content"};Object(c["i"])();var u=a((function(e,t,n,r,a,u){var s=Object(c["m"])("Players"),b=Object(c["m"])("Row");return Object(c["h"])(),Object(c["d"])("div",o,[e.board.end?(Object(c["h"])(),Object(c["d"])("div",l," End ")):Object(c["e"])("",!0),Object(c["f"])(s,{turn:e.board.turn,pieceCountsByColor:e.board.pieceCountsByColor},null,8,["turn","pieceCountsByColor"]),Object(c["f"])("div",i,[(Object(c["h"])(!0),Object(c["d"])(c["a"],null,Object(c["l"])(e.board.rows,(function(t){return Object(c["h"])(),Object(c["d"])(b,{row:t,key:t.x,onOnPlace:e.onPlace},null,8,["row","onOnPlace"])})),128))])])})),s=Object(c["o"])("data-v-c0fef514");Object(c["j"])("data-v-c0fef514");var b={class:"row"};Object(c["i"])();var f,h=s((function(e,t,n,r,a,o){var l=Object(c["m"])("Cell");return Object(c["h"])(),Object(c["d"])("div",b,[(Object(c["h"])(!0),Object(c["d"])(c["a"],null,Object(c["l"])(e.row.cells,(function(t){return Object(c["h"])(),Object(c["d"])(l,{cell:t,key:t.x+t.y,onOnPlace:e.onPlace},null,8,["cell","onOnPlace"])})),128))])})),p=Object(c["o"])("data-v-b5ae9f7a"),d=p((function(e,t,n,r,a,o){return Object(c["h"])(),Object(c["d"])("div",{class:["cell stone",e.stateClass],onClick:t[1]||(t[1]=function(){return e.onPlace&&e.onPlace.apply(e,arguments)})},null,2)})),v=n("bee2"),O=n("2909"),y=n("d4ec");n("d81d"),n("d3b7"),n("ddb0"),n("b64b"),n("99af"),n("159b");(function(e){e["White"]="white",e["Black"]="black",e["None"]="none"})(f||(f={}));var j=function e(t,n){Object(y["a"])(this,e),this.x=t,this.y=n,this.state=f.None},C=function e(t){Object(y["a"])(this,e),this.x=t,this.cells=Object(O["a"])(Array(8).keys()).map((function(e){return new j(t,e)}))},w=function e(t,n){Object(y["a"])(this,e),this.x=t,this.y=n},k=function(){function e(){Object(y["a"])(this,e),this.turn=f.Black,this.end=!1,this.rows=Object(O["a"])(Array(8).keys()).map((function(e){return new C(e)})),this.traverseSchema={right:function(e){return new w(e.x,e.y+1)},left:function(e){return new w(e.x,e.y-1)},top:function(e){return new w(e.x-1,e.y)},bottom:function(e){return new w(e.x+1,e.y)},topRight:function(e){return new w(e.x-1,e.y+1)},topBottom:function(e){return new w(e.x+1,e.y+1)},topLeft:function(e){return new w(e.x-1,e.y-1)},bottomLeft:function(e){return new w(e.x+1,e.y-1)}}}return Object(v["a"])(e,[{key:"init",value:function(){this.rows[3].cells[3].state=f.White,this.rows[3].cells[4].state=f.Black,this.rows[4].cells[3].state=f.Black,this.rows[4].cells[4].state=f.White}},{key:"getCellByCoordinate",value:function(e,t){return this.rows[e].cells[t]}},{key:"flippableCells",value:function(t,n){var c=this,r=function t(r,a,o){var l=a(r),i=l.x,u=l.y;if(!e.isInsideBoard(i,u))return[];var s=c.getCellByCoordinate(i,u),b=new w(s.x,s.y);return s.state===f.None?[]:s.state!==n?(o.push(s),t(b,a,o)):o},a=[],o=new w(t.x,t.y);return a=Object.keys(this.traverseSchema).reduce((function(e,t){return[].concat(Object(O["a"])(e),Object(O["a"])(r(o,c.traverseSchema[t],[])))}),[]),a}},{key:"examineEveryCell",value:function(e,t){for(var n=this.rows,c=0;c<n.length;c+=1)for(var r=n[c],a=0;a<r.cells.length;a+=1){var o=r.cells[a];e.call(this,o,t)}}},{key:"isPlacableCell",value:function(e,t){if(e.state===f.None){var n=this.flippableCells(e,f.Black),c=this.flippableCells(e,f.White);n.length>0&&(t[f.Black]+=1),c.length>0&&(t[f.White]+=1)}}},{key:"placablePieceCountsByColor",get:function(){var e={black:0,white:0};return this.examineEveryCell(this.isPlacableCell,e),e}},{key:"pieceCountsByColor",get:function(){var t={black:0,white:0};return this.examineEveryCell(e.countPiecesByColor,t),t}},{key:"next",value:function(){this.turn=this.turn===f.Black?f.White:f.Black}},{key:"unplacable",value:function(){if(this.turn===f.None)return!0;var e=this.placablePieceCountsByColor;return 0===e[this.turn]}},{key:"gameSetMatch",value:function(){var e=this.placablePieceCountsByColor;0===e[f.Black]&&0===e[f.White]&&(this.end=!0)}},{key:"place",value:function(t,n){var c=this.rows[t].cells[n],r=this.flippableCells(c,this.turn);c.state===f.None&&r.length>0&&(c.state=this.turn,e.flipCells(r,this.turn),this.next(),this.gameSetMatch(),this.unplacable()&&this.next())}}],[{key:"isInsideBoard",value:function(e,t){return e<8&&e>=0&&t<8&&t>=0}},{key:"flipCells",value:function(e,t){e.forEach((function(e){e.state=t}))}},{key:"countPiecesByColor",value:function(e,t){e.state!==f.None&&(t[e.state]+=1)}}]),e}(),m=Object(c["g"])({props:{cell:{type:j,required:!0}},setup:function(e,t){var n=Object(c["b"])((function(){return{"stone--white":e.cell.state===f.White,"stone--black":e.cell.state===f.Black}})),r=function(){t.emit("onPlace",e.cell.x,e.cell.y)};return{stateClass:n,onPlace:r}}});n("2005");m.render=d,m.__scopeId="data-v-b5ae9f7a";var B=m,g=Object(c["g"])({props:{row:{type:C,required:!0}},components:{Cell:B},setup:function(e,t){var n=function(e,n){t.emit("on-place",e,n)};return{onPlace:n}}});n("b99a");g.render=h,g.__scopeId="data-v-c0fef514";var x=g,P=Object(c["o"])("data-v-56894efb");Object(c["j"])("data-v-56894efb");var _={class:"players"},S={class:"players__items"},W=Object(c["f"])("h2",null,"Black",-1),N=Object(c["f"])("h2",null,"White",-1);Object(c["i"])();var I=P((function(e,t,n,r,a,o){return Object(c["h"])(),Object(c["d"])("section",_,[Object(c["f"])("div",S,[Object(c["f"])("div",{class:["players__item",e.blackClass]},[W,Object(c["f"])("p",null,Object(c["n"])(e.pieceCountsByColor.black),1)],2),Object(c["f"])("div",{class:["players__item",e.whiteClass]},[N,Object(c["f"])("p",null,Object(c["n"])(e.pieceCountsByColor.white),1)],2)])])})),M=Object(c["g"])({props:{turn:{required:!0,type:String},pieceCountsByColor:{required:!0,type:Object}},setup:function(e){console.log(e.pieceCountsByColor);var t=Object(c["b"])((function(){return{active:e.turn===f.Black,inactive:e.turn===f.White}})),n=Object(c["b"])((function(){return{active:e.turn===f.White,inactive:e.turn===f.Black}}));return{blackClass:t,whiteClass:n}}});n("9c40");M.render=I,M.__scopeId="data-v-56894efb";var E=M,q=Object(c["g"])({components:{Row:x,Players:E},setup:function(){var e=Object(c["k"])(new k);e.init();var t=function(t,n){e.place(t,n)};return{board:e,onPlace:t}}});n("4902");q.render=u,q.__scopeId="data-v-0d6ee932";var A=q,R=Object(c["g"])({name:"App",components:{Board:A}});n("cc0d");R.render=r;var J=R;Object(c["c"])(J).mount("#app")}});
//# sourceMappingURL=app.358a76a1.js.map