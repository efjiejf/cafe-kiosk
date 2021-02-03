import model from '../model/model';
import footerRender from '../views/footer-render';

// 결제 모달 관련
const $orderBtn = document.querySelector('.order-btn');
const $resultCheck = document.querySelector('.pay-result-check');
const $resultCancel = document.querySelector('.pay-result-cancel');
const $modalDisplay = document.querySelector('.pay-modal-container');
const $deleteAllItems = document.querySelector('.delete-all-items');
const $orderList = document.querySelector('.order-list');

// deleteAllItems
const deleteAllItems = () => {
  if (!model.menu.length) return;
  model.menu = [];
  footerRender(model.menu);
};

// removeItem
const removeItem = (id) => {
  model.menu = model.menu.filter((item) => item.id !== +id);
  footerRender(model.menu);
};

// change order button color
const changeButtonColor = () => {
  if (model.menu.length) {
    $orderBtn.classList.replace('order-btn-invalid', 'order-btn-valid');
  } else {
    $orderBtn.classList.replace('order-btn-valid', 'order-btn-invalid');
  }
};

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
  deleteAllItems();
};

$orderList.onclick = (e) => {
  if (!e.target.classList.contains('remove-item')) return;
  console.log(e.target);
  removeItem(e.target.parentNode.id);
};

export default changeButtonColor;
