$(function () {
  $('.btn-hover').hover(function () {
    $(this).find('i').addClass('faa-shake animated');
    $(this).animate({
      'font-size': '30px'
    }, 100);
  }, function () {
    $(this).find('i').removeClass('faa-shake animated');
    $(this).animate({
      'font-size': '25px'
    }, 400);
  });
  $('.checkbox').click(function () {
    if ($('.body').hasClass('active-dark')) {
      $('.body').removeClass('active-dark');
    } else {
      $('.body').addClass('active-dark');
    }
  });
  $('.modal-trigger').click(function () {
    $('.modal-fade-screen').fadeIn();
  });
  $('.modal-close').click(function () {
    $('.modal-fade-screen').fadeOut();
  });
  $(document).ready(function () {
    $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart', function (e) {
      $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
      e.preventDefault();
    });
  });
  $(document).ready(function () {
    $('.accordion-tabs-minimal').each(function (index) {
      $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
    });
    $('.accordion-tabs-minimal').on('click', 'li > a.tab-link', function (event) {
      if (!$(this).hasClass('is-active')) {
        event.preventDefault();
        var accordionTabs = $(this).closest('.accordion-tabs-minimal');
        accordionTabs.find('.is-open').removeClass('is-open').hide();
        $(this).next().toggleClass('is-open').toggle();
        accordionTabs.find('.is-active').removeClass('is-active');
        $(this).addClass('is-active');
      } else {
        event.preventDefault();
      }
    });
  });
  $(".js-vertical-tab-content").hide();
  $(".js-vertical-tab-content:first").show();
  /* if in tab mode */

  $(".js-vertical-tab").click(function (event) {
    event.preventDefault();
    $(".js-vertical-tab-content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).show();
    $(".js-vertical-tab").removeClass("is-active");
    $(this).addClass("is-active");
    $(".js-vertical-tab-accordion-heading").removeClass("is-active");
    $(".js-vertical-tab-accordion-heading[rel^='" + activeTab + "']").addClass("is-active");
  });
  /* if in accordion mode */

  $(".js-vertical-tab-accordion-heading").click(function (event) {
    event.preventDefault();
    $(".js-vertical-tab-content").hide();
    var accordion_activeTab = $(this).attr("rel");
    $("#" + accordion_activeTab).show();
    $(".js-vertical-tab-accordion-heading").removeClass("is-active");
    $(this).addClass("is-active");
    $(".js-vertical-tab").removeClass("is-active");
    $(".js-vertical-tab[rel^='" + accordion_activeTab + "']").addClass("is-active");
  });
});