"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var html = /*#__PURE__*/function () {
  function html() {
    _classCallCheck(this, html);
  }

  _createClass(html, [{
    key: "get",
    value: function get() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      if (id.indexOf('.') != -1) {
        id = id.replace('.', '');
        return document.getElementsByClassName(id);
      } else if (id.indexOf('#') != -1) {
        id = id.replace('#', '');
        return document.getElementById(id);
      } else {
        return document.getElementsByTagName(id);
      }
    }
  }, {
    key: "html",
    value: function html() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      var _html = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

      return document.getElementById(id).innerHTML = _html;
    }
  }, {
    key: "poruno",
    value: function poruno() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      //Math.floor(Math.random() * num)
      var url = ["https://jp.pornhub.com/"];
      return url[num]; //location.replace(url[num])
    }
  }, {
    key: "jscode",
    value: function jscode() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var html = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var code = html;
      code = code.replace(/from/g, 'fro%m');
      code = code.replace(/class\=/g, 'cla%ss=');
      code = code.replace(/class \=/g, 'cla%ss=');
      var code2 = "";
      var code3 = "";

      for (var i = 0; i < html.length; i++) {
        if (code.indexOf('fro%m') != -1) {
          code2 = code.slice(code.indexOf('fro%m'));
          code = code.slice(0, code.indexOf('fro%m'));
          code = code + "</span>" + code2;
          code = code.replace('fro%m', 'from');
        }
      }

      code = code.replace(/jscode/g, 'j%scode');
      code = code.replace(/const/g, 'cons%t');

      for (var _i = 0; _i < html.length; _i++) {
        if (code.indexOf('j%scode') != -1) {
          code2 = code.slice(code.indexOf('j%scode'));
          code = code.slice(0, code.indexOf('j%scode'));
          code3 = code2.slice(code2.indexOf('div'));
          code2 = code2.slice(0, code2.indexOf('div'));
          code2 = code2.replace(/=/g, '<span cla%ss="i">=</span>');
          code2 = code2.replace(/;/g, '<span cla%ss="i">;</span>');
          code2 = code2.replace(/if\(/g, '<span cla%ss="i">if</span>(');
          code2 = code2.replace(/\(/g, '<span cla%ss="d">(</span>');
          code2 = code2.replace(/\)/g, '<span cla%ss="d">)</span>');
          code2 = code2.replace(/\{/g, '<span cla%ss="d">{</span><p></p>');
          code2 = code2.replace(/\}/g, '<p></p><span cla%ss="d">}</span>');
          code = code + code2 + code3;
          code = code.replace('j%scode', 'jscode');
        }
      }

      for (var _i2 = 0; _i2 < html.length; _i2++) {
        if (code.indexOf('cons%t') != -1) {
          code2 = code.slice(code.indexOf('cons%t'));
          code = code.slice(0, code.indexOf('cons%t'));
          code = code + "</span>" + code2;
          code = code.replace('cons%t', 'const');
        }
      }

      html = code;
      html = html.replace(/fro%m/g, 'from');
      html = html.replace(/class/g, '<span cla%ss="i">class</span>');
      html = html.replace(/j%scode/g, 'jscode');
      html = html.replace(/cla%ss\=/g, 'class=');
      html = html.replace(/return/g, '<p></p><span class="i">return</span>');
      html = html.replace(/import/g, '<span class="i">import</span><span class="l">');
      html = html.replace(/from/g, '<span class="i">from</span><span class="f">');
      html = html.replace(/var/g, '<span class="vc">var</span><span class="l">');
      html = html.replace(/let/g, '<span class="vc">let</span><span class="l">');
      console.log(html);
      html = html.replace(/const/g, '<span class="vc">const</span><span class="l">');
      return document.getElementById(id).innerHTML = html;
    }
  }, {
    key: "hasclass",
    value: function hasclass() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var get = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var getid = this.getid(id);
      return getid.className === get;
    }
  }]);

  return html;
}();

var Html = new html();
var _default = Html;
exports["default"] = _default;