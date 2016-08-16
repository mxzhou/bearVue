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

router.get('/type',function(req,res,next){
  var json = { "status" : 1, "errorCode" : 0, "errorMessage" : null, "servertime" : 1469775549401, "data" : [ { "code" : "GT690175015", "name" : "苹果专区", "sort" : 1, "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1SWCyBKdv1RCvBVdK.png" }, { "code" : "GT75841347", "name" : "数码影音", "sort" : 2, "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1UWdyBb_g1RCvBVdK.png" }, { "code" : "GT603466647", "name" : "家用电器", "sort" : 3, "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1CYxyB_Kj1RCvBVdK.png" }, { "code" : "GT1431259736", "name" : "黄金首饰", "sort" : 4, "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1lWDyB_Wv1RCvBVdK.png" }, { "code" : "GT33455344", "name" : "美食天地", "sort" : 5, "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1_YYyB_Av1RCvBVdK.png" }, { "code" : "GT1675824861", "name" : "女性时尚", "sort" : 6, "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T12YYyB7K_1RCvBVdK.png" }, { "code" : "GT1478521348", "name" : "生活用品", "sort" : 7, "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1QxhyBQLQ1RCvBVdK.png" }, { "code" : "GT923814236", "name" : "其他商品", "sort" : 8, "coverImgUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1nWZyB_Cj1RCvBVdK.png" } ] }
  res.json(json)
})
module.exports = router;
