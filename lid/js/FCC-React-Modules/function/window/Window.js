"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var windows = function windows() {
  _classCallCheck(this, windows);

  this.Url = function () {
    return window.location.href;
  };

  this.Urlhash = function () {
    return window.location.hash;
  };

  this.Urlsearch = function () {
    return window.location.search;
  };

  this.Width = function () {
    return window.innerWidth;
  };

  this.Height = function () {
    return window.innerHeight;
  };

  this.ScreenWidth = function () {
    return window.screen.width;
  };

  this.ScreenHeight = function () {
    return window.screen.height;
  };

  this.Urlorigin = function () {
    return window.location.origin;
  };

  this.Open = function (url, name) {
    var optional = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'top=' + window.innerHeight / 2 - 1000 / 2 + ',left=' + window.innerWidth / 2 - 1000 / 2 + ',width=1000,height=650';
    var object = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    object();
    return window.open(url, name, optional);
  };

  this.moveTo = function (object, num1, num2) {
    return object.moveTo(num1, num2);
  };

  this.resizeTo = function (object, num1, num2) {
    return object.resizeTo(num1, num2);
  };

  this.resizeBy = function (object, num1, num2) {
    return object.resizeBy(num1, num2);
  };

  this.Print = function () {
    return window.print();
  };

  this.Copy = function () {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
    window.addEventListener('copy', function (event) {
      text();
    });
  };

  this.Load = function () {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
    window.addEventListener('load', function (event) {
      text();
    });
  };

  this.Alert = function (text) {
    return window.alert(text);
  };

  this.setInterval = function (Callback, num) {
    return window.setInterval(Callback, num);
  };

  this.onresize = function () {
    return window.onresize;
  };
};

var Window = new windows();
var _default = Window;
exports["default"] = _default;