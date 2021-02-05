// 남은 시간 영역
const $leftTime = document.querySelector('.remaining-time');

let num = 30;
let timerId = null;
$leftTime.textContent = num;

window.onclick = () => {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    num = 30;
  }

  timerId = setInterval(() => {
    $leftTime.textContent = num;
    num -= 1;
    if (num === 0) {
      window.location.reload();
    }
  }, 1000);
};
