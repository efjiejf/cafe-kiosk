// 남은 시간 영역
const $leftTime = document.querySelector('.remaining-time');

let num = 30;
let timerId = null;
$leftTime.textContent = num;

const debounce = (callback, delay) => {
  let timerId;

  return (event) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(callback, delay, event);
  };
};

window.onclick = debounce((e) => {
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
}, 50);
