(function(t){function e(e){for(var n,s,r=e[0],c=e[1],l=e[2],u=0,p=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);h&&h(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var h=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},2546:function(t,e,a){},5352:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),i={class:"app"},o={class:"mapContainer"},s={class:"btnGroup"};function r(t,e,a,r,c,l){var h=this;return Object(n["g"])(),Object(n["d"])("div",i,[Object(n["e"])("div",o,[(Object(n["g"])(),Object(n["c"])(Object(n["k"])(c.comp)))]),Object(n["e"])("div",s,[Object(n["e"])("div",{class:Object(n["f"])(["btn",{active:"New"===this.comp}]),onClick:e[0]||(e[0]=function(t){return h.comp="New"})}," 优化版 ",2),Object(n["e"])("div",{class:Object(n["f"])(["btn",{active:"Old"===this.comp}]),onClick:e[1]||(e[1]=function(t){return h.comp="Old"})}," 原始版 ",2)])])}var c=function(t){return Object(n["i"])("data-v-7f5862c5"),t=t(),Object(n["h"])(),t},l={class:"map",ref:"map"},h={class:"center"},u=c((function(){return Object(n["e"])("div",{class:"line lineX"},null,-1)})),p=c((function(){return Object(n["e"])("div",{class:"line lineY"},null,-1)}));function d(t,e,a,i,o,s){return Object(n["g"])(),Object(n["d"])("div",l,[Object(n["e"])("canvas",{ref:"canvas",onMousedown:e[0]||(e[0]=function(){return s.onMousedown&&s.onMousedown.apply(s,arguments)})},null,544),Object(n["e"])("div",h,Object(n["l"])(this.center[0]+","+this.center[1]),1),u,p],512)}for(var m=a("3835"),f=a("2909"),v=a("d4ec"),y=a("bee2"),b=(a("d81d"),a("99af"),a("d3b7"),a("159b"),a("b64b"),a("3623")),g=(a("ac1f"),a("466d"),a("1276"),a("fb6a"),a("a9e3"),a("5319"),function(t){return t*(Math.PI/180)}),M=function(t){return t*(180/Math.PI)},w=6378137,O=function(t,e){var a=g(t)*w,n=g(e),i=Math.sin(n),o=w/2*Math.log((1+i)/(1-i));return[a,o]},j=function(t,e){var a=M(t)/w,n=M(2*Math.atan(Math.exp(e/w))-Math.PI/2);return[a,n]},T=2*Math.PI*w,x=256,z=function(t){var e=Math.pow(2,t),a=e*x;return T/a},C=[],L=0;L<=18;L++)C.push(z(L));var k=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"topLeft";return"topLeft"===a&&(t+=T/2,e=T/2-e),[t,e]},D=function(t,e,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=k.apply(void 0,Object(f["a"])((n.lngLatToMercator||O)(t,e)).concat([n.origin])),o=Object(m["a"])(i,2),s=o[0],r=o[1],c=(n.resolutions||C)[a],l=Math.floor(s/c/x),h=Math.floor(r/c/x);return[l,h]},P=function(t,e,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=k.apply(void 0,Object(f["a"])((n.lngLatToMercator||O)(t,e)).concat([n.origin])),o=Object(m["a"])(i,2),s=o[0],r=o[1],c=(n.resolutions||C)[a],l=Math.floor(s/c),h=Math.floor(r/c);return[l,h]},I=function(t,e,a){var n=[1,2,3,4],i=n[Math.floor(Math.random()*n.length)];return"https://webrd0".concat(i,".is.autonavi.com/appmaptile?x=").concat(t,"&y=").concat(e,"&z=").concat(a,"&lang=zh_cn&size=1&scale=1&style=8")},_=function(t){var e=t.match(/\{[\d-]+\}/);if(e){for(var a=e[0].slice(1,-1).split(/\s*-\s*/),n=[],i=Number(a[0]);i<=Number(a[1]);i++)n.push(i);return n[Math.floor(Math.random()*n.length)]}return null},S=function(t,e,a,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=i.transformXYZ,s=i.getTileUrl,r=_(n);if(""!==r&&(n=n.replace(/\{[\d-]+\}/,r)),s)return s(t,e,a);if(o){var c=o(t,e,a);t=c[0],e=c[1],a=c[2]}return n.replace("{x}",t).replace("{y}",e).replace("{z}",a)},Z="0913a20b5d5a703b920e1ff0d9d26559",E=function(){function t(e){var a=e.ctx,n=e.row,i=e.col,o=e.zoom,s=e.x,r=e.y,c=e.shouldRender;Object(v["a"])(this,t),this.ctx=a,this.row=n,this.col=i,this.zoom=o,this.x=s,this.y=r,this.shouldRender=c,this.url="",this.cacheKey=this.row+"_"+this.col+"_"+this.zoom,this.img=null,this.loaded=!1,this.timer=null,this.createUrl(),this.load()}return Object(y["a"])(t,[{key:"createUrl",value:function(){this.url=I(this.row,this.col,this.zoom)}},{key:"load",value:function(){var t=this;this.img=new Image,this.img.src=this.url,this.timer=setTimeout((function(){t.createUrl(),t.load()}),1e3),this.img.onload=function(){clearTimeout(t.timer),t.loaded=!0,t.render()}}},{key:"render",value:function(){this.loaded&&this.shouldRender(this.cacheKey)&&this.ctx.drawImage(this.img,this.x,this.y)}},{key:"updatePos",value:function(t,e){return this.x=t,this.y=e,this}}]),t}(),U={name:"App",data:function(){return{width:0,height:0,isMousedown:!1,tileCache:{},currentTileCache:{},center:[120.148732,30.231006],zoom:17,minZoom:3,maxZoom:18,ctx:null,lastZoom:0,scale:1,scaleTmp:1,playback:null}},mounted:function(){this.initCanvas(),this.renderTiles(),window.addEventListener("mousemove",this.onMousemove),window.addEventListener("mouseup",this.onMouseup),window.addEventListener("wheel",this.onMousewheel)},beforeUnmount:function(){window.removeEventListener("mousemove",this.onMousemove),window.removeEventListener("mouseup",this.onMouseup),window.removeEventListener("wheel",this.onMousewheel)},methods:{initCanvas:function(){var t=this.$refs.map.getBoundingClientRect(),e=t.width,a=t.height;this.width=e,this.height=a;var n=this.$refs.canvas;n.width=this.width,n.height=this.height,this.ctx=n.getContext("2d"),this.ctx.translate(this.width/2,this.height/2)},renderTiles:function(){var t=this,e=D.apply(void 0,Object(f["a"])(O.apply(void 0,Object(f["a"])(this.center))).concat([this.zoom])),a=[e[0]*x,e[1]*x],n=P.apply(void 0,Object(f["a"])(this.center).concat([this.zoom])),i=[n[0]-a[0],n[1]-a[1]],o=Math.ceil((this.width/2-i[0])/x),s=Math.ceil((this.height/2-i[1])/x),r=Math.ceil((this.width/2-(x-i[0]))/x),c=Math.ceil((this.height/2-(x-i[1]))/x);this.currentTileCache={};for(var l=-o;l<=r;l++)for(var h=-s;h<=c;h++){var u=e[0]+l,p=e[1]+h,d=l*x-i[0],m=h*x-i[1],v=u+"_"+p+"_"+this.zoom;this.currentTileCache[v]=!0,this.tileCache[v]?this.tileCache[v].updatePos(d,m).render():this.tileCache[v]=new E({ctx:this.ctx,row:u,col:p,zoom:this.zoom,x:d,y:m,shouldRender:function(e){return t.currentTileCache[e]}})}},clear:function(){this.ctx.clearRect(-this.width/2,-this.height/2,this.width,this.height)},onMousedown:function(t){1===t.which&&(this.isMousedown=!0)},onMousemove:function(t){if(this.isMousedown){var e=t.movementX*C[this.zoom],a=t.movementY*C[this.zoom],n=O.apply(void 0,Object(f["a"])(this.center)),i=Object(m["a"])(n,2),o=i[0],s=i[1];this.center=j(o-e,a+s),this.clear(),this.renderTiles()}},onMouseup:function(){this.isMousedown=!1},onMousewheel:function(t){var e=this;t.deltaY>0?this.zoom>this.minZoom&&this.zoom--:this.zoom<this.maxZoom&&this.zoom++,this.lastZoom!==this.zoom&&(this.lastZoom=this.zoom,this.scale*=t.deltaY>0?.5:2,this.playback&&this.playback.stop(),this.playback=Object(b["a"])({from:this.scaleTmp,to:this.scale,onUpdate:function(t){e.scaleTmp=t,e.ctx.save(),e.clear(),e.ctx.scale(t,t),Object.keys(e.currentTileCache).forEach((function(t){e.tileCache[t].render()})),e.ctx.restore()},onComplete:function(){e.scale=1,e.scaleTmp=1,e.renderTiles()}}))}}},R=(a("9fc3"),a("6b0d")),B=a.n(R);const V=B()(U,[["render",d],["__scopeId","data-v-7f5862c5"]]);var Y=V,X=(a("b0c0"),function(t){return Object(n["i"])("data-v-76357bd4"),t=t(),Object(n["h"])(),t}),N={class:"map",ref:"map"},q=X((function(){return Object(n["e"])("div",{class:"line lineX"},null,-1)})),A=X((function(){return Object(n["e"])("div",{class:"line lineY"},null,-1)})),G={class:"searchBox"},K={class:"searchInput"},J={class:"searchList"},$=["onClick"],Q={class:"mapTypeSelectBox"},W=["value"],F={class:"posInput"},H={class:"scaleBtnBox"};function tt(t,e,a,i,o,s){return Object(n["g"])(),Object(n["d"])("div",N,[Object(n["e"])("div",{class:"mapBox",ref:"mapBox",onMousedown:e[0]||(e[0]=function(){return s.onMousedown&&s.onMousedown.apply(s,arguments)})},null,544),q,A,Object(n["e"])("div",G,[Object(n["e"])("div",K,[Object(n["o"])(Object(n["e"])("input",{type:"text",placeholder:"搜索...","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.searchText=t}),onInput:e[2]||(e[2]=function(){return s.onSearch&&s.onSearch.apply(s,arguments)}),onKeyup:e[3]||(e[3]=Object(n["p"])((function(){return s.onSearch&&s.onSearch.apply(s,arguments)}),["enter"])),onClick:e[4]||(e[4]=Object(n["q"])((function(){}),["stop"]))},null,544),[[n["n"],o.searchText]])]),Object(n["e"])("div",J,[(Object(n["g"])(!0),Object(n["d"])(n["a"],null,Object(n["j"])(o.searchResultList,(function(t,e){return Object(n["g"])(),Object(n["d"])("div",{class:"searchItem",key:e,onClick:function(e){return s.go(t.location)}},Object(n["l"])(t.name),9,$)})),128))])]),Object(n["e"])("div",Q,[Object(n["o"])(Object(n["e"])("select",{"onUpdate:modelValue":e[5]||(e[5]=function(t){return o.selectMapType=t}),onChange:e[6]||(e[6]=function(){return s.onSelectMapTypeChange&&s.onSelectMapTypeChange.apply(s,arguments)})},[(Object(n["g"])(!0),Object(n["d"])(n["a"],null,Object(n["j"])(o.mapList,(function(t){return Object(n["g"])(),Object(n["d"])("option",{key:t.value,value:t.value},Object(n["l"])(t.name),9,W)})),128))],544),[[n["m"],o.selectMapType]])]),Object(n["e"])("div",F,[Object(n["o"])(Object(n["e"])("input",{type:"text",placeholder:"经纬度...","onUpdate:modelValue":e[7]||(e[7]=function(t){return o.posValue=t}),onKeyup:e[8]||(e[8]=Object(n["p"])((function(){return s.onChangePos&&s.onChangePos.apply(s,arguments)}),["enter"])),onClick:e[9]||(e[9]=Object(n["q"])((function(){}),["stop"]))},null,544),[[n["n"],o.posValue]])]),Object(n["e"])("div",{class:"backCenterBtn",onClick:e[10]||(e[10]=Object(n["q"])((function(){return s.backCenter&&s.backCenter.apply(s,arguments)}),["stop"]))}),Object(n["e"])("div",H,[Object(n["e"])("div",{class:Object(n["f"])(["scaleBtn in",{disabled:o.zoom>=o.maxZoom}]),onClick:e[11]||(e[11]=Object(n["q"])((function(){return s.zoomIn&&s.zoomIn.apply(s,arguments)}),["stop"]))},null,2),Object(n["e"])("div",{class:Object(n["f"])(["scaleBtn out",{disabled:o.zoom<=o.minZoom}]),onClick:e[12]||(e[12]=Object(n["q"])((function(){return s.zoomOut&&s.zoomOut.apply(s,arguments)}),["stop"]))},null,2)])],512)}var et=a("1da1"),at=(a("96cf"),a("3ca3"),a("ddb0"),a("25f0"),a("a15b"),a("7db0"),a("498a"),a("f1ac")),nt=a("362d"),it=a("a6d4"),ot=function(){function t(e,a){Object(v["a"])(this,t),this.timer=null,this.url=e,this.onload=a,this.called=!1,this.reloadTimes=0,this.load()}return Object(y["a"])(t,[{key:"load",value:function(){var t=this;if(this.reloadTimes>=5)this.called||(this.onload(null),this.called=!0);else{this.reloadTimes++;var e=new Image;e.src=this.url,this.timer=setTimeout((function(){t.load()}),1e3),e.onload=function(){clearTimeout(t.timer),t.called||(t.onload(e),t.called=!0)},e.onerror=function(){t.load()}}}}]),t}(),st=function(){function t(e){var a=e.layer,n=e.row,i=e.col,o=e.zoom,s=e.x,r=e.y,c=e.shouldRender,l=e.getMapTypeData;Object(v["a"])(this,t),this.layer=a,this.row=n,this.col=i,this.zoom=o,this.x=s,this.y=r,this.shouldRender=c,this.getMapTypeData=l,this.urls=[],this.cacheKey=this.row+"_"+this.col+"_"+this.zoom,this.imgs=[],this.opacity=0,this.loaded=!1,this.timer=null,this.fadeInDuration=400,this.createUrl(),this.load()}return Object(y["a"])(t,[{key:"createUrl",value:function(){var t=this,e=this.getMapTypeData();this.urls=e.urls.map((function(a){return S(t.row,t.col,t.zoom,a,{getTileUrl:e.getTileUrl,transformXYZ:e.transformXYZ})}))}},{key:"load",value:function(){var t=this,e=this.urls.map((function(e,a){return new Promise((function(n){new ot(e,(function(e){e&&(t.imgs[a]=new nt["a"].Image({image:e,width:x,height:x,opacity:t.opacity})),n()}))}))}));Promise.all(e).then((function(){t.loaded=!0,t.render()}))}},{key:"render",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];!this.loaded||this.imgs.length<=0||!this.shouldRender(this.cacheKey)||(this.imgs.forEach((function(e){e&&(t.layer.add(e),e.x(t.x).y(t.y))})),e&&0!==this.opacity&&this.hide(),this.fadeIn())}},{key:"fadeIn",value:function(){var t=this;if(!(this.opacity>=1||this.imgs.length<=0)){var e=this.opacity,a=new nt["a"].Animation((function(n){var i=n.time/t.fadeInDuration*1+e;t.opacity=i,t.imgs.forEach((function(t){t&&t.opacity(i)})),i>=1&&a.stop()}),this.layer);a.start()}}},{key:"hide",value:function(){this.imgs.length<=0||(this.opacity=0,this.imgs.forEach((function(t){t&&t.opacity(0)})))}},{key:"updateLayer",value:function(t){return this.layer=t,this}},{key:"updatePos",value:function(t,e){return this.x=t,this.y=e,this}}]),t}(),rt={name:"App",data:function(){return{width:0,height:0,isMousedown:!1,lastMouseTime:null,lastDuration:0,lastDistance:[],tileCache:{},currentTileCache:{},initCenter:[120.148732,30.231006],center:[120.148732,30.231006],zoom:14,minZoom:3,maxZoom:18,lastZoom:0,scale:1,scaleTmp:1,playback:null,stage:null,layer1:null,layer2:null,useLayer1:!0,searchText:"",searchTimer:null,searchResultList:[],translate:[0,0],translateTmp:[0,0],translatePlayback:null,posValue:"",selectMapType:"",selectMapData:null,mapList:[{name:"高德地图",value:"gaode",urls:["https://webrd0{1-4}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8"]},{name:"高德影像图",value:"gaodeImage",urls:["https://webst0{1-4}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&style=6","https://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=8&x={x}&y={y}&z={z}&scl=1&ltype=4"]},{name:"百度地图",value:"baidu",urls:["https://maponline2.bdimg.com/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=pl&scaler=2&udt=&from=jsapi2_0"],origin:"center",axis:["right","top"],resolutions:function(){for(var t=[],e=0;e<=18;e++)t[e]=Math.pow(2,18-e);return t}(),lngLatToMercator:function(t,e){return it["a"].transform([t,e],it["a"].GCJ02,it["a"].BD09MC)},mercatorToLngLat:function(t,e){return it["a"].transform([t,e],it["a"].BD09MC,it["a"].GCJ02)}},{name:"腾讯地图",value:"tx",urls:["https://rt{1-3}.map.gtimg.com/tile?z={z}&x={x}&y={y}&styleid=1&scene=0"],transformXYZ:function(t,e,a){return e=Math.pow(2,a)-e-1,[t,e,a]}},{name:"GeoQ",value:"geoq",urls:["http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}"]},{name:"天地图",value:"tianditu",urls:["http://t{0-7}.tianditu.com/DataServer?T=vec_w&tk=2c009e76130364aaf09aa30ef0621154&x={x}&y={y}&l={z}","http://t3.tianditu.com/DataServer?T=cva_w&tk=2c009e76130364aaf09aa30ef0621154&x={x}&y={y}&l={z}"],transformLngLat:function(t,e){return it["a"].transform([t,e],it["a"].GCJ02,it["a"].WGS84)}},{name:"必应中文",value:"bing",urls:[""],getTileUrl:function(t,e,a){for(var n="",i=0;i<a;i++)n=((1&t)+2*(1&e)).toString()+n,t>>=1,e>>=1;var o=_("http://dynamic.t{0-3}.tiles.ditu.live.com/comp/ch/");return"http://dynamic.t".concat(o,".tiles.ditu.live.com/comp/ch/").concat(n,"?it=G,VE,BX,L,LA&mkt=zh-cn,syr&n=z&og=111&ur=CN")}}]}},watch:{center:function(t){this.posValue=t.join(",")}},created:function(){this.selectMapType=this.mapList[0].value,this.changeMapType()},mounted:function(){var t=this;return Object(et["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.init(),t.renderTiles(),window.addEventListener("mousemove",t.onMousemove),window.addEventListener("mouseup",t.onMouseup),window.addEventListener("wheel",t.onMousewheel);case 5:case"end":return e.stop()}}),e)})))()},beforeUnmount:function(){window.removeEventListener("mousemove",this.onMousemove),window.removeEventListener("mouseup",this.onMouseup),window.removeEventListener("wheel",this.onMousewheel)},methods:{onSelectMapTypeChange:function(){this.changeMapType(),this.tileCache={},this.currentTileCache={},this.clearLayer(),this.renderTiles()},changeMapType:function(){var t=this;this.selectMapData=this.mapList.find((function(e){return e.value===t.selectMapType}))},init:function(){var t=this.$refs.mapBox.getBoundingClientRect(),e=t.width,a=t.height;this.width=e,this.height=a,this.stage=new nt["a"].Stage({container:this.$refs.mapBox,width:e,height:a}),this.layer1=new nt["a"].Layer,this.layer1.x(this.width/2).y(this.height/2),this.stage.add(this.layer1),this.layer2=new nt["a"].Layer,this.layer2.x(this.width/2).y(this.height/2),this.stage.add(this.layer2)},renderTiles:function(){var t,e=this,a=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this.center;this.selectMapData.transformLngLat&&(n=(t=this.selectMapData).transformLngLat.apply(t,Object(f["a"])(this.center)));var i={origin:this.selectMapData.origin,resolutions:this.selectMapData.resolutions,lngLatToMercator:this.selectMapData.lngLatToMercator},o=D.apply(void 0,Object(f["a"])(n).concat([this.zoom,i])),s=[o[0]*x,o[1]*x],r=P.apply(void 0,Object(f["a"])(n).concat([this.zoom,i])),c=[r[0]-s[0],r[1]-s[1]],l=Math.ceil((this.width/2-c[0])/x),h=Math.ceil((this.height/2-c[1])/x),u=Math.ceil((this.width/2-(x-c[0]))/x),p=Math.ceil((this.height/2-(x-c[1]))/x),d=!!this.selectMapData.axis&&"top"===this.selectMapData.axis[1];this.currentTileCache={};for(var m=-l;m<=u;m++)for(var v=-h;v<=p;v++){var y=o[0]+m,b=o[1]+v,g=v;d&&0!==v&&(g=-v);var M=m*x-c[0],w=g*x-(d?x-c[1]:c[1]),O=y+"_"+b+"_"+this.zoom;this.currentTileCache[O]=!0;var j=this.getCurrentMainLayer();this.tileCache[O]?this.tileCache[O].updateLayer(j).updatePos(M,w).render(a):this.tileCache[O]=new st({layer:j,row:y,col:b,zoom:this.zoom,x:M,y:w,shouldRender:function(t){return e.currentTileCache[t]},getMapTypeData:function(){return e.selectMapData}})}},clearLayer:function(){this.layer1.removeChildren(),this.layer2.removeChildren()},resetLayer:function(){var t=this.getCurrentMainLayer(),e=this.useLayer1?this.layer2:this.layer1;e.scale({x:1,y:1}),e.x(this.width/2).y(this.height/2),e.removeChildren(),t.zIndex(0),e.zIndex(1)},onMousedown:function(t){1===t.which&&(this.isMousedown=!0)},onMousemove:function(t){if(this.isMousedown){var e=Date.now();this.lastMouseTime&&(this.lastDuration=e-this.lastMouseTime,this.lastDistance=[t.movementX,t.movementY]),this.lastMouseTime=e;var a=t.movementX*(this.selectMapData.resolutions||C)[this.zoom],n=t.movementY*(this.selectMapData.resolutions||C)[this.zoom],i=(this.selectMapData.lngLatToMercator||O).apply(void 0,Object(f["a"])(this.center)),o=Object(m["a"])(i,2),s=o[0],r=o[1];this.center=(this.selectMapData.mercatorToLngLat||j)(s-a,n+r),this.clearLayer(),this.renderTiles()}},onMouseup:function(){this.isMousedown=!1,this.momentum()},momentum:function(){var t=this;if(this.lastDuration<=0)this.resetTranslate();else{var e=this.lastDistance[0]/this.lastDuration,a=this.lastDistance[1]/this.lastDuration;Math.abs(e)<=.3&&Math.abs(a)<=.3?this.resetTranslate():(this.translate=[this.translateTmp[0]+e/.005,this.translateTmp[1]+a/.005],this.resetLayer(),this.translatePlayback&&this.translatePlayback.stop(),this.translatePlayback=Object(b["a"])({from:this.translateTmp.join(" "),to:this.translate.join(" "),ease:at["b"],duration:300+(Math.abs(e)+Math.abs(a))/2*100,onUpdate:function(e){t.translateTmp=t.stringValueToArray(e);var a=t.getCurrentMainLayer();a.x(t.width/2+t.translateTmp[0]).y(t.height/2+t.translateTmp[1])},onComplete:function(){var e=t.translate[0]*(t.selectMapData.resolutions||C)[t.zoom],a=t.translate[1]*(t.selectMapData.resolutions||C)[t.zoom],n=(t.selectMapData.lngLatToMercator||O).apply(void 0,Object(f["a"])(t.center)),i=Object(m["a"])(n,2),o=i[0],s=i[1];t.center=(t.selectMapData.mercatorToLngLat||j)(o-e,a+s),t.useLayer1=!t.useLayer1,t.resetTranslate(),t.hideTiles(),t.renderTiles()}}))}},onMousewheel:function(t){t.deltaY>0?this.zoomOut():this.zoomIn()},zoomIn:function(){this.scaleMap(!0)},zoomOut:function(){this.scaleMap(!1)},scaleMap:function(t){var e=this;t?this.zoom<this.maxZoom&&this.zoom++:this.zoom>this.minZoom&&this.zoom--,this.lastZoom!==this.zoom&&(this.lastZoom=this.zoom,this.scale*=!t>0?.5:2,this.playback&&this.playback.stop(),this.resetLayer(),this.playback=Object(b["a"])({from:this.scaleTmp,to:this.scale,duration:500,onUpdate:function(t){e.scaleTmp=t;var a=e.getCurrentMainLayer();a.scale({x:t,y:t})},onComplete:function(){e.useLayer1=!e.useLayer1,e.scale=1,e.scaleTmp=1,e.renderTiles(!0)}}))},onSearch:function(){var t=this;clearTimeout(this.searchTimer),this.searchTimer=setTimeout((function(){t.searchText.trim()?fetch("https://restapi.amap.com/v3/assistant/inputtips?key=".concat(Z,"&keywords=").concat(t.searchText.trim())).then((function(t){return t.json()})).then((function(e){t.searchResultList=e.tips||[]})):t.searchResultList=[]}),300)},go:function(t){var e=this;if(!this.translatePlayback){"string"===typeof t&&(t=t.split(",").map((function(t){return Number(t)})));var a=(this.selectMapData.lngLatToMercator||O).apply(void 0,Object(f["a"])(t)),n=(this.selectMapData.lngLatToMercator||O).apply(void 0,Object(f["a"])(this.center));this.translate=[(a[0]-n[0])/(this.selectMapData.resolutions||C)[this.zoom],(a[1]-n[1])/(this.selectMapData.resolutions||C)[this.zoom]],this.resetLayer(),this.translatePlayback=Object(b["a"])({from:this.translateTmp.join(" "),to:this.translate.join(" "),duration:1e3,onUpdate:function(t){e.translateTmp=e.stringValueToArray(t);var a=e.getCurrentMainLayer();a.x(e.width/2-e.translateTmp[0]).y(e.height/2+e.translateTmp[1])},onComplete:function(){e.center=t,e.useLayer1=!e.useLayer1,e.resetTranslate(),e.hideTiles(),e.renderTiles()}})}},resetTranslate:function(){this.translatePlayback=null,this.translateTmp=[0,0],this.translate=[0,0],this.lastMouseTime=null,this.lastDuration=0,this.lastDistance=[]},hideTiles:function(){var t=this;Object.keys(this.tileCache).forEach((function(e){t.currentTileCache[e]||t.tileCache[e].hide()}))},stringValueToArray:function(t){return t.split(" ").map((function(t){return Number(t)}))},getCurrentMainLayer:function(){return this.useLayer1?this.layer1:this.layer2},backCenter:function(){this.go(this.initCenter)},onChangePos:function(){this.go(this.posValue)}}};a("8503");const ct=B()(rt,[["render",tt],["__scopeId","data-v-76357bd4"]]);var lt=ct,ht={components:{New:lt,Old:Y},data:function(){return{comp:"New"}}};a("c64c");const ut=B()(ht,[["render",r],["__scopeId","data-v-7fb52170"]]);var pt=ut;Object(n["b"])(pt).mount("#app")},8503:function(t,e,a){"use strict";a("2546")},"9fc3":function(t,e,a){"use strict";a("5352")},c64c:function(t,e,a){"use strict";a("e472")},e472:function(t,e,a){}});
//# sourceMappingURL=app.052cb6e1.js.map