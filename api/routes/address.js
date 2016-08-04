var express = require('express');
var router = express.Router();

router.get('/user/address/list', function (req, res, next) {
  var json = {
    "status" : 1,
    "errorCode" : 0,
    "errorMessage" : null,
    "servertime" : 1470279036744,
    "data" : [
      {
        "id" : 57547,
        "mobile" : "13247373141",
        "province" : "广东省",
        "city" : "广州市",
        "area" : "白云区",
        "provinceId" : 440000,
        "cityId" : 440100,
        "areaId" : 440111,
        "addressDetail" : "广州市白云区京溪中路10号",
        "receiver" : "孟祥周",
        "ifDefault" : true
      },
      {
        "id" : 57547,
        "mobile" : "13247373141",
        "province" : "广东省",
        "city" : "广州市",
        "area" : "白云区",
        "provinceId" : 440000,
        "cityId" : 440100,
        "areaId" : 440111,
        "addressDetail" : "广州市白云区京溪中路10号",
        "receiver" : "孟祥周",
        "ifDefault" : false
      }
    ]
  }
  res.json(json);
  next();
})

module.exports = router;
