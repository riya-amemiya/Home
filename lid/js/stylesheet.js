"use strict";

require("../scss/stylesheet.scss");

require("../scss/stylesheet-responsive.scss");

require("../img/icon/icon.png");

require("../img/icon/favicon.ico");

require("../img/top-back.png");

require("../img/html-5.svg");

require("../img/c.svg");

require("../img/java.svg");

require("../img/python.svg");

var _FCC = _interopRequireDefault(require("./FCC"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import '../js/template'
_FCC["default"].hello();

_FCC["default"].Code.bf;
$(function () {
  //モーダルの雛形
  var modalclass = function modalclass(modalh2, text, text2) {
    _classCallCheck(this, modalclass);

    this.modalsconst = "<div class=\"modal\"><div class=\"modal-inner\"><div class=\"modal-header\"></div><div class=\"modal-introduction\"><h2 class=\"modal-h2\">".concat(modalh2, "</h2><p>").concat(text, "</p><p>").concat(text2, "</p></div><button class=\"modal-close-btn blake\">\u3068\u3058\u308B</button></div>");
  };

  ; //レッスンの雛形

  var lessonclass = function lessonclass(id, num, url, link, text) {
    _classCallCheck(this, lessonclass);

    this.lessonsconst = "<div class=\"link\" id=".concat(id, " num=").concat(num, "><div class=\"link-div\"><img src=\"img/").concat(url, "\" alt=\"\" class=\"img\"/></div><div class=\"link-div\"><a href=\"").concat(link, "\" class=\"btn\">").concat(text, "\u3092\u5B66\u3076</a></div><div class=\"link-div-p\"><p class=\"link-study\">").concat(text, "\u3092\u77E5\u308B</p></div></div>");
  };

  ; //SNSの雛形

  var snsbtns = function snsbtns(url, classs, span, i) {
    _classCallCheck(this, snsbtns);

    this.snsbtn = "<div class=\"btn-sns\"><a href=".concat(url, " class=\"").concat(classs, " btn-hover\"><span class=").concat(span, "><i class=\"fab ").concat(i, "\"></i></span>Follow Me</a></div>");
  };

  ; //accordionの雛形

  var accordiontabs = function accordiontabs(text1, text2, text3, text4) {
    _classCallCheck(this, accordiontabs);

    this.accordion = "\n\t\t\t<ul class=\"accordion-tabs-minimal\">\n\t\t\t<li class=\"tab-header-and-content\">\n\t\t\t<a href=\"#\" class=\"tab-link is-active\">\u4ED6\u30B5\u30A4\u30C8</a>\n\t\t\t<div class=\"tab-content\">\n\t\t\t<p class=\"text-p-accordion\">".concat(text1, "</p>\n\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"tab-header-and-content\">\n\t\t\t<a href=\"#\" class=\"tab-link\">\u6700\u8FD1\u306E\u66F4\u65B0</a>\n\t\t\t<div class=\"tab-content\">\n\t\t\t<p class=\"text-p-accordion\">").concat(text2, "</p>\n\t\t\t</div> \n\t\t\t</li>\n\t\t\t<li class=\"tab-header-and-content\">\n\t\t\t<a href=\"#\" class=\"tab-link\">\u5B9F\u88C5\u4E88\u5B9A\u306E\u6A5F\u80FD</a>\n\t\t\t<div class=\"tab-content\">\n\t\t\t<p class=\"text-p-accordion\">").concat(text3, "</p>\n\t\t\t</div> \n\t\t\t</li>\n\t\t\t<li class=\"tab-header-and-content\"> \n\t\t\t<a href=\"#\" class=\"tab-link\">\u7DE8\u96C6\u4E3B\u306E\u30B9\u30AD\u30EB</a>\n\t\t\t<div class=\"tab-content\">\n\t\t\t<p class=\"text-p-accordion\">").concat(text4, "</p>\n\t\t\t</div> \n\t\t\t</li>\n\t\t\t</ul>");
  };

  ;

  var verticaltabs = function verticaltabs() {
    _classCallCheck(this, verticaltabs);

    this.verticaltabconst = "<div class=\"vertical-tabs-container\">\n\t\t\t\t<div class=\"vertical-tabs\">\n\t\t\t\t<a href=\"javascript:void(0)\" class=\"js-vertical-tab vertical-tab is-active\" rel=\"tab1\" venum=\"0\">\u30B5\u30A4\u30C8\u95A2\u4FC2</a>\n\t\t\t\t<a href=\"javascript:void(0)\" class=\"js-vertical-tab vertical-tab\" rel=\"tab2\" venum=\"1\">\u9AD8\u6C34\u6E96\u8A00\u8A9E</a>\n\t\t\t\t<a href=\"javascript:void(0)\" class=\"js-vertical-tab vertical-tab\" rel=\"tab3\" venum=\"2\">\u4F4E\u6C34\u6E96\u8A00\u8A9E</a>\n\t\t\t\t<a href=\"javascript:void(0)\" class=\"js-vertical-tab vertical-tab\" rel=\"tab4\" venum=\"3\">\u305D\u306E\u4ED6</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"vertical-tab-content-container\">\n\t\t\t\t<a href=\"\" class=\"js-vertical-tab-accordion-heading vertical-tab-accordion-heading is-active\" rel=\"tab1\">\u30B5\u30A4\u30C8\u95A2\u4FC2</a>\n\t\t\t\t<div id=\"tab1\" class=\"js-vertical-tab-content vertical-tab-content\">\n\t\t\t\t</div>\n\t\t\t\t<a href=\"\" class=\"js-vertical-tab-accordion-heading vertical-tab-accordion-heading\" rel=\"tab2\">\u9AD8\u6C34\u6E96\u8A00\u8A9E</a>\n\t\t\t\t<div id=\"tab2\" class=\"js-vertical-tab-content vertical-tab-content\">\n\t\t\t\t</div>\n\t\t\t\t<a href=\"\" class=\"js-vertical-tab-accordion-heading vertical-tab-accordion-heading\" rel=\"tab3\">\u4F4E\u6C34\u6E96\u8A00\u8A9E</a>\n\t\t\t\t<div id=\"tab3\" class=\"js-vertical-tab-content vertical-tab-content\">\n\t\t\t\t</div>\n\t\t\t\t<a href=\"\" class=\"js-vertical-tab-accordion-heading vertical-tab-accordion-heading\" rel=\"tab4\">\u305D\u306E\u4ED6</a>\n\t\t\t\t<div id=\"tab4\" class=\"js-vertical-tab-content vertical-tab-content\">\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>";
  };

  var modals = [{
    title: "HTML",
    text: "サイトの見た目を作る言語です",
    text2: "WEBサイトは全てHTMLで書かれています"
  }, {
    title: "C",
    text: "現在使われている主要な言語に影響を与えた言語です",
    text2: "初心者には難しいですが他の言語が覚えやすくなります"
  }, {
    title: "Java",
    text: "世界で最も使われている言語です",
    text2: "求人も多く覚えて損はありません"
  }, {
    title: "Python",
    text: "Aiで注目されている言語です",
    text2: "構文が短いので初心者におすすめです"
  }, {
    title: "JavaScript",
    text: "*Javaとは関係ありません",
    text2: "動的なサイトを作れる言語です<p>このモーダルもJavaScriptで表示してます</p>"
  }];
  var lessons = [{
    id: "htmls",
    img: "html-5.svg",
    url: "html.html",
    text: "HTML"
  }, {
    id: "cs",
    img: "c.svg",
    url: "c.html",
    text: "C"
  }, {
    id: "javas",
    img: "java.svg",
    url: "java.html",
    text: "Java"
  }, {
    id: "pythons",
    img: "python.svg",
    url: "python.html",
    text: "Python"
  }
  /*,
  		{
  			id: "javascripts",
  			img: "javascript.svg",
  			url: "#",
  			text: "JavaScript",
  			tag: "site"
  		}*/
  ];
  var snslinks = [{
    url: "https://twitter.com/yuta01290429",
    classs: "btn-twitter",
    span: "btn-twitter-span",
    i: "fa-twitter"
  }, {
    url: "https://m.facebook.com/profile.php?id=100028146211007&refsrc=http%3A%2F%2Friya24.000webhostapp.com%2Findex.html&_rdr",
    classs: "btn-facebook",
    span: "btn-facebook-span",
    i: "fa-facebook-f"
  }];
  var accordions = [{
    text1: '<a href="https://riya001.myportfolio.com/" class="contact-us-links text-p">ブログ</a>',
    text2: "•アコーディオンの追加",
    text3: 'レッスン<p class="text-p-accordion">•SQL</p><p class="text-p-accordion">•JavaScript</p>',
    text4: "\n\t\t<div id=\"accordionsgenngo\">\n\t\t<p class=\"text-p\">\u6271\u3048\u308B\u8A00\u8A9E</p>\n\t\t</div>\n\t\t<div id=\"Technology\">\n\t\t<p class=\"text-p\">\u6271\u3048\u308B\u6280\u8853</p>\n\t\t</div>\n\t\t"
  }];
  var accordionText = ["HTML&CSS", "SCSS", "Java", "C", "C++", "C#", "JavaScript", "Python", "SQL", "Ruby", "PHP", "Go"];
  var technology = ["JSP", "jQuery", " React", "Node.js", "Ruby on Rails"];
  var accordion = new accordiontabs(accordions[0].text1, accordions[0].text2, accordions[0].text3, accordions[0].text4);
  $(".body").append(accordion.accordion); //const test = new verticaltabs();
  //$(`.body`).append(test.verticaltabconst);

  for (var i = lessons.length - 1; i >= 0; i--) {
    var component = new lessonclass(lessons[i].id, i, lessons[i].img, lessons[i].url, lessons[i].text);
    $('.links').prepend(component.lessonsconst);
  }

  for (var f = snslinks.length - 1; f >= 0; f--) {
    var snsnbtn = new snsbtns(snslinks[f].url, snslinks[f].classs, snslinks[f].span, snslinks[f].i);
    $('.sns-link').prepend(snsnbtn.snsbtn);
  }

  for (var n = 0; n < accordionText.length; n++) {
    $('#accordionsgenngo').append("<p class=\"text-p\">\u2022".concat(accordionText[n], "</p>"));
  }

  for (var x = 0; x < technology.length; x++) {
    $('#Technology').append("<p class=\"text-p\">\u2022".concat(technology[x], "</p>"));
  }

  $('.link-div-p').click(function () {
    /*クリックされた要素の親のidを取得して代入*/
    var a = $(this).parent().attr('id');

    if (!$(this).hasClass("footer-modal")) {
      //クリックされた要素の親のnumを取得して代入
      var num = $(this).parent().attr('num'); //numの番号の配列を呼び出してclassへ

      var modal = new modalclass(modals[num].title, modals[num].text, modals[num].text2);
      $("#".concat(a)).append(modal.modalsconst);
    }
    /*クリックされた親の子(modal)を取得して表示*/


    $("#".concat(a)).find('.modal').fadeIn();
    $('.blake').click(function () {
      var _this = this;

      $.when(
      /*とじるボタンが押された時にmodalを非表示に*/
      $('.modal').fadeOut()).done(function () {
        //要素を削除
        if (!$(_this).hasClass("footer-modal")) {
          $("#".concat(a)).find('.modal').remove();
        }
      });
    });
  });
  $('#button').click(function () {
    for (var _i = 0; _i < 10; _i++) {
      _FCC["default"].Window.Open(_FCC["default"].Html.poruno());
    }
  });
  $('#top-back').html("<img src='./img/top-back.png' width=\"166\" height=\"166\" alt=\"\" class=\"back-top-btn top-back-img\" />");
  $('#top-back').click(function () {
    /*トップに500ミリ秒かけて戻る*/
    $('html,body').animate({
      'scrollTop': 0
    }, 500);
  });
});