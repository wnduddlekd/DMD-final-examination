$(function () {
  let i = 0;

  function slide() {
    i = (i + 1) % 3;

    $(".slide li").fadeOut();
    $(".slide li").eq(i).fadeIn();
  }
  setInterval(slide, 5000);
});
