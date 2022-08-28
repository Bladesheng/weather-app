(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "search": () => (/* binding */ search)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _modules_MET__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/MET */ "./src/modules/MET.ts");
/* harmony import */ var _modules_DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/DOM */ "./src/modules/DOM.ts");
/* harmony import */ var _modules_Weather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Weather */ "./src/modules/Weather.ts");
/* harmony import */ var _modules_Geocode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Geocode */ "./src/modules/Geocode.ts");
/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Storage */ "./src/modules/Storage.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







function search(_x) {
  return _search.apply(this, arguments);
}

function _search() {
  _search = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(searchValue) {
    var coords, daysPast, date;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _modules_DOM__WEBPACK_IMPORTED_MODULE_2__.DOM.showLoader();
            _modules_DOM__WEBPACK_IMPORTED_MODULE_2__.DOM.wipeTabs();
            cityHeading.textContent = searchValue; // turn on / off favorite button if city is favorite

            if (_modules_Storage__WEBPACK_IMPORTED_MODULE_5__.Storage.isFavorite(searchValue)) {
              _modules_DOM__WEBPACK_IMPORTED_MODULE_2__.DOM.favoriteOn();
            } else {
              _modules_DOM__WEBPACK_IMPORTED_MODULE_2__.DOM.favoriteOff();
            }

            _context2.next = 7;
            return _modules_Geocode__WEBPACK_IMPORTED_MODULE_4__.Geocode.getCoords(searchValue);

          case 7:
            coords = _context2.sent;
            _context2.next = 10;
            return Promise.all([_modules_MET__WEBPACK_IMPORTED_MODULE_1__.MET.getLocationforecast(coords), _modules_MET__WEBPACK_IMPORTED_MODULE_1__.MET.getSunrise(coords)]);

          case 10:
            _modules_Weather__WEBPACK_IMPORTED_MODULE_3__.Weather.init();
            _modules_DOM__WEBPACK_IMPORTED_MODULE_2__.DOM.createTodayTab(); // show next 9 days

            for (daysPast = 1; daysPast < 10; daysPast++) {
              date = new Date();
              date.setDate(date.getDate() + daysPast);
              _modules_DOM__WEBPACK_IMPORTED_MODULE_2__.DOM.createDayTab(date);
            } // cache searched city


            _modules_Storage__WEBPACK_IMPORTED_MODULE_5__.Storage.lastCity = searchValue;
            _modules_DOM__WEBPACK_IMPORTED_MODULE_2__.DOM.hideLoader();
            _context2.next = 21;
            break;

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            _modules_DOM__WEBPACK_IMPORTED_MODULE_2__.DOM.hideLoader();

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 17]]);
  }));
  return _search.apply(this, arguments);
}

var searchBtn = document.querySelector("button.search");
var cityHeading = document.querySelector("h1.city");
var searchInput = document.querySelector("input.search");
_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.DOM.dynamicInput(searchBtn, cityHeading, searchInput, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var searchValue;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          searchValue = searchInput.value;
          search(searchValue);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
_modules_Storage__WEBPACK_IMPORTED_MODULE_5__.Storage.retrieve();
_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.DOM.sidebarInit();
search(_modules_Storage__WEBPACK_IMPORTED_MODULE_5__.Storage.lastCity);
_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.DOM.favoriteListener();

/***/ }),

/***/ "./src/modules/Cache.ts":
/*!******************************!*\
  !*** ./src/modules/Cache.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cache": () => (/* binding */ Cache)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Cache = function () {
  // Module for storing and retrieving responses from cache.
  // Specifically for geolocation and altitude APIs, because they don't have "expires" header
  // retrieves response for given url from cache, if it is invalid, fetches a new one
  function getResponse(_x) {
    return _getResponse.apply(this, arguments);
  } // returns false if response for given url is expired or nothing is not cached at all
  // if the response is cached and expire date has not happened yet, return true


  function _getResponse() {
    _getResponse = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
      var createRequest, isInvalid, response, request, _request;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              // either force fetch new request and cache it or force use of cache, nothing else
              createRequest = function createRequest(cacheType) {
                return new Request(url, {
                  method: "GET",
                  cache: cacheType
                });
              };

              _context.next = 4;
              return _isInvalid(url);

            case 4:
              isInvalid = _context.sent;

              if (!isInvalid) {
                _context.next = 15;
                break;
              }

              request = createRequest("reload"); // request new response and cache it

              _context.next = 9;
              return fetch(request);

            case 9:
              response = _context.sent;
              _context.next = 12;
              return _saveWithExpire(url, response);

            case 12:
              response = _context.sent;
              _context.next = 20;
              break;

            case 15:
              if (isInvalid) {
                _context.next = 20;
                break;
              }

              _request = createRequest("force-cache"); // return response from cache

              _context.next = 19;
              return fetch(_request);

            case 19:
              response = _context.sent;

            case 20:
              return _context.abrupt("return", response);

            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 23]]);
    }));
    return _getResponse.apply(this, arguments);
  }

  function _isInvalid(_x2) {
    return _isInvalid2.apply(this, arguments);
  } // Copy the initial response and give it custom expire date
  // because some APIs don't do that by default,
  // as if the coordinates and altitude of cities are gonna change lol.
  // Returns the newly created response.


  function _isInvalid2() {
    _isInvalid2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(url) {
      var cacheName, cache, requests, urls, checkCacheExpired, _checkCacheExpired, isInvalid;

      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _checkCacheExpired = function _checkCacheExpired3() {
                _checkCacheExpired = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url) {
                  var cachedResponse, _isInvalid3, expireDate, expireDateObj, expiresTimer, isInvalid;

                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return cache.match(url);

                        case 2:
                          cachedResponse = _context2.sent;

                          if (!(cachedResponse === undefined)) {
                            _context2.next = 6;
                            break;
                          }

                          _isInvalid3 = true;
                          return _context2.abrupt("return", _isInvalid3);

                        case 6:
                          // If there is cached response, continue.
                          // date when response expires
                          expireDate = cachedResponse.headers.get("expires");
                          expireDateObj = new Date(expireDate); // time until the response expires

                          expiresTimer = expireDateObj.getTime() - new Date().getTime(); // if the timer has already hit zero (or lower), response is expired

                          isInvalid = expiresTimer < 0;
                          return _context2.abrupt("return", isInvalid);

                        case 11:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));
                return _checkCacheExpired.apply(this, arguments);
              };

              checkCacheExpired = function _checkCacheExpired2(_x5) {
                return _checkCacheExpired.apply(this, arguments);
              };

              cacheName = "apiResponses";
              _context3.next = 5;
              return caches.open(cacheName);

            case 5:
              cache = _context3.sent;
              _context3.next = 8;
              return cache.keys();

            case 8:
              requests = _context3.sent;
              urls = requests.map(function (request) {
                return request.url;
              }); // manually check if there is cached response for given url
              // and if it is expired

              _context3.next = 12;
              return checkCacheExpired(url);

            case 12:
              isInvalid = _context3.sent;
              return _context3.abrupt("return", isInvalid);

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _isInvalid2.apply(this, arguments);
  }

  function _saveWithExpire(_x3, _x4) {
    return _saveWithExpire2.apply(this, arguments);
  }

  function _saveWithExpire2() {
    _saveWithExpire2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(url, responseOriginal) {
      var cacheName, cache, currentDate, expireTime, expireDate, newHeaders, newResponse;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              cacheName = "apiResponses";
              _context4.next = 3;
              return caches.open(cacheName);

            case 3:
              cache = _context4.sent;
              currentDate = new Date();
              expireTime = 10080; // expire time in minutes

              expireDate = new Date(currentDate.getTime() + expireTime * 60000);
              newHeaders = new Headers(responseOriginal.headers);
              newHeaders.set("expires", expireDate.toUTCString()); // use standard HTTP date format

              newResponse = new Response(responseOriginal.body, {
                headers: newHeaders
              });
              _context4.next = 12;
              return cache.put(url, newResponse.clone());

            case 12:
              return _context4.abrupt("return", newResponse);

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _saveWithExpire2.apply(this, arguments);
  }

  return {
    getResponse: getResponse
  };
}();

/***/ }),

/***/ "./src/modules/DOM.ts":
/*!****************************!*\
  !*** ./src/modules/DOM.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOM": () => (/* binding */ DOM)
/* harmony export */ });
/* harmony import */ var _Weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Weather */ "./src/modules/Weather.ts");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons */ "./src/modules/Icons.ts");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./src/index.ts");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var DOM = function () {
  // module for manipulating the DOM
  // Dynamic input listener that switches betwen static text
  // and input
  function dynamicInput(btnElement, textElement, inputElement, processCallback) {
    btnElement.addEventListener("click", function () {
      function sendInput() {
        if (inputElement.value !== "") {
          // reset visibility
          btnElement.classList.remove("active");
          textElement.classList.remove("active");
          inputElement.classList.remove("active"); // process the input

          processCallback();
          inputElement.value = "";
        } else {
          // reset visibility if input was empty
          btnElement.classList.remove("active");
          textElement.classList.remove("active");
          inputElement.classList.remove("active");
        }
      } // hides the text and button, shows the input and focuses it


      btnElement.classList.add("active");
      textElement.classList.add("active");
      inputElement.classList.add("active");
      inputElement.focus(); // when you lose focus by clicking somewhere outside the input

      inputElement.onblur = function () {
        sendInput();
      };

      inputElement.onkeydown = function (e) {
        if (e.key === "Enter") {
          sendInput();
        } else if (e.key === "Escape") {
          inputElement.value = "";
          sendInput();
        }
      };
    });
  }

  function displayNow() {
    var now = _Weather__WEBPACK_IMPORTED_MODULE_0__.Weather.returnNow();
    var airTemp = String(Math.round(now.airTemp));
    var minTemp = String(Math.round(now.minTemp));
    var maxTemp = String(Math.round(now.maxTemp));
    var currentTempText = document.querySelector(".now h1");
    currentTempText.textContent = "".concat(airTemp, "\u02DA");
    var minMaxText = document.querySelector(".now h2");
    minMaxText.textContent = "".concat(maxTemp, "\u02DA/").concat(minTemp, "\u02DA");
    var weatherImg = document.querySelector(".now img");
    var iconPath = _Icons__WEBPACK_IMPORTED_MODULE_1__.Icons.get(now.iconCode);
    weatherImg.src = iconPath;
  } // shows and hides loader modal with animated icon


  function showLoader() {
    var loader = document.querySelector(".loader");
    loader.style.display = "flex";
  }

  function hideLoader() {
    var loader = document.querySelector(".loader");
    loader.style.display = "none";
  } // add listeners for sidebar


  function sidebarInit() {
    // receate all favorite cities
    var favoriteCities = _Storage__WEBPACK_IMPORTED_MODULE_2__.Storage.returnFavorites();

    var _iterator = _createForOfIteratorHelper(favoriteCities),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var city = _step.value;

        _createCityBtn(city);
      } // show sidebar when button is clicked

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var hamburgerBtn = document.querySelector("button.burger");
    hamburgerBtn.addEventListener("click", function () {
      _showSidebar();
    }); //hide sidebar when you click somewhere else

    var loader = document.querySelector(".loader");
    var header = document.querySelector("header");
    var main = document.querySelector("main");

    for (var _i = 0, _arr = [loader, header, main]; _i < _arr.length; _i++) {
      var element = _arr[_i];
      element.addEventListener("click", function (e) {
        _hideSidebar();
      });
    } // swipe listener


    _sidebarSwipeListener(); // Column control checkboxes:
    // the listeners have to be loaded first,
    // everything is shown and checked at the begining


    _controlsListeners(); // then all checkboxes are parsed, and based on what was stored
    // in local storage, some checkboxes will be unchecked and
    // their belonging columns will be hidden


    _controlsInit();
  } // hide sidebar when you swipe left
  // show sidebar when you swipe right


  function _sidebarSwipeListener() {
    var touchStartX = 0;
    var touchEndX = 0;
    var touchStartY = 0;
    var touchEndY = 0;

    function checkDirection() {
      // swiped left
      if (touchEndX < touchStartX) {
        _hideSidebar();
      } // swiped right


      if (touchEndX > touchStartX && // distance traveled in X axis has to be bigger than in Y axis
      // to prevent accidental "swipe right" when scrolling up / down
      Math.abs(touchStartX - touchEndX) > Math.abs(touchStartY - touchEndY)) {
        _showSidebar();
      }
    }

    document.addEventListener("touchstart", function (e) {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    });
    document.addEventListener("touchend", function (e) {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      checkDirection();
    });
  }

  function _showSidebar() {
    var sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("hidden");
  }

  function _hideSidebar() {
    var sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("hidden");
  } // listens for checking / unchecking of the controls checkboxes


  function _controlsListeners() {
    var checkboxes = document.querySelectorAll("input[type=\"checkbox\"]");

    var _iterator2 = _createForOfIteratorHelper(checkboxes),
        _step2;

    try {
      var _loop = function _loop() {
        var checkbox = _step2.value;
        checkbox.addEventListener("change", function () {
          var key = checkbox.id; // name of the options
          // if checkbox was just checked

          if (checkbox.checked) {
            _restoreColumn(key);

            _Storage__WEBPACK_IMPORTED_MODULE_2__.Storage.setControls(key, true);
          } // if checkbox was just unchecked
          else {
            _hideColumn(key);

            _Storage__WEBPACK_IMPORTED_MODULE_2__.Storage.setControls(key, false);
          }
        });
      };

      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  } // uncheck all controls that were saved as unchecked in local storage


  function _controlsInit() {
    var checkboxes = document.querySelectorAll("input[type=\"checkbox\"]");

    var _iterator3 = _createForOfIteratorHelper(checkboxes),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var checkbox = _step3.value;
        var key = checkbox.id; // name of the option

        var savedValue = _Storage__WEBPACK_IMPORTED_MODULE_2__.Storage.returnControlsValue(key); // if the option was saved as unchecked, uncheck it and
        // manually fire appropriate event for unchecking the checkbox
        // which the listener will catch

        if (savedValue === false) {
          checkbox.checked = false;
          var event = new Event("change");
          checkbox.dispatchEvent(event);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  } // remove everything from main (all day tabs)


  function wipeTabs() {
    var main = document.querySelector("main");
    main.textContent = "";
  } // create new tab for today
  // also inlucdes big "now" section unlike normal tab


  function createTodayTab() {
    var dateObj = new Date();
    var main = document.querySelector("main");
    var dayTab = document.createElement("div");
    dayTab.classList.add("dayTab", "today");

    var dateElement = _returnDate(dateObj);

    dayTab.appendChild(dateElement); // replace name of day with "today" (only for today)
    // "Monday 14.08." -> "Today 14.08."

    dateElement.textContent = "Dnes ".concat(dateElement.textContent.split(" ")[1]);

    var nowElement = _returnNow();

    dayTab.appendChild(nowElement);

    var hourlyBreakdown = _returnHourlyBreakdown(dateObj.getDate(), true);

    dayTab.appendChild(hourlyBreakdown);
    main.appendChild(dayTab);
  } // create new tab for any given date


  function createDayTab(dateObj) {
    var main = document.querySelector("main");
    var dayTab = document.createElement("div");
    dayTab.classList.add("dayTab");

    var dateElement = _returnDate(dateObj);

    dayTab.appendChild(dateElement);

    var hourlyBreakdown = _returnHourlyBreakdown(dateObj.getDate(), false);

    dayTab.appendChild(hourlyBreakdown);
    main.appendChild(dayTab);
  } // return new paragraph with given date and day name


  function _returnDate(dateObj) {
    var dateElement = document.createElement("p");
    dateElement.classList.add("date");
    var daysCZ = ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"];
    var day = dateObj.getDay();
    var dayCZ = daysCZ[day];
    var date = dateObj.getDate();
    var datePadded = String(date).padStart(2, "0");
    var month = dateObj.getMonth() + 1;
    var monthPadded = String(month).padStart(2, "0");
    dateElement.textContent = "".concat(dayCZ, " ").concat(datePadded, ".").concat(monthPadded, ".");
    return dateElement;
  } // return big "now" section with current hour weather info


  function _returnNow() {
    var nowElement = document.createElement("div");
    nowElement.classList.add("now");
    var nowData = _Weather__WEBPACK_IMPORTED_MODULE_0__.Weather.returnNow();
    var airTemp = String(Math.round(nowData.airTemp));
    var minTemp = String(Math.round(nowData.minTemp));
    var maxTemp = String(Math.round(nowData.maxTemp));
    var iconCode = nowData.iconCode;

    var icon = _returnIcon(iconCode);

    nowElement.appendChild(icon);
    var currentTemp = document.createElement("h1");
    currentTemp.textContent = "".concat(airTemp, "\u02DA");
    nowElement.appendChild(currentTemp);
    var minMaxText = document.createElement("h2");
    minMaxText.textContent = "".concat(maxTemp, "\u02DA/").concat(minTemp, "\u02DA");
    nowElement.appendChild(minMaxText);
    return nowElement;
  } // return new hourly breakdown
  // includes description, rows with weather data and sunrise/sunset row


  function _returnHourlyBreakdown(date, showSunriseSunset) {
    var hourlyBreakdown = document.createElement("div");
    hourlyBreakdown.classList.add("hourlyBreakdown"); // header with descriptions for rows

    var descriptions = _returnDescriptions();

    hourlyBreakdown.appendChild(descriptions); // append row for every hour available and append sunrise/sunset row

    var fullData = _Weather__WEBPACK_IMPORTED_MODULE_0__.Weather.returnForDate(date); // append new row for every timePoint

    var _iterator4 = _createForOfIteratorHelper(fullData.weatherPoints),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var timePoint = _step4.value;
        var details = timePoint.data.instant.details;
        var rowData = {
          time: String(timePoint.time.getHours()),
          temperature: String(Math.round(details.air_temperature)),
          clouds: String(Math.round(details.cloud_area_fraction)),
          humidity: String(Math.round(details.relative_humidity)),
          pressure: String(Math.round(details.air_pressure_at_sea_level)),
          wind_speed: String(Math.round(details.wind_speed)),
          wind_from_direction: String(details.wind_from_direction)
        }; // Only fine (1 hour apart) timepoints have "next_1_hours".
        // Rough timepoints (6 hours apart) have "next_6_hours" instead

        if (timePoint.data.hasOwnProperty("next_1_hours")) {
          rowData.iconCode = timePoint.data.next_1_hours.summary.symbol_code;
          rowData.precipitation = String(timePoint.data.next_1_hours.details.precipitation_amount);
        } else if (timePoint.data.hasOwnProperty("next_6_hours")) {
          rowData.iconCode = timePoint.data.next_6_hours.summary.symbol_code;
          rowData.precipitation = String(timePoint.data.next_6_hours.details.precipitation_amount);
        }

        var row = _returnRow(rowData);

        hourlyBreakdown.appendChild(row);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    if (showSunriseSunset) {
      // convert date objects to "hh:mm" format
      var sunriseHours = String(fullData.sunrisePoint.sunrise.time.getHours()).padStart(2, "0");
      var sunriseMinutes = String(fullData.sunrisePoint.sunrise.time.getMinutes()).padStart(2, "0");
      var sunrise = "".concat(sunriseHours, ":").concat(sunriseMinutes);
      var sunsetHours = String(fullData.sunrisePoint.sunset.time.getHours()).padStart(2, "0");
      var sunsetMinutes = String(fullData.sunrisePoint.sunset.time.getMinutes()).padStart(2, "0");
      var sunset = "".concat(sunsetHours, ":").concat(sunsetMinutes);
      var sunriseSunsetTimes = [sunrise, sunset];

      var sunriseSunsetRow = _returnSunriseSunset(sunriseSunsetTimes);

      hourlyBreakdown.appendChild(sunriseSunsetRow);
    }

    return hourlyBreakdown;
  } // return new header row with descriptions for rows with weather data


  function _returnDescriptions() {
    var descriptionsElement = document.createElement("div");
    descriptionsElement.classList.add("row", "descriptions");
    var descriptions = {
      time: "Čas",
      temperature: "Teplota ˚C",
      precipitation: "Srážky mm",
      clouds: "Oblačnost %",
      humidity: "Vlhkost %",
      pressure: "Tlak hPa",
      wind: "Vítr m/s"
    };

    for (var _i2 = 0, _Object$keys = Object.keys(descriptions); _i2 < _Object$keys.length; _i2++) {
      var key = _Object$keys[_i2];
      var span = document.createElement("span");
      span.classList.add(key);
      span.textContent = descriptions[key];
      descriptionsElement.appendChild(span);
    }

    return descriptionsElement;
  } // create new row from given strings


  function _returnRow(rowData) {
    var row = document.createElement("div");
    row.classList.add("row", "data"); // append simple string element to the row

    function appendData(className, text) {
      var element = document.createElement("span");
      element.classList.add(className);
      element.textContent = text;
      row.appendChild(element);
    }

    appendData("time", rowData.time);

    var icon = _returnIcon(rowData.iconCode);

    row.appendChild(icon);
    appendData("temperature", "".concat(rowData.temperature, "\u02DA"));
    var precipitation = rowData.precipitation;
    var precipitationText;

    if (precipitation === "0") {
      precipitationText = " "; // don't show 0s
    } else {
      precipitationText = precipitation;
    }

    appendData("precipitation", precipitationText);
    appendData("clouds", rowData.clouds);
    appendData("humidity", rowData.humidity);
    appendData("pressure", rowData.pressure);
    var wind = document.createElement("span");
    wind.classList.add("wind");
    row.appendChild(wind);
    var windSpeed = document.createElement("span");
    windSpeed.classList.add("windSpeed");
    windSpeed.textContent = rowData.wind_speed;
    wind.appendChild(windSpeed);
    var windFrom = document.createElement("img");
    windFrom.classList.add("windFrom");
    windFrom.src = "assets/arrow.svg";
    windFrom.style.transform = "rotate(".concat(rowData.wind_from_direction, "deg)");
    wind.appendChild(windFrom);
    return row;
  } // return new row with sunrise and sunset descriptions, icons and times


  function _returnSunriseSunset(sunriseSunsetTimes) {
    var row = document.createElement("div");
    row.classList.add("row", "sun");
    sunriseSunsetTimes.forEach(function (time, index) {
      var container = document.createElement("div");
      container.classList.add("sunriseSunset");
      row.appendChild(container);
      var description = document.createElement("p");
      container.appendChild(description);
      var icon = document.createElement("img");
      container.appendChild(icon);
      var timeElement = document.createElement("span");
      container.appendChild(timeElement);
      timeElement.textContent = time;

      if (index === 0) {
        description.textContent = "Východ";
        icon.src = "assets/sunrise.svg";
      } else {
        description.textContent = "Západ";
        icon.src = "assets/sunset.svg";
      }
    });
    return row;
  } // return new icon element for given icon code


  function _returnIcon(iconCode) {
    var img = document.createElement("img");
    var iconPath = _Icons__WEBPACK_IMPORTED_MODULE_1__.Icons.get(iconCode);
    img.src = iconPath;
    return img;
  } // favorite (star) button


  function favoriteListener() {
    var favoriteBtn = document.querySelector("button.favorite");
    favoriteBtn.addEventListener("click", function () {
      var city = document.querySelector("h1.city").textContent;

      if (favoriteBtn.classList.contains("on")) {
        favoriteOff();

        _removeCityBtn(city);

        _Storage__WEBPACK_IMPORTED_MODULE_2__.Storage.removeFavoriteCity(city);
      } else {
        favoriteOn();

        _createCityBtn(city);

        _Storage__WEBPACK_IMPORTED_MODULE_2__.Storage.addFavoriteCity(city);
      }
    });
  } // toggle favorite button (star) visual state


  function favoriteOn() {
    var favoriteBtn = document.querySelector("img.favorite");
    favoriteBtn.src = "./assets/star.svg";
    favoriteBtn.parentElement.classList.add("on");
  }

  function favoriteOff() {
    var favoriteBtn = document.querySelector("img.favorite");
    favoriteBtn.src = "./assets/star-outline.svg";
    favoriteBtn.parentElement.classList.remove("on");
  }

  function _createCityBtn(cityName) {
    var favorites = document.querySelector(".favorites");
    var cityBtn = document.createElement("button");
    cityBtn.textContent = cityName; // replace spaces with dashes because html doesn't like spaces

    cityBtn.dataset.city = cityName.replace(/\s/g, "-");
    cityBtn.addEventListener("click", function () {
      _hideSidebar();

      (0,_index__WEBPACK_IMPORTED_MODULE_3__.search)(cityName); // trigger new search
    });
    favorites.appendChild(cityBtn);
  }

  function _removeCityBtn(cityName) {
    var cityBtn = document.querySelector("[data-city=".concat(cityName.replace(/\s/g, "-"), "]"));
    cityBtn.remove();
  } // creates new css rule to hide column


  function _hideColumn(columnName) {
    document.styleSheets[1].insertRule(".".concat(columnName, " { display: none !important; }"));
  } // removes previously created rule


  function _restoreColumn(columnName) {
    var styleSheet = document.styleSheets[1];
    var rules = styleSheet.cssRules; // Custom loop incrementing because we are gonna loop over all
    // rules and we need their indexes. Sadly CSSRuleList doesn't
    // have any usual array methods

    var ruleIndex = 0;

    var _iterator5 = _createForOfIteratorHelper(rules),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var rule = _step5.value;
        var ruleText = rule.cssText; // if the rule matches the unwanted rule, remove it and return

        if (ruleText === ".".concat(columnName, " { display: none !important; }")) {
          styleSheet.deleteRule(ruleIndex);
          return;
        }

        ruleIndex++;
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }

  return {
    dynamicInput: dynamicInput,
    displayNow: displayNow,
    showLoader: showLoader,
    hideLoader: hideLoader,
    sidebarInit: sidebarInit,
    wipeTabs: wipeTabs,
    createTodayTab: createTodayTab,
    createDayTab: createDayTab,
    favoriteOn: favoriteOn,
    favoriteOff: favoriteOff,
    favoriteListener: favoriteListener
  };
}();

/***/ }),

/***/ "./src/modules/Geocode.ts":
/*!********************************!*\
  !*** ./src/modules/Geocode.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geocode": () => (/* binding */ Geocode)
/* harmony export */ });
/* harmony import */ var _Cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cache */ "./src/modules/Cache.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var Geocode = function () {
  // module for interacting with Nominatim API (https://nominatim.org/)
  // returns [Longitude, Latitude, Altitude]
  function getCoords(_x) {
    return _getCoords.apply(this, arguments);
  }

  function _getCoords() {
    _getCoords = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(city) {
      var response, responseData, point, coordsLong, coordsRounded, altitude;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _getResponse(city);

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();

            case 5:
              responseData = _context.sent;
              point = responseData.features[0];
              coordsLong = point.geometry.coordinates;
              coordsRounded = [];
              coordsLong.forEach(function (coord, index) {
                coordsRounded[index] = parseFloat(coord.toFixed(4)); // MET api allows only 4 decimal numbers
              });
              _context.next = 12;
              return _getAltitude(coordsRounded);

            case 12:
              altitude = _context.sent;
              coordsRounded.push(altitude);
              return _context.abrupt("return", coordsRounded);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getCoords.apply(this, arguments);
  }

  function _getResponse(_x2) {
    return _getResponse2.apply(this, arguments);
  }

  function _getResponse2() {
    _getResponse2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(city) {
      var cityFixed, format, limit, email, url, response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              cityFixed = city.replace(/ /g, "+"); // replace spaces with +

              format = "geocodejson"; // output format

              limit = "1"; // maximum number of returned results

              email = "keadr23@gmail.com"; // identification

              url = "https://nominatim.openstreetmap.org/search?city=".concat(cityFixed, "&format=").concat(format, "&limit=").concat(limit, "&email=").concat(email);
              _context2.next = 7;
              return _Cache__WEBPACK_IMPORTED_MODULE_0__.Cache.getResponse(url);

            case 7:
              response = _context2.sent;
              return _context2.abrupt("return", response);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _getResponse2.apply(this, arguments);
  }

  function _getAltitude(_x3) {
    return _getAltitude2.apply(this, arguments);
  }

  function _getAltitude2() {
    _getAltitude2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(coords) {
      var url, response, responseData, elevation;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // uses Open-Elevation API (https://open-elevation.com/)
              url = "https://api.open-elevation.com/api/v1/lookup?locations=".concat(coords[1], ",").concat(coords[0]);
              _context3.next = 3;
              return _Cache__WEBPACK_IMPORTED_MODULE_0__.Cache.getResponse(url);

            case 3:
              response = _context3.sent;
              _context3.next = 6;
              return response.json();

            case 6:
              responseData = _context3.sent;
              elevation = responseData.results[0].elevation;
              return _context3.abrupt("return", elevation);

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _getAltitude2.apply(this, arguments);
  }

  return {
    getCoords: getCoords
  };
}();

/***/ }),

/***/ "./src/modules/Icons.ts":
/*!******************************!*\
  !*** ./src/modules/Icons.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Icons": () => (/* binding */ Icons)
/* harmony export */ });
var Icons = function () {
  // modules for loading icons with webpack and resolving paths to them
  var _iconsPaths = {}; // Makes sure webpack loads all icons to "dist/assets/".
  // Also saves the generated icon's paths to "_icons" object - doesn't actually work in prod

  var _initImportAll = function () {
    var images = __webpack_require__("./src/weatherIcons sync \\.svg$");

    var iconsGeneral = __webpack_require__("./src/icons sync \\.svg$");

    images.keys().forEach(function (filename) {
      // slice off the extension and the "./" part
      var trimmedFilename = filename.substring(2).slice(0, -4);
      _iconsPaths[trimmedFilename] = images(filename);
    });
  }(); // given name of icon, returns path to it


  function get(iconName) {
    return "./assets/".concat(iconName, ".svg");
  }

  return {
    get: get
  };
}();

/***/ }),

/***/ "./src/modules/MET.ts":
/*!****************************!*\
  !*** ./src/modules/MET.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MET": () => (/* binding */ MET)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var MET = function () {
  // module for interacting with MET API (https://api.met.no/)
  var _LocationforecastData;

  var _SunriseData;

  function getLocationforecast(_x) {
    return _getLocationforecast.apply(this, arguments);
  } // converts string times to Date objects and stores it


  function _getLocationforecast() {
    _getLocationforecast = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(coords) {
      var url, request, response, responseData, updatedDate;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              url = "https://api.met.no/weatherapi/locationforecast/2.0/compact?&lon=".concat(coords[0], "&lat=").concat(coords[1], "&altitude=").concat(coords[2]); // user agent to comply with MET terms of service
              // doesn't actually work in browsers
              // const customHeaders = new Headers({
              //   "User-Agent": "bladesheng.github.io/weather-app/ keadr23@gmail.com"
              // });

              request = new Request(url, {
                method: "GET",
                // headers: customHeaders,
                cache: "default" // return response from cache (if it's not expired)

              });
              _context.next = 5;
              return fetch(request);

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              responseData = _context.sent;
              updatedDate = responseData.properties.meta.updated_at;
              console.log("Last model update: " + updatedDate); // remove the last time point because it doesn't have icon
              // and it is weird

              responseData.properties.timeseries.pop(); // store all the time points in array

              _StoreLocationforecast(responseData.properties.timeseries);

              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 15]]);
    }));
    return _getLocationforecast.apply(this, arguments);
  }

  function _StoreLocationforecast(timePointsArray) {
    var _iterator = _createForOfIteratorHelper(timePointsArray),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var timePoint = _step.value;
        timePoint.time = new Date(timePoint.time);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    _LocationforecastData = timePointsArray;
  }

  function returnLocationforecast() {
    return _LocationforecastData;
  }

  function returnSunrise() {
    return _SunriseData;
  }

  function getSunrise(_x2) {
    return _getSunrise.apply(this, arguments);
  } // converts Date object to offset formated as: "+02:00" or "-02:00"


  function _getSunrise() {
    _getSunrise = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(coords) {
      var dateObj, year, month, monthPadded, day, offset, days, url, request, response, responseData, timePointsArray;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              dateObj = new Date();
              year = dateObj.getUTCFullYear();
              month = dateObj.getUTCMonth() + 1;
              monthPadded = String(month).padStart(2, "0");
              day = dateObj.getUTCDate();
              offset = _dateToOffset(dateObj);
              days = 10; // number of days forward to include in response
              // Locationforecast returns data for next ~10 days, so same number is used here

              url = "https://api.met.no/weatherapi/sunrise/2.0/.json?lat=".concat(coords[1], "&lon=").concat(coords[0], "&date=").concat(year, "-").concat(monthPadded, "-").concat(day, "&offset=").concat(offset, "&days=").concat(days);
              request = new Request(url, {
                method: "GET",
                cache: "default" // return response from cache (if it's not expired)

              });
              _context2.next = 12;
              return fetch(request);

            case 12:
              response = _context2.sent;
              _context2.next = 15;
              return response.json();

            case 15:
              responseData = _context2.sent;
              timePointsArray = responseData.location.time; // store all the time points in array

              _StoreSunrise(timePointsArray.slice(0, days)); // exclude any extra days that are returned


              _context2.next = 23;
              break;

            case 20:
              _context2.prev = 20;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 23:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 20]]);
    }));
    return _getSunrise.apply(this, arguments);
  }

  function _dateToOffset(dateObj) {
    var offsetMinutes = dateObj.getTimezoneOffset();
    var offsetHours = offsetMinutes / -60;
    var isNegative = offsetHours < 0; // if the timezone offset is something like: -02:00

    if (isNegative) {
      offsetHours = -offsetHours; // remove the minus sign
    }

    var paddedOffsetHours = String(offsetHours).padStart(2, "0");

    if (isNegative) {
      paddedOffsetHours = "-".concat(paddedOffsetHours); // add back the minus sign
    } else {
      paddedOffsetHours = "+".concat(paddedOffsetHours); // add plus sign
    }

    var paddedOffsetHoursFull = "".concat(paddedOffsetHours, ":00");
    return paddedOffsetHoursFull;
  } // converts string times to Date objects and stores it


  function _StoreSunrise(timePointsArray) {
    var _iterator2 = _createForOfIteratorHelper(timePointsArray),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var timePoint = _step2.value;
        timePoint.date = new Date(timePoint.date);
        timePoint.sunrise.time = new Date(timePoint.sunrise.time);
        timePoint.sunset.time = new Date(timePoint.sunset.time);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    _SunriseData = timePointsArray;
  }

  return {
    getLocationforecast: getLocationforecast,
    getSunrise: getSunrise,
    returnLocationforecast: returnLocationforecast,
    returnSunrise: returnSunrise
  };
}();

/***/ }),

/***/ "./src/modules/Storage.ts":
/*!********************************!*\
  !*** ./src/modules/Storage.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Storage": () => (/* binding */ Storage)
/* harmony export */ });
var Storage = function () {
  var lastCity;

  var _favoriteCities;

  var _controls; // save everything to local storage


  function _save() {
    localStorage.setItem("lastCity", JSON.stringify(lastCity));
    localStorage.setItem("favoriteCities", JSON.stringify(_favoriteCities));
    localStorage.setItem("columnControls", JSON.stringify(_controls));
  } // retrieve everything from local storage


  function retrieve() {
    // default city
    lastCity = "Český Dub";
    _favoriteCities = ["Český Dub"]; // default colums options

    _controls = {
      clouds: false,
      humidity: false,
      pressure: false,
      wind: true
    }; // if there is something saved,
    // retrieve it instead of using the default value

    if (localStorage.getItem("lastCity") !== null) {
      lastCity = JSON.parse(localStorage.getItem("lastCity"));
    }

    if (localStorage.getItem("favoriteCities") !== null) {
      _favoriteCities = JSON.parse(localStorage.getItem("favoriteCities"));
    }

    if (localStorage.getItem("columnControls") !== null) {
      _controls = JSON.parse(localStorage.getItem("columnControls"));
    }
  }

  function addFavoriteCity(city) {
    _favoriteCities.push(city);

    _save();
  }

  function removeFavoriteCity(city) {
    var newFavoriteCities = _favoriteCities.filter(function (element) {
      return element !== city;
    });

    _favoriteCities = newFavoriteCities;

    _save();
  } // returns true if city is in favorites


  function isFavorite(city) {
    return _favoriteCities.includes(city);
  }

  function returnFavorites() {
    return _favoriteCities;
  }

  function returnControlsValue(key) {
    return _controls[key];
  } // change value of column control option and save it


  function setControls(key, value) {
    _controls[key] = value;

    _save();
  }

  return {
    retrieve: retrieve,
    addFavoriteCity: addFavoriteCity,
    removeFavoriteCity: removeFavoriteCity,
    isFavorite: isFavorite,
    returnFavorites: returnFavorites,
    returnControlsValue: returnControlsValue,
    setControls: setControls,

    set lastCity(value) {
      lastCity = value;

      _save();
    },

    get lastCity() {
      return lastCity;
    }

  };
}();

/***/ }),

/***/ "./src/modules/Weather.ts":
/*!********************************!*\
  !*** ./src/modules/Weather.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Weather": () => (/* binding */ Weather)
/* harmony export */ });
/* harmony import */ var _MET__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MET */ "./src/modules/MET.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var Weather = function () {
  // module for returning weather numbers in more readable format
  var _LocationforecastPoints;

  var _SunrisePoints;

  function init() {
    _LocationforecastPoints = _MET__WEBPACK_IMPORTED_MODULE_0__.MET.returnLocationforecast();
    _SunrisePoints = _MET__WEBPACK_IMPORTED_MODULE_0__.MET.returnSunrise();
  }

  function returnNow() {
    var currentTimePoint = _LocationforecastPoints[0];
    var details = currentTimePoint.data.instant.details;
    var airTemp = details.air_temperature;

    var minMax = _minMaxTemp(new Date().getDate());

    var minTemp = minMax.minTemp;
    var maxTemp = minMax.maxTemp;
    var iconCode = currentTimePoint.data.next_1_hours.summary.symbol_code;
    return {
      airTemp: airTemp,
      minTemp: minTemp,
      maxTemp: maxTemp,
      iconCode: iconCode
    };
  } // returns weather points and sunrise point for given date


  function returnForDate(wantedDate) {
    var weatherPoints = [];
    var sunrisePoint;

    var _iterator = _createForOfIteratorHelper(_LocationforecastPoints),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var timePoint = _step.value;

        if (_typeof(timePoint.time) === "object") {
          var date = timePoint.time.getDate(); // add only wanted date's time points

          if (date === wantedDate) {
            weatherPoints.push(timePoint);
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = _createForOfIteratorHelper(_SunrisePoints),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _timePoint = _step2.value;

        if (_typeof(_timePoint.date) === "object") {
          var _date = _timePoint.date.getDate(); // add only wanted date's time point


          if (_date === wantedDate) {
            sunrisePoint = _timePoint;
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return {
      weatherPoints: weatherPoints,
      sunrisePoint: sunrisePoint
    };
  } // returns minimum and maximum temperature for given date


  function _minMaxTemp(wantedDate) {
    var weatherPoints = returnForDate(wantedDate).weatherPoints;
    var temperatures = [];

    var _iterator3 = _createForOfIteratorHelper(weatherPoints),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var timePoint = _step3.value;
        var temperature = timePoint.data.instant.details.air_temperature;
        temperatures.push(temperature);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    var minTemp = Math.min.apply(Math, temperatures);
    var maxTemp = Math.max.apply(Math, temperatures);
    return {
      minTemp: minTemp,
      maxTemp: maxTemp
    };
  }

  return {
    init: init,
    returnNow: returnNow,
    returnForDate: returnForDate
  };
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  height: -webkit-fill-available;\n}\n\nhtml,\nbody {\n  width: 100vw;\n  max-width: 100%;\n  overflow-x: hidden;\n  font-family: \"Roboto\", sans-serif;\n  color: rgb(250, 250, 250);\n  background-color: rgb(2, 10, 20);\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.dynamicText,\n.dynamicInput {\n  order: 1;\n}\n\n.dynamicText.active svg {\n  color: transparent;\n}\n\n.dynamicInput {\n  display: none;\n}\n\n.dynamicInput.active {\n  display: inline-block;\n}\n\n.loader {\n  position: fixed;\n  z-index: 10;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: none;\n  align-items: center;\n  justify-content: center;\n}\n.loader .loaderIcon {\n  width: 15rem;\n}\n.loader .loaderIcon .sunny-body path {\n  fill: rgb(237, 201, 81);\n}\n.loader .loaderIcon .sunny-long-ray {\n  transform-origin: 50% 50%;\n  animation: spin 9s linear infinite;\n}\n.loader .loaderIcon .sunny-long-ray path {\n  fill: rgb(237, 201, 81);\n}\n.loader .loaderIcon .sunny-short-ray {\n  transform-origin: 50% 50%;\n  animation: spin 9s linear infinite;\n}\n.loader .loaderIcon .sunny-short-ray path {\n  fill: rgb(237, 201, 81);\n}\n@keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n.sidebar {\n  z-index: 5;\n  height: 100vh;\n  width: 40vw;\n  position: fixed;\n  left: 0;\n  transition: left 0.4s ease;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  padding: 1rem;\n  background-color: rgb(23, 31, 40);\n  border-right: 3px solid rgb(57, 74, 92);\n}\n.sidebar .controls {\n  flex: 0 1 auto;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-auto-rows: 1.5rem;\n  column-gap: 1rem;\n  row-gap: 0.5rem;\n  align-items: center;\n}\n.sidebar .controls input {\n  accent-color: rgb(0, 187, 245);\n}\n.sidebar .favorites {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  font-size: 1.2rem;\n}\n.sidebar .favorites button {\n  font-size: 1rem;\n  color: rgb(211, 219, 221);\n  font-family: \"Roboto\", sans-serif;\n  text-align: start;\n  background: none;\n  border: none;\n}\n.sidebar .favorites button:hover {\n  color: rgb(231, 243, 245);\n}\n.sidebar .credits {\n  flex: 0 0 auto;\n  text-align: center;\n  font-size: 0.6rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.sidebar .credits a {\n  text-decoration: none;\n  color: rgb(0, 187, 245);\n}\n\n.sidebar.hidden {\n  left: -40vw;\n  transition: left 0.4s ease;\n}\n\nbutton.burger {\n  position: absolute;\n  left: calc(5vw - 0.9rem);\n  top: 0.6rem;\n  width: 1.8rem;\n  background: none;\n  border: none;\n}\nbutton.burger svg {\n  color: rgb(250, 250, 250);\n}\n\nheader {\n  flex: 0 0 auto;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 10vw auto 10vw 10vw;\n  grid-template-rows: 3rem;\n  justify-items: center;\n  align-items: center;\n  gap: 1rem;\n  background-color: rgb(23, 31, 40);\n}\nheader .city {\n  grid-column: 2/3;\n  grid-row: 1/2;\n  font-size: 1.4rem;\n  font-weight: 500;\n}\nheader input.search {\n  grid-column: 2/3;\n  grid-row: 1/2;\n  width: 70vw;\n  display: none;\n  height: 2rem;\n  padding: 0 0.6em;\n  font-size: 1.4rem;\n  font-weight: 400;\n  color: rgb(250, 250, 250);\n  background-color: rgb(2, 10, 20);\n  outline: none;\n  border: 2px solid rgb(0, 187, 245);\n  border-radius: 1rem;\n}\nheader button.favorite {\n  grid-column: 3/4;\n  width: 1.8rem;\n  filter: invert(99%) sepia(1%) saturate(165%) hue-rotate(72deg) brightness(117%) contrast(96%);\n  background: none;\n  border: none;\n}\nheader button.search {\n  grid-column: 4/5;\n  width: 1.8rem;\n  background: none;\n  border: none;\n}\nheader button.search svg {\n  color: rgb(250, 250, 250);\n}\n\nmain {\n  flex: 1 1 auto;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-items: center;\n  gap: 5vw;\n  padding: 3vw;\n}\nmain .dayTab {\n  padding: 1rem;\n  border-radius: 5px;\n  background-color: rgb(23, 31, 40);\n}\nmain .dayTab .now {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  justify-items: center;\n  align-items: center;\n}\nmain .dayTab .now img {\n  height: 3rem;\n  width: 3rem;\n}\nmain .dayTab .now h1 {\n  font-size: 4rem;\n  font-weight: 700;\n}\nmain .dayTab .now h2 {\n  font-size: 1.3rem;\n  font-weight: 400;\n  color: rgb(211, 219, 221);\n}\nmain .hourlyBreakdown {\n  display: grid;\n}\nmain .hourlyBreakdown .descriptions {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 2rem;\n  grid-auto-columns: 1fr;\n  grid-auto-flow: column;\n  align-items: center;\n  font-size: 0.7rem;\n  color: rgb(211, 219, 221);\n}\nmain .hourlyBreakdown .descriptions .temperature {\n  justify-self: center;\n}\nmain .hourlyBreakdown .data {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-auto-columns: 1fr;\n  grid-auto-rows: 2rem;\n  grid-auto-flow: column;\n  align-items: center;\n  border-bottom: 1px solid rgb(57, 74, 92);\n}\nmain .hourlyBreakdown .data .time {\n  color: rgb(211, 219, 221);\n}\nmain .hourlyBreakdown .data img {\n  justify-self: center;\n  width: 1.5rem;\n}\nmain .hourlyBreakdown .data .temperature {\n  justify-self: center;\n  color: rgb(255, 45, 64);\n}\nmain .hourlyBreakdown .data .precipitation {\n  color: rgb(0, 187, 245);\n}\nmain .hourlyBreakdown .data .wind {\n  display: flex;\n  align-items: center;\n}\nmain .hourlyBreakdown .data .wind img {\n  width: 1.5rem;\n  filter: invert(99%) sepia(1%) saturate(2248%) hue-rotate(162deg) brightness(96%) contrast(80%);\n}\nmain .hourlyBreakdown .sun {\n  display: grid;\n  justify-items: center;\n  grid-template-columns: 1fr 1fr;\n}\nmain .hourlyBreakdown .sun .sunriseSunset {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n}\nmain .hourlyBreakdown .sun .sunriseSunset p {\n  justify-self: center;\n  grid-column: 1/3;\n}\nmain .hourlyBreakdown .sun .sunriseSunset img {\n  grid-column: 1/2;\n  width: 2rem;\n  filter: invert(99%) sepia(1%) saturate(2248%) hue-rotate(162deg) brightness(96%) contrast(80%);\n}\nmain .hourlyBreakdown .sun .sunriseSunset span {\n  grid-column: 2/3;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACE,UAAA;EACA,SAAA;EACA,sBAAA;AACF;;AAYA;EACE,8BAAA;AATF;;AAYA;;EAEE,YAAA;EACA,eAAA;EACA,kBAAA;EAEA,iCApBW;EAqBX,yBApBmB;EAqBnB,gCAfgB;AAKlB;;AAaA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AAVF;;AAcA;;EAEE,QAAA;AAXF;;AAgBE;EACE,kBAAA;AAbJ;;AAiBA;EACE,aAAA;AAdF;;AAgBA;EACE,qBAAA;AAbF;;AAgBA;EACE,eAAA;EACA,WAAA;EAEA,YAAA;EACA,aAAA;EAEA,oCAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;AAhBF;AAkBE;EACE,YAAA;AAhBJ;AAmBI;EACE,uBAHU;AAdhB;AAoBI;EACE,yBAAA;EACA,kCAAA;AAlBN;AAqBI;EACE,uBAZU;AAPhB;AAsBI;EACE,yBAAA;EACA,kCAAA;AApBN;AAuBI;EACE,uBArBU;AAAhB;AAwBI;EACE;IACE,iCAAA;IACA,yBAAA;EAtBN;AACF;;AA4BA;EACE,UAAA;EACA,aAAA;EACA,WAAA;EAEA,eAAA;EACA,OAAA;EACA,0BARkB;EAUlB,aAAA;EACA,sBAAA;EACA,SAAA;EACA,aAAA;EAEA,iCA5Gc;EA6Gd,uCAAA;AA5BF;AA8BE;EACE,cAAA;EAEA,aAAA;EACA,+BAAA;EACA,sBAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;AA7BJ;AA+BI;EACE,8BA5HY;AA+FlB;AAiCE;EACE,cAAA;EAEA,aAAA;EACA,sBAAA;EACA,SAAA;EAEA,iBAAA;AAjCJ;AAmCI;EACE,eAAA;EACA,yBA7IiB;EA8IjB,iCAhJO;EAiJP,iBAAA;EAEA,gBAAA;EACA,YAAA;AAlCN;AAqCI;EACE,yBAAA;AAnCN;AAuCE;EACE,cAAA;EAEA,kBAAA;EACA,iBAAA;EAEA,aAAA;EACA,sBAAA;EACA,WAAA;AAvCJ;AAyCI;EACE,qBAAA;EACA,uBApKY;AA6HlB;;AA2CA;EACE,WAAA;EACA,0BA3EkB;AAmCpB;;AA2CA;EACE,kBAAA;EACA,wBAAA;EACA,WAAA;EAEA,aAAA;EAKA,gBAAA;EACA,YAAA;AA7CF;AAyCE;EACE,yBAxLiB;AAiJrB;;AA6CA;EACE,cAAA;EAEA,YAAA;EAEA,aAAA;EACA,0CAAA;EACA,wBAAA;EACA,qBAAA;EACA,mBAAA;EACA,SAAA;EAEA,iCArMc;AAwJhB;AA+CE;EACE,gBAAA;EACA,aAAA;EAEA,iBAAA;EACA,gBAAA;AA9CJ;AAiDE;EACE,gBAAA;EACA,aAAA;EAEA,WAAA;EACA,aAAA;EACA,YAAA;EACA,gBAAA;EAEA,iBAAA;EACA,gBAAA;EACA,yBA/NiB;EAgOjB,gCA1Nc;EA4Nd,aAAA;EACA,kCAAA;EACA,mBAAA;AAlDJ;AAqDE;EACE,gBAAA;EACA,aAAA;EAGA,6FAAA;EAGA,gBAAA;EACA,YAAA;AAvDJ;AA0DE;EACE,gBAAA;EACA,aAAA;EAKA,gBAAA;EACA,YAAA;AA5DJ;AAwDI;EACE,yBAxPe;AAkMrB;;AA6DA;EACE,cAAA;EAEA,aAAA;EACA,0BAAA;EACA,qBAAA;EACA,QAAA;EACA,YAAA;AA3DF;AA6DE;EACE,aAAA;EAEA,kBAAA;EAyBA,iCA/RY;AA2MhB;AA6DI;EACE,aAAA;EACA,kCAAA;EACA,qBAAA;EACA,mBAAA;AA3DN;AA6DM;EACE,YAAA;EACA,WAAA;AA3DR;AA8DM;EACE,eAAA;EACA,gBAAA;AA5DR;AA+DM;EACE,iBAAA;EACA,gBAAA;EACA,yBA/Re;AAkOvB;AAoEE;EACE,aAAA;AAlEJ;AAoEI;EACE,aAAA;EACA,8BAAA;EACA,wBAAA;EACA,sBAAA;EACA,sBAAA;EACA,mBAAA;EAEA,iBAAA;EACA,yBAlTiB;AA+OvB;AAqEM;EACE,oBAAA;AAnER;AAuEI;EACE,aAAA;EACA,sCAAA;EACA,sBAAA;EACA,oBAAA;EACA,sBAAA;EACA,mBAAA;EAEA,wCAAA;AAtEN;AAwEM;EACE,yBApUe;AA8PvB;AAyEM;EACE,oBAAA;EACA,aAAA;AAvER;AA0EM;EACE,oBAAA;EACA,uBA7US;AAqQjB;AA2EM;EACE,uBAhVU;AAuQlB;AA4EM;EACE,aAAA;EACA,mBAAA;AA1ER;AA4EQ;EACE,aAAA;EAGA,8FAAA;AA5EV;AAkFI;EACE,aAAA;EACA,qBAAA;EACA,8BAAA;AAhFN;AAkFM;EACE,aAAA;EACA,qBAAA;EACA,mBAAA;AAhFR;AAkFQ;EACE,oBAAA;EACA,gBAAA;AAhFV;AAmFQ;EACE,gBAAA;EACA,WAAA;EAGA,8FAAA;AAnFV;AAuFQ;EACE,gBAAA;AArFV","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n$font-stack: \"Roboto\", sans-serif;\n$font-color-primary: rgb(250, 250, 250);\n$font-color-secondary: rgb(211, 219, 221);\n$font-color-red: rgb(255, 45, 64);\n$font-color-blue: rgb(0, 187, 245);\n\n$color-primary: rgb(23, 31, 40);\n$color-secondary: rgb(2, 10, 20);\n$color-blue: rgb(57, 74, 92);\n\nhtml {\n  height: -webkit-fill-available;\n}\n\nhtml,\nbody {\n  width: 100vw;\n  max-width: 100%;\n  overflow-x: hidden;\n\n  font-family: $font-stack;\n  color: $font-color-primary;\n  background-color: $color-secondary;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n// stuff for hiding / showing dynamic input field\n.dynamicText,\n.dynamicInput {\n  order: 1;\n}\n\n.dynamicText.active {\n  //display: none;\n  svg {\n    color: transparent;\n  }\n}\n\n.dynamicInput {\n  display: none;\n}\n.dynamicInput.active {\n  display: inline-block;\n}\n\n.loader {\n  position: fixed;\n  z-index: 10;\n\n  width: 100vw;\n  height: 100vh;\n\n  background-color: rgba(0, 0, 0, 0.7);\n\n  display: none; // hidden by default, \"flex\" to show\n  align-items: center;\n  justify-content: center;\n\n  .loaderIcon {\n    width: 15rem;\n    $color-sun: rgb(237, 201, 81);\n\n    .sunny-body path {\n      fill: $color-sun;\n    }\n\n    .sunny-long-ray {\n      transform-origin: 50% 50%;\n      animation: spin 9s linear infinite;\n    }\n\n    .sunny-long-ray path {\n      fill: $color-sun;\n    }\n\n    .sunny-short-ray {\n      transform-origin: 50% 50%;\n      animation: spin 9s linear infinite;\n    }\n\n    .sunny-short-ray path {\n      fill: $color-sun;\n    }\n\n    @keyframes spin {\n      100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n      }\n    }\n  }\n}\n\n$sidebarTransition: left 0.4s ease;\n.sidebar {\n  z-index: 5;\n  height: 100vh;\n  width: 40vw;\n\n  position: fixed;\n  left: 0;\n  transition: $sidebarTransition;\n\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  padding: 1rem;\n\n  background-color: $color-primary;\n  border-right: 3px solid $color-blue;\n\n  .controls {\n    flex: 0 1 auto;\n\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-auto-rows: 1.5rem;\n    column-gap: 1rem;\n    row-gap: 0.5rem;\n    align-items: center;\n\n    input {\n      accent-color: $font-color-blue;\n    }\n  }\n\n  .favorites {\n    flex: 1 1 auto;\n\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n\n    font-size: 1.2rem;\n\n    button {\n      font-size: 1rem;\n      color: $font-color-secondary;\n      font-family: $font-stack;\n      text-align: start;\n\n      background: none;\n      border: none;\n    }\n\n    button:hover {\n      color: rgb(231, 243, 245);\n    }\n  }\n\n  .credits {\n    flex: 0 0 auto;\n\n    text-align: center;\n    font-size: 0.6rem;\n\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n\n    a {\n      text-decoration: none;\n      color: $font-color-blue;\n    }\n  }\n}\n.sidebar.hidden {\n  left: -40vw;\n  transition: $sidebarTransition;\n}\n\nbutton.burger {\n  position: absolute;\n  left: calc(5vw - 0.9rem);\n  top: 0.6rem;\n\n  width: 1.8rem;\n\n  svg {\n    color: $font-color-primary;\n  }\n  background: none;\n  border: none;\n}\n\nheader {\n  flex: 0 0 auto;\n\n  width: 100vw;\n\n  display: grid;\n  grid-template-columns: 10vw auto 10vw 10vw;\n  grid-template-rows: 3rem;\n  justify-items: center;\n  align-items: center;\n  gap: 1rem;\n\n  background-color: $color-primary;\n\n  .city {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n\n    font-size: 1.4rem;\n    font-weight: 500;\n  }\n\n  input.search {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n\n    width: 70vw;\n    display: none; // hidden by default\n    height: 2rem;\n    padding: 0 0.6em;\n\n    font-size: 1.4rem;\n    font-weight: 400;\n    color: $font-color-primary;\n    background-color: $color-secondary;\n\n    outline: none;\n    border: 2px solid $font-color-blue;\n    border-radius: 1rem;\n  }\n\n  button.favorite {\n    grid-column: 3 / 4;\n    width: 1.8rem;\n\n    // https://codepen.io/sosuke/pen/Pjoqqp\n    filter: invert(99%) sepia(1%) saturate(165%) hue-rotate(72deg)\n      brightness(117%) contrast(96%);\n\n    background: none;\n    border: none;\n  }\n\n  button.search {\n    grid-column: 4 / 5;\n    width: 1.8rem;\n\n    svg {\n      color: $font-color-primary;\n    }\n    background: none;\n    border: none;\n  }\n}\n\nmain {\n  flex: 1 1 auto;\n\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-items: center;\n  gap: 5vw;\n  padding: 3vw;\n\n  .dayTab {\n    padding: 1rem;\n\n    border-radius: 5px;\n\n    .now {\n      display: grid;\n      grid-template-columns: 1fr 2fr 1fr;\n      justify-items: center;\n      align-items: center;\n\n      img {\n        height: 3rem;\n        width: 3rem;\n      }\n\n      h1 {\n        font-size: 4rem;\n        font-weight: 700;\n      }\n\n      h2 {\n        font-size: 1.3rem;\n        font-weight: 400;\n        color: $font-color-secondary;\n      }\n    }\n\n    background-color: $color-primary;\n  }\n\n  .hourlyBreakdown {\n    display: grid;\n\n    .descriptions {\n      display: grid;\n      grid-template-columns: 1fr 2fr;\n      grid-template-rows: 2rem;\n      grid-auto-columns: 1fr;\n      grid-auto-flow: column;\n      align-items: center;\n\n      font-size: 0.7rem;\n      color: $font-color-secondary;\n\n      .temperature {\n        justify-self: center;\n      }\n    }\n\n    .data {\n      display: grid;\n      grid-template-columns: 1fr 1fr 1fr 1fr;\n      grid-auto-columns: 1fr;\n      grid-auto-rows: 2rem;\n      grid-auto-flow: column;\n      align-items: center;\n\n      border-bottom: 1px solid $color-blue;\n\n      .time {\n        color: $font-color-secondary;\n      }\n\n      img {\n        justify-self: center;\n        width: 1.5rem;\n      }\n\n      .temperature {\n        justify-self: center;\n        color: $font-color-red;\n      }\n\n      .precipitation {\n        color: $font-color-blue;\n      }\n\n      .wind {\n        display: flex;\n        align-items: center;\n\n        img {\n          width: 1.5rem;\n\n          // https://codepen.io/sosuke/pen/Pjoqqp\n          filter: invert(99%) sepia(1%) saturate(2248%) hue-rotate(162deg)\n            brightness(96%) contrast(80%);\n        }\n      }\n    }\n\n    .sun {\n      display: grid;\n      justify-items: center;\n      grid-template-columns: 1fr 1fr;\n\n      .sunriseSunset {\n        display: grid;\n        justify-items: center;\n        align-items: center;\n\n        p {\n          justify-self: center;\n          grid-column: 1 / 3;\n        }\n\n        img {\n          grid-column: 1 / 2;\n          width: 2rem;\n\n          // https://codepen.io/sosuke/pen/Pjoqqp\n          filter: invert(99%) sepia(1%) saturate(2248%) hue-rotate(162deg)\n            brightness(96%) contrast(80%);\n        }\n\n        span {\n          grid-column: 2 / 3;\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/icons sync \\.svg$":
/*!*********************************************!*\
  !*** ./src/icons/ sync nonrecursive \.svg$ ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./arrow.svg": "./src/icons/arrow.svg",
	"./star-outline.svg": "./src/icons/star-outline.svg",
	"./star.svg": "./src/icons/star.svg",
	"./sunrise.svg": "./src/icons/sunrise.svg",
	"./sunset.svg": "./src/icons/sunset.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/icons sync \\.svg$";

/***/ }),

/***/ "./src/weatherIcons sync \\.svg$":
/*!****************************************************!*\
  !*** ./src/weatherIcons/ sync nonrecursive \.svg$ ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./clearsky_day.svg": "./src/weatherIcons/clearsky_day.svg",
	"./clearsky_night.svg": "./src/weatherIcons/clearsky_night.svg",
	"./clearsky_polartwilight.svg": "./src/weatherIcons/clearsky_polartwilight.svg",
	"./cloudy.svg": "./src/weatherIcons/cloudy.svg",
	"./fair_day.svg": "./src/weatherIcons/fair_day.svg",
	"./fair_night.svg": "./src/weatherIcons/fair_night.svg",
	"./fair_polartwilight.svg": "./src/weatherIcons/fair_polartwilight.svg",
	"./fog.svg": "./src/weatherIcons/fog.svg",
	"./heavyrain.svg": "./src/weatherIcons/heavyrain.svg",
	"./heavyrainandthunder.svg": "./src/weatherIcons/heavyrainandthunder.svg",
	"./heavyrainshowers_day.svg": "./src/weatherIcons/heavyrainshowers_day.svg",
	"./heavyrainshowers_night.svg": "./src/weatherIcons/heavyrainshowers_night.svg",
	"./heavyrainshowers_polartwilight.svg": "./src/weatherIcons/heavyrainshowers_polartwilight.svg",
	"./heavyrainshowersandthunder_day.svg": "./src/weatherIcons/heavyrainshowersandthunder_day.svg",
	"./heavyrainshowersandthunder_night.svg": "./src/weatherIcons/heavyrainshowersandthunder_night.svg",
	"./heavyrainshowersandthunder_polartwilight.svg": "./src/weatherIcons/heavyrainshowersandthunder_polartwilight.svg",
	"./heavysleet.svg": "./src/weatherIcons/heavysleet.svg",
	"./heavysleetandthunder.svg": "./src/weatherIcons/heavysleetandthunder.svg",
	"./heavysleetshowers_day.svg": "./src/weatherIcons/heavysleetshowers_day.svg",
	"./heavysleetshowers_night.svg": "./src/weatherIcons/heavysleetshowers_night.svg",
	"./heavysleetshowers_polartwilight.svg": "./src/weatherIcons/heavysleetshowers_polartwilight.svg",
	"./heavysleetshowersandthunder_day.svg": "./src/weatherIcons/heavysleetshowersandthunder_day.svg",
	"./heavysleetshowersandthunder_night.svg": "./src/weatherIcons/heavysleetshowersandthunder_night.svg",
	"./heavysleetshowersandthunder_polartwilight.svg": "./src/weatherIcons/heavysleetshowersandthunder_polartwilight.svg",
	"./heavysnow.svg": "./src/weatherIcons/heavysnow.svg",
	"./heavysnowandthunder.svg": "./src/weatherIcons/heavysnowandthunder.svg",
	"./heavysnowshowers_day.svg": "./src/weatherIcons/heavysnowshowers_day.svg",
	"./heavysnowshowers_night.svg": "./src/weatherIcons/heavysnowshowers_night.svg",
	"./heavysnowshowers_polartwilight.svg": "./src/weatherIcons/heavysnowshowers_polartwilight.svg",
	"./heavysnowshowersandthunder_day.svg": "./src/weatherIcons/heavysnowshowersandthunder_day.svg",
	"./heavysnowshowersandthunder_night.svg": "./src/weatherIcons/heavysnowshowersandthunder_night.svg",
	"./heavysnowshowersandthunder_polartwilight.svg": "./src/weatherIcons/heavysnowshowersandthunder_polartwilight.svg",
	"./lightrain.svg": "./src/weatherIcons/lightrain.svg",
	"./lightrainandthunder.svg": "./src/weatherIcons/lightrainandthunder.svg",
	"./lightrainshowers_day.svg": "./src/weatherIcons/lightrainshowers_day.svg",
	"./lightrainshowers_night.svg": "./src/weatherIcons/lightrainshowers_night.svg",
	"./lightrainshowers_polartwilight.svg": "./src/weatherIcons/lightrainshowers_polartwilight.svg",
	"./lightrainshowersandthunder_day.svg": "./src/weatherIcons/lightrainshowersandthunder_day.svg",
	"./lightrainshowersandthunder_night.svg": "./src/weatherIcons/lightrainshowersandthunder_night.svg",
	"./lightrainshowersandthunder_polartwilight.svg": "./src/weatherIcons/lightrainshowersandthunder_polartwilight.svg",
	"./lightsleet.svg": "./src/weatherIcons/lightsleet.svg",
	"./lightsleetandthunder.svg": "./src/weatherIcons/lightsleetandthunder.svg",
	"./lightsleetshowers_day.svg": "./src/weatherIcons/lightsleetshowers_day.svg",
	"./lightsleetshowers_night.svg": "./src/weatherIcons/lightsleetshowers_night.svg",
	"./lightsleetshowers_polartwilight.svg": "./src/weatherIcons/lightsleetshowers_polartwilight.svg",
	"./lightsnow.svg": "./src/weatherIcons/lightsnow.svg",
	"./lightsnowandthunder.svg": "./src/weatherIcons/lightsnowandthunder.svg",
	"./lightsnowshowers_day.svg": "./src/weatherIcons/lightsnowshowers_day.svg",
	"./lightsnowshowers_night.svg": "./src/weatherIcons/lightsnowshowers_night.svg",
	"./lightsnowshowers_polartwilight.svg": "./src/weatherIcons/lightsnowshowers_polartwilight.svg",
	"./lightssleetshowersandthunder_day.svg": "./src/weatherIcons/lightssleetshowersandthunder_day.svg",
	"./lightssleetshowersandthunder_night.svg": "./src/weatherIcons/lightssleetshowersandthunder_night.svg",
	"./lightssleetshowersandthunder_polartwilight.svg": "./src/weatherIcons/lightssleetshowersandthunder_polartwilight.svg",
	"./lightssnowshowersandthunder_day.svg": "./src/weatherIcons/lightssnowshowersandthunder_day.svg",
	"./lightssnowshowersandthunder_night.svg": "./src/weatherIcons/lightssnowshowersandthunder_night.svg",
	"./lightssnowshowersandthunder_polartwilight.svg": "./src/weatherIcons/lightssnowshowersandthunder_polartwilight.svg",
	"./partlycloudy_day.svg": "./src/weatherIcons/partlycloudy_day.svg",
	"./partlycloudy_night.svg": "./src/weatherIcons/partlycloudy_night.svg",
	"./partlycloudy_polartwilight.svg": "./src/weatherIcons/partlycloudy_polartwilight.svg",
	"./rain.svg": "./src/weatherIcons/rain.svg",
	"./rainandthunder.svg": "./src/weatherIcons/rainandthunder.svg",
	"./rainshowers_day.svg": "./src/weatherIcons/rainshowers_day.svg",
	"./rainshowers_night.svg": "./src/weatherIcons/rainshowers_night.svg",
	"./rainshowers_polartwilight.svg": "./src/weatherIcons/rainshowers_polartwilight.svg",
	"./rainshowersandthunder_day.svg": "./src/weatherIcons/rainshowersandthunder_day.svg",
	"./rainshowersandthunder_night.svg": "./src/weatherIcons/rainshowersandthunder_night.svg",
	"./rainshowersandthunder_polartwilight.svg": "./src/weatherIcons/rainshowersandthunder_polartwilight.svg",
	"./sleet.svg": "./src/weatherIcons/sleet.svg",
	"./sleetandthunder.svg": "./src/weatherIcons/sleetandthunder.svg",
	"./sleetshowers_day.svg": "./src/weatherIcons/sleetshowers_day.svg",
	"./sleetshowers_night.svg": "./src/weatherIcons/sleetshowers_night.svg",
	"./sleetshowers_polartwilight.svg": "./src/weatherIcons/sleetshowers_polartwilight.svg",
	"./sleetshowersandthunder_day.svg": "./src/weatherIcons/sleetshowersandthunder_day.svg",
	"./sleetshowersandthunder_night.svg": "./src/weatherIcons/sleetshowersandthunder_night.svg",
	"./sleetshowersandthunder_polartwilight.svg": "./src/weatherIcons/sleetshowersandthunder_polartwilight.svg",
	"./snow.svg": "./src/weatherIcons/snow.svg",
	"./snowandthunder.svg": "./src/weatherIcons/snowandthunder.svg",
	"./snowshowers_day.svg": "./src/weatherIcons/snowshowers_day.svg",
	"./snowshowers_night.svg": "./src/weatherIcons/snowshowers_night.svg",
	"./snowshowers_polartwilight.svg": "./src/weatherIcons/snowshowers_polartwilight.svg",
	"./snowshowersandthunder_day.svg": "./src/weatherIcons/snowshowersandthunder_day.svg",
	"./snowshowersandthunder_night.svg": "./src/weatherIcons/snowshowersandthunder_night.svg",
	"./snowshowersandthunder_polartwilight.svg": "./src/weatherIcons/snowshowersandthunder_polartwilight.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/weatherIcons sync \\.svg$";

/***/ }),

/***/ "./src/icons/arrow.svg":
/*!*****************************!*\
  !*** ./src/icons/arrow.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/arrow.svg";

/***/ }),

/***/ "./src/icons/star-outline.svg":
/*!************************************!*\
  !*** ./src/icons/star-outline.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/star-outline.svg";

/***/ }),

/***/ "./src/icons/star.svg":
/*!****************************!*\
  !*** ./src/icons/star.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/star.svg";

/***/ }),

/***/ "./src/icons/sunrise.svg":
/*!*******************************!*\
  !*** ./src/icons/sunrise.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/sunrise.svg";

/***/ }),

/***/ "./src/icons/sunset.svg":
/*!******************************!*\
  !*** ./src/icons/sunset.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/sunset.svg";

/***/ }),

/***/ "./src/weatherIcons/clearsky_day.svg":
/*!*******************************************!*\
  !*** ./src/weatherIcons/clearsky_day.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/clearsky_day.svg";

/***/ }),

/***/ "./src/weatherIcons/clearsky_night.svg":
/*!*********************************************!*\
  !*** ./src/weatherIcons/clearsky_night.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/clearsky_night.svg";

/***/ }),

/***/ "./src/weatherIcons/clearsky_polartwilight.svg":
/*!*****************************************************!*\
  !*** ./src/weatherIcons/clearsky_polartwilight.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/clearsky_polartwilight.svg";

/***/ }),

/***/ "./src/weatherIcons/cloudy.svg":
/*!*************************************!*\
  !*** ./src/weatherIcons/cloudy.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/cloudy.svg";

/***/ }),

/***/ "./src/weatherIcons/fair_day.svg":
/*!***************************************!*\
  !*** ./src/weatherIcons/fair_day.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fair_day.svg";

/***/ }),

/***/ "./src/weatherIcons/fair_night.svg":
/*!*****************************************!*\
  !*** ./src/weatherIcons/fair_night.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fair_night.svg";

/***/ }),

/***/ "./src/weatherIcons/fair_polartwilight.svg":
/*!*************************************************!*\
  !*** ./src/weatherIcons/fair_polartwilight.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fair_polartwilight.svg";

/***/ }),

/***/ "./src/weatherIcons/fog.svg":
/*!**********************************!*\
  !*** ./src/weatherIcons/fog.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fog.svg";

/***/ }),

/***/ "./src/weatherIcons/heavyrain.svg":
/*!****************************************!*\
  !*** ./src/weatherIcons/heavyrain.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heavyrain.svg";

/***/ }),

/***/ "./src/weatherIcons/heavyrainandthunder.svg":
/*!**************************************************!*\
  !*** ./src/weatherIcons/heavyrainandthunder.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heavyrainandthunder.svg";

/***/ }),

/***/ "./src/weatherIcons/heavyrainshowers_day.svg":
/*!***************************************************!*\
  !*** ./src/weatherIcons/heavyrainshowers_day.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heavyrainshowers_day.svg";

/***/ }),

/***/ "./src/weatherIcons/heavyrainshowers_night.svg":
/*!*****************************************************!*\
  !*** ./src/weatherIcons/heavyrainshowers_night.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heavyrainshowers_night.svg";

/***/ }),

/***/ "./src/weatherIcons/heavyrainshowers_polartwilight.svg":
/*!*************************************************************!*\
  !*** ./src/weatherIcons/heavyrainshowers_polartwilight.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heavyrainshowers_polartwilight.svg";

/***/ }),

/***/ "./src/weatherIcons/heavyrainshowersandthunder_day.svg":
/*!*************************************************************!*\
  !*** ./src/weatherIcons/heavyrainshowersandthunder_day.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heavyrainshowersandthunder_day.svg";

/***/ }),

/***/ "./src/weatherIcons/heavyrainshowersandthunder_night.svg":
/*!***************************************************************!*\
  !*** ./src/weatherIcons/heavyrainshowersandthunder_night.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heavyrainshowersandthunder_night.svg";

/***/ }),

/***/ "./src/weatherIcons/heavyrainshowersandthunder_polartwilight.svg":
/*!***********************************************************************!*\
  !*** ./src/weatherIcons/heavyrainshowersandthunder_polartwilight.svg ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heavyrainshowersandthunder_polartwilight.svg";

/***/ }),

/***/ "./src/weatherIcons/heavysleet.svg":
/*!*****************************************!*\
  !*** ./src/weatherIcons/heavysleet.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heavysleet.svg";

/***/ }),

/***/ "./src/weatherIcons/heavysleetandthunder.svg":
/*!***************************************************!*\
  !*** ./src/weatherIcons/heavysleetandthunder.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heavysleetandthunder.svg";

/***/ }),

/***/ "./src/weatherIcons/heavysleetshowers_day.svg":
/*!****************************************************!*\
  !*** ./src/weatherIcons/heavysleetshowers_day.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heavysleetshowers_day.svg";

/***/ }),

/***/ "./src/weatherIcons/heavysleetshowers_night.svg":
/*!******************************************************!*\
  !*** ./src/weatherIcons/heavysleetshowers_night.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heavysleetshowers_night.svg";

/***/ }),

/***/ "./src/weatherIcons/heavysleetshowers_polartwilight.svg":
/*!**************************************************************!*\
  !*** ./src/weatherIcons/heavysleetshowers_polartwilight.svg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heavysleetshowers_polartwilight.svg";

/***/ }),

/***/ "./src/weatherIcons/heavysleetshowersandthunder_day.svg":
/*!**************************************************************!*\
  !*** ./src/weatherIcons/heavysleetshowersandthunder_day.svg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heavysleetshowersandthunder_day.svg";

/***/ }),

/***/ "./src/weatherIcons/heavysleetshowersandthunder_night.svg":
/*!****************************************************************!*\
  !*** ./src/weatherIcons/heavysleetshowersandthunder_night.svg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heavysleetshowersandthunder_night.svg";

/***/ }),

/***/ "./src/weatherIcons/heavysleetshowersandthunder_polartwilight.svg":
/*!************************************************************************!*\
  !*** ./src/weatherIcons/heavysleetshowersandthunder_polartwilight.svg ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heavysleetshowersandthunder_polartwilight.svg";

/***/ }),

/***/ "./src/weatherIcons/heavysnow.svg":
/*!****************************************!*\
  !*** ./src/weatherIcons/heavysnow.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heavysnow.svg";

/***/ }),

/***/ "./src/weatherIcons/heavysnowandthunder.svg":
/*!**************************************************!*\
  !*** ./src/weatherIcons/heavysnowandthunder.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heavysnowandthunder.svg";

/***/ }),

/***/ "./src/weatherIcons/heavysnowshowers_day.svg":
/*!***************************************************!*\
  !*** ./src/weatherIcons/heavysnowshowers_day.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heavysnowshowers_day.svg";

/***/ }),

/***/ "./src/weatherIcons/heavysnowshowers_night.svg":
/*!*****************************************************!*\
  !*** ./src/weatherIcons/heavysnowshowers_night.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heavysnowshowers_night.svg";

/***/ }),

/***/ "./src/weatherIcons/heavysnowshowers_polartwilight.svg":
/*!*************************************************************!*\
  !*** ./src/weatherIcons/heavysnowshowers_polartwilight.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heavysnowshowers_polartwilight.svg";

/***/ }),

/***/ "./src/weatherIcons/heavysnowshowersandthunder_day.svg":
/*!*************************************************************!*\
  !*** ./src/weatherIcons/heavysnowshowersandthunder_day.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heavysnowshowersandthunder_day.svg";

/***/ }),

/***/ "./src/weatherIcons/heavysnowshowersandthunder_night.svg":
/*!***************************************************************!*\
  !*** ./src/weatherIcons/heavysnowshowersandthunder_night.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heavysnowshowersandthunder_night.svg";

/***/ }),

/***/ "./src/weatherIcons/heavysnowshowersandthunder_polartwilight.svg":
/*!***********************************************************************!*\
  !*** ./src/weatherIcons/heavysnowshowersandthunder_polartwilight.svg ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heavysnowshowersandthunder_polartwilight.svg";

/***/ }),

/***/ "./src/weatherIcons/lightrain.svg":
/*!****************************************!*\
  !*** ./src/weatherIcons/lightrain.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lightrain.svg";

/***/ }),

/***/ "./src/weatherIcons/lightrainandthunder.svg":
/*!**************************************************!*\
  !*** ./src/weatherIcons/lightrainandthunder.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lightrainandthunder.svg";

/***/ }),

/***/ "./src/weatherIcons/lightrainshowers_day.svg":
/*!***************************************************!*\
  !*** ./src/weatherIcons/lightrainshowers_day.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lightrainshowers_day.svg";

/***/ }),

/***/ "./src/weatherIcons/lightrainshowers_night.svg":
/*!*****************************************************!*\
  !*** ./src/weatherIcons/lightrainshowers_night.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lightrainshowers_night.svg";

/***/ }),

/***/ "./src/weatherIcons/lightrainshowers_polartwilight.svg":
/*!*************************************************************!*\
  !*** ./src/weatherIcons/lightrainshowers_polartwilight.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lightrainshowers_polartwilight.svg";

/***/ }),

/***/ "./src/weatherIcons/lightrainshowersandthunder_day.svg":
/*!*************************************************************!*\
  !*** ./src/weatherIcons/lightrainshowersandthunder_day.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lightrainshowersandthunder_day.svg";

/***/ }),

/***/ "./src/weatherIcons/lightrainshowersandthunder_night.svg":
/*!***************************************************************!*\
  !*** ./src/weatherIcons/lightrainshowersandthunder_night.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lightrainshowersandthunder_night.svg";

/***/ }),

/***/ "./src/weatherIcons/lightrainshowersandthunder_polartwilight.svg":
/*!***********************************************************************!*\
  !*** ./src/weatherIcons/lightrainshowersandthunder_polartwilight.svg ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lightrainshowersandthunder_polartwilight.svg";

/***/ }),

/***/ "./src/weatherIcons/lightsleet.svg":
/*!*****************************************!*\
  !*** ./src/weatherIcons/lightsleet.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lightsleet.svg";

/***/ }),

/***/ "./src/weatherIcons/lightsleetandthunder.svg":
/*!***************************************************!*\
  !*** ./src/weatherIcons/lightsleetandthunder.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lightsleetandthunder.svg";

/***/ }),

/***/ "./src/weatherIcons/lightsleetshowers_day.svg":
/*!****************************************************!*\
  !*** ./src/weatherIcons/lightsleetshowers_day.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lightsleetshowers_day.svg";

/***/ }),

/***/ "./src/weatherIcons/lightsleetshowers_night.svg":
/*!******************************************************!*\
  !*** ./src/weatherIcons/lightsleetshowers_night.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lightsleetshowers_night.svg";

/***/ }),

/***/ "./src/weatherIcons/lightsleetshowers_polartwilight.svg":
/*!**************************************************************!*\
  !*** ./src/weatherIcons/lightsleetshowers_polartwilight.svg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lightsleetshowers_polartwilight.svg";

/***/ }),

/***/ "./src/weatherIcons/lightsnow.svg":
/*!****************************************!*\
  !*** ./src/weatherIcons/lightsnow.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lightsnow.svg";

/***/ }),

/***/ "./src/weatherIcons/lightsnowandthunder.svg":
/*!**************************************************!*\
  !*** ./src/weatherIcons/lightsnowandthunder.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lightsnowandthunder.svg";

/***/ }),

/***/ "./src/weatherIcons/lightsnowshowers_day.svg":
/*!***************************************************!*\
  !*** ./src/weatherIcons/lightsnowshowers_day.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lightsnowshowers_day.svg";

/***/ }),

/***/ "./src/weatherIcons/lightsnowshowers_night.svg":
/*!*****************************************************!*\
  !*** ./src/weatherIcons/lightsnowshowers_night.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lightsnowshowers_night.svg";

/***/ }),

/***/ "./src/weatherIcons/lightsnowshowers_polartwilight.svg":
/*!*************************************************************!*\
  !*** ./src/weatherIcons/lightsnowshowers_polartwilight.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lightsnowshowers_polartwilight.svg";

/***/ }),

/***/ "./src/weatherIcons/lightssleetshowersandthunder_day.svg":
/*!***************************************************************!*\
  !*** ./src/weatherIcons/lightssleetshowersandthunder_day.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lightssleetshowersandthunder_day.svg";

/***/ }),

/***/ "./src/weatherIcons/lightssleetshowersandthunder_night.svg":
/*!*****************************************************************!*\
  !*** ./src/weatherIcons/lightssleetshowersandthunder_night.svg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lightssleetshowersandthunder_night.svg";

/***/ }),

/***/ "./src/weatherIcons/lightssleetshowersandthunder_polartwilight.svg":
/*!*************************************************************************!*\
  !*** ./src/weatherIcons/lightssleetshowersandthunder_polartwilight.svg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lightssleetshowersandthunder_polartwilight.svg";

/***/ }),

/***/ "./src/weatherIcons/lightssnowshowersandthunder_day.svg":
/*!**************************************************************!*\
  !*** ./src/weatherIcons/lightssnowshowersandthunder_day.svg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lightssnowshowersandthunder_day.svg";

/***/ }),

/***/ "./src/weatherIcons/lightssnowshowersandthunder_night.svg":
/*!****************************************************************!*\
  !*** ./src/weatherIcons/lightssnowshowersandthunder_night.svg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lightssnowshowersandthunder_night.svg";

/***/ }),

/***/ "./src/weatherIcons/lightssnowshowersandthunder_polartwilight.svg":
/*!************************************************************************!*\
  !*** ./src/weatherIcons/lightssnowshowersandthunder_polartwilight.svg ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/lightssnowshowersandthunder_polartwilight.svg";

/***/ }),

/***/ "./src/weatherIcons/partlycloudy_day.svg":
/*!***********************************************!*\
  !*** ./src/weatherIcons/partlycloudy_day.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/partlycloudy_day.svg";

/***/ }),

/***/ "./src/weatherIcons/partlycloudy_night.svg":
/*!*************************************************!*\
  !*** ./src/weatherIcons/partlycloudy_night.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/partlycloudy_night.svg";

/***/ }),

/***/ "./src/weatherIcons/partlycloudy_polartwilight.svg":
/*!*********************************************************!*\
  !*** ./src/weatherIcons/partlycloudy_polartwilight.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/partlycloudy_polartwilight.svg";

/***/ }),

/***/ "./src/weatherIcons/rain.svg":
/*!***********************************!*\
  !*** ./src/weatherIcons/rain.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/rain.svg";

/***/ }),

/***/ "./src/weatherIcons/rainandthunder.svg":
/*!*********************************************!*\
  !*** ./src/weatherIcons/rainandthunder.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/rainandthunder.svg";

/***/ }),

/***/ "./src/weatherIcons/rainshowers_day.svg":
/*!**********************************************!*\
  !*** ./src/weatherIcons/rainshowers_day.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/rainshowers_day.svg";

/***/ }),

/***/ "./src/weatherIcons/rainshowers_night.svg":
/*!************************************************!*\
  !*** ./src/weatherIcons/rainshowers_night.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/rainshowers_night.svg";

/***/ }),

/***/ "./src/weatherIcons/rainshowers_polartwilight.svg":
/*!********************************************************!*\
  !*** ./src/weatherIcons/rainshowers_polartwilight.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/rainshowers_polartwilight.svg";

/***/ }),

/***/ "./src/weatherIcons/rainshowersandthunder_day.svg":
/*!********************************************************!*\
  !*** ./src/weatherIcons/rainshowersandthunder_day.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/rainshowersandthunder_day.svg";

/***/ }),

/***/ "./src/weatherIcons/rainshowersandthunder_night.svg":
/*!**********************************************************!*\
  !*** ./src/weatherIcons/rainshowersandthunder_night.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/rainshowersandthunder_night.svg";

/***/ }),

/***/ "./src/weatherIcons/rainshowersandthunder_polartwilight.svg":
/*!******************************************************************!*\
  !*** ./src/weatherIcons/rainshowersandthunder_polartwilight.svg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/rainshowersandthunder_polartwilight.svg";

/***/ }),

/***/ "./src/weatherIcons/sleet.svg":
/*!************************************!*\
  !*** ./src/weatherIcons/sleet.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/sleet.svg";

/***/ }),

/***/ "./src/weatherIcons/sleetandthunder.svg":
/*!**********************************************!*\
  !*** ./src/weatherIcons/sleetandthunder.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/sleetandthunder.svg";

/***/ }),

/***/ "./src/weatherIcons/sleetshowers_day.svg":
/*!***********************************************!*\
  !*** ./src/weatherIcons/sleetshowers_day.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/sleetshowers_day.svg";

/***/ }),

/***/ "./src/weatherIcons/sleetshowers_night.svg":
/*!*************************************************!*\
  !*** ./src/weatherIcons/sleetshowers_night.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/sleetshowers_night.svg";

/***/ }),

/***/ "./src/weatherIcons/sleetshowers_polartwilight.svg":
/*!*********************************************************!*\
  !*** ./src/weatherIcons/sleetshowers_polartwilight.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/sleetshowers_polartwilight.svg";

/***/ }),

/***/ "./src/weatherIcons/sleetshowersandthunder_day.svg":
/*!*********************************************************!*\
  !*** ./src/weatherIcons/sleetshowersandthunder_day.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/sleetshowersandthunder_day.svg";

/***/ }),

/***/ "./src/weatherIcons/sleetshowersandthunder_night.svg":
/*!***********************************************************!*\
  !*** ./src/weatherIcons/sleetshowersandthunder_night.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/sleetshowersandthunder_night.svg";

/***/ }),

/***/ "./src/weatherIcons/sleetshowersandthunder_polartwilight.svg":
/*!*******************************************************************!*\
  !*** ./src/weatherIcons/sleetshowersandthunder_polartwilight.svg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/sleetshowersandthunder_polartwilight.svg";

/***/ }),

/***/ "./src/weatherIcons/snow.svg":
/*!***********************************!*\
  !*** ./src/weatherIcons/snow.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/snow.svg";

/***/ }),

/***/ "./src/weatherIcons/snowandthunder.svg":
/*!*********************************************!*\
  !*** ./src/weatherIcons/snowandthunder.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/snowandthunder.svg";

/***/ }),

/***/ "./src/weatherIcons/snowshowers_day.svg":
/*!**********************************************!*\
  !*** ./src/weatherIcons/snowshowers_day.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/snowshowers_day.svg";

/***/ }),

/***/ "./src/weatherIcons/snowshowers_night.svg":
/*!************************************************!*\
  !*** ./src/weatherIcons/snowshowers_night.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/snowshowers_night.svg";

/***/ }),

/***/ "./src/weatherIcons/snowshowers_polartwilight.svg":
/*!********************************************************!*\
  !*** ./src/weatherIcons/snowshowers_polartwilight.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/snowshowers_polartwilight.svg";

/***/ }),

/***/ "./src/weatherIcons/snowshowersandthunder_day.svg":
/*!********************************************************!*\
  !*** ./src/weatherIcons/snowshowersandthunder_day.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/snowshowersandthunder_day.svg";

/***/ }),

/***/ "./src/weatherIcons/snowshowersandthunder_night.svg":
/*!**********************************************************!*\
  !*** ./src/weatherIcons/snowshowersandthunder_night.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/snowshowersandthunder_night.svg";

/***/ }),

/***/ "./src/weatherIcons/snowshowersandthunder_polartwilight.svg":
/*!******************************************************************!*\
  !*** ./src/weatherIcons/snowshowersandthunder_polartwilight.svg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/snowshowersandthunder_polartwilight.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=main.bundle.js.map