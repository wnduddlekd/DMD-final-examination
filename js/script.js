$(function () {
  function checkScroll() {
    $(".con").each(function () {
      const top = $(this).offset().top;
      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (scrollTop + windowHeight > top + 100) {
        $(this).addClass("show");
      }
    });
  }

  $(window).on("scroll", checkScroll);

  function loadPage(page) {
    $("#content").fadeOut(200, function () {
      $(this).load(`/html/pages/${page}.html`, function () {
        $(this).fadeIn(200);
        checkScroll();
      });
    });
  }

  function checkHash() {
    let hash = window.location.hash.replace("#", "");
    if (hash === "") hash = "home";
    loadPage(hash);
  }

  $(window).on("hashchange", checkHash);
  checkHash();
});
