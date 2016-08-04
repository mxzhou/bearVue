var express = require('express');
var router = express.Router();

router.get('/user/payLog', function (req, res, next) {
  var json = {
    "status": 1,
    "errorCode": 0,
    "errorMessage": null,
    "servertime": 1470189895780,
    "data": {
      "total": 4,
      "payLogList": [{
        "id": 736040,
        "money": 100.0,
        "createTime": 1469839739000,
        "payStatus": 1,
        "payType": 2
      }, {
        "id": 726829,
        "money": 5.0,
        "createTime": 1469759796000,
        "payStatus": 1,
        "payType": 1
      }, {
        "id": 720047,
        "money": 4.1,
        "createTime": 1469700352000,
        "payStatus": 1,
        "payType": 1
      }, {
        "id": 711295,
        "money": 1.0,
        "createTime": 1469626075000,
        "payStatus": 1,
        "payType": 1
      }]
    }
  }
  res.json(json);
  next()
});

router.get('/user/buyLog/list', function (req, res, next) {
  var json = {
    "status": 1,
    "errorCode": 0,
    "errorMessage": null,
    "servertime": 1470206230297,
    "data": {
      "total": 0,
      "buyLogList": [{
        "id": 100142100,
        "goodsId": 238,
        "goodsName": "Apple MacBook Pro 15.4英寸笔记本电脑 ",
        "goodsDesc": "Core i7 处理器/16GB内存/256GB SSD闪存/Retina屏 MJLQ2CH/A 颜色随机",
        "status": 0,
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1Bc_4BbK_1RCvBVdK.jpg",
        "needNumber": 16899,
        "surplusNumber": 869,
        "userJoinNumber": 5,
        "nickname": null,
        "address": null,
        "ip": null,
        "kgUid": 0,
        "code": null,
        "winnerJoinNumber": 0,
        "openTime": 0,
        "okTime": 0,
        "sendTime": 0,
        "setAddressTime": 0,
        "boxStatus": -1,
        "boxId": 0,
        "userBoxType": 0,
        "startTime": 0
      }, {
        "id": 100139231,
        "goodsId": 238,
        "goodsName": "Apple MacBook Pro 15.4英寸笔记本电脑 ",
        "goodsDesc": "Core i7 处理器/16GB内存/256GB SSD闪存/Retina屏 MJLQ2CH/A 颜色随机",
        "status": 5,
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1Bc_4BbK_1RCvBVdK.jpg",
        "needNumber": 16899,
        "surplusNumber": 0,
        "userJoinNumber": 1,
        "nickname": "索玛高清移门",
        "address": "湖南省株洲市",
        "ip": "113.245.56.143",
        "kgUid": 1203387778,
        "code": "10009009",
        "winnerJoinNumber": 170,
        "openTime": 1470082965113,
        "okTime": 0,
        "sendTime": 0,
        "setAddressTime": 0,
        "boxStatus": -1,
        "boxId": 0,
        "userBoxType": 0,
        "startTime": 1470082962249
      }, {
        "id": 100139250,
        "goodsId": 227,
        "goodsName": "Apple iPhone 6S PLUS 128G",
        "goodsDesc": "颜色随机",
        "status": 5,
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1GUA4BQhv1RCvBVdK.jpg",
        "needNumber": 8480,
        "surplusNumber": 0,
        "userJoinNumber": 1,
        "nickname": "烦恼的很",
        "address": "浙江省绍兴市",
        "ip": "125.107.17.69",
        "kgUid": 1208574833,
        "code": "10005290",
        "winnerJoinNumber": 271,
        "openTime": 1470073065003,
        "okTime": 0,
        "sendTime": 0,
        "setAddressTime": 0,
        "boxStatus": -1,
        "boxId": 0,
        "userBoxType": 0,
        "startTime": 1470073060098
      }, {
        "id": 100138963,
        "goodsId": 1285,
        "goodsName": "中国黄金 Au99999龙凤金条 10g",
        "goodsDesc": "龙条，凤条随机发货",
        "status": 5,
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1tGZ4BTAs1RCvBVdK.jpg",
        "needNumber": 4299,
        "surplusNumber": 0,
        "userJoinNumber": 1,
        "nickname": "冰上蝴蝶",
        "address": "上海市上海市",
        "ip": "101.80.189.168",
        "kgUid": 1203767586,
        "code": "10002518",
        "winnerJoinNumber": 24,
        "openTime": 1470076175021,
        "okTime": 0,
        "sendTime": 0,
        "setAddressTime": 0,
        "boxStatus": -1,
        "boxId": 0,
        "userBoxType": 0,
        "startTime": 1470076174735
      }, {
        "id": 100139019,
        "goodsId": 755,
        "goodsName": "周生生 心相印黄金开口戒指 34569r ",
        "goodsDesc": "大小可调，饰不可挡",
        "status": 5,
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1_cK4BvYg1RCvBVdK.jpg",
        "needNumber": 1299,
        "surplusNumber": 0,
        "userJoinNumber": 1,
        "nickname": "啦啦啦啦啦啦啦",
        "address": "山西省忻州市",
        "ip": "124.163.223.103",
        "kgUid": 1203792848,
        "code": "10000444",
        "winnerJoinNumber": 21,
        "openTime": 1470074190036,
        "okTime": 0,
        "sendTime": 0,
        "setAddressTime": 0,
        "boxStatus": -1,
        "boxId": 0,
        "userBoxType": 0,
        "startTime": 1470074187516
      }, {
        "id": 100139263,
        "goodsId": 379,
        "goodsName": "苹果 Apple iPad Pro 9.7英寸 32GB ",
        "goodsDesc": "32G WLAN版/A9X芯片/Retina显示屏/Multi-Touch技术MM172CH颜色随机",
        "status": 5,
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1gmV4BsYb1RCvBVdK.jpg",
        "needNumber": 5199,
        "surplusNumber": 0,
        "userJoinNumber": 1,
        "nickname": "老公说不要做梦了",
        "address": "广西壮族自治区南宁市",
        "ip": "223.104.91.149",
        "kgUid": 1206318521,
        "code": "10001870",
        "winnerJoinNumber": 45,
        "openTime": 1470080820046,
        "okTime": 0,
        "sendTime": 0,
        "setAddressTime": 0,
        "boxStatus": -1,
        "boxId": 0,
        "userBoxType": 0,
        "startTime": 1470080817545
      }, {
        "id": 100137854,
        "goodsId": 238,
        "goodsName": "Apple MacBook Pro 15.4英寸笔记本电脑 ",
        "goodsDesc": "Core i7 处理器/16GB内存/256GB SSD闪存/Retina屏 MJLQ2CH/A 颜色随机",
        "status": 5,
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1Bc_4BbK_1RCvBVdK.jpg",
        "needNumber": 16899,
        "surplusNumber": 0,
        "userJoinNumber": 1,
        "nickname": "康",
        "address": "陕西省安康市",
        "ip": "221.11.109.168",
        "kgUid": 1200664678,
        "code": "10006396",
        "winnerJoinNumber": 91,
        "openTime": 1470030205049,
        "okTime": 0,
        "sendTime": 0,
        "setAddressTime": 0,
        "boxStatus": -1,
        "boxId": 0,
        "userBoxType": 0,
        "startTime": 1470030200505
      }, {
        "id": 100137947,
        "goodsId": 227,
        "goodsName": "Apple iPhone 6S PLUS 128G",
        "goodsDesc": "颜色随机",
        "status": 5,
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1GUA4BQhv1RCvBVdK.jpg",
        "needNumber": 8480,
        "surplusNumber": 0,
        "userJoinNumber": 1,
        "nickname": "一元买骗钱没中过",
        "address": "福建省福州市",
        "ip": "117.136.11.44",
        "kgUid": 1203976483,
        "code": "10001003",
        "winnerJoinNumber": 35,
        "openTime": 1470025440045,
        "okTime": 0,
        "sendTime": 0,
        "setAddressTime": 0,
        "boxStatus": -1,
        "boxId": 0,
        "userBoxType": 0,
        "startTime": 1470025438629
      }, {
        "id": 100137987,
        "goodsId": 379,
        "goodsName": "苹果 Apple iPad Pro 9.7英寸 32GB ",
        "goodsDesc": "32G WLAN版/A9X芯片/Retina显示屏/Multi-Touch技术MM172CH颜色随机",
        "status": 5,
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1gmV4BsYb1RCvBVdK.jpg",
        "needNumber": 5199,
        "surplusNumber": 0,
        "userJoinNumber": 1,
        "nickname": "狼性人生",
        "address": "广东省广州市",
        "ip": "219.136.75.18",
        "kgUid": 1200549273,
        "code": "10004502",
        "winnerJoinNumber": 52,
        "openTime": 1470031990024,
        "okTime": 0,
        "sendTime": 0,
        "setAddressTime": 0,
        "boxStatus": -1,
        "boxId": 0,
        "userBoxType": 0,
        "startTime": 1470031986545
      }, {
        "id": 100137984,
        "goodsId": 755,
        "goodsName": "周生生 心相印黄金开口戒指 34569r ",
        "goodsDesc": "大小可调，饰不可挡",
        "status": 5,
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1_cK4BvYg1RCvBVdK.jpg",
        "needNumber": 1299,
        "surplusNumber": 0,
        "userJoinNumber": 1,
        "nickname": "豪情",
        "address": "广东省潮州市",
        "ip": "223.74.203.43",
        "kgUid": 1202352419,
        "code": "10001143",
        "winnerJoinNumber": 40,
        "openTime": 1470034130677,
        "okTime": 0,
        "sendTime": 0,
        "setAddressTime": 0,
        "boxStatus": -1,
        "boxId": 0,
        "userBoxType": 0,
        "startTime": 1470034125634
      }, {
        "id": 100137744,
        "goodsId": 1285,
        "goodsName": "中国黄金 Au99999龙凤金条 10g",
        "goodsDesc": "龙条，凤条随机发货",
        "status": 5,
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1tGZ4BTAs1RCvBVdK.jpg",
        "needNumber": 4299,
        "surplusNumber": 0,
        "userJoinNumber": 1,
        "nickname": "多少次能中",
        "address": "河北省保定市",
        "ip": "110.242.164.56",
        "kgUid": 1206570174,
        "code": "10004198",
        "winnerJoinNumber": 105,
        "openTime": 1470026745021,
        "okTime": 0,
        "sendTime": 0,
        "setAddressTime": 0,
        "boxStatus": -1,
        "boxId": 0,
        "userBoxType": 0,
        "startTime": 1470026742139
      }, {
        "id": 100136425,
        "goodsId": 238,
        "goodsName": "Apple MacBook Pro 15.4英寸笔记本电脑 ",
        "goodsDesc": "Core i7 处理器/16GB内存/256GB SSD闪存/Retina屏 MJLQ2CH/A 颜色随机",
        "status": 5,
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1Bc_4BbK_1RCvBVdK.jpg",
        "needNumber": 16899,
        "surplusNumber": 0,
        "userJoinNumber": 5,
        "nickname": "133****7908",
        "address": "广东省佛山市",
        "ip": "119.126.95.225",
        "kgUid": 1204632253,
        "code": "10010964",
        "winnerJoinNumber": 130,
        "openTime": 1469967955811,
        "okTime": 0,
        "sendTime": 0,
        "setAddressTime": 0,
        "boxStatus": -1,
        "boxId": 0,
        "userBoxType": 0,
        "startTime": 1469967953331
      }, {
        "id": 100133506,
        "goodsId": 226,
        "goodsName": "Apple iPhone 6S PLUS 64G",
        "goodsDesc": "颜色随机",
        "status": 5,
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1zUV4Bvxv1RCvBVdK.jpg",
        "needNumber": 7250,
        "surplusNumber": 0,
        "userJoinNumber": 5,
        "nickname": "哥两年了赏个金元宝吃饭",
        "address": "广东省潮州市",
        "ip": "223.73.177.107",
        "kgUid": 1200299680,
        "code": "10001406",
        "winnerJoinNumber": 5,
        "openTime": 1469842145021,
        "okTime": 0,
        "sendTime": 0,
        "setAddressTime": 0,
        "boxStatus": -1,
        "boxId": 0,
        "userBoxType": 0,
        "startTime": 1469842144464
      }, {
        "id": 100133366,
        "goodsId": 238,
        "goodsName": "Apple MacBook Pro 15.4英寸笔记本电脑 ",
        "goodsDesc": "Core i7 处理器/16GB内存/256GB SSD闪存/Retina屏 MJLQ2CH/A 颜色随机",
        "status": 5,
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1Bc_4BbK_1RCvBVdK.jpg",
        "needNumber": 16899,
        "surplusNumber": 0,
        "userJoinNumber": 5,
        "nickname": "我想报警",
        "address": "广东省深圳市",
        "ip": "121.34.12.143",
        "kgUid": 1204056693,
        "code": "10015658",
        "winnerJoinNumber": 5,
        "openTime": 1469845315683,
        "okTime": 0,
        "sendTime": 0,
        "setAddressTime": 0,
        "boxStatus": -1,
        "boxId": 0,
        "userBoxType": 0,
        "startTime": 1469845310910
      }, {
        "id": 100131362,
        "goodsId": 238,
        "goodsName": "Apple MacBook Pro 15.4英寸笔记本电脑 ",
        "goodsDesc": "Core i7 处理器/16GB内存/256GB SSD闪存/Retina屏 MJLQ2CH/A 颜色随机",
        "status": 5,
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1Bc_4BbK_1RCvBVdK.jpg",
        "needNumber": 16899,
        "surplusNumber": 0,
        "userJoinNumber": 5,
        "nickname": "一元买喽",
        "address": "广东省广州市",
        "ip": "58.67.157.43",
        "kgUid": 1200106781,
        "code": "10006839",
        "winnerJoinNumber": 424,
        "openTime": 1469762511501,
        "okTime": 0,
        "sendTime": 0,
        "setAddressTime": 0,
        "boxStatus": -1,
        "boxId": 0,
        "userBoxType": 0,
        "startTime": 1469762506836
      }, {
        "id": 100129972,
        "goodsId": 238,
        "goodsName": "Apple MacBook Pro 15.4英寸笔记本电脑 ",
        "goodsDesc": "Core i7 处理器/16GB内存/256GB SSD闪存/Retina屏 MJLQ2CH/A 颜色随机",
        "status": 5,
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1Bc_4BbK_1RCvBVdK.jpg",
        "needNumber": 16899,
        "surplusNumber": 0,
        "userJoinNumber": 5,
        "nickname": "中了的话就来PY交易吧",
        "address": "湖北省武汉市",
        "ip": "117.136.81.41",
        "kgUid": 1205701905,
        "code": "10015334",
        "winnerJoinNumber": 93,
        "openTime": 1469702595548,
        "okTime": 0,
        "sendTime": 0,
        "setAddressTime": 0,
        "boxStatus": -1,
        "boxId": 0,
        "userBoxType": 0,
        "startTime": 1469702592456
      }, {
        "id": 100128128,
        "goodsId": 238,
        "goodsName": "Apple MacBook Pro 15.4英寸笔记本电脑 ",
        "goodsDesc": "Core i7 处理器/16GB内存/256GB SSD闪存/Retina屏 MJLQ2CH/A 颜色随机",
        "status": 5,
        "coverImgUrl": "http://p1.fx.kgimg.com/v2/kmh_1_img/T1Bc_4BbK_1RCvBVdK.jpg",
        "needNumber": 16899,
        "surplusNumber": 0,
        "userJoinNumber": 1,
        "nickname": "中奖回家过年",
        "address": "浙江省杭州市",
        "ip": "112.17.238.170",
        "kgUid": 1202124902,
        "code": "10016304",
        "winnerJoinNumber": 85,
        "openTime": 1469627165662,
        "okTime": 0,
        "sendTime": 0,
        "setAddressTime": 0,
        "boxStatus": -1,
        "boxId": 0,
        "userBoxType": 0,
        "startTime": 1469627163202
      }]
    }
  }
  res.json(json);
});

router.get('/user/buyInfo/list', function (req, res, next) {
  var json = {
    "status" : 1,
    "errorCode" : 0,
    "errorMessage" : null,
    "servertime" : 1470299030973,
    "data" : [ {
      "id" : 30001801,
      "buyTime" : 1470282945243,
      "buyNumber" : 2
    } ]
  }

  res.json(json);
});

module.exports = router;
