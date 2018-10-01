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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 1 */
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/*! exports used: takeRight */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 2 */
/*!****************************!*\
  !*** external "tree-kill" ***!
  \****************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("tree-kill");

/***/ }),
/* 3 */
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 4 */
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pli/my/git/engineforce/libs/packages/external-command-lib/index.js */5);


/***/ }),
/* 5 */
/*!******************************!*\
  !*** ./index.js + 3 modules ***!
  \******************************/
/*! exports provided: exec, run, Task */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with external "child_process" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "events" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "lodash" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "tree-kill" (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "child_process"
var external_child_process_ = __webpack_require__(0);
var external_child_process_default = /*#__PURE__*/__webpack_require__.n(external_child_process_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(1);

// EXTERNAL MODULE: external "tree-kill"
var external_tree_kill_ = __webpack_require__(2);
var external_tree_kill_default = /*#__PURE__*/__webpack_require__.n(external_tree_kill_);

// EXTERNAL MODULE: external "events"
var external_events_ = __webpack_require__(3);
var external_events_default = /*#__PURE__*/__webpack_require__.n(external_events_);

// CONCATENATED MODULE: ./src/Task.js


class Task_Task {
  constructor(_childProcess, timeout, _logger) {
    this._childProcess = _childProcess;
    this._logger = _logger;
    this._eventEmitter = new external_events_default.a();
    let killTimer;

    if (timeout > 0) {
      killTimer = setTimeout(() => {
        this.kill();
      }, timeout);
    }

    _childProcess.stdout.on('data', data => {
      this._eventEmitter.emit('outputChanged', {
        source: 'stdout',
        message: data.toString()
      });
    });

    _childProcess.stderr.on('data', data => {
      this._eventEmitter.emit('outputChanged', {
        source: 'stderr',
        message: data.toString()
      });
    });

    _childProcess.on('exit', (code, signal) => {
      // Must clearTimeout here, or the process will not be stopped until the
      // timer is triggered.
      clearTimeout(killTimer);
      killTimer = undefined; // Make sure the all outputs are captured before complete.

      setTimeout(() => {
        this._eventEmitter.emit('completed', {
          code,
          signal
        });
      }, 0);
    });
  }

  on(event, listener) {
    this._eventEmitter.on(event, listener);
  }

  kill(signal) {
    setTimeout(() => {
      this._logger.info(`Kill ${this._childProcess.pid} with ${signal} signal.`);

      external_tree_kill_default()(this._childProcess.pid, signal); // Non of following works, because they don't kill the process tree.
      //cp.spawn("kill", [this._childProcess.pid.toString()]);
      //process.kill(this._childProcess.pid, signal);
      //this._childProcess.kill(signal);
    }, 0);
  }

}
// CONCATENATED MODULE: ./src/exec.js



const exec = initOptions => {
  initOptions = initOptions || {
    logger: {
      info: console.info,
      error: console.error
    }
  };
  return (commandParts, options = {}) => {
    let command = commandParts.join(' ');
    initOptions.logger.info(`Execute "${command}" "${options.workingDir}"`);
    const childProcess = external_child_process_default.a.spawn(commandParts[0], Object(external_lodash_["takeRight"])(commandParts, commandParts.length - 1), {
      cwd: options.workingDir,
      env: process.env,
      shell: true,
      stdio: ['inherit', 'pipe', 'pipe']
    });
    let outputMessage = '';
    let errorMessage = '';
    return new Promise((resolve, reject) => {
      let task = new Task_Task(childProcess, options.timeout, initOptions.logger);
      task.on('outputChanged', output => {
        outputMessage += output.message;

        if (output.source == 'stderr') {
          errorMessage += output.message;
        }
      });
      task.on('completed', info => {
        if (info.code == 0) {
          initOptions.logger.info(`Pass: ${command}\n ${outputMessage}`);
          resolve(outputMessage);
        } else {
          initOptions.logger.error(`Error: ${command}\n${errorMessage}\n ${outputMessage}`);
          reject(errorMessage);
        }
      });
    });
  };
};
// CONCATENATED MODULE: ./src/run.js


const run = initOptions => {
  initOptions = initOptions || {
    logger: {
      info: console.info
    }
  };
  return (commandParts, options = {}) => {
    initOptions.logger.info(`Execute ${commandParts.join(' ')} ${options.workingDir}`);
    const childProcess = external_child_process_default.a.exec(commandParts.join(' '), {
      cwd: options.workingDir
    }); // const childProcess = cp.spawn(
    //     commandParts[0],
    //     _.takeRight(commandParts, commandParts.length - 1),
    //     {
    //         cwd: workingDir,
    //         env: process.env,
    //         shell: true
    //     }
    // );

    return new Task_Task(childProcess, options.timeout, initOptions.logger);
  };
};
// CONCATENATED MODULE: ./index.js
/* concated harmony reexport exec */__webpack_require__.d(__webpack_exports__, "exec", function() { return exec; });
/* concated harmony reexport run */__webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* concated harmony reexport Task */__webpack_require__.d(__webpack_exports__, "Task", function() { return Task_Task; });




/***/ })
/******/ ]);