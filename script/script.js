let cur = 0;
const total = 3; // 원본 개수

const slider = document.getElementById("slider");

function move() {
  cur++;
  slider.style.transition = "transform 0.5s ease";
  slider.style.transform = `translateX(-${cur * 100}%)`;

  // 마지막(복제 슬라이드)에 도달하면
  if (cur === total) {
    setTimeout(() => {
      slider.style.transition = "none"; // 애니메이션 제거
      slider.style.transform = `translateX(0%)`;
      cur = 0;
    }, 300); // transition 시간과 동일
  }
}

setInterval(move, 3000);
