"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Show = function Show(name, num, text, Classification, Tribe, period, Atomicweight, type) {
  return "\n    <p>".concat(name, "</p>\n    <p>").concat(text, "</p>\n    <p>").concat(num, "\u756A</p>\n    <p>").concat(Tribe, "\u65CF").concat(period, "\u5468\u671F</p>\n    <p>").concat(type, "</p>\n    <p>").concat(Classification, "</p>\n    <p>\u539F\u5B50\u91CF").concat(Atomicweight, "</p>");
};

var _default = Show;
exports["default"] = _default;