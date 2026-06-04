$(window).on("scroll", function () {
  $(".con").each(function () {
    const top = $(this).offset().top;
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (scrollTop + windowHeight > top + 100) {
      $(this).addClass("show");
    }
  });
});

// 페이지 로드 시에도 실행
$(window).trigger("scroll");
