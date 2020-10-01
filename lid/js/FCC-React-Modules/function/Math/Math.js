"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var maths = function maths() {
  _classCallCheck(this, maths);

  this.random = function (num) {
    var test = Math.floor(Math.random() * num);
    return test;
  };

  this.sqrt = function (n) {
    //平方根
    var sqrts = Math.sqrt(n);
    return sqrts;
  };

  this.repetition = function (x) {
    //階乗
    var age = 1;

    for (var i = 2; i <= x; i++) {
      age *= i;
    }

    return age;
  };

  this.ncr = function (n, r) {
    //nCr
    var x;
    var z;
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

  this.ncrs = function (n, r) {
    //重複を許して取り出す
    n = n + r - 1;
    n = Maths.ncr(n, r);
    return n;
  };

  this.gcd = function (f, x) {
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

  this.npr = function (n, r) {
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

  this.ratio = function (a, b, x, y) {
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

  this.diagonal = function (n) {
    //対角線の数
    n = n * (n - 3) / 2;
    return n;
  };

  this.pow = function (num, n) {
    //xのy乗
    var nums = num;

    for (var i = 2; i <= n; i++) {
      nums *= num;
    }

    return nums;
  };

  this.cone = function (num1, num2) {
    num1 *= num1;
    num2 *= num1;

    if (num2 % 3 == 0) {
      return num2 / 3;
    } else {
      return "".concat(num2, "/3");
    }
  };

  this.pMultiplicative = function (a, b) {
    a = "".concat(a * a, "+").concat(2 * a * b, "+").concat(b * b);
    return a;
  };

  this.rpMultiplicative = function (a, b) {
    a = "(".concat(Math.sqrt(a), "+").concat(Math.sqrt(b), ")^2");
    return a;
  };

  this.mMultiplicative = function (a, b) {
    a = "".concat(a * a, "-").concat(2 * a * b, "+").concat(b * b);
    return a;
  };

  this.rmMultiplicative = function (a, b) {
    a = "(".concat(Math.sqrt(a), "-").concat(Math.sqrt(b), ")^2");
    return a;
  };

  this.pmMultiplicative = function (a, b) {
    a = "".concat(a * a, "-").concat(b * b);
    return a;
  };

  this.rpmMultiplicative = function (a, b) {
    a = "(".concat(Math.sqrt(a), "+").concat(Math.sqrt(b), ")(").concat(Math.sqrt(a), "-").concat(Math.sqrt(b), ")");
    return a;
  };

  this.Pythagorean = function (a, b) {
    a = a * a + b * b;
    return a;
  };

  this.rPythagorean = function (a, b) {
    a = a * a - b * b;
    return a;
  };

  this.Binarynumber = function (num) {
    num = num.length;

    for (var i = 1; i < num; i++) {
      num = num;
      console.log(num);
    }

    return num;
  };

  this.k = function (num) {
    num += 273;
    return num;
  };
  /*this.Tem = (c) => {
      let k = c + 273.15;
  	let f = 1.8 * c + 32;
  	let r = 1.8 * k;
      const tet = `ケルビン: ${k} 摂氏度: ${c} 華氏度: ${f} ランキン度: ${r}`;
      return (k, c, f, r);
  }*/

};

var _default = maths;
exports["default"] = _default;