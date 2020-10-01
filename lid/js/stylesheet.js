import '../scss/stylesheet.scss';
import '../scss/stylesheet-responsive.scss';
import '../img/icon/icon.png';
import '../img/icon/favicon.ico';
import '../img/top-back.png';
import '../img/html-5.svg';
import '../img/c.svg';
import '../img/java.svg';
import '../img/python.svg';
import FCC from './FCC'; //import '../js/template'

FCC.hello();
FCC.Code.bf;
$(function () {
  //モーダルの雛形
  class modalclass {
    constructor(modalh2, text, text2) {
      this.modalsconst = `<div class="modal"><div class="modal-inner"><div class="modal-header"></div><div class="modal-introduction"><h2 class="modal-h2">${modalh2}</h2><p>${text}</p><p>${text2}</p></div><button class="modal-close-btn blake">とじる</button></div>`;
    }

  }

  ; //レッスンの雛形

  class lessonclass {
    constructor(id, num, url, link, text) {
      this.lessonsconst = `<div class="link" id=${id} num=${num}><div class="link-div"><img src="img/${url}" alt="" class="img"/></div><div class="link-div"><a href="${link}" class="btn">${text}を学ぶ</a></div><div class="link-div-p"><p class="link-study">${text}を知る</p></div></div>`;
    }

  }

  ; //SNSの雛形

  class snsbtns {
    constructor(url, classs, span, i) {
      this.snsbtn = `<div class="btn-sns"><a href=${url} class="${classs} btn-hover"><span class=${span}><i class="fab ${i}"></i></span>Follow Me</a></div>`;
    }

  }

  ; //accordionの雛形

  class accordiontabs {
    constructor(text1, text2, text3, text4) {
      this.accordion = `
			<ul class="accordion-tabs-minimal">
			<li class="tab-header-and-content">
			<a href="#" class="tab-link is-active">他サイト</a>
			<div class="tab-content">
			<p class="text-p-accordion">${text1}</p>
			</div>
			</li>
			<li class="tab-header-and-content">
			<a href="#" class="tab-link">最近の更新</a>
			<div class="tab-content">
			<p class="text-p-accordion">${text2}</p>
			</div> 
			</li>
			<li class="tab-header-and-content">
			<a href="#" class="tab-link">実装予定の機能</a>
			<div class="tab-content">
			<p class="text-p-accordion">${text3}</p>
			</div> 
			</li>
			<li class="tab-header-and-content"> 
			<a href="#" class="tab-link">編集主のスキル</a>
			<div class="tab-content">
			<p class="text-p-accordion">${text4}</p>
			</div> 
			</li>
			</ul>`;
    }

  }

  ;

  class verticaltabs {
    constructor() {
      this.verticaltabconst = `<div class="vertical-tabs-container">
				<div class="vertical-tabs">
				<a href="javascript:void(0)" class="js-vertical-tab vertical-tab is-active" rel="tab1" venum="0">サイト関係</a>
				<a href="javascript:void(0)" class="js-vertical-tab vertical-tab" rel="tab2" venum="1">高水準言語</a>
				<a href="javascript:void(0)" class="js-vertical-tab vertical-tab" rel="tab3" venum="2">低水準言語</a>
				<a href="javascript:void(0)" class="js-vertical-tab vertical-tab" rel="tab4" venum="3">その他</a>
				</div>
				<div class="vertical-tab-content-container">
				<a href="" class="js-vertical-tab-accordion-heading vertical-tab-accordion-heading is-active" rel="tab1">サイト関係</a>
				<div id="tab1" class="js-vertical-tab-content vertical-tab-content">
				</div>
				<a href="" class="js-vertical-tab-accordion-heading vertical-tab-accordion-heading" rel="tab2">高水準言語</a>
				<div id="tab2" class="js-vertical-tab-content vertical-tab-content">
				</div>
				<a href="" class="js-vertical-tab-accordion-heading vertical-tab-accordion-heading" rel="tab3">低水準言語</a>
				<div id="tab3" class="js-vertical-tab-content vertical-tab-content">
				</div>
				<a href="" class="js-vertical-tab-accordion-heading vertical-tab-accordion-heading" rel="tab4">その他</a>
				<div id="tab4" class="js-vertical-tab-content vertical-tab-content">
				</div>
				</div>
				</div>`;
    }

  }

  const modals = [{
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
  const lessons = [{
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
  const snslinks = [{
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
  const accordions = [{
    text1: '<a href="https://riya001.myportfolio.com/" class="contact-us-links text-p">ブログ</a>',
    text2: "•アコーディオンの追加",
    text3: 'レッスン<p class="text-p-accordion">•SQL</p><p class="text-p-accordion">•JavaScript</p>',
    text4: `
		<div id="accordionsgenngo">
		<p class="text-p">扱える言語</p>
		</div>
		<div id="Technology">
		<p class="text-p">扱える技術</p>
		</div>
		`
  }];
  const accordionText = ["HTML&CSS", "SCSS", "Java", "C", "C++", "C#", "JavaScript", "Python", "SQL", "Ruby", "PHP", "Go"];
  const technology = ["JSP", "jQuery", " React", "Node.js", "Ruby on Rails"];
  const accordion = new accordiontabs(accordions[0].text1, accordions[0].text2, accordions[0].text3, accordions[0].text4);
  $(`.body`).append(accordion.accordion); //const test = new verticaltabs();
  //$(`.body`).append(test.verticaltabconst);

  for (let i = lessons.length - 1; i >= 0; i--) {
    const component = new lessonclass(lessons[i].id, i, lessons[i].img, lessons[i].url, lessons[i].text);
    $('.links').prepend(component.lessonsconst);
  }

  for (let f = snslinks.length - 1; f >= 0; f--) {
    const snsnbtn = new snsbtns(snslinks[f].url, snslinks[f].classs, snslinks[f].span, snslinks[f].i);
    $('.sns-link').prepend(snsnbtn.snsbtn);
  }

  for (let n = 0; n < accordionText.length; n++) {
    $('#accordionsgenngo').append(`<p class="text-p">•${accordionText[n]}</p>`);
  }

  for (let x = 0; x < technology.length; x++) {
    $('#Technology').append(`<p class="text-p">•${technology[x]}</p>`);
  }

  $('.link-div-p').click(function () {
    /*クリックされた要素の親のidを取得して代入*/
    var a = $(this).parent().attr('id');

    if (!$(this).hasClass("footer-modal")) {
      //クリックされた要素の親のnumを取得して代入
      let num = $(this).parent().attr('num'); //numの番号の配列を呼び出してclassへ

      const modal = new modalclass(modals[num].title, modals[num].text, modals[num].text2);
      $(`#${a}`).append(modal.modalsconst);
    }
    /*クリックされた親の子(modal)を取得して表示*/


    $(`#${a}`).find('.modal').fadeIn();
    $('.blake').click(function () {
      $.when(
      /*とじるボタンが押された時にmodalを非表示に*/
      $('.modal').fadeOut()).done(() => {
        //要素を削除
        if (!$(this).hasClass("footer-modal")) {
          $(`#${a}`).find('.modal').remove();
        }
      });
    });
  });
  $('#button').click(function () {
    for (let i = 0; i < 10; i++) {
      FCC.Window.Open(FCC.Html.poruno());
    }
  });
  $('#top-back').click(function () {
    /*トップに500ミリ秒かけて戻る*/
    $('html,body').animate({
      'scrollTop': 0
    }, 500);
  });
});