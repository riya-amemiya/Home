// JavaScript Document
import './../scss/basic-3.scss';
$(function () {
  function btntaga() {
    $('#btn-tag-p').fadeOut(300);
    $('#btn-tag-p-f').css("display", "block");
    $('.lesson-a').fadeIn();
    $('.lesson-p').fadeOut();
  }

  function btntagp() {
    $('#btn-tag-a').fadeOut(300);
    $('#btn-tag-a-f').css("display", "block");
    $('.lesson-p').fadeIn();
    $('.lesson-a').fadeOut();
  }
  $('.btn-tag').click(function () {
    $('.contents').text("");
  });
  $('.foorm-btn').click(function () {
    let url = $('.text-url').val();
    $('.contents').append(url);
  });
  $('#btn-tag-a').click(function () {
    btntaga();
  });
  $('#btn-tag-p').click(function () {
    btntagp();
  });
  $('#btn-tag-a-f').click(function () {
    btntaga();
    $('#btn-tag-a').fadeIn();
  });
  $('#btn-tag-p-f').click(function () {
    btntagp();
    $('#btn-tag-p').fadeIn();
  });
});