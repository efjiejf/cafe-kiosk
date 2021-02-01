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
      price: '2500원',
      active: false,
    },
  ],
  hotMenu: [
    {
      id: 1,
      menuName: '아메리카노',
      imgUrl:
        'https://w7.pngwing.com/pngs/423/445/png-transparent-coffee-cup-caffe-americano-cafe-caffeine-brewed-coffee-cafe-coffee-brewed-coffee.png',
      price: '2000원',
      active: false,
    },
  ],
  seasonMenu: [
    {
      id: 1,
      menuName: '골드망고 스무디',
      imgUrl: 'https://gdimg.gmarket.co.kr/1803923937/still/600?ver=1589438675',
      price: '4000원',
      active: false,
    },
    {
      id: 2,
      menuName: '코코넛 커피 스무디',
      imgUrl: 'https://gdimg.gmarket.co.kr/1803924554/still/400?ver=1589438696',
      price: '4800원',
      active: false,
    },
    {
      id: 3,
      menuName: '망고 코코넛 주스',
      imgUrl: 'https://gdimg.gmarket.co.kr/1803924299/still/400?ver=1589438742',
      price: '3800원',
      active: false,
    },
    {
      id: 4,
      menuName: '망고 히비스 커스티',
      imgUrl:
        'https://lh3.googleusercontent.com/proxy/r5Pz25X-qhmvlK1iRmV4bG10WaLvopkKscCF_AmGEANV_f7Wba3SArhc4yhIyCmpTsVYHVmzFzuvhBTSIPmFPs5ALhBDbrM',
      price: '5800원',
      active: false,
    },
    {
      id: 5,
      menuName: '딸기 쿠키 프라페',
      imgUrl:
        'https://lh3.googleusercontent.com/proxy/unXvf1nd9hkszUj7KZ1qnlz7GeDAiJtTiI9Zqzx_aZJKCyDcAUOyfZiWrmMrUVJOIJbCSFUVXGb2j2woWrixW2hX8Ln4OWt7PAbbJg',
      price: '4900원',
      active: false,
    },
    {
      id: 6,
      menuName: '흑당 버블 라떼',
      imgUrl: 'https://gdimg.gmarket.co.kr/1608076826/still/600?ver=1557904340',
      price: '4800원',
      active: false,
    },
    {
      id: 7,
      menuName: '흑당 라떼',
      imgUrl: 'https://gdimg.gmarket.co.kr/1426110665/still/600?ver=1528185734',
      price: '5000원',
      active: false,
    },
  ],
};

app.get('/icemenu', (req, res) => {
  res.send(data.iceMenu);
});

app.get('/hotmenu', (req, res) => {
  res.send(data.hotMenu);
});

app.get('/seasonmenu', (req, res) => {
  res.send(data.seasonMenu);
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
