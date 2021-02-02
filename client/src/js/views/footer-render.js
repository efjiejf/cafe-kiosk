// order list

// 주문내역/ 결제내역 랜더 함수
const render = list => {
  const $orderList = document.querySelector('.order-list');
  const $selectedItemNum = document.querySelector('.selected-item-num');
  const $totalPrice = document.querySelector('.total-price');

  const $payList = document.querySelector('.pay-list');
  const $totalItemNum = document.querySelector('.total-item-num');
  const $totalItemPrice = document.querySelector('.total-item-price');

  let _list = [];
  let orderHtml = '';
  let payHtml = '';

  _list = list.filter(v => v.active);

  _list.forEach(({ id, menuName, price }) => {
    orderHtml += `<li id="${id}" class="order-item">
    <i class="remove-item far fa-times-circle"></i>
    <span class="item-name">${menuName}</span>
    <span class="item-price">${price}원</span>
    </li>`;
  });

  _list.forEach(({ id, menuName, price }) => {
    payHtml += `<li id="${id}" class="pay-item">
    <span class="item-name">${menuName}</span>
    <span><span class="item-price">${price}</span>원</span>
  </li>`;
  });

  $orderList.innerHTML = orderHtml;
  $payList.innerHTML = payHtml;

  $selectedItemNum.textContent = _list.length + '개';
  $totalPrice.textContent = _list.reduce((acc, cur) => acc + cur.price, 0) + '원';

  $totalItemNum.textContent = _list.length + '개';
  $totalItemPrice.textContent = $totalPrice.textContent;

  // list.forEach(v => { v.active = false; });
};

// 남은 시간 영역
const $leftTime = document.querySelector('.remaining-time');

let num = 10;
let timerId = null;
$leftTime.textContent = num;

const debounce = (callback, delay) => {
  let timerId;

  return event => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(callback, delay, event);
  };
};

window.onmousemove = debounce(e => {
  console.log(e.target.value);

  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    num = 10;
  }

  timerId = setInterval(() => {
    $leftTime.textContent = num;
    num -= 1;

    if (num === 0) {
      console.log('새로고침&초기화면');
      window.location.reload();
    }
  }, 1000);
}, 300);

export default render;
