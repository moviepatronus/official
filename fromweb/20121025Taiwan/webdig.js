var ROOTDM=[".ahhaoren.cn",".anhuinews.com",".anhuiu.com",".zacw.com.cn",".bjd.com.cn",".beijingdaily.com.cn",".farmer.com.cn",".jwb.cn",".jwb.com.cn",".xn--wmq578c2ur.com",".xn--wmqx79blvc.com",".xn--wmqzhp93awzl.com",".voc.com.cn",".cctv.com",".cctv.com.cn",".cntv.cn",".cntv.cn",".jcrb.com",".jcy.gov.cn",".jxcn.cn",".tibet.cn",".tibet.cn:8080",".tibetculture.net",".tibetculture.org.cn",".zyxgjfxy.cn",".ctibet.org.cn",".xztzb.gov.cn",".china.cn",".china.com.cn",".china.iqiyi.com",".china.org.cn",".chinagate.cn",".open.letv.com",".scio.gov.cn",".ybtop.com",".tianshannet.com.cn",".btv.org",".tianshannet.com",".cross-straits.com",".btv.com.cn",".chinataiwan.org",".taiwan.cn",".dl8.tw",".31t.tw",".acsme.org.cn",".jsstb.gov.cn",".ht31t.com",".baihuwang.com",".hf365.com",".js.jcy.gov.cn",".jscado.gov.cn",".jschina.com.cn",".jsdjt.com.cn",".jsgjzx.com.cn",".jswmw.com",".jsyhkf.com",".xhby.net",".yangtse.com",".yzwb.net",".zgjssw.gov.cn",".zgwcsj.com",".zjwcw.com",".frjs.gov.cn",".jsllzg.cn",".jsrd.gov.cn",".jsdj.gov.cn",".jsthinktank.com",".jsjc.gov.cn",".jsia.org.cn"],RECENDM=[],INCLUDESUBHOST=["www.china.com.cn","www.chinataiwan.org","www.btv.com.cn","www.btv.org","enews.jxcn.cn","www.tianshannet.com","www.sznews.com","www.ybtop.com","www.bjd.com.cn","www.baihuwang.com","www.hf365.com","www.farmer.com.cn","ent.cntv.cn","www.voc.com.cn","www.tibet.cn","www.jwb.com.cn","www.anhuinews.com","www.jschina.com.cn","www.yangtse.com","www.yzwb.net","www.xhby.net","www.jcrb.com"],SHOWERRHOST=1,_wdUID='12',_wecl='//cl0.webterren.com/1.gif',_wdVersion={ WD: 1566787479 };//12
var _webdigObj = {};
_webdigObj.pro = function() {
if(document.getElementById("webdig_source"))
	if(navigator.userAgent.toLowerCase().indexOf("firefox")>=0)
		_webdigObj.source=(document.getElementById("webdig_source").textContent+"").trim();
	else
		_webdigObj.source=(document.getElementById("webdig_source").innerText+"").trim();
if(_webdigObj.getMeta("author")=="" && location.href.indexOf("jwb.com.cn") >= 0){
	var bodyText=document.body.innerText;
	var p = bodyText.indexOf("\u3010\u7f16\u8f91\uff1a");
	var tmp = bodyText.substring(p+4);
	var p = tmp.indexOf("\u3011");
	_webdigObj.author = tmp.substring(0,p);
}

if((!_webdigObj.catalogs&&!_webdigObj.subject)||_webdigObj.subject==";1"){
    _webdigObj.params = {};
		_webdigObj.params.reg = {};
		_webdigObj.params.reg.html = "<nodeid>(\\d+)</nodeid>";           
  
    var re = new RegExp(_webdigObj.params.reg.html, "ig"); 
     var arr = re.exec(document.body.innerHTML.replace(/\n/g,"").replace(/\r/g,""));
    
    if(RegExp.$1){
    if(_webdigObj.subject==";1")
    	_webdigObj.subject=RegExp.$1
    else
    	_webdigObj.catalogs=RegExp.$1
    }
}
};
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('A 1q(){}A 1M(){}A R(a){G a=O 3t(a),S(a)}A 2G(a){N(J c,b="",d=7;d>=0;d--)c=15&a>>>4*d,b+=c.2h(16);G b}A 2W(a){J b,c,d,e;I(!a||""==a)G 1;N(b=4D,c=4B,d=0;d<a.K;d++)e=2K(a.4A(d)),b=(b<<6|c>>>26)+(b<<16|c>>>16)-b,c=4E&e+(c<<6)-c+(c<<16);G 2G(4I&b)+2G(c)}A 3h(){G 2W(C.Z+C.1b+C.3z+14.1E())}A 2t(a){J b=1n,c=C.1b,d=c.F(a);G-1!=d&&(d+=a.K+1,a=c.F(";",d),-1==a&&(a=c.K),b=c.3C(d,a)),b}A 3d(){J c,d,a="",b=11;I(b.1I&&b.1I.K){N(c=0;c<b.1I.K;c++)I(-1!=b.1I[c].1N.F("31 32")){a=b.1I[c].5e.5d("31 32 ")[1];28}}2k I(L.37)N(c=10;c>=2;c--)1k{I(d=57("O 37(\'2S.2S."+c+"\');")){a=c+".0";28}}1h(e){}G a}A 3f(a){a=2J+a,1O=O 2l(1,1),1O.2d=a,1O.2N=1M,1==1F&&(1J=O 2l(1,1),a=a.1d("3K.2e.1a","3O.2e.1a"),1J.2d=a,1J.2N=1M)}A 44(a){I(1L(),a&&""!=a){J b=M;0!=a.3W().F("2p")&&(a=1Y+"//"+V+a),M=a,P=b}1P()}A 42(a){1L(),a&&""!=a&&(M=1Y+"//"+V+a),1P()}A 2M(a){J c,b=C.1G("1x");N(c 3E b)I(b[c].1N==a)G b[c].3u}A 2Q(){1k{v.23&&v.23.1o&&(M+=-1==M.F("?")?"?":"&",M+="1o="+v.23.1o);J a=2M("1u");a&&""!=a&&(a=R(a),M+=-1==M.F("?")?"?":"&",M+="41="+a)}1h(b){}}A 2H(a){M=L.Z.1e,14=O 2o,1L(),2Q(),a&&""!=a&&(M=-1==M.F("?")?M+"?"+a:M+"&"+a);J b=v.35;b&&""!=b&&(M+=-1==M.F("?")?"?"+b:"&"+b),1P()}A 1L(){I("4l:"!=C.Z.2Y){I(C.2T?2b=R(C.2T):C.2O&&(2b=R(C.2O)),1v&&1n!=1v&&0!=1v.K){N(i=0;i<1v.K;i++)I(1v[i]&&V&&-1!=1v[i].F(V)){1c="0";28}}2k 1c="0";I("1"!=1c||1n==3n||1==3n){I("1"==1c&&1q(""),1t&&1n!=1t&&0!=1t.K&&V&&""!=V)N(i=0;i<1t.K;i++)-1!=V.F(1t[i])&&(1j=1t[i]);1q("P="+P),P&&""!=P?(r=P.F(C.3g),r>=0&&8>=r||0==P.F("[")&&P.4f("]")==P.K-1&&(P="")):P="",1q("P="+P),1q("12="+12),1q("1C="+1C),1l&&(25=2K(12.4e(12.F("3N")+5))),1l&&25>=5&&(C.19.3q("#3r#4g"),21=C.19.4h,C.19.3q("#3r#4d"),1V=C.19.4c(Z.1e)?"1":"0");1k{1l&&(1D=C.48)}1h(a){1D=0}2c=3d(),1W=(O 2o).49()/-4a,"13"!=U 17&&1n!=17&&(3b=17.2w,39=17.4b,2v=17.4j,3c=3b+"x"+39,1T&&1z>=4&&(2v=17.4s)),(1T&&1z>=4||24)&&(1H=11.4u),1l&&1z>=4&&!24&&(1H=11.4v),1U=1==11.4w()?"1":"0",11.3a&&(1m=1==11.3a?"1":"0"),1==1m&&3j()}}}A 3j(){J a=C.1b,b=a.F("1Q=");I(0>b){I(1A="0",1g=3h(),b="",1j&&""!=1j&&(b="3g="+1j+";"),C.1b="1Q="+S(1g)+";"+1X+b+"3i=/;",C.1b.F("1Q=")<0)G 1m=0,3o 0}2k 1A="1",1g=2t("1Q");b=C.1b.F("2u="),0>b?1i=0:(1i=2K(2t("2u")),14.1E()/2y-1i<2I&&(1R="0")),C.1b="2u="+4x.3Y(14.1E()/2y)+";"+1X+"3i=/;"}A 1P(){3e="0"==1m?2n()+2F():2n()+3k()+2F(),3f(3e)}A 2n(){G"?z="+3D+"&a="+14.1E().2h(16)+"&b="+R(2E)+"&B="+2b+"&c="+R(M)+"&d="+R(P)+"&e="+1V+"&f="+1D+"&H="+R(V)+"&E="+1c}A 2F(){G"&i="+R(1H)+"&j="+1U+"&k="+3c+"&l="+2v+"&m="+2c+"&n="+R(21)+"&o="+1W}A 3k(){G"&r="+1g+"&s="+1A+"&t="+1i+"&u="+1R}J v,s,2a,2C,3x,1O,1J,1X,1m,1U,1V,2c,1W,1H,21,1D,1c,2E,2b,M,V,1j,P,12,1C,17,1z,1T,3R,1l,24,25,1g,1A,1i,1R,14,1F,1S,i,2I;N(3t.3l.3v=A(){J a=/^\\s+|\\s+$/g;G A(){G 1f.1d(a,"")}}(),v=v||{},v.1x=C.1G("1x"),v.Q=A(a){J c,b=v.1x;I(b)N(c=0;c<b.K;c++)I(b[c].1N==a)G b[c].3u.3v();G""},v.1y=v.Q("1y"),v.18=v.Q("18"),v.1s=v.Q("1s"),v.22=v.Q("22"),v.1r=v.Q("1r"),v.1p=v.Q("1p"),v.1u=v.Q("1u"),v.1w=v.Q("1w"),v.27=v.Q("27"),v.1Z=v.Q("1Z"),v.20=v.Q("20"),v.23=A(){J b,c,d,e,f,g,h,a=v.Q("1u");I(-1!=a.F("4o")){I(b=O 2X,b.4H=v.Q("5g"),c=C.Z.1e,-1!=c.F("3m=4y")&&-1==c.F("&1o=")&&(b.3m=!0,d=C.52("55")))N(e=d.56,f=["1o=([0-9]+)","([0-9]+)-[0-9]+-[0-9]+"],g=0;g<f.K;g++)I(h=O 29(f[g]),h.33(e)){b.1o=29.$1;28}G b}G 3o 0}(),""==v.1s&&"13"!=U 38&&(v.1s=38),""==v.1r&&"13"!=U 3p&&(v.1r=3p),""==v.1p&&"13"!=U 3w&&(v.1p=3w),""==v.1y&&"13"!=U 34&&(v.1y=34),""==v.18&&"13"!=U 2U&&(v.18=2U),""==v.1w&&"13"!=U 2R&&(v.1w=2R),v.18.51(/\\D/)&&(s="2p://[^2A]*2A(\\\\d+)(|2A\\\\d*).2L.?$",2a="",2a=Z.1e.1d("2z.2L","").1d("2z.58","").1d("2z.5f",""),2C=O 29(s,"5a"),3x=2C.33(2a),v.18=29.$1),v.2V=v.4X||A(){},v.2V(),v.35=A(){J a="";G a="4Y="+S(v.1y)+"&",v.22&&(a+="4J="+S(v.22)+"&"),a+="4F="+S(v.1s?v.1s:0)+S(v.1r?v.1r:0)+S(v.1p?v.1p:0)+"&",v.1u&&(a+="4z="+S(v.1u)+"&"),v.1Z&&(a+="4C="+S(v.1Z)+"&"),v.18&&(a+="4K="+S(v.18)+"&"),v.1w&&(a+="4L="+S(v.1w)+"&"),v.27&&(a+="4U="+S(v.27)+"&"),v.20&&(a+="4W="+S(v.20)+"&"),a}(),1Y=Z.2Y.F("2Z")>-1?"2Z:":"2p:",2J=1Y+4Q,1X="4P=4O, 1 4M 4N 2r:2r:2r 4T;",1m="0",1U="0",1V="0",2c=0,1W=0,1H="",21="",1D=0,1c="1",2E=""==C.3F?Z.1e:C.3F,M=L.Z.1e,V=L.Z.59,1j="",P=C.3z,12=11.50+" "+11.3B,1C=11.3s,17=L.2i,1z=11.3B.3C(0,1),1T=-1!=12.F("54")?!0:!1,3R=-1!=12.F("5c")?!0:!1,1l=-1!=12.F("3N")?!0:!1,24=-1!=1C.F("40")?!0:!1,25=0,1A="0",1i=0,1R="1",14=O 2o,1F=0,1S=O 36(".1K.1B",".1K.1a.1B",".1K.3Z.1a",".1K.45.1B",".3T.1B",".3U.3V.1a",".4p.46.1B"),i=0;i<1S.K;i++)V.F(1S[i])>=0&&(1F=1);L.4m=1M,2I=4q,A(){A a(a){4r(a[0]){4t"2H":2H(a[1])}}A h(){J b,a=C.1G("1x");N(b=0;b<a.K;b++)I("47"==a[b].1N&&0!=a[b].3P&&"4i"!=a[b].3P)G!0}A k(a){J d,b={z:3D,a:14.1E().2h(16),c:R(L.Z.1e),d:R(a),k:g,H:R(V),r:1g},c="";N(d 3E b)c+="&"+d+"="+b[d];d=2J.1d("1.3H","3.3H")+"?"+c.3M(1),2P=O 2l(1,1),2P.2d=d,1==1F&&(3S=O 2l(1,1),d=d.1d("3K.2e.1a","3O.2e.1a"),3S.2d=d)}A l(a){J c,d,b=L.43;"2g"!=U b&&(b="2x"==C.2s?C.2q.3Q:C.19.3Q),c=L.4k,"2g"!=U c&&(c="2x"==C.2s?C.2q.3I:C.19.3I),d=L.4n,"2g"!=U d&&(d="2x"==C.2s?C.2q.3y:C.19.3y),1f.x=c+a.3A,1f.y=d+a.3L,1f.w=b}A m(a,b){J c=O l(a);b&&(c.x=a.3A+b.x,c.y=a.3L+b.y),d.K>10?o():d.2D(c)}A n(a){J c,d,b="";N(c=0;c<a.K;c++)d=a[c],b+=d.x+"*"+d.y+"*"+d.w+",";G b.3M(0,b.K-1)}A o(){I(d.K>0){J a=n(d.3X(0,d.K));k(a)}}A p(){J c,a=q("53"),b=A(a){G A(b){m(b,a)}};I(L.2f)N(C.2f("3J",A(a){m(a)},!0),L.2f("4Z",A(){o()},!0),c=0;c<a.K;c++)1k{a[c].2B.C.2f("3J",b(a[c].T),!0)}1h(d){}2k I(L.2j)N(C.2j("3G",A(a){m(a)}),L.2j("5b",A(){o()}),c=0;c<a.K;c++)1k{a[c].2B.C.2j("3G",b(a[c].T))}1h(d){}4G(o,2y*f)}A q(a,b,c){J e,f,h,i,d=b;d||(d=[]),e=0;1k{f=c?c.2B.C.1G(a):C.1G(a),e=f.K}1h(g){e=0}N(h=0;e>h;h++)i=r(f[h]),c&&c.T&&(i.x+=c.T.x,i.y+=c.T.y),f[h].T=i,d.2D(f[h]),q(a,d,f[h]);G d}A r(a){T=O 2X,T.x=0,T.y=0;N(J b=a;1n!=b&&b!=C.19;)T.x+=b.4R,T.y+=b.4S,b=b.4V;G T}J b,c,d,f,g;I("13"!=U 2m){N(L[2m].q=L[2m].q||[],b=L[2m].q,c=0;c<b.K;c++)a(b[c]);b.2D=A(b){a(b)}}d=O 36,f=30,g=0,L.2i&&"2g"==U L.2i.2w&&(g=L.2i.2w),L.3s,l.3l.2h=A(){G"X: "+1f.x+", Y:"+1f.y+", W:"+1f.w},h()&&p()}();',62,327,'|||||||||||||||||||||||||||||||_webdigObj|||||function||document|||indexOf|return||if|var|length|window|_wdSL|for|new|_wdRP|getMeta|fesc|escape|position|typeof|_wdHost||||location||navigator|_wdUA|undefined|curtime|||_wdWS|contentid|body|com|cookie|_wdErr|replace|href|this|_wdCID|catch|_wdLS|_wdRDM|try|_wdIE|_wdCK|null|tid|pagetype|println|publishedtype|filetype|ROOTDM|author|INCLUDESUBHOST|publishdate|meta|catalogs|_wdBV|_wdBCID|cn|_wdRUA|_wdFS|getTime|_wdFW|getElementsByTagName|_wdLG|plugins|Bimg|china|setup_data|_wdEC|name|Aimg|write_ref|wdcid|_wdTO|DOMS|_wdNN|_wdJE|_wdHP|_wdTZ|_wdED|_wdLP|editor|dept|_wdCT|subject|discuz|_wdOP|_wdIEV||source|break|RegExp|str|_wdCS|_wdFl|src|webterren|addEventListener|number|toString|screen|attachEvent|else|Image|_wd_o|getGeneralInfo|Date|http|documentElement|00|compatMode|getCookie|wdlast|_wdCD|width|CSS1Compat|1e3|index|_|contentWindow|re|push|_wdDT|getLocalInfo|wdhex|wd_paramtracker|_wdTimeOut|_wdCA|parseInt|htm|getmetaContents|onload|charset|refImg|setup_metadata|tmp_publishdate|ShockwaveFlash|characterSet|tmp_contentid|sec|wdHash|Object|protocol|https||Shockwave|Flash|exec|tmp_catalogs|url|Array|ActiveXObject|tmp_filetype|_wdSH|cookieEnabled|_wdSW|_wdSR|wdFlash|_dgURL|send_ref|domain|wdGenCID|path|setup_cookie|getCookieInfo|prototype|submit|SHOWERRHOST|void|tmp_publishedtype|addBehavior|default|userAgent|String|content|trim|tmp_pagetype|arr|scrollTop|referrer|clientX|appVersion|substring|_wdUID|in|title|onclick|gif|scrollLeft|click|cl0|clientY|slice|MSIE|cl|value|clientWidth|_wdMC|refImg2|chinagate|open|letv|toLowerCase|splice|round|iqiyi|Opera|_wdmd|wd_reptracker|innerWidth|wd_tracker|org|gov|uctk|fileSize|getTimezoneOffset|60|height|isHomePage|homePage|substr|lastIndexOf|clientCaps|connectionType|disabled|colorDepth|pageXOffset|file|onerror|pageYOffset|Discuz|scio|1800|switch|pixelDepth|case|language|userLanguage|javaEnabled|Math|yes|_wda|charCodeAt|4023233417|_wda2|1732584193|4294967295|_wdt|setInterval|version|2147483647|_wds|_wdci|_wdp|Jan|2038|Fri|expires|_wecl|offsetLeft|offsetTop|GMT|_wdori|offsetParent|_wddp|pro|_wdc|unload|appName|match|getElementById|iframe|Netscape|messagetext|innerHTML|eval|html|host|ig|onbeforeunload|Mac|split|description|jsp|generator'.split('|'),0,{}))