webpackJsonp([8],{

/***/ 1215:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(914);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(484)("0ceef156", content, true);

/***/ }),

/***/ 1317:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "page-content"
  }, [(!_vm.isLoading) ? _c('div', [_c('loading', {
    attrs: {
      "show": !_vm.isLoading,
      "text": "请稍后..."
    }
  })], 1) : _c('div', [_c('tab', {
    attrs: {
      "line-width": 2,
      "active-color": "#317df3"
    },
    model: {
      value: (_vm.index),
      callback: function($$v) {
        _vm.index = $$v
      },
      expression: "index"
    }
  }, _vm._l((_vm.tablist), function(item, index) {
    return _c('tab-item', {
      key: index,
      staticClass: "vux-center",
      attrs: {
        "selected": index === 0
      },
      on: {
        "on-item-click": _vm.onItemClick
      }
    }, [_vm._v(_vm._s(item))])
  })), _vm._v(" "), _c('div', {
    staticClass: "fullBox"
  }, [_c('scroller', {
    ref: "scrollerBottom",
    attrs: {
      "lock-x": "",
      "height": "-44",
      "scroll-bottom-offst": 200
    },
    on: {
      "on-scroll-bottom": _vm.onScrollBottom
    }
  }, [(_vm.customList.length > 0) ? _c('div', {
    staticClass: "custom-box"
  }, _vm._l((_vm.customList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "weui-tab-list"
    }, [_c('img', {
      staticClass: "user_avator img-responsive",
      attrs: {
        "src": item.avatar
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "user_content"
    }, [_c('div', {
      staticClass: "username"
    }, [_vm._v(_vm._s(item.nickname))]), _vm._v(" "), (item.type < 1) ? _c('div', {
      staticClass: "user_tags tags_vip"
    }, [_vm._v("客户")]) : (item.type === 1) ? _c('div', {
      staticClass: "user_tags tags_vip"
    }, [_vm._v("VIP")]) : (item.type === 2) ? _c('div', {
      staticClass: "user_tags tags_svip"
    }, [_vm._v("SVIP")]) : _c('div', {
      staticClass: "user_tags tags_tubu"
    }, [_vm._v("渠道")]), _vm._v(" "), (item.type <= 1) ? _c('div', {
      staticClass: "level"
    }, [(item.toptype === 1) ? _c('div', [_vm._v("上级: VIP: " + _vm._s(item.topnickname))]) : _vm._e(), _vm._v(" "), (item.toptype === 2) ? _c('div', [_vm._v("上级: SVIP: " + _vm._s(item.topnickname))]) : _vm._e(), _vm._v(" "), (item.toptype === 3) ? _c('div', [_vm._v("上级: 渠道: " + _vm._s(item.topnickname))]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "custom"
    }, [_c('div', [_vm._v("直接客户：" + _vm._s(item.direct))])]), _vm._v(" "), _c('div', {
      staticClass: "money"
    }, [_c('div', [_vm._v("我的佣金：" + _vm._s(item.money))])])]), _vm._v(" "), _c('div', {
      staticClass: "user_time"
    }, [_vm._v(_vm._s(item.create_time))])])
  })) : _c('div', {
    staticClass: "custom-box"
  }, [_c('place-holder', {
    attrs: {
      "title": '继续加油，暂时还没有客户'
    }
  })], 1)])], 1)], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1215)

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(880),
  /* template */
  __webpack_require__(1317),
  /* scopeId */
  "data-v-16fde463",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var SUBSTITUTE_REG = /\\?\{([^{}]+)\}/g,
	EMPTY = '';

var RE_TRIM = /^[\s\xa0]+|[\s\xa0]+$/g,
	trim = String.prototype.trim;

var _trim = trim ?
	function(str) {
		return str == null ? EMPTY : trim.call(str);
	} : function(str) {
		return str == null ? EMPTY : (str + '').replace(RE_TRIM, EMPTY);
	};

function upperCase() {
	return arguments[1].toUpperCase();
}

function Empty() {}

function createObject(proto, constructor) {
	var newProto;
	if (Object.create) {
		newProto = Object.create(proto);
	} else {
		Empty.prototype = proto;
		newProto = new Empty();
	}
	newProto.constructor = constructor;
	return newProto;
}

function getNodes(node, rootNode) {
	if (!node) return;
	if (node.nodeType) return [node];
	var rootNode = rootNode && rootNode.nodeType ? rootNode : document;
	if (node && typeof node === "string") {
		return rootNode.querySelectorAll(node);
	}
	return;
}

// Useful for temporary DOM ids.
var idCounter = 0;

var getOffsetTop = function(el) {
	var offset = el.offsetTop;
	if (el.offsetParent != null) offset += getOffsetTop(el.offsetParent);
	return offset;
};
var getOffsetLeft = function(el) {
	var offset = el.offsetLeft;
	if (el.offsetParent != null) offset += getOffsetLeft(el.offsetParent);
	return offset;
};

var Util = {
	// Is a given variable an object?
	isObject: function(obj) {
		return obj === Object(obj);
	},
	isArray: Array.isArray || function(obj) {
		return toString.call(obj) == '[object Array]';
	},
	// Is a given array, string, or object empty?
	// An "empty" object has no enumerable own-properties.
	isEmpty: function(obj) {
		if (obj == null) return true;
		if (this.isArray(obj) || this.isString(obj)) return obj.length === 0;
		for (var key in obj)
			if (this.has(obj, key)) return false;
		return true;
	},
	mix: function(to, from, deep) {
		for (var i in from) {
			to[i] = from[i];
		}
		return to;
	},
	extend: function(r, s, px, sx) {
		if (!s || !r) {
			return r;
		}
		var sp = s.prototype,
			rp;
		// add prototype chain
		rp = createObject(sp, r);
		r.prototype = this.mix(rp, r.prototype);
		r.superclass = createObject(sp, s);
		// add prototype overrides
		if (px) {
			this.mix(rp, px);
		}
		// add object overrides
		if (sx) {
			this.mix(r, sx);
		}
		return r;
	},
	/**
	 * test whether a string start with a specified substring
	 * @param {String} str the whole string
	 * @param {String} prefix a specified substring
	 * @return {Boolean} whether str start with prefix
	 * @member util
	 */
	startsWith: function(str, prefix) {
		return str.lastIndexOf(prefix, 0) === 0;
	},

	/**
	 * test whether a string end with a specified substring
	 * @param {String} str the whole string
	 * @param {String} suffix a specified substring
	 * @return {Boolean} whether str end with suffix
	 * @member util
	 */
	endsWith: function(str, suffix) {
		var ind = str.length - suffix.length;
		return ind >= 0 && str.indexOf(suffix, ind) === ind;
	},
	/**
	 * Removes the whitespace from the beginning and end of a string.
	 * @method
	 * @member util
	 */
	trim: _trim,
	/**
	 * Substitutes keywords in a string using an object/array.
	 * Removes undef keywords and ignores escaped keywords.
	 * @param {String} str template string
	 * @param {Object} o json data
	 * @member util
	 * @param {RegExp} [regexp] to match a piece of template string
	 */
	substitute: function(str, o, regexp) {
		if (typeof str !== 'string' || !o) {
			return str;
		}

		return str.replace(regexp || SUBSTITUTE_REG, function(match, name) {
			if (match.charAt(0) === '\\') {
				return match.slice(1);
			}
			return (o[name] === undefined) ? EMPTY : o[name];
		});
	},
	/**
	 * vendors
	 * @return { String } webkit|moz|ms|o
	 * @memberOf Util
	 */
	vendor: (function() {
		var el = document.createElement('div').style;
		var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			transform,
			i = 0,
			l = vendors.length;
		for (; i < l; i++) {
			transform = vendors[i] + 'ransform';
			if (transform in el) return vendors[i].substr(0, vendors[i].length - 1);
		}
		return false;
	})(),
	/**
	 *  add vendor to attribute
	 *  @memberOf Util
	 *  @param {String} attrName name of attribute
	 *  @return { String }
	 **/
	prefixStyle: function(attrName) {
		if (this.vendor === false) return false;
		if (this.vendor === '') return attrName;
		return this.vendor + attrName.charAt(0).toUpperCase() + attrName.substr(1);
	},
	/**
	 * judge if has class
	 * @memberOf Util
	 * @param  {HTMLElement}  el
	 * @param  {String}  className
	 * @return {Boolean}
	 */
	hasClass: function(el, className) {
		return el && el.className && className && el.className.indexOf(className) != -1;
	},
	/**
	 * add className for the element
	 * @memberOf Util
	 * @param  {HTMLElement}  el
	 * @param  {String}  className
	 */
	addClass: function(el, className) {
		if (el && className && !this.hasClass(el, className)) {
			el.className += " " + className;
		}
	},
	/**
	 * remove className for the element
	 * @memberOf Util
	 * @param  {HTMLElement}  el
	 * @param  {String}  className
	 */
	removeClass: function(el, className) {
		if (el && el.className && className) {
			el.className = el.className.replace(className, "");
		}
	},
	/**
	 * remove an element
	 * @memberOf Util
	 * @param  {HTMLElement}  el
	 */
	remove: function(el) {
		if (!el || !el.parentNode) return;
		el.parentNode.removeChild(el);
	},
	/**
	 * get offset top
	 * @memberOf Util
	 * @param  {HTMLElement}   el
	 * @return {Number} offsetTop
	 */
	getOffsetTop: getOffsetTop,
	/**
	 * get offset left
	 * @memberOf Util
	 * @param  {HTMLElement}  el
	 * @return {Number} offsetLeft
	 */
	getOffsetLeft: getOffsetLeft,
	/**
	 * get offset left
	 * @memberOf Util
	 * @param  {HTMLElement} el
	 * @param  {String} selector
	 * @param  {HTMLElement} rootNode
	 * @return {HTMLElement} parent element
	 */
	findParentEl: function(el, selector, rootNode) {
		var rs = null,
			parent = null;
		var type = /^#/.test(selector) ? "id" : /^\./.test(selector) ? "class" : "tag";
		var sel = selector.replace(/\.|#/g, "");
		if (rootNode && typeof rootNode === "string") {
			rootNode = document.querySelector(rootNode);
		}
		rootNode = rootNode || document.body;
		if (!el || !selector) return;
		if (type == "class" && el.className && el.className.match(sel)) {
			return el;
		} else if (type == "id" && el.id && _trim(el.id) == sel) {
			return el;
		} else if (type == "tag" && el.tagName.toLowerCase() == sel) {
			return el;
		}
		while (!rs) {
			if (parent == rootNode) break;
			parent = el.parentNode;
			if (!parent) break;
			if ((type == "class" && parent.className && parent.className.match(sel)) || (type == "id" && parent.id && _trim(parent.id) == sel) || (type == "tag" && parent.tagName && parent.tagName.toLowerCase() == sel)) {
				rs = parent
				return rs;
				break;
			} else {
				el = parent;
			}
		}
		return null;
	},
	/**
	 * Generate a unique integer id (unique within the entire client session).
	 * @param  {String} prefix
	 * @return {String} guid
	 */
	guid: function(prefix) {
		var id = ++idCounter + '';
		return prefix ? prefix + id : id;
	},
	/**
	 * judge if is an android os
	 * @return {Boolean} [description]
	 */
	isAndroid: function() {
		return /Android /.test(window.navigator.appVersion);
	},
	/**
	 * judge if is an android device with low  performance
	 * @return {Boolean}
	 */
	isBadAndroid: function() {
		return /Android /.test(window.navigator.appVersion) && !(/Chrome\/\d/.test(window.navigator.appVersion))
	},
	px2Num: function(px) {
		return Number(px.replace(/px/, ''));
	},
	getNodes: getNodes,
	getNode: function(node, rootNode) {
		var nodes = getNodes(node, rootNode);
		return nodes && nodes[0];
	},
	stringifyStyle: function(style) {
		var styleStr = "";
		for (var i in style) {
			styleStr += [i, ":", style[i], ";"].join("");
		}
		return styleStr;
	}
}

// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
var names = ['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'];
for (var i = 0; i < names.length; i++) {
	Util['is' + names[i]] = function(obj) {
		return toString.call(obj) == '[object ' + names[i] + ']';
	};
}

if (typeof module == 'object' && module.exports) {
	module.exports = Util;
}
/** ignored by jsdoc **/
else {
	return Util;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(507);
var Events = __webpack_require__(553);
/** 
      @constructor 
      @mixes Events
      */
var Base = function() {}

Util.mix(Base.prototype, Events);

Util.mix(Base.prototype, {
	/**
	 * @memberof Base
	 * @param  {object} plugin plug a plugin
	 */
	plug: function(plugin) {
		var self = this;
		if (!plugin || !plugin.pluginId) return;
		if (!self.__plugins) {
			self.__plugins = [];
		}
		var __plugin = self.getPlugin(plugin.pluginId);
		__plugin && self.unplug(plugin.pluginId);
		plugin.pluginInitializer(self);
		self.__plugins.push(plugin);
		return self;
	},
	/**
	 * @memberof Base
	 * @param  {object|string} plugin unplug a plugin by pluginId or plugin instance
	 */
	unplug: function(plugin) {
		var self = this;
		if (!plugin || !self.__plugins) return;
		var _plugin = typeof plugin == "string" ? self.getPlugin(plugin) : plugin;
		_plugin.pluginDestructor(self);
		for (var i = 0, l = self.__plugins.length;i < l;i++) {
			if (self.__plugins[i] == _plugin) {
				return self.__plugins.splice(i, 1);
			}
		}
	},
	/**
	 * @memberof Base
	 * @param  {object|string} plugin get plugin by pluginId
	 */
	getPlugin: function(pluginId) {
		var self = this;
		var plugins = [];
		if(!self.__plugins) return;
		for (var i = 0, l = self.__plugins.length;i < l;i++) {
			if (self.__plugins[i] && self.__plugins[i].pluginId == pluginId) {
				plugins.push(self.__plugins[i])
			}
		}
		return plugins.length > 1 ? plugins : plugins[0] || null;
	}
});

if (typeof module == 'object' && module.exports) {
	module.exports = Base;
}
/** ignored by jsdoc **/
else {
	return Base;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(507);
var Timer = __webpack_require__(533);
var Easing = __webpack_require__(532);
var Base = __webpack_require__(508);
//transform
var vendorTransform = Util.prefixStyle("transform");
//transition webkitTransition MozTransition OTransition msTtransition
var vendorTransition = Util.prefixStyle("transition");

var vendorTransitionDuration = Util.prefixStyle("transitionDuration");

var vendorTransformOrigin = Util.prefixStyle("transformOrigin");

var vendorTransitionEnd = Util.vendor ? Util.prefixStyle("transitionEnd") : "transitionend";

var vendorTransformStr = Util.vendor ? ["-", Util.vendor, "-transform"].join("") : "transform";

var translateTpl = 'translateX({translateX}px) translateY({translateY}px) translateZ(0)';
//limit attrs
var animAttrs = {
	'transform': true,
	'opacity': true,
	'scrollTop': true,
	'scrollLeft': true
};

function myParse(v) {
	return Math.round(parseFloat(v) * 1e5) / 1e5;
}

function defaultDecompose() {
	return {
		translateX: 0,
		translateY: 0,
		rotate: 0,
		skewX: 0,
		skewY: 0,
		scaleX: 1,
		scaleY: 1
	};
}

function toMatrixArray(matrix) {
	matrix = matrix.split(/,/);
	matrix = Array.prototype.map.call(matrix, function(v) {
		return myParse(v);
	});
	return matrix;
}

function decomposeMatrix(matrix) {
	matrix = toMatrixArray(matrix);
	var scaleX, scaleY, skew,
		A = matrix[0],
		B = matrix[1],
		C = matrix[2],
		D = matrix[3];

	// Make sure matrix is not singular
	if (A * D - B * C) {
		scaleX = Math.sqrt(A * A + B * B);
		skew = (A * C + B * D) / (A * D - C * B);
		scaleY = (A * D - B * C) / scaleX;
		// step (6)
		if (A * D < B * C) {
			skew = -skew;
			scaleX = -scaleX;
		}
		// matrix is singular and cannot be interpolated
	} else {
		// In this case the elem shouldn't be rendered, hence scale == 0
		scaleX = scaleY = skew = 0;
	}

	// The recomposition order is very important
	// see http://hg.mozilla.org/mozilla-central/file/7cb3e9795d04/layout/style/nsStyleAnimation.cpp#l971
	return {
		translateX: myParse(matrix[4]),
		translateY: myParse(matrix[5]),
		rotate: myParse(Math.atan2(B, A) * 180 / Math.PI),
		skewX: myParse(Math.atan(skew) * 180 / Math.PI),
		skewY: 0,
		scaleX: myParse(scaleX),
		scaleY: myParse(scaleY)
	};
}

function getTransformInfo(transform) {
	transform = transform.split(')');
	var trim = Util.trim,
		i = -1,
		l = transform.length - 1,
		split, prop, val,
		ret = defaultDecompose();

	// Loop through the transform properties, parse and multiply them
	while (++i < l) {
		split = transform[i].split('(');
		prop = trim(split[0]);
		val = split[1];
		switch (prop) {
			case 'translateX':
			case 'translateY':
			case 'scaleX':
			case 'scaleY':
				ret[prop] = myParse(val);
				break;
			case 'translate':
			case 'translate3d':
				val = val.split(',');
				ret.translateX = myParse(val[0]);
				ret.translateY = myParse(val[1] || 0);
				break;
			case 'scale':
				val = val.split(',');
				ret.scaleX = myParse(val[0]);
				ret.scaleY = myParse(val[1] || val[0]);
				break;
			case 'matrix':
				return decomposeMatrix(val);
		}
	}

	return ret;
}

/**
 * animate function
 * @constructor
 * @param {HTMLElement} el element to animate
 * @param {Object} config config for animate
 * @param {Object} config.css
 * @param {Number} config.duration
 * @param {String} config.easing
 * @extends {Base}
 */
function Animate(el, cfg) {
	if (!el || !cfg || !cfg.css) return;
	var self = this;
	self.cfg = cfg;
	self.el = el;
	var duration = cfg.duration || 0,
		easing = cfg.easing || "ease",
		delay = cfg.delay || 0;
	//trigger run
	if (cfg.run) {
		//frame animate
		self.timer = self.timer || new Timer({
			duration: Math.round(duration),
			easing: easing,
		});
		self.timer.on("run", cfg.run);
	}
	self._bindEvt();
	return self;
}

function computeTransform(prevTransform, destTransform) {
	var transform = getTransformInfo(prevTransform);
	var dest = getTransformInfo(destTransform);
	var trans = {};
	for (var i in dest) {
		trans[i] = {
			prevVal: transform[i],
			newVal: dest[i]
		}
	}
	return trans;
}

//for scroll only
function setStyle(el, styleName, prevVal, newVal, percent) {
	prevVal = isNaN(Number(prevVal)) ? 0 : Number(prevVal);
	var curVal = ((newVal - prevVal) * percent + prevVal);
	css(el, styleName, curVal);
}

function css(el, styleName, val) {
	switch (styleName) {
		case "scrollTop":
		case "scrollLeft":
			el[styleName] = val;
			break;
		case "transform":
			el.style[vendorTransform] = val;
		case "opacity":
			el.style[styleName] = val;
			break;

	}
}

Util.extend(Animate, Base, {
	/**
	 * to start the animation
	 * @memberof Animate
	 * @return {Animate}
	 */
	run: function() {
		var self = this;
		var cfg = self.cfg,
			el = self.el,
			duration = cfg.duration || 0,
			easing = cfg.easing || "ease",
			delay = cfg.delay || 0;
		self.__isTransitionEnd = false;
		clearTimeout(self.__itv)
		self.timer && self.timer.run();
		if (duration <= Timer.MIN_DURATION) {
			for (var i in cfg.css) {
				css(el, i, cfg.css[i]);
			}
			self.stop()
			self.__handlers.stop.call(self);
			return;
		}

		if(Util.isBadAndroid()){
			//use frame animate on bad android device
			cfg.useTransition = false;
		}

		if (cfg.useTransition) {
			//transition
			el.style[vendorTransition] = Util.substitute('all {duration}ms {easing} {delay}ms', {
				duration: Math.round(duration),
				easing: Easing.format(easing),
				delay: delay
			});
			for (var i in cfg.css) {
				//set css
				css(el, i, cfg.css[i]);
			}
			self.__itv = setTimeout(function() {
				if (!self.__isTransitionEnd) {
					self.__isTransitionEnd = true;
					self.trigger("transitionend");
				}
			}, Number(duration) + 60);
		} else {
			self.computeStyle = self.computeStyle || window.getComputedStyle(el);
			//transform
			if (cfg.css.transform && self.timer) {
				var transmap = self.transmap = computeTransform(self.computeStyle[vendorTransform], cfg.css.transform);
				self.timer.off("run", self.__handlers.transRun);
				self.timer.on("run", self.__handlers.transRun, self);
				self.timer.off("end",self.__handlers.transRun);
				self.timer.on("end", self.__handlers.transRun, self);
			}
		}
		return self;
	},
	_transitionEndHandler: function(e) {
		var self = this;
		self.stop();
		self.__handlers.stop.call(self);
	},
	__handlers: {
		transRun: function(e) {
			var self = this;
			var transmap = self.transmap;
			var el = self.el;
			var newTrans = {};
			for (var i in transmap) {
				newTrans[i] = (transmap[i].newVal - transmap[i].prevVal) * e.percent + transmap[i].prevVal
			}
			var ret = Util.substitute(translateTpl + ' ' +
				'scale({scaleX},{scaleY})', newTrans);
			el.style[vendorTransform] = ret;
		},
		stop: function(e) {
			var self = this;
			var cfg = self.cfg;
			cfg.end && cfg.end({
				percent: 1
			});
		}
	},
	_bindEvt: function() {
		var self = this;
		var cfg = self.cfg;
		var el = self.el;
		self.el.addEventListener(vendorTransitionEnd, function(e) {
			self.__isTransitionEnd = true;
			if (e.target !== e.currentTarget) return;
			self.trigger("transitionend", e);
		})
		self.on("transitionend", self._transitionEndHandler, self);
		var cssRun = function(e) {
			self.computeStyle = self.computeStyle || window.getComputedStyle(el);
			for (var i in cfg.css) {
				if (!/transform/.test(i)) {
					setStyle(self.el, i, self.computeStyle[i], cfg.css[i], e.percent);
				}
			}
		};
		self.timer && self.timer.on("run", cssRun);
		self.timer && self.timer.on("stop", self.__handlers.stop, self);
	},
	/**
	 * to stop the animation
	 * @memberof Animate
	 * @return {Animate}
	 */
	stop: function() {
		var self = this;
		if (self.cfg.useTransition && self.cfg.duration > Timer.MIN_DURATION) {
			var computeStyle = window.getComputedStyle(this.el);
			for (var i in self.cfg.css) {
				if (animAttrs[i]) {
					var value = /transform/.test(i) ? computeStyle[vendorTransform] : computeStyle[i];
					css(self.el, i, Util.substitute(translateTpl + ' ' + 'scale({scaleX},{scaleY})', getTransformInfo(value)));
				}
			}
			self.el.style[vendorTransition] = "none";
		}
		self.timer && self.timer.stop() && self.timer.reset();
		self.computeStyle = null;
		return self;
	},
	/**
	 * to reset the animation to a new state
	 * @memberof Animate
	 * @param {object} cfg cfg for new animation
	 * @return {Animate}
	 */
	reset: function(cfg) {
		var self = this;
		self.computeStyle = null;
		Util.mix(self.cfg, cfg);
		this.timer && self.timer.reset({
			duration: Math.round(self.cfg.duration),
			easing: self.cfg.easing
		});
		return self;
	}
});


if (typeof module == 'object' && module.exports) {
	module.exports = Animate;
}
/** ignored by jsdoc **/
else {
	return Animate;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge]
 * @returns {Object} dest
 */
function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
function merge(dest, src) {
    return extend(dest, src, true);
}

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        extend(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument;
    return (doc.defaultView || doc.parentWindow);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;
    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = last.deltaX - input.deltaX;
        var deltaY = last.deltaY - input.deltaY;
        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }
    
    if (abs(x) >= abs(y)) {
        return x > 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y > 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) - getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.allow = true; // used by Input.TouchMouse to disable mouse events
    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down, and mouse events are allowed (see the TouchMouse input)
        if (!this.pressed || !this.allow) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */
function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        // when we're in a touch event, so  block all upcoming mouse events
        // most mobile browser also emit mouseevents, right after touchstart
        if (isTouch) {
            this.mouse.allow = false;
        } else if (isMouse && !this.mouse.allow) {
            return;
        }

        // reset the allowMouse when we're done
        if (inputEvent & (INPUT_END | INPUT_CANCEL)) {
            this.mouse.allow = true;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        // not needed with native support for the touchAction property
        if (NATIVE_TOUCH_ACTION) {
            return;
        }

        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE);
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // pan-x and pan-y can be combined
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_PAN_X + ' ' + TOUCH_ACTION_PAN_Y;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.id = uniqueId();

    this.manager = null;
    this.options = merge(options || {}, this.defaults);

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        extend(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(withState) {
            self.manager.emit(self.options.event + (withState ? stateStr(state) : ''), input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(true);
        }

        emit(); // simple 'eventName' events

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(true);
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = extend({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {
        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this._super.emit.call(this, input);
    },
    reset:function(){
        
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        this._super.emit.call(this, input);
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            this.manager.emit(this.options.event + inOut, input);
        }
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 500, // minimal time of the pointer to be pressed
        threshold: 5 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.65,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.velocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.velocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.velocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.direction &&
            input.distance > this.options.threshold &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.direction);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 10, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;
        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }
        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;
            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED ) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create an manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.4';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, { enable: false }],
        [PinchRecognizer, { enable: false }, ['rotate']],
        [SwipeRecognizer,{ direction: DIRECTION_HORIZONTAL }],
        [PanRecognizer, { direction: DIRECTION_HORIZONTAL }, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, { event: 'doubletap', taps: 2 }, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    options = options || {};

    this.options = merge(options, Hammer.defaults);
    this.options.inputTarget = this.options.inputTarget || element;
    this.handlers = {};
    this.session = {};
    this.recognizers = [];

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        extend(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        var recognizers = this.recognizers;
        recognizer = this.get(recognizer);
        recognizers.splice(inArray(recognizers, recognizer), 1);

        this.touchAction.update();
        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    each(manager.options.cssProps, function(value, name) {
        element.style[prefixed(element.style, name)] = add ? value : '';
    });
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

extend(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

if (typeof module == 'object' && module.exports) {
    module.exports = Hammer;
}
/** ignored by jsdoc **/
else {
    return Hammer;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(507),
    Base = __webpack_require__(508),
    Animate = __webpack_require__(512),
    Boundry = __webpack_require__(548),
    Hammer = __webpack_require__(528),
    Sticky = __webpack_require__(552),
    Fixed = __webpack_require__(550);
// boundry checked bounce effect
var BOUNDRY_CHECK_DURATION = 500;
var BOUNDRY_CHECK_EASING = "ease";
var BOUNDRY_CHECK_ACCELERATION = 0.1;
/** 
 * @constructor
 * @param {object} cfg config for scroll
 * @param {number} cfg.SCROLL_ACCELERATION  acceleration for scroll, min value make the scrolling smoothly
 * @param {number} cfg.BOUNDRY_CHECK_DURATION duration for boundry bounce
 * @param {number} cfg.BOUNDRY_CHECK_EASING easing for boundry bounce
 * @param {number} cfg.BOUNDRY_CHECK_ACCELERATION acceleration for boundry bounce
 * @param {boolean} cfg.lockX just like overflow-x:hidden
 * @param {boolean} cfg.lockY just like overflow-y:hidden
 * @param {boolean} cfg.scrollbarX config if the scrollbar-x is visible
 * @param {boolean} cfg.scrollbarY config if the scrollbar-y is visible
 * @param {boolean} cfg.useTransition config if use css3 transition or raf for scroll animation
 * @param {boolean} cfg.useOriginScroll config if use simulate or origin scroll
 * @param {boolean} cfg.bounce config if use has the bounce effect when scrolling outside of the boundry
 * @param {boolean} cfg.boundryCheck config if scrolling inside of the boundry
 * @param {boolean} cfg.preventDefault prevent touchstart
 * @param {boolean} cfg.preventTouchMove prevent touchmove
 * @param {string|HTMLElement}  cfg.container config for scroller's container which default value is ".xs-container"
 * @param {string|HTMLElement}  cfg.content config for scroller's content which default value is ".xs-content"
 * @param {object}  cfg.indicatorInsets  config scrollbars position {top: number, left: number, bottom: number, right: number}
 * @param {string}  cfg.stickyElements config for sticky-positioned elements
 * @param {string}  cfg.fixedElements config for fixed-positioned elements
 * @param {string}  cfg.touchAction config for touchAction of the scroller
 * @extends XScroll
 * @example
 * var xscroll = new XScroll({
 *    renderTo:"#scroll",
 *    lockX:false,
 *    scrollbarX:true
 * });
 * xscroll.render();
 */
function XScroll(cfg) {
    XScroll.superclass.constructor.call(this);
    this.userConfig = cfg;
    this.init();
}

Util.extend(XScroll, Base, {
    /**
     * version
     * @memberof XScroll
     * @type {string}
     */
    version: "3.0.13",
    /**
     * init scroll
     * @memberof XScroll
     * @return {XScroll}
     */
    init: function() {
        var self = this;
        var defaultCfg = {
            preventDefault: true,
            bounce: true,
            boundryCheck: true,
            useTransition: true,
            gpuAcceleration: true,
            BOUNDRY_CHECK_EASING: BOUNDRY_CHECK_EASING,
            BOUNDRY_CHECK_DURATION: BOUNDRY_CHECK_DURATION,
            BOUNDRY_CHECK_ACCELERATION: BOUNDRY_CHECK_ACCELERATION,
            useOriginScroll: false,
            zoomType: "y",
            indicatorInsets: {
                top: 3,
                bottom: 3,
                left: 3,
                right: 3,
                width: 3,
                spacing: 5
            },
            container: ".xs-container",
            content: ".xs-content",
            stickyElements: ".xs-sticky",
            fixedElements: ".xs-fixed",
            touchAction: "auto"
        };
        //generate guid
        self.guid = Util.guid();
        self.renderTo = Util.getNode(self.userConfig.renderTo);
        //timer for animtion
        self.__timers = {};
        //config attributes on element
        var elCfg = JSON.parse(self.renderTo.getAttribute('xs-cfg'));
        var userConfig = self.userConfig = Util.mix(Util.mix(defaultCfg, elCfg), self.userConfig);
        self.container = Util.getNode(userConfig.container,self.renderTo);
        self.content = Util.getNode(userConfig.content,self.renderTo);
        self.boundry = new Boundry();
        self.boundry.refresh();
        return self;
    },
    /**
     * destroy scroll
     * @memberof XScroll
     * @return {XScroll}
     */
    destroy: function() {
        var self = this;
        self.mc && self.mc.destroy();
        self.sticky && self.sticky.destroy();
        self.fixed && self.fixed.destroy();
    },
    _initContainer: function() {},
    /**
     * @memberof XScroll
     * @return {XScroll}
     */
    enableGPUAcceleration: function() {
        this.userConfig.gpuAcceleration = true;
        return this;
    },
    /**
     * @memberof XScroll
     * @return {XScroll}
     */
    disableGPUAcceleration: function() {
        this.userConfig.gpuAcceleration = false;
        return this;
    },
    /**
     * get scroll offset
     * @memberof XScroll
     * @return {Object} {scrollTop:scrollTop,scrollLeft:scrollLeft}
     */
    getScrollPos: function() {
        var self = this;
        return {
            scrollLeft: self.getScrollLeft(),
            scrollTop: self.getScrollTop()
        }
    },
    /**
     * get scroll top value
     * @memberof XScroll
     * @return {number} scrollTop
     */
    getScrollTop: function() {},
    /**
     * get scroll left value
     * @memberof XScroll
     * @return {number} scrollLeft
     */
    getScrollLeft: function() {},
    /**
     * scroll absolute to the destination
     * @memberof XScroll
     * @param scrollLeft {number} scrollLeft
     * @param scrollTop {number} scrollTop
     * @param duration {number} duration for animte
     * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
     **/
    scrollTo: function(scrollLeft, scrollTop, duration, easing, callback) {
        var self = this;
        var scrollLeft = (undefined === scrollLeft || isNaN(scrollLeft)) ? -self.getScrollLeft() : scrollLeft;
        var scrollTop = (undefined === scrollTop || isNaN(scrollTop)) ? -self.getScrollTop() : scrollTop;
        self.scrollLeft(scrollLeft, duration, easing, callback);
        self.scrollTop(scrollTop, duration, easing, callback);
    },
    /**
     * scroll relative to the destination
     * @memberof XScroll
     * @param scrollLeft {number} scrollLeft
     * @param scrollTop {number} scrollTop
     * @param duration {number} duration for animte
     * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
     **/
    scrollBy: function(scrollLeft, scrollTop, duration, easing, callback) {
        this.scrollByX(scrollLeft, duration, easing, callback);
        this.scrollByY(scrollTop, duration, easing, callback);
    },
    /**
     * horizontal scroll relative to the destination
     * @memberof XScroll
     * @param scrollLeft {number} scrollLeft
     * @param duration {number} duration for animte
     * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
     **/
    scrollLeftBy: function(scrollLeft, duration, easing, callback) {
        this.scrollLeft(Number(scrollLeft) + Number(this.getScrollLeft()), duration, easing, callback);
    },
    /**
     * vertical scroll relative to the destination
     * @memberof XScroll
     * @param scrollTop {number} scrollTop
     * @param duration {number} duration for animte
     * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
     **/
    scrollTopBy: function(scrollTop, duration, easing, callback) {
        this.scrollTop(Number(scrollTop) + Number(this.getScrollTop()), duration, easing, callback);
    },
    /**
     * horizontal scroll absolute to the destination
     * @memberof XScroll
     * @param scrollLeft {number} scrollLeft
     * @param duration {number} duration for animte
     * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
     **/
    scrollLeft: function(scrollLeft, duration, easing, callback) {},
    /**
     * vertical scroll absolute to the destination
     * @memberof XScroll
     * @param scrollTop {number} scrollTop
     * @param duration {number} duration for animte
     * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
     **/
    scrollTop: function(scrollTop, duration, easing, callback) {},
    /**
     * reset the boundry size
     * @memberof XScroll
     * @return {XScroll}
     **/
    resetSize: function() {
        var self = this;
        if(!self.container || !self.content) return;
        var userConfig = self.userConfig;
        var renderToStyle = getComputedStyle(self.renderTo);
        var width = self.width = (userConfig.width || self.renderTo.offsetWidth) - Util.px2Num(renderToStyle['padding-left']) - Util.px2Num(renderToStyle['padding-right']);
        var height = self.height = (userConfig.height || self.renderTo.offsetHeight) - Util.px2Num(renderToStyle['padding-top']) - Util.px2Num(renderToStyle['padding-bottom']);;
        var containerWidth = userConfig.containerWidth || self.content.offsetWidth;
        var containerHeight = userConfig.containerHeight || self.content.offsetHeight;
        self.containerWidth = containerWidth < self.width ? self.width : containerWidth;
        self.containerHeight = containerHeight < self.height ? self.height : containerHeight;
        self.boundry.refresh({
            width: self.width,
            height: self.height
        });
        return self;
    },
    /**
     * render scroll
     * @memberof XScroll
     * @return {XScroll}
     **/
    render: function() {
        var self = this;
        self.resetSize();
        //init stickies
        self.initSticky();
        //init fixed elements
        self.initFixed();

        self.trigger("afterrender", {
            type: "afterrender"
        });
        self._bindEvt();
        //update touch-action 
        self.initTouchAction();
        return self;
    },
    /**
     * init touch action
     * @memberof XScroll
     * @return {XScroll}
     */
    initTouchAction: function() {
        var self = this;
        self.mc.set({
            touchAction: self.userConfig.touchAction
        });
        return self;
    },
    initFixed: function() {
        var self = this,
            userConfig = self.userConfig;
        self.fixed = self.fixed || new Fixed({
            fixedElements:userConfig.fixedElements,
            xscroll:self,
            fixedRenderTo:userConfig.fixedRenderTo
        });
        self.fixed.render();
        self.resetSize();
        return self;
    },
    initSticky:function(){
        var self = this,userConfig = self.userConfig;
        var sticky = self.sticky = self.sticky || new Sticky({
            xscroll:self,
            zoomType:userConfig.zoomType,
            stickyRenderTo:userConfig.stickyRenderTo
        });
        sticky.render();
    },
    /**
     * bounce to the boundry vertical and horizontal
     * @memberof XScroll
     * @return {XScroll}
     **/
    boundryCheck: function() {
        return this;
    },
    /**
     * bounce to the boundry horizontal
     * @memberof XScroll
     * @return {XScroll}
     **/
    boundryCheckX: function() {
        return this;
    },
    /**
     * bounce to the boundry vertical
     * @memberof XScroll
     * @return {XScroll}
     **/
    boundryCheckY: function() {
        return this;
    },
    _bindEvt: function() {
        var self = this;
        if (self.___isEvtBind) return;
        self.___isEvtBind = true;
        var mc = self.mc = new Hammer.Manager(self.renderTo);
        var tap = new Hammer.Tap();
        var pan = new Hammer.Pan();
        var pinch = new Hammer.Pinch();
        mc.add([tap, pan]);
        //trigger all events 
        self.mc.on("panstart pan panend pancancel pinchstart pinchmove pinchend pinchcancel pinchin pinchout", function(e) {
            self.trigger(e.type, e);
        });
        //trigger touch events
        var touchEvents = ['touchstart', 'touchmove', 'touchend', 'touchcancel','mousedown'];
        for (var i = 0, l = touchEvents.length; i < l; i++) {
            self.renderTo.addEventListener(touchEvents[i], function(e) {
                self.trigger(e.type, e);
            });
        }
        self.mc.on("tap", function(e) {
            if (e.tapCount == 1) {
                e.type = "tap";
                self.trigger(e.type, e);
            } else if (e.tapCount == 2) {
                e.type = "doubletap";
                self.trigger("doubletap", e);
            }
        });
        return self;
    },
    _resetLockConfig: function() {},
    stop: function() {}
});

if (typeof module == 'object' && module.exports) {
    module.exports = XScroll;
}
/** ignored by jsdoc **/
else {
    return XScroll;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
//easing
var Easing = {
	"linear": [0, 0, 1, 1],
	"ease": [.25, .1, .25, 1],
	"ease-in":[.42,0,1,1],
	"ease-out": [0, 0, .58, 1],
	"ease-in-out": [.42, 0, .58, 1],
	"quadratic": [0.33, 0.66, 0.66, 1],
	"circular": [0.1, 0.57, 0.1, 1],
	"bounce": [.71, 1.35, .47, 1.41],
	format: function(easing) {
		if (!easing) return;
		if (typeof easing === "string" && this[easing]) {
			return this[easing] instanceof Array ? [" cubic-bezier(", this[easing], ") "].join("") : this[easing];
		}
		if (easing instanceof Array) {
			return [" cubic-bezier(", easing, ") "].join("");
		}
		return easing;
	}
}
if (typeof module == 'object' && module.exports) {
	module.exports = Easing;
}
/** ignored by jsdoc **/
 else {
	return Easing;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(507);
var Base = __webpack_require__(508);
var Easing = __webpack_require__(532);

var RAF = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function(callback) {
		window.setTimeout(callback, 1000 / 60);
	};

var vendors = ['webkit', 'moz', 'ms', 'o'];
var cancelRAF = window.cancelAnimationFrame;
if (!cancelRAF) {
	for (var i = 0; i < vendors.length; i++) {
		if (window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame']) {
			cancelRAF = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
		}
	}
}

cancelRAF = cancelRAF || window.clearTimeout;

function Bezier(x1, y1, x2, y2, epsilon) {
	var curveX = function(t) {
		var v = 1 - t;
		return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
	};

	var curveY = function(t) {
		var v = 1 - t;
		return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
	};

	var derivativeCurveX = function(t) {
		var v = 1 - t;
		return 3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (-t * t * t + 2 * v * t) * x2;
	};

	return function(t) {

		var x = t,
			t0, t1, t2, x2, d2, i;

		// First try a few iterations of Newton's method -- normally very fast.
		for (t2 = x, i = 0; i < 8; i++) {
			x2 = curveX(t2) - x;
			if (Math.abs(x2) < epsilon) return curveY(t2);
			d2 = derivativeCurveX(t2);
			if (Math.abs(d2) < 1e-6) break;
			t2 = t2 - x2 / d2;
		}

		t0 = 0, t1 = 1, t2 = x;

		if (t2 < t0) return curveY(t0);
		if (t2 > t1) return curveY(t1);

		// Fallback to the bisection method for reliability.
		while (t0 < t1) {
			x2 = curveX(t2);
			if (Math.abs(x2 - x) < epsilon) return curveY(t2);
			if (x > x2) t0 = t2;
			else t1 = t2;
			t2 = (t1 - t0) * .5 + t0;
		}

		// Failure
		return curveY(t2);

	};

};



function Timer(cfg) {
	var self = this;
	self.cfg = Util.mix({
		easing: "linear"
	}, cfg)
}

Timer.MIN_DURATION = 1;

Util.extend(Timer, Base, {
	reset: function(cfg) {
		var self = this;
		Util.mix(self.cfg, cfg);
		self.isfinished = false;
		self.percent = 0;
		self._stop = null;
	},
	run: function() {
		var self = this;
		var duration = self.cfg.duration;
		if (duration <= Timer.MIN_DURATION) {
			self.isfinished = true;
			self.trigger("run", {
				percent: 1
			});
			self.trigger("end", {
				percent: 1
			});
		}
		if (self.isfinished) return;
		self._hasFinishedPercent = self._stop && self._stop.percent || 0;
		self._stop = null;
		self.start = Date.now();
		self.percent = 0;
		// epsilon determines the precision of the solved values
		var epsilon = (1000 / 60 / duration) / 4;
		var b = Easing[self.cfg.easing];
		self.easingFn = Bezier(b[0], b[1], b[2], b[3], epsilon);
		self._run();
	},
	_run: function() {
		var self = this;
		cancelRAF(self._raf);
		self._raf = RAF(function() {
			self.now = Date.now();
			self.duration = self.now - self.start >= self.cfg.duration ? self.cfg.duration : self.now - self.start;
			self.progress = self.easingFn(self.duration / self.cfg.duration);
			self.percent = self.duration / self.cfg.duration + self._hasFinishedPercent;
			if (self.percent >= 1 || self._stop) {
				self.percent = self._stop && self._stop.percent ? self._stop.percent : 1;
				self.duration = self._stop && self._stop.duration ? self._stop.duration : self.duration;
				var param = {
					percent: self.percent
				};
				self.trigger("stop", param);
				if (self.percent >= 1) {
					self.isfinished = true;
					self.trigger("end", {
						percent: 1
					});
				}
				return;
			}
			self.trigger("run", {
				percent: self.progress,
				originPercent:self.percent
			});
			self._run();
		})
	},
	stop: function() {
		var self = this;
		self._stop = {
			percent: self.percent,
			now: self.now
		};
		cancelRAF(self._raf)
	}
});


if (typeof module == 'object' && module.exports) {
	module.exports = Timer;
}
/** ignored by jsdoc **/
else {
	return Timer;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_object_assign__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_xscroll_build_cmd_xscroll_js__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_xscroll_build_cmd_xscroll_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vux_xscroll_build_cmd_xscroll_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vux_xscroll_build_cmd_plugins_pulldown__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vux_xscroll_build_cmd_plugins_pulldown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vux_xscroll_build_cmd_plugins_pulldown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vux_xscroll_build_cmd_plugins_pullup__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vux_xscroll_build_cmd_plugins_pullup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vux_xscroll_build_cmd_plugins_pullup__);
//
//
//
//
//
//
//
//
//
//






const pulldownDefaultConfig = () => ({
  content: 'Pull Down To Refresh',
  height: 60,
  autoRefresh: false,
  downContent: 'Pull Down To Refresh',
  upContent: 'Release To Refresh',
  loadingContent: 'Loading...',
  clsPrefix: 'xs-plugin-pulldown-'
});

const pullupDefaultConfig = () => ({
  content: 'Pull Up To Refresh',
  pullUpHeight: 60,
  height: 40,
  autoRefresh: false,
  downContent: 'Release To Refresh',
  upContent: 'Pull Up To Refresh',
  loadingContent: 'Loading...',
  clsPrefix: 'xs-plugin-pullup-'
});

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'scroller',
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          pulldownStatus: '',
          pullupStatus: ''
        };
      }
    },
    height: String,
    lockX: Boolean,
    lockY: Boolean,
    scrollbarX: Boolean,
    scrollbarY: Boolean,
    bounce: {
      type: Boolean,
      default: true
    },
    useOriginScroll: {
      type: Boolean,
      default: false
    },
    useTransition: {
      type: Boolean,
      default: true
    },
    preventDefault: {
      type: Boolean,
      default: false
    },
    stopPropagation: Boolean,
    boundryCheck: {
      type: Boolean,
      default: true
    },
    gpuAcceleration: {
      type: Boolean,
      default: true
    },
    usePulldown: {
      type: Boolean,
      default: false
    },
    usePullup: {
      type: Boolean,
      default: false
    },
    /**
    * refer to: http://xscroll.github.io/node_modules/xscroll/doc/PullDown.html
    */
    pulldownConfig: {
      type: Object,
      default() {
        return {};
      }
    },
    pullupConfig: {
      type: Object,
      default() {
        return {};
      }
    },
    enableHorizontalSwiping: {
      type: Boolean,
      default: false
    },
    scrollBottomOffset: {
      type: Number,
      default: 0
    }
  },
  methods: {
    reset(scrollPosition, duration, easing) {
      if (scrollPosition) {
        if (typeof scrollPosition.left !== 'undefined') {
          this._xscroll.scrollLeft(scrollPosition.left, duration, easing);
        }
        if (typeof scrollPosition.top !== 'undefined') {
          this._xscroll.scrollTop(scrollPosition.top, duration, easing);
        }
      }
      this._xscroll && this._xscroll.resetSize();
    },
    donePulldown() {
      this.pulldown.reset(() => {
        // repaint
        this.reset();
      });
      this.currentValue.pulldownStatus = 'default';
    },
    disablePullup() {
      // this._xscroll.unplug(this.pullup)
      this.pullup.stop();
      this.currentValue.pullupStatus = 'disabled';
    },
    enablePullup() {
      this.currentValue.pullupStatus = 'default';
      this.pullup.restart();
    },
    donePullup() {
      this.pullup.complete();
      this.reset();
      this.currentValue.pullupStatus = 'default';
    },
    getStyles() {
      let height = this.height;
      if (!this.height && this.$el && !this.$el.style.height && this.lockX) {
        height = `${document.documentElement.clientHeight}px`;
        this.reset();
      }

      if (this.height && this.height.indexOf('-') === 0) {
        height = `${document.documentElement.clientHeight + parseInt(this.height)}px`;
      }
      this.styles = {
        height: `${height}`
      };
    }
  },
  created() {
    if (!this.value) {
      this.currentValue = {
        pulldownStatus: '',
        pullupStatus: ''
      };
    } else {
      this.currentValue = this.value;
    }
    this.handleOrientationchange = () => {
      setTimeout(() => {
        this.reset();
      }, 100);
    };
  },
  data() {
    return {
      currentValue: {},
      styles: {}
    };
  },
  watch: {
    currentValue: {
      handler: function (val) {
        this.$emit('input', pure(val));
      },
      deep: true
    },
    height() {
      this.getStyles();
    },
    value: {
      handler: function (val) {
        if (val.pullupStatus === 'default' && this.currentValue.pullupStatus !== 'default') {
          this.donePullup();
        }
        if (val.pulldownStatus === 'default' && this.currentValue.pulldownStatus !== 'default') {
          this.donePulldown();
        }
        if (val.pullupStatus === 'disabled' && this.currentValue.pullupStatus !== 'disabled') {
          this.disablePullup();
        }
        if (val.pullupStatus === 'enabled' && this.currentValue.pullupStatus === 'disabled') {
          this.enablePullup();
        }
      },
      deep: true
    }
  },
  mounted() {
    this.uuid = Math.random().toString(36).substring(3, 8);
    this.$nextTick(() => {
      this.$el.setAttribute('id', `vux-scroller-${this.uuid}`);
      let content = null;
      if (this.$slots.default) {
        content = this.$slots.default[0].elm;
      }
      if (!content) {
        throw new Error('no content is found');
      }

      this._xscroll = new __WEBPACK_IMPORTED_MODULE_1_vux_xscroll_build_cmd_xscroll_js___default.a({
        renderTo: `#vux-scroller-${this.uuid}`,
        lockX: this.lockX,
        lockY: this.lockY,
        scrollbarX: this.scrollbarX,
        scrollbarY: this.scrollbarY,
        content: content,
        bounce: this.bounce,
        useOriginScroll: this.useOriginScroll,
        useTransition: this.useTransition,
        preventDefault: this.preventDefault,
        boundryCheck: this.boundryCheck,
        gpuAcceleration: this.gpuAcceleration,
        stopPropagation: this.stopPropagation
      });

      this._xscroll.on('scroll', () => {
        if (this._xscroll) {
          const top = this._xscroll.getScrollTop();
          this.$emit('on-scroll', {
            top: top,
            left: this._xscroll.getScrollLeft()
          });
          const containerHeight = this._xscroll.containerHeight;
          const scrollHeight = this._xscroll.height;
          if (top >= containerHeight - scrollHeight - this.scrollBottomOffset) {
            this.$emit('on-scroll-bottom');
          }
        }
      });

      if (this.usePulldown) {
        // if use slot=pulldown
        let container = this.$slots.pulldown;
        let config = __WEBPACK_IMPORTED_MODULE_0_object_assign___default()(pulldownDefaultConfig(), this.pulldownConfig);
        if (container) {
          config.container = container[0].elm;
        }
        this.pulldown = new __WEBPACK_IMPORTED_MODULE_2_vux_xscroll_build_cmd_plugins_pulldown___default.a(config);
        this._xscroll.plug(this.pulldown);
        this.pulldown.on('loading', e => {
          this.$emit('on-pulldown-loading', this.uuid);
        });
        this.pulldown.on('statuschange', val => {
          this.currentValue.pulldownStatus = val.newVal;
        });
      }

      if (this.usePullup) {
        // if use slot=pullup
        let container = this.$slots.pullup;
        let config = __WEBPACK_IMPORTED_MODULE_0_object_assign___default()(pullupDefaultConfig(), this.pullupConfig);

        if (container) {
          config.container = container[0].elm;
        }
        this.pullup = new __WEBPACK_IMPORTED_MODULE_3_vux_xscroll_build_cmd_plugins_pullup___default.a(config);
        this._xscroll.plug(this.pullup);
        this.pullup.on('loading', e => {
          this.$emit('on-pullup-loading', this.uuid);
        });
        this.pullup.on('statuschange', val => {
          this.currentValue.pullupStatus = val.newVal;
        });
      }

      if (this.enableHorizontalSwiping) {
        this._xscroll.on('panstart', e => {
          if (e.direction === 2 || e.direction === 4) {
            e.preventDefault();
            if (this.scrollbarY) {
              this._xscroll.userConfig.scrollbarY = false;
            }
            this._xscroll.userConfig.lockY = true;
          }
        });
        this._xscroll.on('panend', () => {
          if (this.scrollbarY) {
            this._xscroll.userConfig.scrollbarY = true;
          }
          this._xscroll.userConfig.lockY = false;
        });
      }

      this._xscroll.render();
      window.addEventListener('orientationchange', this.handleOrientationchange, false);
    });
    this.getStyles();
  },
  updated() {
    this.reset();
  },
  beforeDestroy() {
    if (this.pullup) {
      this._xscroll.unplug(this.pullup);
      this.pullup.pluginDestructor();
    }
    if (this.pulldown) {
      this._xscroll.unplug(this.pulldown);
      this.pulldown.pluginDestructor();
    }
    window.removeEventListener('orientationchange', this.handleOrientationchange, false);
    this._xscroll.destroy();
    this._xscroll = null;
  }
});

function pure(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(483)();
// imports


// module
exports.push([module.i, ".xs-plugin-pullup-container{text-align:center}", "", {"version":3,"sources":["D:/wx-h5/node_modules/_vux@2.9.1@vux/src/components/scroller/index.vue"],"names":[],"mappings":"AACA,4BACE,iBAAmB,CACpB","file":"index.vue","sourcesContent":["\n.xs-plugin-pullup-container {\n  text-align: center;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(544);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(484)("4eb26950", content, true);

/***/ }),

/***/ 546:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: (_vm.styles)
  }, [_c('div', {
    staticClass: "xs-container"
  }, [_vm._t("default"), _vm._v(" "), _vm._t("pulldown"), _vm._v(" "), _vm._t("pullup")], 2)])
},staticRenderFns: []}

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(545)

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(542),
  /* template */
  __webpack_require__(546),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
 var Util = __webpack_require__(507);

 function Boundry(cfg) {
     this.cfg = Util.mix({
         width: 0,
         height: 0
     }, cfg)
     this.init();
 }
 Util.mix(Boundry.prototype, {
     init: function() {
         var self = this;
         self._xtop = 0;
         self._xright = 0;
         self._xleft = 0;
         self._xbottom = 0;
         self.refresh({
             width: self.cfg.width,
             height: self.cfg.height
         });
     },
     reset: function() {
         this.resetTop();
         this.resetLeft();
         this.resetBottom();
         this.resetRight();
         return this;
     },
     resetTop: function() {
         this._xtop = 0;
         this.refresh();
         return this;
     },
     resetLeft: function() {
         this._xleft = 0;
         this.refresh();
         return this;
     },
     resetBottom: function() {
         this._xbottom = 0;
         this.refresh();
         return this;
     },
     resetRight: function() {
         this._xright = 0;
         this.refresh();
         return this;
     },
     expandTop: function(top) {
         this._xtop = top;
         this.refresh();
         return this;
     },
     expandLeft: function(left) {
         this._xleft = left;
         this.refresh();
         return this;
     },
     expandRight: function(right) {
         this._xright = right;
         this.refresh();
         return this;
     },
     expandBottom: function(bottom) {
         this._xbottom = bottom;
         this.refresh();
         return this;
     },
     refresh: function(cfg) {
         Util.mix(this.cfg, cfg);
         this.top = this._xtop;
         this.left = this._xleft;
         this.bottom = (cfg && cfg.height || this.cfg.height || 0) - this._xbottom;
         this.right = (cfg && cfg.width || this.cfg.width || 0) - this._xright;
         this.width = this.right - this.left > 0 ? this.right - this.left : 0;
         this.height = this.bottom - this.top > 0 ? this.bottom - this.top : 0;
         return this;
     }
 });


 if (typeof module == 'object' && module.exports) {
     module.exports = Boundry;
 }
 /** ignored by jsdoc **/
 else{
    return Boundry;
 }
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
/*
	wrapped scroll controller
*/
"use strict";
var Util = __webpack_require__(507),
	Base = __webpack_require__(508);

var Controller = function(cfg) {
	Controller.superclass.constructor.call(this, cfg);
	this.userConfig = Util.mix({}, cfg);
	this.init();
}

Util.extend(Controller, Base, {
	init: function() {
		var self = this;
		self.xscroll = self.userConfig.xscroll;
	},
	add: function(scroll, cfg) {
		var self = this;
		cfg = Util.extend({
			captureBounce: false,
			stopPropagation: true
		}, cfg)
		if (!self.__scrolls) {
			self.__scrolls = {};
		}
		if (scroll.guid && !self.__scrolls[scroll.guid]) {
			scroll.parentscroll = self.xscroll;
			self._bind(scroll);
			return self.__scrolls[scroll.guid] = scroll;
		}
		return;
	},
	remove: function(scroll) {
		var self = this;
		if (!scroll || !scroll.guid) return;
		var subscroll = self.__scrolls[scroll.guid];
		if (subscroll) {
			subscroll.parentscroll = null;
			self._unbind(scroll);
			subscroll = null;
		}
	},
	get: function(guid) {
		if (guid) {
			return this.__scrolls[guid];
		}
		return this.__scrolls;
	},

	_unbind: function(sub) {

	},

	_bind: function(sub) {
		var self = this,
			xscroll = self.xscroll;
		xscroll.renderTo.addEventListener("touchstart", function() {
			xscroll._resetLockConfig();
		});
		sub.renderTo.addEventListener("touchstart", function() {
			sub._resetLockConfig();
		});
		xscroll.on("panend", xscroll._resetLockConfig);
		sub.on("panend", sub._resetLockConfig);
		sub.on("panstart", function(e) {
			//vertical scroll enabled
			if (!sub.userConfig.lockY && !xscroll.userConfig.lockY) {
				//outside of boundry
				if (sub.isBoundryOut()) {
					xscroll.userConfig.lockY = true;
					return;
				}
				if (e.direction == 16 && sub.getBoundryOutTop() >= 0) {
					sub.userConfig.lockY = true;
				} else if (e.direction == 8 && sub.getBoundryOutTop() >= 0 && sub.getBoundryOutBottom() < 0) {
					xscroll.userConfig.lockY = true;
				}
				if (e.direction == 8 && sub.getBoundryOutBottom() >= 0) {
					sub.userConfig.lockY = true;
				} else if (e.direction == 16 && sub.getBoundryOutBottom() >= 0 && sub.getBoundryOutTop() < 0) {
					xscroll.userConfig.lockY = true;
				}
				if (sub.getBoundryOutTop() < 0 && sub.getBoundryOutBottom() < 0) {
					xscroll.userConfig.lockY = true;
				}
			}
			//horizontal scroll enabled
			if (!sub.userConfig.lockX && !xscroll.userConfig.lockX) {
				if (sub.isBoundryOut()) {
					xscroll.userConfig.lockX = true;
					return;
				}
				if (e.direction == 4 && sub.getBoundryOutLeft() >= 0) {
					sub.userConfig.lockX = true;
				} else if (e.direction == 2 && sub.getBoundryOutLeft() >= 0 && sub.getBoundryOutRight() < 0) {
					xscroll.userConfig.lockX = true;
				}
				if (e.direction == 2 && sub.getBoundryOutRight() >= 0) {
					sub.userConfig.lockX = true;
				} else if (e.direction == 4 && sub.getBoundryOutRight() >= 0 && sub.getBoundryOutLeft() < 0) {
					xscroll.userConfig.lockX = true;
				}
				if (sub.getBoundryOutLeft() < 0 && sub.getBoundryOutRight() < 0) {
					xscroll.userConfig.lockX = true;
				}
			}

			if (!sub.userConfig.lockX && xscroll.userConfig.lockX) {
				//pan x
				if (e.direction == 2 || e.direction == 4) {
					xscroll.userConfig.lockY = true;
				} else {
					sub.userConfig.lockX = true;
				}
			}

			if (!sub.userConfig.lockY && xscroll.userConfig.lockY) {
				//pan y
				if (e.direction == 8 || e.direction == 16) {
					xscroll.userConfig.lockX = true;
				} else {
					sub.userConfig.lockY = true;
				}
			}
		});
	}
});

if (typeof module == 'object' && module.exports) {
	module.exports = Controller;
}
/** ignored by jsdoc **/
else {
	return Controller;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(507);
var Base = __webpack_require__(508);
var transform = Util.prefixStyle("transform");

var Fixed = function(cfg) {
  Fixed.superclass.constructor.call(this, cfg);
  this.userConfig = Util.mix({
    fixedRenderTo: undefined,
    fixedElements: ".xs-fixed",
    prefix: "xs-fixed-container",
    zoomType: "y"
  }, cfg);
  this.init();
}

Util.extend(Fixed, Base, {
  fixedElements: [],
  init: function() {
    var self = this,
      userConfig = self.userConfig,
      xscroll = self.xscroll = userConfig.xscroll,
      xscrollConfig = self.xscrollConfig = xscroll.userConfig;
    self.isY = !!(userConfig.zoomType == "y");
    self._ = self.isY ? {
      top: "top",
      height: "height",
      width: "width",
      offsetTop:"offsetTop"
    } : {
      top: "left",
      height: "width",
      width: "height",
      offsetTop:"offsetLeft"
    };
    self.fixedRenderTo = Util.getNode(userConfig.fixedRenderTo);
    return self;
  },
  render: function() {
    var self = this;
    var xscroll = self.xscroll;
    self.infinite = xscroll.getPlugin("infinite");
    if (!self.fixedRenderTo) {
      self.fixedRenderTo = document.createElement('div');
      xscroll.renderTo.appendChild(self.fixedRenderTo);
    }
    Util.addClass(self.fixedRenderTo, self.userConfig.prefix);
    var originalFixedElements = self.originalFixedElements = self.getFixedElements();
    for (var i = 0, l = originalFixedElements.length; i < l; i++) {
      self.renderFixedElement(originalFixedElements[i], i,self.fixedRenderTo);
    }
    return self;
  },
  getFixedElements: function() {
    var self = this;
    var infinite = self.infinite;
    var userConfig = self.userConfig;
    if (infinite) {
      var els = [];
      for (var i in infinite.__serializedData) {
        var data = infinite.__serializedData[i];
        if (data && data.style && data.style.position == "fixed") {
          els.push(data);
        }
      }
      return els;
    } else {
      return Util.getNodes(userConfig.fixedElements, self.xscroll.content);
    }
  },
  renderFixedElement: function(el, fixedIndex,fixedRenderTo) {
    var self = this;
    var isRender = true;
    var _ = self._;
    var xscroll = self.xscroll;
    var userConfig = self.userConfig;
    var xscrollConfig = self.xscrollConfig;
    var useOriginScroll = xscrollConfig.useOriginScroll;
    var infinite = self.infinite;
    var fixedElement = self.fixedElements[fixedIndex];
    if (!self.fixedElements[fixedIndex]) {
      isRender = false;
      if (useOriginScroll && !infinite) {
        //use original position:fixed stylesheet
        el.style.position = "fixed";
        el.style.display = "block";
      } else {
        //deep clone fixed nodes and hide original nodes
        fixedElement = document.createElement("div");
        if (infinite) {
          fixedElement.setAttribute("style", Util.stringifyStyle(Util.mix(el.style, {
            display: "block",
            width: "100%"
          })));
          fixedElement.style[_.top] = (el.style[_.top] >= 0 ? el.style[_.top] : el._top) + "px";
          if (el.style[_.height]) {
            fixedElement.style[_.height] = el.style[_.height] + "px";
          }
          infinite.userConfig.renderHook.call(self, fixedElement, el);
        } else {
          fixedElement.style.display = "block";
          fixedElement.style.position = "absolute";
          fixedElement.style[_.width] = "100%";
          fixedElement.innerHTML = el.innerHTML;
          fixedElement.className = el.className;
          fixedElement.setAttribute("style", el.getAttribute("style"));
          fixedElement.style[_.top] = el[_.offsetTop] + "px";
          el.style.display = "none";
        }
        fixedRenderTo.appendChild(fixedElement);
        self.fixedElements.push(fixedElement);
      }
    }
    xscroll.trigger("fixedchange", {
      fixedIndex: fixedIndex,
      fixedElement: useOriginScroll ? el : fixedElement,
      originalFixedElement: el,
      isRender: isRender
    });
  },
  destroy: function() {
    var self = this;
    self.fixedElements = undefined;
  }
});

if (typeof module == 'object' && module.exports) {
  module.exports = Fixed;
}
/** ignored by jsdoc **/
else {
  return Fixed;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(507);
var Animate = __webpack_require__(512);
var MAX_BOUNCE_DISTANCE = 40;
var MIN_BAR_SCROLLED_SIZE = 10;
var MIN_BAR_SIZE = 50;
var transform = Util.prefixStyle("transform");
var transformStr = Util.vendor ? ["-", Util.vendor, "-transform"].join("") : "transform";
var transition = Util.prefixStyle("transition");
var borderRadius = Util.prefixStyle("borderRadius");
var transitionDuration = Util.prefixStyle("transitionDuration");

var ScrollBar = function(cfg) {
	this.userConfig = Util.mix({
		MIN_BAR_SCROLLED_SIZE:MIN_BAR_SCROLLED_SIZE,
		MIN_BAR_SIZE:MIN_BAR_SIZE,
		MAX_BOUNCE_DISTANCE:MAX_BOUNCE_DISTANCE,
		spacing:5
	}, cfg);
	this.init(cfg.xscroll);
}

Util.mix(ScrollBar.prototype, {
	init: function(xscroll) {
		var self = this;
		self.xscroll = xscroll;
		self.type = self.userConfig.type;
		self.isY = self.type == "y" ? true : false;
		self.scrollTopOrLeft = self.isY ? "scrollTop" : "scrollLeft";
	},
	destroy: function() {
		var self = this;
		Util.remove(self.scrollbar);
		self.xscroll.off("scroll", self._scrollHandler, self);
		self.xscroll.off("scrollend", self._scrollEndHandler, self);
	},
	render: function() {
		var self = this;
		var xscroll = self.xscroll;
		var boundry = xscroll.boundry;
		var indicatorInsets = self.xscroll.userConfig.indicatorInsets;
		var translateZ = xscroll.userConfig.gpuAcceleration ? " translateZ(0) " : "";
		var transform = translateZ ? transformStr + ":" + translateZ + ";" : "";
		var commonCss = "opacity:0;position:absolute;z-index:999;overflow:hidden;-webkit-border-radius:3px;-moz-border-radius:3px;-o-border-radius:3px;" + transform;
		indicatorInsets._xright =  indicatorInsets.right + indicatorInsets.spacing;
		indicatorInsets._xbottom =  indicatorInsets.bottom + indicatorInsets.spacing;
		var css = self.isY ?
			Util.substitute("width:{width}px;bottom:{_xbottom}px;top:{top}px;right:{right}px;", indicatorInsets) + commonCss :
			Util.substitute("height:{width}px;left:{left}px;right:{_xright}px;bottom:{bottom}px;",indicatorInsets) + commonCss;
		

		if(!self.scrollbar){
			self.scrollbar = document.createElement("div");	
			self.indicate = document.createElement("div");
			xscroll.renderTo.appendChild(self.scrollbar);
			self.scrollbar.appendChild(self.indicate);
		}
		self.scrollbar.style.cssText = css;
		var size = self.isY ? "width:100%;" : "height:100%;";
		self.indicate.style.cssText = size + "position:absolute;background:rgba(0,0,0,0.3);-webkit-border-radius:3px;-moz-border-radius:3px;-o-border-radius:3px;"
		self._update();
		self.hide(0);
		self._bindEvt();
	},
	_update: function(pos, duration, easing, callback) {
		var self = this;
		var pos = undefined === pos ? (self.isY ? self.xscroll.getScrollTop() : self.xscroll.getScrollLeft()) : pos;
		var barInfo = self.computeScrollBar(pos);
		var size = self.isY ? "height" : "width";
		self.indicate.style[size] = Math.round(barInfo.size) + "px";
		if (duration && easing) {
			self.scrollTo(barInfo.pos, duration, easing, callback);
		} else {
			self.moveTo(barInfo.pos);
		}
	},
	//compute the position and size of the scrollbar
	computeScrollBar: function(pos) {
		var self = this;
		var type = self.isY ? "y" : "x";
		var spacing = self.userConfig.spacing;
		var xscroll = self.xscroll;
		var boundry = xscroll.boundry;
		var userConfig = self.userConfig;
		var pos = self.isY ? Math.round(pos) + boundry._xtop : Math.round(pos) + boundry._xleft;
		var MIN_BAR_SCROLLED_SIZE = userConfig.MIN_BAR_SCROLLED_SIZE;
		var MIN_BAR_SIZE = userConfig.MIN_BAR_SIZE;
		var MAX_BOUNCE_DISTANCE = userConfig.MAX_BOUNCE_DISTANCE;
		self.containerSize = self.isY ? xscroll.containerHeight + boundry._xtop + boundry._xbottom : self.xscroll.containerWidth + boundry._xright + boundry._xleft;
		self.size = self.isY ? boundry.cfg.height : boundry.cfg.width;
		self.indicateSize = self.isY ? boundry.cfg.height - spacing * 2 : boundry.cfg.width - spacing * 2;
		var indicateSize = self.indicateSize;
		var containerSize = self.containerSize;
		var barPos = indicateSize * pos / containerSize;
		var barSize = Math.round(indicateSize * self.size / containerSize);
		var overTop = self.isY ? xscroll.getBoundryOutTop() : xscroll.getBoundryOutLeft();
		var overBottom = self.isY ? xscroll.getBoundryOutBottom() : xscroll.getBoundryOutRight();
		var barShiftSize = MIN_BAR_SIZE - barSize > 0 ? MIN_BAR_SIZE - barSize : 0;
		barSize = barSize < MIN_BAR_SIZE ? MIN_BAR_SIZE : barSize;
		barPos = (indicateSize - barShiftSize) * pos / containerSize;
		if (overTop >= 0) {
			var pct = overTop / MAX_BOUNCE_DISTANCE;
			pct = pct > 1 ? 1 : pct;
			barPos = - pct * (barSize -  MIN_BAR_SCROLLED_SIZE)
		}
		if (overBottom >= 0) {
			var pct = overBottom / MAX_BOUNCE_DISTANCE;
			pct = pct > 1 ? 1 : pct;
			barPos = pct * (barSize - MIN_BAR_SCROLLED_SIZE) + indicateSize - barSize; 
		}
		self.barPos = Math.round(barPos);
		return {
			size: Math.round(barSize),
			pos: self.barPos
		};
	},
	scrollTo: function(pos, duration, easing, callback) {
		var self = this;
		self.show();
		var translateZ = self.xscroll.userConfig.gpuAcceleration ? " translateZ(0) " : "";
		var config = {
			css: {
				transform: self.isY ? "translateY(" + pos + "px)" + translateZ : "translateX(" + pos + "px)" + translateZ
			},
			duration: duration,
			easing: easing,
			useTransition: self.xscroll.userConfig.useTransition,
			end: callback
		};
		self.__timer = self.__timer || new Animate(self.indicate, config);
		//run
		self.__timer.stop();
		self.__timer.reset(config);
		self.__timer.run();
	},
	moveTo: function(pos) {
		var self = this;
		self.show();
		var translateZ = self.xscroll.userConfig.gpuAcceleration ? " translateZ(0) " : "";
		self.isY ? self.indicate.style[transform] = "translateY(" + pos + "px) " + translateZ : self.indicate.style[transform] = "translateX(" + pos + "px) " + translateZ
		self.indicate.style[transition] = "";
	},
	_scrollHandler: function(e) {
		var self = this;
		self._update(e[self.scrollTopOrLeft]);
		return self;
	},
	isBoundryOut: function() {
		var self = this;
		return !self.isY ? (self.xscroll.isBoundryOutLeft() || self.xscroll.isBoundryOutRight()) : (self.xscroll.isBoundryOutTop() || self.xscroll.isBoundryOutBottom());
	},
	_scrollEndHandler: function(e) {
		var self = this;
		if (!self.isBoundryOut()) {
			self._update(e[self.scrollTopOrLeft]);
			self.hide();
		}
		return self;
	},
	_bindEvt: function() {
		var self = this;
		if (self.__isEvtBind) return;
		self.__isEvtBind = true;
		self.xscroll.on("scroll", self._scrollHandler, self);
		self.xscroll.on("scrollend", self._scrollEndHandler, self);
	},
	reset: function() {
		var self = this;
		self.pos = 0;
		self._update();
	},
	hide: function(duration, easing, delay) {
		var self = this;
		var duration = duration >= 0 ? duration : 300;
		var easing = easing || "ease-out";
		var delay = delay >= 0 ? delay : 100;
		self.scrollbar.style.opacity = 0;
		self.scrollbar.style[transition] = ["opacity ", duration, "ms ", " ease-out ", delay, "ms"].join("");
	},
	show: function() {
		var self = this;
		self.scrollbar.style.opacity = 1;
		self.scrollbar.style[transition] = "";
	}
});

if (typeof module == 'object' && module.exports) {
	module.exports = ScrollBar;
}
/** ignored by jsdoc **/
else {
	return ScrollBar;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(507);
var Base = __webpack_require__(508);
//transform
var transform = Util.prefixStyle("transform");
// default render function for position:sticky elements
var defaultStickyRenderFunc = function(e) {
  var stickyElement = e.stickyElement;
  var curStickyElement = e.curStickyElement;
  var xscroll = e.xscroll;
  var _ = e._;
  var infinite = xscroll.getPlugin("infinite");
  if (infinite) {
    infinite.userConfig.renderHook.call(self, stickyElement, curStickyElement);
    stickyElement.setAttribute("xs-guid", curStickyElement.guid);
    Util.addClass(stickyElement, curStickyElement.className);
    for (var attrName in curStickyElement.style) {
      if (attrName != "display" && attrName != "position") {
        //copy styles
        stickyElement.style[attrName] = attrName == _.height ? curStickyElement.style[attrName] + 'px' : curStickyElement.style[attrName];
      }
    }
  } else {
    var style = curStickyElement.getAttribute("style");
    stickyElement.innerHTML = curStickyElement.innerHTML;
    stickyElement.className = curStickyElement.className;
    style && stickyElement.setAttribute("style", style);
  }
}

var Sticky = function(cfg) {
  Sticky.superclass.constructor.call(this, cfg);
  this.userConfig = Util.mix({
    stickyRenderTo: undefined,
    forceSticky: true,
    prefix: "xs-sticky-container",
    stickyRenderFunc: defaultStickyRenderFunc,
    zoomType: "y"
  }, cfg);
  this.init();
}

Util.extend(Sticky, Base, {
  init: function() {
    var self = this,
      userConfig = self.userConfig,
      xscroll = self.xscroll = userConfig.xscroll;
    var isY = self.isY = !!(userConfig.zoomType == "y");
    self._ = {
      top: self.isY ? "top" : "left",
      left: self.isY ? "left" : "bottom",
      right: self.isY ? "right" : "top",
      height: self.isY ? "height" : "width",
      width: self.isY ? "width" : "height"
    };
    self.stickyRenderTo = Util.getNode(userConfig.stickyRenderTo);
    self._handlers = [];
    return self;
  },
  getStickiesPos: function() {
    var self = this;
    var xscroll = self.xscroll;
    var isInfinite = self.isInfinite;
    var isY = self.isY;
    var _ = self._;
    var stickiesPos = [];
    var getPos = function(sticky) {
      var pos = {};
      if (isInfinite) {
        pos[_.top] = isY ? sticky._top : sticky._left;
        pos[_.height] = isY ? sticky._height : sticky._width;
      } else {
        pos[_.top] = self.isY ? Util.getOffsetTop(sticky) : Util.getOffsetLeft(sticky);
        pos[_.height] = self.isY ? sticky.offsetHeight : sticky.offsetWidth;
      }
      return pos;
    }
    for (var i = 0; i < self.stickiesNum; i++) {
      var pos = getPos(self.stickyElements[i]);
      self._handlers[i] = self._handlers[i] || self.createStickyEl();
      pos.el = self._handlers[i];
      pos.isRender = false;
      stickiesPos.push(pos);
    }
    return stickiesPos
  },
  getStickyElements: function() {
    var self = this;
    var xscroll = self.xscroll;
    var userConfig = self.userConfig;
    var isInfinite = self.isInfinite;
    var infinite = xscroll.getPlugin("infinite");
    if (infinite) {
      var stickyElements = [],
        serializedData = infinite.__serializedData;
      for (var i in serializedData) {
        var rowData = serializedData[i];
        if (rowData && rowData.style && "sticky" == rowData.style.position) {
          stickyElements.push(rowData);
        }
      }
      return stickyElements;
    } else {
      return Util.getNodes(xscroll.userConfig.stickyElements, xscroll.content);
    }
  },
  render: function(force) {
    var self = this;
    var userConfig = self.userConfig;
    var xscroll = self.xscroll;
    self.isInfinite = !!xscroll.getPlugin("infinite");
    var _ = self._;
    self.stickyElements = self.getStickyElements();
    self.stickiesNum = self.stickyElements && self.stickyElements.length;
    if (!self.stickiesNum) return;
    if (!self.stickyRenderTo) {
      self.stickyRenderTo = document.createElement('div');
      xscroll.renderTo.appendChild(self.stickyRenderTo);
    }
    self.stickiesPos = self.getStickiesPos();
    var stickyRenderTo = self.stickyRenderTo;
    stickyRenderTo.style[_.top] = 0;
    stickyRenderTo.style[_.left] = 0;
    stickyRenderTo.style[_.right] = 0;
    stickyRenderTo.style.position = xscroll.userConfig.useOriginScroll ? "fixed" : "absolute";
    Util.addClass(self.stickyRenderTo, userConfig.prefix);
    self.stickyHandler(force);
    self._bindEvt();
  },
  createStickyEl: function() {
    var self = this;
    var el = document.createElement('div');
    el.style.display = "none";
    Util.addClass(el, "xs-sticky-handler");
    self.stickyRenderTo.appendChild(el);
    return el;
  },
  _bindEvt: function() {
    var self = this,
      xscroll = self.xscroll;
    xscroll.on("scroll", self.stickyHandler, self);
  },
  stickyHandler: function(force) {
    var self = this;
    var xscroll = self.xscroll;
    var userConfig = self.userConfig;
    var scrollTop = self.isY ? xscroll.getScrollTop() : xscroll.getScrollLeft();
    var stickiesPos = self.stickiesPos;
    var _ = self._;
    var indexes = [];
    for (var i = 0, l = stickiesPos.length; i < l; i++) {
      var top = stickiesPos[i][_.top];
      if (scrollTop > top) {
        indexes.push(i);
      }
    }
    if (!indexes.length) {
      if (self.stickyElement) {
        self.stickyElement.style.display = "none";
      }
      self.curStickyIndex = undefined;
      return;
    }

    var curStickyIndex = Math.max.apply(null, indexes);
    if (self.curStickyIndex != curStickyIndex || force) {
      var prevStickyIndex = self.curStickyIndex;
      self.curStickyIndex = curStickyIndex;
      self.curStickyElement = self.stickyElements[curStickyIndex];
      self.curStickyPos = stickiesPos[curStickyIndex];
      self.stickyElement = self.curStickyPos.el;
      for (var i = 0, l = stickiesPos.length; i < l; i++) {
        stickiesPos[i].el.style.display = "none";
      }
      var eventsObj = {
        stickyElement: self.stickyElement,
        curStickyIndex: self.curStickyIndex,
        prevStickyIndex: prevStickyIndex,
        curStickyPos: self.curStickyPos,
        isRender: self.curStickyPos.isRender
      };
      xscroll.trigger("beforestickychange", eventsObj);
      self._stickyRenderFunc(self);
      xscroll.trigger("stickychange", eventsObj);
    }

    var trans = 0;
    if (self.stickiesPos[self.curStickyIndex + 1]) {
      var cur = self.stickiesPos[self.curStickyIndex];
      var next = self.stickiesPos[self.curStickyIndex + 1];
      if (scrollTop + cur[_.height] > next[_.top] && scrollTop + cur[_.height] < next[_.top] + cur[_.height]) {
        trans = cur[_.height] + scrollTop - next[_.top];
      } else {
        trans = 0;
      }
    }
    self.stickyElement.style[transform] = self.isY ? "translateY(-" + (trans) + "px) translateZ(0)" : "translateX(-" + (trans) + "px) translateZ(0)";
  },
  _stickyRenderFunc: function(e) {
    var self = this;
    var _ = self._;
    var stickyRenderFunc = self.userConfig.stickyRenderFunc;
    var el = self.curStickyPos.el;
    if (!self.curStickyPos.isRender) {
      el.style[_.left] = 0;
      el.style[_.right] = 0;
      stickyRenderFunc && stickyRenderFunc.call(self, e);
    }
    el.style.display = "block";
    self.curStickyPos.isRender = true;
  },
  destroy: function() {
    var self = this;
    self.stickyElements = undefined;
    self.stickiesNum = undefined;
    self.stickiesPos = undefined;
    Util.remove(self.stickyElement);
    self.stickyElement = undefined;
  }
});

if (typeof module == 'object' && module.exports) {
  module.exports = Sticky;
}
/** ignored by jsdoc **/
else {
  return Sticky;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(507);
// Returns a function that will be executed at most one time, no matter how
// often you call it. Useful for lazy initialization.
var _once = function(func) {
  var ran = false,
    memo;
  return function() {
    if (ran) return memo;
    ran = true;
    memo = func.apply(this, arguments);
    func = null;
    return memo;
  };
};


/**
 * @discription events
 * @mixin
 */
var Events = {
  // Bind an event to a `callback` function. Passing `"all"` will bind
  // the callback to all events fired.
  on: function(name, callback, context) {
    if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
    this._events || (this._events = {});
    var events = this._events[name] || (this._events[name] = []);
    events.push({
      callback: callback,
      context: context,
      ctx: context || this
    });
    return this;
  },


  // Bind an event to only be triggered a single time. After the first time
  // the callback is invoked, it will be removed.
  once: function(name, callback, context) {
    if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
    var self = this;
    var once = _once(function() {
      self.off(name, once);
      callback.apply(this, arguments);
    });
    once._callback = callback;
    return this.on(name, once, context);
  },

  // Remove one or many callbacks. If `context` is null, removes all
  // callbacks with that function. If `callback` is null, removes all
  // callbacks for the event. If `name` is null, removes all bound
  // callbacks for all events.
  off: function(name, callback, context) {
    if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;

    // Remove all callbacks for all events.
    if (!name && !callback && !context) {
      this._events = void 0;
      return this;
    }

    var names = name ? [name] : Object.keys(this._events);
    for (var i = 0, length = names.length; i < length; i++) {
      name = names[i];

      // Bail out if there are no events stored.
      var events = this._events[name];
      if (!events) continue;

      // Remove all callbacks for this event.
      if (!callback && !context) {
        delete this._events[name];
        continue;
      }

      // Find any remaining events.
      var remaining = [];
      for (var j = 0, k = events.length; j < k; j++) {
        var event = events[j];
        if (
          callback && callback !== event.callback &&
          callback !== event.callback._callback ||
          context && context !== event.context
        ) {
          remaining.push(event);
        }
      }

      // Replace events if there are any remaining.  Otherwise, clean up.
      if (remaining.length) {
        this._events[name] = remaining;
      } else {
        delete this._events[name];
      }
    }

    return this;
  },

  // Trigger one or many events, firing all bound callbacks. Callbacks are
  // passed the same arguments as `trigger` is, apart from the event name
  // (unless you're listening on `"all"`, which will cause your callback to
  // receive the true name of the event as the first argument).
  trigger: function(name) {
    if (!this._events) return this;
    var args = Array.prototype.slice.call(arguments, 1);
    if (!eventsApi(this, 'trigger', name, args)) return this;
    var events = this._events[name];
    var allEvents = this._events.all;
    if (events) triggerEvents(events, args);
    if (allEvents) triggerEvents(allEvents, arguments);
    return this;
  },

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  listenTo: function(obj, name, callback) {
    var listeningTo = this._listeningTo || (this._listeningTo = {});
    var id = obj._listenId || (obj._listenId = Util.guid('l'));
    listeningTo[id] = obj;
    if (!callback && typeof name === 'object') callback = this;
    obj.on(name, callback, this);
    return this;
  },

  listenToOnce: function(obj, name, callback) {
    if (typeof name === 'object') {
      for (var event in name) this.listenToOnce(obj, event, name[event]);
      return this;
    }
    var cb = _once(function() {
      this.stopListening(obj, name, cb);
      callback.apply(this, arguments);
    });
    cb._callback = callback;
    return this.listenTo(obj, name, cb);
  },

  // Tell this object to stop listening to either specific events ... or
  // to every object it's currently listening to.
  stopListening: function(obj, name, callback) {
    var listeningTo = this._listeningTo;
    if (!listeningTo) return this;
    var remove = !name && !callback;
    if (!callback && typeof name === 'object') callback = this;
    if (obj)(listeningTo = {})[obj._listenId] = obj;
    for (var id in listeningTo) {
      obj = listeningTo[id];
      obj.off(name, callback, this);
      if (remove || Util.isEmpty(obj._events)) delete this._listeningTo[id];
    }
    return this;
  }

};

// Regular expression used to split event strings.
var eventSplitter = /\s+/;

// Implement fancy features of the Events API such as multiple event
// names `"change blur"` and jQuery-style event maps `{change: action}`
// in terms of the existing API.
var eventsApi = function(obj, action, name, rest) {
  if (!name) return true;

  // Handle event maps.
  if (typeof name === 'object') {
    for (var key in name) {
      obj[action].apply(obj, [key, name[key]].concat(rest));
    }
    return false;
  }

  // Handle space separated event names.
  if (eventSplitter.test(name)) {
    var names = name.split(eventSplitter);
    for (var i = 0, length = names.length; i < length; i++) {
      obj[action].apply(obj, [names[i]].concat(rest));
    }
    return false;
  }

  return true;
};

// A difficult-to-believe, but optimized internal dispatch function for
// triggering events. Tries to keep the usual cases speedy (most internal
var triggerEvents = function(events, args) {
  var ev, i = -1,
    l = events.length,
    a1 = args[0],
    a2 = args[1],
    a3 = args[2];
  switch (args.length) {
    case 0:
      while (++i < l)(ev = events[i]).callback.call(ev.ctx);
      return;
    case 1:
      while (++i < l)(ev = events[i]).callback.call(ev.ctx, a1);
      return;
    case 2:
      while (++i < l)(ev = events[i]).callback.call(ev.ctx, a1, a2);
      return;
    case 3:
      while (++i < l)(ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
      return;
    default:
      while (++i < l)(ev = events[i]).callback.apply(ev.ctx, args);
      return;
  }
};

// Aliases for backwards compatibility.
Events.bind = Events.on;
Events.unbind = Events.off;

if (typeof module == 'object' && module.exports) {
  module.exports = Events;
}
/** ignored by jsdoc **/
else {
  return Events;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(507),
    Base = __webpack_require__(508),
    Core = __webpack_require__(531),
    Animate = __webpack_require__(512);

var transformOrigin = Util.prefixStyle("transformOrigin");
/** 
 * @constructor
 * @param {object} cfg config for scroll
 * @extends XScroll
 * @example
 * var xscroll = new OriginScroll({
 *    renderTo:"#scroll"
 * });
 * xscroll.render();
 */
function OriginScroll(cfg) {
    OriginScroll.superclass.constructor.call(this, cfg);
}

Util.extend(OriginScroll, Core, {
    init: function() {
        var self = this;
        OriginScroll.superclass.init.call(this);
        self.resetSize();
    },
    /**
     * get scroll top value
     * @memberof OriginScroll
     * @return {number} scrollTop
     */
    getScrollTop: function() {
        return this.renderTo.scrollTop;
    },
    /**
     * get scroll left value
     * @memberof OriginScroll
     * @return {number} scrollLeft
     */
    getScrollLeft: function() {
        return this.renderTo.scrollLeft;
    },
    /**
     * vertical scroll absolute to the destination
     * @memberof SimuScroll
     * @param scrollTop {number} scrollTop
     * @param duration {number} duration for animte
     * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
     **/
    scrollTop: function(y, duration, easing, callback) {
        var self = this;
        var y = Math.round(y);
        if (self.userConfig.lockY) return;
        var duration = duration || 0;
        var easing = easing || "quadratic";
        var config = {
            css: {
                scrollTop: y
            },
            duration: duration,
            easing: easing,
            run: function(e) {
                //trigger scroll event
                self.trigger("scroll", {
                    scrollTop: self.getScrollTop(),
                    scrollLeft: self.getScrollLeft()
                });
            },
            useTransition: false, //scrollTop 
            end: callback
        };
        self.__timers.y = self.__timers.y || new Animate(self.renderTo, config);
        //run
        self.__timers.y.stop();
        self.__timers.y.reset(config);
        self.__timers.y.run();
    },
    /**
     * horizontal scroll absolute to the destination
     * @memberof SimuScroll
     * @param scrollLeft {number} scrollLeft
     * @param duration {number} duration for animte
     * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
     **/
    scrollLeft: function(x, duration, easing, callback) {
        var self = this;
        var x = Math.round(x);
        if (self.userConfig.lockX) return;
        var duration = duration || 0;
        var easing = easing || "quadratic";
        var config = {
            css: {
                scrollLeft: x
            },
            duration: duration,
            easing: easing,
            run: function(e) {
                //trigger scroll event
                self.trigger("scroll", {
                    scrollTop: self.getScrollTop(),
                    scrollLeft: self.getScrollLeft()
                });
            },
            useTransition: false, //scrollTop 
            end: callback
        };
        self.__timers.x = self.__timers.x || new Animate(self.renderTo, config);
        //run
        self.__timers.x.stop();
        self.__timers.x.reset(config);
        self.__timers.x.run();
    },
    _bindEvt: function() {
        OriginScroll.superclass._bindEvt.call(this);
        var self = this;
        if (self.__isEvtBind) return;
        self.__isEvtBind = true;
        self.renderTo.addEventListener("scroll", function(e) {
            self.trigger("scroll", {
                type: "scroll",
                scrollTop: self.getScrollTop(),
                scrollLeft: self.getScrollLeft()
            })
        }, false)
    }
});

if (typeof module == 'object' && module.exports) {
    module.exports = OriginScroll;
}
/** ignored by jsdoc **/
else {
    return OriginScroll;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(507);
var Base = __webpack_require__(508);
var clsPrefix;
var containerCls;
var content = "Pull Down To Refresh";
var loadingContent = "Loading...";
/**
 * A pulldown to refresh plugin for xscroll.
 * @constructor
 * @param {object} cfg
 * @param {number} cfg.height
 * @param {string} cfg.content default html for pulldown
 * @param {string} cfg.downContent html for pulldown when scrollTop is smaller than cfg.height
 * @param {string} cfg.upContent html for pulldown when scrollTop is larger than cfg.height
 * @param {string} cfg.loadingContent html for pulldown when released
 * @param {string} cfg.clsPrefix  class prefix which default value is "xs-plugin-pulldown-"
 * @extends {Base}
 */
var PullDown = function(cfg) {
	PullDown.superclass.constructor.call(this, cfg);
	this.userConfig = Util.mix({
		content: content,
		height: 60,
		autoRefresh: true,
		downContent: "Pull Down To Refresh",
		upContent: "Release To Refresh",
		loadingContent: loadingContent,
		clsPrefix: "xs-plugin-pulldown-"
	}, cfg);
}
Util.extend(PullDown, Base, {
	/**
	 * a pluginId
	 * @memberOf PullDown
	 * @type {string}
	 */
	pluginId: "pulldown",
	/**
	 * plugin initializer
	 * @memberOf PullDown
	 * @override Base
	 * @return {PullDown}
	 */
	pluginInitializer: function(xscroll) {
		var self = this;
		self.xscroll = xscroll.render();
		clsPrefix = self.userConfig.clsPrefix;
		self.render();
		return self;
	},
	/**
	 * detroy the plugin
	 * @memberOf PullDown
	 * @override Base
	 * @return {PullDown}
	 */
	pluginDestructor: function() {
		var self = this;
		Util.remove(self.pulldown);
		self.xscroll.off("panstart", self._panStartHandler, self);
		self.xscroll.off("pan", self._panHandler, self);
		self.xscroll.off("panend", self._panEndHandler, self);
		self.__isRender = false;
		self._evtBinded = false;
	},
	/**
	 * render pulldown plugin
	 * @memberOf PullDown
	 * @return {PullDown}
	 */
	render: function() {
		var self = this;
		if (self.__isRender) return;
		self.__isRender = true;

		if (!self.userConfig.container) {
			var containerCls = clsPrefix + "container";
			var height = self.userConfig.height || 60;
			var pulldown = self.pulldown = document.createElement("div");
			pulldown.className = containerCls;
			pulldown.style.position = "absolute";
			pulldown.style.width = "100%";
			pulldown.style.height = height + "px";
			pulldown.style.lineHeight = height + "px";
			pulldown.style.top = -height + "px";
			pulldown.style.textAlign = "center";
			self.xscroll.container.appendChild(pulldown);
			self.status = 'up';
			Util.addClass(pulldown, clsPrefix + self.status);
			pulldown.innerHTML = self.userConfig[self.status + "Content"] || self.userConfig.content;
		} else {
			// has customed container
			self.pulldown = self.userConfig.container
		}
		
		self._bindEvt();
		return self;
	},
	_bindEvt: function() {
		var self = this;
		if (self._evtBinded) return;
		self._evtBinded = true;
		var pulldown = self.pulldown;
		var xscroll = self.xscroll;
		xscroll.on("pan", self._panHandler, self);
		xscroll.on("panstart", self._panStartHandler, self);
		xscroll.on("panend", self._panEndHandler, self);
	},
	_changeStatus: function(status) {
		var prevVal = this.status;
		this.status = status;
		if (!this.userConfig.container) {
			Util.removeClass(this.pulldown, clsPrefix + prevVal)
			Util.addClass(this.pulldown, clsPrefix + status);
			if (this.userConfig[status + "Content"]) {
				this.pulldown.innerHTML = this.userConfig[status + "Content"];
			}
		}
		if (prevVal != status) {
			this.trigger("statuschange", {
				prevVal: prevVal,
				newVal: status
			});
			if (status == "loading") {
				this.trigger("loading");
			}
		}
	},
	/**
	 * reset the pulldown plugin
	 * @memberOf PullDown
	 * @param {function} callback
	 * @return {PullDown}
	 */
	reset: function(callback) {
		this.xscroll.boundry.resetTop()
		this.xscroll.boundryCheckY(callback);
		this._expanded = false;
		return this;
	},
	_panStartHandler: function(e) {
		clearTimeout(this.loadingItv);
	},
	_panHandler: function(e) {
		var self = this;
		var scrollTop = self.xscroll.getScrollTop();
		if (scrollTop > 0) return;
		self._changeStatus(Math.abs(scrollTop) < self.userConfig.height ? "down" : "up");
	},
	_panEndHandler: function(e) {
		var self = this;
		var xscroll = self.xscroll;
		var height = self.userConfig.height || 60;
		var scrollTop = xscroll.getScrollTop();
		if (scrollTop < -height) {
			//prevent default bounce
			e.preventDefault();
			xscroll.boundry.resetTop();
			self._changeStatus("loading");
			xscroll.boundry.expandTop(height);
			xscroll.boundryCheckY(function() {
			});
			if (self.userConfig.autoRefresh) {
				clearTimeout(self.loadingItv);
				self.loadingItv = setTimeout(function() {
					xscroll.boundry.resetTop();
					xscroll.boundryCheckY(function() {
						window.location.reload();
					})
				}, 800);
			}
		}
	}
});

if (typeof module == 'object' && module.exports) {
	module.exports = PullDown;
}
/** ignored by jsdoc **/
else if (window.XScroll && window.XScroll.Plugins) {
	return XScroll.Plugins.PullDown = PullDown;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(507);
var Base = __webpack_require__(508);
var clsPrefix;
var containerCls;
var loadingContent = "Loading...";
var upContent = "Pull Up To Refresh";
var downContent = "Release To Refresh";
var PULL_UP_HEIGHT = 60;
var HEIGHT = 40;
/**
 * A pullup to load plugin for xscroll.
 * @constructor
 * @param {object} cfg
 * @param {number} cfg.height
 * @param {string} cfg.downContent
 * @param {string} cfg.upContent
 * @param {string} cfg.loadingContent
 * @param {string} cfg.clsPrefix  class prefix which default value is "xs-plugin-pullup-"
 * @param {number} cfg.bufferHeight preload data before scrolling to the bottom of the boundry
 * @extends {Base}
 */
var PullUp = function(cfg) {
	PullUp.superclass.constructor.call(this);
	this.userConfig = Util.mix({
		upContent: upContent,
		downContent: downContent,
		pullUpHeight: PULL_UP_HEIGHT,
		height: HEIGHT,
		loadingContent: loadingContent,
		bufferHeight: 0,
		clsPrefix: "xs-plugin-pullup-"
	}, cfg);
}
Util.extend(PullUp, Base, {
	/**
	 * a pluginId
	 * @memberOf PullUp
	 * @type {string}
	 */
	pluginId: "pullup",
	/**
	 * plugin initializer
	 * @memberOf PullUp
	 * @override Base
	 * @return {PullUp}
	 */
	pluginInitializer: function(xscroll) {
		var self = this;
		self.xscroll = xscroll.render();
		clsPrefix = self.userConfig.clsPrefix;
		self.render();
		return self;
	},
	/**
	 * detroy the plugin
	 * @memberOf PullUp
	 * @override Base
	 * @return {PullUp}
	 */
	pluginDestructor: function() {
		var self = this;
		Util.remove(self.pullup);
		self.xscroll.off("scrollend", self._scrollEndHandler, self);
		self.xscroll.off("scroll", self._scrollHandler, self);
		self.xscroll.off("pan", self._panHandler, self);
		self.xscroll.boundry.resetBottom();
		self.__isRender = false;
		self._evtBinded = false;
	},
	/**
	 * disable the plugin
	 * @memberOf PullUp
	 * @override Base
	 * @return {PullUp}
	 */
	pluginDisable: function() {
		var self = this;
		self.userConfig.container || Util.remove(self.pullup)
		self.xscroll.off("scrollend", self._scrollEndHandler, self);
		self.xscroll.off("scroll", self._scrollHandler, self);
		self.xscroll.off("pan", self._panHandler, self);
		self.xscroll.boundry.resetBottom();
		self.__isRender = false;
		self._evtBinded = false;
	},
	/**
	 * render pullup plugin
	 * @memberOf PullUp
	 * @return {PullUp}
	 */
	render: function() {
		var self = this;
		if (self.__isRender) return;
		self.__isRender = true;
		if (!self.userConfig.container) {
			var containerCls = clsPrefix + "container";
			var height = self.userConfig.height;
			var pullup = self.pullup = document.createElement("div");
			pullup.className = containerCls;
			pullup.style.position = "absolute";
			pullup.style.width = "100%";
			pullup.style.height = height + "px";
			pullup.style.bottom = -height + "px";
			pullup.style.textAlign = "center";
			self.xscroll.container.appendChild(pullup);
			Util.addClass(pullup, clsPrefix + self.status);
			pullup.innerHTML = self.userConfig[self.status + "Content"] || self.userConfig.content;
		} else {
			self.pullup = self.userConfig.container
		}
		self.xscroll.boundry.expandBottom(self.userConfig.height);
		self.status = 'up';
		self._bindEvt();
		return self;
	},
	_bindEvt: function() {
		var self = this;
		if (self._evtBinded) return;
		self._evtBinded = true;
		var pullup = self.pullup;
		var xscroll = self.xscroll;
		xscroll.on("pan", self._panHandler, self);
		//load width a buffer
		if (self.userConfig.bufferHeight > 0) {
			xscroll.on("scroll", self._scrollHandler, self);
		}
		//bounce bottom
		xscroll.on("scrollend", self._scrollEndHandler, self);
		return self;
	},
	_scrollEndHandler: function(e) {
		var self = this,
			xscroll = self.xscroll,
			scrollTop = xscroll.getScrollTop();
		if (scrollTop == xscroll.containerHeight - xscroll.height + self.userConfig.height) {
			self._changeStatus("loading");
		}
		return self;
	},
	_scrollHandler: function(e) {
		var self = this,
			xscroll = self.xscroll;
		if (!self.isLoading && Math.abs(e.scrollTop) + xscroll.height + self.userConfig.height + self.userConfig.bufferHeight >= xscroll.containerHeight + xscroll.boundry._xtop + xscroll.boundry._xbottom) {
			self._changeStatus("loading");
		}
		return self;
	},
	_panHandler: function(e) {
		var self = this;
		var xscroll = self.xscroll;
		var offsetTop = -xscroll.getScrollTop();
		if (offsetTop < xscroll.height - xscroll.containerHeight - self.userConfig.pullUpHeight) {
			self._changeStatus("down")
		} else {
			self._changeStatus("up");
		}
		return self;
	},
	_changeStatus: function(status) {
		if (status != "loading" && this.isLoading) return;
		var prevVal = this.status;
		this.status = status;
		if (!this.userConfig.container) {
			Util.removeClass(this.pullup, clsPrefix + prevVal)
			Util.addClass(this.pullup, clsPrefix + status);
			this.pullup.innerHTML = this.userConfig[status + "Content"];
		}
		if (prevVal != status) {
			this.trigger("statuschange", {
				prevVal: prevVal,
				newVal: status
			});
			if (status == "loading") {
				this.isLoading = true;
				this.trigger("loading");
			}
		}
		return this;
	},
	/**
	 * notify pullup plugin to complete state after a remote data request
	 * @memberOf PullUp
	 * @return {PullUp}
	 */
	complete: function() {
		var self = this;
		var xscroll = self.xscroll;
		self.isLoading = false;
		self._changeStatus("up");
		return self;
	},
	stop: function() {
		var xscroll = this.xscroll;
		this.isLoading = false;
		this._changeStatus("stop");
		this.pluginDisable()
		return this;
	},
	restart: function() {
		var xscroll = this.xscroll;
		this.isLoading = false;
		this._changeStatus("default");
		this.render()
		return this;
	}
});

if (typeof module == 'object' && module.exports) {
	module.exports = PullUp;
}
/** ignored by jsdoc **/
else if (window.XScroll && window.XScroll.Plugins) {
	return XScroll.Plugins.PullUp = PullUp;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(507),
  Base = __webpack_require__(508),
  Core = __webpack_require__(531),
  Animate = __webpack_require__(512),
  Hammer = __webpack_require__(528),
  ScrollBar = __webpack_require__(551),
  Controller = __webpack_require__(549);
//reduced boundry pan distance
var PAN_RATE = 1 - 0.618;
//constant for scrolling acceleration
var SCROLL_ACCELERATION = 0.0005;
//constant for outside of boundry acceleration
var BOUNDRY_ACCELERATION = 0.03;
//transform-origin
var transformOrigin = Util.prefixStyle("transformOrigin");
//transform
var transform = Util.prefixStyle("transform");
/** 
 * @constructor
 * @param {object} cfg config for scroll
 * @param {number} cfg.SCROLL_ACCELERATION  acceleration for scroll, min value make the scrolling smoothly
 * @param {number} cfg.BOUNDRY_CHECK_DURATION duration for boundry bounce
 * @param {number} cfg.BOUNDRY_CHECK_EASING easing for boundry bounce
 * @param {number} cfg.BOUNDRY_CHECK_ACCELERATION acceleration for boundry bounce
 * @param {boolean} cfg.lockX just like overflow-x:hidden
 * @param {boolean} cfg.lockY just like overflow-y:hidden
 * @param {boolean} cfg.scrollbarX config if the scrollbar-x is visible
 * @param {boolean} cfg.scrollbarY config if the scrollbar-y is visible
 * @param {boolean} cfg.useTransition config if use css3 transition or raf for scroll animation
 * @param {boolean} cfg.bounce config if use has the bounce effect when scrolling outside of the boundry
 * @param {boolean} cfg.boundryCheck config if scrolling inside of the boundry
 * @param {boolean} cfg.preventDefault prevent touchstart
 * @param {boolean} cfg.preventTouchMove prevent touchmove
 * @param {string|HTMLElement}  cfg.container config for scroller's container which default value is ".xs-container"
 * @param {string|HTMLElement}  cfg.content config for scroller's content which default value is ".xs-content"
 * @param {object}  cfg.indicatorInsets  config scrollbars position {top: number, left: number, bottom: number, right: number}
 * @param {string}  cfg.stickyElements config for sticky-positioned elements
 * @param {string}  cfg.fixedElements config for fixed-positioned elements
 * @param {string}  cfg.touchAction config for touchAction of the scroller
 * @extends XScroll
 * @example
 * var xscroll = new SimuScroll({
 *    renderTo:"#scroll",
 *    lockX:false,
 *    scrollbarX:true
 * });
 * xscroll.render();
 */
function SimuScroll(cfg) {
  SimuScroll.superclass.constructor.call(this, cfg);
}

Util.extend(SimuScroll, Core, {
  /** 
   * @memberof SimuScroll
   * @override
   */
  init: function() {
    var self = this;
    var defaultCfg = {
      preventDefault: true,
      preventTouchMove: true
    };
    SimuScroll.superclass.init.call(this);
    self.userConfig = Util.mix(defaultCfg, self.userConfig);
    self.SCROLL_ACCELERATION = self.userConfig.SCROLL_ACCELERATION || SCROLL_ACCELERATION;
    self.BOUNDRY_ACCELERATION = self.userConfig.BOUNDRY_ACCELERATION || BOUNDRY_ACCELERATION;
    self._initContainer();
    self.resetSize();
    //set overflow behaviors
    self._setOverflowBehavior();
    self.defaltConfig = {
      lockY: self.userConfig.lockY,
      lockX: self.userConfig.lockX
    }
    return self;
  },
  destroy: function() {
    var self = this;
    SimuScroll.superclass.destroy.call(this);
    self.renderTo.style.overflow = "";
    self.renderTo.style.touchAction = "";
    self.container.style.transform = "";
    self.container.style.transformOrigin = "";
    self.content.style.transform = "";
    self.content.style.transformOrigin = "";
    self.off("touchstart mousedown", self._ontouchstart);
    self.off("touchmove", self._ontouchmove);
    window.removeEventListener("resize", self.resizeHandler, self);
    self.destroyScrollBars();
  },
  /**
   * set overflow behavior
   * @return {boolean} [description]
   */
  _setOverflowBehavior: function() {
    var self = this;
    var renderTo = self.renderTo;
    var computeStyle = getComputedStyle(renderTo);
    self.userConfig.lockX = undefined === self.userConfig.lockX ? ((computeStyle['overflow-x'] == "hidden" || self.width == self.containerWidth) ? true : false) : self.userConfig.lockX;
    self.userConfig.lockY = undefined === self.userConfig.lockY ? ((computeStyle['overflow-y'] == "hidden" || self.height == self.containerHeight) ? true : false) : self.userConfig.lockY;
    self.userConfig.scrollbarX = undefined === self.userConfig.scrollbarX ? (self.userConfig.lockX ? false : true) : self.userConfig.scrollbarX;
    self.userConfig.scrollbarY = undefined === self.userConfig.scrollbarY ? (self.userConfig.lockY ? false : true) : self.userConfig.scrollbarY;
    return self;
  },
  /**
   * reset lockX or lockY config to the default value
   */
  _resetLockConfig: function() {
    var self = this;
    self.userConfig.lockX = self.defaltConfig.lockX;
    self.userConfig.lockY = self.defaltConfig.lockY;
    return self;
  },
  /**
   * init container
   * @override
   * @return {SimuScroll}
   */
  _initContainer: function() {
    var self = this;
    SimuScroll.superclass._initContainer.call(self);
    if (self.__isContainerInited || !self.container || !self.content) return;
    self.container.style[transformOrigin] = "0 0";
    self.content.style[transformOrigin] = "0 0";
    self.translate(0, 0);
    self.__isContainerInited = true;
    return self;
  },
  /**
   * get scroll top value
   * @memberof SimuScroll
   * @return {number} scrollTop
   */
  getScrollTop: function() {
    var transY = window.getComputedStyle(this.container)[transform].match(/[-\d\.*\d*]+/g);
    return transY ? Math.round(transY[5]) === 0 ? 0 : -Math.round(transY[5]) : 0;
  },
  /**
   * get scroll left value
   * @memberof SimuScroll
   * @return {number} scrollLeft
   */
  getScrollLeft: function() {
    var transX = window.getComputedStyle(this.content)[transform].match(/[-\d\.*\d*]+/g);
    return transX ? Math.round(transX[4]) === 0 ? 0 : -Math.round(transX[4]) : 0;
  },
  /**
   * horizontal scroll absolute to the destination
   * @memberof SimuScroll
   * @param scrollLeft {number} scrollLeft
   * @param duration {number} duration for animte
   * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
   **/
  scrollLeft: function(x, duration, easing, callback) {
    if (this.userConfig.lockX) return;
    var translateZ = this.userConfig.gpuAcceleration ? " translateZ(0) " : "";
    this.x = (undefined === x || isNaN(x) || 0 === x) ? 0 : -Math.round(x);
    this._animate("x", "translateX(" + this.x + "px) scale(" + this.scale + ")" + translateZ, duration, easing, callback);
    return this;
  },
  /**
   * vertical scroll absolute to the destination
   * @memberof SimuScroll
   * @param scrollTop {number} scrollTop
   * @param duration {number} duration for animte
   * @param easing {string} easing functio for animate : ease-in | ease-in-out | ease | bezier(n,n,n,n)
   **/
  scrollTop: function(y, duration, easing, callback) {
    if (this.userConfig.lockY) return;
    var translateZ = this.userConfig.gpuAcceleration ? " translateZ(0) " : "";
    this.y = (undefined === y || isNaN(y) || 0 === y) ? 0 : -Math.round(y);
    this._animate("y", "translateY(" + this.y + "px) " + translateZ, duration, easing, callback);
    return this;
  },
  /**
   * translate the scroller to a new destination includes x , y , scale
   * @memberof SimuScroll
   * @param x {number} x
   * @param y {number} y
   * @param scale {number} scale
   **/
  translate: function(x, y, scale) {
    var translateZ = this.userConfig.gpuAcceleration ? " translateZ(0) " : "";
    this.x = x || this.x || 0;
    this.y = y || this.y || 0;
    this.scale = scale || this.scale || 1;
    this.content.style[transform] = "translate(" + this.x + "px,0px) scale(" + this.scale + ") " + translateZ;
    this.container.style[transform] = "translate(0px," + this.y + "px) " + translateZ;
    return this;
  },
  _animate: function(type, transform, duration, easing, callback) {
    var self = this;
    var duration = duration || 0;
    var easing = easing || "quadratic";
    var el = type == "y" ? self.container : self.content;
    var config = {
      css: {
        transform: transform
      },
      duration: duration,
      easing: easing,
      run: function(e) {
        /**
         * @event {@link SimuScroll#"scroll"}
         */
        self.trigger("scroll", {
          scrollTop: self.getScrollTop(),
          scrollLeft: self.getScrollLeft(),
          type: "scroll"
        });
      },
      useTransition: self.userConfig.useTransition,
      end: function(e) {
        callback && callback();
        if ((self["_bounce" + type] === 0 || self["_bounce" + type] === undefined) && easing != "linear") {
          self['isScrolling' + type.toUpperCase()] = false;
          self['isRealScrolling' + type.toUpperCase()] = false;
          self.trigger("scrollend", {
            type: "scrollend",
            scrollTop: self.getScrollTop(),
            scrollLeft: self.getScrollLeft(),
            zoomType: type,
            duration: duration,
            easing: easing
          });
        }
      }
    };
    var timer = self.__timers[type] = self.__timers[type] || new Animate(el, config);
    timer.stop();
    timer.reset(config);
    timer.run();
    self.trigger("scrollanimate", {
      type: "scrollanimate",
      scrollTop: -self.y,
      scrollLeft: -self.x,
      duration: duration,
      easing: easing,
      zoomType: type
    })
    return this;
  },
  _ontap: function(e) {
    var self = this;
    self.boundryCheck();
    // self._unPreventHref(e);
    if (!self.isRealScrollingX && !self.isRealScrollingY) {
      // self._triggerClick(e);
    }
    // self._preventHref(e);
    self.isRealScrollingY = false;
    self.isRealScrollingY = false;
  },
  _bindEvt: function() {
    SimuScroll.superclass._bindEvt.call(this);
    var self = this;
    if (self.__isEvtBind) return;
    self.__isEvtBind = true;
    var pinch = new Hammer.Pinch();
    self.mc.add(pinch);
    self.on("touchstart mousedown", self._ontouchstart, self);
    self.on("touchmove", self._ontouchmove, self);
    self.on("tap", self._ontap, self);
    self.on("panstart", self._onpanstart, self);
    self.on("pan", self._onpan, self);
    self.on("panend", self._onpanend, self);
    self.resizeHandler = function(e) {
      setTimeout(function() {
        self.resetSize();
        self.boundryCheck(0);
        self.render();
      }, 100);
    }
    //window resize
    window.addEventListener("resize", self.resizeHandler, self);

    return this;
  },
  _ontouchstart: function(e) {
    var self = this;
    if (!(/(SELECT|INPUT|TEXTAREA)/i).test(e.target.tagName) && self.userConfig.preventDefault) {
      e.preventDefault();
    }
    self.stop();
  },
  _ontouchmove: function(e) {
    this.userConfig.preventTouchMove && e.preventDefault();
  },
  _onpanstart: function(e) {
    this.userConfig.preventTouchMove && e.preventDefault();
    var self = this;
    var scrollLeft = self.getScrollLeft();
    var scrollTop = self.getScrollTop();
    self.stop();
    self.translate(-scrollLeft, -scrollTop);
    var threshold = self.mc.get("pan").options.threshold;
    self.thresholdY = e.direction == "8" ? threshold : e.direction == "16" ? -threshold : 0;
    self.thresholdX = e.direction == "2" ? threshold : e.direction == "4" ? -threshold : 0;
    return self;
  },
  _onpan: function(e) {
    this.userConfig.preventTouchMove && e.preventDefault();
    var self = this;
    var boundry = self.boundry;
    var userConfig = self.userConfig;
    var boundryCheck = userConfig.boundryCheck;
    var bounce = userConfig.bounce;
    var scrollTop = self.__topstart || (self.__topstart = -self.getScrollTop());
    var scrollLeft = self.__leftstart || (self.__leftstart = -self.getScrollLeft());
    var y = userConfig.lockY ? Number(scrollTop) : Number(scrollTop) + (e.deltaY + self.thresholdY);
    var x = userConfig.lockX ? Number(scrollLeft) : Number(scrollLeft) + (e.deltaX + self.thresholdX);
    var containerWidth = self.containerWidth;
    var containerHeight = self.containerHeight;
    if (boundryCheck) {
      //over top
      y = y > boundry.top ? bounce ? (y - boundry.top) * PAN_RATE + boundry.top : boundry.top : y;
      //over bottom
      y = y < boundry.bottom - containerHeight ? bounce ? y + (boundry.bottom - containerHeight - y) * PAN_RATE : boundry.bottom - containerHeight : y;
      //over left
      x = x > boundry.left ? bounce ? (x - boundry.left) * PAN_RATE + boundry.left : boundry.left : x;
      //over right
      x = x < boundry.right - containerWidth ? bounce ? x + (boundry.right - containerWidth - x) * PAN_RATE : boundry.right - containerWidth : x;
    }
    //move to x,y
    self.translate(x, y);
    //pan trigger the opposite direction
    self.directionX = e.type == 'panleft' ? 'right' : e.type == 'panright' ? 'left' : '';
    self.directionY = e.type == 'panup' ? 'down' : e.type == 'pandown' ? 'up' : '';
    self.trigger("scroll", {
      scrollTop: -y,
      scrollLeft: -x,
      triggerType: "pan",
      type: "scroll"
    });
    return self;
  },
  _onpanend: function(e) {
    var self = this;
    var userConfig = self.userConfig;
    var transX = self.computeScroll("x", e.velocityX);
    var transY = self.computeScroll("y", e.velocityY);
    var scrollLeft = transX ? transX.pos : 0;
    var scrollTop = transY ? transY.pos : 0;
    var duration;
    if (transX && transY && transX.status == "inside" && transY.status == "inside" && transX.duration && transY.duration) {
      //ensure the same duration
      duration = Math.max(transX.duration, transY.duration);
    }
    transX && self.scrollLeft(scrollLeft, duration || transX.duration, transX.easing, function(e) {
      self.boundryCheckX();
    });
    transY && self.scrollTop(scrollTop, duration || transY.duration, transY.easing, function(e) {
      self.boundryCheckY();
    });
    //judge the direction
    self.directionX = e.velocityX < 0 ? "left" : "right";
    self.directionY = e.velocityY < 0 ? "up" : "down";
    //clear start
    self.__topstart = null;
    self.__leftstart = null;
    return self;
  },
  /**
   * judge the scroller is out of boundry horizontally and vertically
   * @memberof SimuScroll
   * @return {boolean} isBoundryOut
   **/
  isBoundryOut: function() {
    return this.isBoundryOutLeft() || this.isBoundryOutRight() || this.isBoundryOutTop() || this.isBoundryOutBottom();
  },
  /**
   * judge if the scroller is outsideof left
   * @memberof SimuScroll
   * @return {boolean} isBoundryOut
   **/
  isBoundryOutLeft: function() {
    return this.getBoundryOutLeft() > 0 ? true : false;
  },
  /**
   * judge if the scroller is outsideof right
   * @memberof SimuScroll
   * @return {boolean} isBoundryOut
   **/
  isBoundryOutRight: function() {
    return this.getBoundryOutRight() > 0 ? true : false;
  },
  /**
   * judge if the scroller is outsideof top
   * @memberof SimuScroll
   * @return {boolean} isBoundryOut
   **/
  isBoundryOutTop: function() {
    return this.getBoundryOutTop() > 0 ? true : false;
  },
  /**
   * judge if the scroller is outsideof bottom
   * @memberof SimuScroll
   * @return {boolean} isBoundryOut
   **/
  isBoundryOutBottom: function() {
    return this.getBoundryOutBottom() > 0 ? true : false;
  },
  /**
   * get the offset value outsideof top
   * @memberof SimuScroll
   * @return {number} offset
   **/
  getBoundryOutTop: function() {
    return -this.boundry.top - this.getScrollTop();
  },
  /**
   * get the offset value outsideof left
   * @memberof SimuScroll
   * @return {number} offset
   **/
  getBoundryOutLeft: function() {
    return -this.boundry.left - this.getScrollLeft();
  },
  /**
   * get the offset value outsideof bottom
   * @memberof SimuScroll
   * @return {number} offset
   **/
  getBoundryOutBottom: function() {
    return this.boundry.bottom - this.containerHeight + this.getScrollTop();
  },
  /**
   * get the offset value outsideof right
   * @memberof SimuScroll
   * @return {number} offset
   **/
  getBoundryOutRight: function() {
    return this.boundry.right - this.containerWidth + this.getScrollLeft();
  },
  /**
   * compute scroll transition by zoomType and velocity
   * @memberof SimuScroll
   * @param {string} zoomType zoomType of scrolling
   * @param {number} velocity velocity after panend
   * @example
   * var info = xscroll.computeScroll("x",2);
   * // return {pos:90,easing:"easing",status:"inside",duration:500}
   * @return {Object}
   **/
  computeScroll: function(type, v) {
    var self = this;
    var userConfig = self.userConfig;
    var boundry = self.boundry;
    var pos = type == "x" ? self.getScrollLeft() : self.getScrollTop();
    var boundryStart = type == "x" ? boundry.left : boundry.top;
    var boundryEnd = type == "x" ? boundry.right : boundry.bottom;
    var innerSize = type == "x" ? self.containerWidth : self.containerHeight;
    var maxSpeed = userConfig.maxSpeed || 2;
    var boundryCheck = userConfig.boundryCheck;
    var bounce = userConfig.bounce;
    var transition = {};
    var status = "inside";
    if (boundryCheck) {
      if (type == "x" && (self.isBoundryOutLeft() || self.isBoundryOutRight())) {
        self.boundryCheckX();
        return;
      } else if (type == "y" && (self.isBoundryOutTop() || self.isBoundryOutBottom())) {
        self.boundryCheckY();
        return;
      }
    }
    if (type == "x" && self.userConfig.lockX) return;
    if (type == "y" && self.userConfig.lockY) return;
    v = v > maxSpeed ? maxSpeed : v < -maxSpeed ? -maxSpeed : v;
    var a = self.SCROLL_ACCELERATION * (v / (Math.abs(v) || 1));
    var a2 = self.BOUNDRY_ACCELERATION;
    var t = isNaN(v / a) ? 0 : v / a;
    var s = Number(pos) + t * v / 2;
    //over top boundry check bounce
    if (s < -boundryStart && boundryCheck) {
      var _s = -boundryStart - pos;
      var _t = (Math.sqrt(-2 * a * _s + v * v) + v) / a;
      var v0 = v - a * _t;
      var _t2 = Math.abs(v0 / a2);
      var s2 = v0 / 2 * _t2;
      t = _t + _t2;
      s = bounce ? -boundryStart + s2 : -boundryStart;
      status = "outside";
    } else if (s > innerSize - boundryEnd && boundryCheck) {
      var _s = (boundryEnd - innerSize) + pos;
      var _t = (Math.sqrt(-2 * a * _s + v * v) - v) / a;
      var v0 = v - a * _t;
      var _t2 = Math.abs(v0 / a2);
      var s2 = v0 / 2 * _t2;
      t = _t + _t2;
      s = bounce ? innerSize - boundryEnd + s2 : innerSize - boundryEnd;
      status = "outside";
    }
    if (isNaN(s) || isNaN(t)) return;
    transition.pos = s;
    transition.duration = t;
    transition.easing = Math.abs(v) > 2 ? "circular" : "quadratic";
    transition.status = status;
    var Type = type.toUpperCase();
    self['isScrolling' + Type] = true;
    self['isRealScrolling' + Type] = true;
    return transition;
  },
  /**
   * bounce to the boundry horizontal
   * @memberof SimuScroll
   * @return {SimuScroll}
   **/
  boundryCheckX: function(duration, easing, callback) {
    var self = this;
    if (!self.userConfig.boundryCheck) return;
    if (typeof arguments[0] == "function") {
      callback = arguments[0];
      duration = self.userConfig.BOUNDRY_CHECK_DURATION;
      easing = self.userConfig.BOUNDRY_CHECK_EASING;
    } else {
      duration = duration === 0 ? 0 : self.userConfig.BOUNDRY_CHECK_DURATION,
        easing = easing || self.userConfig.BOUNDRY_CHECK_EASING;
    }
    if (!self.userConfig.bounce || self.userConfig.lockX) return;
    var boundry = self.boundry;
    if (self.isBoundryOutLeft()) {
      self.scrollLeft(-boundry.left, duration, easing, callback);
    } else if (self.isBoundryOutRight()) {
      self.scrollLeft(self.containerWidth - boundry.right, duration, easing, callback);
    }
    return self;
  },
  /**
   * bounce to the boundry vertical
   * @memberof SimuScroll
   * @return {SimuScroll}
   **/
  boundryCheckY: function(duration, easing, callback) {
    var self = this;
    if (!self.userConfig.boundryCheck) return;
    if (typeof arguments[0] == "function") {
      callback = arguments[0];
      duration = self.userConfig.BOUNDRY_CHECK_DURATION;
      easing = self.userConfig.BOUNDRY_CHECK_EASING;
    } else {
      duration = duration === 0 ? 0 : self.userConfig.BOUNDRY_CHECK_DURATION,
        easing = easing || self.userConfig.BOUNDRY_CHECK_EASING;
    }
    if (!self.userConfig.boundryCheck || self.userConfig.lockY) return;
    var boundry = self.boundry;
    if (self.isBoundryOutTop()) {
      self.scrollTop(-boundry.top, duration, easing, callback);
    } else if (self.isBoundryOutBottom()) {
      self.scrollTop(self.containerHeight - boundry.bottom, duration, easing, callback);
    }
    return self;
  },
  /**
   * bounce to the boundry vertical and horizontal
   * @memberof SimuScroll
   * @return {SimuScroll}
   **/
  boundryCheck: function(duration, easing, callback) {
    this.boundryCheckX(duration, easing, callback);
    this.boundryCheckY(duration, easing, callback);
    return this;
  },
  /**
   * stop scrolling immediatelly
   * @memberof SimuScroll
   * @return {SimuScroll}
   **/
  stop: function() {
    var self = this;
    self.__timers.x && self.__timers.x.stop();
    self.__timers.y && self.__timers.y.stop();
    if (self.isScrollingX || self.isScrollingY) {
      var scrollTop = self.getScrollTop(),
        scrollLeft = self.getScrollLeft();
      self.trigger("scrollend", {
        scrollTop: scrollTop,
        scrollLeft: scrollLeft
      });
      self.trigger("stop", {
        scrollTop: scrollTop,
        scrollLeft: scrollLeft
      })
      self.isScrollingX = false;
      self.isScrollingY = false;
    }
    return self;
  },
  /**
   * render scroll
   * @memberof SimuScroll
   * @return {SimuScroll}
   **/
  render: function() {
    var self = this;
    SimuScroll.superclass.render.call(this);
    //fixed for scrollbars
    if (getComputedStyle(self.renderTo).position == "static") {
      self.renderTo.style.position = "relative";
    }
    self.renderTo.style.overflow = "hidden";
    self.initScrollBars();
    self.initController();
    return self;
  },
  /**
   * init scrollbars
   * @memberof SimuScroll
   * @return {SimuScroll}
   */
  initScrollBars: function() {
    var self = this;
    if (!self.userConfig.boundryCheck) return;
    var indicatorInsets = self.userConfig.indicatorInsets;
    if (self.userConfig.scrollbarX) {
      self.scrollbarX = self.scrollbarX || new ScrollBar({
        xscroll: self,
        type: "x",
        spacing: indicatorInsets.spacing
      });
      self.scrollbarX.render();
      self.scrollbarX._update();
      self.scrollbarX.hide();
    }
    if (self.userConfig.scrollbarY) {
      self.scrollbarY = self.scrollbarY || new ScrollBar({
        xscroll: self,
        type: "y",
        spacing: indicatorInsets.spacing
      });
      self.scrollbarY.render();
      self.scrollbarY._update();
      self.scrollbarY.hide();
    }
    return self;
  },
  /**
   * destroy scrollbars
   * @memberof SimuScroll
   * @return {SimuScroll}
   */
  destroyScrollBars: function() {
    this.scrollbarX && this.scrollbarX.destroy();
    this.scrollbarY && this.scrollbarY.destroy();
    return this;
  },
  /**
   * init controller for multi-scrollers
   * @memberof SimuScroll
   * @return {SimuScroll}
   */
  initController: function() {
    var self = this;
    self.controller = self.controller || new Controller({
      xscroll: self
    });
    return self;
  },
  _unPreventHref: function(e) {
    var target = Util.findParentEl(e.target,'a',this.renderTo);
    if(!target) return;
    if (target.tagName.toLowerCase() == "a") {
      var href = target.getAttribute("data-xs-href");
      if (href) {
        target.setAttribute("href", href);
      }
    }
  },
  _preventHref: function(e) {
    var target = Util.findParentEl(e.target,'a',this.renderTo);
    if(!target) return;
    if (target.tagName.toLowerCase() == "a") {
      var href = target.getAttribute("href");
      href && target.setAttribute("href", "javascript:void(0)");
      href && target.setAttribute("data-xs-href", href);
    }
  },
  _triggerClick: function(e) {
    var target = e.target;
    if (!(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName)) {
      var ev = document.createEvent('MouseEvents');
      ev.initMouseEvent('click', true, true, e.view, 1,
        target.screenX, target.screenY, target.clientX, target.clientY,
        e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
        0, null);
      target.dispatchEvent(ev);
    }
  }
});

if (typeof module == 'object' && module.exports) {
  module.exports = SimuScroll;
}
/** ignored by jsdoc **/
else {
  return SimuScroll;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
"use strict";
var Util = __webpack_require__(507),
	Base = __webpack_require__(508),
	Timer = __webpack_require__(533),
	Animate = __webpack_require__(512),
	Hammer = __webpack_require__(528),
	SimuScroll = __webpack_require__(557),
	OriginScroll = __webpack_require__(554);
var XScroll = function(cfg) {
		var _ = cfg && cfg.useOriginScroll ? OriginScroll : SimuScroll;
		return new _(cfg);
	}
/**
 * Util
 * @namespace Util
 * @type {Object}
 */
XScroll.Util = Util;
/**
 * Base
 * @namespace Base
 * @type {Base}
 */
XScroll.Base = Base;
/**
 * Timer
 * @namespace Timer
 * @type {Timer}
 */
XScroll.Timer = Timer;
/**
 * Animate
 * @namespace Animate
 * @type {Animate}
 */
XScroll.Animate = Animate;
/**
 * Hammer
 * @namespace Hammer
 * @type {Hammer}
 */
XScroll.Hammer = Hammer;
/**
 * plugins
 * @namespace Plugins
 * @type {Object}
 */
XScroll.Plugins = {};

if (typeof module == 'object' && module.exports) {
	module.exports = XScroll;
}
/** ignored by jsdoc **/
else {
	return window.XScroll = XScroll;
}
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'load-more',
  props: {
    showLoading: {
      type: Boolean,
      default: true
    },
    tip: String
  }
});

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(483)();
// imports


// module
exports.push([module.i, ".weui-loading{width:20px;height:20px;display:inline-block;vertical-align:middle;animation:weuiLoading 1s steps(12) infinite;background:transparent url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=\") no-repeat;background-size:100%}.weui-loading.weui-loading_transparent{background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTAwIDEwMCc+PHBhdGggZmlsbD0nbm9uZScgZD0nTTAgMGgxMDB2MTAwSDB6Jy8+PHJlY3QgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjU2KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0zMCknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDEwNS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjQzKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA3NS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjM4KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2NSA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjMyKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTguNjYgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4yOCknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoMTUwIDU0LjAyIDY1KScvPjxyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuMjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA1MCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjIpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKC0xNTAgNDUuOTggNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xNyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTEyMCA0MS4zNCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjE0KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtOTAgMzUgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtNjAgMjQuMDIgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4wMyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTMwIC01Ljk4IDY1KScvPjwvc3ZnPgo=\")}@keyframes weuiLoading{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.weui-loadmore{width:65%;margin:1.5em auto;line-height:1.6em;font-size:14px;text-align:center}.weui-loadmore__tips{display:inline-block;vertical-align:middle}.weui-loadmore_line{border-top:1px solid #e5e5e5;margin-top:2.4em}.weui-loadmore_line .weui-loadmore__tips{position:relative;top:-.9em;padding:0 .55em;color:#999}.weui-loadmore_dot .weui-loadmore__tips{padding:0 .16em}.weui-loadmore_dot .weui-loadmore__tips:before{content:\" \";width:4px;height:4px;border-radius:50%;background-color:#e5e5e5;display:inline-block;position:relative;vertical-align:0;top:-.16em}.vux-loadmore.weui-loadmore_line{display:-ms-flexbox;display:flex;border-top:0}.vux-loadmore.weui-loadmore_line:after,.vux-loadmore.weui-loadmore_line:before{position:relative;top:-1px;-ms-flex:1;flex:1;content:\"\";border-top:1px solid #e5e5e5}", "", {"version":3,"sources":["D:/wx-h5/node_modules/_vux@2.9.1@vux/src/components/load-more/index.vue"],"names":[],"mappings":"AAgSA,cACE,WAAY,AACZ,YAAa,AACb,qBAAsB,AACtB,sBAAuB,AACvB,4CAAkD,AAClD,m5DAAo5D,AACp5D,oBAAsB,CACvB,AACD,uCACE,8oEAAgpE,CACjpE,AACD,uBACA,GACI,sBAAmC,CACtC,AACD,GACI,uBAAqC,CACxC,CACA,AACD,eACE,UAAW,AACX,kBAAmB,AACnB,kBAAmB,AACnB,eAAgB,AAChB,iBAAmB,CACpB,AACD,qBACE,qBAAsB,AACtB,qBAAuB,CACxB,AACD,oBACE,6BAA8B,AAC9B,gBAAkB,CACnB,AACD,yCACE,kBAAmB,AACnB,UAAY,AACZ,gBAAiB,AACjB,UAAe,CAChB,AACD,wCACE,eAAiB,CAClB,AACD,+CACE,YAAa,AACb,UAAW,AACX,WAAY,AACZ,kBAAmB,AACnB,yBAA0B,AAC1B,qBAAsB,AACtB,kBAAmB,AACnB,iBAAkB,AAClB,UAAa,CACd,AACD,iCACE,oBAAqB,AACrB,aAAc,AACd,YAAc,CACf,AACD,+EAEE,kBAAmB,AACnB,SAAU,AACV,WAAY,AACR,OAAQ,AACZ,WAAY,AACZ,4BAA8B,CAC/B","file":"index.vue","sourcesContent":["/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content's padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text color of content\n* zh-CN: 内容文本颜色\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n.weui-loading {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  vertical-align: middle;\n  animation: weuiLoading 1s steps(12, end) infinite;\n  background: transparent url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=\") no-repeat;\n  background-size: 100%;\n}\n.weui-loading.weui-loading_transparent {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTAwIDEwMCc+PHBhdGggZmlsbD0nbm9uZScgZD0nTTAgMGgxMDB2MTAwSDB6Jy8+PHJlY3QgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjU2KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0zMCknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDEwNS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjQzKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA3NS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjM4KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2NSA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjMyKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTguNjYgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4yOCknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoMTUwIDU0LjAyIDY1KScvPjxyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuMjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA1MCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjIpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKC0xNTAgNDUuOTggNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xNyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTEyMCA0MS4zNCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjE0KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtOTAgMzUgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtNjAgMjQuMDIgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4wMyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTMwIC01Ljk4IDY1KScvPjwvc3ZnPgo=\");\n}\n@keyframes weuiLoading {\n0% {\n    transform: rotate3d(0, 0, 1, 0deg);\n}\n100% {\n    transform: rotate3d(0, 0, 1, 360deg);\n}\n}\n.weui-loadmore {\n  width: 65%;\n  margin: 1.5em auto;\n  line-height: 1.6em;\n  font-size: 14px;\n  text-align: center;\n}\n.weui-loadmore__tips {\n  display: inline-block;\n  vertical-align: middle;\n}\n.weui-loadmore_line {\n  border-top: 1px solid #E5E5E5;\n  margin-top: 2.4em;\n}\n.weui-loadmore_line .weui-loadmore__tips {\n  position: relative;\n  top: -0.9em;\n  padding: 0 .55em;\n  color: #999999;\n}\n.weui-loadmore_dot .weui-loadmore__tips {\n  padding: 0 .16em;\n}\n.weui-loadmore_dot .weui-loadmore__tips:before {\n  content: \" \";\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background-color: #E5E5E5;\n  display: inline-block;\n  position: relative;\n  vertical-align: 0;\n  top: -0.16em;\n}\n.vux-loadmore.weui-loadmore_line {\n  display: -ms-flexbox;\n  display: flex;\n  border-top: 0;\n}\n.vux-loadmore.weui-loadmore_line:before,\n.vux-loadmore.weui-loadmore_line:after {\n  position: relative;\n  top: -1px;\n  -ms-flex: 1;\n      flex: 1;\n  content: '';\n  border-top: 1px solid #E5E5E5;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(570);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(484)("d18e617e", content, true);

/***/ }),

/***/ 574:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-loadmore weui-loadmore",
    class: {
      'weui-loadmore_line': !_vm.showLoading, 'weui-loadmore_dot': !_vm.showLoading && !_vm.tip
    }
  }, [(_vm.showLoading) ? _c('i', {
    staticClass: "weui-loading"
  }) : _vm._e(), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tip || !_vm.showLoading),
      expression: "tip || !showLoading"
    }],
    staticClass: "weui-loadmore__tips"
  }, [_vm._v(_vm._s(_vm.tip))])])
},staticRenderFns: []}

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(573)

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(569),
  /* template */
  __webpack_require__(574),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 577:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABgCAMAAADipIp7AAABwlBMVEUAAACIiIiIiIiIiIiIiIiIiIiIiIiJiouIiIiIiIiIiIiIiYmIiIiIiIiIiIiIiIiIiIiIiImIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiImIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi50/u50/uIiIiIiIiIiIi50/uIiIiIiIiZoa+50vq40vm50/u50/u50/u50/uputS50/uIiIi50/u50/u50/u40fi50/uzyu2kssixxue50/uVnKaIiIizyuyIiIiSl6CRlZy50/uWnaiOkZa50/u50/uIiIi50/u50/u50/u50/u50/utwN+cp7eIiIihrsO50/u50vqnuNGIiIiVnKePkpimts650/ugrsGIiIi50/uSl5+50/uOkpadqLi50/uWnam50/u50/u50/u50/u50/udqbqtwd+0y++Rlp6YoK20zPCdqLmIiIiWnaiLjZCVnKeuwuGsv92cp7eao7GbpbWVnai50/uwxeaRlp2TmaKxx+mao7KJiou50/u50/u50/uIiIi2z/TvysIPAAAAk3RSTlMAkCBAlHBQA5KWYDCYJQkHD0tDinignHVSSHJrO4I1GBINY104qKVuaFhVKh2uiIV8MhUF/I0tKPF/G97RyZuMRhT+5uHZwIBfVf7+/fXMycjDubm4rKNzalo+NCMYCf7x7+vo4uLQzsPAvb27sq2onId5d043MC0O/fvu7ezf0tLOzsfEw7i1rZ2VkI+CdGtrZAxWNLOcAAAFB0lEQVRo3sTSyY7iMBSF4ZPE4IRyyEBGQsI8BCgmiUKw7n2JZb9Ar/pxeOBOBCJC1VVkYeLPe99fvoZgGsTSY4jlmhDKCSHU3IdQQQyhBkdULGGsjbtNhIqNNANBDVd9N0TF6DsF4FLkkrGOqiUNZGp63uKvDVTODpDxZWA76UAAY9wE4GFJHANC6G5bqZ/ZqgthDsHniEIkpQ2hlhMKkZKJCYHkVtxEJXZKFOPBUCWEbZZ4uZM9VYl2nC88VE222kQjm7pOkdF9VIbqdScb7Vsyxd0gQQWMRXDUCKnZX3fLKB7suuCq+ZbGmiZFynf3MjyY/2mCk/52uCLafqD08APZwU30Hg+jz4sFLhxNazVGJp5qjHCTXnI+uOitUBKhuKHjy+VXCD6GCkpiKMgL8MIoypEdvIKhofD8C/Bnp6UydbtxTvAKrR5+0E2C2p4Qsp8GiTt1211w5+E/modwEJPMZqjoBq4k4KPlBQa4OrRRoKdR6kvZ3FZkvX15GQkZarF9Ao58HYD5Yc1W2VzV+d2RKb4h4aoXuT6/VZw1Rsh6Fi76eEbC3WLlzQ1w4TUI23QMAOUDbquQRuBAArAcquyoNMsFFMyZ65y4BOS6qcpiu18qoHBYe1tOAbndXGLr0CwdkJNrXAIKvfqetaxeEbWw0+laJdn5W0lAzrRWTDru86HqZhZ09D63F0jNMgG5cGC8YgUeygYodbwgoDMVG0AnhtgA34bQAOVfu/b5lDYYB3D8h9w1pJAwAshSlgwRVEaRiiyV5arn3nXWVffs3nv30f+35OhZhho4kFzv+LyG5HvP78mLjDpgNYCQYWwEEK0WffqXJhJKD3DKKLG+mACJoJ3voP9hN4ugDAE608tajR1oju4Hag3JEKCVAQBfCkA4RFB6QBahsp55BaQEpOBApF+hVH4PpG+meF4TCewE2IwAQN6Tk8BSANRRYpujGQPWAsCllDgAWAugGW6xG9AmAFYDvGaSzQChCieh/AEiiVolxhgCLI23DDx5A0D5A2guO1MAoZE4SaCxOYJqQDWgGlAN+I8DFCp+LnmlAnTKVlzQbL2dy1SBAD23FsdbFO1sPKIhNRZcQDXWFDctPnXgLj1AWG/lCe4Y27DipiVU8t6/XUJoeSM4fhgBJhK4lFnNwTkGL1bstHTGsc3BfvRXNMG0Di45DpcgKbMMpx9G1VkVDTVkoQFE7eh6B7oQTV57esdDjkW+0C2CfE6TF9J0TZJJFUWncKQGpVOLXRmAcakP75bRPx1JhuXDz1K6CciDSS/76AbTOpUGKYeXiqFUk5ImV2aA3ra7OehDGQKHwOT707OzZ4OxWByyEWYuXI+saVBY79IpvBa1TWNSb68HPChTIAzM3PEn5wj5QqeQRbxg9QqhUKI2rur1ly6UJTYFhcGOw9Pu/GNqPr4ZHpOK7VAQ7VoC4GR85GLnjxxBaSIbKKVn5cXA8NhPjYhpHGvP3UCbC4foC2BrGko0lbGenr4V/8DQrrEJgytgw30TcGE2cQyligQ7PCjb+f3FVMZXcTvk237cNQfl5p7+9TngQzl6Ohf9q0PfuHrI8KkT7cPNwGaSoZEllMPT1znvXx094GNA2+tFvt9wk2bD+ztRhPJm0jvvfzX6Y+8RQnG4eadTE/TGyJ9JL0L9EagQ90kiFPOhXCGorJlkfKsrc0/MAgsi4fGdaHokQWDN3NFEMOCbgaL9AQBXFSunnLdeAAAAAElFTkSuQmCC"

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(585),
  /* template */
  __webpack_require__(603),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(598)

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(586),
  /* template */
  __webpack_require__(602),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__ = __webpack_require__(107);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'tab-item',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__["a" /* childMixin */]],
  props: {
    activeClass: String,
    disabled: Boolean,
    badgeBackground: {
      type: String,
      default: '#f74c31'
    },
    badgeColor: {
      type: String,
      default: '#fff'
    },
    badgeLabel: String
  },
  computed: {
    style() {
      return {
        borderWidth: this.$parent.lineWidth + 'px',
        borderColor: this.$parent.activeColor,
        color: this.currentSelected ? this.$parent.activeColor : this.disabled ? this.$parent.disabledColor : this.$parent.defaultColor,
        border: this.$parent.animate ? 'none' : 'auto'
      };
    }
  }
});

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__ = __webpack_require__(107);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'tab',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_multi_items__["b" /* parentMixin */]],
  mounted() {
    // stop bar anmination on first loading
    this.$nextTick(() => {
      setTimeout(() => {
        this.hasReady = true;
      }, 0);
    });
  },
  props: {
    lineWidth: {
      type: Number,
      default: 3
    },
    activeColor: String,
    barActiveColor: String,
    defaultColor: String,
    disabledColor: String,
    animate: {
      type: Boolean,
      default: true
    },
    customBarWidth: [Function, String],
    preventDefault: Boolean,
    scrollThreshold: {
      type: Number,
      default: 4
    },
    barPosition: {
      type: String,
      default: 'bottom',
      validator(val) {
        return ['bottom', 'top'].indexOf(val) !== -1;
      }
    }
  },
  computed: {
    barLeft() {
      if (this.hasReady) {
        const count = this.scrollable ? window.innerWidth / this.$children[this.currentIndex || 0].$el.getBoundingClientRect().width : this.number;
        return `${this.currentIndex * (100 / count)}%`;
      }
    },
    barRight() {
      if (this.hasReady) {
        const count = this.scrollable ? window.innerWidth / this.$children[this.currentIndex || 0].$el.getBoundingClientRect().width : this.number;
        return `${(count - this.currentIndex - 1) * (100 / count)}%`;
      }
    },
    // when prop:custom-bar-width
    innerBarStyle() {
      return {
        width: typeof this.customBarWidth === 'function' ? this.customBarWidth(this.currentIndex) : this.customBarWidth,
        backgroundColor: this.barActiveColor || this.activeColor
      };
    },
    // end
    barStyle() {
      const commonStyle = {
        left: this.barLeft,
        right: this.barRight,
        display: 'block',
        height: this.lineWidth + 'px',
        transition: !this.hasReady ? 'none' : null
      };
      if (!this.customBarWidth) {
        commonStyle.backgroundColor = this.barActiveColor || this.activeColor;
      } else {
        commonStyle.backgroundColor = 'transparent'; // when=prop:custom-bar-width
      }
      return commonStyle;
    },
    barClass() {
      return {
        'vux-tab-ink-bar-transition-forward': this.direction === 'forward',
        'vux-tab-ink-bar-transition-backward': this.direction === 'backward'
      };
    },
    scrollable() {
      return this.number > this.scrollThreshold;
    }
  },
  watch: {
    currentIndex(newIndex, oldIndex) {
      this.direction = newIndex > oldIndex ? 'forward' : 'backward';
      this.$emit('on-index-change', newIndex, oldIndex);
      this.hasReady && this.scrollToActiveTab();
    }
  },
  data() {
    return {
      direction: 'forward',
      right: '100%',
      hasReady: false
    };
  },
  methods: {
    scrollToActiveTab() {
      if (!this.scrollable || !this.$children || !this.$children.length) {
        return;
      }
      const currentIndexTab = this.$children[this.currentIndex].$el;
      let count = 0;
      // scroll animation
      const step = () => {
        const scrollDuration = 15;
        const nav = this.$refs.nav;
        nav.scrollLeft += (currentIndexTab.offsetLeft - (nav.offsetWidth - currentIndexTab.offsetWidth) / 2 - nav.scrollLeft) / scrollDuration;
        if (++count < scrollDuration) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }
});

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(483)();
// imports


// module
exports.push([module.i, ".vux-tab-ink-bar{position:absolute;height:2px;bottom:0;left:0;background-color:#04be02;text-align:center}.vux-tab-ink-bar-transition-forward{transition:right .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1) .09s}.vux-tab-ink-bar-transition-backward{transition:right .3s cubic-bezier(.35,0,.25,1) .09s,left .3s cubic-bezier(.35,0,.25,1)}.vux-tab-bar-top .vux-tab-ink-bar{top:0}.vux-tab{display:-ms-flexbox;display:flex;background-color:#fff;height:44px;position:relative}.vux-tab button{padding:0;border:0;outline:0;background:0 0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.vux-tab .vux-tab-item{display:block;-ms-flex:1;flex:1;width:100%;height:100%;box-sizing:border-box;background:linear-gradient(180deg,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;background-size:100% 1px;font-size:14px;text-align:center;line-height:44px;color:#666}.vux-tab .vux-tab-item.vux-tab-selected{color:#04be02;border-bottom:3px solid #04be02}.vux-tab-bar-top .vux-tab .vux-tab-item{background:linear-gradient(180deg,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 0 no-repeat;background-size:100% 1px}.vux-tab-bar-top .vux-tab .vux-tab-item.vux-tab-selected{border-bottom:none;border-top:3px solid #04be02}.vux-tab .vux-tab-item.vux-tab-disabled{color:#ddd}.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected{background:0 0}.vux-tab-bar-inner{display:block;background-color:#04be02;margin:auto;height:100%;transition:width .3s cubic-bezier(.35,0,.25,1)}.vux-tab-item-badge{position:absolute;top:0;bottom:0;box-sizing:border-box;display:inline-block;height:18px;min-width:18px;padding:0 4px;border-radius:30px;margin:auto 0 auto 4px;line-height:18px;font-size:11px;background-clip:padding-box;vertical-align:middle}.vux-tab-wrap{position:relative;padding-top:44px}.vux-tab-container{height:44px;top:0;left:0;right:0;overflow:hidden;position:absolute}.scrollable{overflow-y:hidden;overflow-x:auto;-webkit-overflow-scrolling:touch;padding-bottom:17px;box-sizing:content-box}.scrollable::-webkit-scrollbar{display:none}.scrollable .vux-tab-ink-bar{bottom:17px;position:absolute}.scrollable .vux-tab-item{-ms-flex:0 0 22%;flex:0 0 22%}", "", {"version":3,"sources":["D:/wx-h5/node_modules/_vux@2.9.1@vux/src/components/tab/tab.vue"],"names":[],"mappings":"AAgSA,iBACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,OAAQ,AACR,yBAA0B,AAC1B,iBAAmB,CACpB,AACD,oCACE,sFAAsG,CACvG,AACD,qCACE,sFAAsG,CACvG,AACD,kCACE,KAAO,CACR,AACD,SACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACvB,YAAa,AACb,iBAAmB,CACpB,AACD,gBACE,UAAW,AACX,SAAU,AACV,UAAW,AACX,eAAgB,AAChB,wBAAyB,AACtB,qBAAsB,AACjB,eAAiB,CAC1B,AACD,uBACE,cAAe,AACf,WAAY,AACR,OAAQ,AACZ,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,qFAAoG,AACpG,yBAA0B,AAC1B,eAAgB,AAChB,kBAAmB,AACnB,iBAAkB,AAClB,UAAY,CACb,AACD,wCACE,cAAe,AACf,+BAAiC,CAClC,AACD,wCACE,kFAAiG,AACjG,wBAA0B,CAC3B,AACD,yDACE,mBAAoB,AACpB,4BAA8B,CAC/B,AACD,wCACE,UAAY,CACb,AACD,2DACE,cAAgB,CACjB,AAED,mBACE,cAAe,AACf,yBAA0B,AAC1B,YAAa,AACb,YAAa,AACb,8CAAsD,CACvD,AACD,oBACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,sBAAuB,AACvB,qBAAsB,AACtB,YAAa,AACb,eAAgB,AAChB,cAAe,AACf,mBAAoB,AACpB,uBAAwB,AACxB,iBAAkB,AAClB,eAAgB,AAChB,4BAA6B,AAC7B,qBAAuB,CACxB,AACD,cACE,kBAAmB,AACnB,gBAAkB,CACnB,AACD,mBACE,YAAa,AACb,MAAO,AACP,OAAQ,AACR,QAAS,AACT,gBAAiB,AACjB,iBAAmB,CACpB,AACD,YACE,kBAAmB,AACnB,gBAAiB,AACjB,iCAAkC,AAClC,oBAAqB,AACrB,sBAAwB,CACzB,AACD,+BACE,YAAc,CACf,AACD,6BACE,YAAa,AACb,iBAAmB,CACpB,AACD,0BACE,iBAAkB,AACd,YAAc,CACnB","file":"tab.vue","sourcesContent":["/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content's padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text color of content\n* zh-CN: 内容文本颜色\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n.vux-tab-ink-bar {\n  position: absolute;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: #04BE02;\n  text-align: center;\n}\n.vux-tab-ink-bar-transition-forward {\n  transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s;\n}\n.vux-tab-ink-bar-transition-backward {\n  transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s, left 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.vux-tab-bar-top .vux-tab-ink-bar {\n  top: 0;\n}\n.vux-tab {\n  display: -ms-flexbox;\n  display: flex;\n  background-color: #fff;\n  height: 44px;\n  position: relative;\n}\n.vux-tab button {\n  padding: 0;\n  border: 0;\n  outline: 0;\n  background: 0 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.vux-tab .vux-tab-item {\n  display: block;\n  -ms-flex: 1;\n      flex: 1;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  background: linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) bottom left no-repeat;\n  background-size: 100% 1px;\n  font-size: 14px;\n  text-align: center;\n  line-height: 44px;\n  color: #666;\n}\n.vux-tab .vux-tab-item.vux-tab-selected {\n  color: #04BE02;\n  border-bottom: 3px solid #04BE02;\n}\n.vux-tab-bar-top .vux-tab .vux-tab-item {\n  background: linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) top left no-repeat;\n  background-size: 100% 1px;\n}\n.vux-tab-bar-top .vux-tab .vux-tab-item.vux-tab-selected {\n  border-bottom: none;\n  border-top: 3px solid #04BE02;\n}\n.vux-tab .vux-tab-item.vux-tab-disabled {\n  color: #ddd;\n}\n.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected {\n  background: 0 0;\n}\n/** when=prop:custom-bar-width **/\n.vux-tab-bar-inner {\n  display: block;\n  background-color: #04BE02;\n  margin: auto;\n  height: 100%;\n  transition: width 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.vux-tab-item-badge {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  box-sizing: border-box;\n  display: inline-block;\n  height: 18px;\n  min-width: 18px;\n  padding: 0 4px;\n  border-radius: 30px;\n  margin: auto 0 auto 4px;\n  line-height: 18px;\n  font-size: 11px;\n  background-clip: padding-box;\n  vertical-align: middle;\n}\n.vux-tab-wrap {\n  position: relative;\n  padding-top: 44px;\n}\n.vux-tab-container {\n  height: 44px;\n  top: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n  position: absolute;\n}\n.scrollable {\n  overflow-y: hidden;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  padding-bottom: 17px;\n  box-sizing: content-box;\n}\n.scrollable::-webkit-scrollbar {\n  display: none;\n}\n.scrollable .vux-tab-ink-bar {\n  bottom: 17px;\n  position: absolute;\n}\n.scrollable .vux-tab-item {\n  -ms-flex: 0 0 22%;\n      flex: 0 0 22%;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(591);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(484)("622d1fe7", content, true);

/***/ }),

/***/ 602:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-tab-wrap",
    class: _vm.barPosition === 'top' ? 'vux-tab-bar-top' : ''
  }, [_c('div', {
    staticClass: "vux-tab-container"
  }, [_c('div', {
    ref: "nav",
    staticClass: "vux-tab",
    class: [{
      'vux-tab-no-animate': !_vm.animate
    }, {
      scrollable: _vm.scrollable
    }]
  }, [_vm._t("default"), _vm._v(" "), (_vm.animate) ? _c('div', {
    staticClass: "vux-tab-ink-bar",
    class: _vm.barClass,
    style: (_vm.barStyle)
  }, [(_vm.customBarWidth) ? _c('span', {
    staticClass: "vux-tab-bar-inner",
    style: (_vm.innerBarStyle)
  }) : _vm._e()]) : _vm._e()], 2)])])
},staticRenderFns: []}

/***/ }),

/***/ 603:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-tab-item",
    class: [_vm.currentSelected ? _vm.activeClass : '', {
      'vux-tab-selected': _vm.currentSelected,
      'vux-tab-disabled': _vm.disabled
    }],
    style: (_vm.style),
    on: {
      "click": _vm.onItemClick
    }
  }, [_vm._t("default"), _vm._v(" "), (typeof _vm.badgeLabel !== 'undefined' && _vm.badgeLabel !== '') ? _c('span', {
    staticClass: "vux-tab-item-badge",
    style: ({
      background: _vm.badgeBackground,
      color: _vm.badgeColor
    })
  }, [_vm._v("\n  " + _vm._s(_vm.badgeLabel))]) : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        title: {
            type: String,
            default: '当前没有商品'
        }
    }
});

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(483)();
// imports


// module
exports.push([module.i, ".placeholder-box[data-v-4e289729]{text-align:center;color:#333;margin:0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;margin-top:5rem}.placeholder-box span[data-v-4e289729]{line-height:3rem;font-size:1.2rem;color:#d0d0d0}", "", {"version":3,"sources":["D:/wx-h5/src/components/placeholder.vue"],"names":[],"mappings":"AACA,kCACE,kBAAmB,AACnB,WAAY,AACZ,cAAe,AACf,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,0BAA2B,AACvB,sBAAuB,AAC3B,eAAiB,CAClB,AACD,uCACE,iBAAkB,AAClB,iBAAkB,AAClB,aAAe,CAChB","file":"placeholder.vue","sourcesContent":["\n.placeholder-box[data-v-4e289729] {\n  text-align: center;\n  color: #333;\n  margin: 0 auto;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  margin-top: 5rem;\n}\n.placeholder-box span[data-v-4e289729] {\n  line-height: 3rem;\n  font-size: 1.2rem;\n  color: #d0d0d0;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(618);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(484)("aa92f506", content, true);

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "placeholder-box"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": __webpack_require__(577),
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.title))])])
},staticRenderFns: []}

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(631)

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(614),
  /* template */
  __webpack_require__(635),
  /* scopeId */
  "data-v-4e289729",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_placeholder__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_placeholder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_placeholder__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_api__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vux_src_components_tab_tab_vue__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vux_src_components_tab_tab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vux_src_components_tab_tab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vux_src_components_tab_tab_item_vue__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vux_src_components_tab_tab_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vux_src_components_tab_tab_item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vux_src_components_scroller_index_vue__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vux_src_components_scroller_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vux_src_components_scroller_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vux_src_components_load_more_index_vue__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vux_src_components_load_more_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vux_src_components_load_more_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vux_src_components_loading_index_vue__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vux_src_components_loading_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vux_src_components_loading_index_vue__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };










const list = () => ['全部', 'SVIP', 'VIP', '客户'];
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Tab: __WEBPACK_IMPORTED_MODULE_3_vux_src_components_tab_tab_vue___default.a,
    TabItem: __WEBPACK_IMPORTED_MODULE_4_vux_src_components_tab_tab_item_vue___default.a,
    Scroller: __WEBPACK_IMPORTED_MODULE_5_vux_src_components_scroller_index_vue___default.a,
    LoadMore: __WEBPACK_IMPORTED_MODULE_6_vux_src_components_load_more_index_vue___default.a,
    PlaceHolder: __WEBPACK_IMPORTED_MODULE_0_components_placeholder___default.a,
    Loading: __WEBPACK_IMPORTED_MODULE_7_vux_src_components_loading_index_vue___default.a
  },
  computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])(['userInfo', 'identityCode', 'token'])),
  data() {
    return {
      tablist: list(),
      onFetching: false,
      defaultTab: '全部',
      index: 0,
      customList: [],
      initNum: 0,
      loading: false,
      totalNum: 0,
      pageSize: 20,
      pageNum: 1,
      IslastPage: false,
      type: 'all',
      isLoading: false
    };
  },
  methods: {
    getList(data) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_api__["n" /* mycustomer */])(data).then(res => {
        if (res.code === 0) {
          this.customList = res.result;
        }
        this.isLoading = true;
      });
    },
    onScrollBottom() {
      this.$nextTick(() => {
        this.$refs.scrollerBottom.reset();
      });
    },
    onItemClick(e) {
      this.initNum = e;
      if (e === 0) {
        this.type = 'all';
      } else if (e === 1) {
        this.type = 'svip';
      } else if (e === 2) {
        this.type = 'vip';
      } else {
        this.type = 'kehu';
      }
      this.$nextTick(() => {
        this.$refs.scrollerBottom.reset({ top: 0 });
        let data = {
          type: this.type,
          token: this.token
        };
        this.getList(data);
      });
    }
  },
  mounted() {
    let that = this;
    that.$nextTick(() => {
      let data = {
        type: that.type,
        token: that.token
      };
      that.getList(data);
    });
  }
});

/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(483)();
// imports


// module
exports.push([module.i, ".vux-tab-wrap[data-v-16fde463]{position:fixed;top:0;width:100%}.weui-tab-list[data-v-16fde463]{border-bottom:1px solid #eaeaea;padding:1rem 0 1rem 1rem;display:-ms-flexbox;display:flex}.weui-tab-list .user_avator[data-v-16fde463]{width:4rem;height:4rem;border-radius:50%}.weui-tab-list .user_content[data-v-16fde463]{padding-left:.5rem;font-size:1.2rem;position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;line-height:1.3333rem}.weui-tab-list .user_content .username[data-v-16fde463]{width:100px;overflow:hidden;display:inline-block;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis}.weui-tab-list .user_content .user_tags[data-v-16fde463]{position:absolute;left:110px;top:0;text-align:center}.weui-tab-list .user_content .tags_vip[data-v-16fde463]{color:#317ef3;border:1px solid #317ef3;border-radius:10px;font-size:.8rem;padding:0 5px;width:1.8rem}.weui-tab-list .user_content .tags_svip[data-v-16fde463],.weui-tab-list .user_content .tags_tubu[data-v-16fde463]{color:#fff;background:#317ef3;border:1px solid #317ef3;border-radius:10px;font-size:.8rem;padding:0 5px}.weui-tab-list .user_content .tags_tubu[data-v-16fde463]{width:1.8rem}.weui-tab-list .user_content .custom[data-v-16fde463],.weui-tab-list .user_content .level[data-v-16fde463],.weui-tab-list .user_content .money[data-v-16fde463]{width:100%;font-size:.8rem;color:#535353;overflow:hidden;display:block;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis}.weui-tab-list .user_time[data-v-16fde463]{text-align:right;color:#535353;position:absolute;right:1rem;font-size:.8rem}", "", {"version":3,"sources":["D:/wx-h5/src/pages/Mine/custom.vue"],"names":[],"mappings":"AACA,+BACE,eAAgB,AAChB,MAAO,AACP,UAAY,CACb,AACD,gCACE,gCAAiC,AACjC,yBAA0B,AAC1B,oBAAqB,AACrB,YAAc,CACf,AACD,6CACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,8CACE,mBAAoB,AACpB,iBAAkB,AAClB,kBAAmB,AACnB,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,qBAAuB,CACxB,AACD,wDACE,YAAa,AACb,gBAAiB,AACjB,qBAAsB,AACtB,mBAAoB,AACpB,uBAAwB,AACxB,yBAA2B,CAC5B,AACD,yDACE,kBAAmB,AACnB,WAAY,AACZ,MAAO,AACP,iBAAmB,CACpB,AACD,wDACE,cAAe,AACf,yBAA0B,AAC1B,mBAAoB,AACpB,gBAAiB,AACjB,cAAe,AACf,YAAc,CACf,AASD,kHAPE,WAAY,AACZ,mBAAoB,AACpB,yBAA0B,AAC1B,mBAAoB,AACpB,gBAAiB,AACjB,aAAe,CAUhB,AARD,yDAOE,YAAc,CACf,AACD,gKAGE,WAAY,AACZ,gBAAiB,AACjB,cAAe,AACf,gBAAiB,AACjB,cAAe,AACf,mBAAoB,AACpB,uBAAwB,AACxB,yBAA2B,CAC5B,AACD,2CACE,iBAAkB,AAClB,cAAe,AACf,kBAAmB,AACnB,WAAY,AACZ,eAAiB,CAClB","file":"custom.vue","sourcesContent":["\n.vux-tab-wrap[data-v-16fde463] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n.weui-tab-list[data-v-16fde463] {\n  border-bottom: 1px solid #eaeaea;\n  padding: 1rem 0 1rem 1rem;\n  display: -ms-flexbox;\n  display: flex;\n}\n.weui-tab-list .user_avator[data-v-16fde463] {\n  width: 4rem;\n  height: 4rem;\n  border-radius: 50%;\n}\n.weui-tab-list .user_content[data-v-16fde463] {\n  padding-left: .5rem;\n  font-size: 1.2rem;\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  line-height: 1.3333rem;\n}\n.weui-tab-list .user_content .username[data-v-16fde463] {\n  width: 100px;\n  overflow: hidden;\n  display: inline-block;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  -o-text-overflow: ellipsis;\n}\n.weui-tab-list .user_content .user_tags[data-v-16fde463] {\n  position: absolute;\n  left: 110px;\n  top: 0;\n  text-align: center;\n}\n.weui-tab-list .user_content .tags_vip[data-v-16fde463] {\n  color: #317ef3;\n  border: 1px solid #317ef3;\n  border-radius: 10px;\n  font-size: .8rem;\n  padding: 0 5px;\n  width: 1.8rem;\n}\n.weui-tab-list .user_content .tags_svip[data-v-16fde463] {\n  color: #fff;\n  background: #317ef3;\n  border: 1px solid #317ef3;\n  border-radius: 10px;\n  font-size: .8rem;\n  padding: 0 5px;\n}\n.weui-tab-list .user_content .tags_tubu[data-v-16fde463] {\n  color: #fff;\n  background: #317ef3;\n  border: 1px solid #317ef3;\n  border-radius: 10px;\n  font-size: .8rem;\n  padding: 0 5px;\n  width: 1.8rem;\n}\n.weui-tab-list .user_content .level[data-v-16fde463],\n.weui-tab-list .user_content .custom[data-v-16fde463],\n.weui-tab-list .user_content .money[data-v-16fde463] {\n  width: 100%;\n  font-size: .8rem;\n  color: #535353;\n  overflow: hidden;\n  display: block;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  -o-text-overflow: ellipsis;\n}\n.weui-tab-list .user_time[data-v-16fde463] {\n  text-align: right;\n  color: #535353;\n  position: absolute;\n  right: 1rem;\n  font-size: .8rem;\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=8.b54f64c261b2633bd889.js.map