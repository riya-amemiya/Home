"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var result = null;
var time = 1000;

var text = function text() {
  return null;
};

var Function = function Function() {
  return null;
};

var timeout = function timeout(msec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, msec);
  });
};

var Time_funciton = function Time_funciton(reqid) {
  if (result !== null) {
    Function();
    reqid.innerHTML = "<div>".concat(result(), "</div>");
  }

  throw new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return timeout(time);

            case 2:
              result = text;
              resolve();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
};

var Time = function Time(req, reqid) {
  reqid = document.getElementById(reqid);

  if (req.time != null) {
    time = req.time;
  }

  if (req.text != null) {
    text = req.text;
  }

  if (req.Function != null) {
    Function = req.Function;
  }

  Time_funciton(reqid);
};

var _default = Time;
exports["default"] = _default;