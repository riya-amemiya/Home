"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.returntext = exports.Science = void 0;

var _Show = _interopRequireDefault(require("./Show"));

var _HydrogenData = _interopRequireDefault(require("./Data/HydrogenData"));

var _HeliumData = _interopRequireDefault(require("./Data/HeliumData"));

var _LithiumData = _interopRequireDefault(require("./Data/LithiumData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var returntext = {
  name: null,
  num: null,
  text: null,
  Classification: null,
  Tribe: null,
  period: null,
  Atomicweight: null,
  type: null
};
exports.returntext = returntext;

var Sciences = function Sciences(numOrtext) {
  if (numOrtext == 1 || numOrtext == "H") {
    exports.returntext = returntext = _HydrogenData["default"];
  } else if (numOrtext == 2 || numOrtext == "He") {
    exports.returntext = returntext = _HeliumData["default"];
  } else if (numOrtext == 3 || numOrtext == "Li") {
    exports.returntext = returntext = _LithiumData["default"];
  } else if (numOrtext == 4 || numOrtext == "Be") {
    returntext.name = "ベリリウム";
    returntext.Classification = "金属";
  } else if (numOrtext == 5 || numOrtext == "B") {
    returntext.name = "ホウ素";
    returntext.Classification = "非金属";
  } else if (numOrtext == 6 || numOrtext == "C") {
    returntext.name = "炭素";
    returntext.Classification = "非金属";
  } else if (numOrtext == 7 || numOrtext == "N") {
    returntext.name = "窒素";
    returntext.Classification = "非金属";
  } else if (numOrtext == 8 || numOrtext == "O") {
    returntext.name = "酸素";
    returntext.Classification = "非金属";
  } else if (numOrtext == 9 || numOrtext == "F") {
    returntext.name = "フッ素";
    returntext.Classification = "非金属";
  } else if (numOrtext == 10 || numOrtext == "Ne") {
    returntext.name = "ネオン";
    returntext.Classification = "非金属";
  } else {
    returntext.name = "一致する原子がありませんでした";
  }

  if (returntext.Tribe == 1 || returntext.Tribe == 2 || returntext.Tribe == 12 || returntext.Tribe == 18) {
    returntext.type = "典型元素";
  } else {
    returntext.type = "遷移元素";
  }
};

var Science = function Science(req) {
  Sciences(req);
  (0, _Show["default"])(returntext.name, returntext.num, returntext.text, returntext.Classification, returntext.Tribe, returntext.period, returntext.Atomicweight, returntext.type);
};

exports.Science = Science;