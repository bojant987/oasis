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
    $(this).parent().parent().fadeOut();
  });

  // nav tabs img swap on active
  if ($(".nav-tabs li.active img").length > 0) {
    $(".nav-tabs li.active img").attr("src", $(".nav-tabs li.active img").attr("src").replace(".png", "-hov.png"));
  }

  $(".nav-tabs").on("click", "li", function(e) {
    var orgSrc = $(this).find("img").attr("src");
    var newSrc = orgSrc.replace(".png", "-hov.png");
    var imgs = $(".nav-tabs li img");


    imgs.each(function() {
      if ($(this).attr("src").search("hov") !== -1 && $(this).get(0) !== $(e.target).get(0) && $(this).parent().get(0) !== $(e.target).get(0)) {
        $(this).attr("src", $(this).attr("src").replace("-hov.png", ".png"));
      }
    });

    if (!$(this).hasClass("active")) {
      $(this).find("img").attr("src", newSrc);
    }
  });

  // input for circle progress
  function processInputForProgressBar(circle) {
    var min = circle.attr("data-min");
    var max = circle.attr("data-max");
    var value = circle.attr("data-value");

    return value / (max - min);
  }

  // label for circle progress
  function labelForProgressBar() {
    $(".label-circle").each(function() {
      var value = $(this).prev().attr("data-value");
      $(this).html(value + " days");
    });
  }
  labelForProgressBar();

  // circle progress bars
  $("#progress-circle1").circleProgress({
    value: processInputForProgressBar($("#progress-circle1")),
    size: 200,
    thickness: 35,
    fill: {
      color: "#54acde"
    },
    emptyFill: "#d5d5d5"
  });

  $("#progress-circle2").circleProgress({
    value: processInputForProgressBar($("#progress-circle2")),
    size: 150,
    thickness: 25,
    fill: {
      color: "#54acde"
    },
    emptyFill: "#d5d5d5"
  });

  $("#progress-circle3").circleProgress({
    value: processInputForProgressBar($("#progress-circle3")),
    size: 150,
    thickness: 25,
    fill: {
      color: "#54acde"
    },
    emptyFill: "#d5d5d5"
  });

  // opened-link on why-us page
  $(".circle-wrapper").on("click", "a", function(e) {
    e.preventDefault();
    var openedLinks = $(".opened-link");
    var id = $(this).attr("data-opens");


    openedLinks.each(function() {
        $(this).hide();
    });

    $(".why-oasis").find("#" + id).fadeIn();

  });

});
