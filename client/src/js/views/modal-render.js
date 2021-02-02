const $modal = document.querySelector('.modal');

function modalRender(menu) {
  $modal.innerHTML = ` <li id="${menu.id}" class="modal-item">
  <figure>
    <img class="modal-img"
      src="${menu.imgUrl}">
    <div>
      <figcaption class="modal-title">${menu.menuName}</figcaption>
      <span class="modal-price">${menu.price}</span>
    </div>
  </figure>
</li>
<li class="modal-item">
  <button class="btn btn-size-up"><i class="fa fa-coffee" aria-hidden="true"></i> 사이즈 업</button>
  <span class="size-up-price">1000원</span>
  <button class="btn btn-addshot"><i class="fa fa-coffee" aria-hidden="true"></i> 샷 추가</button>
  <span class="size-up-price">1000원</span>
</li>
<li class="modal-item">
  <button class="btn-close">주문 담기</button>
  <button class="btn-close">취소</button>
</li>`;
}

export default modalRender;
