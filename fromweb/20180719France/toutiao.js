(function(){
		var url=window.location.href;
		if(/Android|webOS|iPhone|Windows Phone|iPod|BlackBerry|SymbianOS/i.test(navigator.userAgent)){
			if(url.indexOf("?pc")<0){
				try{
					document.write('<div><div id="toutiao_container"></div></div><script async src="http://www.dzwww.com/js/dzwww.min.js" ignoreapd="1" charset="utf-8"></script><script>(readsByToutiao = window.readsByToutiao || []).push({id:"toutiao_container"})</script>');
				}catch(e){}
			}
		}		
	})();
