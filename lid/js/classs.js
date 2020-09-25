$(() => {
  //モーダルの雛形
  class modalclass {
    constructor(modal, num) {
      this.modalsconst = `<div class="modal"><div class="modal-inner"><div class="modal-header"></div><div class="modal-introduction"><h2 class="modal-h2">${modal[num].h2}</h2><p>${modal[num].text}</p><p>${modal[num].text2}</p></div><button class="modal-close-btn blake">とじる</button></div>`;
    }

  }

  ; //SNSの雛形

  class snsbtns {
    constructor(num, sns) {
      this.snsbtn = `<div class="btn-sns"><a href=${sns[num].url} class="${sns[num].classs} btn-hover"><span class=${sns[num].span}><i class="fab ${sns[num].i}"></i></span>Follow Me</a></div>`;
    }

  }

  ; //accordionの雛形

  class accordiontabs {
    constructor(text) {
      this.accordion = `
			<ul class="accordion-tabs-minimal">
			<li class="tab-header-and-content">
			<a href="#" class="tab-link is-active">${text[0].title}</a>
			<div class="tab-content">
			<p class="text-p-accordion" id="accordiontab-1">${text[0].title}</p>
			</div>
			</li>
			<li class="tab-header-and-content">
			<a href="#" class="tab-link">${text[1].title}</a>
			<div class="tab-content">
			<p class="text-p-accordion" id="accordiontab-2">${title[1].title}</p>
			</div> 
			</li>
			<li class="tab-header-and-content">
			<a href="#" class="tab-link">${text[2].title}</a>
			<div class="tab-content">
			<p class="text-p-accordion" id="accordiontab-3">${text[2].title}</p>
			</div> 
			</li>
			<li class="tab-header-and-content"> 
			<a href="#" class="tab-link">${text[3].title}</a>
			<div class="tab-content">
			<p class="text-p-accordion" id="accordiontab-4">${text[3].title}</p>
			</div> 
			</li>
			</ul>`;
    }

  }

  ;

  class button {
    constructor(text) {
      this.button = `<input type="button" value=${text} id="button">`;
    }

    Hover(dom, color) {
      $(`${dom}`).animate({
        "color": color
      }, 100);
    }

  }

  ;

  class tes {
    constructor() {}

  }

  ;

  class start {
    constructor() {
      this.setModal = (num, modal) => {
        this.Modal = new modalclass(num, modal);
        return this.Modal;
      };

      this.setAccordion = text => {
        this.Accordion = new accordiontabs(text);
        return this.Accordion;
      };

      this.setButton = text => {
        this.BUtton = new button(text);
        return this.BUtton;
      };

      this.setSns = (num, sns) => {
        this.Snsbtn = new snsbtns(num, sns);
      };
    }

  }

  ;
});