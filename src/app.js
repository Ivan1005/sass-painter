var $ = require('jquery');

$(document).ready(function(){
  $(".dropdown").mouseover(function(){
    $(".drop").css("background-color", "#f1f1f1");
    $(".drop").css("color", "black");
    $("#myDropdown").show();
  });
  $(".dropdown").mouseleave(function(){
    $(".drop").css("background-color", "black");
    $(".drop").css("color", "white");
    $("#myDropdown").hide();
  });

  $(".prev").click(function(){
    prevImage();
  });
  $(".next").click(function(){
    nextImage();
  });
});
function nextImage (){
  var image = $(".images img.active");
  var first = $(".images img.first");
  var cerchio = $(".nav i.active");
  var cerchioF = $(".nav i.first");
  image.removeClass("active");
  cerchio.removeClass("active");

  if (image.hasClass("last")) {
    first.addClass("active");
    cerchioF.addClass("active");
  }else{
    image.next().addClass("active");
    cerchio.next().addClass("active");

  };
};
function prevImage (){
  var image = $(".images img.active");
  var last = $(".images img.last");
  var cerchio = $(".nav i.active");
  var cerchioF = $(".nav i.last");
  image.removeClass("active");
  cerchio.removeClass("active");

  if (image.hasClass("first")) {
    last.addClass("active");
    cerchioF.addClass("active");
  }else{
    image.prev().addClass("active");
    cerchio.prev().addClass("active");
  };
};
