$(function () {
  $("html,body").animate({ scrollTop: 0 }, "1");
});

$(function ($) {
  $("#logo").on("click", function () {
    const logoTop = $("body").offset().top;
    $("html").animate({ scrollTop: logoTop });
  });
});
$(function ($) {
  $(".about").on("click", function () {
    const aboutTop = $(".contentsWrap__2").offset().top - 100;
    $("html").animate({ scrollTop: aboutTop });
  });
});
$(function ($) {
  $(".future").on("click", function () {
    const futureTop = $(".contentsWrap__3").offset().top - 100;
    $("html").animate({ scrollTop: futureTop });
  });
});
$(function ($) {
  $(".example").on("click", function () {
    const exampleTop = $(".contentsWrap__4").offset().top - 100;
    $("html").animate({ scrollTop: exampleTop });
  });
});
$(function ($) {
  $(".toor").on("click", function () {
    const toorTop = $(".contentsWrap__5").offset().top - 100;
    $("html").animate({ scrollTop: toorTop });
  });
});
$(function ($) {
  $(".event").on("click", function () {
    const eventTop = $(".contentsWrap__6").offset().top - 100;
    $("html").animate({ scrollTop: eventTop });
  });
});
$(function ($) {
  $(".contact").on("click", function () {
    const contactTop = $(".contentsWrap__7").offset().top - 100;
    $("html").animate({ scrollTop: contactTop });
  });
});
