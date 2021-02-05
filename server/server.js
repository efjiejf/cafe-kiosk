const express = require('express');
const app = express();

app.use(express.static('../client'));

app.use(express.json());

let data = {
  iceMenu: [
    {
      id: 1,
      menuName: '아이스 아메리카노',
      imgUrl:
        'https://cdn.shopify.com/s/files/1/0273/4535/4826/products/coldbrew_69e25680-9a16-41ed-ad47-e42d7b201b6a.jpg?v=1587042356',
      price: 2500,
      active: true,
      shot: true,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
    {
      id: 2,
      menuName: '아이스 라떼',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdL8Vhui61tOzSSvstAikcH3ATqc99oBdAOQ&usqp=CAU',
      price: 3500,
      active: false,
      shot: true,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
    {
      id: 3,
      menuName: '아이스 카페모카',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwgPamlyWWpAjYFh8by0lPIlEOJ6nJdq8dpA&usqp=CAU',
      price: 4500,
      active: false,
      shot: true,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
    {
      id: 4,
      menuName: '아이스 초코',
      imgUrl:
        'http://img3.tmon.kr/cdn3/deals/2021/01/27/4099153010/4099153010_front_08165_10a77.jpg',
      price: 3000,
      active: false,
      shot: false,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
    {
      id: 5,
      menuName: '아이스 프라프치노',
      imgUrl:
        'https://static.megamart.com/product/image/1326/13264499/13264499_1_960.jpg',
      price: 5500,
      active: false,
      shot: true,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
    {
      id: 6,
      menuName: '아이스 그린티 라떼',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZglhbW5PLFl63PzViMN9OzAxtPme2_uzdw&usqp=CAU',
      price: 4500,
      active: false,
      shot: false,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
    {
      id: 7,
      menuName: '아이스 바닐라 라떼',
      imgUrl:
        'http://images.coocha.co.kr//upload/2020/08/g9g9/07/thumb4_413829130.jpg',
      price: 6500,
      active: false,
      shot: true,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
  ],
  hotMenu: [
    {
      id: 1,
      menuName: '아메리카노',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkOCiG2M6pYP4WwObGZBo68s2GyQT0-5CZiw&usqp=CAU',
      price: 2000,
      active: false,
      shot: true,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
    {
      id: 2,
      menuName: '라떼',
      imgUrl:
        'https://lh3.googleusercontent.com/proxy/XN-zK5fK5WKw38CpkRrnWS_zUPe2UpTAf-6PfseazphWhUtJPQvJj52hjFxliF1NOTCtE9Cte1iSOF-z3AJah12crZGN7YJOzXgmDUbKPUgAFGocmsc',
      price: 3000,
      active: true,
      shot: true,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
    {
      id: 3,
      menuName: '캐모마일 티',
      imgUrl:
        'https://images.freeimages.com/images/premium/previews/6086/60863340-cup-of-chamomile-tea-with-chamomile-flowers-and-lemon-isolated.jpg',
      price: 4000,
      active: true,
      shot: false,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
    {
      id: 4,
      menuName: '유자차',
      imgUrl: 'http://image.auction.co.kr/itemimage/19/a7/4d/19a74d0ae6.jpg',
      price: 5000,
      active: true,
      shot: false,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
  ],
  seasonMenu: [
    {
      id: 1,
      menuName: '골드망고 스무디',
      imgUrl: 'https://gdimg.gmarket.co.kr/1803923937/still/600?ver=1589438675',
      price: 4000,
      active: true,
      shot: false,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
    {
      id: 2,
      menuName: '코코넛 커피 스무디',
      imgUrl: 'https://gdimg.gmarket.co.kr/1803924554/still/400?ver=1589438696',
      price: 4800,
      active: false,
      shot: true,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
    {
      id: 3,
      menuName: '망고 코코넛 주스',
      imgUrl: 'https://gdimg.gmarket.co.kr/1803924299/still/400?ver=1589438742',
      price: 3800,
      active: false,
      shot: false,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
    {
      id: 4,
      menuName: '망고 히비스 커스티',
      imgUrl:
        'data:image/jpeg;base64,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',
      price: 5800,
      active: false,
      shot: false,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
    {
      id: 5,
      menuName: '딸기 쿠키 프라페',
      imgUrl: 'http://coffeenie.co.kr/uploads/product/20201224413079.png',
      price: 4900,
      active: false,
      shot: false,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
    {
      id: 6,
      menuName: '흑당 버블 라떼',
      imgUrl: 'https://gdimg.gmarket.co.kr/1608076826/still/600?ver=1557904340',
      price: 4800,
      active: false,
      shot: true,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
    {
      id: 7,
      menuName: '흑당 라떼',
      imgUrl: 'https://gdimg.gmarket.co.kr/1426110665/still/600?ver=1528185734',
      price: 5000,
      active: false,
      shot: true,
      shotPrice: 1000,
      sizeUpPrice: 1000,
    },
  ],
};
app.get('/data', (req, res) => {
  res.send(data);
});

app.get('/icemenu', (req, res) => {
  res.send(data.iceMenu);
});

app.get('/hotmenu', (req, res) => {
  res.send(data.hotMenu);
});

app.get('/seasonmenu', (req, res) => {
  res.send(data.seasonMenu);
});

app.get('/icemenu/:id', (req, res) => {
  const id = +req.params.id;
  const menu = data.iceMenu.find((menu) => menu.id === id);
  res.send(menu);
});

app.get('/hotmenu/:id', (req, res) => {
  const id = +req.params.id;
  const menu = data.hotMenu.find((menu) => menu.id === id);
  res.send(menu);
});

app.get('/seasonmenu/:id', (req, res) => {
  const id = +req.params.id;
  const menu = data.seasonMenu.find((menu) => menu.id === id);
  res.send(menu);
});

app.post('/icemenu', (req, res) => {
  data.iceMenu = [...data.iceMenu, req.body];
  res.send(data.iceMenu);
});

app.post('/hotmenu', (req, res) => {
  data.hotMenu = [...data.hotMenu, req.body];
  res.send(data.hotMenu);
});

app.post('/seasonMenu', (req, res) => {
  data.seasonMenu = [...data.seasonMenu, req.body];
  res.send(data.seasonMenu);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
