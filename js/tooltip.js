$(function () {
  const tip = $("<div>")
    .css({
      position: "fixed",
      background: "#1a3d6b",
      color: "white",
      padding: "6px 14px",
      borderRadius: "8px",
      fontSize: "13px",
      pointerEvents: "none",
      opacity: 0,
      whiteSpace: "nowrap",
      transition: "opacity 0.15s",
    })
    .appendTo("body");

  $(document)
    .on("mousemove", ".district", function (e) {
      tip
        .css({ opacity: 1, left: e.clientX + 14, top: e.clientY - 36 })
        .text($(this).data("name") + " · " + $(this).data("en"));
    })
    .on("mouseleave", ".district", function () {
      tip.css("opacity", 0);
    })
    .on("click", ".district", function () {
      $(".district").removeClass("active");
      $(this).addClass("active");
    });
});
