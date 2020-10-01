"use strict";

require("./../../../../scss/basic-1.scss");

$(function () {
  $('.btn-p').click(function () {
    $('.active').removeClass('active');
    $('.img-li').eq(1).addClass('active');
    $('.active-p').text("今回は下記の画像を完成として作っていきます");
  });
});