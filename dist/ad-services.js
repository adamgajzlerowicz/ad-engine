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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@wikia/ad-engine");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@wikia/ad-engine"
var ad_engine_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/ad-services/bill-the-lizard/executor.ts

const logGroup = 'executor';
/**
 * Bill the Lizard methods executor
 */
class executor_Executor {
    constructor() {
        this.methods = {};
    }
    /**
     * Registeres new method
     * @param {string} name
     * @param {function} callback
     */
    register(name, callback) {
        ad_engine_["utils"].logger(logGroup, `method ${name} registered`);
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
        ad_engine_["utils"].logger(logGroup, `executing ${methodName} method`, model.name, prediction);
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

// CONCATENATED MODULE: ./src/ad-services/bill-the-lizard/projects-handler.ts

const projects_handler_logGroup = 'project-handler';
/**
 * Bill the Lizard projects handler
 */
class projects_handler_ProjectsHandler {
    constructor() {
        this.projects = {};
    }
    /**
     * Enables project by name
     * @param {string} name
     */
    enable(name) {
        ad_engine_["utils"].logger(projects_handler_logGroup, `project ${name} enabled`);
        this.projects[name] = true;
    }
    /**
     * Checks whether project is enabled
     * @param {string} name
     * @returns {boolean}
     */
    isEnabled(name) {
        return !!this.projects[name];
    }
    /**
     * Returns all geo-enabled models' definitions based on enabled projects
     * @param {string[]} projectNames
     * @returns {{models: ModelDefinition[], parameters: Object}}
     */
    getEnabledModelsWithParams(projectNames) {
        const projects = ad_engine_["context"].get('services.billTheLizard.projects');
        const projectParameters = ad_engine_["context"].get('services.billTheLizard.parameters');
        const enabledProjectNames = Object.keys(projects)
            .filter(name => (this.isEnabled(name) && projectNames.includes(name)));
        const models = [];
        const parameters = {};
        enabledProjectNames.forEach((name) => {
            // Only first enabled model in project is executable
            let isNextModelExecutable = true;
            projects[name].forEach((model) => {
                if (ad_engine_["utils"].isProperGeo(model.countries, model.name)) {
                    model.executable = isNextModelExecutable;
                    isNextModelExecutable = false;
                    models.push(model);
                    Object.assign(parameters, projectParameters[name]);
                }
                else {
                    model.executable = false;
                }
            });
        });
        return {
            models,
            parameters
        };
    }
}

// CONCATENATED MODULE: ./src/ad-services/bill-the-lizard/index.ts



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
const bill_the_lizard_logGroup = 'bill-the-lizard';
ad_engine_["events"].registerEvent('BILL_THE_LIZARD_REQUEST');
ad_engine_["events"].registerEvent('BILL_THE_LIZARD_RESPONSE');
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
    ad_engine_["events"].emit(ad_engine_["events"].BILL_THE_LIZARD_REQUEST, {
        query,
        callId,
    });
    request.open('GET', url, true);
    request.responseType = 'json';
    request.timeout = timeout;
    ad_engine_["utils"].logger(bill_the_lizard_logGroup, 'timeout configured to', request.timeout);
    return new Promise((resolve, reject) => {
        request.addEventListener('timeout', () => {
            reject(new Error('timeout'));
            ad_engine_["utils"].logger(bill_the_lizard_logGroup, 'timed out');
        });
        request.addEventListener('error', () => {
            reject(new Error('error'));
            ad_engine_["utils"].logger(bill_the_lizard_logGroup, 'errored');
        });
        request.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                ad_engine_["utils"].logger(bill_the_lizard_logGroup, 'has response');
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
        const newValue = ad_engine_["utils"].queryString.get(`bill.${name}`);
        if (newValue) {
            response[name].result = parseInt(newValue, 10);
        }
    });
    return response;
}
/**
 * Bill the Lizard service handler
 */
class bill_the_lizard_BillTheLizard {
    constructor() {
        this.executor = new executor_Executor();
        this.statuses = {};
        this.projectsHandler = new projects_handler_ProjectsHandler();
        this.predictions = [];
        this.callCounter = 0;
        this.targetedModelNames = new Set();
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
        if (!ad_engine_["context"].get('services.billTheLizard.enabled')) {
            ad_engine_["utils"].logger(bill_the_lizard_logGroup, 'disabled');
            return new Promise((resolve, reject) => reject(new Error('Disabled')));
        }
        if (!callId) {
            this.callCounter += 1;
            callId = this.callCounter;
        }
        const host = ad_engine_["context"].get('services.billTheLizard.host');
        const endpoint = ad_engine_["context"].get('services.billTheLizard.endpoint');
        const timeout = ad_engine_["context"].get('services.billTheLizard.timeout');
        const { models, parameters } = this.projectsHandler.getEnabledModelsWithParams(projectNames);
        if (!models || models.length < 1) {
            ad_engine_["utils"].logger(bill_the_lizard_logGroup, 'no models to predict');
            this.statuses[callId] = bill_the_lizard_BillTheLizard.NOT_USED;
            return Promise.resolve({});
        }
        // update names of GAM targeted models
        models
            .filter(model => model.dfp_targeting)
            .forEach(model => this.targetedModelNames.add(model.name));
        const queryParameters = getQueryParameters(models, parameters);
        ad_engine_["utils"].logger(bill_the_lizard_logGroup, 'calling service', host, endpoint, queryParameters, `callId: ${callId}`);
        this.statuses[callId] = bill_the_lizard_BillTheLizard.TOO_LATE;
        return httpRequest(host, endpoint, queryParameters, timeout, callId)
            .catch((error) => {
            if (error.message === 'timeout') {
                this.statuses[callId] = bill_the_lizard_BillTheLizard.TIMEOUT;
            }
            else {
                this.statuses[callId] = bill_the_lizard_BillTheLizard.FAILURE;
            }
            return Promise.reject(error);
        })
            .then(response => overridePredictions(response))
            .then((response) => {
            ad_engine_["utils"].logger(bill_the_lizard_logGroup, 'service response OK', `callId: ${callId}`);
            this.statuses[callId] = bill_the_lizard_BillTheLizard.ON_TIME;
            const modelToResultMap = this.getModelToResultMap(response);
            ad_engine_["utils"].logger(bill_the_lizard_logGroup, 'predictions', modelToResultMap, `callId: ${callId}`);
            const predictions = this.buildPredictions(models, modelToResultMap, callId);
            this.predictions.push(...predictions);
            this.setTargeting();
            ad_engine_["events"].emit(ad_engine_["events"].BILL_THE_LIZARD_RESPONSE, {
                callId,
                response: this.serialize(callId),
            });
            this.executor.executeMethods(models, response);
            return modelToResultMap;
        })
            .catch((error) => {
            ad_engine_["utils"].logger(bill_the_lizard_logGroup, 'service response', error.message, `callId: ${callId}`);
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
     * Sets DFP targeting in context.
     *
     * @returns string
     */
    setTargeting() {
        const targeting = this.getTargeting();
        if (Object.keys(targeting).length > 0) {
            const serializedTargeting = Object.entries(targeting)
                .map(([modelName, result]) => `${modelName}_${result}`);
            ad_engine_["context"].set('targeting.btl', serializedTargeting);
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
bill_the_lizard_BillTheLizard.FAILURE = 'failure';
bill_the_lizard_BillTheLizard.NOT_USED = 'not_used';
bill_the_lizard_BillTheLizard.ON_TIME = 'on_time';
bill_the_lizard_BillTheLizard.TIMEOUT = 'timeout';
bill_the_lizard_BillTheLizard.TOO_LATE = 'too_late';
const billTheLizard = new bill_the_lizard_BillTheLizard();

// CONCATENATED MODULE: ./src/ad-services/geo-edge/index.ts

const geo_edge_logGroup = 'geo-edge';
const scriptDomainId = 'd3b02estmut877';
/**
 * Injects Geo Edge Site Side Protection script
 * @returns {Promise}
 */
function loadScript() {
    const geoEdgeLibraryUrl = `//${scriptDomainId}.cloudfront.net/grumi-ip.js`;
    return ad_engine_["utils"].scriptLoader.loadScript(geoEdgeLibraryUrl, 'text/javascript', true, 'first');
}
/**
 * GeoEdge service handler
 */
class geo_edge_GeoEdge {
    /**
     * Requests service and injects script tag
     * @returns {Promise}
     */
    call() {
        const geoEdgeKey = ad_engine_["context"].get('services.geoEdge.id');
        const geoEdgeConfig = ad_engine_["context"].get('services.geoEdge.config');
        if (!ad_engine_["context"].get('services.geoEdge.enabled') || !geoEdgeKey) {
            ad_engine_["utils"].logger(geo_edge_logGroup, 'disabled');
            return Promise.resolve();
        }
        ad_engine_["utils"].logger(geo_edge_logGroup, 'loading');
        window.grumi = {
            cfg: geoEdgeConfig,
            key: geoEdgeKey
        };
        return loadScript().then(() => {
            ad_engine_["utils"].logger(geo_edge_logGroup, 'ready');
        });
    }
}
const geoEdge = new geo_edge_GeoEdge();

// CONCATENATED MODULE: ./src/ad-services/krux/index.ts

const krux_logGroup = 'krux';
/**
 * Injects Krux script
 * @returns {Promise}
 */
function krux_loadScript() {
    const kruxId = ad_engine_["context"].get('services.krux.id');
    const kruxLibraryUrl = `//cdn.krxd.net/controltag?confid=${kruxId}`;
    return ad_engine_["utils"].scriptLoader.loadScript(kruxLibraryUrl, 'text/javascript', true, 'first', {
        id: 'krux-control-tag'
    });
}
/**
 * Gets Krux data from localStorage
 * @param {string} key
 * @returns {string}
 */
function getKruxData(key) {
    if (window.localStorage) {
        return window.localStorage[key];
    }
    else if (window.navigator.cookieEnabled) {
        const match = document.cookie.match(`${key}=([^;]*)`);
        return (match && decodeURI(match[1])) || '';
    }
    return '';
}
window.Krux = window.Krux || function (...args) {
    window.Krux.q.push(args);
};
window.Krux.q = window.Krux.q || [];
/**
 * Krux service handler
 */
class krux_Krux {
    /**
     * Requests service, saves user id and segments in context and exports page level params
     * @returns {Promise}
     */
    call() {
        if (!ad_engine_["context"].get('services.krux.enabled') || !ad_engine_["context"].get('options.trackingOptIn')) {
            ad_engine_["utils"].logger(krux_logGroup, 'disabled');
            return Promise.resolve();
        }
        ad_engine_["utils"].logger(krux_logGroup, 'loading');
        return krux_loadScript().then(() => {
            this.exportPageParams();
            this.importUserData();
        });
    }
    /**
     * Export page level params to Krux
     * @returns {void}
     */
    exportPageParams() {
        Object.keys(ad_engine_["context"].get('targeting')).forEach((key) => {
            const value = ad_engine_["context"].get(`targeting.${key}`);
            if (value) {
                window[`kruxDartParam_${key}`] = value;
            }
        });
    }
    /**
     * Imports Krux data from localStorage
     * @returns {void}
     */
    importUserData() {
        const user = getKruxData('kxuser');
        const segments = getKruxData('kxsegs');
        ad_engine_["context"].set('targeting.kuid', user || null);
        ad_engine_["context"].set('targeting.ksg', segments ? segments.split(',') : []);
        ad_engine_["utils"].logger(krux_logGroup, 'data set', user, segments);
    }
    /**
     * Returns Krux user ID
     * @returns {string}
     */
    getUserId() {
        return ad_engine_["context"].get('targeting.kuid') || null;
    }
    /**
     * Returns Krux segments
     * @returns {string[]}
     */
    getSegments() {
        return ad_engine_["context"].get('targeting.ksg') || [];
    }
}
const krux = new krux_Krux();

// CONCATENATED MODULE: ./src/ad-services/moat-yi/index.ts

const moat_yi_logGroup = 'moat-yi';
ad_engine_["events"].registerEvent('MOAT_YI_READY');
/**
 * Injects MOAT YI script
 * @returns {Promise}
 */
function moat_yi_loadScript() {
    const partnerCode = ad_engine_["context"].get('services.moatYi.partnerCode');
    const url = `//z.moatads.com/${partnerCode}/yi.js`;
    return ad_engine_["utils"].scriptLoader.loadScript(url, 'text/javascript', true, 'first');
}
/**
 * MOAT YI service handler
 */
class moat_yi_MoatYi {
    /**
     * Requests MOAT YI service and saves page level data in targeting
     * @returns {Promise}
     */
    call() {
        if (!ad_engine_["context"].get('services.moatYi.enabled') || !ad_engine_["context"].get('services.moatYi.partnerCode')) {
            ad_engine_["utils"].logger(moat_yi_logGroup, 'disabled');
            return Promise.resolve();
        }
        let moatYeildReadyResolve;
        const promise = new Promise((resolve) => {
            moatYeildReadyResolve = resolve;
        });
        ad_engine_["utils"].logger(moat_yi_logGroup, 'loading');
        window.moatYieldReady = () => {
            this.importPageParams();
            moatYeildReadyResolve();
        };
        ad_engine_["context"].set('targeting.m_data', 'waiting');
        moat_yi_loadScript().then(() => {
            ad_engine_["utils"].logger(moat_yi_logGroup, 'ready');
        });
        return promise;
    }
    /**
     * Adds page params to targeting
     * @returns {void}
     */
    importPageParams() {
        if (window.moatPrebidApi && typeof window.moatPrebidApi.getMoatTargetingForPage === 'function') {
            const pageParams = window.moatPrebidApi.getMoatTargetingForPage() || {};
            ad_engine_["context"].set('targeting.m_data', pageParams.m_data);
            ad_engine_["events"].emit(ad_engine_["events"].MOAT_YI_READY, `m_data=${pageParams.m_data}`);
            ad_engine_["utils"].logger(moat_yi_logGroup, 'moatYieldReady', pageParams);
        }
    }
}
const moatYi = new moat_yi_MoatYi();

// CONCATENATED MODULE: ./src/ad-services/index.ts
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "BillTheLizard", function() { return bill_the_lizard_BillTheLizard; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "billTheLizard", function() { return billTheLizard; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoEdge", function() { return geoEdge; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "krux", function() { return krux; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "moatYi", function() { return moatYi; });






/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZEVuZ2luZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hZEVuZ2luZS9leHRlcm5hbCBcIkB3aWtpYS9hZC1lbmdpbmVcIiIsIndlYnBhY2s6Ly9hZEVuZ2luZS8uL3NyYy9hZC1zZXJ2aWNlcy9iaWxsLXRoZS1saXphcmQvZXhlY3V0b3IudHMiLCJ3ZWJwYWNrOi8vYWRFbmdpbmUvLi9zcmMvYWQtc2VydmljZXMvYmlsbC10aGUtbGl6YXJkL3Byb2plY3RzLWhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vYWRFbmdpbmUvLi9zcmMvYWQtc2VydmljZXMvYmlsbC10aGUtbGl6YXJkL2luZGV4LnRzIiwid2VicGFjazovL2FkRW5naW5lLy4vc3JjL2FkLXNlcnZpY2VzL2dlby1lZGdlL2luZGV4LnRzIiwid2VicGFjazovL2FkRW5naW5lLy4vc3JjL2FkLXNlcnZpY2VzL2tydXgvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYWRFbmdpbmUvLi9zcmMvYWQtc2VydmljZXMvbW9hdC15aS9pbmRleC50cyIsIndlYnBhY2s6Ly9hZEVuZ2luZS8uL3NyYy9hZC1zZXJ2aWNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdB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QUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxQkFBTztBQUNuQixZQUFZLG9CQUFNLE1BQU0sb0JBQU0sMEJBQTBCLGtCQUFrQjtBQUMxRSxZQUFZLG1CQUFLLFFBQVEsZ0JBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ08sbUJBQW1CLGNBQU07OztBQ3JEaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUNQO0FBQ0o7QUFDRyIsImZpbGUiOiJhZC1zZXJ2aWNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd2lraWEvYWQtZW5naW5lXCIpOyIsImltcG9ydCB7IHV0aWxzIH0gZnJvbSAnQHdpa2lhL2FkLWVuZ2luZSc7XG5jb25zdCBsb2dHcm91cCA9ICdleGVjdXRvcic7XG4vKipcbiAqIEJpbGwgdGhlIExpemFyZCBtZXRob2RzIGV4ZWN1dG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBFeGVjdXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWV0aG9kcyA9IHt9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcmVzIG5ldyBtZXRob2RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgcmVnaXN0ZXIobmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdXRpbHMubG9nZ2VyKGxvZ0dyb3VwLCBgbWV0aG9kICR7bmFtZX0gcmVnaXN0ZXJlZGApO1xuICAgICAgICB0aGlzLm1ldGhvZHNbbmFtZV0gPSBjYWxsYmFjaztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgbWV0aG9kIGJ5IG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZVxuICAgICAqIEBwYXJhbSB7TW9kZWxEZWZpbml0aW9ufSBtb2RlbFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfHVuZGVmaW5lZH0gcHJlZGljdGlvblxuICAgICAqL1xuICAgIGV4ZWN1dGUobWV0aG9kTmFtZSwgbW9kZWwsIHByZWRpY3Rpb24pIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLm1ldGhvZHNbbWV0aG9kTmFtZV07XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGAke21ldGhvZE5hbWV9IGlzIG5vdCBleGVjdXRhYmxlYCk7XG4gICAgICAgIH1cbiAgICAgICAgdXRpbHMubG9nZ2VyKGxvZ0dyb3VwLCBgZXhlY3V0aW5nICR7bWV0aG9kTmFtZX0gbWV0aG9kYCwgbW9kZWwubmFtZSwgcHJlZGljdGlvbik7XG4gICAgICAgIGNhbGxiYWNrKG1vZGVsLCBwcmVkaWN0aW9uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgYWxsIG1ldGhvZHMgZGVmaW5lZCBpbiBnaXZlbiBtb2RlbCBiYXNlZCBvbiBzZXJ2aWNlIHJlc3BvbnNlXG4gICAgICogQHBhcmFtIHtNb2RlbERlZmluaXRpb25bXX0gbW9kZWxzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlXG4gICAgICovXG4gICAgZXhlY3V0ZU1ldGhvZHMobW9kZWxzLCByZXNwb25zZSkge1xuICAgICAgICBPYmplY3Qua2V5cyhyZXNwb25zZSkuZm9yRWFjaCgobW9kZWxOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHJlc3VsdCB9ID0gcmVzcG9uc2VbbW9kZWxOYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IGV4ZWN1dGFibGVNb2RlbCA9IG1vZGVscy5maW5kKG1vZGVsID0+IG1vZGVsLm5hbWUgPT09IG1vZGVsTmFtZSAmJiBtb2RlbC5leGVjdXRhYmxlKTtcbiAgICAgICAgICAgIGlmICghZXhlY3V0YWJsZU1vZGVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGVmaW5lZE1ldGhvZHMgPSBleGVjdXRhYmxlTW9kZWxbYG9uXyR7cmVzdWx0fWBdO1xuICAgICAgICAgICAgaWYgKCFkZWZpbmVkTWV0aG9kcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmluZWRNZXRob2RzLmZvckVhY2gobWV0aG9kTmFtZSA9PiB0aGlzLmV4ZWN1dGUobWV0aG9kTmFtZSwgZXhlY3V0YWJsZU1vZGVsLCByZXN1bHQpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgY29udGV4dCwgdXRpbHMgfSBmcm9tICdAd2lraWEvYWQtZW5naW5lJztcbmNvbnN0IGxvZ0dyb3VwID0gJ3Byb2plY3QtaGFuZGxlcic7XG4vKipcbiAqIEJpbGwgdGhlIExpemFyZCBwcm9qZWN0cyBoYW5kbGVyXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9qZWN0c0hhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0ge307XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuYWJsZXMgcHJvamVjdCBieSBuYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKi9cbiAgICBlbmFibGUobmFtZSkge1xuICAgICAgICB1dGlscy5sb2dnZXIobG9nR3JvdXAsIGBwcm9qZWN0ICR7bmFtZX0gZW5hYmxlZGApO1xuICAgICAgICB0aGlzLnByb2plY3RzW25hbWVdID0gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgcHJvamVjdCBpcyBlbmFibGVkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0VuYWJsZWQobmFtZSkge1xuICAgICAgICByZXR1cm4gISF0aGlzLnByb2plY3RzW25hbWVdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBnZW8tZW5hYmxlZCBtb2RlbHMnIGRlZmluaXRpb25zIGJhc2VkIG9uIGVuYWJsZWQgcHJvamVjdHNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwcm9qZWN0TmFtZXNcbiAgICAgKiBAcmV0dXJucyB7e21vZGVsczogTW9kZWxEZWZpbml0aW9uW10sIHBhcmFtZXRlcnM6IE9iamVjdH19XG4gICAgICovXG4gICAgZ2V0RW5hYmxlZE1vZGVsc1dpdGhQYXJhbXMocHJvamVjdE5hbWVzKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gY29udGV4dC5nZXQoJ3NlcnZpY2VzLmJpbGxUaGVMaXphcmQucHJvamVjdHMnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFBhcmFtZXRlcnMgPSBjb250ZXh0LmdldCgnc2VydmljZXMuYmlsbFRoZUxpemFyZC5wYXJhbWV0ZXJzJyk7XG4gICAgICAgIGNvbnN0IGVuYWJsZWRQcm9qZWN0TmFtZXMgPSBPYmplY3Qua2V5cyhwcm9qZWN0cylcbiAgICAgICAgICAgIC5maWx0ZXIobmFtZSA9PiAodGhpcy5pc0VuYWJsZWQobmFtZSkgJiYgcHJvamVjdE5hbWVzLmluY2x1ZGVzKG5hbWUpKSk7XG4gICAgICAgIGNvbnN0IG1vZGVscyA9IFtdO1xuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0ge307XG4gICAgICAgIGVuYWJsZWRQcm9qZWN0TmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgLy8gT25seSBmaXJzdCBlbmFibGVkIG1vZGVsIGluIHByb2plY3QgaXMgZXhlY3V0YWJsZVxuICAgICAgICAgICAgbGV0IGlzTmV4dE1vZGVsRXhlY3V0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICBwcm9qZWN0c1tuYW1lXS5mb3JFYWNoKChtb2RlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc1Byb3Blckdlbyhtb2RlbC5jb3VudHJpZXMsIG1vZGVsLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGFibGUgPSBpc05leHRNb2RlbEV4ZWN1dGFibGU7XG4gICAgICAgICAgICAgICAgICAgIGlzTmV4dE1vZGVsRXhlY3V0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBtb2RlbHMucHVzaChtb2RlbCk7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1ldGVycywgcHJvamVjdFBhcmFtZXRlcnNbbmFtZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vZGVscyxcbiAgICAgICAgICAgIHBhcmFtZXRlcnNcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBjb250ZXh0LCBldmVudHMsIHV0aWxzIH0gZnJvbSAnQHdpa2lhL2FkLWVuZ2luZSc7XG5pbXBvcnQgeyBFeGVjdXRvciB9IGZyb20gJy4vZXhlY3V0b3InO1xuaW1wb3J0IHsgUHJvamVjdHNIYW5kbGVyIH0gZnJvbSAnLi9wcm9qZWN0cy1oYW5kbGVyJztcbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gTW9kZWxEZWZpbml0aW9uXG4gKiBAcHJvcGVydHkge2Jvb2xlYW58dW5kZWZpbmVkfSBleGVjdXRhYmxlXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBjb3VudHJpZXNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBvbl8qXG4gKi9cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gUHJlZGljdGlvbkRlZmluaXRpb25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtb2RlbE5hbWVcbiAqIEBwcm9wZXJ0eSB7cmVzdWx0fSBudW1iZXJcbiAqIEBwcm9wZXJ0eSB7KG51bWJlcnxzdHJpbmcpfSBjYWxsSWRcbiAqL1xuY29uc3QgbG9nR3JvdXAgPSAnYmlsbC10aGUtbGl6YXJkJztcbmV2ZW50cy5yZWdpc3RlckV2ZW50KCdCSUxMX1RIRV9MSVpBUkRfUkVRVUVTVCcpO1xuZXZlbnRzLnJlZ2lzdGVyRXZlbnQoJ0JJTExfVEhFX0xJWkFSRF9SRVNQT05TRScpO1xuLyoqXG4gKiBCdWlsZHMgcXVlcnkgcGFyYW1ldGVycyBmb3IgdXJsXG4gKiBAcGFyYW0ge09iamVjdH0gcXVlcnlQYXJhbWV0ZXJzIChrZXktdmFsdWUgcGFpcnMgZm9yIHF1ZXJ5IHBhcmFtZXRlcnMpXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBidWlsZFF1ZXJ5VXJsKHF1ZXJ5UGFyYW1ldGVycykge1xuICAgIGNvbnN0IHBhcmFtcyA9IFtdO1xuICAgIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1ldGVycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHBhcmFtcy5wdXNoKGAke2tleX09JHtxdWVyeVBhcmFtZXRlcnNba2V5XX1gKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZW5jb2RlVVJJKHBhcmFtcy5qb2luKCcmJykpO1xufVxuLyoqXG4gKiBCdWlsZHMgZW5kcG9pbnQgdXJsXG4gKiBAcGFyYW0ge3N0cmluZ30gaG9zdFxuICogQHBhcmFtIHtzdHJpbmd9IGVuZHBvaW50XG4gKiBAcGFyYW0ge3N0cmluZ30gcXVlcnlcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGJ1aWxkVXJsKGhvc3QsIGVuZHBvaW50LCBxdWVyeSkge1xuICAgIHJldHVybiBgJHtob3N0fS8ke2VuZHBvaW50fT8ke3F1ZXJ5fWA7XG59XG4vKipcbiAqIFJlcXVlc3RzIHNlcnZpY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBob3N0XG4gKiBAcGFyYW0ge3N0cmluZ30gZW5kcG9pbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBxdWVyeVBhcmFtZXRlcnMgKGtleS12YWx1ZSBwYWlycyBmb3IgcXVlcnkgcGFyYW1ldGVycylcbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lb3V0XG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IGNhbGxJZFxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbmZ1bmN0aW9uIGh0dHBSZXF1ZXN0KGhvc3QsIGVuZHBvaW50LCBxdWVyeVBhcmFtZXRlcnMgPSB7fSwgdGltZW91dCA9IDAsIGNhbGxJZCkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBjb25zdCBxdWVyeSA9IGJ1aWxkUXVlcnlVcmwocXVlcnlQYXJhbWV0ZXJzKTtcbiAgICBjb25zdCB1cmwgPSBidWlsZFVybChob3N0LCBlbmRwb2ludCwgcXVlcnkpO1xuICAgIGV2ZW50cy5lbWl0KGV2ZW50cy5CSUxMX1RIRV9MSVpBUkRfUkVRVUVTVCwge1xuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2FsbElkLFxuICAgIH0pO1xuICAgIHJlcXVlc3Qub3BlbignR0VUJywgdXJsLCB0cnVlKTtcbiAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSB0aW1lb3V0O1xuICAgIHV0aWxzLmxvZ2dlcihsb2dHcm91cCwgJ3RpbWVvdXQgY29uZmlndXJlZCB0bycsIHJlcXVlc3QudGltZW91dCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCd0aW1lb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcigndGltZW91dCcpKTtcbiAgICAgICAgICAgIHV0aWxzLmxvZ2dlcihsb2dHcm91cCwgJ3RpbWVkIG91dCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ2Vycm9yJykpO1xuICAgICAgICAgICAgdXRpbHMubG9nZ2VyKGxvZ0dyb3VwLCAnZXJyb3JlZCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0ICYmIHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICB1dGlscy5sb2dnZXIobG9nR3JvdXAsICdoYXMgcmVzcG9uc2UnKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMucmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICB9KTtcbn1cbi8qKlxuICogQnVpbGRzIGtleS12YWx1ZSBwYWlycyBmb3IgcXVlcnkgcGFyYW1ldGVyc1xuICogQHBhcmFtIHtNb2RlbERlZmluaXRpb25bXX0gbW9kZWxzXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1ldGVycyAoa2V5LXZhbHVlIHBhaXJzKVxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gZ2V0UXVlcnlQYXJhbWV0ZXJzKG1vZGVscywgcGFyYW1ldGVycykge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF5ID0gbm93LmdldERheSgpIC0gMTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgICBtb2RlbHM6IG1vZGVscy5tYXAobW9kZWwgPT4gbW9kZWwubmFtZSksXG4gICAgICAgIGg6IG5vdy5nZXRIb3VycygpLFxuICAgICAgICBkb3c6IGRheSA9PT0gLTEgPyA2IDogZGF5XG4gICAgfSwgcGFyYW1ldGVycyk7XG59XG4vKipcbiAqIE92ZXJyaWRlcyBwcmVkaWN0aW9ucyBiYXNlZCBvbiByZXNwb25zZVxuICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBvdmVycmlkZVByZWRpY3Rpb25zKHJlc3BvbnNlKSB7XG4gICAgT2JqZWN0LmtleXMocmVzcG9uc2UpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB1dGlscy5xdWVyeVN0cmluZy5nZXQoYGJpbGwuJHtuYW1lfWApO1xuICAgICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlW25hbWVdLnJlc3VsdCA9IHBhcnNlSW50KG5ld1ZhbHVlLCAxMCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG59XG4vKipcbiAqIEJpbGwgdGhlIExpemFyZCBzZXJ2aWNlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IGNsYXNzIEJpbGxUaGVMaXphcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV4ZWN1dG9yID0gbmV3IEV4ZWN1dG9yKCk7XG4gICAgICAgIHRoaXMuc3RhdHVzZXMgPSB7fTtcbiAgICAgICAgdGhpcy5wcm9qZWN0c0hhbmRsZXIgPSBuZXcgUHJvamVjdHNIYW5kbGVyKCk7XG4gICAgICAgIHRoaXMucHJlZGljdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5jYWxsQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMudGFyZ2V0ZWRNb2RlbE5hbWVzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0cyBzZXJ2aWNlLCBleGVjdXRlcyBkZWZpbmVkIG1ldGhvZHMgYW5kIHBhcnNlcyByZXNwb25zZVxuICAgICAqXG4gICAgICogU3VwcGx5IGNhbGxLZXkgaWYgeW91IG5lZWQgdG8gYWNjZXNzIHN0YXR1cyBmb3IgdGhpcyBzcGVjaWZpYyByZXF1ZXN0LlxuICAgICAqIERPIE5PVCB1c2UgYW4gaW50ZWdlciBhcyBjYWxsS2V5IGFzIGl0J3MgdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAgICogR29vZCBrZXkgZXhhbXBsZTogXCJpbmNvbnRlbnRfYm94YWQxXCIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwcm9qZWN0TmFtZXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2FsbElkIGtleSBmb3IgdGhpcyBjYWxsXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgY2FsbChwcm9qZWN0TmFtZXMsIGNhbGxJZCkge1xuICAgICAgICBpZiAoIWNvbnRleHQuZ2V0KCdzZXJ2aWNlcy5iaWxsVGhlTGl6YXJkLmVuYWJsZWQnKSkge1xuICAgICAgICAgICAgdXRpbHMubG9nZ2VyKGxvZ0dyb3VwLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZWplY3QobmV3IEVycm9yKCdEaXNhYmxlZCcpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjYWxsSWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbENvdW50ZXIgKz0gMTtcbiAgICAgICAgICAgIGNhbGxJZCA9IHRoaXMuY2FsbENvdW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaG9zdCA9IGNvbnRleHQuZ2V0KCdzZXJ2aWNlcy5iaWxsVGhlTGl6YXJkLmhvc3QnKTtcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSBjb250ZXh0LmdldCgnc2VydmljZXMuYmlsbFRoZUxpemFyZC5lbmRwb2ludCcpO1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gY29udGV4dC5nZXQoJ3NlcnZpY2VzLmJpbGxUaGVMaXphcmQudGltZW91dCcpO1xuICAgICAgICBjb25zdCB7IG1vZGVscywgcGFyYW1ldGVycyB9ID0gdGhpcy5wcm9qZWN0c0hhbmRsZXIuZ2V0RW5hYmxlZE1vZGVsc1dpdGhQYXJhbXMocHJvamVjdE5hbWVzKTtcbiAgICAgICAgaWYgKCFtb2RlbHMgfHwgbW9kZWxzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHV0aWxzLmxvZ2dlcihsb2dHcm91cCwgJ25vIG1vZGVscyB0byBwcmVkaWN0Jyk7XG4gICAgICAgICAgICB0aGlzLnN0YXR1c2VzW2NhbGxJZF0gPSBCaWxsVGhlTGl6YXJkLk5PVF9VU0VEO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7fSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdXBkYXRlIG5hbWVzIG9mIEdBTSB0YXJnZXRlZCBtb2RlbHNcbiAgICAgICAgbW9kZWxzXG4gICAgICAgICAgICAuZmlsdGVyKG1vZGVsID0+IG1vZGVsLmRmcF90YXJnZXRpbmcpXG4gICAgICAgICAgICAuZm9yRWFjaChtb2RlbCA9PiB0aGlzLnRhcmdldGVkTW9kZWxOYW1lcy5hZGQobW9kZWwubmFtZSkpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtZXRlcnMgPSBnZXRRdWVyeVBhcmFtZXRlcnMobW9kZWxzLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgdXRpbHMubG9nZ2VyKGxvZ0dyb3VwLCAnY2FsbGluZyBzZXJ2aWNlJywgaG9zdCwgZW5kcG9pbnQsIHF1ZXJ5UGFyYW1ldGVycywgYGNhbGxJZDogJHtjYWxsSWR9YCk7XG4gICAgICAgIHRoaXMuc3RhdHVzZXNbY2FsbElkXSA9IEJpbGxUaGVMaXphcmQuVE9PX0xBVEU7XG4gICAgICAgIHJldHVybiBodHRwUmVxdWVzdChob3N0LCBlbmRwb2ludCwgcXVlcnlQYXJhbWV0ZXJzLCB0aW1lb3V0LCBjYWxsSWQpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IubWVzc2FnZSA9PT0gJ3RpbWVvdXQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNlc1tjYWxsSWRdID0gQmlsbFRoZUxpemFyZC5USU1FT1VUO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNlc1tjYWxsSWRdID0gQmlsbFRoZUxpemFyZC5GQUlMVVJFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IG92ZXJyaWRlUHJlZGljdGlvbnMocmVzcG9uc2UpKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB1dGlscy5sb2dnZXIobG9nR3JvdXAsICdzZXJ2aWNlIHJlc3BvbnNlIE9LJywgYGNhbGxJZDogJHtjYWxsSWR9YCk7XG4gICAgICAgICAgICB0aGlzLnN0YXR1c2VzW2NhbGxJZF0gPSBCaWxsVGhlTGl6YXJkLk9OX1RJTUU7XG4gICAgICAgICAgICBjb25zdCBtb2RlbFRvUmVzdWx0TWFwID0gdGhpcy5nZXRNb2RlbFRvUmVzdWx0TWFwKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHV0aWxzLmxvZ2dlcihsb2dHcm91cCwgJ3ByZWRpY3Rpb25zJywgbW9kZWxUb1Jlc3VsdE1hcCwgYGNhbGxJZDogJHtjYWxsSWR9YCk7XG4gICAgICAgICAgICBjb25zdCBwcmVkaWN0aW9ucyA9IHRoaXMuYnVpbGRQcmVkaWN0aW9ucyhtb2RlbHMsIG1vZGVsVG9SZXN1bHRNYXAsIGNhbGxJZCk7XG4gICAgICAgICAgICB0aGlzLnByZWRpY3Rpb25zLnB1c2goLi4ucHJlZGljdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zZXRUYXJnZXRpbmcoKTtcbiAgICAgICAgICAgIGV2ZW50cy5lbWl0KGV2ZW50cy5CSUxMX1RIRV9MSVpBUkRfUkVTUE9OU0UsIHtcbiAgICAgICAgICAgICAgICBjYWxsSWQsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IHRoaXMuc2VyaWFsaXplKGNhbGxJZCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0b3IuZXhlY3V0ZU1ldGhvZHMobW9kZWxzLCByZXNwb25zZSk7XG4gICAgICAgICAgICByZXR1cm4gbW9kZWxUb1Jlc3VsdE1hcDtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHV0aWxzLmxvZ2dlcihsb2dHcm91cCwgJ3NlcnZpY2UgcmVzcG9uc2UnLCBlcnJvci5tZXNzYWdlLCBgY2FsbElkOiAke2NhbGxJZH1gKTtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtNb2RlbERlZmluaXRpb25bXX0gbW9kZWxzXG4gICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgbnVtYmVyPn0gbW9kZWxUb1Jlc3VsdE1hcFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gY2FsbElkXG4gICAgICogQHJldHVybnMge1ByZWRpY3Rpb25EZWZpbml0aW9uW119XG4gICAgICovXG4gICAgYnVpbGRQcmVkaWN0aW9ucyhtb2RlbHMsIG1vZGVsVG9SZXN1bHRNYXAsIGNhbGxJZCkge1xuICAgICAgICByZXR1cm4gbW9kZWxzXG4gICAgICAgICAgICAubWFwKG1vZGVsID0+IG1vZGVsLm5hbWUpXG4gICAgICAgICAgICAuZmlsdGVyKG1vZGVsTmFtZSA9PiBtb2RlbFRvUmVzdWx0TWFwW21vZGVsTmFtZV0gIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIC5tYXAobW9kZWxOYW1lID0+ICh7IG1vZGVsTmFtZSwgY2FsbElkLCByZXN1bHQ6IG1vZGVsVG9SZXN1bHRNYXBbbW9kZWxOYW1lXSB9KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHJlc3BvbnNlIHRvIHByZWRpY3Rpb25zXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlXG4gICAgICogQHJldHVybnMge1ByZWRpY3Rpb25EZWZpbml0aW9ufVxuICAgICAqL1xuICAgIGdldE1vZGVsVG9SZXN1bHRNYXAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3QgbW9kZWxUb1Jlc3VsdE1hcCA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhyZXNwb25zZSkuZm9yRWFjaCgobW9kZWxOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHJlc3VsdCB9ID0gcmVzcG9uc2VbbW9kZWxOYW1lXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG1vZGVsVG9SZXN1bHRNYXBbbW9kZWxOYW1lXSA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtb2RlbFRvUmVzdWx0TWFwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIERGUCB0YXJnZXRpbmcgaW4gY29udGV4dC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIHNldFRhcmdldGluZygpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0aW5nID0gdGhpcy5nZXRUYXJnZXRpbmcoKTtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRhcmdldGluZykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZFRhcmdldGluZyA9IE9iamVjdC5lbnRyaWVzKHRhcmdldGluZylcbiAgICAgICAgICAgICAgICAubWFwKChbbW9kZWxOYW1lLCByZXN1bHRdKSA9PiBgJHttb2RlbE5hbWV9XyR7cmVzdWx0fWApO1xuICAgICAgICAgICAgY29udGV4dC5zZXQoJ3RhcmdldGluZy5idGwnLCBzZXJpYWxpemVkVGFyZ2V0aW5nKTtcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVkVGFyZ2V0aW5nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBtYXAgb2YgdGFyZ2V0ZWQgbW9kZWxzIHRvIHRoZWlyIHJlc3VsdHMuXG4gICAgICpcbiAgICAgKiBGb3IgZWFjaCBtb2RlbCwgaXQgdGFrZXMgdGhlIGxhdGVzdCByZXN1bHQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsIG51bWJlcj59XG4gICAgICovXG4gICAgZ2V0VGFyZ2V0aW5nKCkge1xuICAgICAgICBjb25zdCBsYXRlc3RSZXN1bHRzID0ge307XG4gICAgICAgIHRoaXMucHJlZGljdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIocHJlZCA9PiB0aGlzLnRhcmdldGVkTW9kZWxOYW1lcy5oYXMocHJlZC5tb2RlbE5hbWUpKVxuICAgICAgICAgICAgLmZvckVhY2goKHByZWQpID0+IHtcbiAgICAgICAgICAgIGxhdGVzdFJlc3VsdHNbcHJlZC5tb2RlbE5hbWVdID0gcHJlZC5yZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbGF0ZXN0UmVzdWx0cztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHByZWRpY3Rpb24gYnkgbW9kZWxOYW1lIGFuZCBjYWxsSWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZWxOYW1lXG4gICAgICogQHBhcmFtIHsobnVtYmVyfHN0cmluZyl9IGNhbGxJZFxuICAgICAqIEByZXR1cm5zIHtQcmVkaWN0aW9uRGVmaW5pdGlvbn1cbiAgICAgKi9cbiAgICBnZXRQcmVkaWN0aW9uKG1vZGVsTmFtZSwgY2FsbElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFByZWRpY3Rpb25zKG1vZGVsTmFtZSkuZmluZChwcmVkID0+IHByZWQuY2FsbElkID09PSBjYWxsSWQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHByZWRpY3Rpb25zIG9wdGlvbmFsbHkgZmlsdGVyZWQgYnkgbW9kZWwgbmFtZS5cbiAgICAgKlxuICAgICAqIElmIG1vZGVsIG5hbWUgaXMgZ2l2ZW4sIGl0IHJldHVybnMgYWxsIHByZWRpY3Rpb25zIHdpdGggbW9kZWxzIG1hdGNoaW5nLlxuICAgICAqIE1vZGVsIG1hdGNoZXMgd2hlbiByYXcgbmFtZSAod2l0aG91dCB2ZXJzaW9uKSBpcyBtYXRjaGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFttb2RlbE5hbWVdXG4gICAgICogQHJldHVybnMge1ByZWRpY3Rpb25EZWZpbml0aW9uW119XG4gICAgICovXG4gICAgZ2V0UHJlZGljdGlvbnMobW9kZWxOYW1lKSB7XG4gICAgICAgIGNvbnN0IHNlcGFyYXRvciA9ICc6JztcbiAgICAgICAgaWYgKG1vZGVsTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJlZGljdGlvbnMuZmlsdGVyKHByZWQgPT4gcHJlZC5tb2RlbE5hbWUuc3BsaXQoc2VwYXJhdG9yKVswXSA9PT0gbW9kZWxOYW1lLnNwbGl0KHNlcGFyYXRvcilbMF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByZWRpY3Rpb25zO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHJlc3BvbnNlIHN0YXR1cyAob25lIG9mOiBmYWlsdXJlLCBub3RfdXNlZCwgb25fdGltZSwgdGltZW91dCwgdG9vX2xhdGUgb3IgdW5kZWZpbmVkKTtcbiAgICAgKlxuICAgICAqIElmIGNhbGxJZCBpcyBub3Qgc3VwcGxpZWQsIHRoZSBsYXRlc3QgcmVzcG9uc2Ugd2l0aG91dCBhIHNwZWNpZmljIGtleSBpcyByZXR1cm5lZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gW2NhbGxJZF0gdmFsdWUgcGFzc2VkIGFzIGtleSBmb3IgY2FsbFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0UmVzcG9uc2VTdGF0dXMoY2FsbElkKSB7XG4gICAgICAgIGNhbGxJZCA9IGNhbGxJZCB8fCB0aGlzLmNhbGxDb3VudGVyO1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXNlc1tjYWxsSWRdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemVzIGFsbCBwcmVkaWN0aW9uc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gW2NhbGxJZF1cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZShjYWxsSWQpIHtcbiAgICAgICAgbGV0IHsgcHJlZGljdGlvbnMgfSA9IHRoaXM7XG4gICAgICAgIGlmIChjYWxsSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJlZGljdGlvbnMgPSBwcmVkaWN0aW9ucy5maWx0ZXIocHJlZCA9PiBwcmVkLmNhbGxJZCA9PT0gY2FsbElkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJlZGljdGlvbnNcbiAgICAgICAgICAgIC5tYXAocHJlZCA9PiBgJHtwcmVkLm1vZGVsTmFtZX18JHtwcmVkLmNhbGxJZH09JHtwcmVkLnJlc3VsdH1gKVxuICAgICAgICAgICAgLmpvaW4oJzsnKTtcbiAgICB9XG59XG5CaWxsVGhlTGl6YXJkLkZBSUxVUkUgPSAnZmFpbHVyZSc7XG5CaWxsVGhlTGl6YXJkLk5PVF9VU0VEID0gJ25vdF91c2VkJztcbkJpbGxUaGVMaXphcmQuT05fVElNRSA9ICdvbl90aW1lJztcbkJpbGxUaGVMaXphcmQuVElNRU9VVCA9ICd0aW1lb3V0JztcbkJpbGxUaGVMaXphcmQuVE9PX0xBVEUgPSAndG9vX2xhdGUnO1xuZXhwb3J0IGNvbnN0IGJpbGxUaGVMaXphcmQgPSBuZXcgQmlsbFRoZUxpemFyZCgpO1xuIiwiaW1wb3J0IHsgY29udGV4dCwgdXRpbHMgfSBmcm9tICdAd2lraWEvYWQtZW5naW5lJztcbmNvbnN0IGxvZ0dyb3VwID0gJ2dlby1lZGdlJztcbmNvbnN0IHNjcmlwdERvbWFpbklkID0gJ2QzYjAyZXN0bXV0ODc3Jztcbi8qKlxuICogSW5qZWN0cyBHZW8gRWRnZSBTaXRlIFNpZGUgUHJvdGVjdGlvbiBzY3JpcHRcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5mdW5jdGlvbiBsb2FkU2NyaXB0KCkge1xuICAgIGNvbnN0IGdlb0VkZ2VMaWJyYXJ5VXJsID0gYC8vJHtzY3JpcHREb21haW5JZH0uY2xvdWRmcm9udC5uZXQvZ3J1bWktaXAuanNgO1xuICAgIHJldHVybiB1dGlscy5zY3JpcHRMb2FkZXIubG9hZFNjcmlwdChnZW9FZGdlTGlicmFyeVVybCwgJ3RleHQvamF2YXNjcmlwdCcsIHRydWUsICdmaXJzdCcpO1xufVxuLyoqXG4gKiBHZW9FZGdlIHNlcnZpY2UgaGFuZGxlclxuICovXG5jbGFzcyBHZW9FZGdlIHtcbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0cyBzZXJ2aWNlIGFuZCBpbmplY3RzIHNjcmlwdCB0YWdcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBjYWxsKCkge1xuICAgICAgICBjb25zdCBnZW9FZGdlS2V5ID0gY29udGV4dC5nZXQoJ3NlcnZpY2VzLmdlb0VkZ2UuaWQnKTtcbiAgICAgICAgY29uc3QgZ2VvRWRnZUNvbmZpZyA9IGNvbnRleHQuZ2V0KCdzZXJ2aWNlcy5nZW9FZGdlLmNvbmZpZycpO1xuICAgICAgICBpZiAoIWNvbnRleHQuZ2V0KCdzZXJ2aWNlcy5nZW9FZGdlLmVuYWJsZWQnKSB8fCAhZ2VvRWRnZUtleSkge1xuICAgICAgICAgICAgdXRpbHMubG9nZ2VyKGxvZ0dyb3VwLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB1dGlscy5sb2dnZXIobG9nR3JvdXAsICdsb2FkaW5nJyk7XG4gICAgICAgIHdpbmRvdy5ncnVtaSA9IHtcbiAgICAgICAgICAgIGNmZzogZ2VvRWRnZUNvbmZpZyxcbiAgICAgICAgICAgIGtleTogZ2VvRWRnZUtleVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbG9hZFNjcmlwdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdXRpbHMubG9nZ2VyKGxvZ0dyb3VwLCAncmVhZHknKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGdlb0VkZ2UgPSBuZXcgR2VvRWRnZSgpO1xuIiwiaW1wb3J0IHsgY29udGV4dCwgdXRpbHMgfSBmcm9tICdAd2lraWEvYWQtZW5naW5lJztcbmNvbnN0IGxvZ0dyb3VwID0gJ2tydXgnO1xuLyoqXG4gKiBJbmplY3RzIEtydXggc2NyaXB0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuZnVuY3Rpb24gbG9hZFNjcmlwdCgpIHtcbiAgICBjb25zdCBrcnV4SWQgPSBjb250ZXh0LmdldCgnc2VydmljZXMua3J1eC5pZCcpO1xuICAgIGNvbnN0IGtydXhMaWJyYXJ5VXJsID0gYC8vY2RuLmtyeGQubmV0L2NvbnRyb2x0YWc/Y29uZmlkPSR7a3J1eElkfWA7XG4gICAgcmV0dXJuIHV0aWxzLnNjcmlwdExvYWRlci5sb2FkU2NyaXB0KGtydXhMaWJyYXJ5VXJsLCAndGV4dC9qYXZhc2NyaXB0JywgdHJ1ZSwgJ2ZpcnN0Jywge1xuICAgICAgICBpZDogJ2tydXgtY29udHJvbC10YWcnXG4gICAgfSk7XG59XG4vKipcbiAqIEdldHMgS3J1eCBkYXRhIGZyb20gbG9jYWxTdG9yYWdlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRLcnV4RGF0YShrZXkpIHtcbiAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZSkge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZVtrZXldO1xuICAgIH1cbiAgICBlbHNlIGlmICh3aW5kb3cubmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQpIHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2goYCR7a2V5fT0oW147XSopYCk7XG4gICAgICAgIHJldHVybiAobWF0Y2ggJiYgZGVjb2RlVVJJKG1hdGNoWzFdKSkgfHwgJyc7XG4gICAgfVxuICAgIHJldHVybiAnJztcbn1cbndpbmRvdy5LcnV4ID0gd2luZG93LktydXggfHwgZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICB3aW5kb3cuS3J1eC5xLnB1c2goYXJncyk7XG59O1xud2luZG93LktydXgucSA9IHdpbmRvdy5LcnV4LnEgfHwgW107XG4vKipcbiAqIEtydXggc2VydmljZSBoYW5kbGVyXG4gKi9cbmNsYXNzIEtydXgge1xuICAgIC8qKlxuICAgICAqIFJlcXVlc3RzIHNlcnZpY2UsIHNhdmVzIHVzZXIgaWQgYW5kIHNlZ21lbnRzIGluIGNvbnRleHQgYW5kIGV4cG9ydHMgcGFnZSBsZXZlbCBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBjYWxsKCkge1xuICAgICAgICBpZiAoIWNvbnRleHQuZ2V0KCdzZXJ2aWNlcy5rcnV4LmVuYWJsZWQnKSB8fCAhY29udGV4dC5nZXQoJ29wdGlvbnMudHJhY2tpbmdPcHRJbicpKSB7XG4gICAgICAgICAgICB1dGlscy5sb2dnZXIobG9nR3JvdXAsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHV0aWxzLmxvZ2dlcihsb2dHcm91cCwgJ2xvYWRpbmcnKTtcbiAgICAgICAgcmV0dXJuIGxvYWRTY3JpcHQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXhwb3J0UGFnZVBhcmFtcygpO1xuICAgICAgICAgICAgdGhpcy5pbXBvcnRVc2VyRGF0YSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXhwb3J0IHBhZ2UgbGV2ZWwgcGFyYW1zIHRvIEtydXhcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBleHBvcnRQYWdlUGFyYW1zKCkge1xuICAgICAgICBPYmplY3Qua2V5cyhjb250ZXh0LmdldCgndGFyZ2V0aW5nJykpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjb250ZXh0LmdldChgdGFyZ2V0aW5nLiR7a2V5fWApO1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgd2luZG93W2BrcnV4RGFydFBhcmFtXyR7a2V5fWBdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbXBvcnRzIEtydXggZGF0YSBmcm9tIGxvY2FsU3RvcmFnZVxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGltcG9ydFVzZXJEYXRhKCkge1xuICAgICAgICBjb25zdCB1c2VyID0gZ2V0S3J1eERhdGEoJ2t4dXNlcicpO1xuICAgICAgICBjb25zdCBzZWdtZW50cyA9IGdldEtydXhEYXRhKCdreHNlZ3MnKTtcbiAgICAgICAgY29udGV4dC5zZXQoJ3RhcmdldGluZy5rdWlkJywgdXNlciB8fCBudWxsKTtcbiAgICAgICAgY29udGV4dC5zZXQoJ3RhcmdldGluZy5rc2cnLCBzZWdtZW50cyA/IHNlZ21lbnRzLnNwbGl0KCcsJykgOiBbXSk7XG4gICAgICAgIHV0aWxzLmxvZ2dlcihsb2dHcm91cCwgJ2RhdGEgc2V0JywgdXNlciwgc2VnbWVudHMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIEtydXggdXNlciBJRFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VXNlcklkKCkge1xuICAgICAgICByZXR1cm4gY29udGV4dC5nZXQoJ3RhcmdldGluZy5rdWlkJykgfHwgbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBLcnV4IHNlZ21lbnRzXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGdldFNlZ21lbnRzKCkge1xuICAgICAgICByZXR1cm4gY29udGV4dC5nZXQoJ3RhcmdldGluZy5rc2cnKSB8fCBbXTtcbiAgICB9XG59XG5leHBvcnQgY29uc3Qga3J1eCA9IG5ldyBLcnV4KCk7XG4iLCJpbXBvcnQgeyBjb250ZXh0LCBldmVudHMsIHV0aWxzIH0gZnJvbSAnQHdpa2lhL2FkLWVuZ2luZSc7XG5jb25zdCBsb2dHcm91cCA9ICdtb2F0LXlpJztcbmV2ZW50cy5yZWdpc3RlckV2ZW50KCdNT0FUX1lJX1JFQURZJyk7XG4vKipcbiAqIEluamVjdHMgTU9BVCBZSSBzY3JpcHRcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5mdW5jdGlvbiBsb2FkU2NyaXB0KCkge1xuICAgIGNvbnN0IHBhcnRuZXJDb2RlID0gY29udGV4dC5nZXQoJ3NlcnZpY2VzLm1vYXRZaS5wYXJ0bmVyQ29kZScpO1xuICAgIGNvbnN0IHVybCA9IGAvL3oubW9hdGFkcy5jb20vJHtwYXJ0bmVyQ29kZX0veWkuanNgO1xuICAgIHJldHVybiB1dGlscy5zY3JpcHRMb2FkZXIubG9hZFNjcmlwdCh1cmwsICd0ZXh0L2phdmFzY3JpcHQnLCB0cnVlLCAnZmlyc3QnKTtcbn1cbi8qKlxuICogTU9BVCBZSSBzZXJ2aWNlIGhhbmRsZXJcbiAqL1xuY2xhc3MgTW9hdFlpIHtcbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0cyBNT0FUIFlJIHNlcnZpY2UgYW5kIHNhdmVzIHBhZ2UgbGV2ZWwgZGF0YSBpbiB0YXJnZXRpbmdcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBjYWxsKCkge1xuICAgICAgICBpZiAoIWNvbnRleHQuZ2V0KCdzZXJ2aWNlcy5tb2F0WWkuZW5hYmxlZCcpIHx8ICFjb250ZXh0LmdldCgnc2VydmljZXMubW9hdFlpLnBhcnRuZXJDb2RlJykpIHtcbiAgICAgICAgICAgIHV0aWxzLmxvZ2dlcihsb2dHcm91cCwgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1vYXRZZWlsZFJlYWR5UmVzb2x2ZTtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBtb2F0WWVpbGRSZWFkeVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICB9KTtcbiAgICAgICAgdXRpbHMubG9nZ2VyKGxvZ0dyb3VwLCAnbG9hZGluZycpO1xuICAgICAgICB3aW5kb3cubW9hdFlpZWxkUmVhZHkgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmltcG9ydFBhZ2VQYXJhbXMoKTtcbiAgICAgICAgICAgIG1vYXRZZWlsZFJlYWR5UmVzb2x2ZSgpO1xuICAgICAgICB9O1xuICAgICAgICBjb250ZXh0LnNldCgndGFyZ2V0aW5nLm1fZGF0YScsICd3YWl0aW5nJyk7XG4gICAgICAgIGxvYWRTY3JpcHQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHV0aWxzLmxvZ2dlcihsb2dHcm91cCwgJ3JlYWR5Jyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBwYWdlIHBhcmFtcyB0byB0YXJnZXRpbmdcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBpbXBvcnRQYWdlUGFyYW1zKCkge1xuICAgICAgICBpZiAod2luZG93Lm1vYXRQcmViaWRBcGkgJiYgdHlwZW9mIHdpbmRvdy5tb2F0UHJlYmlkQXBpLmdldE1vYXRUYXJnZXRpbmdGb3JQYWdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBwYWdlUGFyYW1zID0gd2luZG93Lm1vYXRQcmViaWRBcGkuZ2V0TW9hdFRhcmdldGluZ0ZvclBhZ2UoKSB8fCB7fTtcbiAgICAgICAgICAgIGNvbnRleHQuc2V0KCd0YXJnZXRpbmcubV9kYXRhJywgcGFnZVBhcmFtcy5tX2RhdGEpO1xuICAgICAgICAgICAgZXZlbnRzLmVtaXQoZXZlbnRzLk1PQVRfWUlfUkVBRFksIGBtX2RhdGE9JHtwYWdlUGFyYW1zLm1fZGF0YX1gKTtcbiAgICAgICAgICAgIHV0aWxzLmxvZ2dlcihsb2dHcm91cCwgJ21vYXRZaWVsZFJlYWR5JywgcGFnZVBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY29uc3QgbW9hdFlpID0gbmV3IE1vYXRZaSgpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9iaWxsLXRoZS1saXphcmQvaW5kZXgnO1xuZXhwb3J0ICogZnJvbSAnLi9nZW8tZWRnZS9pbmRleCc7XG5leHBvcnQgKiBmcm9tICcuL2tydXgvaW5kZXgnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2F0LXlpL2luZGV4JztcbiJdLCJzb3VyY2VSb290IjoiIn0=