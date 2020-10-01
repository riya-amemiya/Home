"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ratio = exports.Gcd = exports.nPr = exports.Repetition = exports.Pow = exports.nCr = exports.Spt = exports.Com = exports.Push = exports.Random = void 0;

var Random = function Random(num) {
  return Math.floor(Math.random() * num);
};

exports.Random = Random;

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

var nPr = function nPr(n, r) {
  //nPr
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
};

exports.nPr = nPr;

var Gcd = function Gcd() {
  var f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
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