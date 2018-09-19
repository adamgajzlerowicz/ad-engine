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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@wikia/ad-engine");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "babel-runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "babel-runtime/helpers/createClass"
var createClass_ = __webpack_require__(2);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "babel-runtime/core-js/object/assign"
var assign_ = __webpack_require__(4);
var assign_default = /*#__PURE__*/__webpack_require__.n(assign_);

// EXTERNAL MODULE: external "babel-runtime/core-js/promise"
var promise_ = __webpack_require__(5);
var promise_default = /*#__PURE__*/__webpack_require__.n(promise_);

// EXTERNAL MODULE: external "babel-runtime/core-js/object/keys"
var keys_ = __webpack_require__(1);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys_);

// EXTERNAL MODULE: external "@wikia/ad-engine"
var ad_engine_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/ad-services/bill-the-lizard/executor.js





var logGroup = 'executor';

/**
 * Bill the Lizard methods executor
 */
var executor_Executor = function () {
	function Executor() {
		classCallCheck_default()(this, Executor);

		this.methods = {};
	}

	/**
  * Registeres new method
  * @param {string} name
  * @param {function} callback
  */


	createClass_default()(Executor, [{
		key: 'register',
		value: function register(name, callback) {
			ad_engine_["utils"].logger(logGroup, 'method ' + name + ' registered');
			this.methods[name] = callback;
		}

		/**
   * Executes method by name
   * @param {string} methodName
   * @param {ModelDefinition} model
   * @param {number|undefined} prediction
   */

	}, {
		key: 'execute',
		value: function execute(methodName, model, prediction) {
			var callback = this.methods[methodName];

			if (typeof callback !== 'function') {
				throw Error(methodName + ' is not executable');
			}

			ad_engine_["utils"].logger(logGroup, 'executing ' + methodName + ' method', model.name, prediction);
			callback(model, prediction);
		}

		/**
   * Executes all methods defined in given model based on service response
   * @param {ModelDefinition[]} models
   * @param {Object} response
   */

	}, {
		key: 'executeMethods',
		value: function executeMethods(models, response) {
			var _this = this;

			keys_default()(response).forEach(function (modelName) {
				var result = response[modelName].result;


				var executableModel = models.find(function (model) {
					return model.name === modelName && model.executable;
				});
				if (!executableModel) {
					return;
				}

				var definedMethods = executableModel['on_' + result];
				if (!definedMethods) {
					return;
				}

				definedMethods.forEach(function (methodName) {
					return _this.execute(methodName, executableModel, result);
				});
			});
		}
	}]);

	return Executor;
}();
// CONCATENATED MODULE: ./src/ad-services/bill-the-lizard/projects-handler.js






var projects_handler_logGroup = 'project-handler';

/**
 * Bill the Lizard projects handler
 */
var projects_handler_ProjectsHandler = function () {
	function ProjectsHandler() {
		classCallCheck_default()(this, ProjectsHandler);

		this.projects = {};
	}

	/**
  * Enables project by name
  * @param {string} name
  */


	createClass_default()(ProjectsHandler, [{
		key: 'enable',
		value: function enable(name) {
			ad_engine_["utils"].logger(projects_handler_logGroup, 'project ' + name + ' enabled');
			this.projects[name] = true;
		}

		/**
   * Checks whether project is enabled
   * @param {string} name
   * @returns {boolean}
   */

	}, {
		key: 'isEnabled',
		value: function isEnabled(name) {
			return !!this.projects[name];
		}

		/**
   * Returns all geo-enabled models' definitions based on enabled projects
   * @returns {{models: ModelDefinition[], parameters: Object}}
   */

	}, {
		key: 'getEnabledModels',
		value: function getEnabledModels() {
			var _this = this;

			var projectName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			var projects = ad_engine_["context"].get('services.billTheLizard.projects');
			var projectParameters = ad_engine_["context"].get('services.billTheLizard.parameters');
			var enabledProjectNames = keys_default()(projects).filter(function (name) {
				return _this.isEnabled(name) && (!projectName || name === projectName);
			});
			var models = [];
			var parameters = {};

			enabledProjectNames.forEach(function (name) {
				// Only first enabled model in project is executable
				var isNextModelExecutable = true;

				projects[name].forEach(function (model) {
					if (ad_engine_["utils"].isProperGeo(model.countries, model.name) && (!model.is_lazy_called || projectName)) {
						model.executable = isNextModelExecutable;
						isNextModelExecutable = false;
						models.push(model);
						assign_default()(parameters, projectParameters[name]);
					} else {
						model.executable = false;
					}
				});
			});

			return {
				models: models,
				parameters: parameters
			};
		}
	}]);

	return ProjectsHandler;
}();
// CONCATENATED MODULE: ./src/ad-services/bill-the-lizard/index.js









/**
 * @typedef {Object} ModelDefinition
 * @property {boolean|undefined} executable
 * @property {string[]} countries
 * @property {string} name
 * @property {function} on_*
 */

var bill_the_lizard_logGroup = 'bill-the-lizard';

/**
 * Builds endpoint url
 * @param {string} host
 * @param {string} endpoint
 * @param {Object} queryParameters (key-value pairs for query parameters)
 * @returns {string}
 */
function buildUrl(host, endpoint) {
	var queryParameters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	var params = [];

	keys_default()(queryParameters).forEach(function (key) {
		params.push(key + '=' + queryParameters[key]);
	});

	return host + '/' + endpoint + '?' + encodeURI(params.join('&'));
}

/**
 * Requests service
 * @param {string} host
 * @param {string} endpoint
 * @param {Object} queryParameters (key-value pairs for query parameters)
 * @param {number} timeout
 * @returns {Promise}
 */
function httpRequest(host, endpoint) {
	var queryParameters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	var timeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	var request = new window.XMLHttpRequest();
	var url = buildUrl(host, endpoint, queryParameters);

	request.open('GET', url, true);
	request.responseType = 'json';
	request.timeout = timeout;

	ad_engine_["utils"].logger(bill_the_lizard_logGroup, 'timeout configured to', request.timeout);

	return new promise_default.a(function (resolve, reject) {
		request.addEventListener('timeout', function () {
			request.abort();
			reject(new Error('Timeout reached'));
			ad_engine_["utils"].logger(bill_the_lizard_logGroup, 'timed out');
		});
		request.onload = function () {
			if (this.status === 200) {
				ad_engine_["utils"].logger(bill_the_lizard_logGroup, 'has response');
				resolve(this.response);
			} else {
				ad_engine_["utils"].logger(bill_the_lizard_logGroup, 'error occurred');
				reject(new Error(this.response ? this.response.message : 'Error'));
			}
		};
		request.send();
	});
}

/**
 * Builds key-value pairs for query parameters
 * @param {ModelDefinition[]} models
 * @param {Object} parameters (key-value pairs)
 * @returns {Object}
 */
function getQueryParameters(models, parameters) {
	var now = new Date();
	var day = now.getDay() - 1;

	return assign_default()({}, {
		models: models.map(function (model) {
			return model.name;
		}),
		h: now.getHours(),
		dow: day === -1 ? 6 : day
	}, parameters);
}

/**
 * Overrides predictions based on response
 * @param {Object} response
 * @returns {Object}
 */
function overridePredictions(response) {
	keys_default()(response).forEach(function (name) {
		var newValue = ad_engine_["utils"].queryString.get('bill.' + name);

		if (newValue) {
			response[name].result = parseInt(newValue, 10);
		}
	});

	return response;
}

/**
 * Bill the Lizard service handler
 */

var bill_the_lizard_BillTheLizard = function () {
	function BillTheLizard() {
		classCallCheck_default()(this, BillTheLizard);

		this.executor = new executor_Executor();
		this.projectsHandler = new projects_handler_ProjectsHandler();
		this.predictions = {};
	}

	/**
  * Requests service, executes defined methods and parses response
  * @returns {Promise}
  */


	createClass_default()(BillTheLizard, [{
		key: 'call',
		value: function call() {
			var _this = this;

			var lazyCallProject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			if (!ad_engine_["context"].get('services.billTheLizard.enabled')) {
				ad_engine_["utils"].logger(bill_the_lizard_logGroup, 'disabled');
				return new promise_default.a(function (resolve, reject) {
					return reject(new Error('Disabled'));
				});
			}

			var host = ad_engine_["context"].get('services.billTheLizard.host');
			var endpoint = ad_engine_["context"].get('services.billTheLizard.endpoint');
			var timeout = ad_engine_["context"].get('services.billTheLizard.timeout');

			var _projectsHandler$getE = this.projectsHandler.getEnabledModels(lazyCallProject),
			    models = _projectsHandler$getE.models,
			    parameters = _projectsHandler$getE.parameters;

			if (!models || models.length < 1) {
				ad_engine_["utils"].logger(bill_the_lizard_logGroup, 'no models to predict');
				return new promise_default.a(function (resolve, reject) {
					return reject(new Error('Missing models'));
				});
			}

			var queryParameters = getQueryParameters(models, parameters);
			ad_engine_["utils"].logger(bill_the_lizard_logGroup, 'calling service', host, endpoint, queryParameters);

			return httpRequest(host, endpoint, queryParameters, timeout).then(function (response) {
				return overridePredictions(response);
			}).then(function (response) {
				var predictions = _this.parsePredictions(models, response);

				_this.executor.executeMethods(models, response);

				return predictions;
			});
		}

		/**
   * Parses predictions based on response
   * @param {ModelDefinition[]} models
   * @param {Object} response
   * @returns {Object}
   */

	}, {
		key: 'parsePredictions',
		value: function parsePredictions(models, response) {
			var _this2 = this;

			var targeting = [];
			this.predictions = {};

			keys_default()(response).forEach(function (key) {
				var model = models.find(function (definition) {
					return definition.name === key;
				});
				var _response$key = response[key],
				    result = _response$key.result,
				    version = _response$key.version;

				var suffix = key.indexOf(version) > 0 ? '' : ':' + version;

				if (typeof result !== 'undefined') {
					_this2.predictions['' + key + suffix] = result;

					if (model && model.dfp_targeting) {
						targeting.push('' + key + suffix + '_' + result);
					}
				}
			});

			if (targeting.length > 0) {
				ad_engine_["context"].set('targeting.btl', targeting);
			}

			ad_engine_["utils"].logger(bill_the_lizard_logGroup, 'predictions', this.predictions);

			return this.predictions;
		}

		/**
   * Returns prediction for given model name
   * @param {string} modelName
   * @returns {number|undefined}
   */

	}, {
		key: 'getPrediction',
		value: function getPrediction(modelName) {
			return this.predictions[modelName];
		}

		/**
   * Returns all (parsed) predictions
   * @returns {Object}
   */

	}, {
		key: 'getPredictions',
		value: function getPredictions() {
			return this.predictions;
		}

		/**
   * Serializes all predictions
   * @returns {string}
   */

	}, {
		key: 'serialize',
		value: function serialize() {
			var _this3 = this;

			return keys_default()(this.predictions).map(function (key) {
				return key + '=' + _this3.predictions[key];
			}).join(';');
		}
	}]);

	return BillTheLizard;
}();

var billTheLizard = new bill_the_lizard_BillTheLizard();
// CONCATENATED MODULE: ./src/ad-services/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "billTheLizard", function() { return billTheLizard; });


/***/ })
/******/ ]);
//# sourceMappingURL=ad-services.js.map