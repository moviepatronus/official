(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
function e(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var d=Object.prototype.toString.call(a);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null"; 
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};var f=document,g=window;function h(a,b,d){if("array"==e(b))for(var c=0;c<b.length;c++)h(a,String(b[c]),d);else null!=b&&d.push(a+(""===b?"":"="+encodeURIComponent(String(b))))};function k(a,b,d){a.addEventListener&&a.addEventListener(b,d,!1)};function l(){var a=m.url,b=m["gws-id"],d=m["qem-id"];n(f.hidden)?(this.a="hidden",this.f="visibilitychange"):n(f.mozHidden)?(this.a="mozHidden",this.f="mozvisibilitychange"):n(f.msHidden)?(this.a="msHidden",this.f="msvisibilitychange"):n(f.webkitHidden)&&(this.a="webkitHidden",this.f="webkitvisibilitychange");this.g=a;this.b=!1;this.c=-1;this.h=b;this.i=d;f[this.a]&&p(this,2);q(this);r(this)} 
function q(a){k(f,a.f,function(){if(f[a.a])a.b&&(a.b=!1,a.c=Date.now(),p(a,0));else{if(-1!=a.c){var b=Date.now()-a.c;0<b&&(a.c=-1,p(a,1,b))}p(a,3)}})}function r(a){k(g,"click",function(b){return a.handleClick(b)})}l.prototype.handleClick=function(){var a=this;this.b=!0;g.setTimeout(function(){a.b=!1},5E3)}; 
function p(a,b,d){var c={gqid:a.h,qqid:a.i};0==b&&(c["return"]=0);1==b&&(c["return"]=1,c.timeDelta=d);2==b&&(c.bgload=1);3==b&&(c.fg=1);b=[];for(var u in c)h(u,c[u],b);a=a.g+"&label=window_focus&"+b.join("&");g.google_image_requests||(g.google_image_requests=[]);c=g.document.createElement("img");c.src=a;g.google_image_requests.push(c)}function n(a){return"undefined"!==typeof a};var t,v=document.currentScript;t=(v=void 0===v?null:v)&&22==v.getAttribute("data-jc")?v:f.querySelector('script[data-jc="22"]');if(null==t)throw Error("JSC not found 22");for(var m={},w=t.attributes,x=w.length-1;0<=x;x--){var y=w[x].name;0===y.indexOf("data-jcp-")&&(m[y.substring(9)]=w[x].value)}window.window_focus_for_click=new l;}).call(this);
