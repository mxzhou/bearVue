import Vue from 'vue'
import Vuex from 'vuex'
import middlewares from './middlewares'
import articleList from './modules/article.list'
import prenextArticle from './modules/article.prenext'
import articleDetail from './modules/article.detail'
import auth from './modules/auth'
import commentList from './modules/comment.list'
import globalVal from './modules/global.val'
import options from './modules/options'
import logins from './modules/logins'
import tagList from './modules/tag.list'
import showmsg from './modules/showmsg'
import demoList from './modules/demo.list'
import announceList from './modules/home/announce.list'
import typeList from './modules/type.list'
import goodsList from './modules/goods.list'
import loaDing from './modules/loading'
import rechargeRecord from './modules/recharge.record'
import snarchRecord from './modules/snarch.record'
import addressList from './modules/mine/address.list'
import detailList from './modules/mine/detail.list'
import openList from './modules/open/open.list'
import win from './modules/open/win'
import shareList from './modules/share/share.list'

import modulesHome from './store.home'
const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug
Vue.config.warnExpressionErrors = false

let modules = {
    articleList,
    prenextArticle,
    articleDetail,
    auth,
    commentList,
    globalVal,
    options,
    logins,
    tagList,
    showmsg,
    demoList,
    announceList,
    typeList,
    goodsList,
    loaDing,
    rechargeRecord,
    snarchRecord,
    addressList,
    detailList,
    openList,
    win,
    shareList
}
Object.assign(modules,modulesHome)
export default new Vuex.Store({
  modules,
  strict: debug,
  middlewares
})
