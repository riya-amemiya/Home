import './../scss/basic.scss';
$(function () {
  $('#link-difficulty').click(function () {
    if ($('.links').hasClass('air')) {
      $('.air').removeClass('air');
      $('.links').css("display", "none");
      $('.btn-link-difficulty').text('他の難易度へ');
    } else {
      $('.links').addClass('air');
      $('.links').css("display", "inline-block");
      $('.btn-link-difficulty').text('閉じる');
    }
  });
});