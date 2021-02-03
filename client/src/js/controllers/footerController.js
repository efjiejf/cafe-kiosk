import model from '../model/model';
import * as footer from '../views/footer-render';

// 결제 모달 관련
const $orderBtn = document.querySelector('.order-btn');
const $resultCheck = document.querySelector('.pay-result-check');
const $resultCancel = document.querySelector('.pay-result-cancel');
const $modalDisplay = document.querySelector('.pay-modal-container');
const $deleteAllItems = document.querySelector('.delete-all-items');
const $orderList = document.querySelector('.order-list');

// 결제 모달 관련 이벤트 핸들러
$orderBtn.onclick = () => {
  if (!model.menu.length) return;
  $modalDisplay.classList.replace(
    'footer-modal-invisible',
    'footer-modal-visible'
  );
};

$resultCheck.onclick = () => {
  $modalDisplay.classList.replace(
    'footer-modal-visible',
    'footer-modal-invisible'
  );
};

$resultCancel.onclick = () => {
  $modalDisplay.classList.replace(
    'footer-modal-visible',
    'footer-modal-invisible'
  );
};

$deleteAllItems.onclick = () => {
  footer.deleteAllItems();
};

$orderList.onclick = (e) => {
  if (!e.target.classList.contains('remove-item')) return;
  footer.removeItem(e.target.parentNode.id);
};

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
  console.log('디바운스 작동', e.target.value);

  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    num = 30;
  }

  timerId = setInterval(() => {
    $leftTime.textContent = num;
    num -= 1;

    if (num === 0) {
      console.log('새로고침&초기화면');
      window.location.reload();
    }
  }, 1000);
}, 50);
