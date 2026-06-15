$(function () {
  const $letters = $(".hv-wave .letter");
  const maxDist = 4;

  const BASE = [0, 200, 140];
  const PEAK = [124, 255, 224];

  function lerpColor(c1, c2, t) {
    const r = Math.round(c1[0] + (c2[0] - c1[0]) * t);
    const g = Math.round(c1[1] + (c2[1] - c1[1]) * t);
    const b = Math.round(c1[2] + (c2[2] - c1[2]) * t);
    return `rgb(${r}, ${g}, ${b})`;
  }

  $letters.each(function (idx) {
    $(this).on("mouseenter", function () {
      $letters.each(function (j) {
        const dist = Math.abs(idx - j);
        if (dist > maxDist) return;

        const t = 1 - dist / maxDist; // 중심일수록 1, 가장자리일수록 0
        const delay = dist * 40;
        const lift = Math.max(2, 14 - dist * 3);
        const color = lerpColor(BASE, PEAK, t);
        const $other = $(this);

        setTimeout(() => {
          $other.css({
            transform: `translateY(-${lift}px)`,
            color: color,
          });
        }, delay);

        setTimeout(() => {
          $other.css({
            transform: "",
            color: "",
          });
        }, delay + 280);
      });
    });
  });
});
