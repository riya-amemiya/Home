"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {
  //モーダルの雛形
  var modalclass = function modalclass(modal, num) {
    _classCallCheck(this, modalclass);

    this.modalsconst = "<div class=\"modal\"><div class=\"modal-inner\"><div class=\"modal-header\"></div><div class=\"modal-introduction\"><h2 class=\"modal-h2\">".concat(modal[num].h2, "</h2><p>").concat(modal[num].text, "</p><p>").concat(modal[num].text2, "</p></div><button class=\"modal-close-btn blake\">\u3068\u3058\u308B</button></div>");
  };

  ; //SNSの雛形

  var snsbtns = function snsbtns(num, sns) {
    _classCallCheck(this, snsbtns);

    this.snsbtn = "<div class=\"btn-sns\"><a href=".concat(sns[num].url, " class=\"").concat(sns[num].classs, " btn-hover\"><span class=").concat(sns[num].span, "><i class=\"fab ").concat(sns[num].i, "\"></i></span>Follow Me</a></div>");
  };

  ; //accordionの雛形

  var accordiontabs = function accordiontabs(text) {
    _classCallCheck(this, accordiontabs);

    this.accordion = "\n\t\t\t<ul class=\"accordion-tabs-minimal\">\n\t\t\t<li class=\"tab-header-and-content\">\n\t\t\t<a href=\"#\" class=\"tab-link is-active\">".concat(text[0].title, "</a>\n\t\t\t<div class=\"tab-content\">\n\t\t\t<p class=\"text-p-accordion\" id=\"accordiontab-1\">").concat(text[0].title, "</p>\n\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"tab-header-and-content\">\n\t\t\t<a href=\"#\" class=\"tab-link\">").concat(text[1].title, "</a>\n\t\t\t<div class=\"tab-content\">\n\t\t\t<p class=\"text-p-accordion\" id=\"accordiontab-2\">").concat(title[1].title, "</p>\n\t\t\t</div> \n\t\t\t</li>\n\t\t\t<li class=\"tab-header-and-content\">\n\t\t\t<a href=\"#\" class=\"tab-link\">").concat(text[2].title, "</a>\n\t\t\t<div class=\"tab-content\">\n\t\t\t<p class=\"text-p-accordion\" id=\"accordiontab-3\">").concat(text[2].title, "</p>\n\t\t\t</div> \n\t\t\t</li>\n\t\t\t<li class=\"tab-header-and-content\"> \n\t\t\t<a href=\"#\" class=\"tab-link\">").concat(text[3].title, "</a>\n\t\t\t<div class=\"tab-content\">\n\t\t\t<p class=\"text-p-accordion\" id=\"accordiontab-4\">").concat(text[3].title, "</p>\n\t\t\t</div> \n\t\t\t</li>\n\t\t\t</ul>");
  };

  ;

  var button = /*#__PURE__*/function () {
    function button(text) {
      _classCallCheck(this, button);

      this.button = "<input type=\"button\" value=".concat(text, " id=\"button\">");
    }

    _createClass(button, [{
      key: "Hover",
      value: function Hover(dom, color) {
        $("".concat(dom)).animate({
          "color": color
        }, 100);
      }
    }]);

    return button;
  }();

  ;

  var tes = function tes() {
    _classCallCheck(this, tes);
  };

  ;

  var start = function start() {
    var _this = this;

    _classCallCheck(this, start);

    this.setModal = function (num, modal) {
      _this.Modal = new modalclass(num, modal);
      return _this.Modal;
    };

    this.setAccordion = function (text) {
      _this.Accordion = new accordiontabs(text);
      return _this.Accordion;
    };

    this.setButton = function (text) {
      _this.BUtton = new button(text);
      return _this.BUtton;
    };

    this.setSns = function (num, sns) {
      _this.Snsbtn = new snsbtns(num, sns);
    };
  };

  ;
});