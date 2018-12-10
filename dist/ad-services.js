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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ad-services/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ad-services/bill-the-lizard/executor.ts":
/*!*****************************************************!*\
  !*** ./src/ad-services/bill-the-lizard/executor.ts ***!
  \*****************************************************/
/*! exports provided: Executor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Executor", function() { return Executor; });
!(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());

const logGroup = 'executor';
/**
 * Bill the Lizard methods executor
 */
class Executor {
    constructor() {
        this.methods = {};
    }
    /**
     * Registeres new method
     * @param {string} name
     * @param {function} callback
     */
    register(name, callback) {
        !(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).logger(logGroup, `method ${name} registered`);
        this.methods[name] = callback;
    }
    /**
     * Executes method by name
     * @param {string} methodName
     * @param {ModelDefinition} model
     * @param {number|undefined} prediction
     */
    execute(methodName, model, prediction) {
        const callback = this.methods[methodName];
        if (typeof callback !== 'function') {
            throw Error(`${methodName} is not executable`);
        }
        !(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).logger(logGroup, `executing ${methodName} method`, model.name, prediction);
        callback(model, prediction);
    }
    /**
     * Executes all methods defined in given model based on service response
     * @param {ModelDefinition[]} models
     * @param {Object} response
     */
    executeMethods(models, response) {
        Object.keys(response).forEach((modelName) => {
            const { result } = response[modelName];
            const executableModel = models.find(model => model.name === modelName && model.executable);
            if (!executableModel) {
                return;
            }
            const definedMethods = executableModel[`on_${result}`];
            if (!definedMethods) {
                return;
            }
            definedMethods.forEach(methodName => this.execute(methodName, executableModel, result));
        });
    }
}


/***/ }),

/***/ "./src/ad-services/bill-the-lizard/index.ts":
/*!**************************************************!*\
  !*** ./src/ad-services/bill-the-lizard/index.ts ***!
  \**************************************************/
/*! exports provided: BillTheLizard, billTheLizard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillTheLizard", function() { return BillTheLizard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "billTheLizard", function() { return billTheLizard; });
!(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _executor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./executor */ "./src/ad-services/bill-the-lizard/executor.ts");


/**
 * @typedef {Object} ModelDefinition
 * @property {boolean|undefined} executable
 * @property {string[]} countries
 * @property {string} name
 * @property {function} on_*
 */
/**
 * @typedef {Object} PredictionDefinition
 * @property {string} modelName
 * @property {result} number
 * @property {(number|string)} callId
 */
const logGroup = 'bill-the-lizard';
!(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).registerEvent('BILL_THE_LIZARD_REQUEST');
!(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).registerEvent('BILL_THE_LIZARD_RESPONSE');
/**
 * Builds query parameters for url
 * @param {Object} queryParameters (key-value pairs for query parameters)
 * @returns {string}
 */
function buildQueryUrl(queryParameters) {
    const params = [];
    Object.keys(queryParameters).forEach((key) => {
        params.push(`${key}=${queryParameters[key]}`);
    });
    return encodeURI(params.join('&'));
}
/**
 * Builds endpoint url
 * @param {string} host
 * @param {string} endpoint
 * @param {string} query
 * @returns {string}
 */
function buildUrl(host, endpoint, query) {
    return `${host}/${endpoint}?${query}`;
}
/**
 * Requests service
 * @param {string} host
 * @param {string} endpoint
 * @param {Object} queryParameters (key-value pairs for query parameters)
 * @param {number} timeout
 * @param {number|string} callId
 * @returns {Promise}
 */
function httpRequest(host, endpoint, queryParameters = {}, timeout = 0, callId) {
    const request = new XMLHttpRequest();
    const query = buildQueryUrl(queryParameters);
    const url = buildUrl(host, endpoint, query);
    !(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).emit(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).BILL_THE_LIZARD_REQUEST, {
        query,
        callId,
    });
    request.open('GET', url, true);
    request.responseType = 'json';
    request.timeout = timeout;
    !(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).logger(logGroup, 'timeout configured to', request.timeout);
    return new Promise((resolve, reject) => {
        request.addEventListener('timeout', () => {
            reject(new Error('timeout'));
            !(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).logger(logGroup, 'timed out');
        });
        request.addEventListener('error', () => {
            reject(new Error('error'));
            !(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).logger(logGroup, 'errored');
        });
        request.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                !(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).logger(logGroup, 'has response');
                resolve(this.response);
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
    const now = new Date();
    const day = now.getDay() - 1;
    return Object.assign({}, {
        models: models.map(model => model.name),
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
    Object.keys(response).forEach((name) => {
        const newValue = !(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).queryString.get(`bill.${name}`);
        if (newValue) {
            response[name].result = parseInt(newValue, 10);
        }
    });
    return response;
}
/**
 * Bill the Lizard service handler
 */
class BillTheLizard {
    constructor() {
        this.executor = new _executor__WEBPACK_IMPORTED_MODULE_1__["Executor"]();
        this.statuses = {};
        this.predictions = [];
        this.callCounter = 0;
    }
    /**
     * Requests service, executes defined methods and parses response
     *
     * Supply callKey if you need to access status for this specific request.
     * DO NOT use an integer as callKey as it's the default value.
     * Good key example: "incontent_boxad1".
     *
     * @param {string[]} projectNames
     * @param {string} callId key for this call
     * @returns {Promise}
     */
    call(projectNames, callId) {
        if (!!(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).get('services.billTheLizard.enabled')) {
            !(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).logger(logGroup, 'disabled');
            return new Promise((resolve, reject) => reject(new Error('Disabled')));
        }
        if (!callId) {
            this.callCounter += 1;
            callId = this.callCounter;
        }
        const host = !(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).get('services.billTheLizard.host');
        const endpoint = !(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).get('services.billTheLizard.endpoint');
        const timeout = !(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).get('services.billTheLizard.timeout');
        const { models, parameters } = this.projectsHandler.getEnabledModelsWithParams(projectNames);
        if (!models || models.length < 1) {
            !(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).logger(logGroup, 'no models to predict');
            this.statuses[callId] = BillTheLizard.NOT_USED;
            return Promise.resolve({});
        }
        // update names of GAM targeted models
        models
            .filter(model => model.dfp_targeting)
            .forEach(model => this.targetedModelNames.add(model.name));
        const queryParameters = getQueryParameters(models, parameters);
        !(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).logger(logGroup, 'calling service', host, endpoint, queryParameters, `callId: ${callId}`);
        this.statuses[callId] = BillTheLizard.TOO_LATE;
        return httpRequest(host, endpoint, queryParameters, timeout, callId)
            .catch((error) => {
            if (error.message === 'timeout') {
                this.statuses[callId] = BillTheLizard.TIMEOUT;
            }
            else {
                this.statuses[callId] = BillTheLizard.FAILURE;
            }
            return Promise.reject(error);
        })
            .then(response => overridePredictions(response))
            .then((response) => {
            !(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).logger(logGroup, 'service response OK', `callId: ${callId}`);
            this.statuses[callId] = BillTheLizard.ON_TIME;
            const modelToResultMap = this.getModelToResultMap(response);
            !(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).logger(logGroup, 'predictions', modelToResultMap, `callId: ${callId}`);
            const predictions = this.buildPredictions(models, modelToResultMap, callId);
            this.predictions.push(...predictions);
            this.setTargeting();
            !(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).emit(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).BILL_THE_LIZARD_RESPONSE, {
                callId,
                response: this.serialize(callId),
            });
            this.executor.executeMethods(models, response);
            return modelToResultMap;
        })
            .catch((error) => {
            !(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).logger(logGroup, 'service response', error.message, `callId: ${callId}`);
            return {};
        });
    }
    /**
     *
     * @param {ModelDefinition[]} models
     * @param {Object.<string, number>} modelToResultMap
     * @param {number|string} callId
     * @returns {PredictionDefinition[]}
     */
    buildPredictions(models, modelToResultMap, callId) {
        return models
            .map(model => model.name)
            .filter(modelName => modelToResultMap[modelName] !== undefined)
            .map(modelName => ({ modelName, callId, result: modelToResultMap[modelName] }));
    }
    /**
     * Converts response to predictions
     * @param {Object} response
     * @returns {PredictionDefinition}
     */
    getModelToResultMap(response) {
        const modelToResultMap = {};
        Object.keys(response).forEach((modelName) => {
            const { result } = response[modelName];
            if (typeof result !== 'undefined') {
                modelToResultMap[modelName] = result;
            }
        });
        return modelToResultMap;
    }
    /**
     * Sets DFP targeting in adEngine.context.
     *
     * @returns string
     */
    setTargeting() {
        const targeting = this.getTargeting();
        if (Object.keys(targeting).length > 0) {
            const serializedTargeting = Object.entries(targeting)
                .map(([modelName, result]) => `${modelName}_${result}`);
            !(function webpackMissingModule() { var e = new Error("Cannot find module \"@wikia/ad-engine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).set('targeting.btl', serializedTargeting);
            return serializedTargeting;
        }
        return '';
    }
    /**
     * Returns map of targeted models to their results.
     *
     * For each model, it takes the latest result.
     *
     * @returns {Object.<string, number>}
     */
    getTargeting() {
        const latestResults = {};
        this.predictions
            .filter(pred => this.targetedModelNames.has(pred.modelName))
            .forEach((pred) => {
            latestResults[pred.modelName] = pred.result;
        });
        return latestResults;
    }
    /**
     * Get prediction by modelName and callId.
     *
     * @param {string} modelName
     * @param {(number|string)} callId
     * @returns {PredictionDefinition}
     */
    getPrediction(modelName, callId) {
        return this.getPredictions(modelName).find(pred => pred.callId === callId);
    }
    /**
     * Returns predictions optionally filtered by model name.
     *
     * If model name is given, it returns all predictions with models matching.
     * Model matches when raw name (without version) is matched.
     *
     * @param {string} [modelName]
     * @returns {PredictionDefinition[]}
     */
    getPredictions(modelName) {
        const separator = ':';
        if (modelName) {
            return this.predictions.filter(pred => pred.modelName.split(separator)[0] === modelName.split(separator)[0]);
        }
        return this.predictions;
    }
    /**
     * Returns response status (one of: failure, not_used, on_time, timeout, too_late or undefined);
     *
     * If callId is not supplied, the latest response without a specific key is returned.
     *
     * @param {number|string} [callId] value passed as key for call
     * @returns {string}
     */
    getResponseStatus(callId) {
        callId = callId || this.callCounter;
        return this.statuses[callId];
    }
    /**
     * Serializes all predictions
     * @param {number|string} [callId]
     * @returns {string}
     */
    serialize(callId) {
        let { predictions } = this;
        if (callId !== undefined) {
            predictions = predictions.filter(pred => pred.callId === callId);
        }
        return predictions
            .map(pred => `${pred.modelName}|${pred.callId}=${pred.result}`)
            .join(';');
    }
}
BillTheLizard.FAILURE = 'failure';
BillTheLizard.NOT_USED = 'not_used';
BillTheLizard.ON_TIME = 'on_time';
BillTheLizard.TIMEOUT = 'timeout';
BillTheLizard.TOO_LATE = 'too_late';
const billTheLizard = new BillTheLizard();


/***/ }),

/***/ "./src/ad-services/index.ts":
/*!**********************************!*\
  !*** ./src/ad-services/index.ts ***!
  \**********************************/
/*! exports provided: BillTheLizard, billTheLizard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bill_the_lizard_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bill-the-lizard/index */ "./src/ad-services/bill-the-lizard/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BillTheLizard", function() { return _bill_the_lizard_index__WEBPACK_IMPORTED_MODULE_0__["BillTheLizard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "billTheLizard", function() { return _bill_the_lizard_index__WEBPACK_IMPORTED_MODULE_0__["billTheLizard"]; });


// export * from './geo-edge';
// export * from './krux';
// export * from './moat-yi';


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZFNlcnZpY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYWRTZXJ2aWNlLy4vc3JjL2FkLXNlcnZpY2VzL2JpbGwtdGhlLWxpemFyZC9leGVjdXRvci50cyIsIndlYnBhY2s6Ly9hZFNlcnZpY2UvLi9zcmMvYWQtc2VydmljZXMvYmlsbC10aGUtbGl6YXJkL2luZGV4LnRzIiwid2VicGFjazovL2FkU2VydmljZS8uL3NyYy9hZC1zZXJ2aWNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFBQTtBQUFBO0FBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0EsUUFBUSw0SUFBYyw0QkFBNEIsS0FBSztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLGdCQUFnQjtBQUMvQixlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixXQUFXO0FBQ3RDO0FBQ0EsUUFBUSw0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QUFDQSw0QkFBNEIsZUFBZSxHQUFHLFlBQVksR0FBRyxZQUFZO0FBQ3pFLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOzs7Ozs7Ozs7Ozs7O0FDOVNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUN4QztBQUNBO0FBQ0EiLCJmaWxlIjoiYWQtc2VydmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYWQtc2VydmljZXMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgKiBhcyBhZEVuZ2luZSBmcm9tICdAd2lraWEvYWQtZW5naW5lJztcbmNvbnN0IGxvZ0dyb3VwID0gJ2V4ZWN1dG9yJztcbi8qKlxuICogQmlsbCB0aGUgTGl6YXJkIG1ldGhvZHMgZXhlY3V0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIEV4ZWN1dG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tZXRob2RzID0ge307XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyZXMgbmV3IG1ldGhvZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICByZWdpc3RlcihuYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBhZEVuZ2luZS51dGlscy5sb2dnZXIobG9nR3JvdXAsIGBtZXRob2QgJHtuYW1lfSByZWdpc3RlcmVkYCk7XG4gICAgICAgIHRoaXMubWV0aG9kc1tuYW1lXSA9IGNhbGxiYWNrO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyBtZXRob2QgYnkgbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lXG4gICAgICogQHBhcmFtIHtNb2RlbERlZmluaXRpb259IG1vZGVsXG4gICAgICogQHBhcmFtIHtudW1iZXJ8dW5kZWZpbmVkfSBwcmVkaWN0aW9uXG4gICAgICovXG4gICAgZXhlY3V0ZShtZXRob2ROYW1lLCBtb2RlbCwgcHJlZGljdGlvbikge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMubWV0aG9kc1ttZXRob2ROYW1lXTtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYCR7bWV0aG9kTmFtZX0gaXMgbm90IGV4ZWN1dGFibGVgKTtcbiAgICAgICAgfVxuICAgICAgICBhZEVuZ2luZS51dGlscy5sb2dnZXIobG9nR3JvdXAsIGBleGVjdXRpbmcgJHttZXRob2ROYW1lfSBtZXRob2RgLCBtb2RlbC5uYW1lLCBwcmVkaWN0aW9uKTtcbiAgICAgICAgY2FsbGJhY2sobW9kZWwsIHByZWRpY3Rpb24pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyBhbGwgbWV0aG9kcyBkZWZpbmVkIGluIGdpdmVuIG1vZGVsIGJhc2VkIG9uIHNlcnZpY2UgcmVzcG9uc2VcbiAgICAgKiBAcGFyYW0ge01vZGVsRGVmaW5pdGlvbltdfSBtb2RlbHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2VcbiAgICAgKi9cbiAgICBleGVjdXRlTWV0aG9kcyhtb2RlbHMsIHJlc3BvbnNlKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNlKS5mb3JFYWNoKChtb2RlbE5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSByZXNwb25zZVttb2RlbE5hbWVdO1xuICAgICAgICAgICAgY29uc3QgZXhlY3V0YWJsZU1vZGVsID0gbW9kZWxzLmZpbmQobW9kZWwgPT4gbW9kZWwubmFtZSA9PT0gbW9kZWxOYW1lICYmIG1vZGVsLmV4ZWN1dGFibGUpO1xuICAgICAgICAgICAgaWYgKCFleGVjdXRhYmxlTW9kZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZWZpbmVkTWV0aG9kcyA9IGV4ZWN1dGFibGVNb2RlbFtgb25fJHtyZXN1bHR9YF07XG4gICAgICAgICAgICBpZiAoIWRlZmluZWRNZXRob2RzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmaW5lZE1ldGhvZHMuZm9yRWFjaChtZXRob2ROYW1lID0+IHRoaXMuZXhlY3V0ZShtZXRob2ROYW1lLCBleGVjdXRhYmxlTW9kZWwsIHJlc3VsdCkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBhZEVuZ2luZSBmcm9tICdAd2lraWEvYWQtZW5naW5lJztcbmltcG9ydCB7IEV4ZWN1dG9yIH0gZnJvbSAnLi9leGVjdXRvcic7XG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IE1vZGVsRGVmaW5pdGlvblxuICogQHByb3BlcnR5IHtib29sZWFufHVuZGVmaW5lZH0gZXhlY3V0YWJsZVxuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gY291bnRyaWVzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmFtZVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gb25fKlxuICovXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFByZWRpY3Rpb25EZWZpbml0aW9uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbW9kZWxOYW1lXG4gKiBAcHJvcGVydHkge3Jlc3VsdH0gbnVtYmVyXG4gKiBAcHJvcGVydHkgeyhudW1iZXJ8c3RyaW5nKX0gY2FsbElkXG4gKi9cbmNvbnN0IGxvZ0dyb3VwID0gJ2JpbGwtdGhlLWxpemFyZCc7XG5hZEVuZ2luZS5ldmVudHMucmVnaXN0ZXJFdmVudCgnQklMTF9USEVfTElaQVJEX1JFUVVFU1QnKTtcbmFkRW5naW5lLmV2ZW50cy5yZWdpc3RlckV2ZW50KCdCSUxMX1RIRV9MSVpBUkRfUkVTUE9OU0UnKTtcbi8qKlxuICogQnVpbGRzIHF1ZXJ5IHBhcmFtZXRlcnMgZm9yIHVybFxuICogQHBhcmFtIHtPYmplY3R9IHF1ZXJ5UGFyYW1ldGVycyAoa2V5LXZhbHVlIHBhaXJzIGZvciBxdWVyeSBwYXJhbWV0ZXJzKVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gYnVpbGRRdWVyeVVybChxdWVyeVBhcmFtZXRlcnMpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtZXRlcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBwYXJhbXMucHVzaChgJHtrZXl9PSR7cXVlcnlQYXJhbWV0ZXJzW2tleV19YCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVuY29kZVVSSShwYXJhbXMuam9pbignJicpKTtcbn1cbi8qKlxuICogQnVpbGRzIGVuZHBvaW50IHVybFxuICogQHBhcmFtIHtzdHJpbmd9IGhvc3RcbiAqIEBwYXJhbSB7c3RyaW5nfSBlbmRwb2ludFxuICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5XG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBidWlsZFVybChob3N0LCBlbmRwb2ludCwgcXVlcnkpIHtcbiAgICByZXR1cm4gYCR7aG9zdH0vJHtlbmRwb2ludH0/JHtxdWVyeX1gO1xufVxuLyoqXG4gKiBSZXF1ZXN0cyBzZXJ2aWNlXG4gKiBAcGFyYW0ge3N0cmluZ30gaG9zdFxuICogQHBhcmFtIHtzdHJpbmd9IGVuZHBvaW50XG4gKiBAcGFyYW0ge09iamVjdH0gcXVlcnlQYXJhbWV0ZXJzIChrZXktdmFsdWUgcGFpcnMgZm9yIHF1ZXJ5IHBhcmFtZXRlcnMpXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZW91dFxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBjYWxsSWRcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5mdW5jdGlvbiBodHRwUmVxdWVzdChob3N0LCBlbmRwb2ludCwgcXVlcnlQYXJhbWV0ZXJzID0ge30sIHRpbWVvdXQgPSAwLCBjYWxsSWQpIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgY29uc3QgcXVlcnkgPSBidWlsZFF1ZXJ5VXJsKHF1ZXJ5UGFyYW1ldGVycyk7XG4gICAgY29uc3QgdXJsID0gYnVpbGRVcmwoaG9zdCwgZW5kcG9pbnQsIHF1ZXJ5KTtcbiAgICBhZEVuZ2luZS5ldmVudHMuZW1pdChhZEVuZ2luZS5ldmVudHMuQklMTF9USEVfTElaQVJEX1JFUVVFU1QsIHtcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNhbGxJZCxcbiAgICB9KTtcbiAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgcmVxdWVzdC50aW1lb3V0ID0gdGltZW91dDtcbiAgICBhZEVuZ2luZS51dGlscy5sb2dnZXIobG9nR3JvdXAsICd0aW1lb3V0IGNvbmZpZ3VyZWQgdG8nLCByZXF1ZXN0LnRpbWVvdXQpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigndGltZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ3RpbWVvdXQnKSk7XG4gICAgICAgICAgICBhZEVuZ2luZS51dGlscy5sb2dnZXIobG9nR3JvdXAsICd0aW1lZCBvdXQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdlcnJvcicpKTtcbiAgICAgICAgICAgIGFkRW5naW5lLnV0aWxzLmxvZ2dlcihsb2dHcm91cCwgJ2Vycm9yZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCAmJiB0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgYWRFbmdpbmUudXRpbHMubG9nZ2VyKGxvZ0dyb3VwLCAnaGFzIHJlc3BvbnNlJyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgfSk7XG59XG4vKipcbiAqIEJ1aWxkcyBrZXktdmFsdWUgcGFpcnMgZm9yIHF1ZXJ5IHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7TW9kZWxEZWZpbml0aW9uW119IG1vZGVsc1xuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtZXRlcnMgKGtleS12YWx1ZSBwYWlycylcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGdldFF1ZXJ5UGFyYW1ldGVycyhtb2RlbHMsIHBhcmFtZXRlcnMpIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRheSA9IG5vdy5nZXREYXkoKSAtIDE7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgbW9kZWxzOiBtb2RlbHMubWFwKG1vZGVsID0+IG1vZGVsLm5hbWUpLFxuICAgICAgICBoOiBub3cuZ2V0SG91cnMoKSxcbiAgICAgICAgZG93OiBkYXkgPT09IC0xID8gNiA6IGRheVxuICAgIH0sIHBhcmFtZXRlcnMpO1xufVxuLyoqXG4gKiBPdmVycmlkZXMgcHJlZGljdGlvbnMgYmFzZWQgb24gcmVzcG9uc2VcbiAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZVxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gb3ZlcnJpZGVQcmVkaWN0aW9ucyhyZXNwb25zZSkge1xuICAgIE9iamVjdC5rZXlzKHJlc3BvbnNlKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gYWRFbmdpbmUudXRpbHMucXVlcnlTdHJpbmcuZ2V0KGBiaWxsLiR7bmFtZX1gKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICByZXNwb25zZVtuYW1lXS5yZXN1bHQgPSBwYXJzZUludChuZXdWYWx1ZSwgMTApO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xufVxuLyoqXG4gKiBCaWxsIHRoZSBMaXphcmQgc2VydmljZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCBjbGFzcyBCaWxsVGhlTGl6YXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5leGVjdXRvciA9IG5ldyBFeGVjdXRvcigpO1xuICAgICAgICB0aGlzLnN0YXR1c2VzID0ge307XG4gICAgICAgIHRoaXMucHJlZGljdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5jYWxsQ291bnRlciA9IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlcXVlc3RzIHNlcnZpY2UsIGV4ZWN1dGVzIGRlZmluZWQgbWV0aG9kcyBhbmQgcGFyc2VzIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBTdXBwbHkgY2FsbEtleSBpZiB5b3UgbmVlZCB0byBhY2Nlc3Mgc3RhdHVzIGZvciB0aGlzIHNwZWNpZmljIHJlcXVlc3QuXG4gICAgICogRE8gTk9UIHVzZSBhbiBpbnRlZ2VyIGFzIGNhbGxLZXkgYXMgaXQncyB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICAgKiBHb29kIGtleSBleGFtcGxlOiBcImluY29udGVudF9ib3hhZDFcIi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IHByb2plY3ROYW1lc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjYWxsSWQga2V5IGZvciB0aGlzIGNhbGxcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBjYWxsKHByb2plY3ROYW1lcywgY2FsbElkKSB7XG4gICAgICAgIGlmICghYWRFbmdpbmUuY29udGV4dC5nZXQoJ3NlcnZpY2VzLmJpbGxUaGVMaXphcmQuZW5hYmxlZCcpKSB7XG4gICAgICAgICAgICBhZEVuZ2luZS51dGlscy5sb2dnZXIobG9nR3JvdXAsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHJlamVjdChuZXcgRXJyb3IoJ0Rpc2FibGVkJykpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNhbGxJZCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsQ291bnRlciArPSAxO1xuICAgICAgICAgICAgY2FsbElkID0gdGhpcy5jYWxsQ291bnRlcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBob3N0ID0gYWRFbmdpbmUuY29udGV4dC5nZXQoJ3NlcnZpY2VzLmJpbGxUaGVMaXphcmQuaG9zdCcpO1xuICAgICAgICBjb25zdCBlbmRwb2ludCA9IGFkRW5naW5lLmNvbnRleHQuZ2V0KCdzZXJ2aWNlcy5iaWxsVGhlTGl6YXJkLmVuZHBvaW50Jyk7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBhZEVuZ2luZS5jb250ZXh0LmdldCgnc2VydmljZXMuYmlsbFRoZUxpemFyZC50aW1lb3V0Jyk7XG4gICAgICAgIGNvbnN0IHsgbW9kZWxzLCBwYXJhbWV0ZXJzIH0gPSB0aGlzLnByb2plY3RzSGFuZGxlci5nZXRFbmFibGVkTW9kZWxzV2l0aFBhcmFtcyhwcm9qZWN0TmFtZXMpO1xuICAgICAgICBpZiAoIW1vZGVscyB8fCBtb2RlbHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgYWRFbmdpbmUudXRpbHMubG9nZ2VyKGxvZ0dyb3VwLCAnbm8gbW9kZWxzIHRvIHByZWRpY3QnKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzZXNbY2FsbElkXSA9IEJpbGxUaGVMaXphcmQuTk9UX1VTRUQ7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHt9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyB1cGRhdGUgbmFtZXMgb2YgR0FNIHRhcmdldGVkIG1vZGVsc1xuICAgICAgICBtb2RlbHNcbiAgICAgICAgICAgIC5maWx0ZXIobW9kZWwgPT4gbW9kZWwuZGZwX3RhcmdldGluZylcbiAgICAgICAgICAgIC5mb3JFYWNoKG1vZGVsID0+IHRoaXMudGFyZ2V0ZWRNb2RlbE5hbWVzLmFkZChtb2RlbC5uYW1lKSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1ldGVycyA9IGdldFF1ZXJ5UGFyYW1ldGVycyhtb2RlbHMsIHBhcmFtZXRlcnMpO1xuICAgICAgICBhZEVuZ2luZS51dGlscy5sb2dnZXIobG9nR3JvdXAsICdjYWxsaW5nIHNlcnZpY2UnLCBob3N0LCBlbmRwb2ludCwgcXVlcnlQYXJhbWV0ZXJzLCBgY2FsbElkOiAke2NhbGxJZH1gKTtcbiAgICAgICAgdGhpcy5zdGF0dXNlc1tjYWxsSWRdID0gQmlsbFRoZUxpemFyZC5UT09fTEFURTtcbiAgICAgICAgcmV0dXJuIGh0dHBSZXF1ZXN0KGhvc3QsIGVuZHBvaW50LCBxdWVyeVBhcmFtZXRlcnMsIHRpbWVvdXQsIGNhbGxJZClcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5tZXNzYWdlID09PSAndGltZW91dCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c2VzW2NhbGxJZF0gPSBCaWxsVGhlTGl6YXJkLlRJTUVPVVQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c2VzW2NhbGxJZF0gPSBCaWxsVGhlTGl6YXJkLkZBSUxVUkU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gb3ZlcnJpZGVQcmVkaWN0aW9ucyhyZXNwb25zZSkpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGFkRW5naW5lLnV0aWxzLmxvZ2dlcihsb2dHcm91cCwgJ3NlcnZpY2UgcmVzcG9uc2UgT0snLCBgY2FsbElkOiAke2NhbGxJZH1gKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzZXNbY2FsbElkXSA9IEJpbGxUaGVMaXphcmQuT05fVElNRTtcbiAgICAgICAgICAgIGNvbnN0IG1vZGVsVG9SZXN1bHRNYXAgPSB0aGlzLmdldE1vZGVsVG9SZXN1bHRNYXAocmVzcG9uc2UpO1xuICAgICAgICAgICAgYWRFbmdpbmUudXRpbHMubG9nZ2VyKGxvZ0dyb3VwLCAncHJlZGljdGlvbnMnLCBtb2RlbFRvUmVzdWx0TWFwLCBgY2FsbElkOiAke2NhbGxJZH1gKTtcbiAgICAgICAgICAgIGNvbnN0IHByZWRpY3Rpb25zID0gdGhpcy5idWlsZFByZWRpY3Rpb25zKG1vZGVscywgbW9kZWxUb1Jlc3VsdE1hcCwgY2FsbElkKTtcbiAgICAgICAgICAgIHRoaXMucHJlZGljdGlvbnMucHVzaCguLi5wcmVkaWN0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLnNldFRhcmdldGluZygpO1xuICAgICAgICAgICAgYWRFbmdpbmUuZXZlbnRzLmVtaXQoYWRFbmdpbmUuZXZlbnRzLkJJTExfVEhFX0xJWkFSRF9SRVNQT05TRSwge1xuICAgICAgICAgICAgICAgIGNhbGxJZCxcbiAgICAgICAgICAgICAgICByZXNwb25zZTogdGhpcy5zZXJpYWxpemUoY2FsbElkKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5leGVjdXRvci5leGVjdXRlTWV0aG9kcyhtb2RlbHMsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHJldHVybiBtb2RlbFRvUmVzdWx0TWFwO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgYWRFbmdpbmUudXRpbHMubG9nZ2VyKGxvZ0dyb3VwLCAnc2VydmljZSByZXNwb25zZScsIGVycm9yLm1lc3NhZ2UsIGBjYWxsSWQ6ICR7Y2FsbElkfWApO1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01vZGVsRGVmaW5pdGlvbltdfSBtb2RlbHNcbiAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBudW1iZXI+fSBtb2RlbFRvUmVzdWx0TWFwXG4gICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBjYWxsSWRcbiAgICAgKiBAcmV0dXJucyB7UHJlZGljdGlvbkRlZmluaXRpb25bXX1cbiAgICAgKi9cbiAgICBidWlsZFByZWRpY3Rpb25zKG1vZGVscywgbW9kZWxUb1Jlc3VsdE1hcCwgY2FsbElkKSB7XG4gICAgICAgIHJldHVybiBtb2RlbHNcbiAgICAgICAgICAgIC5tYXAobW9kZWwgPT4gbW9kZWwubmFtZSlcbiAgICAgICAgICAgIC5maWx0ZXIobW9kZWxOYW1lID0+IG1vZGVsVG9SZXN1bHRNYXBbbW9kZWxOYW1lXSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgLm1hcChtb2RlbE5hbWUgPT4gKHsgbW9kZWxOYW1lLCBjYWxsSWQsIHJlc3VsdDogbW9kZWxUb1Jlc3VsdE1hcFttb2RlbE5hbWVdIH0pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgcmVzcG9uc2UgdG8gcHJlZGljdGlvbnNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2VcbiAgICAgKiBAcmV0dXJucyB7UHJlZGljdGlvbkRlZmluaXRpb259XG4gICAgICovXG4gICAgZ2V0TW9kZWxUb1Jlc3VsdE1hcChyZXNwb25zZSkge1xuICAgICAgICBjb25zdCBtb2RlbFRvUmVzdWx0TWFwID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNlKS5mb3JFYWNoKChtb2RlbE5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSByZXNwb25zZVttb2RlbE5hbWVdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgbW9kZWxUb1Jlc3VsdE1hcFttb2RlbE5hbWVdID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1vZGVsVG9SZXN1bHRNYXA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgREZQIHRhcmdldGluZyBpbiBhZEVuZ2luZS5jb250ZXh0LlxuICAgICAqXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgc2V0VGFyZ2V0aW5nKCkge1xuICAgICAgICBjb25zdCB0YXJnZXRpbmcgPSB0aGlzLmdldFRhcmdldGluZygpO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGFyZ2V0aW5nKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkVGFyZ2V0aW5nID0gT2JqZWN0LmVudHJpZXModGFyZ2V0aW5nKVxuICAgICAgICAgICAgICAgIC5tYXAoKFttb2RlbE5hbWUsIHJlc3VsdF0pID0+IGAke21vZGVsTmFtZX1fJHtyZXN1bHR9YCk7XG4gICAgICAgICAgICBhZEVuZ2luZS5jb250ZXh0LnNldCgndGFyZ2V0aW5nLmJ0bCcsIHNlcmlhbGl6ZWRUYXJnZXRpbmcpO1xuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZWRUYXJnZXRpbmc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG1hcCBvZiB0YXJnZXRlZCBtb2RlbHMgdG8gdGhlaXIgcmVzdWx0cy5cbiAgICAgKlxuICAgICAqIEZvciBlYWNoIG1vZGVsLCBpdCB0YWtlcyB0aGUgbGF0ZXN0IHJlc3VsdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZywgbnVtYmVyPn1cbiAgICAgKi9cbiAgICBnZXRUYXJnZXRpbmcoKSB7XG4gICAgICAgIGNvbnN0IGxhdGVzdFJlc3VsdHMgPSB7fTtcbiAgICAgICAgdGhpcy5wcmVkaWN0aW9uc1xuICAgICAgICAgICAgLmZpbHRlcihwcmVkID0+IHRoaXMudGFyZ2V0ZWRNb2RlbE5hbWVzLmhhcyhwcmVkLm1vZGVsTmFtZSkpXG4gICAgICAgICAgICAuZm9yRWFjaCgocHJlZCkgPT4ge1xuICAgICAgICAgICAgbGF0ZXN0UmVzdWx0c1twcmVkLm1vZGVsTmFtZV0gPSBwcmVkLnJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBsYXRlc3RSZXN1bHRzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgcHJlZGljdGlvbiBieSBtb2RlbE5hbWUgYW5kIGNhbGxJZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlbE5hbWVcbiAgICAgKiBAcGFyYW0geyhudW1iZXJ8c3RyaW5nKX0gY2FsbElkXG4gICAgICogQHJldHVybnMge1ByZWRpY3Rpb25EZWZpbml0aW9ufVxuICAgICAqL1xuICAgIGdldFByZWRpY3Rpb24obW9kZWxOYW1lLCBjYWxsSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJlZGljdGlvbnMobW9kZWxOYW1lKS5maW5kKHByZWQgPT4gcHJlZC5jYWxsSWQgPT09IGNhbGxJZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgcHJlZGljdGlvbnMgb3B0aW9uYWxseSBmaWx0ZXJlZCBieSBtb2RlbCBuYW1lLlxuICAgICAqXG4gICAgICogSWYgbW9kZWwgbmFtZSBpcyBnaXZlbiwgaXQgcmV0dXJucyBhbGwgcHJlZGljdGlvbnMgd2l0aCBtb2RlbHMgbWF0Y2hpbmcuXG4gICAgICogTW9kZWwgbWF0Y2hlcyB3aGVuIHJhdyBuYW1lICh3aXRob3V0IHZlcnNpb24pIGlzIG1hdGNoZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW21vZGVsTmFtZV1cbiAgICAgKiBAcmV0dXJucyB7UHJlZGljdGlvbkRlZmluaXRpb25bXX1cbiAgICAgKi9cbiAgICBnZXRQcmVkaWN0aW9ucyhtb2RlbE5hbWUpIHtcbiAgICAgICAgY29uc3Qgc2VwYXJhdG9yID0gJzonO1xuICAgICAgICBpZiAobW9kZWxOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmVkaWN0aW9ucy5maWx0ZXIocHJlZCA9PiBwcmVkLm1vZGVsTmFtZS5zcGxpdChzZXBhcmF0b3IpWzBdID09PSBtb2RlbE5hbWUuc3BsaXQoc2VwYXJhdG9yKVswXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHJlZGljdGlvbnM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgcmVzcG9uc2Ugc3RhdHVzIChvbmUgb2Y6IGZhaWx1cmUsIG5vdF91c2VkLCBvbl90aW1lLCB0aW1lb3V0LCB0b29fbGF0ZSBvciB1bmRlZmluZWQpO1xuICAgICAqXG4gICAgICogSWYgY2FsbElkIGlzIG5vdCBzdXBwbGllZCwgdGhlIGxhdGVzdCByZXNwb25zZSB3aXRob3V0IGEgc3BlY2lmaWMga2V5IGlzIHJldHVybmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBbY2FsbElkXSB2YWx1ZSBwYXNzZWQgYXMga2V5IGZvciBjYWxsXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRSZXNwb25zZVN0YXR1cyhjYWxsSWQpIHtcbiAgICAgICAgY2FsbElkID0gY2FsbElkIHx8IHRoaXMuY2FsbENvdW50ZXI7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXR1c2VzW2NhbGxJZF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZXMgYWxsIHByZWRpY3Rpb25zXG4gICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBbY2FsbElkXVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc2VyaWFsaXplKGNhbGxJZCkge1xuICAgICAgICBsZXQgeyBwcmVkaWN0aW9ucyB9ID0gdGhpcztcbiAgICAgICAgaWYgKGNhbGxJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwcmVkaWN0aW9ucyA9IHByZWRpY3Rpb25zLmZpbHRlcihwcmVkID0+IHByZWQuY2FsbElkID09PSBjYWxsSWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmVkaWN0aW9uc1xuICAgICAgICAgICAgLm1hcChwcmVkID0+IGAke3ByZWQubW9kZWxOYW1lfXwke3ByZWQuY2FsbElkfT0ke3ByZWQucmVzdWx0fWApXG4gICAgICAgICAgICAuam9pbignOycpO1xuICAgIH1cbn1cbkJpbGxUaGVMaXphcmQuRkFJTFVSRSA9ICdmYWlsdXJlJztcbkJpbGxUaGVMaXphcmQuTk9UX1VTRUQgPSAnbm90X3VzZWQnO1xuQmlsbFRoZUxpemFyZC5PTl9USU1FID0gJ29uX3RpbWUnO1xuQmlsbFRoZUxpemFyZC5USU1FT1VUID0gJ3RpbWVvdXQnO1xuQmlsbFRoZUxpemFyZC5UT09fTEFURSA9ICd0b29fbGF0ZSc7XG5leHBvcnQgY29uc3QgYmlsbFRoZUxpemFyZCA9IG5ldyBCaWxsVGhlTGl6YXJkKCk7XG4iLCJleHBvcnQgKiBmcm9tICcuL2JpbGwtdGhlLWxpemFyZC9pbmRleCc7XG4vLyBleHBvcnQgKiBmcm9tICcuL2dlby1lZGdlJztcbi8vIGV4cG9ydCAqIGZyb20gJy4va3J1eCc7XG4vLyBleHBvcnQgKiBmcm9tICcuL21vYXQteWknO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==