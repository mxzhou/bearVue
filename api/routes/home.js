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
//商品列表
router.get('/goods/list',function(req, res, next){
  var json = {
      "status" : 1,
      "errorCode" : 0,
      "errorMessage" : null,
      "servertime" : 1470295333888,
      "data" : {
        "total" : 232,
        "goodsList" : [ {
          "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1nEA5BgYv1RCvBVdK.jpg",
          "id" : 100144410,
          "goodsId" : 2332,
          "goodsName" : "【泰国进口】大米 孟乍隆苏吝府茉莉香米 10KG",
          "goodsDesc" : "",
          "price" : 145.0,
          "needNumber" : 145,
          "surplusNumber" : 123,
          "status" : 0,
          "hotSort" : 100000,
          "lastStage" : 0
        }, {
          "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1ZFDKB5Lj1RCvBVdK.jpg",
          "id" : 100144419,
          "goodsId" : 2444,
          "goodsName" : "公牛插座（带USB接口）1.8米 GN-B303U带儿童保护门",
          "goodsDesc" : "微动电子轻触开关 双极驱动安全儿童保护门",
          "price" : 69.0,
          "needNumber" : 69,
          "surplusNumber" : 68,
          "status" : 0,
          "hotSort" : 100000,
          "lastStage" : 0
        }, {
          "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1zzbKBgZv1RCvBVdK.jpg",
          "id" : 100144412,
          "goodsId" : 2443,
          "goodsName" : "【七夕礼物推荐】永生花玻璃罩",
          "goodsDesc" : "款式随机发货",
          "price" : 269.0,
          "needNumber" : 269,
          "surplusNumber" : 240,
          "status" : 0,
          "hotSort" : 100000,
          "lastStage" : 0
        }, {
          "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qXAKBybT1RCvBVdK.jpg",
          "id" : 100144403,
          "goodsId" : 2442,
          "goodsName" : "【七夕礼物推荐】金箔玫瑰花（非黄金材质）",
          "goodsDesc" : "【注：本产品材质非黄金！】",
          "price" : 119.0,
          "needNumber" : 119,
          "surplusNumber" : 81,
          "status" : 0,
          "hotSort" : 100000,
          "lastStage" : 0
        }, {
          "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1kzKKB4W_1RCvBVdK.jpg",
          "id" : 100144365,
          "goodsId" : 2439,
          "goodsName" : "【七夕礼物推荐】香皂玫瑰花彩盒",
          "goodsDesc" : "速递，永不凋谢的玫瑰 情人节礼物",
          "price" : 199.0,
          "needNumber" : 199,
          "surplusNumber" : 170,
          "status" : 0,
          "hotSort" : 100000,
          "lastStage" : 0
        }, {
          "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1ythKB5Jg1RCvBVdK.jpg",
          "id" : 100144220,
          "goodsId" : 2438,
          "goodsName" : "小米 平板电脑2 WIFI版 7.9英寸 ",
          "goodsDesc" : "颜色随机发货 Intel Z8500 2G/16G 500W/800W",
          "price" : 1199.0,
          "needNumber" : 1199,
          "surplusNumber" : 437,
          "status" : 0,
          "hotSort" : 100000,
          "lastStage" : 0
        }, {
          "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1HBx5BCZg1RCvBVdK.jpg",
          "id" : 100143324,
          "goodsId" : 2435,
          "goodsName" : "外星人 水冷游戏电脑主机ALWA51R-2838S",
          "goodsDesc" : "i7-5930K 16G 128G SSD+2T GTX980 8G独显 Win8.1银，9区域AlienFX灯光技术，与游戏深入联动！",
          "price" : 47299.0,
          "needNumber" : 47299,
          "surplusNumber" : 2420,
          "status" : 0,
          "hotSort" : 100000,
          "lastStage" : 0
        }, {
          "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1usJ5ByWj1RCvBVdK.jpg",
          "id" : 100144176,
          "goodsId" : 2434,
          "goodsName" : "DJI大疆\"悟\" Inspire 1 可变形无人机 专业智能遥控航拍飞机",
          "goodsDesc" : "4K高清拍摄 Inspire 1 V2.0+CARE一年版",
          "price" : 20799.0,
          "needNumber" : 20799,
          "surplusNumber" : 12260,
          "status" : 0,
          "hotSort" : 100000,
          "lastStage" : 0
        }, {
          "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1uA_5Bgxg1RCvBVdK.jpg",
          "id" : 100144452,
          "goodsId" : 2353,
          "goodsName" : "荣耀8 4GB+32GB 全网通版",
          "goodsDesc" : "颜色随机，双镜头，双2.5D玻璃，双功能指纹！美得与众不同！",
          "price" : 2799.0,
          "needNumber" : 2799,
          "surplusNumber" : 2630,
          "status" : 0,
          "hotSort" : 100000,
          "lastStage" : 0
        }, {
          "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1qBx5ByCv1RCvBVdK.jpg",
          "id" : 100144085,
          "goodsId" : 2431,
          "goodsName" : "酷车e族 锂电池电动滑板车 带座椅 60KM续航",
          "goodsDesc" : "",
          "price" : 3699.0,
          "needNumber" : 3699,
          "surplusNumber" : 1016,
          "status" : 0,
          "hotSort" : 100000,
          "lastStage" : 0
        } ]
      }
    };
    res.json(json);
    next();
})
module.exports = router;
