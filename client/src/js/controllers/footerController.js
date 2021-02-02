import model from '../model/model';
import * as footerController from '../views/footer-render';

const $orderBtn = document.querySelector('.order-btn');
const $resultCheck = document.querySelector('.pay-result-check');
const $resultCancel = document.querySelector('.pay-result-cancel');
const $modalDisplay = document.querySelector('.pay-modal-container');

$orderBtn.onclick = () => {
  $modalDisplay.classList.replace('footer-modal-invisible', 'footer-modal-visible');
};

$resultCheck.onclick = () => {
  $modalDisplay.classList.replace('footer-modal-visible', 'footer-modal-invisible');
};

$resultCancel.onclick = () => {
  $modalDisplay.classList.replace('footer-modal-visible', 'footer-modal-invisible');
};
