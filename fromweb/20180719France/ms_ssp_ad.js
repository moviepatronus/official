
(function(){
	function checkType(e, t) {
			return !!e && e.nodeType == t
	}
	function isObject(e) {
			return "object" == typeof e
	}
	function isWindow(e) {
			return null != e && e == e.window
	}
	function isPlainObject(e) {
			return isObject(e) && !isWindow(e) && "isPrototypeOf"in e && "[object Object]" === Object.prototype.toString.call(e)
	}
	function hasClass(e, t) {
			if (!checkType(e, 1) || !e.className || !t)
					return !1;
			var n, r = e.className.split(" ");
			for (n = 0; n < r.length; n++)
					if (r[n] === t)
							return !0;
			return !1
	}
	function isArray(e) {
			return e instanceof Array
	}
	function extend(e, t, n) {
			for (key in t)
					n && (isPlainObject(t[key]) || isArray(t[key])) ? (isPlainObject(t[key]) && !isPlainObject(e[key]) && (e[key] = {}),
					isArray(t[key]) && !isArray(e[key]) && (e[key] = []),
					extend(e[key], t[key], n)) : void 0 !== t[key] && (e[key] = t[key]);
			return e
	}
	function setAttribute(e, t, n) {
			null == n ? e.removeAttribute(t) : e.setAttribute(t, n)
	}
	var idExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/
	, classTagExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/
	, version = "2.0.1";
	window.MS = window.MS || function(e, t) {
		return new MS.fn.init(e,t)
	}
	,
  MS._mdsp = MS._mdsp || [],
	MS.fn = MS.prototype = {
		getElementsByClassName: function(e, t, n) {
				var r = []
					, a = (t || document).getElementsByTagName(n || "*")
					, o = a.length
					, s = new RegExp("(\\s+|^)" + e + "(\\s+|$)");
				for (i = 0,
				j = 0; i < o; i++)
						s.test(a[i].className) && (r[j] = a[i],
						j++);
				return r
		},
		on: function(e, t) {
				for (var n = 0; n < this.length; n++) {
						var r = this[n];
						r.addEventListener ? r.addEventListener(e, t, !1) : r.attachEvent && r.attachEvent("on" + e, t)
				}
				return this
		},
		off: function(e, t) {
				for (var n = 0; n < this.length; n++) {
						var r = this[n];
						r.removeEventListener ? r.removeEventListener(e, t, !1) : r.detachEvent && r.detachEvent("on" + e, t)
				}
				return this
		},
		addClass: function(e) {
        for (var n = this.length, r = 0; n > r; r++) {
            var i = this[r];
            if (!checkType(i, 1) || !e)
                return;
            if (!i.className)
                return void (i.className = t);
            hasClass(i, e) || (i.className += " " + e)
        }
        return this
    },
    removeClass: function(e) {
        for (var t = this.length, n = 0; t > n; n++) {
            var r = this[n];
            if (!checkType(r, 1) || !r.className || !e)
                return;
            var i = r.className.split(/\s+/g)
              , a = 0;
            for (a = 0; a < i.length && e !== i[a]; a++)
                ;
            i.splice(a, 1),
            r.className = i.join(" ")
        }
        return this
    },
    each: function(e) {
        for (var t = 0; t < this.length; t++)
            e(this[t], t);
        return this
    },
    animate: function(e, t, n, r, i, a) {
        function o(e, t, n, r) {
            return n * ((e = e / r - 1) * e * e + 1) + t
        }
        for (var s = (new Date).getTime(), c = 0; c < this.length; c++) {
            var u = this[c];
            setTimeout(function() {
                var c = parseInt(((new Date).getTime() + r - s) / r);
                u.style[e] = Math.floor(o(c, t, n, 20)) + i,
                c >= 20 ? (u.style[e] = t + n + i,
                a && a()) : setTimeout(arguments.callee, r)
            }, r)
        }
        return this
    },
    css : function(attr,value) {
    	for(var i = 0; i < this.length; i ++) {
    		this[i].style[attr] = value
    	}
    	return this
    },
    setCouplet: function() {
      this[0].querySelectorAll('.ms-couplet-item').forEach(function(couplet) {
        var img = document.createElement('img')
    				img.src = couplet.dataset.option
    				img.style.position = 'absolute'
    				img.style.zIndex = -1
            img.style.visibility = 'hidden';
            img.style.width = '0px'
            img.style.height = '0px'
            img.style.bottom = '0px'
            document.body.append(img)
        couplet.addEventListener('click', function(e) {
          var that = this
          e.stopPropagation()
          var a = document.createElement('a')
            a.href = that.dataset.target
            a.target = '_blank'
          if(that.dataset.click) {
            var img = document.createElement('img')
            img.onload = function() {
              a.click()
            }
            img.onerror = function() {
              a.click()
            }
            img.src = that.dataset.click
          } else {
            a.click()
          }
        })
      })
    },
    carousel: function(interval) {
      var autoprefixer = function(style) {
        if (typeof style !== 'object') return style;
        var rules = ['transform', 'transition', 'animation'];
        var prefixes = ['ms-', 'webkit-'];
        rules.forEach(rule => {
          var value = style[rule];
          if (rule && value) {
            prefixes.forEach(prefix => {
              style[prefix + rule] = value;
            });
          }
        });
        return style;
      };
      var CarouselItem = function(item, parent) {
        this.CARD_SCALE = 0.83
        this.$parent = parent
        this.container = MS(item)
        this.hover = false,
        this.baoguang = false
        this.translate = 0,
        this.scale = 1,
        this.active = false,
        this.ready = false,
        this.inStage = false,
        this.animating = false
        this.name = ''
        this.label = ''
        this.container.on('click', function(e) {
          var that = this
          e.stopPropagation()
          var a = document.createElement('a')
            a.href = that.dataset.target
            a.target = '_blank'
          if(that.dataset.click) {
            var img = document.createElement('img')
            img.onload = function() {
              a.click()
            }
            img.onerror = function() {
              a.click()
            }
            img.src = that.dataset.click
          } else {
            a.click()
          }
        }.bind(this.container[0]), true)
        
      }
      CarouselItem.prototype.processIndex = function(index, activeIndex, length) {
        if (activeIndex === 0 && index === length - 1) {
          return -1;
        } else if (activeIndex === length - 1 && index === 0) {
          return length;
        } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
          return length + 1;
        } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
          return -2;
        }
        return index;
      }
      CarouselItem.prototype.calcTranslate = function(index, activeIndex, isVertical) {
        const distance = this.$parent.container[0][isVertical ? 'offsetHeight' : 'offsetWidth'];
        return distance * (index - activeIndex);
      }
      CarouselItem.prototype.calcCardTranslate = function(index, activeIndex) {
        var parentWidth = this.$parent.container[0].querySelector('.ms-carousel-container').offsetWidth;
        if (this.inStage) {
          return parentWidth * ((2 - this.CARD_SCALE) * (index - activeIndex) + 1) / 4;
        } else if (index < activeIndex) {
          return -(1 + this.CARD_SCALE) * parentWidth / 4;
        } else {
          return (3 + this.CARD_SCALE) * parentWidth / 4;
        }
      }
      CarouselItem.prototype.puguang = function() {
        var that = this
        this.baoguang = true
        var img = document.createElement('img')
        img.style.display = 'none'
        img.src = this.container[0].dataset.option
      }
      CarouselItem.prototype.translateItem = function(index, activeIndex, oldIndex) {
        if(index == activeIndex && !this.baoguang) {
          this.puguang()
        }
        var length = this.$parent.items.length;
        var parentType = this.$parent.type;
        if (parentType !== 'card' && oldIndex !== undefined) {
          this.animating = index === activeIndex || index === oldIndex;
        }
        if (index !== activeIndex && length > 2 && this.$parent.loop) {
          index = this.processIndex(index, activeIndex, length);
        }
        this.active = index === activeIndex;
        this.translate = this.calcTranslate(index, activeIndex, false);
        this.ready = true;
        this.render()
      }
      CarouselItem.prototype.handleItemClick = function() {
        var parent = this.$parent;
        if (parent && parent.type === 'card') {
          var index = parent.items.indexOf(this);
          parent.setActiveItem(index);
        }
      }
      CarouselItem.prototype.itemStyle = function () {
        var value = 'translateX('+this.translate+'px) scale('+this.scale+')';
        // var style = {
        //   transform: value
        // };
        // return autoprefixer(style);
        return value;
      }
      CarouselItem.prototype.render = function() {
        this.animating ? this.container.addClass('is-animating') : this.container.removeClass('is-animating');
        this.active ? this.container.addClass('is-active') : this.container.removeClass('is-active');
        this.$parent.container[0].querySelectorAll('.el-carousel__indicator').forEach(function(item) {
          MS(item).removeClass('is-active')
        })
        MS(this.$parent.container[0].querySelectorAll('.el-carousel__indicator')[this.$parent.activeIndex]).addClass('is-active')
        this.container[0].style.transform = this.itemStyle()
        this.$parent.container[0].style.opacity = 1
        
      }
      var Carousel = function(container, interval) {
        var that = this
        this.container = container
        this.items = []
        this.interval = interval
        this.indicator = true
        this.loop = true
        this.autoPlay = true
        this.trigger = 'hover'
        this.type = null
        this.initialIndex = 0
        this.activeIndex = -1
        this.containerWidth = 0
        container[0].querySelector('.el-carousel__indicators').innerHTML = ''
        this.updateItems()
        setTimeout(function() {
          this.startTimer()
        }.bind(this))
        
        container[0].querySelector('.el-carousel__indicators').addEventListener('mousemove', function(e) {
          if(e.target.className.search(/el-carousel__indicators|is-active/) < 0) {
            that.handleIndicatorHover.bind(that)(e)
          }
        })
        window.addEventListener('resize', MS.throttle(function() {
          that.resetItemPosition()
        }, 20))
        this.container.on('mouseenter', this.handleMouseEnter.bind(this))
        this.container.on('mouseleave', this.handleMouseLeave.bind(this))
      }
      Carousel.prototype.changeActive = function(target) {
        this.container[0].querySelectorAll('.el-carousel__indicator').forEach(function(item) {
          MS(item).removeClass('is-active')
        })
        MS(target).addClass('is-active')
      }
      Carousel.prototype.handleMouseEnter = function(e) {
        e.stopPropagation()
        this.hover = true;
        this.pauseTimer();
      }
      Carousel.prototype.handleMouseLeave = function(e) {
        e.stopPropagation()
        this.hover = false;
        this.startTimer();
      },
      Carousel.prototype.pauseTimer = function() {
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = null;
        }
      }
      Carousel.prototype.updateItems = function() {
        var that = this
        var items = []
        this.container[0].querySelectorAll('.ms-carousel-container .ms-carousel-item').forEach(function(item) {
          var indicator = document.createElement('li');
          indicator.className = 'el-carousel__indicator el-carousel__indicator--horizontal'
          that.container[0].querySelector('.el-carousel__indicators').appendChild(indicator)
          items.push(new CarouselItem(item, that))
        })
        this.items = items
        this.setActiveItem(this.initialIndex)
      }
      Carousel.prototype.handleIndicatorHover = MS.throttle(function(e) {
        var index = [].indexOf.call(this.container[0].querySelectorAll('.el-carousel__indicator'), e.target)
        var oldIndex = this.activeIndex
        if (this.trigger === 'hover' && index !== this.activeIndex) {
          this.activeIndex = index;
        }
        this.resetItemPosition(oldIndex);
      }, 300)
      Carousel.prototype.startTimer = function() {
        if (this.interval <= 0 || !this.autoPlay || this.timer) return;
        this.timer = setInterval(this.playSlides.bind(this), this.interval);
      }
      Carousel.prototype.playSlides = function() {
        var oldIndex = this.activeIndex
        if (this.activeIndex < this.items.length - 1) {
          this.activeIndex++;
        } else if (this.loop) {
          this.activeIndex = 0;
        }
        this.resetItemPosition(oldIndex);
      }
      Carousel.prototype.setActiveItem = function(index) {
        if (typeof index === 'string') {
          var filteredItems = this.items.filter(function(item) { return item.name === index });
          if (filteredItems.length > 0) {
            index = this.items.indexOf(filteredItems[0]);
          }
        }
        index = Number(index);
        if (isNaN(index) || index !== Math.floor(index)) {
          console.warn('[Element Warn][Carousel]index must be an integer.');
          return;
        }
        var length = this.items.length;
        var oldIndex = this.activeIndex
        if (index < 0) {
          this.activeIndex = this.loop ? length - 1 : 0;
        } else if (index >= length) {
          this.activeIndex = this.loop ? 0 : length - 1;
        } else {
          this.activeIndex = index;
        }
        this.resetItemPosition(oldIndex);
      }
      Carousel.prototype.resetItemPosition = function(oldIndex) {
        this.items.forEach((item, index) => {
          item.translateItem(index, this.activeIndex, oldIndex);
        });
      }
      return new Carousel(this, interval)
    }
	},
	MS.fn.init = function(e, t) {
		t && (t = t.length > 0 ? t[0] : t);
		var n = t || window.document;
		if ("string" == typeof e) {
				if ("<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? match = [null , e, null ] : match = idExpr.exec(e),
				match && match[1]) {
						var r = document.createElement("div");
						return r.innerHTML = e,
						this[0] = r.childNodes[0],
						this.length = 1,
						this.context = n,
						this.selector = e,
						this
				}
				if (match && match[2]) {
						var r = document.getElementById(match[2]);
						return r && r.parentNode && (this.length = 1,
						this[0] = r),
						this.context = n,
						this.selector = e,
						this
				}
				match = classTagExpr.exec(e);
				var i = void 0;
				match[2] ? i = n.getElementsByTagName(match[2]) : match[3] && (i = n.getElementsByClassName ? n.getElementsByClassName(match[3]) : MS(n).getElementsByClassName(match[3], n));
				for (var a = 0; a < i.length; a++)
						this[a] = i[a];
				return this.length = i.length,
				this.context = n,
				this.selector = e,
				this
		}
		return e && e.nodeType ? (this[0] = e,
		this.length = 1,
		this) : (this.length = 0,
		this)
	}
	,
	MS.fn.init.prototype = MS.prototype;
	MS.extend = MS.fn.extend = function(e, t, n) {
		return 1 === arguments.length && (t = e,
		e = this),
		extend(e, t, n),
		e
	},
	MS.extend({
    template : function(t,e) {
    	var i = /{{(.*?)}}/g;
	    return t.replace(i,
	    function(t, i, n, o) {
	        return e[i] || ""
	    })
    },
    checkMonitor: function(div, monitorUrl) {
    	var checkFun = MS.throttle(function() {
    		if(div.offsetHeight + div.offsetTop <= window.innerHeight + window.scrollY && div.offsetHeight + div.offsetTop >= window.scrollY) {
    			window.removeEventListener('scroll', checkFun, true)
    			monitorUrl.forEach(function(url) {
    				var img = document.createElement('img')
    				img.src = url
    				img.style.position = 'absolute'
    				img.style.zIndex = -1
            img.style.visibility = 'hidden';
            img.style.width = '0px'
            img.style.height = '0px'
            img.style.bottom = '0px'
    				document.body.append(img)
    			})
    		}
    	}, 200)
    	window.addEventListener('scroll', checkFun, true)
    },
    throttle: function(func, wait, options){
      /* options的默认值
     *  表示首次调用返回值方法时，会马上调用func；否则仅会记录当前时刻，当第二次调用的时间间隔超过wait时，才调用func。
     *  options.leading = true;
     * 表示当调用方法时，未到达wait指定的时间间隔，则启动计时器延迟调用func函数，若后续在既未达到wait指定的时间间隔和func函数又未被调用的情况下调用返回值方法，则被调用请求将被丢弃。
     *  options.trailing = true; 
     * 注意：当options.trailing = false时，效果与上面的简单实现效果相同
     */
      var context, args, result;
      var timeout = null;
      var previous = 0;
      if (!options) options = {};
      var later = function() {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      };
      return function() {
        var now = new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        // 计算剩余时间
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }
          previous = now;
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
          // options.trailing=true时，延时执行func函数
          timeout = setTimeout(later, remaining);
        }
        return result;
      };
    },
    isImg : function(src) {
    	return (/(\.jpg|\.png|\.jpeg|.gif)$/).test(src)
    },
    isFlash : function(src) {
    	return (/(\.flv|\.swf)$/).test(src)
    },
    params : function() {
			return {
				user_agent : navigator.userAgent,
				src : window.location.href,
				referer : document.referrer
			}
		},
    defineOnce: function(t, e) {
        var i = window;
        return i[t] ? i[t] : (i[t] = e, e)
    },
    proxy : function() {
      var t = Array.prototype.slice.apply(arguments),
      e = t.shift(),
      i = "function" == typeof this ? this: t.shift();
      return function() {
          var n = Array.prototype.slice.apply(arguments);
          return i.apply(e, n.concat(t))
      }
    },
    getScript: function(e, t) {
        var n = document.createElement("script");
        n.type = "text/javascript",
        n.src = e,
        n.onload = n.onreadystatechange = function() {
            this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (document.getElementsByTagName("head")[0].removeChild(n),
            t && t())
        }
        ,
        document.getElementsByTagName("head")[0].appendChild(n)
    },
    serialize: function(t) {
        if ("object" != typeof t) return "";
        var e = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.push(i + "=" + encodeURIComponent(t[i]));
        return e.join("&")
    },
    hasClass(e, t) {
				if (!checkType(e, 1) || !e.className || !t)
						return !1;
				var n, r = e.className.split(" ");
				for (n = 0; n < r.length; n++)
						if (r[n] === t)
								return !0;
				return !1
    },
    getAd: function(divId, pid, isAdaptive) {
      var div = document.createElement('div')
      div.id = 'MS_POSITION_' + pid
      if(isAdaptive) data.dataset.size = 'adaptive'
      MS('#' + divId)[0].appendChild(div)
      MS.loadAd({pid: pid})
    }
	});
})();
(function(MS){
	MS.create = function(option) {
		return new box(option)
	}
	var print = function(id, iframe) {
		var doc = iframe.contentWindow.document;
		// iframe.contentWindow.top.location = null;
		// console.log(iframe.contentWindow.top)
		var fun = function(html) {
			return html.replace(/\<script\>(.*?)\<\/script\>/g, function(t,i,n,o) {
				return '<script>var window_ = window;var top_ = {};(function(window, top){delete window.top;delete window.history;' + i + '})(window_, top_);</script>'
			})
		}
		
		if(this.option.html) {
			var html = this.option.html
		} else if(MS.isImg(this.option.srcUrls)) {
			var html = MS.template(this.img, this.option)
		} else if(MS.isFlash(this.option.srcUrls)) {
			var html = MS.template(this.flash, this.option)
    }

    doc.body.innerHTML = html.replace(/class="ms-carousel"/, 'class="ms-carousel" style="opacity:0"');
    if(this.option.element.dataset.size == 'adaptive') {
      doc.querySelector('img').onload = function() {
        iframe.height = doc.querySelector('img').height
      }
    }
    // var script1 = doc.createElement('script')
    // script1.src = 'ms_ssp_ad.js'
    // var script2 = doc.createElement('script')
    // script2.innerHTML = 'function invokeCarousel(){MS("#3505d303726e8bef").carousel(6000)}'
    var scripts = doc.body.querySelectorAll('script')
		function runScript(script){
			// 直接 document.head.appendChild(script) 是不会生效的，需要重新创建一个
			var newScript = doc.createElement('script');
			// 获取 inline script
			newScript.innerHTML = script.innerHTML
			// 存在 src 属性的话
			var src = script.getAttribute('src');
			if (src) newScript.setAttribute('src', src);
      doc.body.appendChild(newScript);
			// doc.body.removeChild(newScript);
    }
		for(var script of scripts) {
			runScript(script)
		}
	}
	var box = function(option) {
		if (!option.srcUrls && !option.html) {
			return
		}
		this.id = new Date().getTime();
    this.option = option
    MS.deny_cids.push(this.option.cid)
    this.option.element = document.querySelector('#MS_POSITION_' + this.option.pid)
    this.option.element.style.display = 'block'
    if(this.option.element.dataset.size == 'adaptive') {
      this.option.width = '100%'
      this.option.height = 'auto'
    }
    this.option.parentElement = this.option.element.parentElement
		this.option.clickUrl = option.clickUrl
		this.option.srcUrls =  option.srcUrls && option.srcUrls[0]
		this.option.monitorUrl = option.monitorUrl
    this.option.id = ''
    this.option.element.style.position = 'relative'
    this.option.element.dataset.option = JSON.stringify(this.option.monitorUrl)
    this.option.element.dataset.click = JSON.stringify(this.option.clickUrl)
    MS.checkMonitor(this.option.element, this.option.monitorUrl)
    if(this.option.isCarousel) {
      this.option.parentElement.parentElement.style.width = this.option.element.style.width
      this.option.parentElement.parentElement.style.height = this.option.element.style.height
    }
		var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		for (var i = 0; i < 16; i++) {this.option.id += str[Math.floor(Math.random() * str.length)]}
    this.option.element.innerHTML = this.iframe(option) + '<a id="MS_close_'+this.option.id+'" href="javascript:void(0)" style="position:absolute;right:2px;top:0px; color:#c5c5c5;text-decoration: none;z-index:2;transform: rotate(45deg);">+</a>'
    document.getElementById('MS_close_' + this.option.id).addEventListener('click', function() {
      var ms_ad = document.getElementById(this.option.id);
      ms_ad.parentNode.removeChild(ms_ad)
      document.getElementById('MS_close_' + this.option.id).style.display = 'none'
    }.bind(this))
		
	}
	// box.prototype.contain = function() {
	// 	var div = document.createElement('div');
	// 	this.option.element.appendChild(div)
	// 	div.style.width = '100%'
	// 	div.style.display = 'inline-block';
	// 	div.style.height = '100px'
	// 	div.style.position = 'relative'
	// 	div.id = this.option.id
	// 	return div
	// }
	box.prototype.iframe = function(option){
		var iframe = ['<iframe src="blank"', ' id="{{id}}"', " {{onloadDefine}}", ' width="{{width}}"', ' height="{{height}}"', ' align="center,center"', ' vspace="0"', ' hspace="0"', ' marginwidth="0"', ' marginheight="0"', ' scrolling="no"', ' frameborder="0"', ' style="border:0; vertical-align:bottom;margin:0;"', ' allowtransparency="true">', "</iframe>"].join("");
    var option = option
		MS.defineOnce('renderFrame_' + option.id, print.bind(this))
		option.onloadDefine = 'onload="' + 'renderFrame_' + option.id + "('" + option.id + "', this);\""
		return MS.template(iframe,option)
	}
	box.prototype.jiaobiao = '<a target="_blank" href="//www.dzwww.com" style="position:absolute;right:2px;bottom:2px;font-size:10px;text-decoration: none;z-index:2;color:#c5c5c5">美数科技</a>'
	box.prototype.ad = '<a href="//www.dzwww.com" style="position:absolute;left:0;bottom:0;font-size:10px;padding:3px 6px 3px 2px;color:#fff;background:rgba(0,0,0,0.1);z-index:3;border-radius: 0 10px 0 0; text-decoration:none;">广告</a>'
	box.prototype.img = '<div><a target="_blank" href="{{dUrl}}" style="position:absolute;left:0;right:0;bottom:0;top:0;z-index:1;" target="{{target}}"></a><img src="{{srcUrls}}" title="{{title}}" style="border:none;height:{{height}};width:{{width}}" alt="{{title}}" border="0"  />' + box.prototype.ad + '</div>',
	box.prototype.flash = '<a style="position:absolute;top:0px;left:0px;width:{{width}}px; height:{{height}}px;dispaly:block;"  href="{{dUrl}}" id="{{id}}" target=_blank></a>' + box.prototype.ad + '<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" WIDTH="{{width}}" HEIGHT="{{height}}" ALIGN=""><PARAM NAME="quality" VALUE="autohigh"><PARAM NAME="wmode" VALUE="opaque"><embed width="{{width}}" height="{{height}}" src="{{srcUrls}}" quality="autohigh" wmode="opaque" type="application/x-shockwave-flash" plugspace="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></embed></OBJECT>';
})(MS);
(function(){
	MS.loadAd = function(data) {
		var script = document.createElement('script');
		// http://172.16.3.15:8888/req_ad?type=js&pid=3
		script.src = '//sspad.dzwww.com/req_ad?' + 'pid=' + data.pid + '&type=js' + '&' + MS.serialize(MS.params()) + '&media_id=' + data.media_id + '&is_mobile=0&callback=MS_SSP_define&deny_cids=' + MS.deny_cids.join(',')
		document.body.appendChild(script)
  }
  MS.deny_cids = []
})(MS);
(function(){
	if(window._mdsp && window._mdsp.length) {
		for(var i = 0 ; i < _mdsp.length; i ++) {
			if(!MS._mdsp.length) {
				MS._mdsp.push(_mdsp[i])
				MS.loadAd(_mdsp[i])
			} else {
				var hasAd = false
				for(var j = 0; j < MS._mdsp.length; j ++) {
					if (_mdsp[i] == MS._mdsp[j]) {
						hasAd = true
					}
				}
				if (!hasAd) {
					MS._mdsp.push(_mdsp[i])
					MS.loadAd(_mdsp[i])
				}
			}
		}
  }
  var style = document.createElement('style')
  style.innerHTML = '.ms-carousel{cursor: pointer;overflow:hidden;position:relative;height:100%;}.ms-carousel .ms-carousel-container{position:relative;overflow:hidden;text-align:center;height:100%}.ms-carousel .ms-carousel-container .ms-carousel-item{position:absolute;top:0;left:0;width:100%;height:100%;display:inline-block;overflow:hidden;z-index:0;color:#fff;}.ms-carousel-item.is-active{z-index:2!important;}.ms-carousel-item.is-animating{transition:all .4s ease-in-out}.ms-carousel .el-carousel__indicators{position:absolute;list-style:none;margin:0;padding:0;z-index:2;width:100%;left:0;text-align:center;right:0;bottom:0}.ms-carousel .el-carousel__indicator{opacity:.48;width:30px;height:2px;background-color:#fff;border:none;outline:0;padding:0;margin:0 5px;cursor:pointer;transition:.3s;display:inline-block}.ms-carousel .el-carousel__indicator.is-active{background-color:#1989fa}.ms-couplet .ms-couplet-item {position:fixed;top:50%;z-index:500;}.ms-couplet-left-item {left:0;} .ms-couplet-right-item {right:0;}'
  document.body.appendChild(style)
})()
window.MS_SSP_define ? window.MS_SSP_define : window.MS_SSP_define  = MS.create;



