"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Time", {
  enumerable: true,
  get: function get() {
    return _Time["default"];
  }
});
Object.defineProperty(exports, "Html", {
  enumerable: true,
  get: function get() {
    return _Html["default"];
  }
});
Object.defineProperty(exports, "Window", {
  enumerable: true,
  get: function get() {
    return _Window["default"];
  }
});
Object.defineProperty(exports, "maths", {
  enumerable: true,
  get: function get() {
    return _Math["default"];
  }
});
Object.defineProperty(exports, "Code", {
  enumerable: true,
  get: function get() {
    return _Code["default"];
  }
});
Object.defineProperty(exports, "Consoel", {
  enumerable: true,
  get: function get() {
    return _console["default"];
  }
});
exports.UTF = exports.Search = exports.Aimg = exports.Css = exports.Day = exports.Spt = exports.Com = exports.Push = exports.Zeller = exports.Diagonal = exports.Ratio = exports.Gcd = exports.Repetition = exports.Pow = exports.nPr = exports.nCr = exports.Random = exports.Mathsnew = exports.Maths = exports.Thedetails = exports.Accordion = exports.Modal_simple = exports.hello = void 0;

var _Search = _interopRequireDefault(require("./components/Search/Search"));

var _Modal_simple = _interopRequireDefault(require("./components/Modal/simples/Modal_simple"));

var _Time = _interopRequireDefault(require("./function/time/Time"));

var _Html = _interopRequireDefault(require("./function/html/Html"));

var _Window = _interopRequireDefault(require("./function/window/Window"));

var UTF = _interopRequireWildcard(require("./function/utf/UTF"));

exports.UTF = UTF;

var _Math = _interopRequireDefault(require("./function/Math/Math"));

var _Code = _interopRequireDefault(require("./function/code/Code"));

var _console = _interopRequireDefault(require("./function/console/console"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Search = function Search(req, reqid) {
  var getid = document.getElementById(reqid);
  getid.innerHTML = (0, _Search["default"])(req);
};

exports.Search = Search;

var Modal_simple = function Modal_simple(req, reqid) {
  var getid = document.getElementById(reqid);
  getid.innerHTML = (0, _Modal_simple["default"])(req);
};

exports.Modal_simple = Modal_simple;

var Aimg = function Aimg(req, reqid) {
  var getid = document.getElementById(reqid);
  getid.innerHTML = "<div class=".concat(req.divcass, " id=").concat(req.divid, ">\n\t\t<a\n\t\thref=").concat(req.url, "\n\t\tid=").concat(req.aid, "\n\t\tclass=").concat(req.aclass, " \n\t\t>\n\t\t\t<img\n\t\t\t\tsrc=").concat(req.img, "\n\t\t\t\talt=\"\"\n\t\t\t\tclass=").concat(req.imgclass, "\n\t\t\t\tid=").concat(req.imgid, "\n\t\t\t/>\n\t\t</a>\n\t</div>");
};

exports.Aimg = Aimg;

var Accordion = function Accordion(req, reqid) {
  var getid = document.getElementById(reqid);
  getid.innerHTML = "<div>\n\t\t\t\t<ul class=\"accordion-tabs-minimal\">\n\t\t\t\t\t<li class=\"tab-header-and-content\">\n\t\t\t\t\t\t<a href=\"#\" class=\"tab-link is-active\">".concat(req.title1, "</a>\n\t\t\t\t\t\t<div class=\"tab-content\" id=\"1\">\n\t\t\t\t\t\t\t<p class=\"text-p-accordion\" id=\"accordiontab-1\">").concat(req.text1, "</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"tab-header-and-content\">\n\t\t\t\t\t\t<a href=\"#\" class=\"tab-link\">").concat(req.title2, "</a>\n\t\t\t\t\t\t<div class=\"tab-content\" id=\"2\">\n\t\t\t\t\t\t\t<p class=\"text-p-accordion\" id=\"accordiontab-2\">").concat(req.text2, "</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"tab-header-and-content\">\n\t\t\t\t\t\t<a href=\"#\" class=\"tab-link\">").concat(req.title3, "</a>\n\t\t\t\t\t\t<div class=\"tab-content\" id=\"3\">\n\t\t\t\t\t\t\t<p class=\"text-p-accordion\" id=\"accordiontab-3\">").concat(req.text3, "</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"tab-header-and-content\">\n\t\t\t\t\t\t<a href=\"#\" class=\"tab-link\">").concat(req.title4, "</a>\n\t\t\t\t\t\t<div class=\"tab-content\" id=\"4\">\n\t\t\t\t\t\t\t<p class=\"text-p-accordion\" id=\"accordiontab-4\">").concat(req.text4, "</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>");
};

exports.Accordion = Accordion;

var Thedetails = function Thedetails(req, reqid) {
  var getid = document.getElementById(reqid);
  getid.innerHTML = "<div>\n\t\t\t\t<p>Producer: ".concat(req.producer, "</p>\n\t\t\t\t<p>Programming languages: ").concat(req.programming, "</p>\n\t\t\t</div>");
};

exports.Thedetails = Thedetails;

var Sns = function Sns() {
  var getid = document.getElementById(reqid);
  getid.innerHTML = "<div class=\"btn-sns\">\n\t\t\t\t<a href=".concat(req.url, " class=").concat(req.classs, " btn-hover>\n\t\t\t\t\t<span class=").concat(req.span, ">\n\t\t\t\t\t\t<i class=").concat(req.i, "></i>\n\t\t\t\t\t</span>Follow Me</a>\n\t\t\t</div>");
};

var css = function css() {
  _classCallCheck(this, css);

  this.Colorid = function (id, color) {
    var Htmlcolor = document.getElementById(id);
    Htmlcolor.style.color = color;
  };

  this.Colorclass = function (classs, color) {
    var Htmlcolor = document.getElementsByClassName(classs);
    Htmlcolor.style.color = color;
  };
};

var Random = function Random(num) {
  return Math.floor(Math.random() * num);
};

exports.Random = Random;

var nCr = function nCr() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  //nCr
  var x, z;
  var y;
  var age = 1;
  y = n;
  z = r;
  x = 0;

  while (x == 0) {
    if (r == 1) {
      y = y * r;
    }

    r--;

    if (r == 0) {
      x++;
    } else {
      n--;

      if (n == 0) {
        x++;
        break;
      }

      y = y * n;
    }
  }

  for (var i = 2; i <= z; i++) {
    age *= i;
  }

  y = y / age;
  return y;
};

exports.nCr = nCr;

var Pow = function Pow(num, n) {
  //xのy乗
  var nums = num;

  for (var i = 2; i <= n; i++) {
    nums *= num;
  }

  return nums;
};

exports.Pow = Pow;

var Repetition = function Repetition() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  //階乗
  var age = 1;

  for (var i = 2; i <= x; i++) {
    age *= i;
  }

  return age;
};

exports.Repetition = Repetition;

var nPr = function nPr() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  //nPr
  if (typeof n == 'number' && typeof r == 'number') {
    var y;
    var x = 0;
    y = n;

    while (x == 0) {
      if (r == 1) {
        y = y * r;
      }

      r--;

      if (r == 0) {
        x++;
      } else {
        n--;

        if (n == 0) {
          x++;
          break;
        }

        y = y * n;
      }
    }

    return y;
  } else {
    _console["default"].error('Number型を渡してください');
  }
};

exports.nPr = nPr;

var Gcd = function Gcd() {
  var f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (typeof f == 'number' && typeof x == 'number') {
    //最大公約数
    var r, tmp;

    if (f < x) {
      tmp = f;
      f = x;
      x = tmp;
    }
    /* ユークリッドの互除法 */


    r = f % x;

    while (r != 0) {
      f = x;
      x = r;
      r = f % x;
    }

    return x;
  } else {
    _console["default"].error('Number型を渡してください');
  }
};

exports.Gcd = Gcd;

var Ratio = function Ratio(a, b, x, y) {
  //比率
  a *= y;
  b *= x;

  if (a < b) {
    if (b % a == 0) {
      return b / a;
    } else {
      return "".concat(a, "/").concat(b);
    }
  } else {
    if (a % b == 0) {
      return a / b;
    } else {
      return "".concat(b, "/").concat(a);
    }
  }
};

exports.Ratio = Ratio;

var Diagonal = function Diagonal(n) {
  //対角線の数
  n = n * (n - 3) / 2;
  return n;
};

exports.Diagonal = Diagonal;
var Maths = new _Math["default"]();
exports.Maths = Maths;

var Mathsnew = function Mathsnew() {
  var math = new _Math["default"]();
  return math;
};

exports.Mathsnew = Mathsnew;
var Css = new css();
/*let Cssnew = () => {
	let cs = new css();
	return cs;
}*/

exports.Css = Css;

var Zeller = function Zeller() {
  var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;
  var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var d = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var lan = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : jp;

  if (m < 3) {
    y--;
    m += 12;
  }

  var w = (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((13 * m + 8) / 5) + d) % 7;

  if (w == 0) {
    if (lan = en) {
      w = "Sunday";
    } else if (lan = jp) {
      w = "日曜日";
    }
  } else if (w == 1) {
    if (lan = en) {
      w = "Manday";
    } else if (lan = jp) {
      w = "月曜日";
    }
  } else if (w == 2) {
    if (lan = en) {
      w = "Tuesday";
    } else if (lan = jp) {
      w = "火曜日";
    }
  } else if (w == 3) {
    if (lan = en) {
      w = "Wedneday";
    } else if (lan = jp) {
      w = "水曜日";
    }
  } else if (w == 4) {
    if (lan = en) {
      w = "Thursday";
    } else if (lan = jp) {
      w = "木曜日";
    }
  } else if (w == 5) {
    if (lan = en) {
      w = "Friday";
    } else if (lan = jp) {
      w = "金曜日";
    }
  } else {
    if (lan = en) {
      w = "Saturday";
    } else if (lan = jp) {
      w = "土曜日";
    }
  }

  return w;
};

exports.Zeller = Zeller;

var Push = function Push(array, text) {
  var Pushs = array.push(text);
  return Pushs;
};

exports.Push = Push;

var Com = function Com(num, num2) {
  var gcdnum = Gcd(3, 4);
  num = num * num2 / gcdnum;
  return num;
};

exports.Com = Com;

var Spt = function Spt() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var num2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  num2 = num + num2;
  num *= 100;
  return num / num2;
};

exports.Spt = Spt;
var Day = new Date();
exports.Day = Day;

var hello = function hello() {
  console.log("Welcome to FCC You can take the tutorial by accessing this URL");
  console.log("https://riya81.github.io/FCC/");
}; //α version


exports.hello = hello;