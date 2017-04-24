// navbar scroll
$(document).scroll(function() {
  if ($(document).scrollTop() > 10) {
    $(".navbar-default").addClass("scroll-navbar");
    $(".navbar-brand img").attr("src", "img/logo-small.png");
    $(".navbar-brand").addClass("scroll-brand");
    $(".scroll-number").css("display", "inline-block");
    $(".navbar-default .signup a, .navbar-default .lang > a").addClass("scroll-btn");
  } else {
    $(".navbar-default").removeClass("scroll-navbar");
    $(".navbar-brand img").attr("src", "img/logo.png");
    $(".navbar-brand").removeClass("scroll-brand");
    $(".scroll-number").css("display", "none");
    $(".navbar-default .signup a, .navbar-default .lang > a").removeClass("scroll-btn");
  }
});
