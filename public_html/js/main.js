$(document).ready(function() {

  // navbar scroll
  $(document).scroll(function() {
    if ($(document).scrollTop() > 1) {

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

  // set line width to h1 width
  $(".contact-banner .line").width($(".contact-banner h1").width());


  // bx slider
  $(".banner-slider").bxSlider({
    controls: false,
    mode: "fade"
  });

  var productsSlider = $(".products-slider").bxSlider({
    controls: true,
    pager: false,
    nextSelector: ".slide-next",
    prevSelector: ".slide-prev",
    nextText: "",
    prevText: "",
    mode: "fade"
  });

  $(".slide-next").click(function() {
    productsSlider.goToNextSlide();
    return false;
  });

  $(".slide-prev").click(function() {
    productsSlider.goToPrevSlide();
    return false;
  });

  // read more
  $(".read-more").click(function(e) {
    e.preventDefault();
    $(".more-content").fadeIn();
  });

  $(".close-content").click(function(e) {
    e.preventDefault();
    $(".more-content").fadeOut();
  });

});
