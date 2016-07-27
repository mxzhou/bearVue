var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/loadInfo', function(req, res, next) {
  var json = {
    "ok": true,
    "data": [
      {"path": "alert", "text": "alert"},
      {"path": "toast", "text": "toast"},
      {"path": "loading", "text": "loading"}
    ]
  }
  res.json(json);
});

module.exports = router;
