// order list

// 주문내역 랜더 함수
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

  $selectedItemNum.textContent = _list.length;
  $totalPrice.textContent = _list.reduce((acc, cur) => acc + cur.price, 0);

  $totalItemNum.textContent = _list.length;
  $totalItemPrice.textContent = $totalPrice.textContent;

  list.forEach(v => { v.active = false; });
};

// payment list

export default render;