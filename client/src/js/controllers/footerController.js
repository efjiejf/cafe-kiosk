import { deleteAllItems } from './menuModalController';

// 결제 모달 관련
const $orderBtn = document.querySelector('.order-btn');
const $resultCheck = document.querySelector('.pay-result-check');
const $resultCancel = document.querySelector('.pay-result-cancel');
const $modalDisplay = document.querySelector('.pay-modal-container');
const $deleteAllItems = document.querySelector('.delete-all-items');

// 결제 모달 관련 이벤트 핸들러
$orderBtn.onclick = () => {
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
