module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__client__ = __webpack_require__(24);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "client", function() { return __WEBPACK_IMPORTED_MODULE_0__client__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defer__ = __webpack_require__(27);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return __WEBPACK_IMPORTED_MODULE_1__defer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dimensions__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getTopOffset", function() { return __WEBPACK_IMPORTED_MODULE_2__dimensions__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isInViewport", function() { return __WEBPACK_IMPORTED_MODULE_2__dimensions__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event__ = __webpack_require__(28);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "once", function() { return __WEBPACK_IMPORTED_MODULE_3__event__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lazy_queue__ = __webpack_require__(29);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "makeLazyQueue", function() { return __WEBPACK_IMPORTED_MODULE_4__lazy_queue__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logger__ = __webpack_require__(8);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return __WEBPACK_IMPORTED_MODULE_5__logger__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__query_string__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "queryString", function() { return __WEBPACK_IMPORTED_MODULE_6__query_string__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sampler__ = __webpack_require__(30);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "sampler", function() { return __WEBPACK_IMPORTED_MODULE_7__sampler__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__script_loader__ = __webpack_require__(31);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scriptLoader", function() { return __WEBPACK_IMPORTED_MODULE_8__script_loader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__string_builder__ = __webpack_require__(32);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stringBuilder", function() { return __WEBPACK_IMPORTED_MODULE_9__string_builder__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__try_property__ = __webpack_require__(36);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "whichProperty", function() { return __WEBPACK_IMPORTED_MODULE_10__try_property__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "tryProperty", function() { return __WEBPACK_IMPORTED_MODULE_10__try_property__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__viewport_observer__ = __webpack_require__(37);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "viewportObserver", function() { return __WEBPACK_IMPORTED_MODULE_11__viewport_observer__["a"]; });













/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__context_service__ = __webpack_require__(6);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__context_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_ad_loader__ = __webpack_require__(33);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_ad_loader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_cache__ = __webpack_require__(34);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__local_cache__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_bus__ = __webpack_require__(10);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__message_bus__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slot_data_params_updater__ = __webpack_require__(35);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__slot_data_params_updater__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__slot_service__ = __webpack_require__(7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__slot_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__slot_tweaker__ = __webpack_require__(11);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__slot_tweaker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__template_service__ = __webpack_require__(9);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__template_service__["a"]; });









/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__porvata_listener__ = __webpack_require__(38);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__porvata_listener__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroll_listener__ = __webpack_require__(46);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__scroll_listener__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slot_listener__ = __webpack_require__(47);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__slot_listener__["a"]; });




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ad_slot__ = __webpack_require__(39);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ad_slot__["a"]; });


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getTopOffset;
/* harmony export (immutable) */ __webpack_exports__["b"] = isInViewport;
function getTopOffset(element) {
	var elementWindow = element.ownerDocument.defaultView;

	var currentElement = element,
	    hideAgain = false,
	    topPos = 0;

	if (element.classList.contains('hide')) {
		hideAgain = true;
		element.classList.remove('hide');
	}

	do {
		topPos += currentElement.offsetTop;
		currentElement = currentElement.offsetParent;
	} while (currentElement !== null);

	if (hideAgain) {
		element.classList.add('hide');
	}

	if (elementWindow && elementWindow.frameElement) {
		topPos += getTopOffset(elementWindow.frameElement);
	}

	return topPos;
}

function isInViewport(element) {
	var topOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var bottomOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	var alwaysInViewportPositions = ['fixed', 'sticky'],
	    elementPosition = window.getComputedStyle(element).position;

	if (alwaysInViewportPositions.includes(elementPosition)) {
		return true;
	}

	var elementHeight = element.offsetHeight,
	    elementTop = getTopOffset(element),
	    elementBottom = elementTop + elementHeight,
	    scrollPosition = window.scrollY,
	    viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
	    viewportTop = topOffset + scrollPosition,
	    viewportBottom = bottomOffset + scrollPosition + viewportHeight;

	return elementTop >= viewportTop - elementHeight / 2 && elementBottom <= viewportBottom + elementHeight / 2;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return queryString; });
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QueryString = function () {
	function QueryString() {
		_classCallCheck(this, QueryString);
	}

	_createClass(QueryString, [{
		key: 'getValues',
		value: function getValues() {
			var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			var path = input || window.location.search.substr(1),
			    queryParameters = {},
			    queryString = path.split('&');

			if (queryString === '') {
				return null;
			}

			queryString.forEach(function (pair) {
				var _pair$split = pair.split('='),
				    _pair$split2 = _slicedToArray(_pair$split, 2),
				    id = _pair$split2[0],
				    value = _pair$split2[1];

				if (value) {
					queryParameters[id] = decodeURIComponent(value.replace(/\+/g, ' '));
				}
			});

			return queryParameters;
		}
	}, {
		key: 'get',
		value: function get(key) {
			var queryParameters = this.getValues();

			return queryParameters[key];
		}
	}]);

	return QueryString;
}();

var queryString = new QueryString();

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return context; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var contextObject = {
	adUnitId: '',
	events: {},
	listeners: {
		porvata: [],
		slot: []
	},
	options: {
		customAdLoader: {
			globalMethodName: 'loadCustomAd'
		},
		video: {
			moatTracking: {
				enabled: true,
				partnerCode: 'wikiaimajsint377461931603',
				sampling: 1
			}
		}
	},
	slots: {},
	src: 'gpt',
	state: {
		adStack: [],
		isMobile: false
	},
	targeting: {},
	vast: {
		size: [640, 480],
		adUnitId: ''
	}
},
    onChangeCallbacks = {};

function runCallbacks(trigger, key, newValue) {
	if (!onChangeCallbacks[trigger]) {
		return;
	}

	onChangeCallbacks[trigger].forEach(function (callback) {
		callback(key, newValue);
	});
}

function triggerOnChange(key, segments, newValue) {
	var trigger = '';
	segments.forEach(function (seg) {
		trigger += (trigger === '' ? '' : '.') + seg;
		runCallbacks(trigger, key, newValue);
	});
}

function segment(key, newValue) {
	var segments = key.split('.'),
	    segmentsCount = segments.length;
	var seg = contextObject,
	    lastKey = null;

	for (var i = 0; i < segmentsCount; i += 1) {
		lastKey = segments[i];
		if (i < segmentsCount - 1) {
			seg[lastKey] = seg[lastKey] || {};
			seg = seg[lastKey];
		}
	}

	if (newValue !== undefined) {
		seg[lastKey] = newValue;
		triggerOnChange(key, segments, newValue);
	}

	return seg[lastKey];
}

var Context = function () {
	function Context() {
		_classCallCheck(this, Context);

		this.__useDefault = true;
	}

	_createClass(Context, [{
		key: 'extend',
		value: function extend(newContext) {
			Object.assign(contextObject, newContext);
		}
	}, {
		key: 'set',
		value: function set(key, value) {
			segment(key, value);
		}
	}, {
		key: 'get',
		value: function get(key) {
			return segment(key);
		}
	}, {
		key: 'push',
		value: function push(key, value) {
			var array = segment(key);

			if (array) {
				array.push(value);
			}
		}
	}, {
		key: 'onChange',
		value: function onChange(key, callback) {
			onChangeCallbacks[key] = onChangeCallbacks[key] || [];
			onChangeCallbacks[key].push(callback);
		}
	}]);

	return Context;
}();

var context = new Context();

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slotService; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var slotNameMapping = {};
var slots = {};
var slotStates = {};

var SlotService = function () {
	function SlotService() {
		_classCallCheck(this, SlotService);
	}

	_createClass(SlotService, [{
		key: "add",
		value: function add(adSlot) {
			var slotName = adSlot.getSlotName();

			slots[adSlot.getId()] = adSlot;
			slotNameMapping[slotName] = adSlot.getId();

			if (slotStates[slotName] === false) {
				adSlot.disable();
			}
			if (slotStates[slotName] === true) {
				adSlot.enable();
			}
		}
	}, {
		key: "get",
		value: function get(id) {
			return slots[id];
		}
	}, {
		key: "getBySlotName",
		value: function getBySlotName(slotName) {
			var id = slotNameMapping[slotName];

			return this.get(id);
		}
	}, {
		key: "forEach",
		value: function forEach(callback) {
			Object.keys(slots).forEach(function (id) {
				callback(slots[id]);
			});
		}
	}, {
		key: "enable",
		value: function enable(slotName) {
			setState(slotName, true);
		}
	}, {
		key: "disable",
		value: function disable(slotName) {
			setState(slotName, false);
		}
	}]);

	return SlotService;
}();

var slotService = new SlotService();

function setState(slotName, state) {
	var slot = slotService.getBySlotName(slotName);
	slotStates[slotName] = state;

	if (slot) {
		if (state) {
			slot.enable();
		} else {
			slot.disable();
		}
	}
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = logger;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__query_string__ = __webpack_require__(5);


var debugGroup = __WEBPACK_IMPORTED_MODULE_0__query_string__["a" /* queryString */].get('adengine_debug') || '',
    groups = debugGroup.split(',');

if (debugGroup !== '') {
	window.console.info('AdEngine debug mode - groups:', debugGroup === '1' ? 'all' : groups);
}

function logger(logGroup) {
	if (debugGroup === '') {
		return;
	}

	if (debugGroup === '1' || groups.indexOf(logGroup) !== -1) {
		for (var _len = arguments.length, logValues = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			logValues[_key - 1] = arguments[_key];
		}

		window.console.info(logGroup, logValues);
	}
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return templateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_logger__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__context_service__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var logGroup = 'template-service',
    templates = {};

var TemplateService = function () {
	function TemplateService() {
		_classCallCheck(this, TemplateService);
	}

	_createClass(TemplateService, [{
		key: 'register',
		value: function register(template) {
			var customConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			if (typeof template.getName !== 'function') {
				throw new Error('Template does not implement getName method.');
			}
			var name = template.getName();

			var config = {};

			if (typeof template.getDefaultConfig === 'function') {
				config = template.getDefaultConfig();
			}

			if (customConfig) {
				config = Object.assign(config, customConfig);
			}

			__WEBPACK_IMPORTED_MODULE_1__context_service__["a" /* context */].set('templates.' + name, config);
			templates[name] = template;
		}
	}, {
		key: 'init',
		value: function init(name) {
			var slot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
			var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

			Object(__WEBPACK_IMPORTED_MODULE_0__utils_logger__["a" /* logger */])(logGroup, 'Load template', name, slot, params);
			if (!templates[name]) {
				throw new Error('Template ' + name + ' does not exist.');
			}

			return new templates[name](slot).init(params);
		}
	}]);

	return TemplateService;
}();

var templateService = new TemplateService();

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return messageBus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var callbacks = [],
    logGroup = 'message-bus';

function isAdEngineMessage(message) {
	try {
		return !!JSON.parse(message.data).AdEngine;
	} catch (e) {
		return false;
	}
}

function messageMatch(match, message) {
	var matching = true;

	if (match.keys) {
		var data = JSON.parse(message.data).AdEngine;
		match.keys.forEach(function (key) {
			matching = matching && data[key];
		});
	}

	return matching;
}

function onMessage(message) {
	var i = 0,
	    callback = void 0;

	if (isAdEngineMessage(message)) {
		Object(__WEBPACK_IMPORTED_MODULE_0__utils__["logger"])(logGroup, 'Message received', message);

		for (i = 0; i < callbacks.length; i += 1) {
			callback = callbacks[i];
			if (messageMatch(callback.match, message)) {
				Object(__WEBPACK_IMPORTED_MODULE_0__utils__["logger"])(logGroup, 'Matching message', message, callback);

				callback.fn(JSON.parse(message.data).AdEngine);

				if (!callback.match.infinite) {
					callbacks.splice(i, 1);
				}
				return;
			}
		}
	}
}

var MessageBus = function () {
	function MessageBus() {
		_classCallCheck(this, MessageBus);
	}

	_createClass(MessageBus, [{
		key: 'init',
		value: function init() {
			Object(__WEBPACK_IMPORTED_MODULE_0__utils__["logger"])(logGroup, 'Register message listener');
			window.addEventListener('message', onMessage);
		}
	}, {
		key: 'register',
		value: function register(match, callback) {
			callbacks.push({
				match: match,
				fn: callback
			});
		}
	}]);

	return MessageBus;
}();

var messageBus = new MessageBus();

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slotTweaker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__message_bus__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slot_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var logGroup = 'slot-tweaker';

var SlotTweaker = function () {
	function SlotTweaker() {
		_classCallCheck(this, SlotTweaker);
	}

	_createClass(SlotTweaker, [{
		key: 'forceRepaint',
		value: function forceRepaint(domElement) {
			return domElement.offsetWidth;
		}
	}, {
		key: 'getContainer',
		value: function getContainer(adSlot) {
			var container = document.getElementById(adSlot.getId());

			if (!container) {
				Object(__WEBPACK_IMPORTED_MODULE_2__utils__["logger"])(logGroup, 'cannot find container', adSlot.getId());
			}

			return container;
		}
	}, {
		key: 'hide',
		value: function hide(adSlot) {
			var container = this.getContainer(adSlot);

			if (container) {
				Object(__WEBPACK_IMPORTED_MODULE_2__utils__["logger"])(logGroup, 'hide', adSlot.getId());
				container.classList.add('hide');
			}
		}
	}, {
		key: 'show',
		value: function show(adSlot) {
			var container = this.getContainer(adSlot);

			if (container) {
				Object(__WEBPACK_IMPORTED_MODULE_2__utils__["logger"])(logGroup, 'show', adSlot.getId());
				container.classList.remove('hide');
			}
		}
	}, {
		key: 'collapse',
		value: function collapse(adSlot) {
			var container = this.getContainer(adSlot);

			container.style.maxHeight = container.scrollHeight + 'px';
			this.forceRepaint(container);
			container.classList.add('slot-animation');
			container.style.maxHeight = '0';
		}
	}, {
		key: 'expand',
		value: function expand(adSlot) {
			var container = this.getContainer(adSlot);

			container.style.maxHeight = container.offsetHeight + 'px';
			container.classList.remove('hide');
			container.classList.add('slot-animation');
			container.style.maxHeight = container.scrollHeight + 'px';
		}
	}, {
		key: 'makeResponsive',
		value: function makeResponsive(adSlot) {
			var aspectRatio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			var slotContainer = this.getContainer(adSlot);

			slotContainer.classList.add('slot-responsive');

			return this.onReady(adSlot).then(function (iframe) {
				var container = iframe.parentElement;
				if (!aspectRatio) {
					var height = iframe.contentWindow.document.body.scrollHeight,
					    width = iframe.contentWindow.document.body.scrollWidth;

					aspectRatio = width / height;
				}

				Object(__WEBPACK_IMPORTED_MODULE_2__utils__["logger"])(logGroup, 'make responsive', adSlot.getId());
				container.style.paddingBottom = 100 / aspectRatio + '%';
				return iframe;
			});
		}
	}, {
		key: 'onReady',
		value: function onReady(adSlot) {
			var container = this.getContainer(adSlot),
			    iframe = container.querySelector('div[id*="_container_"] iframe');

			return new Promise(function (resolve, reject) {
				if (!iframe) {
					reject('Cannot find iframe element');
				}

				if (iframe.contentWindow.document.readyState === 'complete') {
					resolve(iframe);
				} else {
					iframe.addEventListener('load', function () {
						return resolve(iframe);
					});
				}
			});
		}
	}, {
		key: 'registerMessageListener',
		value: function registerMessageListener() {
			var _this = this;

			__WEBPACK_IMPORTED_MODULE_0__message_bus__["a" /* messageBus */].register({
				keys: ['action', 'slotName'],
				infinite: true
			}, function (data) {
				if (!data.slotName) {
					Object(__WEBPACK_IMPORTED_MODULE_2__utils__["logger"])(logGroup, 'Missing slot name');
					return;
				}

				var adSlot = __WEBPACK_IMPORTED_MODULE_1__slot_service__["a" /* slotService */].getBySlotName(data.slotName);

				switch (data.action) {
					case 'expand':
						_this.expand(adSlot);
						break;
					case 'collapse':
						_this.collapse(adSlot);
						break;
					case 'hide':
						_this.hide(adSlot);
						break;
					case 'show':
						_this.show(adSlot);
						break;
					case 'make-responsive':
						_this.makeResponsive(adSlot, data.aspectRatio);
						break;
					default:
						Object(__WEBPACK_IMPORTED_MODULE_2__utils__["logger"])(logGroup, 'Unknown action', data.action);
				}
			});
		}
	}, {
		key: 'setDataParam',
		value: function setDataParam(adSlot, attrName, data) {
			var container = this.getContainer(adSlot);

			container.dataset[attrName] = typeof data === 'string' ? data : JSON.stringify(data);
		}
	}]);

	return SlotTweaker;
}();

var slotTweaker = new SlotTweaker();

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vast_debugger__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__vast_debugger__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vast_parser__ = __webpack_require__(14);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__vast_parser__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vast_url_builder__ = __webpack_require__(15);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__vast_url_builder__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player_porvata__ = __webpack_require__(41);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__player_porvata__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__player_porvata__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__player_porvata__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__player_porvata__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__player_porvata__["e"]; });





/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return vastDebugger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vast_parser__ = __webpack_require__(14);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



function setAttribute(element, attribute, value) {
	if (!element || !value) {
		return;
	}

	element.setAttribute(attribute, value);
}

var VastDebugger = function () {
	function VastDebugger() {
		_classCallCheck(this, VastDebugger);
	}

	_createClass(VastDebugger, [{
		key: 'setVastAttributes',
		value: function setVastAttributes(element, vastUrl, status, imaAd) {
			var vastParams = __WEBPACK_IMPORTED_MODULE_0__vast_parser__["a" /* vastParser */].parse(vastUrl, {
				imaAd: imaAd
			});

			setAttribute(element, 'data-vast-content-type', vastParams.contentType);
			setAttribute(element, 'data-vast-creative-id', vastParams.creativeId);
			setAttribute(element, 'data-vast-line-item-id', vastParams.lineItemId);
			setAttribute(element, 'data-vast-position', vastParams.position);
			setAttribute(element, 'data-vast-size', vastParams.size);
			setAttribute(element, 'data-vast-status', status);
			setAttribute(element, 'data-vast-params', JSON.stringify(vastParams.customParams));
		}
	}]);

	return VastDebugger;
}();

var vastDebugger = new VastDebugger();

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return vastParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var VastParser = function () {
	function VastParser() {
		_classCallCheck(this, VastParser);
	}

	_createClass(VastParser, [{
		key: 'getAdInfo',
		value: function getAdInfo(imaAd) {
			var adInfo = {};

			var wrapperCreativeIds = void 0,
			    wrapperIds = void 0;

			if (imaAd) {
				adInfo.lineItemId = imaAd.getAdId();
				adInfo.creativeId = imaAd.getCreativeId();
				adInfo.contentType = imaAd.getContentType();

				wrapperIds = imaAd.getWrapperAdIds();
				if (wrapperIds && wrapperIds.length) {
					adInfo.lineItemId = wrapperIds[0];
				}

				wrapperCreativeIds = imaAd.getWrapperCreativeIds();
				if (wrapperCreativeIds && wrapperCreativeIds.length) {
					adInfo.creativeId = wrapperCreativeIds[0];
				}
			}

			return adInfo;
		}
	}, {
		key: 'parse',
		value: function parse(vastUrl) {
			var extra = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			var currentAd = this.getAdInfo(extra.imaAd),
			    vastParams = __WEBPACK_IMPORTED_MODULE_0__utils__["queryString"].getValues(vastUrl.substr(1 + vastUrl.indexOf('?'))),
			    customParams = __WEBPACK_IMPORTED_MODULE_0__utils__["queryString"].getValues(vastParams.cust_params);

			return {
				contentType: currentAd.contentType || extra.contentType,
				creativeId: currentAd.creativeId || extra.creativeId,
				customParams: customParams,
				lineItemId: currentAd.lineItemId || extra.lineItemId,
				position: vastParams.vpos,
				size: vastParams.sz
			};
		}
	}]);

	return VastParser;
}();

var vastParser = new VastParser();

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buildVastUrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__(1);


var availableVideoPositions = ['preroll', 'midroll', 'postroll'],
    baseUrl = 'https://pubads.g.doubleclick.net/gampad/ads?',
    correlator = Math.round(Math.random() * 10000000000);

function getCustomParameters(slot) {
	var extraTargeting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var params = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__services__["a" /* context */].get('targeting'), slot.getTargeting(), extraTargeting);

	return encodeURIComponent(Object.keys(params).filter(function (key) {
		return params[key];
	}).map(function (key) {
		return key + '=' + params[key];
	}).join('&'));
}

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function buildVastUrl(aspectRatio, slotName) {
	var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	var params = ['output=vast', 'env=vp', 'gdfp_req=1', 'impl=s', 'unviewed_position_start=1', 'sz=' + (aspectRatio > 1 || !isNumeric(aspectRatio) ? '640x480' : '320x480'), 'url=' + encodeURIComponent(window.location.href), 'description_url=' + encodeURIComponent(window.location.href), 'correlator=' + correlator],
	    slot = __WEBPACK_IMPORTED_MODULE_0__services__["f" /* slotService */].getBySlotName(slotName);

	if (slot) {
		params.push('iu=' + slot.getVideoAdUnit());
		params.push('cust_params=' + getCustomParameters(slot, options.targeting));
	} else {
		throw Error('Slot does not exist!');
	}

	if (options.contentSourceId && options.videoId) {
		params.push('cmsid=' + options.contentSourceId);
		params.push('vid=' + options.videoId);
	}

	if (options.vpos && availableVideoPositions.indexOf(options.vpos) > -1) {
		params.push('vpos=' + options.vpos);
	}

	if (options.numberOfAds !== undefined) {
		params.push('pmad=' + options.numberOfAds);
	}

	return baseUrl + params.join('&');
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return googleImaPlayerFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__google_ima_setup__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moat_moat_video_tracker__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vast_debugger__ = __webpack_require__(13);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





function getVideoElement() {
	var videoElement = document.createElement('video');

	videoElement.setAttribute('preload', 'none');

	return videoElement;
}

var GoogleImaPlayer = function () {
	function GoogleImaPlayer(adDisplayContainer, adsLoader, params) {
		_classCallCheck(this, GoogleImaPlayer);

		this.isAdsManagerLoaded = false;
		this.status = '';
		this.adDisplayContainer = adDisplayContainer;
		this.adsLoader = adsLoader;
		this.adsManager = null;
		this.params = params;
		this.mobileVideoAd = params.container.querySelector('video');
		this.eventListeners = {};
		this.vastUrl = '';
	}

	_createClass(GoogleImaPlayer, [{
		key: 'setVastUrl',
		value: function setVastUrl(vastUrl) {
			this.vastUrl = vastUrl;
		}
	}, {
		key: 'setAdsManager',
		value: function setAdsManager(adsManager) {
			this.adsManager = adsManager;
			this.isAdsManagerLoaded = true;
		}
	}, {
		key: 'addEventListener',
		value: function addEventListener(eventName, callback) {
			var _this = this;

			if (eventName.indexOf('wikia') !== -1) {
				this.eventListeners[eventName] = this.eventListeners[eventName] || [];
				this.eventListeners[eventName].push(callback);
				return;
			}

			if (this.isAdsManagerLoaded) {
				this.adsManager.addEventListener(eventName, callback);
			} else {
				this.adsLoader.addEventListener('adsManagerLoaded', function () {
					_this.adsManager.addEventListener(eventName, callback);
				});
			}
		}
	}, {
		key: 'setVastAttributes',
		value: function setVastAttributes(status) {
			var currentAd = this.adsManager && this.adsManager.getCurrentAd && this.adsManager.getCurrentAd(),
			    playerElement = this.params.container.querySelector('.video-player');

			__WEBPACK_IMPORTED_MODULE_2__vast_debugger__["a" /* vastDebugger */].setVastAttributes(playerElement, this.vastUrl, status, currentAd);
		}
	}, {
		key: 'setAutoPlay',
		value: function setAutoPlay(value) {
			// mobileVideoAd DOM element is present on mobile only
			if (this.mobileVideoAd) {
				this.mobileVideoAd.autoplay = value;
				this.mobileVideoAd.muted = value;
			}
		}
	}, {
		key: 'playVideo',
		value: function playVideo(width, height) {
			var _this2 = this;

			var callback = function callback() {
				_this2.dispatchEvent('wikiaAdPlayTriggered');
				// https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdDisplayContainer.initialize
				_this2.adDisplayContainer.initialize();
				_this2.adsManager.init(Math.round(width), Math.round(height), window.google.ima.ViewMode.NORMAL);
				_this2.adsManager.start();
				_this2.adsLoader.removeEventListener('adsManagerLoaded', callback);
			};

			if (this.isAdsManagerLoaded) {
				callback();
			} else {
				// When adsManager is not loaded yet video can't start without click on mobile
				// Muted auto play is workaround to run video on adsManagerLoaded event
				this.setAutoPlay(true);
				this.adsLoader.addEventListener('adsManagerLoaded', callback, false);
			}
		}
	}, {
		key: 'reload',
		value: function reload() {
			var adRequest = __WEBPACK_IMPORTED_MODULE_0__google_ima_setup__["a" /* googleImaSetup */].createRequest(this.params);

			this.adsManager.destroy();
			this.adsLoader.contentComplete();
			this.setVastUrl(adRequest.adTagUrl);
			this.adsLoader.requestAds(adRequest);
		}
	}, {
		key: 'resize',
		value: function resize(width, height) {
			var isFullscreen = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			var viewMode = window.google.ima.ViewMode;

			if (this.adsManager) {
				this.adsManager.resize(Math.round(width), Math.round(height), isFullscreen ? viewMode.FULLSCREEN : viewMode.NORMAL);
			}
		}
	}, {
		key: 'dispatchEvent',
		value: function dispatchEvent(eventName) {
			if (this.eventListeners[eventName] && this.eventListeners[eventName].length > 0) {
				this.eventListeners[eventName].forEach(function (callback) {
					callback({});
				});
			}
		}
	}, {
		key: 'setStatus',
		value: function setStatus(newStatus) {
			var _this3 = this;

			return function () {
				_this3.status = newStatus;
			};
		}
	}, {
		key: 'getStatus',
		value: function getStatus() {
			return this.status;
		}
	}, {
		key: 'getAdsManager',
		value: function getAdsManager() {
			return this.adsManager;
		}
	}]);

	return GoogleImaPlayer;
}();

var googleImaPlayerFactory = {
	create: function create(adDisplayContainer, adsLoader, videoSettings) {
		var adRequest = __WEBPACK_IMPORTED_MODULE_0__google_ima_setup__["a" /* googleImaSetup */].createRequest(videoSettings.getParams()),
		    player = new GoogleImaPlayer(adDisplayContainer, adsLoader, videoSettings.getParams()),
		    videoElement = getVideoElement();

		if (player.mobileVideoAd) {
			videoSettings.getContainer().classList.add('mobile-porvata');
		}

		adsLoader.addEventListener('adsManagerLoaded', function (adsManagerLoadedEvent) {
			var renderingSettings = __WEBPACK_IMPORTED_MODULE_0__google_ima_setup__["a" /* googleImaSetup */].getRenderingSettings(videoSettings),
			    adsManager = adsManagerLoadedEvent.getAdsManager(videoElement, renderingSettings);
			player.setAdsManager(adsManager);

			if (videoSettings.isMoatTrackingEnabled()) {
				__WEBPACK_IMPORTED_MODULE_1__moat_moat_video_tracker__["a" /* moatVideoTracker */].init(adsManager, videoSettings.getContainer(), window.google.ima.ViewMode.NORMAL, videoSettings.get('src'), videoSettings.get('adProduct') + '/' + videoSettings.get('slotName'));
			}

			player.dispatchEvent('wikiaAdsManagerLoaded');

			adsManager.addEventListener('loaded', function () {
				return player.setVastAttributes('success');
			});
			adsManager.addEventListener('adError', function () {
				return player.setVastAttributes('error');
			});
		}, false);

		adsLoader.addEventListener('adError', function () {
			return player.setVastAttributes('error');
		});

		player.setVastUrl(adRequest.adTagUrl);
		adsLoader.requestAds(adRequest);
		if (videoSettings.get('autoPlay')) {
			player.setAutoPlay(true);
		}

		player.addEventListener('resume', player.setStatus('playing'));
		player.addEventListener('start', player.setStatus('playing'));
		player.addEventListener('pause', player.setStatus('paused'));

		return player;
	}
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return moatVideoTracker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moat_video_tracker_script__ = __webpack_require__(45);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var logGroup = 'moat-video-tracker';

var MoatVideoTracker = function () {
	function MoatVideoTracker() {
		_classCallCheck(this, MoatVideoTracker);
	}

	_createClass(MoatVideoTracker, [{
		key: 'init',
		value: function init(adsManager, container, viewMode, slicer1, slicer2) {
			var ids = {
				partnerCode: __WEBPACK_IMPORTED_MODULE_1__services__["a" /* context */].get('options.video.moatTracking.partnerCode'),
				viewMode: viewMode,
				slicer1: slicer1,
				slicer2: slicer2
			};

			try {
				Object(__WEBPACK_IMPORTED_MODULE_2__moat_video_tracker_script__["a" /* initMoatTracking */])(adsManager, ids, container);
				Object(__WEBPACK_IMPORTED_MODULE_0__utils__["logger"])(logGroup, 'MOAT video tracking initialized');
			} catch (error) {
				Object(__WEBPACK_IMPORTED_MODULE_0__utils__["logger"])(logGroup, 'MOAT video tracking initalization error', error);
			}
		}
	}]);

	return MoatVideoTracker;
}();

var moatVideoTracker = new MoatVideoTracker();

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




function getMoatTrackingStatus(params) {
	var sampling = __WEBPACK_IMPORTED_MODULE_0__services__["a" /* context */].get('options.video.moatTracking.sampling');

	if (typeof params.moatTracking === 'boolean') {
		return params.moatTracking;
	}

	if (!__WEBPACK_IMPORTED_MODULE_0__services__["a" /* context */].get('options.video.moatTracking.enabled')) {
		return false;
	}

	if (sampling === 100) {
		return true;
	}

	if (sampling > 0) {
		return __WEBPACK_IMPORTED_MODULE_1__utils__["sampler"].sample('moat_video_tracking', sampling);
	}

	return false;
}

var VideoSettings = function () {
	function VideoSettings() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, VideoSettings);

		this.params = params;
		this.moatTracking = getMoatTrackingStatus(params);
	}

	_createClass(VideoSettings, [{
		key: 'get',
		value: function get(key) {
			return this.params[key];
		}
	}, {
		key: 'getContainer',
		value: function getContainer() {
			return this.get('container');
		}
	}, {
		key: 'getParams',
		value: function getParams() {
			return this.params;
		}
	}, {
		key: 'isMoatTrackingEnabled',
		value: function isMoatTrackingEnabled() {
			return this.moatTracking;
		}
	}]);

	return VideoSettings;
}();

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gpt_provider__ = __webpack_require__(51);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__gpt_provider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gpt_targeting__ = __webpack_require__(20);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__gpt_targeting__["a"]; });



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setupGptTargeting;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__(1);


function setupGptTargeting() {
	var tag = window.googletag.pubads(),
	    targeting = __WEBPACK_IMPORTED_MODULE_0__services__["a" /* context */].get('targeting');

	function setTargetingValue(key, value) {
		if (typeof value === 'function') {
			tag.setTargeting(key, value());
		} else {
			tag.setTargeting(key, value);
		}
	}

	Object.keys(targeting).forEach(function (key) {
		setTargetingValue(key, targeting[key]);
	});

	__WEBPACK_IMPORTED_MODULE_0__services__["a" /* context */].onChange('targeting', function (trigger, value) {
		var segments = trigger.split('.'),
		    key = segments[segments.length - 1];

		setTargetingValue(key, value);
	});
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable global-require, no-console, no-underscore-dangle */
var _require = __webpack_require__(22),
    name = _require.name,
    version = _require.version;

var moduleName = '__wikia_adengine';

if (typeof window[moduleName] === 'undefined') {
	window[moduleName] = __webpack_require__(23);

	Object.defineProperty(window[moduleName], '__version', {
		value: version
	});
} else if (window[moduleName].__version !== version) {
	console.warn(name + ' is trying to load v' + version + ', but ' + window[moduleName].__version + ' is already loaded');
}

module.exports = window[moduleName];

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {"name":"@wikia/ad-engine","version":"9.1.0","description":"Wikia AdEngine","repository":{"type":"git","url":"https://github.com/Wikia/AdEngine"},"dependencies":{"blockadblock":"3.2.1","core-decorators":"^0.20.0","events":"^1.1.1","lodash-es":"^4.17.4","mobile-detect":"1.4.1"},"devDependencies":{"babel-core":"^6.26.0","babel-eslint":"^7.0.0","babel-loader":"^7.1.2","babel-plugin-lodash":"^3.3.2","babel-plugin-transform-class-properties":"^6.24.1","babel-plugin-transform-decorators-legacy":"^1.3.4","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-preset-env":"^1.6.1","casperjs":"^1.1.4","chai":"^4.1.2","eslint":"^3.7.1","eslint-config-airbnb":"^12.0.0","eslint-plugin-import":"^1.16.0","eslint-plugin-jsx-a11y":"^2.2.3","eslint-plugin-react":"^6.4.1","jsdom":"^11.3.0","jsdom-global":"^3.0.2","mocha":"4.1.0","mocha-jsdom":"^1.1.0","mocha-junit-reporter":"^1.15.0","mocha-webpack":"^1.0.1","nyc":"11.4.1","phantomjs-polyfill-object-assign":"0.0.2","phantomjs-prebuilt":"^2.1.7","sinon":"4.1.4","webpack":"^3.5.6","webpack-dev-server":"2.10.1","webpack-merge":"^4.1.1"},"files":["dist/","src/","jsconfig.json","README.md"],"main":"./dist/ad-engine.js","nyc":{"report-dir":"./spec/build/","reporter":["cobertura"]},"publishConfig":{"registry":"https://artifactory.wikia-inc.com/artifactory/api/npm/wikia-npm/"},"scripts":{"build":"./node_modules/webpack/bin/webpack.js --progress --colors --hide-modules","casper":"cd tests/ && ../node_modules/casperjs/bin/casperjs test .","ci-check":"npm run test && npm run lint","lint":"./node_modules/.bin/eslint .","prepublishOnly":"./maintenance/prepublish.sh","preversion":"./maintenance/preversion.sh","serve":"./node_modules/webpack-dev-server/bin/webpack-dev-server.js --progress --colors --inline --open --watch --content-base=./examples","tdd":"mocha-webpack -w --full-trace './spec/**/*.spec.js' -r jsdom-global/register --webpack-env.test","test":"mocha-webpack --full-trace './spec/**/*.spec.js' -r jsdom-global/register --webpack-env.test","test-coverage":"nyc mocha-webpack './spec/**/*.spec.js' -r jsdom-global/register --webpack-env.test --reporter mocha-junit-reporter --reporter-options mochaFile=./spec/build/tests.xml","watch":"./node_modules/webpack/bin/webpack.js --progress --colors --hide-modules --watch"}}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ad_engine__ = __webpack_require__(48);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AdEngine", function() { return __WEBPACK_IMPORTED_MODULE_1__ad_engine__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listeners__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PorvataListener", function() { return __WEBPACK_IMPORTED_MODULE_2__listeners__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scrollListener", function() { return __WEBPACK_IMPORTED_MODULE_2__listeners__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "slotListener", function() { return __WEBPACK_IMPORTED_MODULE_2__listeners__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AdSlot", function() { return __WEBPACK_IMPORTED_MODULE_3__models__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(19);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GptProvider", function() { return __WEBPACK_IMPORTED_MODULE_4__providers__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setupGptTargeting", function() { return __WEBPACK_IMPORTED_MODULE_4__providers__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "context", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "registerCustomAdLoader", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "localCache", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "messageBus", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "slotDataParamsUpdater", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "slotService", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "slotTweaker", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "templateService", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__video__ = __webpack_require__(12);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "vastDebugger", function() { return __WEBPACK_IMPORTED_MODULE_6__video__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "vastParser", function() { return __WEBPACK_IMPORTED_MODULE_6__video__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "buildVastUrl", function() { return __WEBPACK_IMPORTED_MODULE_6__video__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PorvataPlayer", function() { return __WEBPACK_IMPORTED_MODULE_6__video__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Porvata", function() { return __WEBPACK_IMPORTED_MODULE_6__video__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VideoSettings", function() { return __WEBPACK_IMPORTED_MODULE_6__video__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "moatVideoTracker", function() { return __WEBPACK_IMPORTED_MODULE_6__video__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "googleImaPlayerFactory", function() { return __WEBPACK_IMPORTED_MODULE_6__video__["e"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__; });










/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return client; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobile_detect__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobile_detect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobile_detect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_blockadblock__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_blockadblock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_blockadblock__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global BlockAdBlock */



var blockAdBlock = null,
    browser = null,
    mobileDetect = null,
    operatingSystem = null;

function getMobileDetect() {
	if (mobileDetect === null) {
		var userAgent = window.navigator.userAgent;

		mobileDetect = new __WEBPACK_IMPORTED_MODULE_0_mobile_detect___default.a(userAgent);
	}

	return mobileDetect;
}

var Client = function () {
	function Client() {
		_classCallCheck(this, Client);
	}

	_createClass(Client, [{
		key: 'isSmartphone',
		value: function isSmartphone() {
			var device = getMobileDetect();

			return device.mobile();
		}
	}, {
		key: 'isTablet',
		value: function isTablet() {
			var device = getMobileDetect();

			return device.tablet();
		}
	}, {
		key: 'isDesktop',
		value: function isDesktop() {
			return !this.isSmartphone() && !this.isTablet();
		}
	}, {
		key: 'checkBlocking',
		value: function checkBlocking() {
			var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
			var disabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			if (blockAdBlock === null) {
				if (typeof __WEBPACK_IMPORTED_MODULE_1_blockadblock___default.a === 'undefined' || typeof BlockAdBlock === 'undefined') {
					if (enabled !== null) enabled();

					return;
				}

				blockAdBlock = new BlockAdBlock({
					checkOnLoad: false,
					resetOnEnd: true,
					loopCheckTime: 50,
					loopMaxNumber: 5
				});
			}

			if (enabled !== null) blockAdBlock.onDetected(enabled);
			if (disabled !== null) blockAdBlock.onNotDetected(disabled);

			blockAdBlock.check(true);
		}
	}, {
		key: 'getDeviceType',
		value: function getDeviceType() {
			if (this.isTablet()) {
				return 'tablet';
			} else if (this.isSmartphone()) {
				return 'smartphone';
			}

			return 'desktop';
		}
	}, {
		key: 'getOperatingSystem',
		value: function getOperatingSystem() {
			if (operatingSystem !== null) {
				return operatingSystem;
			}

			var userAgent = window.navigator.userAgent;

			operatingSystem = 'unknown';
			if (userAgent.indexOf('Win') !== -1) {
				operatingSystem = 'Windows';
			}
			if (userAgent.indexOf('Mac') !== -1) {
				operatingSystem = 'OSX';
			}
			if (userAgent.indexOf('Linux') !== -1) {
				operatingSystem = 'Linux';
			}
			if (userAgent.indexOf('Android') !== -1) {
				operatingSystem = 'Android';
			}
			if (userAgent.indexOf('like Mac') !== -1) {
				operatingSystem = 'iOS';
			}

			return operatingSystem;
		}
	}, {
		key: 'getBrowser',
		value: function getBrowser() {
			if (browser !== null) {
				return browser;
			}

			var appName = window.navigator.appName,
			    appVersion = window.navigator.appVersion,
			    userAgent = window.navigator.userAgent;

			var temp = void 0,
			    matches = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

			if (/trident/i.test(matches[1])) {
				temp = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
				browser = 'IE ' + (temp[1] || '');
				return browser;
			}
			if (matches[1] === 'Chrome') {
				temp = userAgent.match(/\b(OPR|Edge)\/(\d+)/);
				if (temp !== null) {
					browser = temp.slice(1).join(' ').replace('OPR', 'Opera');
					return browser;
				}
			}

			matches = matches[2] ? [matches[1], matches[2]] : [appName, appVersion, '-?'];
			temp = userAgent.match(/version\/(\d+)/i);
			if (temp !== null) {
				matches.splice(1, 1, temp[1]);
			}
			browser = matches.join(' ');

			return browser;
		}
	}]);

	return Client;
}();

var client = new Client();

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("mobile-detect");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("blockadblock");

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defer;
function defer(fn) {
	for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		args[_key - 1] = arguments[_key];
	}

	if (typeof fn !== 'function') {
		throw new Error('Expected a function.');
	}

	return new Promise(function (resolve) {
		setTimeout(function () {
			return resolve(fn.apply(undefined, args));
		}, 0);
	});
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = once;
function once(eventTarget, eventName) {
	var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	return new Promise(function (resolve, reject) {
		if (!eventTarget || typeof eventTarget.addEventListener !== 'function') {
			reject('EventTarget does not have addEventListener method');
		}

		if (typeof options === 'boolean') {
			options = { capture: options };
		}

		eventTarget.addEventListener(eventName, resolve, Object.assign({}, options, { once: true }));
	});
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = makeLazyQueue;
function makeLazyQueue(queue, callback) {
	if (typeof callback !== 'function') {
		throw new Error('LazyQueue used with callback not being a function');
	} else if (queue instanceof Array) {
		queue.start = function () {
			while (queue.length > 0) {
				callback(queue.shift());
			}
			queue.push = function (item) {
				callback(item);
			};
		};
	} else {
		throw new Error('LazyQueue requires an array as the first parameter');
	}
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sampler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__query_string__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



function isSamplingIgnored(name) {
	var ignored = (__WEBPACK_IMPORTED_MODULE_0__query_string__["a" /* queryString */].get('ignored_samplers') || '').split(',');

	return ignored.indexOf(name) !== -1;
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

var Sampler = function () {
	function Sampler() {
		_classCallCheck(this, Sampler);
	}

	_createClass(Sampler, [{
		key: 'sample',
		value: function sample(name, sampling) {
			var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

			return isSamplingIgnored(name) ? true : getRandomInt(0, max) < sampling;
		}
	}]);

	return Sampler;
}();

var sampler = new Sampler();

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scriptLoader; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScriptLoader = function () {
	function ScriptLoader() {
		_classCallCheck(this, ScriptLoader);
	}

	_createClass(ScriptLoader, [{
		key: 'createScript',
		value: function createScript(src) {
			var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text/javascript';
			var isAsync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
			var node = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

			var script = document.createElement('script');

			node = node || document.body.lastChild;
			script.async = isAsync;
			script.type = type;
			script.src = src;
			node.parentNode.insertBefore(script, node);

			return script;
		}
	}, {
		key: 'loadScript',
		value: function loadScript(src) {
			var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text/javascript';

			var _this = this;

			var isAsync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
			var node = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

			return new Promise(function (resolve, reject) {
				var script = _this.createScript(src, type, isAsync, node);

				script.onload = resolve;
				script.onerror = reject;
			});
		}
	}]);

	return ScriptLoader;
}();

var scriptLoader = new ScriptLoader();

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return stringBuilder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var StringBuilder = function () {
	function StringBuilder() {
		_classCallCheck(this, StringBuilder);
	}

	_createClass(StringBuilder, [{
		key: 'build',
		value: function build(string) {
			var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			var matches = string.match(/{(.+?)}/g);

			if (matches) {
				matches.forEach(function (match) {
					var key = match.replace('{', '').replace('}', ''),
					    fallbackValue = __WEBPACK_IMPORTED_MODULE_0__services__["a" /* context */].get(key),
					    keySegments = key.split('.');

					var index = void 0,
					    segment = void 0,
					    value = parameters[keySegments[0]];

					if (value) {
						for (index = 1; index < keySegments.length; index += 1) {
							segment = keySegments[index];
							if (!value[segment]) {
								value = null;
								break;
							}
							value = value[segment];
						}
					}

					if (value || fallbackValue) {
						string = string.replace(match, value || fallbackValue);
					}
				});
			}

			return string;
		}
	}]);

	return StringBuilder;
}();

var stringBuilder = new StringBuilder();

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = registerCustomAdLoader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slot_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_service__ = __webpack_require__(9);



function registerCustomAdLoader(methodName) {
	window[methodName] = function (params) {
		var slot = __WEBPACK_IMPORTED_MODULE_0__slot_service__["a" /* slotService */].getBySlotName(params.slotName);

		__WEBPACK_IMPORTED_MODULE_1__template_service__["a" /* templateService */].init(params.type, slot, params);
	};
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return localCache; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global Storage */


var logGroup = 'local-cache';

var _canUseStorage = void 0;

var LocalCache = function () {
	function LocalCache() {
		_classCallCheck(this, LocalCache);
	}

	_createClass(LocalCache, [{
		key: 'canUseStorage',
		value: function canUseStorage() {
			if (typeof _canUseStorage === 'undefined') {
				_canUseStorage = false;
				if (window.localStorage) {
					try {
						window.localStorage.setItem('test', '1');
						window.localStorage.removeItem('test');
						_canUseStorage = true;
					} catch (e) {
						/* There are two known possibilities here:
       *
       * 1) The browser isn't allowing access due to a
       * privacy setting (which can happen in Safari).
       *
       * 2) The allowed disk space for storage is used
       * up. However, this is more likely to happen in
       * calls to LocalCache.set().
       */
						try {
							LocalCache.createPolyfill();
							_canUseStorage = true;
						} catch (exception) {
							Object(__WEBPACK_IMPORTED_MODULE_0__utils__["logger"])(logGroup, 'Local Storage polyfill error: ', exception);
						}
					}
				}
			}

			return _canUseStorage;
		}
	}, {
		key: 'createPolyfill',
		value: function createPolyfill() {
			Object(__WEBPACK_IMPORTED_MODULE_0__utils__["logger"])(logGroup, 'Local Storage polyfill being created');
			Storage.prototype.data = {};

			Storage.prototype.setItem = function setItem(id, val) {
				this.data[id] = String(val);
			};

			Storage.prototype.getItem = function getItem(id) {
				return this.data[id] ? this.data[id] : null;
			};

			Storage.prototype.removeItem = function removeItem(id) {
				delete this.data[id];
			};

			Storage.prototype.clear = function clear() {
				this.data = {};
			};
		}
	}, {
		key: 'get',
		value: function get(key) {
			if (!this.canUseStorage()) {
				return false;
			}

			var cacheItem = window.localStorage.getItem(key);

			if (cacheItem) {
				// De-serialize
				cacheItem = JSON.parse(cacheItem);

				// Check if item has expired
				if (this.isExpired(cacheItem)) {
					this.delete(key);
					return false;
				}

				return cacheItem.data;
			}

			return false;
		}
	}, {
		key: 'set',
		value: function set(key, value) {
			var expires = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

			if (!this.canUseStorage() || !this.isStorable(value)) {
				return false;
			}

			var cacheItem = { data: value };
			var expiresValue = parseInt(expires, 10);

			if (!isNaN(expiresValue)) {
				// Set expiration as a JS timestamp
				cacheItem.expires = expiresValue * 1000 + Date.now();
			}

			try {
				window.localStorage.setItem(key, JSON.stringify(cacheItem));
			} catch (e) {
				// Local Storage is at capacity
				return false;
			}

			return true;
		}
	}, {
		key: 'delete',
		value: function _delete(key) {
			if (!this.canUseStorage()) {
				return;
			}

			window.localStorage.removeItem(key);
		}
	}, {
		key: 'isStorable',
		value: function isStorable(value) {
			if (
			// Functions might be a security risk
			typeof value === 'function' ||
			// NaN
			typeof value === 'number' && isNaN(value) ||
			// undefined
			typeof value === 'undefined') {
				return false;
			}

			return true;
		}
	}, {
		key: 'isExpired',
		value: function isExpired(cacheItem) {
			return cacheItem.expires && Date.now() >= parseInt(cacheItem.expires, 10);
		}
	}]);

	return LocalCache;
}();

var localCache = new LocalCache();

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slotDataParamsUpdater; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slot_tweaker__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__context_service__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var SlotDataParamsUpdater = function () {
	function SlotDataParamsUpdater() {
		_classCallCheck(this, SlotDataParamsUpdater);
	}

	_createClass(SlotDataParamsUpdater, [{
		key: 'getSlotSizes',
		value: function getSlotSizes(adSlot) {
			var result = {};

			adSlot.getSizes().forEach(function (s) {
				result[s.viewportSize[0] + 'x' + s.viewportSize[1]] = s.sizes;
			});

			return JSON.stringify(result);
		}
	}, {
		key: 'updateOnCreate',
		value: function updateOnCreate(adSlot, targeting) {
			__WEBPACK_IMPORTED_MODULE_0__slot_tweaker__["a" /* slotTweaker */].setDataParam(adSlot, 'gptPageParams', __WEBPACK_IMPORTED_MODULE_1__context_service__["a" /* context */].get('targeting'));
			__WEBPACK_IMPORTED_MODULE_0__slot_tweaker__["a" /* slotTweaker */].setDataParam(adSlot, 'gptSlotParams', targeting);
			__WEBPACK_IMPORTED_MODULE_0__slot_tweaker__["a" /* slotTweaker */].setDataParam(adSlot, 'sizes', this.getSlotSizes(adSlot));
		}
	}, {
		key: 'updateOnRenderEnd',
		value: function updateOnRenderEnd(adSlot, event) {
			__WEBPACK_IMPORTED_MODULE_0__slot_tweaker__["a" /* slotTweaker */].setDataParam(adSlot, 'gptLineItemId', event.lineItemId);
			__WEBPACK_IMPORTED_MODULE_0__slot_tweaker__["a" /* slotTweaker */].setDataParam(adSlot, 'gptCreativeId', event.creativeId);
			__WEBPACK_IMPORTED_MODULE_0__slot_tweaker__["a" /* slotTweaker */].setDataParam(adSlot, 'gptCreativeSize', event.size);
		}
	}]);

	return SlotDataParamsUpdater;
}();

var slotDataParamsUpdater = new SlotDataParamsUpdater();

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = whichProperty;
/* harmony export (immutable) */ __webpack_exports__["a"] = tryProperty;
function whichProperty(obj) {
	var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	for (var i = 0; i < properties.length; i += 1) {
		var property = properties[i];

		if (typeof property !== 'string') {
			throw new Error('property name must be a string');
		}

		if (property in obj) {
			return property;
		}
	}

	return null;
}

function tryProperty(obj) {
	var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	var property = whichProperty(obj, properties);

	if (property !== null) {
		var propertyValue = obj[property];
		return typeof propertyValue === 'function' ? propertyValue.bind(obj) : propertyValue;
	}

	return null;
}

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return viewportObserver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listeners__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dimensions__ = __webpack_require__(4);



function updateInViewport(listener) {
	var newInViewport = Object(__WEBPACK_IMPORTED_MODULE_1__dimensions__["b" /* isInViewport */])(listener.element);

	if (newInViewport !== listener.inViewport) {
		listener.callback(newInViewport);
		listener.inViewport = newInViewport;
	}
}

function addListener(element, callback) {
	var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	var listener = {
		element: element,
		callback: callback,
		offsetTop: params.offsetTop || 0,
		offsetBottom: params.offsetBottom || 0,
		inViewport: false
	},
	    updateCallback = function updateCallback() {
		updateInViewport(listener);
	};

	listener.id = __WEBPACK_IMPORTED_MODULE_0__listeners__["b" /* scrollListener */].addCallback(updateCallback);
	updateCallback();

	return listener.id;
}

function removeListener(listenerId) {
	__WEBPACK_IMPORTED_MODULE_0__listeners__["b" /* scrollListener */].removeCallback(listenerId);
}

var viewportObserver = {
	addListener: addListener,
	removeListener: removeListener
};

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PorvataListener; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__video__ = __webpack_require__(12);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






function getListeners() {
	return __WEBPACK_IMPORTED_MODULE_1__services__["a" /* context */].get('listeners.porvata');
}

var PorvataListener = function () {
	function PorvataListener(params) {
		_classCallCheck(this, PorvataListener);

		this.params = params;
		this.listeners = getListeners().filter(function (listener) {
			return !listener.isEnabled || listener.isEnabled();
		});
		this.logger = function () {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return __WEBPACK_IMPORTED_MODULE_0__utils__["logger"].apply(undefined, [PorvataListener.LOG_GROUP].concat(args));
		};
	}

	_createClass(PorvataListener, [{
		key: 'init',
		value: function init() {
			this.dispatch('init');
		}
	}, {
		key: 'registerVideoEvents',
		value: function registerVideoEvents(video) {
			var _this = this;

			this.video = video;
			this.dispatch('ready');

			Object.keys(PorvataListener.EVENTS).forEach(function (eventKey) {
				video.addEventListener(eventKey, function (event) {
					var errorCode = event.getError && event.getError().getErrorCode();

					_this.dispatch(PorvataListener.EVENTS[eventKey], errorCode);
				});
			});
		}
	}, {
		key: 'dispatch',
		value: function dispatch(eventName) {
			var _this2 = this;

			var errorCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

			var data = this.getData(eventName, errorCode);

			this.logger(eventName, data);
			this.listeners.forEach(function (listener) {
				listener.onEvent(eventName, _this2.params, data);
			});

			if (this.params.position && eventName === PorvataListener.EVENTS.viewable_impression) {
				var adSlot = __WEBPACK_IMPORTED_MODULE_1__services__["f" /* slotService */].getBySlotName(this.params.position);
				adSlot.emit(__WEBPACK_IMPORTED_MODULE_2__models__["a" /* AdSlot */].VIDEO_VIEWED_EVENT);
			}
		}
	}, {
		key: 'getData',
		value: function getData(eventName, errorCode) {
			var imaAd = this.video && this.video.ima.getAdsManager() && this.video.ima.getAdsManager().getCurrentAd(),
			    _vastParser$getAdInfo = __WEBPACK_IMPORTED_MODULE_3__video__["h" /* vastParser */].getAdInfo(imaAd),
			    contentType = _vastParser$getAdInfo.contentType,
			    creativeId = _vastParser$getAdInfo.creativeId,
			    lineItemId = _vastParser$getAdInfo.lineItemId;


			return {
				ad_error_code: errorCode,
				ad_product: this.params.adProduct,
				browser: __WEBPACK_IMPORTED_MODULE_0__utils__["client"].getOperatingSystem() + ' ' + __WEBPACK_IMPORTED_MODULE_0__utils__["client"].getBrowser(),
				content_type: contentType || '(none)',
				creative_id: creativeId || 0,
				event_name: eventName,
				line_item_id: lineItemId || 0,
				player: PorvataListener.PLAYER_NAME,
				position: this.params.position || '(none)',
				timestamp: new Date().getTime()
			};
		}
	}]);

	return PorvataListener;
}();
PorvataListener.EVENTS = {
	adCanPlay: 'ad_can_play',
	complete: 'completed',
	click: 'clicked',
	firstquartile: 'first_quartile',
	impression: 'impression',
	loaded: 'loaded',
	midpoint: 'midpoint',
	pause: 'paused',
	resume: 'resumed',
	start: 'started',
	thirdquartile: 'third_quartile',
	viewable_impression: 'viewable_impression',
	adError: 'error',
	wikiaAdPlayTriggered: 'play_triggered',
	wikiaAdStop: 'closed'
};
PorvataListener.LOG_GROUP = 'porvata-listener';
PorvataListener.PLAYER_NAME = 'porvata';

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdSlot; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var AdSlot = function (_EventEmitter) {
	_inherits(AdSlot, _EventEmitter);

	/**
  * Parse the object that's passed from the template to extract more details
  * @param {object} ad Object containing an ad id and page type
  *      Format of id is:
  *           gpt-<location>-<ad-type>[-<screen-size>]
  *      Examples:
  *           gpt-top-leaderboard
  *           gpt-bottom-boxad-mobile
  *           gpt-bottom-leaderboard-desktop
  */
	function AdSlot(ad) {
		_classCallCheck(this, AdSlot);

		var _this = _possibleConstructorReturn(this, (AdSlot.__proto__ || Object.getPrototypeOf(AdSlot)).call(this));

		var segments = ad.id.split('-');

		if (segments.length < 3) {
			throw new Error('Invalid GPT id passed to parseId (' + ad.id + ').');
		}

		_this.id = ad.id;
		_this.location = segments[1];
		_this.screenSize = segments[3] ? segments[3] : 'both';
		_this.type = segments[2];
		_this.config = __WEBPACK_IMPORTED_MODULE_1__services__["a" /* context */].get('slots.' + _this.location + '-' + _this.type) || {};
		_this.enabled = !_this.config.disabled;
		_this.viewed = false;
		_this.element = null;

		_this.config.targeting = _this.config.targeting || {};
		_this.config.targeting.src = _this.config.targeting.src || __WEBPACK_IMPORTED_MODULE_1__services__["a" /* context */].get('src');
		_this.config.targeting.pos = _this.config.targeting.pos || _this.getSlotName();

		_this.once(AdSlot.SLOT_VIEWED_EVENT, function () {
			_this.viewed = true;
		});
		return _this;
	}

	_createClass(AdSlot, [{
		key: 'getId',
		value: function getId() {
			return this.id;
		}
	}, {
		key: 'getAdUnit',
		value: function getAdUnit() {
			if (!this.adUnit) {
				this.adUnit = __WEBPACK_IMPORTED_MODULE_2__utils__["stringBuilder"].build(this.config.adUnit || __WEBPACK_IMPORTED_MODULE_1__services__["a" /* context */].get('adUnitId'), {
					slotConfig: this.config
				});
			}

			return this.adUnit;
		}
	}, {
		key: 'getVideoAdUnit',
		value: function getVideoAdUnit() {
			if (!this.videoAdUnit) {
				this.videoAdUnit = __WEBPACK_IMPORTED_MODULE_2__utils__["stringBuilder"].build(this.config.videoAdUnit || __WEBPACK_IMPORTED_MODULE_1__services__["a" /* context */].get('vast.adUnitId'), {
					slotConfig: this.config
				});
			}

			return this.videoAdUnit;
		}
	}, {
		key: 'getElement',
		value: function getElement() {
			if (!this.element) {
				this.element = document.getElementById(this.id);
			}

			return this.element;
		}
	}, {
		key: 'getSlotName',
		value: function getSlotName() {
			return this.config.slotName;
		}
	}, {
		key: 'getSizes',
		value: function getSizes() {
			return this.config.sizes;
		}
	}, {
		key: 'getTargeting',
		value: function getTargeting() {
			return this.config.targeting;
		}
	}, {
		key: 'getDefaultSizes',
		value: function getDefaultSizes() {
			return this.config.defaultSizes;
		}
	}, {
		key: 'shouldLoad',
		value: function shouldLoad() {
			var isMobile = __WEBPACK_IMPORTED_MODULE_1__services__["a" /* context */].get('state.isMobile'),
			    shouldLoad = this.screenSize === 'both',
			    shouldLoadDesktop = !isMobile && this.screenSize === 'desktop',
			    shouldLoadMobile = isMobile && this.screenSize === 'mobile';

			return shouldLoad || shouldLoadDesktop || shouldLoadMobile;
		}
	}, {
		key: 'isAboveTheFold',
		value: function isAboveTheFold() {
			return !!this.config.aboveTheFold;
		}
	}, {
		key: 'isEnabled',
		value: function isEnabled() {
			return this.enabled;
		}
	}, {
		key: 'isViewed',
		value: function isViewed() {
			return this.viewed;
		}
	}, {
		key: 'enable',
		value: function enable() {
			this.enabled = true;
		}
	}, {
		key: 'disable',
		value: function disable() {
			this.enabled = false;
		}
	}, {
		key: 'success',
		value: function success() {
			__WEBPACK_IMPORTED_MODULE_1__services__["g" /* slotTweaker */].show(this);
			__WEBPACK_IMPORTED_MODULE_1__services__["g" /* slotTweaker */].setDataParam(this, 'slotResult', 'success');

			if (this.config.defaultTemplate) {
				__WEBPACK_IMPORTED_MODULE_1__services__["h" /* templateService */].init(this.config.defaultTemplate, this);
			}
		}
	}, {
		key: 'collapse',
		value: function collapse() {
			__WEBPACK_IMPORTED_MODULE_1__services__["g" /* slotTweaker */].hide(this);
			__WEBPACK_IMPORTED_MODULE_1__services__["g" /* slotTweaker */].setDataParam(this, 'slotResult', 'collapse');
		}
	}]);

	return AdSlot;
}(__WEBPACK_IMPORTED_MODULE_0_events__["EventEmitter"]);
AdSlot.SLOT_VIEWED_EVENT = 'slotViewed';
AdSlot.VIDEO_VIEWED_EVENT = 'videoViewed';

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__porvata__ = __webpack_require__(42);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__porvata__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__porvata__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__video_settings__ = __webpack_require__(18);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__video_settings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moat_moat_video_tracker__ = __webpack_require__(17);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__moat_moat_video_tracker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ima_google_ima_player_factory__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__ima_google_ima_player_factory__["a"]; });





/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PorvataPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Porvata; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ima_google_ima__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listeners__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video_settings__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var VIDEO_FULLSCREEN_CLASS_NAME = 'video-player-fullscreen';
var STOP_SCROLLING_CLASS_NAME = 'stop-scrolling';

var prepareVideoAdContainer = function prepareVideoAdContainer(params) {
	var videoAdContainer = params.container.querySelector('div');

	videoAdContainer.classList.add('video-player');
	videoAdContainer.classList.add('hide');

	return videoAdContainer;
};

var nativeFullscreenOnElement = function nativeFullscreenOnElement(element) {
	var enter = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["tryProperty"])(element, ['webkitRequestFullscreen', 'mozRequestFullScreen', 'msRequestFullscreen', 'requestFullscreen']);
	var exit = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["tryProperty"])(document, ['webkitExitFullscreen', 'mozCancelFullScreen', 'msExitFullscreen', 'exitFullscreen']);
	var fullscreenChangeEvent = (Object(__WEBPACK_IMPORTED_MODULE_3__utils__["whichProperty"])(document, ['onwebkitfullscreenchange', 'onmozfullscreenchange', 'MSFullscreenChange', 'onfullscreenchange']) || '').replace(/^on/, '');
	var addChangeListener = function addChangeListener() {
		var _document;

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return (_document = document).addEventListener.apply(_document, [fullscreenChangeEvent].concat(args));
	};
	var removeChangeListener = function removeChangeListener() {
		var _document2;

		for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			args[_key2] = arguments[_key2];
		}

		return (_document2 = document).removeEventListener.apply(_document2, [fullscreenChangeEvent].concat(args));
	};
	var isSupported = function isSupported() {
		return Boolean(enter && exit);
	};

	return {
		enter: enter,
		exit: exit,
		addChangeListener: addChangeListener,
		removeChangeListener: removeChangeListener,
		isSupported: isSupported
	};
};

var PorvataPlayer = function () {
	function PorvataPlayer(ima, params) {
		var _this = this;

		_classCallCheck(this, PorvataPlayer);

		this.ima = ima;
		this.container = prepareVideoAdContainer(params);
		this.mobileVideoAd = params.container.querySelector('video');
		this.params = params;

		var nativeFullscreen = nativeFullscreenOnElement(this.container);

		this.fullscreen = Boolean(params.isFullscreen);
		this.nativeFullscreen = nativeFullscreen;
		this.width = params.width;
		this.height = params.height;

		if (nativeFullscreen.isSupported()) {
			nativeFullscreen.addChangeListener(function () {
				return _this.onFullscreenChange();
			});
		}
	}

	_createClass(PorvataPlayer, [{
		key: 'addEventListener',
		value: function addEventListener(eventName, callback) {
			this.ima.addEventListener(eventName, callback);
		}
	}, {
		key: 'getRemainingTime',
		value: function getRemainingTime() {
			return this.ima.getAdsManager().getRemainingTime();
		}
	}, {
		key: 'isFullscreen',
		value: function isFullscreen() {
			return this.fullscreen;
		}
	}, {
		key: 'isMuted',
		value: function isMuted() {
			return this.ima.getAdsManager().getVolume() === 0;
		}
	}, {
		key: 'isMobilePlayerMuted',
		value: function isMobilePlayerMuted() {
			var mobileVideoAd = this.container.querySelector('video');
			return mobileVideoAd && mobileVideoAd.autoplay && mobileVideoAd.muted;
		}
	}, {
		key: 'isPaused',
		value: function isPaused() {
			return this.ima.getStatus() === 'paused';
		}
	}, {
		key: 'isPlaying',
		value: function isPlaying() {
			return this.ima.getStatus() === 'playing';
		}
	}, {
		key: 'pause',
		value: function pause() {
			this.ima.getAdsManager().pause();
		}
	}, {
		key: 'play',
		value: function play(newWidth, newHeight) {
			if (newWidth !== undefined && newHeight !== undefined) {
				this.width = newWidth;
				this.height = newHeight;
			}
			if (!this.width || !this.height) {
				this.width = this.params.container.offsetWidth;
				this.height = this.params.container.offsetHeight;
			}

			this.ima.playVideo(this.width, this.height);
		}
	}, {
		key: 'reload',
		value: function reload() {
			this.ima.reload();
		}
	}, {
		key: 'resize',
		value: function resize(newWidth, newHeight) {
			if (isFinite(newWidth) && isFinite(newHeight)) {
				this.width = newWidth;
				this.height = newHeight;
			}

			if (this.isFullscreen()) {
				this.ima.resize(window.innerWidth, window.innerHeight, true);
			} else {
				this.ima.resize(this.width, this.height, false);
			}
		}
	}, {
		key: 'resume',
		value: function resume() {
			this.ima.getAdsManager().resume();
		}
	}, {
		key: 'setVolume',
		value: function setVolume(volume) {
			this.updateVideoDOMElement(volume);
			this.ima.getAdsManager().setVolume(volume);

			// This is hack for Safari, because it can't dispatch original IMA event (volumeChange)
			this.ima.dispatchEvent('wikiaVolumeChange');
		}
	}, {
		key: 'toggleFullscreen',
		value: function toggleFullscreen() {
			var isFullscreen = this.isFullscreen();
			var nativeFullscreen = this.nativeFullscreen;

			if (nativeFullscreen.isSupported()) {
				var toggleNativeFullscreen = isFullscreen ? nativeFullscreen.exit : nativeFullscreen.enter;
				toggleNativeFullscreen();
			} else {
				this.onFullscreenChange();
			}
		}
	}, {
		key: 'onFullscreenChange',
		value: function onFullscreenChange() {
			this.fullscreen = !this.fullscreen;

			if (this.isFullscreen()) {
				this.container.classList.add(VIDEO_FULLSCREEN_CLASS_NAME);
				document.documentElement.classList.add(STOP_SCROLLING_CLASS_NAME);
			} else {
				this.container.classList.remove(VIDEO_FULLSCREEN_CLASS_NAME);
				document.documentElement.classList.remove(STOP_SCROLLING_CLASS_NAME);
			}

			this.resize();
			this.ima.dispatchEvent('wikiaFullscreenChange');
		}
	}, {
		key: 'updateVideoDOMElement',
		value: function updateVideoDOMElement(volume) {
			if (this.mobileVideoAd) {
				this.mobileVideoAd.muted = volume === 0;
			}
		}
	}, {
		key: 'mute',
		value: function mute() {
			this.setVolume(0);
		}
	}, {
		key: 'unmute',
		value: function unmute() {
			this.setVolume(0.75);
		}
	}, {
		key: 'volumeToggle',
		value: function volumeToggle() {
			if (this.isMuted()) {
				this.unmute();
			} else {
				this.mute();
			}
		}
	}, {
		key: 'stop',
		value: function stop() {
			this.ima.getAdsManager().stop();
			this.ima.dispatchEvent('wikiaAdStop');
		}
	}]);

	return PorvataPlayer;
}();

var Porvata = function () {
	function Porvata() {
		_classCallCheck(this, Porvata);
	}

	_createClass(Porvata, null, [{
		key: 'addOnViewportChangeListener',


		/**
   * @private
   * @returns listener id
   */
		value: function addOnViewportChangeListener(params, listener) {
			return __WEBPACK_IMPORTED_MODULE_3__utils__["viewportObserver"].addListener(params.container, listener, {
				offsetTop: params.viewportOffsetTop || 0,
				offsetBottom: params.viewportOffsetBottom || 0
			});
		}
	}, {
		key: 'inject',
		value: function inject(params) {
			var porvataListener = new __WEBPACK_IMPORTED_MODULE_1__listeners__["a" /* PorvataListener */]({
				adProduct: params.adProduct,
				position: params.slotName,
				src: params.src
			});

			var isFirstPlay = true,
			    autoPaused = false,
			    autoPlayed = false,
			    viewportListenerId = null;

			function muteFirstPlay(video) {
				video.addEventListener('loaded', function () {
					if (isFirstPlay) {
						video.mute();
					}
				});
			}

			params.vastTargeting = params.vastTargeting || {
				passback: 'porvata'
			};

			var videoSettings = new __WEBPACK_IMPORTED_MODULE_2__video_settings__["a" /* VideoSettings */](params);

			porvataListener.init();

			return __WEBPACK_IMPORTED_MODULE_0__ima_google_ima__["a" /* googleIma */].load().then(function () {
				return __WEBPACK_IMPORTED_MODULE_0__ima_google_ima__["a" /* googleIma */].getPlayer(videoSettings);
			}).then(function (ima) {
				return new PorvataPlayer(ima, params);
			}).then(function (video) {
				function inViewportCallback(isVisible) {
					// Play video automatically only for the first time
					if (isVisible && !autoPlayed && params.autoPlay) {
						video.play();
						autoPlayed = true;
						// Don't resume when video was paused manually
					} else if (isVisible && autoPaused) {
						video.resume();
						// Pause video once it's out of viewport and set autoPaused to distinguish manual and auto pause
					} else if (!isVisible && video.isPlaying()) {
						video.pause();
						autoPaused = true;
					}
				}

				porvataListener.registerVideoEvents(video);

				video.addEventListener('adCanPlay', function () {
					video.ima.dispatchEvent('wikiaAdStarted');
				});
				video.addEventListener('allAdsCompleted', function () {
					if (video.isFullscreen()) {
						video.toggleFullscreen();
					}

					video.ima.setAutoPlay(false);
					video.ima.dispatchEvent('wikiaAdCompleted');
					if (viewportListenerId) {
						__WEBPACK_IMPORTED_MODULE_3__utils__["viewportObserver"].removeListener(viewportListenerId);
						viewportListenerId = null;
					}
					isFirstPlay = false;
				});
				video.addEventListener('start', function () {
					video.ima.dispatchEvent('wikiaAdPlay');
					if (!viewportListenerId) {
						viewportListenerId = Porvata.addOnViewportChangeListener(params, inViewportCallback);
					}
				});
				video.addEventListener('resume', function () {
					video.ima.dispatchEvent('wikiaAdPlay');
					autoPaused = false;
				});
				video.addEventListener('pause', function () {
					video.ima.dispatchEvent('wikiaAdPause');
				});

				if (params.autoPlay) {
					muteFirstPlay(video);
				}

				if (params.onReady) {
					params.onReady(video);
				}

				video.addEventListener('wikiaAdsManagerLoaded', function () {
					viewportListenerId = Porvata.addOnViewportChangeListener(params, inViewportCallback);
				});

				return video;
			});
		}
	}]);

	return Porvata;
}();

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return googleIma; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__google_ima_player_factory__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);



var imaLibraryUrl = '//imasdk.googleapis.com/js/sdkloader/ima3.js';

function load() {
	if (window.google && window.google.ima) {
		return new Promise(function (resolve) {
			resolve();
		});
	}

	return __WEBPACK_IMPORTED_MODULE_1__utils__["scriptLoader"].loadScript(imaLibraryUrl);
}

function getPlayer(videoSettings) {
	var adDisplayContainer = new window.google.ima.AdDisplayContainer(videoSettings.getContainer()),
	    iframe = videoSettings.getContainer().querySelector('div > iframe');

	// Reload iframe in order to make IMA work when user is moving back/forward to the page with player
	// https://groups.google.com/forum/#!topic/ima-sdk/Q6Y56CcXkpk
	// https://github.com/googleads/videojs-ima/issues/110
	if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD) {
		iframe.contentWindow.location.href = iframe.src;
	}

	var adsLoader = new window.google.ima.AdsLoader(adDisplayContainer);

	return __WEBPACK_IMPORTED_MODULE_0__google_ima_player_factory__["a" /* googleImaPlayerFactory */].create(adDisplayContainer, adsLoader, videoSettings);
}

var googleIma = {
	load: load,
	getPlayer: getPlayer
};

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return googleImaSetup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vast_url_builder__ = __webpack_require__(15);




var logGroup = 'google-ima-setup';

function getOverriddenVast() {
	if (__WEBPACK_IMPORTED_MODULE_1__utils__["queryString"].get('porvata_override_vast') === '1') {
		var vastXML = window.localStorage.getItem('porvata_vast');
		Object(__WEBPACK_IMPORTED_MODULE_1__utils__["logger"])(logGroup, 'Overridden VAST', vastXML);

		return vastXML;
	}

	return null;
}

function createRequest(params) {
	var adsRequest = new window.google.ima.AdsRequest(),
	    overriddenVast = getOverriddenVast();

	if (params.vastResponse || overriddenVast) {
		adsRequest.adsResponse = overriddenVast || params.vastResponse;
	}

	adsRequest.adTagUrl = params.vastUrl || Object(__WEBPACK_IMPORTED_MODULE_2__vast_url_builder__["a" /* buildVastUrl */])(params.width / params.height, params.slotName, {
		targeting: params.vastTargeting
	});
	adsRequest.linearAdSlotWidth = params.width;
	adsRequest.linearAdSlotHeight = params.height;

	return adsRequest;
}

function getRenderingSettings() {
	var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	var adsRenderingSettings = new window.google.ima.AdsRenderingSettings(),
	    maximumRecommendedBitrate = 68000; // 2160p High Frame Rate

	if (!__WEBPACK_IMPORTED_MODULE_0__services__["a" /* context */].get('state.isMobile')) {
		adsRenderingSettings.bitrate = maximumRecommendedBitrate;
	}

	adsRenderingSettings.loadVideoTimeout = params.loadVideoTimeout || 15000;
	adsRenderingSettings.enablePreloading = true;
	adsRenderingSettings.uiElements = [];

	return adsRenderingSettings;
}

var googleImaSetup = {
	createRequest: createRequest,
	getRenderingSettings: getRenderingSettings
};

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initMoatTracking;
// Fixes for MOAT script incompatibility
var eventMapping = {},
    listeners = [],
    moatapi = {};

// MOAT CODE START
/* Copyright (c) 2011-2016 Moat Inc. All Rights Reserved. */
// eslint-disable-next-line
function initMoatTracking(a, f, c) {
	if (!1 === f.hasOwnProperty("partnerCode")) return !1;var g = document.createElement("script");c = c || a && ("undefined" !== typeof a.O ? a.O.parentNode : document.body) || document.body;listeners = [];moatapi = { adsManager: a, ids: f, imaSDK: !0, events: [] };eventMapping = { complete: "AdVideoComplete", firstquartile: "AdVideoFirstQuartile", impression: "AdImpression", loaded: "AdLoaded", midpoint: "AdVideoMidpoint", pause: "AdPaused", skip: "AdSkipped", start: "AdVideoStart", thirdquartile: "AdVideoThirdQuartile", volumeChange: "AdVolumeChange" };if (google && google.ima && a) {
		var d = "_moatApi" + Math.floor(1E8 * Math.random()),
		    h;for (h in google.ima.AdEvent.Type) {
			var l = function l(b) {
				if (moatapi.sendEvent) {
					for (b = listeners.length - 1; 0 <= b; b--) {
						a.removeEventListener(listeners[b].type, listeners[b].func);
					}moatapi.sendEvent(moatapi.events);
				} else moatapi.events.push({ type: eventMapping[b.type] || b.type, adVolume: a.getVolume() });
			};a.addEventListener(google.ima.AdEvent.Type[h], l);listeners.push({ type: google.ima.AdEvent.Type[h], func: l });
		}
	}var d = "undefined" !== typeof d ? d : "",
	    e,
	    k;try {
		e = c.ownerDocument, k = e.defaultView || e.parentWindow;
	} catch (m) {
		e = document, k = window;
	}k[d] = moatapi;g.type = "text/javascript";c && c.appendChild(g);g.src = "https://z.moatads.com/" + f.partnerCode + "/moatvideo.js#" + d;
};
// MOAT CODE END

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scrollListener; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_dimensions__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var callbacks = {};

function getUniqueId() {
	return ((1 + Math.random()) * 0x1000000).toString(16).substring(1);
}

function pushSlot(adStack, node) {
	adStack.push({
		id: node.id
	});
}

var ScrollListener = function () {
	function ScrollListener() {
		_classCallCheck(this, ScrollListener);
	}

	_createClass(ScrollListener, [{
		key: 'init',
		value: function init() {
			var requestAnimationFrameHandleAdded = false;

			document.addEventListener('scroll', function (event) {
				if (!requestAnimationFrameHandleAdded) {
					window.requestAnimationFrame(function () {
						requestAnimationFrameHandleAdded = false;
						Object.keys(callbacks).forEach(function (id) {
							if (typeof callbacks[id] === 'function') {
								callbacks[id](event, id);
							}
						});
					});
					requestAnimationFrameHandleAdded = true;
				}
			});
		}
	}, {
		key: 'addSlot',
		value: function addSlot(adStack, id) {
			var _this = this;

			var threshold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

			var node = document.getElementById(id);

			if (!node) {
				return;
			}

			this.addCallback(function (event, callbackId) {
				var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop,
				    slotPosition = Object(__WEBPACK_IMPORTED_MODULE_0__utils_dimensions__["a" /* getTopOffset */])(node),
				    viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

				if (scrollPosition + viewPortHeight > slotPosition - threshold) {
					_this.removeCallback(callbackId);
					pushSlot(adStack, node);
				}
			});
		}
	}, {
		key: 'addCallback',
		value: function addCallback(callback) {
			var id = getUniqueId();
			callbacks[id] = callback;

			return id;
		}
	}, {
		key: 'removeCallback',
		value: function removeCallback(id) {
			delete callbacks[id];
		}
	}]);

	return ScrollListener;
}();

var scrollListener = new ScrollListener();

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slotListener; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var logGroup = 'slot-listener';

var listeners = null;

function getIframe(adSlot) {
	return adSlot.getElement().querySelector('div[id*="_container_"] iframe');
}

function getAdType(event, adSlot) {
	var iframe = getIframe(adSlot);

	var isIframeAccessible = false;

	if (event.isEmpty) {
		return 'collapse';
	}

	try {
		isIframeAccessible = !!iframe.contentWindow.document.querySelector;
	} catch (e) {
		Object(__WEBPACK_IMPORTED_MODULE_0__utils__["logger"])(logGroup, 'getAdType', 'iframe is not accessible');
	}

	if (isIframeAccessible && iframe.contentWindow.AdEngine_adType) {
		return iframe.contentWindow.AdEngine_adType;
	}

	return 'success';
}

function getData(_ref) {
	var adType = _ref.adType,
	    event = _ref.event;

	var data = {
		browser: __WEBPACK_IMPORTED_MODULE_0__utils__["client"].getOperatingSystem() + ' ' + __WEBPACK_IMPORTED_MODULE_0__utils__["client"].getBrowser(),
		status: adType,
		page_width: window.document.body.scrollWidth || '',
		time_bucket: new Date().getHours(),
		timestamp: new Date().getTime(),
		viewport_height: window.innerHeight || 0
	};

	if (event) {
		if (event.slot) {
			var response = event.slot.getResponseInformation();

			if (response) {
				data.creative_id = response.creativeId;
				data.line_item_id = response.lineItemId;
			}
		}

		if (event.size && event.size.length) {
			data.creative_size = event.size.join('x');
		}
	}

	return data;
}

function dispatch(methodName, adSlot) {
	var adInfo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	if (!listeners) {
		listeners = __WEBPACK_IMPORTED_MODULE_2__services__["a" /* context */].get('listeners.slot').filter(function (listener) {
			return !listener.isEnabled || listener.isEnabled();
		});
	}

	var data = getData(adInfo);

	listeners.forEach(function (listener) {
		if (typeof listener[methodName] !== 'function') {
			return;
		}

		listener[methodName](adSlot, data);
	});
	Object(__WEBPACK_IMPORTED_MODULE_0__utils__["logger"])(logGroup, methodName, adSlot, adInfo, data);
}

var SlotListener = function () {
	function SlotListener() {
		_classCallCheck(this, SlotListener);
	}

	_createClass(SlotListener, [{
		key: 'emitRenderEnded',
		value: function emitRenderEnded(event, adSlot) {
			var adType = getAdType(event, adSlot);

			switch (adType) {
				case 'collapse':
					adSlot.collapse();
					break;
				default:
					adSlot.success();
					break;
			}

			dispatch('onRenderEnded', adSlot, { adType: adType, event: event });
			__WEBPACK_IMPORTED_MODULE_2__services__["e" /* slotDataParamsUpdater */].updateOnRenderEnd(adSlot, event);
		}
	}, {
		key: 'emitImpressionViewable',
		value: function emitImpressionViewable(event, adSlot) {
			adSlot.emit(__WEBPACK_IMPORTED_MODULE_1__models__["a" /* AdSlot */].SLOT_VIEWED_EVENT);
			dispatch('onImpressionViewable', adSlot, { event: event });
			__WEBPACK_IMPORTED_MODULE_2__services__["g" /* slotTweaker */].setDataParam(adSlot, 'slotViewed', true);
		}
	}]);

	return SlotListener;
}();

var slotListener = new SlotListener();

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdEngine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listeners__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








function fillInUsingProvider(ad, provider) {
	var adSlot = new __WEBPACK_IMPORTED_MODULE_1__models__["a" /* AdSlot */](ad);

	if (adSlot.shouldLoad()) {
		__WEBPACK_IMPORTED_MODULE_5__services__["f" /* slotService */].add(adSlot);
		provider.fillIn(adSlot);
	}
}

var AdEngine = function () {
	function AdEngine() {
		var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		_classCallCheck(this, AdEngine);

		__WEBPACK_IMPORTED_MODULE_5__services__["a" /* context */].extend(config);
		this.adStack = __WEBPACK_IMPORTED_MODULE_5__services__["a" /* context */].get('state.adStack');

		window.ads = window.ads || {};
		window.ads.runtime = window.ads.runtime || {};

		__WEBPACK_IMPORTED_MODULE_5__services__["h" /* templateService */].register(__WEBPACK_IMPORTED_MODULE_2__templates__["a" /* FloatingAd */]);
	}

	_createClass(AdEngine, [{
		key: 'init',
		value: function init() {
			var _this = this;

			var provider = new __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* GptProvider */]();

			Object(__WEBPACK_IMPORTED_MODULE_0__utils__["makeLazyQueue"])(this.adStack, function (ad) {
				fillInUsingProvider(ad, provider);

				if (_this.adStack.length === 0) {
					provider.flush();
				}
			});
			Object(__WEBPACK_IMPORTED_MODULE_5__services__["d" /* registerCustomAdLoader */])(__WEBPACK_IMPORTED_MODULE_5__services__["a" /* context */].get('options.customAdLoader.globalMethodName'));
			__WEBPACK_IMPORTED_MODULE_5__services__["c" /* messageBus */].init();
			__WEBPACK_IMPORTED_MODULE_5__services__["g" /* slotTweaker */].registerMessageListener();
			this.adStack.start();

			__WEBPACK_IMPORTED_MODULE_4__listeners__["b" /* scrollListener */].init();

			if (__WEBPACK_IMPORTED_MODULE_5__services__["a" /* context */].get('events.pushOnScroll')) {
				__WEBPACK_IMPORTED_MODULE_5__services__["a" /* context */].get('events.pushOnScroll.ids').forEach(function (id) {
					__WEBPACK_IMPORTED_MODULE_4__listeners__["b" /* scrollListener */].addSlot(_this.adStack, id, __WEBPACK_IMPORTED_MODULE_5__services__["a" /* context */].get('events.pushOnScroll.threshold'));
				});
			}
		}
	}]);

	return AdEngine;
}();

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__floating_ad__ = __webpack_require__(50);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__floating_ad__["a"]; });


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloatingAd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listeners__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var FloatingAd = function () {
	_createClass(FloatingAd, null, [{
		key: 'getName',
		value: function getName() {
			return 'floating-ad';
		}
	}]);

	function FloatingAd(adSlot) {
		_classCallCheck(this, FloatingAd);

		this.adSlot = adSlot;
	}

	_createClass(FloatingAd, [{
		key: 'init',
		value: function init() {
			var slotNode = document.getElementById(this.adSlot.getId());

			var container = void 0,
			    containerOffset = void 0,
			    end = void 0,
			    slotHeight = void 0,
			    space = void 0,
			    start = 0;

			if (!slotNode || !slotNode.classList.contains('floating')) {
				return;
			}

			__WEBPACK_IMPORTED_MODULE_1__listeners__["b" /* scrollListener */].addCallback(function () {
				var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

				container = slotNode.parentNode;
				containerOffset = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["getTopOffset"])(container);
				slotHeight = slotNode.offsetHeight;
				end = containerOffset + container.offsetHeight - slotHeight;

				start = containerOffset;
				if (slotNode.previousElementSibling) {
					start = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["getTopOffset"])(slotNode.previousElementSibling) + slotNode.previousElementSibling.offsetHeight;
				}

				space = end - start;
				if (space <= slotHeight) {
					slotNode.classList.add('pinned-top');
					slotNode.classList.remove('pinned-bottom');
					return;
				}

				if (scrollPosition <= start) {
					slotNode.classList.add('pinned-top');
					slotNode.classList.remove('pinned-bottom');
				} else if (scrollPosition >= end) {
					slotNode.classList.add('pinned-bottom');
					slotNode.classList.remove('pinned-top');
				} else {
					slotNode.classList.remove('pinned-top');
					slotNode.classList.remove('pinned-bottom');
				}
			});
		}
	}]);

	return FloatingAd;
}();

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GptProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gpt_targeting__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listeners__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var logGroup = 'gpt-provider',
    slotsQueue = [];

var atfEnded = false,
    definedSlots = [],
    initialized = false;

function finishAtf() {
	atfEnded = true;
	if (window.ads.runtime.disableBtf) {
		__WEBPACK_IMPORTED_MODULE_3__services__["f" /* slotService */].forEach(function (adSlot) {
			if (!adSlot.isAboveTheFold()) {
				__WEBPACK_IMPORTED_MODULE_3__services__["f" /* slotService */].disable(adSlot.getSlotName());
			}
		});
	}
	slotsQueue.start();
}

function configure() {
	var tag = window.googletag.pubads();

	tag.enableSingleRequest();
	tag.disableInitialLoad();
	tag.addEventListener('slotRenderEnded', function (event) {
		var id = event.slot.getSlotElementId(),
		    slot = __WEBPACK_IMPORTED_MODULE_3__services__["f" /* slotService */].get(id);

		if (!atfEnded && slot.isAboveTheFold()) {
			finishAtf();
		}

		// IE doesn't allow us to inspect GPT iframe at this point.
		// Let's launch our callback in a setTimeout instead.
		setTimeout(function () {
			__WEBPACK_IMPORTED_MODULE_2__listeners__["c" /* slotListener */].emitRenderEnded(event, slot);
		}, 0);
	});

	tag.addEventListener('impressionViewable', function (event) {
		var id = event.slot.getSlotElementId(),
		    slot = __WEBPACK_IMPORTED_MODULE_3__services__["f" /* slotService */].get(id);

		__WEBPACK_IMPORTED_MODULE_2__listeners__["c" /* slotListener */].emitImpressionViewable(event, slot);
	});
	window.googletag.enableServices();
}

function shouldPush(adSlot) {
	if (!atfEnded && !adSlot.isAboveTheFold()) {
		slotsQueue.push(adSlot);
		Object(__WEBPACK_IMPORTED_MODULE_0__utils__["logger"])(logGroup, adSlot.getId(), 'BTF slot pushed to queue');
		return false;
	}

	if (atfEnded && !adSlot.isEnabled()) {
		Object(__WEBPACK_IMPORTED_MODULE_0__utils__["logger"])(logGroup, adSlot.getId(), 'BTF slot blocked');
		return false;
	}

	return true;
}

var GptProvider = function () {
	function GptProvider() {
		var _this = this;

		_classCallCheck(this, GptProvider);

		window.googletag = window.googletag || {};
		window.googletag.cmd = window.googletag.cmd || [];

		window.googletag.cmd.push(function () {
			_this.init();
		});
	}

	_createClass(GptProvider, [{
		key: 'init',
		value: function init() {
			var _this2 = this;

			if (initialized) {
				return;
			}

			Object(__WEBPACK_IMPORTED_MODULE_1__gpt_targeting__["a" /* setupGptTargeting */])();
			configure();
			Object(__WEBPACK_IMPORTED_MODULE_0__utils__["makeLazyQueue"])(slotsQueue, function (adSlot) {
				_this2.fillIn(adSlot);
			});
			initialized = true;
		}
	}, {
		key: 'fillIn',
		value: function fillIn(adSlot) {
			var _this3 = this;

			if (!shouldPush(adSlot)) {
				return;
			}

			window.googletag.cmd.push(function () {
				var sizeMapping = window.googletag.sizeMapping(),
				    targeting = _this3.parseTargetingParams(adSlot.getTargeting());

				adSlot.getSizes().forEach(function (item) {
					sizeMapping.addSize(item.viewportSize, item.sizes);
				});

				var gptSlot = window.googletag.defineSlot(adSlot.getAdUnit(), adSlot.getDefaultSizes(), adSlot.getId()).addService(window.googletag.pubads()).setCollapseEmptyDiv(true).defineSizeMapping(sizeMapping.build());

				_this3.applyTargetingParams(gptSlot, targeting);
				__WEBPACK_IMPORTED_MODULE_3__services__["e" /* slotDataParamsUpdater */].updateOnCreate(adSlot, targeting);

				window.googletag.display(adSlot.getId());
				definedSlots.push(gptSlot);

				if (atfEnded) {
					_this3.flush();
				}

				Object(__WEBPACK_IMPORTED_MODULE_0__utils__["logger"])(logGroup, adSlot.getId(), 'slot added');
			});
		}
	}, {
		key: 'applyTargetingParams',
		value: function applyTargetingParams(gptSlot, targeting) {
			Object.keys(targeting).forEach(function (key) {
				return gptSlot.setTargeting(key, targeting[key]);
			});
		}
	}, {
		key: 'parseTargetingParams',
		value: function parseTargetingParams(targeting) {
			var result = {};

			Object.keys(targeting).forEach(function (key) {
				var value = targeting[key];

				if (typeof value === 'function') {
					value = value();
				}
				result[key] = value;
			});

			return result;
		}
	}, {
		key: 'flush',
		value: function flush() {
			window.googletag.cmd.push(function () {
				if (definedSlots.length) {
					window.googletag.pubads().refresh(definedSlots);
					definedSlots = [];
				}
			});
		}
	}]);

	return GptProvider;
}();

/***/ })
/******/ ]);
//# sourceMappingURL=ad-engine.js.map