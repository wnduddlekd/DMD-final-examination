$(document).ready(function () {
  function loadPage(page) {
    $("#content").fadeOut(200, function () {
      $(this).load(`./pages/${page}.html`, function () {
        $(this).fadeIn(200);
      });
    });
  }

  function checkHash() {
    let hash = window.location.hash.replace("#", "");
    if (hash === "") {
      hash = "home";
    }
    loadPage(hash);
  }

  $(window).on("hashchange", checkHash);
  checkHash();
});
