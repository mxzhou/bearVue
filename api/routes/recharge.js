var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/user/payLog', function (req, res, next) {
  var json = {
    "status" : 1,
    "errorCode" : 0,
    "errorMessage" : null,
    "servertime" : 1470189895780,
    "data" : {
      "total" : 4,
      "payLogList" : [ {
        "id" : 736040,
        "money" : 100.0,
        "createTime" : 1469839739000,
        "payStatus" : 1,
        "payType" : 2
      }, {
        "id" : 726829,
        "money" : 5.0,
        "createTime" : 1469759796000,
        "payStatus" : 1,
        "payType" : 1
      }, {
        "id" : 720047,
        "money" : 4.1,
        "createTime" : 1469700352000,
        "payStatus" : 1,
        "payType" : 1
      }, {
        "id" : 711295,
        "money" : 1.0,
        "createTime" : 1469626075000,
        "payStatus" : 1,
        "payType" : 1
      } ]
    }
  }
  res.json(json);
  next()
});
module.exports = router;
