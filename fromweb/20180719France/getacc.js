// 天润统计开始  liucy 2013-1-15
document.write(unescape("%3Cscript id='tr_statobj' src='//cl2.webterren.com/webdig.js?z=19' type='text/javascript'%3E%3C/script%3E"));

var obj=document.getElementById("tr_statobj");
if(window.ActiveXObject){
	run();
}
else
{
	document.write(unescape("%3Cscript type='text/javascript'%3E wd_paramtracker('_wdxid=000000000000000000000000000000000000000000');%3C/script%3E"));

}
function run(){
	if(obj.readyState=='complete'){
		wd_paramtracker('_wdxid=000000000000000000000000000000000000000000');
	}
	else{
		window.setTimeout(run,50);
	}
}
// 天润统计结束
 

	(function(){
		var canonicalURL, curProtocol;
		//Get the  tag
		var x=document.getElementsByTagName("link");
		//Find the last canonical URL
		if(x.length > 0){
			for (i=0;i<x.length;i++){
				if(x[i].rel.toLowerCase() == 'canonical' && x[i].href){
					canonicalURL=x[i].href;
				}
			}
		}
		//Get protocol
	    if (!canonicalURL){
	    	curProtocol = window.location.protocol.split(':')[0];
	    }
	    else{
	    	curProtocol = canonicalURL.split(':')[0];
	    }
	    //Get current URL if the canonical URL does not exist
	    if (!canonicalURL) canonicalURL = window.location.href;
	    //Assign script content. Replace current URL with the canonical URL
    	!function(){var e=/([http|https]:\/\/[a-zA-Z0-9\_\.]+\.baidu\.com)/gi,r=canonicalURL,t=document.referrer;if(!e.test(r)){var n=(String(curProtocol).toLowerCase() === 'https')?"https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif":"//api.share.baidu.com/s.gif";t?(n+="?r="+encodeURIComponent(document.referrer),r&&(n+="&l="+r)):r&&(n+="?l="+r);var i=new Image;i.src=n}}(window);})();

// var _hmt = _hmt || []; 20190326wujianzhushi
// (function() {
//   var hm = document.createElement("script");
//   hm.src = "//hm.baidu.com/hm.js?f9f00422e358e536c9180a0441979ef8";
//   hm.ignoreapd='1';
//   var s = document.getElementsByTagName("script")[0]; 
//   s.parentNode.insertBefore(hm, s);
// })();
