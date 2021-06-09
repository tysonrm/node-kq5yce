exports.id = "webpack_remote-entries_js";
exports.ids = ["webpack_remote-entries_js"];
exports.modules = {

/***/ "./webpack/remote-entries-cache.js":
/*!*****************************************!*\
  !*** ./webpack/remote-entries-cache.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

module.exports = [{
  name: "distributed-cache",
  url: "http://localhost:8060/remoteEntry.js",
  path: __dirname,
  type: "model-cache",
  importRemote: function importRemote(async) {
    return __webpack_require__.e(/*! import() */ "webpack_container_remote_distributed-cache_models-cache").then(__webpack_require__.t.bind(__webpack_require__, /*! distributed-cache/models-cache */ "webpack/container/remote/distributed-cache/models-cache", 23));
  }
}, {
  name: "adapters-cache",
  url: "http://localhost:8060/remoteEntry.js",
  path: __dirname,
  type: "adapter-cache",
  importRemote: function () {
    var _importRemote = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", __webpack_require__.e(/*! import() */ "webpack_container_remote_distributed-cache_adapters-cache").then(__webpack_require__.t.bind(__webpack_require__, /*! distributed-cache/adapters-cache */ "webpack/container/remote/distributed-cache/adapters-cache", 23)));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function importRemote() {
      return _importRemote.apply(this, arguments);
    }

    return importRemote;
  }()
}, {
  name: "services-cache",
  url: "http://localhost:8060/remoteEntry.js",
  path: __dirname,
  type: "service-cache",
  importRemote: function () {
    var _importRemote2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", __webpack_require__.e(/*! import() */ "webpack_container_remote_distributed-cache_services-cache").then(__webpack_require__.t.bind(__webpack_require__, /*! distributed-cache/services-cache */ "webpack/container/remote/distributed-cache/services-cache", 23)));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function importRemote() {
      return _importRemote2.apply(this, arguments);
    }

    return importRemote;
  }()
}];

/***/ }),

/***/ "./webpack/remote-entries-github-order.js":
/*!************************************************!*\
  !*** ./webpack/remote-entries-github-order.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

module.exports = [{
  name: "microservices",
  url: "https://api.github.com/repos/module-federation/MicroLib-Example/contents/dist?ref=order-server",
  path: __dirname,
  type: "model",
  importRemote: function () {
    var _importRemote = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", __webpack_require__.e(/*! import() */ "webpack_container_remote_microservices_models").then(__webpack_require__.t.bind(__webpack_require__, /*! microservices/models */ "webpack/container/remote/microservices/models", 23)));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function importRemote() {
      return _importRemote.apply(this, arguments);
    }

    return importRemote;
  }()
}, {
  name: "adapters",
  url: "https://api.github.com/repos/module-federation/MicroLib-Example/contents/dist?ref=order-server",
  path: __dirname,
  type: "adapter",
  importRemote: function () {
    var _importRemote2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", __webpack_require__.e(/*! import() */ "webpack_container_remote_microservices_adapters").then(__webpack_require__.t.bind(__webpack_require__, /*! microservices/adapters */ "webpack/container/remote/microservices/adapters", 23)));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function importRemote() {
      return _importRemote2.apply(this, arguments);
    }

    return importRemote;
  }()
}, {
  name: "services",
  url: "https://api.github.com/repos/module-federation/MicroLib-Example/contents/dist?ref=order-server",
  path: __dirname,
  type: "service",
  importRemote: function () {
    var _importRemote3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", __webpack_require__.e(/*! import() */ "webpack_container_remote_microservices_services").then(__webpack_require__.t.bind(__webpack_require__, /*! microservices/services */ "webpack/container/remote/microservices/services", 23)));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function importRemote() {
      return _importRemote3.apply(this, arguments);
    }

    return importRemote;
  }()
}];

/***/ }),

/***/ "./webpack/remote-entries.js":
/*!***********************************!*\
  !*** ./webpack/remote-entries.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//const githubEntries = require("./remote-entries-github");
// const githubEntries = require("./remote-entries-github-customer");
var githubEntries = __webpack_require__(/*! ./remote-entries-github-order */ "./webpack/remote-entries-github-order.js");

var cacheEntries = __webpack_require__(/*! ./remote-entries-cache */ "./webpack/remote-entries-cache.js"); //const cacheEntries = [];


module.exports = githubEntries.concat(cacheEntries);

/***/ })

};
;
//# sourceMappingURL=webpack_remote-entries_js.js.map