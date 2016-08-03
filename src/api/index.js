import {
  UserResource,
  AuthResource,
  ArticleResource,
  TagResource,
  MobileResource,
  CommentResource,
  AppResource,
  GoodsResource,
  MineResource,
  RechargeResource} from './resources'

export default {
  localLogin: function (data) {
    return AuthResource.save({id:'local'},data)
  },
  getSnsLogins: function () {
    return UserResource.get({id:'snsLogins'})
  },
  getMe: function () {
    return UserResource.get({id:'me'})
  },
  mdUser: function (data) {
    return UserResource.update({id:'mdUser'},data)
  },
  getTagList:function () {
    return TagResource.get({id: 'getFrontTagList'})
  },
  getApps:function () {
    return MobileResource.get({id: 'getApps'})
  },
  //article
  getIndexImage:function () {
    return ArticleResource.get({id:'getIndexImage'})
  },
  getFrontArticleList:function (data) {
    return GoodsResource.get({id: 'goods', controller:'list'},data)
  },
  getFrontArticleCount:function () {
    return ArticleResource.get({id: 'getFrontArticleCount'})
  },
  getFrontArticle:function (id) {
    return ArticleResource.get({id: id, controller: 'getFrontArticle'})
  },
  toggleLike:function (id) {
    return ArticleResource.update({id:id,controller:'toggleLike'},{})
  },
  getPrenext:function (id,options) {
    return ArticleResource.get({id:id,controller: 'getPrenext', ...options})
  },
  //comment
  getFrontCommentList:function (id) {
    return CommentResource.get({id:id,controller: 'getFrontCommentList'})
  },
  addNewComment:function (data) {
    return CommentResource.save({id:'addNewComment'},data)
  },
  addNewReply: function (id,data) {
    return CommentResource.save({id:id, controller:'addNewReply'},data)
  },
  delComment:function (id) {
    return CommentResource.remove({id:id})
  },
  delReply: function (id,data) {
    return CommentResource.update({id:id, controller:'delReply'},data)
  },
  getDemoList:function (options) {
    return AppResource.get({id: 'loadInfo',...options})
  },
  getAdList:function (options) {
    return GoodsResource.get({id: 'goods', controller:'head'})
  },
  getTypeList:function(){
    return GoodsResource.get({id:'type'})
  },
  getGoodsList:function(){
    return GoodsResource.get({id:'goods',controller:'list'})
  },
  getRechageRecord:function(){
    return RechargeResource.get({id:'user',controller:'payLog'})
  },
  getSnarchRecordList:function(){
    return MineResource.get({id:'user',controller:'buyLog/list'})
  }
}