const $menuList = document.querySelector('.menu-list');

function render(data) {
  $menuList.innerHTML = data
    .map(
      (menu) => `<li id="${menu.id}" class="menu-item">
  <figure>
    <img class="menu-img" src="${menu.imgUrl}">
    <figcaption class="menu-title">${menu.menuName}</figcaption>
    <span class="menu-price">${menu.price}</span>
  </figure>        
</li>`
    )
    .join('');
}

export default render;
