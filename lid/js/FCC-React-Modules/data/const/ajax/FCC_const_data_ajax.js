"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xhr_return = exports.xhr = void 0;
var xhr = new XMLHttpRequest();
exports.xhr = xhr;

var xhr_return = function xhr_return() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var text = arguments.length > 1 ? arguments[1] : undefined;

  if (num == 200) {
    return text;
  } else if (num == 4) {
    return text;
  }
};

exports.xhr_return = xhr_return;