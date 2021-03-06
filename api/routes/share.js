var express = require('express');
var router = express.Router();

router.post('/find/sharelist', function (req, res, next) {
  var json ={
    "status" : 1,
    "errorCode" : 0,
    "errorMessage" : null,
    "servertime" : 1471231327778,
    "data" : [ {
      "id" : 1493,
      "goodsRobId" : 100169593,
      "goodsId" : 2519,
      "goodsName" : "IVR 手机数据线/充电线 USB/Lightning接口 二合一 ",
      "avatarUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T10RWKBvKg1RCvBVdK.jpg",
      "nickname" : "133****5998",
      "winWords" : "第一次参加胖熊1元买就中奖了呢，好惊喜呀，希望以后运气也这么棒！好开心！！！",
      "createTime" : "2016-08-15 09:56:03",
      "openTime" : 1471145240045,
      "joinNumber" : 19,
      "winerCode" : "10000013",
      "sharePicUrl" : "http://imge.kugou.com/v2/kmh_1_img/T1NehKBQdj1RCvBVdK.jpg,http://imge.kugou.com/v2/kmh_1_img/T193_KBQxT1RCvBVdK.jpg,http://imge.kugou.com/v2/kmh_1_img/T1vBYKB__T1RCvBVdK.jpg",
      "kgUid" : 1204380870,
      "recommStatus" : 0
    }, {
      "id" : 1490,
      "goodsRobId" : 100167253,
      "goodsId" : 2327,
      "goodsName" : "御泥坊 美白嫩肤亮肌礼盒（洗面奶+爽肤水+乳液 化妆品 护肤套装 嫩白三部曲）",
      "avatarUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T1N8AmBmKQ1RCvBVdK.jpg",
      "nickname" : "心态要好",
      "winWords" : "送媳妇。不知道好不好用。要是好用。接着给媳妇夺",
      "createTime" : "2016-08-14 15:40:35",
      "openTime" : 1471075245123,
      "joinNumber" : 119,
      "winerCode" : "10000076",
      "sharePicUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T10YVKBQV_1RCvBVdK.jpg,http://p3.fx.kgimg.com/v2/kmh_1_img/T1yrEKBQV_1RCvBVdK.jpg,http://p3.fx.kgimg.com/v2/kmh_1_img/T1TbVKBQV_1RCvBVdK.jpg",
      "kgUid" : 857296846,
      "recommStatus" : 0
    }, {
      "id" : 1489,
      "goodsRobId" : 100167503,
      "goodsId" : 401,
      "goodsName" : "小熊（bear) 电热饭盒 1.3L",
      "avatarUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T1N8AmBmKQ1RCvBVdK.jpg",
      "nickname" : "心态要好",
      "winWords" : "东西还不错，就是小点。留给给我儿子用挺好的",
      "createTime" : "2016-08-14 15:36:59",
      "openTime" : 1471077080034,
      "joinNumber" : 99,
      "winerCode" : "10000079",
      "sharePicUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T1jrdKB_L_1RCvBVdK.jpg,http://p3.fx.kgimg.com/v2/kmh_1_img/T1vAEKBCxv1RCvBVdK.jpg,http://p3.fx.kgimg.com/v2/kmh_1_img/T1XMDKBsd_1RCvBVdK.jpg",
      "kgUid" : 857296846,
      "recommStatus" : 0
    }, {
      "id" : 1487,
      "goodsRobId" : 100167352,
      "goodsId" : 298,
      "goodsName" : "美的 智能立体加热电饭煲 4升",
      "avatarUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T1N8AmBmKQ1RCvBVdK.jpg",
      "nickname" : "心态要好",
      "winWords" : "本来是打算买一个。在胖熊上看见了。就赌一把花200中啦",
      "createTime" : "2016-08-14 15:31:59",
      "openTime" : 1471077500034,
      "joinNumber" : 359,
      "winerCode" : "10000204",
      "sharePicUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T1clJKB_D_1RCvBVdK.jpg,http://p3.fx.kgimg.com/v2/kmh_1_img/T1ZQbKBQx_1RCvBVdK.jpg,http://p3.fx.kgimg.com/v2/kmh_1_img/T1XYZ7BQb_1RCvBVdK.jpg",
      "kgUid" : 857296846,
      "recommStatus" : 0
    }, {
      "id" : 1486,
      "goodsRobId" : 100167537,
      "goodsId" : 1972,
      "goodsName" : "苏泊尔（SUPOR）电水壶 ",
      "avatarUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T1N8AmBmKQ1RCvBVdK.jpg",
      "nickname" : "心态要好",
      "winWords" : "这次中的小玩意比较多。一一的。给大家发哈。东西不错",
      "createTime" : "2016-08-14 15:28:48",
      "openTime" : 1471078000003,
      "joinNumber" : 159,
      "winerCode" : "10000131",
      "sharePicUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T1ATJKBj__1RCvBVdK.jpg,http://p3.fx.kgimg.com/v2/kmh_1_img/T1Ml_KB_E_1RCvBVdK.jpg,http://p3.fx.kgimg.com/v2/kmh_1_img/T1LOYKBjL_1RCvBVdK.jpg",
      "kgUid" : 857296846,
      "recommStatus" : 0
    }, {
      "id" : 1485,
      "goodsRobId" : 100164963,
      "goodsId" : 2085,
      "goodsName" : "朗康足疗机 脚底按摩器",
      "avatarUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T1N8AmBmKQ1RCvBVdK.jpg",
      "nickname" : "心态要好",
      "winWords" : "东西自己收到，很喜欢，下次还来要。小胖子熊看好你",
      "createTime" : "2016-08-14 15:25:58",
      "openTime" : 1470998525024,
      "joinNumber" : 439,
      "winerCode" : "10000121",
      "sharePicUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T1eSCKBvd_1RCvBVdK.jpg,http://p3.fx.kgimg.com/v2/kmh_1_img/T1qedKBKWv1RCvBVdK.jpg,http://p3.fx.kgimg.com/v2/kmh_1_img/T1HMZKBgL_1RCvBVdK.jpg",
      "kgUid" : 857296846,
      "recommStatus" : 0
    }, {
      "id" : 1484,
      "goodsRobId" : 100166739,
      "goodsId" : 2335,
      "goodsName" : "小熊 双桶冰淇淋机 家用雪糕冰激凌机 1L BQL-A10E1",
      "avatarUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T15rh5B7KQ1RCvBVdK.jpg",
      "nickname" : "来也匆匆去也匆匆啊",
      "winWords" : "昨天中奖今天就收到了，等待出炉，流口水喽",
      "createTime" : "2016-08-14 14:52:03",
      "openTime" : 1471054385022,
      "joinNumber" : 219,
      "winerCode" : "10000045",
      "sharePicUrl" : "http://imge.kugou.com/v2/kmh_1_img/T1ZuE7BKC_1RCvBVdK.jpg,http://imge.kugou.com/v2/kmh_1_img/T1suCKBvh_1RCvBVdK.jpg,http://imge.kugou.com/v2/kmh_1_img/T1Qmh7Bv__1RCvBVdK.jpg",
      "kgUid" : 1207184366,
      "recommStatus" : 0
    }, {
      "id" : 1482,
      "goodsRobId" : 100167275,
      "goodsId" : 2290,
      "goodsName" : "可口可乐/雪碧 330ml*24听 整箱装",
      "avatarUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T1mdEKBmKT1RCvBVdK.jpg",
      "nickname" : "胖熊幸运玩家",
      "winWords" : "买了很多次，终于中了，这箱可乐是我的首中，虽然不怎么值钱，但是这是我幸运的开头，我有一个中大奖的心。",
      "createTime" : "2016-08-14 13:02:08",
      "openTime" : 1471067780024,
      "joinNumber" : 69,
      "winerCode" : "10000016",
      "sharePicUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T1KeYKBQWv1RCvBVdK.jpg,http://p3.fx.kgimg.com/v2/kmh_1_img/T1eTxKBv_T1RCvBVdK.jpg,http://p3.fx.kgimg.com/v2/kmh_1_img/T1gLJKBQAT1RCvBVdK.jpg",
      "kgUid" : 1200679311,
      "recommStatus" : 0
    }, {
      "id" : 1480,
      "goodsRobId" : 100167475,
      "goodsId" : 1990,
      "goodsName" : "蒙牛 特仑苏 纯牛奶 250ml*12 礼盒装",
      "avatarUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T1kGEKBsCT1RCvBVdK.jpg",
      "nickname" : "燕子",
      "winWords" : "快递还挺快，日期也是新日期感谢胖熊，希望能中个手机",
      "createTime" : "2016-08-14 12:23:11",
      "openTime" : 1471077675005,
      "joinNumber" : 85,
      "winerCode" : "10000040",
      "sharePicUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T1ng_KBjxv1RCvBVdK.jpg,http://p3.fx.kgimg.com/v2/kmh_1_img/T16GAKBgVv1RCvBVdK.jpg,http://p3.fx.kgimg.com/v2/kmh_1_img/T1TbVKBgxv1RCvBVdK.jpg",
      "kgUid" : 1200039702,
      "recommStatus" : 0
    }, {
      "id" : 1479,
      "goodsRobId" : 100165508,
      "goodsId" : 2312,
      "goodsName" : "天堂伞 双层面料创意三折太阳伞晴雨伞",
      "avatarUrl" : "http://q.qlogo.cn/qqapp/1105159775/F9981462F116493BB419A619C7C41966/100",
      "nickname" : "手机坏了，求一部手机啊啊",
      "winWords" : "终于中了一次啊啊啊啊啊啊啊，都买了几万次了",
      "createTime" : "2016-08-14 12:22:28",
      "openTime" : 1471015455003,
      "joinNumber" : 119,
      "winerCode" : "10000039",
      "sharePicUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T19uKKBgJv1RCvBVdK.jpg,http://p3.fx.kgimg.com/v2/kmh_1_img/T16lCKBTYv1RCvBVdK.jpg,http://p3.fx.kgimg.com/v2/kmh_1_img/T1gsxKBTVv1RCvBVdK.jpg",
      "kgUid" : 1203007599,
      "recommStatus" : 0
    }, {
      "id" : 1478,
      "goodsRobId" : 100167277,
      "goodsId" : 318,
      "goodsName" : "金龙鱼 粳米 珍珠米 优质东北大米 5kg",
      "avatarUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T1HdbKBmbT1RCvBVdK.jpg",
      "nickname" : "让我再中一次吧",
      "winWords" : "到了，昨晚中的，今天上午就到了！希望还能中奖！",
      "createTime" : "2016-08-14 11:00:32",
      "openTime" : 1471079170003,
      "joinNumber" : 49,
      "winerCode" : "10000001",
      "sharePicUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T1FJLKBQYg1RCvBVdK.jpg,http://p3.fx.kgimg.com/v2/kmh_1_img/T1o9JKB4Av1RCvBVdK.jpg,http://p3.fx.kgimg.com/v2/kmh_1_img/T1j3LKB4Cv1RCvBVdK.jpg",
      "kgUid" : 1206092589,
      "recommStatus" : 0
    }, {
      "id" : 1477,
      "goodsRobId" : 100149936,
      "goodsId" : 2289,
      "goodsName" : "统一 饮料 250ml*24盒/箱 整箱装",
      "avatarUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T18PdKB5h_1RCvBVdK.jpg",
      "nickname" : "快到这里来",
      "winWords" : "感谢胖熊就缺个手机  望胖熊让我中个有意义的",
      "createTime" : "2016-08-14 10:59:54",
      "openTime" : 1470491030005,
      "joinNumber" : 39,
      "winerCode" : "10000025",
      "sharePicUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T1wiJKB4bv1RCvBVdK.jpg,http://p3.fx.k18f6gimg.com/v2/kmh_1_img/T1g9KKBKbj1RCvBVdK.jpg,http://p3.fx.kgimg.com/v2/kmh_1_img/T13nDKBCEv1RCvBVdK.jpg",
  "kgUid" : 1207633488,
    "recommStatus" : 0
}, {
    "id" : 1476,
      "goodsRobId" : 100166788,
      "goodsId" : 2314,
      "goodsName" : "睡眠博士 护颈乳胶枕头 大颗粒按摩",
      "avatarUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T1cdJKByJ_1RCvBVdK.jpg",
      "nickname" : "最后13块，世界没有爱",
      "winWords" : "昨天中奖今天就收到了，希望再接好运！中个大大大奖！",
      "createTime" : "2016-08-14 09:02:04",
      "openTime" : 1471061855029,
      "joinNumber" : 239,
      "winerCode" : "10000094",
      "sharePicUrl" : "http://imge.kugou.com/v2/kmh_1_img/T1Vzb7BgKT1RCvBVdK.jpg,http://imge.kugou.com/v2/kmh_1_img/T1FPdKB5d_1RCvBVdK.jpg,http://imge.kugou.com/v2/kmh_1_img/T13PLKBmWT1RCvBVdK.jpg",
      "kgUid" : 1201802450,
      "recommStatus" : 0
  }, {
    "id" : 1473,
      "goodsRobId" : 100162627,
      "goodsId" : 2269,
      "goodsName" : "E路航（Eroda）M80车载双地图导航仪 实时路况一体机",
      "avatarUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1emZ4Bmxv1RCvBVdK.png",
      "nickname" : "中奖通知来啦",
      "winWords" : "东西收到，很开心，没想到第一次玩就中了，挺幸运的，感谢胖熊平台，还会继续支持下去！东西还没拆。先发三张将就一下",
      "createTime" : "2016-08-13 21:45:37",
      "openTime" : 1470925675051,
      "joinNumber" : 1199,
      "winerCode" : "10000440",
      "sharePicUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T1NeAKBsDg1RCvBVdK.jpg,http://p3.fx.kgimg.com/v2/kmh_1_img/T1TYWKB4WQ1RCvBVdK.jpg,http://p3.fx.kgimg.com/v2/kmh_1_img/T1BGbKBCdQ1RCvBVdK.jpg",
      "kgUid" : 1206493584,
      "recommStatus" : 0
  }, {
    "id" : 1471,
      "goodsRobId" : 100164418,
      "goodsId" : 2401,
      "goodsName" : "三只松鼠 芒果干116g 一袋",
      "avatarUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T1PQZKBQdg1RCvBVdK.jpg",
      "nickname" : "151****0775",
      "winWords" : "连中两单 酷酷哒  哈哈给物流方便了 两期一块儿中不用跑两趟了   味道还可以酸甜\uD83D\uDE04",
      "createTime" : "2016-08-13 20:40:31",
      "openTime" : 1470974525019,
      "joinNumber" : 19,
      "winerCode" : "10000010",
      "sharePicUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T1WhZKBgVj1RCvBVdK.jpeg,http://p3.fx.kgimg.com/v2/kmh_1_img/T14hYKBTKv1RCvBVdK.jpg,http://p3.fx.kgimg.com/v2/kmh_1_img/T1PMdKBbd_1RCvBVdK.jpg",
      "kgUid" : 1205808798,
      "recommStatus" : 0
  }, {
    "id" : 1470,
      "goodsRobId" : 100164451,
      "goodsId" : 2401,
      "goodsName" : "三只松鼠 芒果干116g 一袋",
      "avatarUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T1PQZKBQdg1RCvBVdK.jpg",
      "nickname" : "151****0775",
      "winWords" : "哈哈   刚刚到货又中奖了！没吃过就投了一元居然给中了  味道不错 发货很快 物流更快\n棒棒哒！ ",
      "createTime" : "2016-08-13 20:33:24",
      "openTime" : 1470976030005,
      "joinNumber" : 19,
      "winerCode" : "10000009",
      "sharePicUrl" : "http://p3.fx.kgimg.com/v2/kmh_1_img/T14hYKBTKv1RCvBVdK.jpg,http://p3.fx.kgimg.com/v2/kmh_1_img/T1PMdKBbd_1RCvBVdK.jpg,http://p3.fx.kgimg.com/v2/kmh_1_img/T15vdKBjEv1RCvBVdK.jpg",
      "kgUid" : 1205808798,
      "recommStatus" : 0
  }, {
    "id" : 1469,
      "goodsRobId" : 100156517,
      "goodsId" : 1731,
      "goodsName" : "【太阳的后裔乔妹同款】丹尼尔惠灵顿 手表Classy时尚女表系列石英女表",
      "avatarUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T17UJ4BQd_1RCvBVdK.jpeg",
      "nickname" : "没有就撤",
      "winWords" : "好看到飞起，中奖的感觉太幸福了，跟自己买的感觉就是不一样，我要再接再励。",
      "createTime" : "2016-08-13 18:33:11",
      "openTime" : 1470712795003,
      "joinNumber" : 1699,
      "winerCode" : "10001156",
      "sharePicUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1EgJKByxT1RCvBVdK.png,http://p1.fx.kgimg.com/v2/kmh_1_img/T1hQhKBgZg1RCvBVdK.png,http://p1.fx.kgimg.com/v2/kmh_1_img/T15GDKBmK_1RCvBVdK.png",
      "kgUid" : 1208434545,
      "recommStatus" : 0
  }, {
    "id" : 1467,
      "goodsRobId" : 100157866,
      "goodsId" : 2438,
      "goodsName" : "小米 平板电脑2 WIFI版 7.9英寸 ",
      "avatarUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1emZ4Bmxv1RCvBVdK.png",
      "nickname" : "fw",
      "winWords" : "非常好，感觉跟走了狗屎运一样，我还缺一个手机，下次让我中了吧。",
      "createTime" : "2016-08-13 17:52:38",
      "openTime" : 1470752195020,
      "joinNumber" : 1199,
      "winerCode" : "10000269",
      "sharePicUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1wnVKB7Lg1RCvBVdK.png,http://p1.fx.kgimg.com/v2/kmh_1_img/T1vnVKB7Lg1RCvBVdK.png,http://p1.fx.kgimg.com/v2/kmh_1_img/T1GLbKBmxg1RCvBVdK.png",
      "kgUid" : 1205944219,
      "recommStatus" : 0
  }, {
    "id" : 1466,
      "goodsRobId" : 100165368,
      "goodsId" : 1991,
      "goodsName" : "统一 方便面 汤达人 12杯 整箱装",
      "avatarUrl" : "http://wx.qlogo.cn/mmopen/Q3auHgzwzM5eQwZ3mtExm8Dm7VyndZD1iaYkKeicdGjYyicudmgD8QXfV9TTFVJW6DatpTpImiaEoW5KjKMoTDBvukUpoJLy4gMk5kLkXeJTn2o/0",
      "nickname" : "@输了好心疼给我中一次吧",
      "winWords" : "小小幸运～～～～～～～～～恩希望奇迹大幸运",
      "createTime" : "2016-08-13 17:27:37",
      "openTime" : 1471006895022,
      "joinNumber" : 79,
      "winerCode" : "10000023",
      "sharePicUrl" : "http://imge.kugou.com/v2/kmh_1_img/T1vACKBTdj1RCvBVdK.jpg,http://imge.kugou.com/v2/kmh_1_img/T1tDLKB7Zg1RCvBVdK.jpg,http://imge.kugou.com/v2/kmh_1_img/T1ZPDKBjd_1RCvBVdK.jpg",
      "kgUid" : 1201094842,
      "recommStatus" : 0
  }, {
    "id" : 1465,
      "goodsRobId" : 100155882,
      "goodsId" : 1966,
      "goodsName" : "浦桑尼克 P2智能扫地机器人",
      "avatarUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1emZ4Bmxv1RCvBVdK.png",
      "nickname" : "抱有一线希望",
      "winWords" : "这个智能扫地机器人太好玩了，宝宝一直跟着跑，笑得可开心了哈哈。",
      "createTime" : "2016-08-13 17:05:37",
      "openTime" : 1470687385006,
      "joinNumber" : 1799,
      "winerCode" : "10000417",
      "sharePicUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T19hEKB4E_1RCvBVdK.png,http://p1.fx.kgimg.com/v2/kmh_1_img/T1_JbKBvbj1RCvBVdK.png,http://p1.fx.kgimg.com/v2/kmh_1_img/T1cnDKBy_g1RCvBVdK.png",
      "kgUid" : 1204183978,
      "recommStatus" : 0
  } ]
}
res.json(json);
});
router.post('/goods/win', function (req, res, next) {
  var json ={
    "status" : 1,
    "errorCode" : 0,
    "errorMessage" : null,
    "servertime" : 1470893330734,
    "data" : {
      "kgUid" : 1209145396,
      "nickname" : "大莆田"+Math.random(1000),
      "status" : 5,
      "ip" : "221.204.218.112",
      "address" : "山西省太原市",
      "joinCode" : "10000043",
      "id" : 100159890,
      "joinTime" : 1470885475033,
      "joinNumber" : 21,
      "openTime" : 1470893155004,
      "avatarUrl" : "http://p1.fx.kgimg.com/v2/kmh_1_img/T1j6J4BCCT1RCvBVdK.jpeg",
      "shareType" : 1,
      "myWin" : false
    }
  }


  res.json(json);
});

module.exports = router;
