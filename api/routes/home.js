var express = require('express');
var router = express.Router();

router.get('/goods/head', function (req, res, next) {
  var json = {
    "status" : 1,
    "errorCode" : 0,
    "errorMessage" : null,
    "servertime" : 1470036971089,
    "data" : [ {
      "id" : 22,
      "sort" : 1,
      "type" : 1,
      "searchContent" : "",
      "url" : "http://1.kugou.com/api/activity/newRedEnvelope/mobile.html",
      "uniqueId" : 0,
      "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T11lA5BsCj1RCvBVdK.jpg"
    }, {
      "id" : 17,
      "sort" : 3,
      "type" : 1,
      "searchContent" : "",
      "url" : "http://1.kugou.com/api/activity/signin/index.html",
      "uniqueId" : 0,
      "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1FfbmBmW_1RCvBVdK.jpg"
    }, {
      "id" : 19,
      "sort" : 4,
      "type" : 1,
      "searchContent" : "",
      "url" : "http://1.kugou.com/api/h5/100/index.html",
      "uniqueId" : 0,
      "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1i1E5BQJ_1RCvBVdK.jpg"
    }, {
      "id" : 13,
      "sort" : 8,
      "type" : 2,
      "searchContent" : "",
      "url" : "",
      "uniqueId" : 2405,
      "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1uiK5BTAT1RCvBVdK.jpg"
    }, {
      "id" : 14,
      "sort" : 13,
      "type" : 2,
      "searchContent" : "",
      "url" : "",
      "uniqueId" : 2356,
      "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qvW5BbKv1RCvBVdK.jpg"
    } ]
  };
  res.json(json);
  next();
})
//中奖名单公告
router.get('/goods/announce', function (req, res, next) {
  var json = {
    "status" : 1,
    "errorCode" : 0,
    "errorMessage" : null,
    "servertime" : 1470036971089,
    "data" : [ {
      "id" : 12,
      "username" : "了我的1",
      "prize" : "iPhone6s 64G 港版"
    },{
      "id" : 22,
      "username" : "了我的2",
      "prize" : "iPhone6s 64G 港版"
    },{
      "id" : 32,
      "username" : "了我的3",
      "prize" : "iPhone6s 64G 港版"
    },{
      "id" : 42,
      "username" : "了我的4",
      "prize" : "iPhone6s 64G 港版"
    },{
      "id" : 52,
      "username" : "了我的5",
      "prize" : "iPhone6s 64G 港版"
    }]
  };
  res.json(json);
  next();
})
module.exports = router;
