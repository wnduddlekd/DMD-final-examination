$(function () {
  $(".top-btn").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600,
    );

    return false;
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".top-btn").fadeIn();
    } else {
      $(".top-btn").fadeOut();
    }
  });
});
