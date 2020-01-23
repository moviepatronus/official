var initial_fontsize = parseInt($('.TRS_Editor').css('fontSize'));
var initial_lineheight = parseInt($('.TRS_Editor').css('lineHeight'));
function setFontsize(type, objname) {
	var whichEl = document.getElementsByClassName('TRS_Editor')[0].children;
  if (type == 1) {
	if (initial_fontsize < 64) {
	  for (var i = 0; i < whichEl.length; i++) {
		if (whichEl[i] != null) {
		  whichEl[i].style.fontSize = (++initial_fontsize) + 'pt';
		  whichEl[i].style.lineHeight = (++initial_lineheight) + 'pt';
		  initial_fontsize--;
		  initial_lineheight--;
		}
	  }
	  initial_fontsize++;
	  initial_lineheight++;
	}
  } else {
	if (initial_fontsize > 8) {
	  for (var i = 0; i < whichEl.length; i++) {
		if (whichEl[i] != null) {
		  whichEl[i].style.fontSize = (--initial_fontsize) + 'pt';
		  whichEl[i].style.lineHeight = (--initial_lineheight) + 'pt';
		  initial_fontsize++;
		  initial_lineheight++;
		}
	  }
	  initial_fontsize--;
	  initial_lineheight--;
	}
  }
}

document.write('<script type="text/javascript" src="//cbjs.baidu.com/js/m.js"></script>');
//document.write('<script type="text/javascript" class="teads" src="//a.teads.tv/page/97687/tag" async="true"></script>');
document.write('<script type="text/javascript" src="//cdnad.dzwww.com/js/ssp/ms_ssp_ad.js"></script>');
//���
	/* 2018-11-06 liucyע��
document.write('<div id="hl-RelationDiv"></div>');
document.write('<script language="javascript" src="https://www.dzwww.com/data/hl/hylanda.js" charset="GBK"></script>');
document.write('<script language="javascript" src="https://www.dzwww.com/data/hl/prolongation.js" charset="GBK"></script>');
document.write('<script language="javascript" src="https://www.dzwww.com/data/hl/HLTagLabel.js" charset="GBK"></script>');
document.write('<script language="javascript" src="https://www.dzwww.com/data/hl/navigation.js" charset="GBK"></script>');
document.write('<script language="javascript" src="https://www.dzwww.com/data/hl/floatbox.js" charset="GBK"></script>');
 
// ����������
if( !window.hylandarivers ) 
{
	 window.hylandarivers = new function ()
 {
	//debugģʽ
		this.isDebug = true ;
	//ð���ַ���
		var colon = ":";
		
	//����������Ϣ******************************************************************
	/*
		�Ƿ���������ƥ��
		��ʹ��������ƥ��ʱ����Ҫ�޸� User_More_Statistic_Structure
		�������������
	/
		this. isAutoDomain = false;
		
		
		//�������û������ݽṹ
	this. User_More_Statistic_Structure=
	{

	/*
		����A 
		isAutoDomainΪtrue��
		��Ҫ�޸�currentΪָ��������ֵ
		��������ȷƥ
		������ֻ�轫����Ľṹ����һ�ݼ���
		�м���Ӣ�ĵĶ��Ÿ������
	/
	"current" :
				{
					 Statistic_Structure:
					 {
						//����
							batch : "1" ,
						//ê��
							anchor : "1" ,
						//�����Ķ�
							prolongation : "1",
						//���ܵ���
							navigation : "1"
						//��ữ����
						//	community :"1" ,
					},
				        //���������
					sid: {user:"9",admin:"9"},
					//�û�id�͹���Աid
					uid:{user:"4387044",admin:"4387101"},
					//domain:"test001.hylanda.com",
					qsite:"site"+colon+"dzwww.com"+"+"
				}
				
	}
	
//����������Ϣ����******************************************************************		
		
		
	//ģ��·��
		this. moduleURL="https://www.dzwww.com/data/hl/";
	//�������ļ���
		var loadFile="https://www.dzwww.com/data/hl/hylanda.js";
		var ScriptCharSet="utf-8";

	//���ط���
		var readyBound = false;
		this.onReady = function onReady(fn)
		{	
			if ( readyBound ) return;
			readyBound = true;
			var Variant ="HylandaLoad.onReady(" + fn + ")";
			// Mozilla, Opera and webkit nightlies currently support this event
			if ( document.addEventListener ) {
				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", function(){
					document.removeEventListener( "DOMContentLoaded", arguments.callee, false );
					fn();
				}, false );
			} else if ( document.attachEvent ) {
				document.attachEvent("onreadystatechange", function(){
					if ( document.readyState === "complete" ) {
						document.detachEvent( "onreadystatechange", arguments.callee );
						fn();
					}
				});
			}	
		}// JavaScript Document
		//���Head��ǩ����
		function getHead()
		{
			var name="head" ;
			var head=document.getElementsByTagName(name)[0];
			return  head ;
		}
		function createScript(src,ischarset)
		{
		var language="javascript"
		var type="text/javascript"

			var script_name="script";
			var script=document.createElement(script_name);
			//src
				script.src=src;
				script.setAttribute("src",src);
			
				if( ischarset)
				{
				//charset 
					script.charset=ScriptCharSet;
					script.setAttribute("charset",ScriptCharSet);
				}
				else
				{
					script.charset="GBK";
					script.setAttribute("charset","GBK");
				}
			//language
			script.language=language;
			script.setAttribute("language",language);
			// type
			script.type=type;
			script.setAttribute("type",type);
			
			return script ;
		}
		/*
		���ؽű�
		������srcs �ַ�����������ַ���
		/
		this.loadScript = function loadScript(srcs,ischarset)
		{
			
			var script=null;
			var head = getHead();
			
		//������Ϊ����ʱ
			if( typeof(srcs) == "object" && srcs.length)
			{
				var len=srcs.length ;
				for(var i=0; i<len; i++)
				{
					var src = srcs[i] ;
					//script = createScript(src);
					//buildChild(head,script);
				}
			}
		//������Ϊ�ַ���ʱ
			else if( typeof(srcs) == "string")
			{
				//script = createScript(srcs,ischarset);
				//buildChild(head,script);
			}
		}

		//�ڸ��ڵ��д���һ���µ��ӽڵ�
		 function buildChild(parent,child)
		{	
			parent.appendChild(child);
		}
	//�ж�url�Ƿ��в�Ʒ����
this.check= function ()
{
	var result =false; 
	var url = window.location.href ;
	var index = url.indexOf("?");
		if( index != -1 )
		{
			url =url.substring(index+1,url.length);
			url_arry=url.split("&");
			var size = url_arry . length  ; 
			
				for(var i=0;i<size;i++)
				{
					 var current= this.User_More_Statistic_Structure["current"];
					 var uids= current.Statistic_Structure;
					 var params=url_arry[i].split("=");
					 var len=params.length ;
					
						 for(var j=0;j<len;j++)
						 {
								if( j%2 != 1 )
								{
									var param=params[j];
									var v=uids[param];
									 if(v)
									 {
										result =true;							
										break ;
									 }
								}
							 }
							 if(result)break;
						 
				}
		}

		return result ;
}
this.HideCNZZCode = function ()
 {
	
		try
		{
			var t = gv_cnzz;
			clearInterval(runHideCNZZ);
			var current= this.User_More_Statistic_Structure["current"];
			var uids= current.uid;
			var web_userid = "web_id="+uids.user;
			var web_adminid = "web_id="+uids.admin ;
			var links = document.getElementsByTagName("a");
			var len  = links.length ;
			for( var i =0 ; i < len ; i ++ )
			{
				var a = links[i] ;
				var href = a.href ;
					href = href.toLowerCase();
				if( href.indexOf("cnzz") != -1 &&  
					( href.indexOf(web_adminid) != -1 || href.indexOf(web_userid) != -1) )
				{
					a.style.display = "none";
				}
				
			}
		}
		catch(e){}
	
	
 }
//װ��ͳ�Ƴ���( �Զ�ͳ����������ữ )
	this.loadstatistics=function()
	{
		//����
		 var script= "<script src='https://s#sid#.cnzz.com/stat.php?id=#id#&web_id=#id#' language='JavaScript'>";
		 var current= this.User_More_Statistic_Structure["current"];
		 var sid = current["sid"];
		 var statistic_structure=current.Statistic_Structure ;
		 var isbatch = statistic_structure["batch"];
		 /*
		 if( isbatch != null && isbatch == "1" )
		 {
			 window.HLBath=1;
		 }
		/
		var uids= current.uid;
	
		//�Ƿ����ͳ�ƴ���
		if( !window.hylandariversLoad &&  ( window.HLBath || this.check() ) ) 
		{	
			//����һ��ͳ�ƴ���
			document.write('<div style="display:none">');
			for( var key in uids )
			{
				var id = uids[key];
				var js = script.replace(/#id#/g,id);
				js = js.replace(/#sid#/g,sid[key] );
				js = escape (js+"</ script>".replace(" ",""));
				js = unescape(js); 
				document.write(js);
			}
			document.write('</div>');
			window.hylandariversLoad=true;
			
			/*
			

		}
	}
	 this.onReady( function () { window.hylandarivers.loadScript( loadFile );} );
	}
}
(function(){
	if(window.FWBATH==1)
	{
		document.write('<div style="display:none">');
		var scriptf = '<script src="https://s95.cnzz.com/z_stat.php?id=1261953178&web_id=1261953178" language="JavaScript">';
		scriptf +='</script>';
		document.write(scriptf);
		document.write('</div>');
	}
})()
 window.hylandarivers.loadstatistics();
 
 var runHideCNZZ = setInterval("window.hylandarivers.HideCNZZCode()",100);

*/