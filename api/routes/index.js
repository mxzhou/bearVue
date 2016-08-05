var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/loadInfo', function (req, res, next) {
  var json = {
    "ok": true,
    "data": [
      {"path": "alert", "text": "alert"},
      {"path": "toast", "text": "toast"},
      {"path": "loading", "text": "loading"},
      {"path": "allProduct", "text": "全部商品"}
    ]
  }
  res.json(json);
  next()
});


router.post('/loadInfo', function (req, res, next) {
  var json = {
    "ok": true,
    "data": [
      {"path": "alert", "text": "alert"},
      {"path": "toast", "text": "toast"},
      {"path": "loading", "text": "loading"}
    ]
  }
  res.json(json);
  next()
});

router.get('/goods/list', function (req, res, next) {
  var json = {
    "status": 1,
    "errorCode": 0,
    "errorMessage": null,
    "servertime": 1469763355521,
    "data": {
      "total": 235,
      "goodsList": [{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      },{
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
        "id": 100131683,
        "goodsId": 2431,
        "goodsName": "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
        "goodsDesc": "",
        "price": 3699.0,
        "needNumber": 3699,
        "surplusNumber": 3498,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      }, {
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1xUV4BQW_1RCvBVdK.jpg",
        "id": 100131693,
        "goodsId": 27,
        "goodsName": "小米（MI） 定制版Ninebot 九号平衡车 ",
        "goodsDesc": "智能代步电动体感车（白）",
        "price": 2599.0,
        "needNumber": 2599,
        "surplusNumber": 2557,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      }, {
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1QmA4BvYv1RCvBVdK.jpg",
        "id": 100131481,
        "goodsId": 288,
        "goodsName": "IPS ZERO240  电动独轮车平衡车体感车",
        "goodsDesc": "颜色随机",
        "price": 2399.0,
        "needNumber": 2399,
        "surplusNumber": 1184,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      }, {
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1Tjx5B4LQ1RCvBVdK.jpg",
        "id": 100131563,
        "goodsId": 2426,
        "goodsName": "锐澳（RIO）鸡尾酒 本味 5.0%vol 柠檬+西柚 275ml*6瓶",
        "goodsDesc": "烈日炎炎，洋酒痛快畅饮！",
        "price": 99.0,
        "needNumber": 99,
        "surplusNumber": 8,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      }, {
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T10QC4B5Lb1RCvBVdK.jpg",
        "id": 100131656,
        "goodsId": 1701,
        "goodsName": "锐澳（RIO）洋酒 鸡尾酒 预调酒果酒混合装（六种口味）",
        "goodsDesc": "275ml*6瓶 六种经典口味装",
        "price": 99.0,
        "needNumber": 99,
        "surplusNumber": 57,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      }, {
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1GFACBQh_1RCvBVdK.jpg",
        "id": 100131664,
        "goodsId": 310,
        "goodsName": "【德国进口啤酒】奥丁格（OETTINGER）小麦啤酒 500ml*24听",
        "goodsDesc": "自然浑浊型小麦啤酒，德国原装进口 整箱装",
        "price": 199.0,
        "needNumber": 199,
        "surplusNumber": 195,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      }, {
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1uA_5Bgxg1RCvBVdK.jpg",
        "id": 100131516,
        "goodsId": 2353,
        "goodsName": "荣耀8 4GB+32GB 全网通版",
        "goodsDesc": "颜色随机，双镜头，双2.5D玻璃，双功能指纹！美得与众不同！",
        "price": 2799.0,
        "needNumber": 2799,
        "surplusNumber": 1082,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      }, {
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1EfD5B7J_1RCvBVdK.jpg",
        "id": 100131174,
        "goodsId": 2405,
        "goodsName": "一百万繁星币",
        "goodsDesc": "繁星直播专属代币（获得繁星币中奖通知后，请在确认地址中的详细地址一栏，填入繁星ID和繁星昵称，以便胖熊一元买工作人员为您尽快充值，谢谢合作）",
        "price": 11500.0,
        "needNumber": 11500,
        "surplusNumber": 2167,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      }, {
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1GuD5BQZg1RCvBVdK.jpg",
        "id": 100131170,
        "goodsId": 2415,
        "goodsName": "中国黄金 Au9999薄片投资金条100g",
        "goodsDesc": "",
        "price": 35999.0,
        "needNumber": 35999,
        "surplusNumber": 5309,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      }, {
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1GfY5BKVv1RCvBVdK.jpg",
        "id": 100131504,
        "goodsId": 2414,
        "goodsName": "贝特阿斯 玻璃饭盒450ml正方形 RLF-450",
        "goodsDesc": "耐热玻璃，烤箱 冰箱 微波炉适用",
        "price": 32.0,
        "needNumber": 32,
        "surplusNumber": 12,
        "status": 0,
        "hotSort": 100000,
        "lastStage": 0
      }]
    }
  };
  res.json(json);
  next();
})
router.get('/type',function(req,res,next){
  var json = { "status" : 1, "errorCode" : 0, "errorMessage" : null, "servertime" : 1469775549401, "data" : [ { "code" : "GT690175015", "name" : "苹果专区", "sort" : 1, "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1SWCyBKdv1RCvBVdK.png" }, { "code" : "GT75841347", "name" : "数码影音", "sort" : 2, "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1UWdyBb_g1RCvBVdK.png" }, { "code" : "GT603466647", "name" : "家用电器", "sort" : 3, "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1CYxyB_Kj1RCvBVdK.png" }, { "code" : "GT1431259736", "name" : "黄金首饰", "sort" : 4, "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1lWDyB_Wv1RCvBVdK.png" }, { "code" : "GT33455344", "name" : "美食天地", "sort" : 5, "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1_YYyB_Av1RCvBVdK.png" }, { "code" : "GT1675824861", "name" : "女性时尚", "sort" : 6, "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T12YYyB7K_1RCvBVdK.png" }, { "code" : "GT1478521348", "name" : "生活用品", "sort" : 7, "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1QxhyBQLQ1RCvBVdK.png" }, { "code" : "GT923814236", "name" : "其他商品", "sort" : 8, "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1nWZyB_Cj1RCvBVdK.png" } ] }
  res.json(json)
})
module.exports = router;
