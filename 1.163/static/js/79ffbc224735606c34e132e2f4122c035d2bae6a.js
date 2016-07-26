define("global/Broadcast", ["require", "pro"], function (e) {
  var t = e("pro");
  return t.mix(t.Broadcast, {
    GLOBAL_DATA_READY: "global:dataReady",
    GLOBAL_SPECIAL_CONFIG_READY: "global:specialConfigReady",
    GLOBAL_SCROLL: "global:scroll",
    GLOBAL_HAS_NEW_BONUS: "global:hasNewBonus",
    GLOBAL_HAS_NEW_PRIZE: "global:hasNewPrize",
    GLOBAL_HAS_NEW_WISH: "global:hasNewWish",
    GLOBAL_HAS_BONUS: "global:hasBonus",
    GLOBAL_HAS_PRIZE: "global:hasPrize",
    GLOBAL_HAS_WISH: "global:hasWish",
    CART_CHANGED: "cart:changed",
    PAYMENTS_CHANGE: "payments:change",
    HEADER_FIXED: "header:fixed",
    HEADER_UNFIXED: "header:unfixed",
    COMMAND_LOGIN: "command:login",
    COMMAND_ADD_TO_CART: "command:addToCart",
    COMMAND_UPDATE_CART: "command:updateCart",
    COMMAND_AVATAR_UPLOAD: "command:uploadAvatar",
    USER_NICKNAME_CHANGE: "user:nicknameChange",
    USER_AVATARPERFIX_CHANGE: "user:avatarPerfixChange",
    USER_DUOBAONAV_UPDATE: "user:duobaoNavUpadate",
    USER_BONUS_NUM_SUCC: "user:getBonusNum",
    PAY_RECHARGE_VALUE: "pay:recharge",
    WISH_SETTING_SUBMIT_SUCCESS: "wishSetting:submitSuccess",
    COMMAND_SUBMIT_ADDRESS: "command:submitAddress",
    ADDRESS_SELECTED: "address:selected",
    ADDRESS_UNSELECTED: "address:unselected",
    ADDRESS_AMOUNT_CHANGE: "address:amountChange",
    COMMAND_ADD_ADDRESS_MSGBOX: "command:addAddressMsgbox",
    COMMAND_ADD_ADDRESS_VIEW: "command:addAddressView",
    IDENTITY_ADD_SUCCESS: "identity:identityAddSuccess",
    MOBILE_CHECK_OK: "mobilecheck:success",
    MOBILE_CHECK_CANCEL: "mobilecheck:cancel",
    DETAIL_MALL_OUT_OF_STOCK: "detail:outOfStock",
    DETAIL_NOT_MALL_GOODS: "detail:notMallGoods",
    CART_IDENTITY_CHECK_SUCC: "cart:identityCheckSuccess"
  })
}), define("global/controller/BaseController", ["require", "pro", "global/Broadcast"], function (e) {
  function t() {
    var e = this.Class;
    for (var t in e.listListeners)this.listen(this.list, t, e.listListeners[t])
  }

  function i() {
    var e = this.Class;
    for (var t in e.modelListeners)this.listen(this.model, t, e.modelListeners[t])
  }

  function o() {
    var e = this.Class;
    for (var t in e.viewListeners)this.listen(this.view, t, e.viewListeners[t])
  }

  function s() {
    h.send.apply(h, arguments)
  }

  function n(e, t) {
    h.receive(e, t, this)
  }

  function r(e, t) {
    h.unreceive(e, t)
  }

  function a() {
    return this.context
  }

  function l() {
    return window.application
  }

  function c(e) {
    return new this(e)
  }

  function u(e) {
    this.applySuper(arguments), this.listen("destroy", this.onDestroy), e = e || {}, this.context = e.context, this.view = e.view, this.model = e.model, this.list = e.list, this.onReady && this.onReady(), this.listenView(), this.listenModel(), this.listenList(), this.onViewReady && (this.view.isCreated() ? this.onViewReady() : this.listenOnce(this.view, "create", function () {
      this.onViewReady(this.view)
    })), this.onViewComponentsReady && this.listen(this.view, "allcomponentsrender", function () {
      this.onViewComponentsReady(this.view)
    }), this.onGlobalDataReady && (app.isHistory() ? this.receive(h.GLOBAL_DATA_READY, this.onGlobalDataReady) : this.onGlobalDataReady())
  }

  var d = e("pro"), h = e("global/Broadcast"), g = d.Base.extend({
    constructor: u,
    statics: {getInstance: c, viewListeners: {}, modelListeners: {}, listListeners: {}},
    members: {
      getContext: a,
      getApplication: l,
      send: s,
      receive: n,
      unreceive: r,
      listenView: o,
      listenModel: i,
      listenList: t,
      onDestroy: null,
      onReady: null,
      onViewReady: null,
      onViewComponentsReady: null,
      onGlobalDataReady: null,
      context: null,
      view: null,
      model: null,
      list: null
    }
  });
  return g
}), define("global/utils/Utils", ["require", "pro"], function (e) {
  function t(e, t) {
    function i(e, t) {
      return encodeURI(e) + "=" + encodeURIComponent(t)
    }

    var o = [];
    for (var s in e) {
      var n = e[s];
      n instanceof Array ? o.push(i(s, B.JSON.stringify(n))) : o.push(i(s, n))
    }
    var s = o.join("&");
    return t && s ? "?" + s : s
  }

  function i() {
    var e = window.navigator.userAgent, t = /iphone|ipad/i, i = t.test(e);
    return i
  }

  function o() {
    var e = window.navigator.userAgent, t = /android/i, i = t.test(e);
    return i
  }

  function s(e) {
    var t = e ? e : window.location.href, i = t.split("?")[1], o = i ? i.split("&") : [], s = o.length, n = [], r = {};
    if (s > 0)for (var a = 0; s > a; a++)n = o[a].split("="), r[n[0]] = n[1], n = [];
    return r
  }

  function r(e) {
    var t = !1;
    return e ? "[object Array]" == Object.prototype.toString.call(e) ? t = !0 : void 0 : t
  }

  function a(e, t) {
    return B.clone(e, t)
  }

  function l(e) {
    e.style.pointerEvents = "none"
  }

  function c(e) {
    e.style.pointerEvents = ""
  }

  function u(e, t) {
    return B.bind(e, t)
  }

  function d(e) {
    return B.$(e)
  }

  function h(e) {
    var t = e.getFullYear(), i = this.format(e.getMonth() + 1, 2), o = this.format(e.getDate(), 2), s = this.format(e.getHours(), 2), n = this.format(e.getMinutes(), 2), r = this.format(e.getSeconds(), 2);
    return [t, i, o].join("-") + " " + [s, n, r].join(":")
  }

  function g(e) {
    B.cancelBubble(e)
  }

  function m(e, t) {
    return this.each(t, function (t, i) {
      e[i] = t
    }), e
  }

  function p(e) {
    e && e.parentNode && e.parentNode.removeChild(e)
  }

  function f(e) {
    for (var t = {}, i = e.childNodes, o = 0, s = i.length; s > o; o++) {
      var n = i[o];
      if (1 == n.nodeType && "SCRIPT" == n.tagName.toUpperCase() && "text/params" == n.getAttribute("type"))try {
        var r = n.innerHTML;
        r.indexOf("(") >= 0 && (r = r.replace(/[\(]/g, "\\("));
        var a = new Function("return(" + r + ")")();
        a && a.constructor === Object && (t = a), this.removeDom(n);
        break
      } catch (l) {
        app.error(l)
      }
    }
    return t
  }

  function _(e) {
    for (var t = {}, i = e.attributes, o = 0, s = i.length; s > o; o++) {
      var n = i[o], r = n.name, a = n.nodeValue;
      if (a) {
        var l = r.split("-");
        if (l.length > 1)for (r = l.shift(); l.length;) {
          var c = l.shift();
          r += c.substring(0, 1).toUpperCase() + c.substring(1, c.length)
        }
        if (/^[\{\[\/]/.test(a) && /(?:[\}\]]|\/[ig]?)$/.test(a))try {
          a.indexOf("(") >= 0 && !/^\/[^\/]+\/[ig]?$/.test(a) && (a = a.replace(/[\(]/g, "\\(")), a = new Function("return(" + a + ")")()
        } catch (u) {
          app.error(u)
        } else"true" == a ? a = !0 : "false" == a && (a = !1);
        t[r] = a
      }
    }
    return t
  }

  function b(e, t, i) {
    var t = t || "click";
    e && i && B.addEvent(e, t, i, !1)
  }

  function E(e, t, i) {
    e && t && i && B.removeEvent(e, t, i)
  }

  function v(e, t) {
    e && t && B.addClass(e, t)
  }

  function T(e, t) {
    e && t && B.removeClass(e, t)
  }

  function C(e, t) {
    var i = -1;
    return e instanceof Array && (e.indexOf ? i = e.indexOf(t) : this.each(e, function (e, o) {
      e === t && (i = o)
    })), n
  }

  function R(e, t, i) {
    if (i = i || e, e instanceof Array)for (var o = 0; o < e.length && t.call(i, e[o], o) !== B.BREAK; o++); else if ("object" == typeof e && e.constructor == Object)for (var s in e)if (t.call(i, e[s], s) === B.BREAK)break
  }

  function S(e) {
    return B.JSON.parse(e)
  }

  function O(e) {
    return B.JSON.stringify(e)
  }

  function y(e) {
    B.cancelDelay(e)
  }

  function M(e) {
    B.cancelLoop(e)
  }

  function A(e, t, i) {
    return B.delay(e, t, i)
  }

  function D(e, t, i, o) {
    return o && e.call(t), B.loop(e, t, i)
  }

  function N(e) {
    return e = e.replace(/</gi, "&lt;"), e = e.replace(/>/gi, "&gt;"), e = e.replace(/\"/gi, "&quot;"), e = e.replace(/\'/gi, "&apos;")
  }

  function I(e) {
    for (var t = 0, i = 0; i < e.length; i++)t += e.charCodeAt(i) < 0 || e.charCodeAt(i) > 255 ? 2 : 1;
    return t
  }

  function w(e, t) {
    var i = e + "";
    if (i.length < t)for (var o = 0, s = t - i.length; s > o; o++)i = "0" + i;
    return i
  }

  function L(e) {
    return e.replace(/(^\s*)|(\s*$)/g, "").replace(/(^　*)|(　*$)/g, "")
  }

  function U(e) {
    for (var t = new RegExp("[%--`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]"), i = "", o = 0; o < e.length; o++)i += e.substr(o, 1).replace(t, "");
    return i
  }

  function x(e, t) {
    return e.replace(/([\u0391-\uffe5])/gi, "$1a").substring(0, t).replace(/([\u0391-\uffe5])a/gi, "$1")
  }

  var B = e("pro"), k = {
    addClass: v,
    removeClass: T,
    addEvent: b,
    removeEvent: E,
    indexOfArray: C,
    parseJSON: S,
    toJSON: O,
    each: R,
    delay: A,
    cancelDelay: y,
    loop: D,
    cancelLoop: M,
    encodeHTML: N,
    stringLen: I,
    format: w,
    trim: L,
    stripScript: U,
    byteSubstr: x,
    getParamsByAttrs: _,
    getParamsByScript: f,
    mix: m,
    removeDom: p,
    cancelBubble: g,
    formatDate: h,
    $: d,
    bind: u,
    clone: a,
    disablePointerEvents: l,
    enablePointerEvents: c,
    isArray: r,
    getUrlParams: s,
    isAndroid: o,
    isIOS: i,
    getParamsString: t
  };
  return k
}), define("global/view/BaseView", ["require", "pro", "global/Broadcast", "global/utils/Utils"], function (e) {
  function t() {
    var e = this.Class.componentListeners;
    if (e)for (var t in e) {
      var i = t.split("/"), o = i[0], s = i[1], n = this.getTag(o), r = e[t];
      "function" == typeof r ? this.listen(n, s, r) : this.listen(n, s, function () {
        this.trigger(o + ":" + s)
      })
    }
  }

  function i() {
    this.destroyChildren(), this.entry = null, this.dom.innerHTML = ""
  }

  function o() {
    d.send.apply(d, arguments)
  }

  function s(e, t) {
    d.receive(e, t, this)
  }

  function n(e, t) {
    d.unreceive(e, t)
  }

  function r() {
    return window.app
  }

  function a(e) {
    return this.__tags[e]
  }

  function l(t) {
    for (var i = this.findAll("[ui]"), o = i.length; i.length;) {
      var s = i.pop(), n = s.getAttribute("ui"), r = u.bind(function (e, i) {
        for (var s = e.parentNode; s && u.contains(t, s);) {
          if (s.getAttribute("ui") || s.getAttribute("module") || s.getAttribute("module-id"))return;
          s = s.parentNode
        }
        e.removeAttribute("ui");
        var n = e.getAttribute("tag"), r = h.getParamsByAttrs(e), a = new i(r).renderBy(e).join(this);
        this.trigger("componentrender", n, a), n && (this.__tags[n] = a, this.trigger("componentrender:" + n, a)), o--, 0 >= o && (this.listenComponents(), h.delay(function () {
          this.trigger("allcomponentsrender")
        }, this))
      }, this, s);
      n && (e.defined(n) ? r(e(n)) : e([n], r))
    }
  }

  function c() {
    this.applySuper(arguments);
    var e = this.__config, t = this.Class, i = t.template, o = !1, s = ' ui="';
    i ? i.indexOf(s) > 0 && (o = !0) : this.dom && this.dom.innerHTML.indexOf(s) > 0 && (o = !0), this.context = e.context, o && this.listen("create", this.parseComponents), this.listen("beforecreate", this.onBeforeCreate), this.listen("create", this.onCreate), this.listen("render", this.onRender), this.listen("afterrender", this.onAfterRender), this.listen("update", this.onUpdate), this.listen("show", this.onShow), this.listen("hide", this.onHide), this.listen("beforeDestroy", this.onBeforeDestroy), this.listen("destroy", this.onDestroy), this.listen("componentrender", this.onComponentRender), this.listen("allcomponentsrender", this.onAllComponentsRender)
  }

  var u = e("pro"), d = e("global/Broadcast"), h = e("global/utils/Utils");
  return u.View.extend({
    constructor: c,
    statics: {componentListeners: {}, delay: !1},
    members: {
      onCreate: null,
      onRender: null,
      onAfterRender: null,
      onUpdate: null,
      onShow: null,
      onHide: null,
      onBeforeDestroy: null,
      onDestroy: null,
      onComponentRender: null,
      onAllComponentsRender: null,
      onBeforeCreate: null,
      context: null,
      send: o,
      receive: s,
      unreceive: n,
      getTag: a,
      getApplication: r,
      empty: i,
      listenComponents: t,
      parseComponents: l,
      __tags: {}
    }
  })
}), define("global/model/BaseModel", ["require", "pro", "global/Broadcast"], function (e) {
  function t(e, t, i, o, s, n) {
    return (!this.singleton || this.singleton && !this.__instance) && (this.__instance = new this(e, t, i, o, s, n)), this.__instance
  }

  function i() {
    d.send.apply(d, arguments)
  }

  function o(e, t) {
    d.receive(e, t, this)
  }

  function s(e, t) {
    d.unreceive(e, t)
  }

  function n(e) {
    var t = (new this).request(e);
    return t
  }

  function r() {
    return window.application
  }

  function a(e, t) {
    this.applySuper(arguments), this.context = t, this.listen("change", this.onChange), this.listen("changes", this.onChanges), this.listen("invalid", this.onInvalid), this.listen("valid", this.onValid), this.listen("requeststart", this.onRequestStart), this.listen("requestcomplete", this.onRequestComplete), this.listen("requestsuccess", this.onRequestSuccess), this.listen("requesterror", this.onRequestError), this.listen("destroy", this.onDestroy)
  }

  function l() {
    var e = this.applySuper("_getApi", arguments);
    return app.isMock() && !/^https?:\/\//.test(e.url) && e.url && ("remote" == app.getCookie("dataType") ? (e.api = e.url, e.url = "http://" + app.getCookie("proxy") + "/proxy") : e.url = e.url.replace(/\.do$/, ".mo")), e
  }

  function c(e) {
    var t = this.Class, i = e.success, o = e.error, s = e.complete, n = e.timestamp !== !1, r = e.token !== !1, a = e.data = e.data || {};
    if (r && (a.token = a.token || app.getToken() || void 0), n && (a.t = a.t || (new Date).getTime()), (i || o) && (e.success = function (e) {
        var t = this.Class, s = e.code -= 0, n = e.list || e.data || e.result;
        s === t.CODE_SUCCESS ? (this.trigger(t.SUCCESS, n), i && i.call(this, n)) : (s == t.CODE_NOT_LOGIN && app.login(), this.trigger(t.ERROR, e), o && o.call(this, e))
      }), o && (e.error = function (e) {
        this.trigger(t.ERROR, e), o && o.call(this, e)
      }), s && (e.complete = s), "remote" == app.getCookie("dataType")) {
      var l = /uid=(.+?)(;|$)/.test(document.cookie) && RegExp.$1, c = this._getApi(e.api), d = c.api;
      if (d) {
        var h = (-1 == d.indexOf("http") ? "http://" + app.getCookie("remote") : "") + d;
        a.username = l;
        for (var g in a)h += (-1 == h.indexOf("?") ? "?" : "&") + g + "=" + a[g];
        a.url = h
      }
    }
    u.Model.prototype.request.apply(this, arguments)
  }

  var u = e("pro"), d = e("global/Broadcast"), h = u.Model.extend({
    constructor: a,
    overrides: {request: c, _getApi: l},
    statics: {
      CODE_SUCCESS: 0,
      CODE_NOT_LOGIN: -1,
      SUCCESS: "success",
      ERROR: "error",
      REASON_DEFAULT: "网络错误，情稍候再试",
      request: n,
      singleton: !1
    },
    members: {
      getApplication: r,
      getInstance: t,
      send: i,
      receive: o,
      unreceive: s,
      onChange: null,
      onChanges: null,
      onInvalid: null,
      onValid: null,
      onRequestComplete: null,
      onRequestStart: null,
      onRequestSuccess: null,
      onRequestError: null,
      onDestroy: null,
      context: null
    }
  });
  return h
}), define("global/model/BaseList", ["require", "pro", "global/model/BaseModel"], function (e) {
  function t(e, t) {
    this.applySuper(arguments), this.context = t, this.listen("change", this.onChange), this.listen("include", this.onInclude), this.listen("exclude", this.onExclude), this.listen("set", this.onSet), this.listen("empty", this.onEmpty), this.listen("nonempty", this.onNonempty), this.listen("requestcomplete", this.onRequestComplete), this.listen("requestsuccess", this.onRequestSuccess), this.listen("requesterror", this.onRequestError), this.listen("requeststart", this.onRequestStart), this.listen("destroy", this.onDestroy)
  }

  var i = e("pro"), o = e("global/model/BaseModel"), s = i.List.extend({
    constructor: t,
    overrides: {request: o.prototype.request, _getApi: o.prototype._getApi},
    statics: {SUCCESS: o.SUCCESS, ERROR: o.ERROR, CODE_SUCCESS: o.CODE_SUCCESS, CODE_NOT_LOGIN: o.CODE_NOT_LOGIN},
    members: {
      getApplication: o.prototype.getApplication,
      onChange: null,
      onInclude: null,
      onExclude: null,
      onSet: null,
      onEmpty: null,
      onNonempty: null,
      onRequestComplete: null,
      onRequestStart: null,
      onRequestSuccess: null,
      onRequestError: null,
      onDestroy: null,
      context: null
    }
  });
  return s
}), define("global/hook/HookManager", ["require", "pro"], function (e) {
  function t(e) {
    this.applySuper(arguments), this.context = e
  }

  function i(e, t, i) {
    var o = this.__hooks[e];
    if (o && o.length > 0) {
      var s = 0;
      this.cancel = function () {
        l.cancelDelay(this.__timer)
      }, this["final"] = function (e) {
        l.cancelDelay(this.__timer), i && i.call(this.context, e), i = e = null
      }, this.done = function (t) {
        var n = this.__cur;
        if (n && (app.log("%chook " + e + " done", "color:green", n), n.doing = !1), n = this.__cur = o[s++]) {
          n.doing = !0;
          var r;
          try {
            r = this.__cur(t) || 1e3
          } catch (a) {
            app.log("%chook " + e + " error", "color:red", n), this.done(t)
          }
          r === !1 || 0 > r || (this.__timer = l.delay(function () {
            n.doing && (app.log("%chook " + e + " timeout", "color:red", n), this.done(t), t = n = null)
          }, this, r))
        } else this["final"](t), t = i = o = null
      }, this.done(t)
    } else i && i.call(this.context, t)
  }

  function o(e) {
    return new this(e)
  }

  function s(e, t) {
    var i = this.__hooks[e], o = t;
    if (i)for (var s = 0, n = i.length; n > s; s++) {
      var r = i[s];
      r && (o = r.call(this.context, o))
    }
    return o
  }

  function n(e, t, i) {
    return i ? this.async(e, t, i) : this.sync(e, t)
  }

  function r(e, t) {
    var i = this.__hooks[e];
    i || (i = this.__hooks[e] = []), i.push(t)
  }

  function a(e) {
    for (var t in e)this.set(t, e[t])
  }

  var l = e("pro");
  return l.Base.extend({
    constructor: t,
    statics: {getInstance: o},
    members: {use: n, sync: s, async: i, set: r, batch: a, "final": null, done: null, context: null, __hooks: {}}
  })
}), define("global/module/BaseModule", ["require", "pro", "global/controller/BaseController", "global/Broadcast", "global/view/BaseView", "global/model/BaseModel", "global/model/BaseList", "global/hook/HookManager", "global/utils/Utils"], function (e) {
  function t(e, t, i) {
    return this._hook.use(e, t, i)
  }

  function i(e, t) {
    var i = this._hook;
    "string" == typeof e ? i.set(e, t) : i.batch(e)
  }

  function o(e) {
    app.log("%c" + this.name + ":", "font-weight:bold", e)
  }

  function s(e) {
    this._transition = e
  }

  function n(e) {
    return (this._transition || {})[e]
  }

  function r() {
    P.send.apply(P, arguments)
  }

  function a(e, t) {
    P.receive(e, t, this)
  }

  function l(e, t) {
    P.unreceive(e, t)
  }

  function c(e) {
    var t = new this(e);
    return t.start(), t
  }

  function u(e) {
    return this._tags[e]
  }

  function d() {
    return new this({context: window, scale: document.body, params: {}}).launchAll()
  }

  function h() {
    function e() {
      0 >= g && this.trigger("launchall")
    }

    var t, i = this.Class, o = i.MODULE, s = this.getView(), n = this.getScale();
    if (s || n) {
      var r = s && s.dom || n;
      if (r.innerHTML.indexOf(' module="') < 0)return;
      if (document.querySelectorAll) {
        t = r.querySelectorAll("[" + o + "]");
        try {
          t = Array.prototype.slice.call(t)
        } catch (a) {
          for (var l = [], c = 0, u = t.length; u > c; c++)l.push(t[c]);
          t = l
        }
      } else {
        t = [];
        for (var d = r.getElementsByTagName("*"), c = 0, u = d.length; u > c; c++) {
          var h = d[c];
          h.getAttribute(o) && t.push(h)
        }
      }
      for (var g = t.length; t.length;) {
        var m = t.pop(), p = m.getAttribute(o), f = "true" == m.getAttribute(i.MODULE_LAUNCHED), _ = !1;
        if (!f) {
          for (var b = m.parentNode; b && k.contains(n, b);) {
            if (b.getAttribute(o) || b.getAttribute(i.MODULE_ID)) {
              _ = !0;
              break
            }
            b = b.parentNode
          }
          _ ? (g--, e.call(this)) : this.load(p, k.bind(function (t, i) {
            var o = this.Class, s = t.getAttribute("tag"), n = "true" == t.getAttribute(o.MODULE_LAUNCHED);
            if (!n) {
              var r = H.getParamsByAttrs(t), a = H.getParamsByScript(t);
              if (!i)return app.error("模块加载错误");
              k.mix(r, a);
              var l = this.launch(i, r, t);
              s && (this._tags[s] = l, this.trigger("launch:" + s, l)), t.setAttribute(o.MODULE_ID, l.id), t.setAttribute(o.MODULE_LAUNCHED, "true"), o = null, r = null, l = null, t = null, g--, e.call(this)
            }
          }, this, m))
        }
      }
    }
  }

  function g(e, t, i) {
    var o = new e({context: this, params: t, scale: i || this.getScale()});
    return o.start(), o
  }

  function m(e, t) {
    var t = t || {}, i = app.msgbox({header: t.msgBoxHeader || e.msgBoxHeader || "", className: e.msgboxClass || ""});
    t.msgbox = i;
    var o = this.launch(e, t, i);
    return i.listenOnce(this.view.Class.DESTROY, function () {
      o.isDestroyed() || o.destroy()
    }), o.listenOnce(this.view.Class.DESTROY, function () {
      i.isDestroyed() || i.destroy()
    }), o
  }

  function p(t, i) {
    var o = this, s = this.Class, n = "string" == typeof t, r = "function" == typeof t;
    if (r)i && i.call(this, t); else {
      t = this.useHook(s.HOOK_BEFORE_LOAD, t);
      var a = n ? [t] : t;
      e(a, function () {
        i && i.apply(o, arguments)
      })
    }
  }

  function f(e) {
    if (this.singleton && this._instance)return this._instance;
    var t = new this(e);
    return this.singleton && (this._instance = t), t
  }

  function _(e) {
    var t = this.model, i = this.list;
    return t ? t.get(e) : i ? i.getData(e) : e ? this._data[e] : this._data
  }

  function b(e) {
    return e ? this._params[e] : this._params
  }

  function E() {
    return this._scale
  }

  function v(e) {
    return this._scale = e
  }

  function T() {
    return this._result
  }

  function C(e) {
    return this._result = e
  }

  function R() {
    return this.view
  }

  function S(e) {
    return this.view = e
  }

  function O() {
    return this._scaleType
  }

  function y(e, t) {
    function i() {
      this.trigger("show"), this.log("show"), o && o.show(), e && e.call(this), o = e = null
    }

    var o = this.getView(), s = t || this.getTransition("show");
    s ? s.call(this, o, function () {
      i.call(this)
    }) : i.call(this)
  }

  function M(e, t) {
    function i() {
      this.trigger("hide"), o && o.hide(), this.log("hide"), e && e.call(this), o = e = null
    }

    var o = this.getView(), s = t || this.getTransition("hide");
    s ? s.call(this, o, function () {
      i.call(this)
    }) : i.call(this)
  }

  function A(e, t) {
    var i = this.Class;
    if (this._started)this.resume(); else {
      if (this.trigger("beforestart"), e && this.setScale(e), this.removeHolder(), i.autoRender) {
        var o = this.getView();
        if (o && !o.isCreated()) {
          var e = this.getScale(), s = this.getScaleType() !== i.SCALE_CONTAINER && e.getAttribute(i.MODULE_ID);
          s ? o.renderBy(e) : o.render(e)
        }
      }
      i.autoLaunchAll && this.launchAll(), this.trigger("start"), this._started = !0, t && t.call(this);
      var n = (new Date).getTime();
      this.log("start (" + (n - this.startTime) + "ms, " + (n - app.startTime) + "ms)"), this.show()
    }
  }

  function D(e) {
    this.log("pause"), this.trigger("pause", e)
  }

  function N(e, t) {
    this.log("resume"), this.trigger("resume", e, t)
  }

  function I(e) {
    var t = this.Class;
    return void 0 !== e && this.setResult(e), e = this.getResult(), this.trigger("beforefinish", e) !== !1 && this.hide(function () {
      this.controller && this.controller.destroy(), this.view && this.view.destroy(), this.model && this.model.destroy(), this.list && this.list.destroy(), null !== e && this.trigger("result", e), this.trigger("finish", e), this.destroy(), t.singleton && (t._instance = null), this.log("finish")
    }), e
  }

  function w(e) {
    var t = this.Class;
    this.startTime = (new Date).getTime(), this.applySuper(arguments), this.id = t.MODULE + "-" + Y.idCounter++, this.context = e.context, this._params = e.params || {}, this._data = this.getParams("data"), this._scale = e.scale && (e.scale.entry || e.scale), this._scaleType = e.scaleType || t.SCALE_CONTAINER, this._hook = G.getInstance(this), this.listen("start", this.onStart), this.listen("finish", this.onFinish), this.listen("result", this.onResult), this.listen("beforestart", this.onBeforeStart), this.listen("beforefinish", this.onBeforeFinish), this.listen("pause", this.onPause), this.listen("resume", this.onResume), this.listen("show", this.onShow), this.listen("hide", this.onHide), this.listen("launchall", this.onLaunchAll), this.context && this.context._pro && this.join(this.context);
    var i = this._scale.attributes;
    t.SCALE_CONTAINER in i ? this._scaleType = t.SCALE_CONTAINER : t.SCALE_HOLDER in i ? this._scaleType = t.SCALE_HOLDER : t.SCALE_TEMPLATE in i && (this._scaleType = t.SCALE_TEMPLATE);
    var o, s, n, r, a = e.Controller || t.Controller, l = e.Model || t.Model, c = e.List || t.List, u = e.View || t.View, d = e.Transition || t.Transition;
    this.onInitData && (this._data = this.onInitData(this._data)), c ? s = (c || V).from(this._data, this) : this.onConstructList && (s = this.onConstructList(this._data)), l ? n = (l || q).from(this._data, this) : this.onConstructModel && (n = this.onConstructModel(this._data));
    var h = {bind: t.bind, context: this, model: n, list: s};
    this.onInitView && (h = this.onInitView(h)), !n && !s && (h.data = this._data), this.setTransition(d || e.transition), u ? r = u.template ? new u(h) : this._scaleType == t.SCALE_TEMPLATE ? u.parse(this._scale, h, u.delay) : u.from(this._scale, h, u.delay) : this.onConstructView && (r = this.onConstructView(h, this._scale));
    var g = {context: this, list: s, model: n, view: r};
    a ? o = new a(g) : this.onConstructController && (o = this.onConstructController(g)), this.view = r, this.model = n, this.controller = o, this.list = s, this.listenSpecial()
  }

  function L() {
    for (var e = this.getScale(), t = e.childNodes, i = this.Class, o = 0, s = t.length; s > o; o++) {
      var n = t[o];
      if (1 == n.nodeType && n.getAttribute("pro") == i.MODULE_HOLDER) {
        H.removeDom(n);
        break
      }
    }
  }

  function U(e, t, i) {
    return new this({context: window, scale: document.body, params: {}}).launch(e, t, i)
  }

  function x(e, t) {
    app.callSpecial(this, e, t)
  }

  function B() {
  }

  var k = e("pro"), P = (e("global/controller/BaseController"), e("global/Broadcast")), q = (e("global/view/BaseView"), e("global/model/BaseModel")), V = e("global/model/BaseList"), G = e("global/hook/HookManager"), H = e("global/utils/Utils"), Y = k.Base.extend({
    constructor: w,
    statics: {
      SCALE_CONTAINER: "container",
      SCALE_HOLDER: "holder",
      SCALE_TEMPLATE: "template",
      MODULE: "module",
      MODULE_ID: "module-id",
      MODULE_HOLDER: "module-holder",
      MODULE_LAUNCHED: "module-launched",
      HOOK_BEFORE_LOAD: "beforeLoad",
      View: null,
      Model: null,
      List: null,
      Controller: null,
      Transition: null,
      run: c,
      getInstance: f,
      launch: U,
      launchAll: d,
      singleton: !1,
      bind: !1,
      autoLaunchAll: !0,
      autoRender: !0,
      idCounter: 0,
      openable: !1
    },
    members: {
      name: "",
      start: A,
      finish: I,
      show: y,
      hide: M,
      pause: D,
      resume: N,
      setScale: v,
      getScale: E,
      setResult: C,
      getResult: T,
      setView: S,
      getView: R,
      getData: _,
      getParams: b,
      getScaleType: O,
      getTag: u,
      launch: g,
      launchInMsgbox: m,
      load: p,
      launchAll: h,
      listenSpecial: B,
      callSpecial: x,
      removeHolder: L,
      send: r,
      receive: a,
      unreceive: l,
      setTransition: s,
      getTransition: n,
      setHook: i,
      useHook: t,
      log: o,
      id: 0,
      view: null,
      list: null,
      model: null,
      controller: null,
      context: null,
      onBeforeStart: null,
      onStart: null,
      onBeforeFinish: null,
      onFinish: null,
      onResult: null,
      onPause: null,
      onResume: null,
      onShow: null,
      onHide: null,
      onLaunchAll: null,
      onConstructController: null,
      onConstructModel: null,
      onConstructView: null,
      onConstructList: null,
      onInitData: null,
      onInitView: null,
      _hook: null,
      _data: null,
      _scale: null,
      _scaleType: null,
      _result: null,
      _params: null,
      _transition: null,
      _started: !1,
      _tags: {}
    }
  });
  return Y
}), define("global/module/ModuleManager", ["require", "pro", "global/module/BaseModule", "global/utils/Utils"], function (e) {
  function t(e) {
    window.history.pushState(null, null)
  }

  function i(e) {
    this.trigger("popstate") !== !1 && this.back()
  }

  function o() {
    u.addEvent(window, "popstate", this.processHistoryState.bind(this))
  }

  function s() {
    return this._backTitle
  }

  function n(e, t, i, o) {
    function s(e) {
      if (o) {
        try {
          this._backTitle = o.getView().getActionBar().getData("title")
        } catch (s) {
          this._backTitle = ""
        }
        o.hide();
        var n = this.launch(e, t, this.getScale()), r = n.name || n.id;
        return this.pushHistoryState(r), this._history || (this._history = new u.Base), this._history.include(n), o.listen(n, "finish", function () {
          this.show()
        }), o.listen(n, "result", i), this.enablePointerEvents(), n
      }
    }

    return this.disablePointerEvents(), "string" != typeof e ? s.call(this, e) : void this.load(e, function (e) {
      s.call(this, e)
    })
  }

  function r() {
    this.each(function (e) {
      h.disablePointerEvents(e.view.dom)
    })
  }

  function a() {
    h.delay(function () {
      this.each(function (e) {
        h.enablePointerEvents(e.view.dom)
      })
    }, this, 500)
  }

  function l() {
    return this._history && this._history.getChild(this._history.getChildrenCount() - 1)
  }

  function c() {
    if (this._history) {
      var e = this.getCurrent();
      e ? e.finish() : window.history.go(-1)
    } else window.history.go(-1)
  }

  var u = e("pro"), d = e("global/module/BaseModule"), h = e("global/utils/Utils"), g = d.extend({
    members: {
      open: n,
      close: c,
      back: c,
      getBackTitle: s,
      pushHistoryState: t,
      processHistoryState: i,
      listenHistoryState: o,
      getCurrent: l,
      disablePointerEvents: r,
      enablePointerEvents: a,
      onShowPrev: null,
      onHidePrev: null,
      onShowNext: null,
      onHideNext: null,
      onBack: null,
      onOpen: null,
      _backTitle: "",
      _history: null,
      _cache: null
    }
  });
  return g
}), define("global/model/SpecialRuleList", ["require", "pro", "global/model/BaseList"], function (e) {
  function t(e) {
    this.__specials = e
  }

  function i(e) {
    return this.__instance || (this.__instance = new this(e)), this.__instance
  }

  function o(e) {
    this.callSuper(), this.setSpecials(e || {})
  }

  function s(t, i) {
    try {
      var o = this;
      this.each(function (s) {
        var n = s.get("relateAct"), r = s.get("source"), a = this.__specials[n], l = a && a[t], c = app.getData("ver") || "web", u = r == c || "any" == r;
        u && l && e([a.base + "/" + l], function (e) {
          i && i.call(o, e, {rule: s, tag: n, config: a})
        })
      })
    } catch (s) {
      app.error(s)
    }
  }

  function n() {
    return this.__loaded
  }

  function r(e, t) {
    this.request({
      api: app.isMock() || app.isTest() ? "get_test" : "get", success: function (t) {
        this.__loaded = !0, this.set(t.list), e && e.call(this)
      }, error: t
    })
  }

  var a = (e("pro"), e("global/model/BaseList")), l = a.extend({
    constructor: o,
    overrides: {
      apis: {
        get: "jsonp:http://1.163.com/kpimission/actregu.do",
        get_test: "jsonp:http://t.1.163.com/kpimission/actregu.do"
      }
    },
    statics: {getInstance: i},
    members: {fetch: r, isLoaded: n, matchSpecials: s, setSpecials: t, __instance: null, __loaded: !1, __specials: null}
  });
  return l
}), define("global/utils/Cookie", ["require"], function (e) {
  function t() {
    n._document = document
  }

  function i(e, t, i, o, s) {
    function r(e) {
      var t = e.substring(0, 1), i = e.substring(1, e.length) - 0;
      return "s" == t ? 1e3 * i : "h" == t ? 60 * i * 60 * 1e3 : "d" == t ? 24 * i * 60 * 60 * 1e3 : void 0
    }

    var a = e, l = t, c = i ? r(i) : 0, u = o || "/", d = s;
    if (a) {
      var h = new Date, g = "";
      c && (h.setTime(h.getTime() + c), g = ";expires=" + h.toGMTString()), n._document.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(l) + g + (u ? ";path=" + u : "") + (d ? ";domain=" + d : "")
    }
  }

  function o(e) {
    var t = e, i = "";
    if (!t)return i;
    var o = n._document.cookie;
    if (!o)return i;
    var s = "(^| |;)" + encodeURIComponent(t) + "=([^;]*)(;|$)", r = new RegExp(s), a = o.match(r);
    return a && (i = decodeURIComponent(a[2])), i
  }

  function s(e, t, i) {
    var o = e;
    if (o) {
      var s = t || "/", r = i, a = new Date;
      a.setTime(a.getTime() + -1);
      var l = ";expires=" + a.toGMTString();
      n._document.cookie = encodeURIComponent(o) + "=" + l + (s ? ";path=" + s : "") + (r ? ";domain=" + r : "")
    }
  }

  var n = {_document: null, _init: t, set: i, get: o, del: s};
  return n._init(), n
}), define("global/model/GlobalModel", ["require", "global/model/BaseModel"], function (e) {
  function t(e, t) {
    this.request({
      api: "get", success: function (t) {
        this.set(t), e && e.call(this)
      }, error: t
    })
  }

  var i = e("global/model/BaseModel"), o = i.extend({
    overrides: {
      apis: {
        get: {
          url: "/user/global.do",
          onResponse: function (e) {
            e.result.isLogin = 1 === e.result.isLogin, e.result.isNTES = 1 === e.result.isNTES
          }
        }
      },
      data: {
        cid: "",
        uid: "",
        nickname: "",
        mobileMail: "",
        serverTime: 0,
        isLogin: !1,
        isNTES: !1,
        appSource: "",
        username: function (e) {
          var t = e.uid, i = t, o = /^m(1\d{10})(?:_\d+)?@(163\.com|126\.com|yeah\.net)$/;
          if (o.test(t)) {
            var s = t.match(o);
            i = s[1] + "@" + s[2]
          }
          return i
        }
      }
    }, members: {fetch: t}
  });
  return o
}), define("global/model/AccountModel", ["require", "pro", "global/model/BaseModel"], function (e) {
  var t = (e("pro"), e("global/model/BaseModel")), i = t.extend({
    overrides: {
      data: {
        cid: "",
        uid: "",
        nickname: "",
        username: "",
        hasMobile: !1,
        isLogin: !1,
        isValid: function (e) {
          return !!e.uid
        }
      }
    }
  });
  return i
}), define("global/utils/Location", ["require", "pro"], function (e) {
  function t(e, t, i) {
    function o(e, t) {
      return e.indexOf("?" + t) > -1 || e.indexOf("&" + t) > -1
    }

    t = t || window.location.href;
    var s = t.split("#"), n = s[0], r = n.indexOf("?") > -1 ? "&" : "?";
    if ("string" == typeof e) {
      var a = e.charAt(0);
      e = "?" === a || "&" === a ? e.slice(1) : e, n += r + e
    } else for (var l in e)o(n, l) ? i || (n = n.replace(new RegExp(l + "=[^&#]*"), l + "=" + e[l])) : (n += r + l + "=" + e[l], r = "&");
    return s[0] = n, s.join("#")
  }

  function i(e, t) {
    return this.getParameters(t)[e]
  }

  function o(e) {
    function t(e) {
      return e.replace(/(^\s*|\s*$)/g, "")
    }

    e = e || window.location.href;
    var i = this._paramCache, o = e.replace(/(#.+)/g, "");
    if (i[o])return i[o];
    var s, n = t(this._parse(e).query), r = n ? n.split("&") : [], a = {};
    if (r.length > 0) {
      for (var l = 0, c = r.length; c > l; l++)s = /([^=]+)=([^=]*)/.exec(r[l]), s && (a[s[1]] = s[2]);
      i[o] = a
    }
    return a
  }

  function s(e) {
    var t = this._parse(e).hostname.split(".");
    return t.length < 2 ? "" : t.reverse().slice(0, 2).reverse().join(".")
  }

  function n(e) {
    var t = this._parse(e).hash;
    return t = t && t.length > 0 ? t.slice(1) : ""
  }

  function r(e, t) {
    var i = this._parse(t).hash;
    i = i && i.length > 0 ? i.slice(1) : "";
    var o, s = i.split("&"), n = "";
    if (s.length > 0)for (var r = 0, a = s.length; a > r; r++)if (o = /([^=]+)=([^=]*)/.exec(s[r]), o[1] == e)return n = o[2];
    return n
  }

  function a(e) {
    e = e || window.location.href;
    var t = document.createElement("a");
    return t.href = e, {
      href: t.href,
      host: t.host || window.location.host,
      port: "0" === t.port || "" === t.port ? window.location.port : t.port,
      hash: t.hash,
      hostname: t.hostname || window.location.hostname,
      pathname: "/" !== t.pathname.charAt(0) ? "/" + t.pathname : t.pathname,
      protocol: t.protocol && ":" !== t.protocol ? t.protocol : location.protocol,
      search: t.search,
      query: t.search.slice(1)
    }
  }

  var l = (e("pro"), {
    _paramCache: {},
    _parse: a,
    addParam: t,
    getParam: i,
    getDomain: s,
    getParameters: o,
    getHash: n,
    getHashValue: r
  });
  return l
}), define("global/enum/DuobaoStatus", ["require"], function (e) {
  return {GOING: 1, WAITING: 2, PUBLISHED: 3}
}), define("global/utils/Url", ["require", "global/enum/DuobaoStatus"], function (e) {
  function t(e) {
    var t = /\/\/:?[^\/]+(?:163\.com)(?:\/)/i;
    return /^(?:(https?:)?\/\/)/.test(e) ? t.test(e) : t.test(window.location.href)
  }

  function i(e) {
    var t = {
      "163.com": "http://entry.mail.163.com/coremail/fcg/ntesdoor2",
      "126.com": "http://entry.mail.126.com/cgi/ntesdoor",
      "yeah.net": "http://entry.mail.yeah.net/cgi/ntesdoor",
      "qq.com": "http://mail.qq.com/",
      "gmail.com": "http://mail.google.com/",
      "sina.com": "http://mail.sina.com.cn/",
      "sina.cn": "http://mail.sina.com.cn/",
      "vip.163.com": "http://vip.163.com/",
      "vip.126.com": "http://vip.126.com/",
      "vip.188.com": "http://www.188.com/",
      "188.com": "http://www.188.com/",
      "sohu.com": "http://mail.sohu.com/",
      "tom.com": "http://mail.tom.com/",
      "sogou.com": "http://mail.sogou.com/",
      "139.com": "http://mail.10086.cn/",
      "hotmail.com": "http://www.hotmail.com",
      "live.com": "http://login.live.com/",
      "live.cn": "http://login.live.cn/",
      "live.com.cn": "http://login.live.com.cn",
      "outlook.coom": "http://www.outlook.com/",
      "189.com": "http://webmail16.189.cn/webmail/",
      "yahoo.cn": "http://mail.yahoo.com/",
      "eyou.com": "http://www.eyou.com/",
      "21cn.com": "http://mail.21cn.com/",
      "foxmail.com": "http://www.foxmail.com/"
    }, i = e.split("@")[1], o = t[i];
    return o || (o = "http://" + i), o
  }

  function o(e, t, i) {
    var o = this.URLS[e] || "";
    if (o) {
      var s = [];
      for (var n in t) {
        var r = t[n];
        r && s.push(n + "=" + r)
      }
      o += s.length ? "?" + s.join("&") : "", i && (o += "#" + i)
    }
    return o
  }

  function s(e) {
    return this.get(this.USER_WIN, {cid: e || app.getCID()})
  }

  function n(e, t) {
    return this.get(this.MALL_ORDER, {gid: e, amount: t || 1})
  }

  function r(e, t, i) {
    var o = e || "", s = t || "", n = (i === f.PUBLISHED, "/detail/"), r = ".html";
    return s ? n + o + (s ? "-" + s : "") + r : n + o + r
  }

  function a() {
    return this.get(this.INDEX)
  }

  function l(e) {
    return this.get(this.USER, {cid: e, t: (new Date).getTime()})
  }

  function c(e, t, i, o) {
    return this.get(this.CART, {gid: e, num: t, period: i, regularBuy: o})
  }

  function u() {
    return this.get(this.SEARCH)
  }

  function d() {
    return this.get(this.LIST)
  }

  function h(e, t, i) {
    return "/user/shareDetail.do?cid=" + e + "&gid=" + t + "&period=" + i
  }

  function g(e, t) {
    return "/user/shareAdd.do?gid=" + e + "&period=" + t
  }

  function m(e) {
    return "/user/winDetail.do?winId=" + e
  }

  function p(e, t, i) {
    var o = "http://mimg.127.net/p/one/web/lib/img/avatar/" + t + ".jpeg";
    return i || (e || (e = "http://mimg.127.net/p/one/web/lib/img/avatar/"), o = e + t + ".jpeg"), o
  }

  var f = e("global/enum/DuobaoStatus"), _ = {
    INDEX: "index",
    SEARCH: "search",
    CART: "cart",
    USER: "user",
    LIST: "list",
    DETAIL: "detail",
    MALL_ORDER: "mallOrder",
    PAY_RESULT: "payResult",
    USER_WIN: "userWin",
    URLS: {
      index: "/",
      search: "/search.do",
      cart: "/cart/index.do",
      user: "/user/index.do",
      list: "/list.do",
      mallOrder: "/mall/order.do",
      payResult: "/pay/result.do",
      duobaoRecord: "/user/duobao.do",
      payOrder: "/newpay/order/info.do",
      cart: "/cart/index.do",
      userWin: "/user/win.do",
      contract: "/user/win/contract.do",
      winDetail: "/user/winDetail.do"
    },
    getList: d,
    getSearch: u,
    getCart: c,
    getUser: l,
    getDetail: r,
    getIndex: a,
    getWinDetail: m,
    getAddShare: g,
    getShare: h,
    getMallOrder: n,
    getUserWin: s,
    getAvatar: p,
    getEmailEntry: i,
    get: o,
    isNTES: t
  };
  return _
}), define("global/model/NotificationModel", ["require", "global/model/BaseModel"], function (e) {
  function t(e, t) {
    this.request({
      api: "always", success: function (t) {
        this.set("always", t), e && e.call(this, t)
      }, error: t
    })
  }

  function i(e, t) {
    this.request({
      api: "once", success: function (t) {
        this.set("once", t), e && e.call(this, t)
      }, error: t
    })
  }

  function o(e, t, i) {
    this.fetchAlways(e, i), this.fetchOnce(t, i)
  }

  var s = e("global/model/BaseModel"), n = s.extend({
    overrides: {
      apis: {
        once: "/user/getNewestReward.do",
        always: "/user/getRewardMsg.do"
      },
      data: {
        always: {hasPrize: !1, hasBonus: !1, bonusStatus: 0, hasEndedWish: !1},
        once: {
          bonusStatus: 0,
          hasBonus: !1,
          prize: {gid: 0, period: 0, property: "", gname: ""},
          wishlist: {wid: "", status: 0, gname: "", property: "", supporter: 0}
        },
        hasNewWish: function () {
          var e = !1;
          try {
            e = "" != this.get("once.wishlist.wid")
          } catch (t) {
          }
          return e
        },
        hasWish: function () {
          return this.get("always.hasEndedWish")
        },
        hasPrize: function () {
          return this.get("always.hasPrize")
        },
        hasBonus: function () {
          return this.get("always.hasBonus") && 1 == this.get("always.bonusStatus")
        },
        hasNewBonus: function () {
          return this.get("once.hasBonus") && 1 == this.get("once.bonusStatus")
        },
        hasNewPrize: function () {
          return !!this.get("once.prize.gid")
        }
      }
    }, members: {fetch: o, fetchAlways: t, fetchOnce: i}
  });
  return n
}), define("global/Application", ["require", "pro", "global/module/ModuleManager", "global/model/SpecialRuleList", "global/utils/Cookie", "global/Broadcast", "global/model/GlobalModel", "global/model/AccountModel", "global/utils/Location", "global/utils/Url", "global/utils/Utils", "global/model/NotificationModel", "http://mimg.127.net/p/one/web/lib/js/crypto-js.min.js"], function (e) {
  function t(t) {
    var i = "https://qiyukf.com/script/a07b3f49ba552593e631175ecda30449.js";
    if (app.isLogin()) {
      var o = e("http://mimg.127.net/p/one/web/lib/js/crypto-js.min.js"), s = o.enc.Base64.parse("RkREOTNCQUIzMkRBMTBFMA=="), n = o.DES.encrypt(app.getCID() + "", s, {
        mode: o.mode.ECB,
        padding: o.pad.Pkcs7
      }), r = n.ciphertext.toString(o.enc.Base64);
      i += "?uid=" + encodeURIComponent(r) + "&name=" + app.getNickname()
    }
    e([i], function () {
    }), re.addEvent(t, "click", function (e) {
      var t = e.target || e.srcElement;
      /btn-feedback/.test(t.className) && window.ysf.open()
    })
  }

  function i(e) {
    return this.__specialsConfig = e, this.send(te.GLOBAL_SPECIAL_CONFIG_READY, e), this
  }

  function o() {
    return this.__specialsConfig
  }

  function s() {
    this.send(te.GLOBAL_DATA_READY), this.setAccount(), this.isLogin() && this._getNotification();
    var e = se.getParam("from") || "", t = se.getParam("kw") || "";
    e && (e && this.setCookie("from", e, "d7"), t && this.setCookie("kw", t, "d7"))
  }

  function n(e, t) {
    this.Class.Toast.show({text: e, expire: "number" == typeof t ? t : 3e3})
  }

  function r(e, t, i) {
    return ne.get(e, t, i)
  }

  function a() {
    return this.model.get("hasMobile")
  }

  function l() {
  }

  function c() {
    window.location.href = "/one.user/service/logout.do?name=" + app.getUID().split("@")[0] + "&url=" + encodeURIComponent(this.getHost())
  }

  function u() {
    return this._account
  }

  function d(e) {
    this._account.set(e || {
        cid: this.getCID(),
        uid: this.getUID(),
        nickname: this.getNickname(),
        username: this.getUsername(),
        isLogin: this.isLogin(),
        hasMobile: this.hasMobile()
      })
  }

  function h() {
    var e = window.location;
    return e.protocol + "//" + e.host
  }

  function g() {
    function e(e) {
      var t = ",";
      if (s)s.call(r, e); else if (o.indexOf(t)) {
        var i = o.split(t);
        re.each(i, function (t) {
          var i = e[t];
          i && i.call(e, n)
        })
      } else {
        var a = e[o];
        a && a.call(e, n)
      }
    }

    var t, i, o, s, n, r = this, a = arguments;
    t = a[0], i = t.name, "string" == typeof a[1] ? (o = a[1], n = a[2]) : s = a[1];
    var l = this._specialRuleList, c = this._specialCache = this._specialCache || {};
    if (l.isLoaded()) {
      var u = c[i];
      u ? e(u) : u !== !1 && (c[i] = !1, l.matchSpecials(i, function (o, s) {
        try {
          var n = o.getInstance(t, s);
          s.context = t, c[i] = n, e(n)
        } catch (a) {
          r.error(a)
        }
      }))
    } else {
      var d = a.callee;
      this.listenOnce(l, "requestsuccess", function () {
        d.apply(this, a), d = null, a = null
      })
    }
  }

  function m() {
    return this.model.get("servicePhone")
  }

  function p(e) {
    var t = this.model;
    return t.get("resPath") + t.get("resVer") + "/" + (e || "")
  }

  function f(e, t) {
    this.send(te.COMMAND_ADD_TO_CART, e, t)
  }

  function _(e) {
    this.isLogin() ? window.location.href = ne.getCart(e.gid, e.num, e.period, e.regularBuy) : this.login()
  }

  function b(e) {
    this.isLogin() ? window.location.href = ne.getMallOrder(e.gid, e.num) : this.login()
  }

  function E(e) {
    if (this.isDebug())throw"string" == typeof e ? new Error(e) : e
  }

  function v() {
    try {
      this.isDebug() && console.log.apply(console, arguments)
    } catch (e) {
    }
  }

  function T() {
    return this.getCookie(this.Class.COOKIE_TOKEN)
  }

  function C() {
    return this.__msgbox
  }

  function R(e, t) {
    var i = this, o = this.Class;
    e = e || {};
    var s = Q.mix(e, {text: e.view ? e.view.getHtml() : e.text}), n = e.onOk || e.onOkClick, r = e.onCancel || e.onCancelClick;
    n && (s.onOk = function () {
      return n && n.call(i)
    }), r && (s.onCancel = function () {
      return r && r.call(i)
    });
    var a = this.__msgbox = o.Msgbox.show(s);
    return t && a.listen(t, "destroy", function () {
      this.destroy()
    }), this.listen(a, "destroy", function () {
      this.__msgbox = null, delete this.__msgbox
    }), a
  }

  function S(e, t, i) {
    var o = this, s = this.Class, n = new s.PromptView({label: e});
    return this.msgbox({
      text: n.getHtml(), onOk: function () {
        return t && t.call(o, n.getValue())
      }, onCancel: function () {
        return i && i.call(o)
      }
    })
  }

  function O(e, t, i) {
    var o = this;
    return this.msgbox({
      header: "提示",
      title: '<div class="txt-center"><b class="ico ico-alert-m"></b> ' + e + "</div>",
      onOk: function () {
        t && t.call(o)
      },
      onCancel: function () {
        i && i.call(o)
      }
    })
  }

  function y(e) {
    return this.msgbox({
      header: "提示",
      title: '<div class="txt-center"><b class="ico ico-alert-m"></b> ' + e + "</div>",
      ok: !0
    })
  }

  function M() {
    this._notification || (this._notification = new ae);
    var e = this._notification;
    e.fetch(function () {
      this.get("hasPrize") && app.send(te.GLOBAL_HAS_PRIZE), this.get("hasBonus") && app.send(te.GLOBAL_HAS_BONUS), this.get("hasWish") && app.send(te.GLOBAL_HAS_WISH)
    }, function (e) {
      this.get("hasNewPrize") ? app.send(te.GLOBAL_HAS_NEW_PRIZE) : this.get("hasNewBonus") ? app.send(te.GLOBAL_HAS_NEW_BONUS) : this.get("hasNewWish") && app.send(te.GLOBAL_HAS_NEW_WISH)
    })
  }

  function A() {
    re.cancelDelay(this.__notificationTimer)
  }

  function D() {
    var e = this.getSpecialConfig(), t = this._specialRuleList = new J;
    e ? (t.setSpecials(e), t.fetch()) : this.receive(te.GLOBAL_SPECIAL_CONFIG_READY, function (e) {
      t.setSpecials(e), t.fetch(), t = null
    })
  }

  function N() {
    this.__notificationTimer = re.delay(this.getNotification, this, 2e3)
  }

  function I(e) {
    this.model.fetch(function () {
      this.set("isHistory", !1), e && e.call(app)
    }, function () {
      e && e.call(app, !1)
    })
  }

  function w() {
    this.receive(te.USER_NICKNAME_CHANGE, function (e) {
      this.model.set("nickname", e)
    }), this._account.listen(this.model, "change", function (e, t) {
      this.has(e) && this.set(e, t)
    })
  }

  function L() {
    return this.model.get("isNTES")
  }

  function U() {
    return this.model.get("uid")
  }

  function x() {
    return this.model.get("username")
  }

  function B() {
    return this.model.get("cid")
  }

  function k() {
    return this.model.get("nickname")
  }

  function P() {
    return this.model.get("serverTime")
  }

  function q() {
    return this.model.get("environment")
  }

  function V() {
    var e = this.Class;
    return this.getEnv() == e.ENV_TEST || this.getEnv() == e.ENV_UNITEST
  }

  function G() {
    return this.getEnv() == this.Class.ENV_RELEASE
  }

  function H() {
    return this.getEnv() == this.Class.ENV_DEV
  }

  function Y() {
    return this.getEnv() == this.Class.ENV_MOCK
  }

  function F() {
    return !this.isRelease()
  }

  function W() {
    return this.model.get("isHistory")
  }

  function X() {
    return this.model.get("isLogin")
  }

  function z() {
    return this.model.get("name")
  }

  function K(e) {
    e = e !== !1, window.location.reload(e)
  }

  function j(e, t, i) {
    if (e != le) {
      var o = ne.get(e, t, i);
      o && ne.isNTES(o) ? window.location.href = o : this.error("can't go to " + e)
    } else window.history.go(t || -1)
  }

  function $(e) {
    this.Class;
    window.application = window.app = this, window.onAppReady && window.onAppReady(), e.context = e.context || window, e.scale = e.scale || document.body, this.applySuper(arguments), this._account = new oe, this._listenEvents(), this._getSpecialRuleList(), this.isHistory() ? this._getInfoForHistory(function () {
      this.init(), this.setAccount()
    }) : this.init(), this.trigger("start"), this.launchAll()
  }

  var Q = e("pro"), Z = e("global/module/ModuleManager"), J = e("global/model/SpecialRuleList"), ee = e("global/utils/Cookie"), te = e("global/Broadcast"), ie = e("global/model/GlobalModel"), oe = e("global/model/AccountModel"), se = e("global/utils/Location"), ne = e("global/utils/Url"), re = e("global/utils/Utils"), ae = e("global/model/NotificationModel"), le = "back", ce = Z.extend({
    constructor: $,
    overrides: {Model: ie, singleton: !0, name: "application"},
    statics: {
      Msgbox: null,
      Toast: null,
      PromptView: null,
      ENV_RELEASE: "release",
      ENV_TEST: "test",
      ENV_UNITEST: "unitest",
      ENV_DEV: "dev",
      ENV_MOCK: "mock",
      COOKIE_TOKEN: "OTOKEN"
    },
    members: {
      getName: z,
      getUrl: r,
      getAccount: u,
      setAccount: d,
      reload: K,
      go: j,
      isLogin: X,
      isHistory: W,
      isRelease: G,
      isTest: V,
      isDev: H,
      isMock: Y,
      isDebug: F,
      isNTES: L,
      getUID: U,
      getCID: B,
      getUsername: x,
      hasMobile: a,
      getNickname: k,
      getHost: h,
      getEnvironment: q,
      getEnv: q,
      getServerTime: P,
      getResUrl: p,
      alert: y,
      confirm: O,
      prompt: S,
      msgbox: R,
      getMsgbox: C,
      toast: n,
      login: l,
      logout: c,
      getToken: T,
      setCookie: ee.set,
      getCookie: ee.get,
      removeCookie: ee.del,
      callSpecial: g,
      log: v,
      error: E,
      addToCart: f,
      duo: _,
      buy: b,
      getNotification: M,
      cancelNotification: A,
      init: s,
      getServicePhone: m,
      setSpecialConfig: i,
      getSpecialConfig: o,
      feedback: t,
      _listenEvents: w,
      _getSpecialRuleList: D,
      _getInfoForHistory: I,
      _getNotification: N,
      _specialRuleList: null,
      _account: null,
      _notification: null,
      _specialCache: null
    }
  });
  return ce
}), define("global/SwitcherManager", ["require"], function (e) {
  function t(e) {
    var t = app.getData("switcherRules");
    return e in t ? t[e] : !0
  }

  return {CERTINFO: "certinfo", use: t}
}), define("global/component/Base", ["require", "pro"], function (e) {
  function t() {
    this.applySuper(arguments);
    var e = this.constructor, t = this.__config, i = e.pro;
    if (!l.version || l.version < i)throw new Error("请使用" + i + "及以上版本的pro.js");
    this.toString = n;
    var o;
    t.theme ? (o = this.theme = t.theme, o.view = this, t.template = t.template || o.Class.template) : t.Theme ? o = this.theme = new t.Theme(this, t) : e.Theme && (o = this.theme = new e.Theme(this, t)), o && (this.__baseClassName = o.Class.baseClassName), this.listen("disable", function () {
      this.dom.setAttribute("disabled", "disabled"), this.addClass(this.getClassName("disabled")), this.model && this.model.set("disabled", !0), this.theme && this.theme.use("disabled")
    }), this.listen("enable", function () {
      this.dom.removeAttribute("disabled"), this.removeClass(this.getClassName("disabled")), this.model && this.model.set("disabled", !1), this.theme && this.theme.use(this.__config.color)
    }), this.listen("create", function (e) {
      var t = this.__config, i = this.theme;
      if (i && i.use(t.color), t.className && this.addClass(t.className), t.subclass && this.addClass(this.getClassName(t.subclass)), t.style) {
        var o = "";
        if ("string" == typeof t.style)o = t.style; else for (var s in t.style)o += s + ":" + t.style[s] + ";";
        e.style.cssText += (/;$/.test(e.style.cssText) || !e.style.cssText ? "" : ";") + o
      }
      if (t.attr)for (var s in t.attr)e.setAttribute(s, t.attr[s])
    }), this.listen("render", function () {
      this.__config.disabled && this.disable(), this.__config.hidden && this.hide()
    })
  }

  function i(e) {
    var t = this.Class, i = this.__baseClassName || t.baseClassName;
    if (i) {
      if (e) {
        for (var o = e.split(" "), s = 0, n = o.length; n > s; s++)o[s] = i + "-" + o[s];
        return o.join(" ")
      }
      return i
    }
    return ""
  }

  function o(e, t) {
    var i = e ? this.find(e) : this.dom;
    t && !i.getAttribute("tabindex") && i.setAttribute("tabindex", "0"), i.focus(), this.fire("focus", i)
  }

  function s(e) {
    var t = e ? this.find(e) : this.dom;
    t.blur(), this.fire("blur", t)
  }

  function n() {
    return this.getHtml()
  }

  function r(e) {
    this.Theme = e
  }

  function a(e, t) {
    var i = document.body.scrollLeft || document.documentElement.scrollLeft || 0, o = document.body.scrollTop || document.documentElement.scrollTop;
    this.focus(e, t), window.scrollTo(i, o)
  }

  var l = e("pro"), c = l.View.extend({
    constructor: t,
    statics: {pro: "2.0.0", version: "2.0.0", setTheme: r},
    members: {getClassName: i, focus: o, quietlyFocus: a, blur: s, toHtml: n}
  });
  return c
}), define("global/component/Button", ["require", "pro", "global/component/Base"], function (e) {
  var t = (e("pro"), e("global/component/Base")), i = t.extend({
    constructor: function () {
      this.applySuper(arguments);
      var e = this.__config;
      this.listen("click", e.onClick), e.href && (this.listen("disable", function () {
        this.dom.href = "javascript:void(0)", this.dom.target = ""
      }), this.listen("resume", function () {
        var e = this.__config;
        this.dom.href = e.href, this.dom.target = e.target
      }))
    },
    statics: {
      css: {
        all: ".pro-btn{margin:0;padding:0 1em;height:2em;line-height:2em;border:1px solid #e0e0e0;vertical-align:middle;background-color:#f5f5f5;box-sizing:content-box;outline:none;text-decoration:none;display:inline-block;white-space:nowrap;cursor:pointer}					button.pro-btn{line-height:1;width:auto;overflow:visible}					.pro-btn:focus,					.pro-btn:hover{background-color:#fafafa;border-color:#ccc}					.pro-btn:active{background-color:#f0f0f0;border-color:#ccc}					.pro-btn-disabled{background:#e0e0e0!important;border-color:#ccc!important;color:#aaa!important;cursor:default!important}",
        iel: ".pro-btn{display:inline;zoom:1}"
      },
      baseClassName: "pro-btn",
      template: '<{{__tag}} class="pro-btn"{{#href}} href="{{href}}"{{#target}} target="{{target}}"{{/target}}{{/href}}{{^href}}{{#type}} type="{{type}}"{{/type}}{{/href}}><span>{{text}}</span></{{__tag}}>',
      data: function (e) {
        return {
          __tag: e.href ? "a" : "button",
          text: e.text,
          href: e.href,
          type: e.type || "button",
          target: e.target || "_self"
        }
      },
      events: {"@": "click"}
    },
    members: {
      click: function () {
        this.fire("click")
      }
    }
  });
  return i
}), define("global/component/Checkbox", ["require", "global/component/Base"], function (e) {
  var t = e("global/component/Base"), i = t.extend({
    constructor: function () {
      this.applySuper(arguments);
      var e = this.__config;
      this.listen("change", e.onChange), this.listen("check", e.onCheck), this.listen("uncheck", e.onUncheck), this.listen("create", function (e) {
        var t = this.__config;
        t.checked ? this.check() : this.uncheck()
      }), this.listen("disable", function () {
        this.doms.input.setAttribute("disabled", "disabled")
      }), this.listen("resume", function () {
        this.doms.input.removeAttribute("disabled"), this.removeClass(this.getClassName("disabled"))
      })
    }, statics: {
      data: function (e) {
        return {text: e.text, name: e.name, value: e.value, right: !!e.right, checked: !!e.checked}
      },
      baseClassName: "pro-checkbox",
      template: '<label class="pro-checkbox">{{#right}}{{#text}}<span>{{{text}}}</span> {{/text}}{{/right}}<input type="checkbox"{{#name}} name="{{name}}"{{/name}}{{#value}} value="{{value}}"{{/value}}{{#checked}} checked{{/checked}}/>{{^right}} {{#text}}<span>{{{text}}}</span>{{/text}}{{/right}}</label>',
      doms: {input: "input"},
      events: {
        "input/change": function (e) {
          var t = e.checked;
          this.model.set("checked", t), t ? this.check() : this.uncheck(), this.fire("change", e.checked)
        }, "input/click": function (e, t) {
          e.blur(), e.focus()
        }
      }
    }, members: {
      check: function () {
        var e = 0 == this.getChecked();
        this.doms.input.checked = !0, this.fire("check"), e && this.fire("change", !0)
      }, uncheck: function () {
        var e = 1 == this.getChecked();
        this.doms.input.checked = !1, this.fire("uncheck"), e && this.fire("change", !1)
      }, isChecked: function () {
        return this.doms.input.checked
      }, getChecked: function () {
        return this.isChecked()
      }, getValue: function () {
        return this.doms.input.value
      }, setValue: function (e) {
        return this.doms.input.value = e
      }
    }
  });
  return i
}), define("global/component/Input", ["require", "pro", "global/component/Base"], function (e) {
  var t = e("pro"), i = e("global/component/Base"), o = i.extend({
    constructor: function () {
      this.applySuper(arguments);
      var e = this.Class, t = this.__config, i = this.model, o = t.format, s = "" === document.createElement("input").placeholder;
      if (i.set("__rawPlaceholder", s), "string" == typeof o) {
        var n = e.FORMATS[o];
        n && (this.__format = n.format, this.__chars = n.chars, i.set("pattern", n.pattern), i.set("maxLength", n.max))
      } else this.__format = o;
      this.validator = t.validator, this.validator && this.listen("change", function () {
        return this.validate()
      }), this.listen("keypress", t.onKeyPress), this.listen("keydown", t.onKeyDown), this.listen("keyup", t.onKeyUp), this.listen("enter", t.onEnter), this.listen("change", t.onChange), this.listen("focus", t.onFocus), this.listen("blur", t.onBlur), this.listen("valid", t.onValid), this.listen("invalid", t.onInvalid), this.listen("tipsshow", t.onTipsShow), this.listen("tipshide", t.onTipsHide), this.listen("focus", function () {
        this.addClass(this.getClassName("focus"))
      }), this.listen("blur", function () {
        this.removeClass(this.getClassName("focus"))
      }), this.listen("create", function (e) {
        var t = this.Class, i = (this.doms.input, this.model);
        s || i.get("placeholder") && (this.placeholder = new t.Placeholder({text: i.get("placeholder")}).join(this).render(this)), i.get("value") && this.setValue(i.get("value")), i.get("width") && (this.doms.input.style.width = i.get("width") + "px"), i.get("height") && (this.doms.input.style.height = i.get("height") + "px")
      }), this.listen("disable", function () {
        this.doms.input.setAttribute("disabled", "disabled")
      }), this.listen("resume", function () {
        this.doms.input.removeAttribute("disabled"), this.removeClass(this.getClassName("disabled"))
      })
    },
    statics: {
      FORMATS: {
        mobilePhone: {chars: /^[\d]$/, format: /^1\d{10}$/, pattern: "d*", max: 11},
        natural: {chars: /^[\d]$/, format: /^\d+$/, pattern: "d*"},
        integer: {chars: /^[\d\-]$/, format: /^-?\d+$/, pattern: "d*"},
        number: {chars: /^[\d\.\-]$/, format: /^-?\d*\.?\d+$/, pattern: "d*"},
        identity: {chars: /^[\dx]$/i, format: /^(?:\d{15}|\d{17}[\d|x])$/i, max: 18},
        zipcode: {chars: /^[\d]$/, format: /^[1-9]\d{5}$/, pattern: "d*", max: 6}
      },
      data: function (e) {
        return {
          placeholder: e.placeholder,
          value: e.value || "",
          type: e.type || "text",
          maxLength: e.maxLength || e.maxlength,
          name: e.name,
          width: e.width
        }
      },
      css: {
        all: ".pro-input{position:relative;width:10em;height:2em;border:1px solid #e0e0e0;padding:0 .6em;vertical-align:middle;display:inline-block;cursor:text}.pro-input-textarea{height:auto}.pro-input-input{position:relative;top:.3em;font-size:100%;width:100%;height:auto;padding:0;vertical-align:top;margin:0;border:none;position:relative;z-index:2;background-color:transparent;resize:none;outline:none}.pro-input .pro-placeholder{position:absolute;left:.6em;top:.4em;line-height:1.25;color:#999;z-index:1}.pro-input-textarea .pro-placeholder{left:.6em;line-height:1.5;padding:0}.pro-input-tips{display:block;line-height:2;font-size:smaller}.pro-input-tips-err{color:#f00}.pro-input-tips-suc{color:#390}.pro-input-disabled{background-color:#f0f0f0;color:#999}",
        iel: ".pro-input{display:inline;zoom:1}"
      },
      baseClassName: "pro-input",
      template: '<div class="pro-input"><input pro="input" class="pro-input-input" type="{{type}}"{{#pattern}} pattern="{{pattern}}"{{/pattern}}{{#maxLength}} maxlength="{{maxLength}}"{{/maxLength}}{{#name}} name="{{name}}"{{/name}}{{#__rawPlaceholder}}{{#placeholder}} placeholder={{placeholder}}{{/placeholder}}{{/__rawPlaceholder}} /></div>',
      doms: {input: "@input"},
      events: {
        "@": function () {
          this.focus()
        }, "@input/focus": "focus", "@input/blur": "blur", "@input/keypress": function (e, t) {
          this.format(t.charCode || t.keyCode), this.fire("keypress", t.keyCode, t), 13 == t.keyCode && this.fire("enter", t)
        }, "@input/keydown": function (e, t) {
          this.fire("keydown", t.keyCode, t)
        }, "@input/keyup": function (e, t) {
          this.fire("keyup", t.keyCode, t)
        }, "@input/change": function (e) {
          this.format(), this.fire("change", e.value)
        }
      },
      Tips: i.extend({
        statics: {
          data: function (e) {
            return {text: e.text, icon: e.icon}
          }, template: '<span class="pro-input-tips">{{#icon}}<i class="{{icon}}"></i>{{/icon}}{{text}}</span>'
        }
      }),
      Placeholder: i.extend({
        constructor: function (e) {
          this.applySuper(arguments), this.listen("create", function () {
            function e() {
              t.delay(function () {
                this.getParent().getValue() ? this.hide() : this.show()
              }, this)
            }

            var i = this.getParent();
            this.listen(i, "keydown", e), this.listen(i, "keyup", e), this.listen(i, "change", e), this.listen(i, "blur", function () {
              this.getParent().getValue() || this.show()
            })
          })
        }, statics: {
          data: function (e) {
            return {text: e.text}
          }, template: '<span class="pro-placeholder">{{text}}</span>', events: {
            "@": function () {
              this.getParent().focus()
            }
          }
        }
      })
    },
    members: {
      checkChars: function () {
        var e = this.__chars;
        if (e) {
          for (var t = this.getValue(), i = t.split(""), o = ""; i.length;) {
            var s = i.shift();
            e.test(s) && (o += s)
          }
          return o
        }
      }, format: function (e) {
        if (this.__format) {
          var i = this.__format, o = this.__chars, s = this.getValue();
          if (o && void 0 !== e) {
            var n = String.fromCharCode(e);
            o.test(n) ? this.trigger("charright") : (this.trigger("charwrong"), t.delay(function () {
              this.doms.input.value = s
            }, this)), t.delay(function () {
              var e = this.getValue();
              i.test(e) || (this.doms.input.value = this.checkChars())
            }, this)
          } else o && t.delay(function () {
            this.doms.input.value = this.checkChars()
          }, this), i.test(s) ? this.trigger("formatright") : this.trigger("formatwrong")
        }
      }, validate: function () {
        if (!this.validator)return !1;
        var e = (this.Class, this.getValue()), t = this.validator(e);
        return "string" == typeof t ? (this.showTips(t, this.getClassName("tips-err")), this.__valid = !1, this.fire("invalid", e, t), !1) : (this.hideTips(), this.__valid = !0, this.fire("valid", e, t), !0)
      }, isValid: function () {
        return !!this.__valid
      }, select: function () {
        this.doms.input.select()
      }, focus: function () {
        this.doms.input.focus()
      }, blur: function () {
        this.doms.input.blur()
      }, setValue: function (e) {
        (null == e || void 0 == e) && (e = ""), this.doms.input.value = e, this.fire("change", e)
      }, getValue: function () {
        return this.doms.input.value
      }, clear: function () {
        this.setValue("")
      }, showTips: function (e, t, i) {
        var o = this.Class;
        return this.tips && this.tips.dom ? this.tips.update({
          className: t,
          text: e,
          icon: i
        }) : this.tips = new o.Tips({
          className: t,
          text: e,
          icon: i
        }).render(this).join(this), this.fire("tipsshow", this.tips), this.tips
      }, hideTips: function () {
        this.tips && (this.tips.destroy(), this.tips = null, delete this.tips, this.fire("tipshide"))
      }
    }
  });
  return o
}), define("global/component/Layer", ["require", "pro", "global/component/Base"], function (e) {
  var t = e("pro"), i = e("global/component/Base"), o = i.extend({
    constructor: function () {
      this.applySuper(arguments);
      var e = this.__config;
      e.destroyOnClick = e.destroyOnClick !== !1, e.destroyOnScroll = e.destroyOnScroll !== !1, (e.destroyOnClick || e.destroyOnScroll) && this.listenOnce("afterrender", t.bind(function (e) {
        var i = e.renderTo || document.body, o = this.__scrollParent || window, s = this;
        e.destroyOnClick && t.addEvent(i, "click", function () {
          t.removeEvent(i, "click", arguments.callee), s.isDestroyed() || s.destroy()
        }), e.destroyOnScroll && t.addEvent(o, "scroll", function () {
          t.removeEvent(o, "scroll", arguments.callee), s.isDestroyed() || s.destroy()
        })
      }, this, e)), e.autoFocus !== !1 && this.listen("render", function () {
        var e = document.documentElement, t = window.scrollX || e.scrollLeft, i = window.scrollY || e.scrollTop;
        try {
          this.dom.focus()
        } catch (o) {
        }
        window.scrollTo(t, i)
      })
    }, statics: {
      data: function (e) {
        return {text: e.text}
      },
      baseClassName: "pro-layer",
      template: '<div class="pro-layer" tabindex="0">{{text}}</div>',
      css: ".pro-layer{position:absolute;left:0;top:0;z-index:1000;padding:.8em 1em;border:1px solid #e0e0e0;background:#fff;outline:none;}",
      show: function (e) {
        return new this(e).render(e.renderTo || document.body)
      }
    }, members: {
      relTo: function (e, i) {
        function o(e) {
          return e.replace("px", "") - 0 || 0
        }

        var s = this.dom, n = e.dom || e, r = n, a = 0, l = 0, c = [0, 0];
        for (t.is("array", i) && (c = i); r;) {
          a += r.offsetLeft || 0, l += r.offsetTop || 0;
          var u = !1, d = r.currentStyle || window.getComputedStyle(r);
          d && (u = "auto" == d.overflow, a -= o(d.borderLeftWidth) / 2, l -= o(d.borderTopWidth) / 2), u && (l -= r.scrollTop, this.__scrollParent = r), r = r.offsetParent
        }
        for (r = n; r;)try {
          var d = r.currentStyle || window.getComputedStyle(r);
          if (d && "fixed" == d.position) {
            c[1] += document.body.scrollTop || document.documentElement.scrollTop, t.addEvent(window, "scroll");
            break
          }
          r = r.parentNode
        } catch (h) {
          break
        }
        s.style.left = a + (c[0] || 0) + "px", s.style.top = l + (c[1] || 0) + "px"
      }, render: function () {
        var e = this.__config;
        return i.prototype.render.apply(this, arguments), e.rel && this.relTo(e.rel, e.offset), this
      }
    }
  });
  return o
}), define("global/component/Menu", ["require", "pro", "global/component/Base", "global/component/Layer"], function (e) {
  var t = e("pro"), i = e("global/component/Base"), o = e("global/component/Layer"), s = o.extend({
    constructor: function () {
      this.applySuper(arguments);
      var e = (this.Class, this.__config);
      this.listen("click", e.onClick), this.listen("create", function (e) {
        var i = this.__config, o = this.Class, s = i.Item || o.Item;
        if (e.style.visibility = "hidden", this.each(function (e) {
            e.quit(), e.destroy()
          }), i.items)for (var n = 0, r = i.items.length; r > n; n++) {
          var a = i.items[n], l = n, c = a.text, u = a.value || c;
          new s({
            text: c, value: u, index: l, listeners: {
              click: t.bind(function (e, t, i) {
                i && i.call(this, e, t), this.fire("click", e, t)
              }, this, l, u, a.onClick)
            }, value: a.value || ""
          }).render(this).join(this)
        }
      }), this.listen("render", function (e) {
        var t = this.__config, i = t.scrollLength, o = this.getChildrenCount();
        if (i && o > i) {
          var s = this.getChild(0).dom.offsetHeight;
          e.style.overflow = "auto", e.style.overflowX = "hidden", e.style.height = s * i + s / 3 + "px"
        }
        e.style.visibility = ""
      })
    },
    statics: {
      baseClassName: "pro-menu",
      template: '<div class="pro-menu" tabindex="0">{{text}}</div>',
      css: ".pro-menu{padding:.5em 0;position:absolute;border:1px solid #e0e0e0;background:#fff;outline:none}					.pro-menu-item{padding:.5em 3em .5em 1em;cursor:pointer;white-space:nowrap;outline:none}					.pro-menu-item:focus,					.pro-menu-item-hover,					.pro-menu-item:hover{background:#f0f0f0}",
      events: {
        "@/keyup": function (e, i) {
          switch (i.keyCode) {
            case 27:
              this.destroy();
              break;
            case 38:
              void 0 === this.__selected ? this.__selected = 0 : this.__selected > 0 && this.__selected--, this.select(this.__selected);
              break;
            case 40:
              void 0 === this.__selected ? this.__selected = 0 : this.__selected < this.getChildrenCount() - 1 && this.__selected++, this.select(this.__selected)
          }
          t.cancelBubble(i)
        }
      },
      Item: i.extend({
        statics: {
          baseClassName: "pro-menu-item",
          template: '<div class="pro-menu-item" tabindex="0" data-index="{{index}}" data-value="{{value}}">{{text}}</div>',
          data: function (e) {
            return {text: e.text, index: e.index}
          },
          events: {
            "@/keydown": function (e, i) {
              if (13 == i.keyCode) {
                this.fire("click");
                var o = this.getParent();
                o && o.destroy()
              }
              t.cancelBubble(i)
            }, "@": "click"
          },
          listeners: {
            create: function (e) {
              e.onkeydown = function () {
                return !1
              }
            }
          }
        }, members: {
          select: function () {
            this.addClass(this.getClassName("hover")), this.quietlyFocus()
          }, unselect: function () {
            this.removeClass(this.getClassName("hover"))
          }
        }
      })
    },
    members: {
      select: function (e) {
        var t = this.getChild(e);
        t && (this.unselect(), t.select(), this.__selected = e)
      }, unselect: function (e) {
        this.each(function (e) {
          e.unselect()
        }), this.__selected = void 0
      }
    }
  });
  return s
}), define("global/component/Msgbox", ["require", "pro", "global/component/Base", "global/component/Button"], function (e) {
  var t = e("pro"), i = e("global/component/Base"), o = e("global/component/Button"), s = i.extend({
    constructor: function () {
      this.applySuper(arguments);
      var e = this.__config;
      s.current && s.current.destroy(), this.listen("ok", e.onOkClick || e.onOk), this.listen("cancel", e.onCancelClick || e.onCancel), this.listen("close", e.onCloseClick || e.onClose), s.current = this
    }, statics: {
      baseClassName: "pro-msgbox",
      data: function (e) {
        var t = !!(e.okText || e.onOkClick || e.onOk || e.ok), i = !!(e.cancelText || e.onCancelClick || e.onCancel || e.cancel);
        return {
          header: e.header || "",
          title: e.title || "",
          text: e.text || "",
          ok: t,
          cancel: i,
          footer: e.footer,
          __hasFooter: !!(e.footer || t || i)
        }
      },
      css: ".pro-msgbox{width:40em;border:8px solid;border-color:#000;border-color:rgba(0,0,0,.35);font-size:14px;position:fixed;z-index:999;-position:absolute;outline:none}					.pro-msgbox-close{font-size:1.5em;width:1em;height:1em;line-height:1;color:#999;text-align:center;text-decoration:none;position:absolute;right:.3em;top:.3em}					.pro-msgbox-close:hover{color:#666}					.pro-msgbox-hd{line-height:2.4em;padding:0 1em;color:#333;background: #f0f0f0}					.pro-msgbox-bd{padding:1.5em;background:#fff;}					.pro-msgbox-ft{padding:1.5em;text-align:center;background:#fff;}					.pro-msgbox-title{font-size:1.5em;font-weight:bold;margin:0 0 1em;}					.pro-mask{position:fixed;z-index:998;-position:absolute;left:0;top:0;width:100%;height:100%;background:#000;opacity: .6; filter:alpha(opacity=60);}",
      template: '<div class="pro-msgbox" tabindex="0">							<a pro="close" href="javascript:void(0);" class="pro-msgbox-close">×</a>							<div class="pro-msgbox-hd" pro="header">{{header}}</div>							<div class="pro-msgbox-bd" pro="entry">{{#title}}<h2 class="pro-msgbox-title">{{title}}</h2>{{/title}}{{text}}</div>							{{#__hasFooter}}								<div pro="footer" class="pro-msgbox-ft">{{footer}}</div>							{{/__hasFooter}}						</div>',
      entry: "@entry",
      doms: {header: "@header", footer: "@footer"},
      events: {
        "@ok": "okclick", "@cancel": "cancelclick", "@close": "closeclick", "@/keydown": function (e, i) {
          var o = i.target || i.srcElement;
          if ("textarea" !== o.tagName)switch (i.keyCode) {
            case 13:
              this.fire("okclick");
              break;
            case 27:
              this.fire("closeclick")
          }
          t.cancelBubble(i)
        }, "@/keyup": function (e, i) {
          t.cancelBubble(i)
        }, "@/keypress": function (e, i) {
          t.cancelBubble(i)
        }
      },
      listeners: {
        create: function () {
          var e = this.Class, t = this, i = this.__config;
          this.doms.footer && (this.model.get("ok") && new e.Button({
            Theme: i.ButtonTheme,
            color: i.okColor,
            subclass: i.okSubclass,
            text: i.okText || "确定",
            onClick: function () {
              t.fire("okclick")
            }
          }).join(this).render(this.doms.footer), this.model.get("cancel") && new e.Button({
            Theme: i.ButtonTheme,
            color: i.cancelColor,
            subclass: i.cancelSubclass,
            text: i.cancelText || "取消",
            onClick: function () {
              t.fire("cancelclick")
            }
          }).join(this).render(this.doms.footer)), i.modeless || (this.mask = (new e.Mask).join(this).render(document.body))
        }, render: function () {
          var e = this.__config;
          this.center(), this.__onresize = t.bind(function () {
            this.center()
          }, this), t.addEvent(window, "resize", this.__onresize), e.autoFocus !== !1 && this.dom.focus()
        }, destroy: function () {
          t.removeEvent(window, "resize", this.__onresize), s.current = null
        }, okclick: function () {
          if (this.fire("ok") !== !1)try {
            this.destroy()
          } catch (e) {
          }
        }, closeclick: function () {
          if (this.fire("cancel") !== !1 && this.fire("close") !== !1)try {
            this.destroy()
          } catch (e) {
          }
        }, cancelclick: function () {
          if (this.fire("cancel") !== !1)try {
            this.destroy()
          } catch (e) {
          }
        }
      },
      show: function (e) {
        return new this(e).render(document.body)
      },
      Button: o,
      Mask: i.extend({overrides: {template: '<div class="pro-mask"></div>'}})
    }, members: {
      center: function () {
        var e = this.dom, t = document.documentElement, i = e.offsetWidth, o = e.offsetHeight, s = t.clientWidth, n = t.clientHeight;
        t.scrollTop, t.scrollLeft;
        e.style.left = (s - i) / 2 + "px", e.style.top = (n - o) / 2 + "px";
        var r = this.mask;
        if (r && r.dom.offsetHeight < n) {
          var a = r.dom, l = t.scrollHeight;
          a.style.height = l + "px", e.style.top = e.offsetTop + t.scrollTop + "px"
        } else e.offsetTop < 0 ? (e.style.position = "absolute", e.style.top = (t.scrollTop || document.body.scrollTop) + "px") : e.style.position = ""
      }
    }
  });
  return s
}), define("global/component/NumberInput", ["require", "pro", "global/component/Base"], function (e) {
  var t = e("pro"), i = e("global/component/Base");
  return i.extend({
    constructor: function () {
      this.applySuper(arguments);
      var e = this.__config;
      this.step = e.step - 0 || 1, this.forceStep = !!e.forceStep, this.listen("disable", function () {
        this.doms.input.setAttribute("disabled", "true")
      }), this.listen("resume", function () {
        this.doms.input.removeAttribute("disabled")
      }), this.listen(this.model, "change:value", function (e, t) {
        this.fire("change", e, t), this.__serialChange || this.fire("afterchange", e, t)
      }), this.listen("serialchange", function (e, t) {
        this.fire("afterchange", e, t)
      }), this.listen("change", e.onChange), this.listen("serialchange", e.onSerialChange), this.listen("afterchange", e.onAfterChange)
    }, statics: {
      template: '<div class="pro-number"><a class="pro-number-btn pro-number-btn-minus" pro="minus" href="javascript:void(0);">－</a><input class="pro-number-input" pro="input" type="text" value="{{value}}" /><a class="pro-number-btn pro-number-btn-plus" pro="plus" href="javascript:void(0);">＋</a></div>',
      doms: {input: "@input"},
      css: {
        all: ".pro-number,.pro-number-btn{display:inline-block}.pro-number{position:relative}.pro-number-input{font-size:100%;text-align:center;width:3em;height:2em;line-height:2em;border:solid #e0e0e0;border-width:1px 0;padding:0 .6em;vertical-align:middle;+zoom:1;outline:none}.pro-number-btn{text-align:center;width:2.5em;height:2em;line-height:2em;border:1px solid #e0e0e0;vertical-align:middle;background-color:#f5f5f5;box-sizing:content-box;outline:none;text-decoration:none;white-space:nowrap;cursor:pointer}.pro-number-btn:focus,.pro-number-btn:hover{position:relative;background-color:#fafafa;border-color:#ccc}.pro-number-btn:active{position:relative;background-color:#f0f0f0;border-color:#ccc}.pro-number-disabled .pro-number-input{background-color:#f0f0f0;color:#999}.pro-number-disabled .pro-number-btn{background:#e0e0e0!important;border-color:#ccc!important;color:#aaa!important;cursor:default!important}",
        iel: ".pro-number,.pro-number-btn{display:inline;zoom:1}"
      },
      baseClassName: "pro-number",
      data: function (e) {
        return {
          min: "min" in e ? e.min : -(1 / 0),
          max: "max" in e ? e.max : 1 / 0,
          value: e.value || 0,
          width: e.width
        }
      },
      events: {
        "@plus/mousedown": function () {
          this.fire("plusclick"), this.__timer = t.delay(function () {
            this.__serialChange = !0, this.__oldValue = this.getValue(), this.__timer = setInterval(t.bind(function () {
              this.fire("plusclick")
            }, this), 100)
          }, this, 400)
        }, "@minus/mousedown": function () {
          this.fire("minusclick"), this.__timer = t.delay(function () {
            this.__serialChange = !0, this.__oldValue = this.getValue(), this.__timer = setInterval(t.bind(function () {
              this.fire("minusclick")
            }, this), 100)
          }, this, 400)
        }, "@plus/mouseup": function () {
          this.__stopTimer()
        }, "@minus/mouseup": function () {
          this.__stopTimer()
        }, "@plus/mouseout": function () {
          this.__stopTimer()
        }, "@minus/mouseout": function () {
          this.__stopTimer()
        }, "@input/change": function (e) {
          this.setValue(e.value)
        }
      },
      listeners: {
        plusclick: function () {
          this.plus()
        }, minusclick: function () {
          this.minus()
        }
      }
    }, members: {
      destroy: function () {
        clearTimeout(this.__timer), delete this.__timer, this.applySuper("destroy", arguments)
      }, __stopTimer: function () {
        this.__timer && (clearTimeout(this.__timer), delete this.__timer, this.__serialChange && (this.fire("serialchange", this.getValue(), this.__oldValue), this.__serialChange = !1))
      }, setValue: function (e, t) {
        e -= 0;
        var i = this.step;
        i > 1 && e % i != 0 && (e = (Math.floor(e / i) + 1) * i, this.fire("forcestep"));
        var o = this.model.get("max"), s = this.model.get("min");
        return "number" == typeof e && !isNaN(e) && isFinite(e) ? (e > o ? e = o : s > e && (e = s), this.doms.input.value = e, this.model.set("value", e), e) : isNaN(e) || !isFinite(e) ? (this.doms.input.value = this.model.get("value"), this.getValue()) : void 0
      }, getValue: function () {
        return this.doms.input.value - 0
      }, plus: function () {
        var e = this.getValue();
        this.setValue(e + this.step), this.fire("plus", e)
      }, minus: function () {
        var e = this.getValue();
        this.setValue(e - this.step), this.fire("minus", e)
      }
    }
  })
}), define("global/component/Radio", ["require", "pro", "global/component/Base", "global/component/Checkbox"], function (e) {
  var t = e("pro"), i = e("global/component/Base"), o = e("global/component/Checkbox"), s = i.extend({
    constructor: function () {
      this.applySuper(arguments);
      var e = this.__config;
      this.listen("change", e.onChange), this.listen("check", e.onCheck), this.listen("uncheck", e.onUncheck), this.listen("disable", function () {
        this.each(function (e) {
          e.disable()
        })
      }), this.listen("resume", function () {
        this.each(function (e) {
          e.resume()
        })
      }), this.listen("create", function () {
        var e = this.Class, i = this.__config, o = this;
        this.options && this.options.destroy(), this.options = new t.List(i.options), this.options.each(function (t, s) {
          var n = t.getRaw();
          n.name || (n.name = "pro-radio" + o.id), n.index = s;
          var r = n.renderTo || o, a = new e.Item(n).join(o).render(r);
          a.listen("change", function () {
            o.checked = this, o.fire("change", this.getValue(), this.getIndex())
          }), a.listen("check", function () {
            o.fire("check", this.getValue(), this.getIndex())
          }), a.listen("uncheck", function () {
            o.fire("uncheck", this.getValue(), this.getIndex())
          }), n.checked && (i.checked = s)
        }), this.check(i.checked)
      })
    },
    statics: {
      baseClassName: "pro-radioGroup",
      template: '<span class="pro-radioGroup"></span>',
      Item: o.extend({
        statics: {
          baseClassName: "pro-radio",
          template: '<label class="pro-radio">{{#right}}{{#text}}<span>{{text}}</span> {{/text}}{{/right}}<input type="radio"{{#name}} name="{{name}}"{{/name}}{{#value}} value="{{value}}"{{/value}}{{#checked}} checked{{/checked}}/>{{^right}} {{#text}}<span>{{text}}</span>{{/text}}{{/right}}</label>'
        }, members: {
          getIndex: function () {
            return this.__config.index
          }
        }
      })
    },
    members: {
      setValue: function (e) {
        this.each(function (t) {
          return t.model.get("value") === e ? (t.check(), !1) : void 0
        })
      }, getValue: function () {
        return this.checked.getValue()
      }, getChecked: function () {
        return this.checked.getIndex()
      }, check: function (e) {
        var t = this.getChild(e);
        t && t.check()
      }, uncheck: function () {
        this.each(function (e) {
          e.uncheck()
        }), this.fire("uncheck")
      }, disable: function (e) {
        if (void 0 === e)s.__super.prototype.disable.call(this); else {
          var t = this.getChild(e);
          t.disable()
        }
      }, resume: function (e) {
        if (void 0 === e)s.__super.prototype.resume.call(this); else {
          var t = this.getChild(e);
          t.resume()
        }
      }
    }
  });
  return s
}), define("global/component/Select", ["require", "pro", "global/component/Base", "global/component/Menu"], function (e) {
  var t = e("pro"), i = e("global/component/Base"), o = e("global/component/Menu"), s = i.extend({
    constructor: function () {
      this.applySuper(arguments);
      var e = this.__config;
      this.listen("change", e.onChange), this.listen("select", e.onSelect), this.listen("click", function () {
        this.showMenu()
      }), this.listen("create", function () {
        var e = this.__config, i = e.items || e.options;
        this.options && this.options.destroy(), this.options = new t.List(i), this.options.each(function (t, i) {
          void 0 === t.get("value") && t.set("value", t.get("text")), t.get("selected") && (e.selected = i)
        }), this.menu && !this.menu.isDestroyed() && t.delay(function () {
          this.menu.destroy(), this.showMenu()
        }, this), this.__selected = e.selected || 0, this.doms.input && this.listen("select", function (e) {
          this.doms.input.value = e
        }), this.select(this.__selected)
      })
    }, statics: {
      Menu: o,
      data: function (e) {
        return {name: e.name, arr: e.arr || (e.bottom ? "▲" : "▼")}
      },
      baseClassName: "pro-select",
      template: '<div class="pro-select" tabindex="0"><span pro="text"></span><i class="pro-select-arr">{{arr}}</i>{{#name}}<input type="hidden" name="{{name}}" />{{/name}}</div>',
      doms: {input: "input", text: "@text"},
      css: {
        all: ".pro-select,					.pro-select .pro-select-arr{display:inline-block}					.pro-select{padding:0 .5em 0 1em;height:2em;line-height:2em;border:1px solid #e0e0e0;vertical-align:middle;outline:none;text-decoration:none;white-space:nowrap;cursor:pointer}					.pro-select .pro-select-arr{margin-left:1em;font-size:9px;color:#e0e0e0;font-style:normal;-webkit-transform:scale(.75)}					.pro-select:focus,					.pro-select:hover{border-color:#ccc}					.pro-select:focus .pro-select-arr,					.pro-select:hover .pro-select-arr{color:#ccc}					.pro-select:active{background:#f0f0f0}					.pro-select-disabled{background:#e0e0e0!important;border-color:#ccc!important;color:#aaa!important;cursor:default!important}					.pro-select-disabled .pro-select-arr{color:#ccc!important}",
        iel: ".pro-select,.pro-select .pro-select-arr{display:inline;zoom:1}"
      },
      events: {
        "@": "click", "@/keydown": function (e, t) {
          13 == t.keyCode && this.fire("click")
        }
      }
    }, members: {
      _setText: function (e) {
        this.doms.text.innerHTML = e
      }, showMenu: function () {
        var e = this.Class, t = this, i = this.__config, o = (this.dom, this.menu = e.Menu.show({
          style: "z-index:1000",
          items: this.options.getData(),
          scrollLength: i.scrollLength,
          destroyOnScroll: !1,
          listeners: {
            click: function (e) {
              t.select(e)
            }, render: function (e) {
              var o = [0, t.dom.offsetHeight + 1];
              e.offsetWidth < t.dom.offsetWidth && (e.style.width = t.dom.offsetWidth - 2 + "px"), i.up === !0 && (o[1] = -e.offsetHeight), i.left === !0 && (o[0] = t.dom.offsetWidth - e.offsetWidth), this.relTo(t, o)
            }
          }
        }));
        o.select(this.__selected)
      }, select: function (e) {
        var t = this.options.get(e), i = t.get("value"), o = t.get("text");
        this.__selected !== e && (this.__selected = e, this.fire("change", i, e)), this.fire("select", i, e), this._setText(o)
      }, getSelected: function () {
        return this.__selected
      }, getText: function () {
        return this.options.get(this.__selected).get("text")
      }, getValue: function () {
        return this.options.get(this.__selected).get("value")
      }, setValue: function (e) {
        var t = this;
        this.options.each(function (i, o) {
          return i.get("value") == e ? (t.select(o), !1) : void 0
        })
      }
    }
  });
  return s
}), define("global/component/Tabs", ["require", "pro", "global/component/Base"], function (e) {
  var t = e("pro"), i = e("global/component/Base"), o = i.extend({
    constructor: function () {
      this.applySuper(arguments);
      var e = this.__config;
      this.listen("switch", e.onSwitch), this.listen("change", e.onChange), this.listen("render", function (i) {
        var s = this;
        this.itemList && (this.itemList.destroy(), this.itemList = null, delete this.itemList), this.itemList = new t.List(e.items), this.itemList.each(function (i, n) {
          var r, a = i.get(), l = s.doms;
          r = t.is("dom", a.tab) ? new o.Tab({dom: a.tab}).join(s).render() : new o.Tab({text: a.tab}).join(s).render(l.tab), t.is("dom", a.panel) ? r.panel = new o.Panel({dom: a.panel}).render().hide() : r.panel = new o.Panel({text: a.panel}).render(l.panel).hide(), r.listen(s, "destroy", function () {
            this.destroy()
          }), r.listen("destroy", function () {
            this.panel.destroy(), this.panel = null, delete this.panel
          }), r.listen("click", function () {
            s.switchTo(this)
          }), a.onSelect && r.listen("select", a.onSelect), a.onUnselect && r.listen("unselect", a.onUnselect), a.disabled && r.disable(), a.selected && (e.selected = n)
        }), this.__selected = e.selected || 0, this.switchTo(this.__selected)
      })
    },
    statics: {
      baseClassName: "pro-tabs",
      html: '<div class="pro-tabs"><div class="pro-tabs-tab" pro="tab"></div><div class="pro-tabs-panel" pro="panel"></div></div>',
      doms: {tab: "@tab", panel: "@panel"},
      css: ".pro-tabs-tab{margin-bottom:-1px;overflow:hidden;zoom:1}				.pro-tabs-tab-item{float:left;margin-right:-1px;padding:0 1em;height:2em;line-height:2em;border:1px solid #e0e0e0;border-bottom:none;background:#f5f5f5;cursor:pointer;outline:none}				.pro-tabs-tab-item:focus,				.pro-tabs-tab-item:hover{background:#fafafa}				.pro-tabs-tab-item:active{background:#f0f0f0}				.pro-tabs-panel,				.pro-tabs-tab-item-selected{position:relative;}				.pro-tabs-tab-item-selected,				.pro-tabs-tab-item-selected:hover,				.pro-tabs-tab-item-selected:focus,				.pro-tabs-tab-item-selected:active{background:#fff}				.pro-tabs-panel{z-index:1}				.pro-tabs-tab-item-selected{cursor:default;z-index:2}				.pro-tabs-tab-item-disabled,				.pro-tabs-tab-item-disabled:hover,				.pro-tabs-tab-item-disabled:focus,				.pro-tabs-tab-item-disabled:active{cursor:default;color:#bbb;background:#f5f5f5}				.pro-tabs-panel{border-top:1px solid #e0e0e0}",
      Tab: i.extend({
        statics: {
          baseClassName: "pro-tabs-tab-item",
          template: '<div class="pro-tabs-tab-item" tabindex="0">{{text}}</div>',
          events: {
            "@": "click", "@/keydown": function (e, t) {
              13 == t.keyCode && this.fire("click")
            }
          },
          data: function (e) {
            return {text: e.text}
          }
        }, members: {
          select: function () {
            this.addClass("pro-tabs-tab-item-selected"), this.panel.show(), this.fire("select")
          }, unselect: function () {
            this.removeClass("pro-tabs-tab-item-selected"), this.panel.hide(), this.fire("unselect")
          }
        }
      }),
      Panel: i.extend({
        statics: {
          template: '<div class="pro-tabs-panel-item">{{text}}</div>',
          baseClassName: "pro-tabs-panel-item",
          data: function (e) {
            return {text: e.text}
          }
        }
      })
    },
    members: {
      getPanel: function (e) {
        return (this.getChild(e) || {}).panel
      }, getTab: function (e) {
        return this.getChild(e)
      }, switchTo: function (e) {
        this.each(function (t, i) {
          try {
            e === t || e === i ? (this.__selected !== i && (this.__selected = i, this.fire("change", i, t)), this.fire("switch", i, t), t.select()) : t.unselect()
          } catch (o) {
          }
        })
      }
    }
  });
  return o
}), define("global/component/Textarea", ["require", "pro", "global/component/Base", "global/component/Input"], function (e) {
  var t = (e("pro"), e("global/component/Base"), e("global/component/Input")), i = t.extend({statics: {template: '<div class="pro-input pro-input-textarea"><textarea class="pro-input-input" pro="input">{{value}}</textarea></div>'}});
  return i
}), define("global/utils/Countdown", ["require", "pro"], function (e) {
  function t(e) {
    var t = e.onRun, i = e.onFinish;
    delete e.onRun, delete e.onFinish;
    var o = new this(e);
    return o.start(t, i), o
  }

  function i(e) {
    if ("now" in e && (this.__fix = this._now() - e.now), "interval" in e && (this.interval = e.interval), "expires" in e && (this.expires = e.expires), "finish" in e ? this.finish = e.finish : this.finish = this._now().getTime() + this.expires, "listeners" in e) {
      var t = e.listeners;
      for (var i in t)this.listen(i, t[i])
    }
  }

  function o() {
    return new Date((new Date).getTime() - this.__fix)
  }

  function s(e, t) {
    function i() {
      var i = this._now();
      this.expires = this.finish - this._now().getTime();
      var o = new Date(this.finish), s = o.getTime() - i.getTime(), n = parseInt(s / 1e3 / 60 / 60 % 60), r = parseInt(s / 1e3 / 60 % 60), a = parseInt(s / 1e3 % 60), l = parseInt(s % 1e3), c = l, u = {
        h: 10 > n ? "0" + n : n + "",
        m: 10 > r ? "0" + r : r + "",
        s: 10 > a ? "0" + a : a + "",
        ms: 10 > c ? "00" + c : 100 > c ? "0" + c : c + ""
      };
      return 0 >= n && 0 >= r && 0 >= a && 0 >= l ? (t && t.call(this), this.fire("run", {
        h: "00",
        m: "00",
        s: "00",
        ms: "000"
      }), this.fire("finish"), this.stop(), void 0) : (e && e.call(this, u), void this.fire("run", u))
    }

    this.__timer = setInterval(r.bind(i, this), this.interval), i.call(this), this.fire("start")
  }

  function n() {
    clearInterval(this.__timer), this.fire("stop")
  }

  var r = e("pro");
  return r.Base.extend({
    constructor: i,
    statics: {start: t},
    members: {interval: 1e3, expires: 6e4, start: s, stop: n, _now: o, __timer: null, __fix: 0}
  })
}), define("global/model/PaymentModel", ["require", "global/model/BaseModel"], function (e) {
  var t = e("global/model/BaseModel"), i = t.extend({
    overrides: {
      data: {
        id: "",
        bankDesc: "",
        extDesc: "",
        bankImg: "",
        bankType: 0,
        payType: "",
        weight: 0,
        terminal: 0
      }
    }
  });
  return i
}), define("global/model/CashierModel", ["require", "global/model/BaseModel", "global/model/PaymentModel", "global/utils/Cookie"], function (e) {
  function t(e, t) {
    var i = this.Class;
    if (!this.validate("payment"))return void(t && t.call(this, i.NO_PAYMENT));
    var o = {
      apptype: this.get("appType"),
      paytype: this.get("customPayType"),
      orderid: this.get("orderId"),
      cporderid: this.get("cpOrderId"),
      cpid: this.get("cpid"),
      coin: this.get("coin"),
      money: 100 * this.get("money"),
      needpayrmb: 100 * this.get("stillPay"),
      bankid: this.get("payment.id") || "0",
      token: this.get("token"),
      ver: "1"
    };
    this.request({
      api: "confirm", async: !1, data: o, success: function (t) {
        this.set("bankUrl", t.url), this.set("bankParams", t.params), this.set("useBank", t.useBank), this.set("confirmed", !0), e && e.call(this)
      }, error: function (e) {
        this.set("confirmed", !1), t && t.call(this, e)
      }
    })
  }

  function i(e, t) {
    this.request({
      api: "check",
      data: {output: "json", cpid: this.get("cpid"), id: this.get("orderId"), pay_token: this.get("payToken")},
      success: function (i) {
        i.status == this.Class.STATUS_SUCCESS ? (this.set("resultUrl", i.url), e && e.call(this)) : t && t.call(this, {
          code: 0,
          result: i
        })
      },
      error: t
    })
  }

  function o(e, t, i) {
    if (!this.validate())return void(i && i.call(this));
    var o = this.get("bankUrl"), s = this.get("bankParams");
    if (e = e !== !1)this.request({
      api: o,
      data: s,
      type: "submit",
      success: t,
      error: i,
      self: !1,
      token: !1,
      timestamp: !1
    }); else {
      var n = [];
      for (var r in s) {
        var a = s[r];
        n.push(r + "=" + a)
      }
      window.location.href = o + (o.indexOf("?") >= 0 ? "&" : "?") + n.join("&")
    }
  }

  var s = e("global/model/BaseModel"), n = (e("global/model/PaymentModel"), e("global/utils/Cookie")), r = s.extend({
    overrides: {
      apis: {
        confirm: "post:/cashier/order/confirm.do",
        check: "/cashier/order/result.do"
      },
      data: {
        token: n.get("CASHIER_TOKEN"),
        payToken: "",
        appType: "",
        payType: "",
        orderType: 0,
        orderId: "",
        total: 0,
        orderUrl: "",
        cpOrderId: "",
        cpOrderBuyId: "",
        cpid: "",
        bankId: "",
        coinUseValue: 0,
        bankUrl: "",
        bankParams: "",
        useBank: !0,
        payment: null,
        resultUrl: "",
        confirmed: !1,
        useCoin: !1,
        useMoney: !1,
        coin: 0,
        money: 0,
        createTime: 0,
        deadTime: 0,
        hasDefaultBank: function (e) {
          var t = e.bankId;
          return t && "0" != t
        },
        totalYuan: function (e) {
          return e.total / 100
        },
        coinReduce: function (e) {
          return this.get("totalYuan") - this.get("stillPay")
        },
        stillPay: function (e) {
          var t, i = this.get("totalYuan"), o = this.get("coinUseValue"), s = e.coin - 0;
          return t = e.useCoin && 0 == o ? s > i ? 0 : i - s : i, t - o
        },
        rejectCoin: function (e) {
          return 1 == e.payType.substr(0, 1)
        },
        rejectMoney: function (e) {
          return 1 == e.payType.substr(1, 1)
        },
        customPayType: function (e) {
          return [e.useCoin ? 0 : 1, e.useMoney ? 0 : 1].join("")
        }
      },
      validators: {
        confirmed: function (e) {
          return e ? void 0 : this.Class.NO_CONFIRMED
        }, payment: function (e) {
          return !e && this.get("stillPay") ? this.Class.NO_PAYMENT : void 0
        }
      }
    },
    statics: {
      NO_PAYMENT: "未选择支付方式",
      NO_CONFIRMED: "未获取银行信息",
      CODE_ORDER_IS_PAID: -19,
      CODE_ORDER_ERROR: -17,
      CODE_BLACK_LIST: -28,
      CODE_NEED_CERTIFICATION: -29,
      STATUS_NOT_PAID: 0,
      STATUS_NOT_SUCCESS: 1,
      STATUS_SUCCESS: 2,
      STATUS_DEAD: 3,
      STATUS_CANCEL: 4,
      STATUS_REFUND: 5
    },
    members: {check: i, confirm: t, submit: o}
  });
  return r
}), define("global/controller/CashierController", ["require", "pro", "global/controller/BaseController", "global/utils/Utils", "global/Broadcast", "global/utils/Countdown", "global/model/CashierModel"], function (e) {
  function t(e) {
    switch (e.code) {
      case f.CODE_ORDER_IS_PAID:
        app.alert("订单已付款！");
        break;
      case f.CODE_ORDER_ERROR:
        app.alert("订单信息有误，请重新购买");
        break;
      default:
        app.msgbox({
          text: "网络错误，请稍候再试", onOk: function () {
            app.reload()
          }
        })
    }
  }

  function i(e) {
    app.callSpecial(this.context, "onUseCoinChange", e)
  }

  function o(e) {
    app.alert(e)
  }

  function s() {
    var e = this.view, t = this.model;
    t.get("stillPay") > 0 ? e.showPayments() : e.hidePayments(), t.get("useCoin") ? e.showReduce(t.get("coinReduce")) : e.hideReduce(), e.renderStillPay(t.get("stillPay"))
  }

  function n() {
    var e = this.view, t = this.model, i = this, o = !1;
    if (t.confirm(function () {
        o = !0
      }, function (e) {
        i.onConfirmError(e)
      }), o) {
      var s = t.get("useBank");
      s && e.showConfirm(function () {
        return t.check(function () {
          window.location.href = this.get("resultUrl")
        }, function (t) {
          if (t && 0 == t.code)switch (t.result.status) {
            case f.STATUS_NOT_PAID:
              app.msgbox({
                ico: "alert", title: "检测到您尚未付款成功哦", okText: "继续支付", cancelText: "放弃支付", onOk: function () {
                  app.reload()
                }, onCancel: function () {
                  app.go("user")
                }
              });
              break;
            case f.STATUS_NOT_SUCCESS:
              e.showConfirmResult("支付结果尚在确认中，请稍候");
              break;
            case f.STATUS_DEAD:
              app.alert("订单已过期");
              break;
            case f.STATUS_CANCEL:
              app.alert("订单已取消");
              break;
            case f.STATUS_REFUND:
              app.alert("订单已退款");
              break;
            default:
              app.alert("网络错误，请稍候再试！")
          } else app.alert("网络错误，请稍候再试！")
        }), !1
      }), t.submit(s)
    }
  }

  function r() {
    this.model.set("useCoin", !0), this.checkPayments()
  }

  function a() {
    this.model.set("useCoin", !1), this.checkPayments()
  }

  function l() {
    var e = this.view;
    this.init(), p.start({
      expires: this.model.get("deadTime"), onRun: function (t) {
        e.renderCountdown(t)
      }, onFinish: function () {
        app.reload()
      }
    })
  }

  function c(e) {
    var t = (this.context, this.model);
    t.set("payment", e.toData()), this.trigger("paymentchange", e)
  }

  function u() {
    var e = this.view, t = this.model, i = this.context;
    if (t.get("rejectCoin"))e.uncheckUseCoin(), e.hideUseCoin(); else if (t.get("hasDefaultBank")) {
      var o = t.get("coinUseValue");
      o > 0 ? (e.updateUseCoinText("使用账户余额支付" + o + "元"), e.checkUseCoin(), e.disableUseCoin(), e.hideReduce()) : (e.uncheckUseCoin(), e.disableUseCoin())
    } else t.get("coin") > 0 ? e.checkUseCoin() : (e.uncheckUseCoin(), e.disableUseCoin());
    app.callSpecial(i, "onRender", e)
  }

  function d() {
    var e = this.view, t = this.model;
    this.listen(e, "submitclick", this.onSubmit), this.listen(e, "usecoincheck", this.onUseCoinCheck), this.listen(e, "usecoinuncheck", this.onUseCoinUncheck), this.listen(e, "ready", this.onViewReady), this.listen(t, "invalid", this.onInvalid), this.listen(t, "change:useCoin", this.onUseCoinChange), this.receive(m.PAYMENTS_CHANGE, this.onPaymentChange)
  }

  function h() {
    this.applySuper(arguments), this.listenEvents()
  }

  var g = (e("pro"), e("global/controller/BaseController")), m = (e("global/utils/Utils"), e("global/Broadcast")), p = e("global/utils/Countdown"), f = e("global/model/CashierModel");
  return g.extend({
    constructor: h,
    members: {
      listenEvents: d,
      init: u,
      checkPayments: s,
      onPaymentChange: c,
      onViewComponentsReady: l,
      onSubmit: n,
      onUseCoinCheck: r,
      onUseCoinUncheck: a,
      onUseCoinChange: i,
      onInvalid: o,
      onConfirmError: t
    }
  })
}), define("global/controller/CashierResultController", ["require", "pro", "global/controller/BaseController", "global/utils/Utils", "global/Broadcast", "global/model/CashierModel"], function (e) {
  function t() {
    var e = this.model.get("resultUrl");
    e && (window.location.href = e)
  }

  function i() {
    this.checkTimes < 10 && (this.checkTimes++, r.delay(function () {
      var e = this;
      this.model.check(function () {
        e.result()
      }, function (t) {
        if (0 == t.code) {
          var i = t.result.status;
          i < a.STATUS_SUCCESS ? e.check() : i == a.STATUS_REFUND && e.result()
        } else app.reload()
      })
    }, this, 1e3))
  }

  function o() {
    this.check()
  }

  function s() {
    this.applySuper(arguments);
    var e = this.model.get("code"), t = this.model.get("status");
    0 == e && (t < a.STATUS_SUCCESS ? this.init() : (t == a.STATUS_SUCCESS || t == a.STATUS_REFUND) && this.result())
  }

  var n = (e("pro"), e("global/controller/BaseController")), r = e("global/utils/Utils"), a = (e("global/Broadcast"), e("global/model/CashierModel"));
  return n.extend({constructor: s, members: {init: o, check: i, result: t, checkTimes: 0}})
}), define("global/controller/GoodsListController", function () {
}), define("global/controller/LoginController", ["require", "pro", "global/controller/BaseController", "global/utils/Utils"], function (e) {
  function t(e, t) {
    return this.view.showError(e, t), !1
  }

  function i(e, t) {
    var i = this.model;
    i.save({username: e, password: t}) && i.submit()
  }

  function o(e) {
    if (!/@\w+?\.\w+?$/.test(e)) {
      var t = this.getSuggests(e);
      t.length && this.view.setUsername(t[0])
    }
  }

  function s(e) {
    var t = this.Class.DOMAINS, i = [];
    if (e)for (var o = e.split("@"), s = o[1], n = o[0], r = 0, a = t.length; a > r; r++) {
      var l = t[r];
      (!s || 0 == l.indexOf(s)) && i.push(n + "@" + l)
    }
    return i
  }

  function n(e) {
    if (e) {
      var t = this.getSuggests(e);
      t.length ? this.view.showAutoComplete(t, function (e, t) {
        this.setUsername(t)
      }) : this.view.hideAutoComplete()
    } else this.view.hideAutoComplete()
  }

  function r() {
    var e = this.view, t = this.model;
    this.listen(e, "usernamechange", this.onUsernameChange), this.listen(e, "usernametab", this.onUsernameTab), this.listen(e, "submitclick", this.onSubmit), this.listen(t, "invalid", this.onInvalid), this.listen(e, "allcomponentsrender", function () {
      app.callSpecial(this.context, "onRender", this.view)
    })
  }

  function a() {
    this.applySuper(arguments);
    var e = this.model, t = this.context, i = t.getParams("url");
    i && e.set("url", i), e.set("isNTES", app.isNTES()), this.listenEvents()
  }

  var l = (e("pro"), e("global/controller/BaseController"));
  e("global/utils/Utils");
  return l.extend({
    constructor: a,
    statics: {DOMAINS: ["163.com", "126.com", "yeah.net", "vip.163.com", "vip.126.com", "188.com", "gmail.com", "sina.com", "qq.com", "yahoo.com"]},
    members: {listenEvents: r, onUsernameChange: n, onUsernameTab: o, onSubmit: i, onInvalid: t, getSuggests: s}
  })
}), define("global/model/RechargeModel", ["require", "global/model/BaseModel", "global/model/PaymentModel", "global/model/CashierModel"], function (e) {
  function t(e, t) {
    this.Class;
    if (this.validate()) {
      var i = {coin: this.get("money"), bankid: this.get("payment.id") || "0", ver: "1"};
      this.request({
        api: "confirm", async: !1, data: i, success: function (t) {
          this.set("bankUrl", t.url), this.set("bankParams", t.params), this.set("confirmed", !0), this.set("useBank", t.useBank), this.set("orderId", t.id), this.set("payToken", t.payToken), e && e.call(this, t)
        }, error: function (e) {
          this.set("confirmed", !1), t && t.call(this, e)
        }
      })
    }
  }

  function i(e, t) {
    var i = this, o = r.from({orderId: this.get("orderId"), payToken: this.get("payToken")});
    o.check(function () {
      i.set("resultUrl", this.get("resultUrl")), e && e.call(i), i = null
    }, function (e) {
      t && t.call(i, e), i = null
    })
  }

  function o(e, t) {
    this.request({
      api: "check",
      data: {output: "json", pid: this.get("pid"), id: this.get("orderId"), pay_token: this.get("payToken")},
      success: function (i) {
        i.status == this.Class.STATUS_SUCCESS && i.coin > 0 ? e && e.call(this) : t && t.call(this, {
          code: 0,
          result: i
        })
      },
      error: t
    })
  }

  function s(e, t) {
    return this.validate() ? void this.request({
      api: this.get("bankUrl"),
      data: this.get("bankParams"),
      type: "submit",
      success: e,
      error: t,
      self: !1,
      token: !1,
      timestamp: !1
    }) : void(t && t.call(this))
  }

  var n = e("global/model/BaseModel"), r = (e("global/model/PaymentModel"), e("global/model/CashierModel")), a = n.extend({
    overrides: {
      apis: {
        confirm: "post:/cashier/recharge/confirm.do",
        check: "/cashier/recharge/result.do"
      },
      data: {orderId: 0, money: 0, payment: null, isFirst: !1, allowed: !1, resultUrl: "", bankUrl: "", bankParams: ""},
      validators: {
        money: function (e) {
          return e ? void 0 : this.Class.NO_MONEY
        }, payment: function (e) {
          return e ? void 0 : this.Class.NO_PAYMENT
        }, allowed: function (e) {
          return this.get("isFirst") && !e ? this.Class.NOT_ALLOWED : void 0
        }
      }
    },
    statics: {
      STATUS_SUCCESS: 0,
      NO_PAYMENT: "未选择支付方式",
      NO_CONFIRMED: "未获取银行信息",
      NO_MONEY: "未选择充值金额",
      NOT_ALLOWED: "未同意服务协议"
    },
    members: {checkOrder: i, check: o, confirm: t, submit: s}
  });
  return a
}), define("global/controller/RechargeController", ["require", "pro", "global/controller/BaseController", "global/utils/Utils", "global/Broadcast", "global/model/RechargeModel", "global/model/CashierModel", "global/utils/Location"], function (e) {
  function t(e) {
    switch (e.code) {
      case m.CODE_NEED_CERTIFICATION:
        this.context.launchCertification({showTitle: !0});
        break;
      default:
        this.view.showError(e.errorMsg || "网络错误，请稍候再试！")
    }
  }

  function i(e) {
    this.model.set("allowed", e)
  }

  function o(e) {
    this.model.set("money", e), this.trigger("moneychange", e)
  }

  function s(e, t) {
    var i = t;
    switch (t) {
      case g.NOT_ALLOWED:
        i = "请先阅读并同意《服务协议》！";
        break;
      case g.NO_MONEY:
        i = "请选择或输入充值金额"
    }
    this.view.showError(i)
  }

  function n() {
    var e = this, t = this.view, i = this.model, o = !1;
    i.confirm(function () {
      o = !0
    }, function (t) {
      e.onConfirmError(t)
    }), o && (i.get("useBank") && t.showConfirm(function () {
      return i.checkOrder(function () {
        window.location.href = this.get("resultUrl")
      }, function (e) {
        if (e && 0 == e.code)switch (e.result.status) {
          case m.STATUS_NOT_PAID:
            app.msgbox({
              ico: "alert", title: "检测到您尚未付款成功哦", okText: "继续支付", cancelText: "放弃支付", onOk: function () {
                app.reload()
              }, onCancel: function () {
                app.go("user")
              }
            });
            break;
          case m.STATUS_NOT_SUCCESS:
            t.showConfirmResult("支付结果尚在确认中，请稍候");
            break;
          case m.STATUS_DEAD:
            app.alert("订单已过期");
            break;
          case m.STATUS_CANCEL:
            app.alert("订单已取消");
            break;
          case m.STATUS_REFUND:
            app.alert("订单已退款");
            break;
          default:
            app.alert("网络错误，请稍候再试！")
        } else app.alert("网络错误，请稍候再试！")
      }), !1
    }), i.submit())
  }

  function r() {
    this.init()
  }

  function a(e) {
    var t = (this.context, this.model);
    t.set("payment", e.toData()), this.trigger("paymentchange", e)
  }

  function l() {
    var e = this.view;
    this.model;
    e.setMoney(p.getParam("money") - 0 || 10)
  }

  function c() {
    var e = this.view, t = this.model;
    this.listen(e, "submitclick", this.onSubmit), this.listen(e, "completeready", this.onViewCompleteReady), this.listen(t, "invalid", this.onInvalid), this.listen(e, "moneychange", this.onMoneyChange), this.listen(e, "allowedchange", this.onAllowedChange), this.receive(h.PAYMENTS_CHANGE, this.onPaymentChange)
  }

  function u() {
    this.applySuper(arguments), this.listenEvents()
  }

  var d = (e("pro"), e("global/controller/BaseController")), h = (e("global/utils/Utils"), e("global/Broadcast")), g = e("global/model/RechargeModel"), m = e("global/model/CashierModel"), p = e("global/utils/Location");
  return d.extend({
    constructor: u,
    members: {
      listenEvents: c,
      init: l,
      onMoneyChange: o,
      onPaymentChange: a,
      onViewCompleteReady: r,
      onAllowedChange: i,
      onSubmit: n,
      onInvalid: s,
      onConfirmError: t
    }
  })
}), define("global/controller/RechargeResultController", ["require", "pro", "global/controller/BaseController", "global/utils/Utils", "global/Broadcast", "global/model/RechargeModel", "global/utils/Location"], function (e) {
  function t() {
    this.view.renderSuccess()
  }

  function i() {
    r.delay(function () {
      var e = this;
      this.model.check(function () {
        e.result()
      }, function () {
        e.check()
      })
    }, this, 1e3)
  }

  function o() {
    var e = this.model;
    e.get("coin") > 0 ? this.result() : this.check()
  }

  function s() {
    this.applySuper(arguments), this.model.set("pid", a.getParam("pid")), this.init()
  }

  var n = (e("pro"), e("global/controller/BaseController")), r = e("global/utils/Utils"), a = (e("global/Broadcast"), e("global/model/RechargeModel"), e("global/utils/Location"));
  return n.extend({constructor: s, members: {init: o, check: i, result: t}})
}), define("global/controller/UserBaseController", ["require", "pro", "global/controller/BaseController", "global/Broadcast"], function (e) {
  function t() {
    this.applySuper(arguments), this.globalListens()
  }

  var i = (e("pro"), e("global/controller/BaseController")), o = e("global/Broadcast");
  return i.extend({
    constructor: t, members: {
      getAvatarPrefix: function () {
        return GUSER.avatarPrefix
      }, getAvatar: function (e) {
        var t = GUSER.avatarPrefix;
        return "" === t && (t = "http://mimg.127.net/p/yy/lib/img/avatar/"), t + e + ".jpeg"
      }, getNickName: function () {
        return GUSER.nickname
      }, getCid: function () {
        return GUSER.cid
      }, getUid: function () {
        return GUSER.uid
      }, getMobile: function () {
        return GUSER.mobile
      }, getCoin: function () {
        return GUSER.coin
      }, getFreeCoin: function () {
        return GUSER.freeCoin
      }, isMyself: function () {
        return GUSER.isMyself
      }, updateNickname: function (e) {
        GUSER.nickname = e
      }, updateMobile: function (e) {
        GUSER.mobile = e
      }, globalListens: function () {
        this.receive(o.USER_NICKNAME_CHANGE, this.updateNickname), this.receive(o.MOBILE_CHECK_OK, this.updateMobile)
      }
    }
  })
}), define("global/enum/CertificationString", ["require"], function (e) {
  return {
    CODE_USER_NOT_FOUND: -2,
    CODE_REQUEST_TIMEOUT: -9,
    CODE_SYSTEM_ERROR: -11,
    CODE_ERR_PARAMS: -16,
    CODE_SN_SEND_TOO_OFTEN: -517,
    CODE_SN_ERROR: -518,
    CODE_MOBILE_ERROR: -519,
    CODE_SN_OVER_LIMIT: -520,
    CODE_SN_EXPIRED: -521,
    CODE_IDCARD_TIMES_OVER: -541,
    CODE_USER_IN_BLACKLIST: -542,
    TXT_USER_NOT_FOUND: "你的身份没有被识别噢！",
    TXT_REQUEST_TIMEOUT: "请求超时，请稍后再试~",
    TXT_SYSTEM_ERROR: "系统开小差了，请稍后再试~",
    TXT_ERR_PARAMS: "参数错误，请稍后再试~",
    TXT_ERR_NAME_LENGTH: "姓名长度为2-16个字符，一个汉字为两个字符",
    TXT_ERR_IDENTITYNO: "请输入正确的身份证号码",
    TXT_ERR_RECEIVER: "您填写的姓名不正确",
    TXT_ERR_RECEIVER_EMPTY: "姓名不为空",
    TXT_ERR_IDENTITYCHECK: "身份证验证错误，请重新再试~",
    TXT_IDCARD_TIMES_OVER: "身份证已认证了多个账号，不能再认证",
    TXT_USER_IN_BLACKLIST: "您的账号无法使用一元夺宝，如有疑问，请联系客服~",
    ERR_MOBILE_EMPTY: "手机号码不为空",
    ERR_MOBILE: "请输入正确的手机号码",
    ERR_SN: "验证码错误",
    ERR_SN_EMPTY: "请输入验证码",
    ERR_SN_EXPIRED: "验证码已过期，请重新获取",
    ERR_SN_SEND_TOO_OFTEN: "验证码发送太过频繁，请稍后再试",
    ERR_SN_OVER_LIMIT: "一个手机号一天内最多能接收三个验证码，您已超限",
    ERR_MOBILE_VALIDATED: "该手机号码已验证，无需重复验证",
    ERR_GET_SN: "验证码获取失败，请检查操作或稍后再试",
    ERR_OTHERS: "验证失败，请检查操作或稍后再试",
    ERR_MOBILE_DISACCORD: "您输入的手机号与收验证码的手机号不一致",
    SUCCESS_SN: "验证码发送成功",
    SUCCESS_MOBILE: "手机号码验证成功"
  }
}), define("global/enum/Strings", ["require"], function (e) {
  return {}
}), define("global/model/ActivityList", ["require", "pro", "global/model/BaseList", "global/model/BaseModel", "global/utils/Cookie"], function (e) {
  function t(e) {
    for (var t = r.get(a) || "", i = t.split(","), o = !1; i.length;) {
      var s = i.pop();
      s == e && (o = !0)
    }
    o || r.set(a, (t ? t + "," : "") + e, "d1024")
  }

  function i() {
    return this.__ready
  }

  function o(e, t) {
    this.request({
      api: "get", success: function (t) {
        this.set(t.list), e && e.call(this)
      }, complete: function () {
        this.__ready = !0
      }, error: t
    })
  }

  var s = (e("pro"), e("global/model/BaseList")), n = e("global/model/BaseModel"), r = e("global/utils/Cookie"), a = "readHD", l = s.extend({
    overrides: {
      Model: n.extend({
        overrides: {
          data: {
            isRead: function (e) {
              var t = new RegExp("(?:^|,)" + e.id + "(?:$|,)");
              return t.test(r.get(a))
            }
          }
        }
      }), apis: {get: "/hd/oneact/validActlist.do"}
    }, members: {fetch: o, isReady: i, read: t, __ready: !1}
  });
  return l
}), define("global/utils/Json", ["require", "pro"], function (e) {
  var t = e("pro");
  return t.JSON
}), define("global/model/AddressModel", ["require", "pro", "global/model/BaseModel", "global/utils/Utils", "global/utils/Json"], function (e) {
  function t(e, t) {
    var i = this.Class, o = d.stringify(this.toData({except: ["id", "aname", "bname", "cname", "isDefault", "isSelectable", "phone", "fullAddress"]}));
    this.request({
      api: "add", data: {shipAddress: o}, success: function (t) {
        this.set("id", t.shipAddressId), e && e.call(this)
      }, error: function (e) {
        var o = e.code;
        o == i.CODE_ADDR_AMOUNT_OVER_LIMIT ? t && t.call(this, i.TEXT_ADDR_AMOUNT_OVER_LIMIT, i.CODE_ADDR_AMOUNT_OVER_LIMIT) : o == i.CODE_REQUEST_TIMEOUT ? t && t.call(this, i.TEXT_REQUEST_TIMEOUT, i.CODE_REQUEST_TIMEOUT) : o == i.CODE_ADDRESS_OR_NAME_PARAMS_ERR ? t && t.call(this, i.TEXT_ADDRESS_OR_NAME_PARAMS_ERR, i.CODE_ADDRESS_OR_NAME_PARAMS_ERR) : o === i.CODE_PARAMS_ERR && t && t.call(this, i.TEXT_PARAMS_ERR, i.CODE_PARAMS_ERR)
      }
    })
  }

  function i(e, t) {
    var i = this.Class;
    this.request({
      api: "del", data: this.toData("id"), success: function (t) {
        this.destroy(), e && e.call(this, t)
      }, error: function (e) {
        var o = e.code;
        switch (o) {
          case i.CODE_SYSTEM_ERR:
            t && t.call(this, i.TEXT_SYSTEM_ERR, i.CODE_SYSTEM_ERR);
            break;
          case i.CODE_PARAMS_ERR:
            t && t.call(this, i.TEXT_PARAMS_ERR, i.CODE_PARAMS_ERR)
        }
      }
    })
  }

  function o(e, t) {
    var i = this.Class, o = d.stringify(this.toData({except: ["isDefault", "isSelectable", "phone", "fullAddress"]}));
    this.request({
      api: "update", data: {shipAddress: o}, success: function (t) {
        e && e.call(this, t.shipAddressId)
      }, error: function (e) {
        var o = e.code;
        o === i.CODE_NEED_IDENTITY ? t && t.call(this, i.CODE_NEED_IDENTITY) : o === i.CODE_IDENTITY_VERIFY_ERR ? t && t.call(this, i.ERR_IDENTITY_VERIFY) : o === i.CODE_IDENTITY_ERR_OVER_LIMIT ? t && t.call(this, i.ERR_IDENTITY_ERR_OVER_LIMIT) : o == i.CODE_ADDRESS_OR_NAME_PARAMS_ERR ? t && t.call(this, i.TEXT_ADDRESS_OR_NAME_PARAMS_ERR, i.CODE_ADDRESS_OR_NAME_PARAMS_ERR) : o === i.CODE_PARAMS_ERR && t && t.call(this, i.TEXT_PARAMS_ERR, i.CODE_PARAMS_ERR)
      }
    })
  }

  function s(e, t) {
    this.request({
      api: "default", data: this.toData("id"), success: function () {
        this.set("dft", "1"), e && e.call(this)
      }, error: t
    })
  }

  function n(e, t) {
    e && t && (this.set("aid", e), this.set("aname", t))
  }

  function r(e, t) {
    e && t && (this.set("bid", e), this.set("bname", t))
  }

  function a(e, t) {
    e && t && (this.set("cid", e), this.set("cname", t))
  }

  function l(e) {
    return this.validate(e)
  }

  var c = (e("pro"), e("global/model/BaseModel")), u = e("global/utils/Utils"), d = e("global/utils/Json"), h = c.extend({
    statics: {
      CODE_REQUEST_TIMEOUT: -9,
      CODE_SYSTEM_ERR: -11,
      CODE_PARAMS_ERR: -16,
      CODE_ADDR_AMOUNT_OVER_LIMIT: -513,
      CODE_ADDRESS_OR_NAME_PARAMS_ERR: -516,
      CODE_NEED_IDENTITY: -537,
      CODE_IDENTITY_VERIFY_ERR: -538,
      CODE_IDENTITY_ERR_OVER_LIMIT: -539,
      ERR_NO_AREA: "请选择区域",
      ERR_ADDRESS: "详细地址长度5-150个字符，一个汉字为两个字符",
      ERR_ZIPCODE: "邮政编码错误",
      ERR_RECEIVER_LENGTH: "收货人名称长度为2-16个字符，一个汉字为两个字符",
      ERR_RECEIVER: "收货人名称不正确",
      ERR_IDENTITYNO: "请输入正确的身份证号码",
      ERR_NO_MOBILE: "手机号码不可为空",
      ERR_MOBILE: "手机号码不对",
      ERR_IDENTITY_VERIFY: "身份证验证失败",
      ERR_IDENTITY_ERR_OVER_LIMIT: "身份证验证失败次数超过限制",
      ERR_IDENTITY_VERIFY_OTHER: "认证服务超时",
      TEXT_ADDR_AMOUNT_OVER_LIMIT: "收货地址数目已经超过5条~",
      TEXT_REQUEST_TIMEOUT: "请求超时，请稍后再试~",
      TEXT_ADDRESS_OR_NAME_PARAMS_ERR: "收货人或收货地址长度不对，请检查后在提交~",
      TEXT_PARAMS_ERR: "参数不正确，请稍后再试~",
      TEXT_SYSTEM_ERR: "系统出小差啦~请稍后再试~"
    }, overrides: {
      apis: {
        add: "post:/user/shipAddress/add.do",
        del: "post:/user/shipAddress/del.do",
        update: "post:/user/shipAddress/update.do",
        "default": "post:/user/shipAddress/default.do"
      }, data: {
        id: "",
        aid: "",
        aname: "",
        bid: "",
        bname: "",
        cid: "",
        cname: "",
        zip: "",
        address: "",
        name: "",
        mobile: "",
        dft: "0",
        telPre: "",
        telNum: "",
        identitytype: "0",
        identityno: "",
        valid: !0,
        isSelectable: !1,
        isDefault: function (e) {
          return "1" == e.dft
        },
        phone: function (e) {
          var t = [];
          return t.push(e.mobile), e.telPre && e.telNum && t.push(e.telPre + "-" + e.telNum), t.join("/")
        },
        fullAddress: function (e) {
          var t = [];
          return e.aname && t.push(e.aname), e.bname && t.push(e.bname), e.cname && t.push(e.cname), e.address && t.push(e.address), e.zip && t.push(e.zip), t.join(",")
        }
      }, validators: {
        province: function (e) {
          return e ? void 0 : this.Class.ERR_NO_AREA
        }, city: function (e) {
          return e ? void 0 : this.Class.ERR_NO_AREA
        }, district: function (e) {
          return e ? void 0 : this.Class.ERR_NO_AREA
        }, address: function (e) {
          var e = u.trim(e), t = u.stringLen(e);
          return 5 > t || t > 150 ? this.Class.ERR_ADDRESS : void 0
        }, zipcode: function (e) {
          var t = /^[1-9]\d{5}$/g;
          return e && !t.test(e) ? this.Class.ERR_ZIPCODE : void 0
        }, receiver: function (e) {
          var e = u.trim(e), t = u.stringLen(e);
          return 2 > t || t > 16 ? this.Class.ERR_RECEIVER_LENGTH : void 0
        }, identityno: function (e) {
          var e = e.toUpperCase(), t = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/g;
          return e && !t.test(e) ? this.Class.ERR_IDENTITYNO : void 0
        }, mobile: function (e) {
          var t = /^1[345678]\d{9}$/g;
          return e ? t.test(e) ? void 0 : this.Class.ERR_MOBILE : this.Class.ERR_NO_MOBILE
        }
      }
    }, members: {add: t, del: i, update: o, setDefault: s, setProvince: n, setCity: r, setDistrict: a, validateData: l}
  });
  return h
}), define("global/model/AddressModelList", ["require", "pro", "global/model/AddressModel", "global/model/BaseList"], function (e) {
  function t() {
    this.applySuper(arguments)
  }

  function i(e, t) {
    this.request({
      api: "get", success: function (t) {
        this.set(t.list), e && e.call(this, t.list)
      }, error: t
    })
  }

  function o() {
    this.each(function (e, t) {
      e.set("dft", "0")
    })
  }

  function s(e, t) {
    this.request({api: "get", success: e, error: t})
  }

  var n = (e("pro"), e("global/model/AddressModel")), r = e("global/model/BaseList"), a = r.extend({
    constructor: t,
    overrides: {Model: n, apis: {get: "/user/shipAddress/get.do"}},
    members: {fetch: i, cancelDefault: o, check: s}
  });
  return a
}), define("global/model/AntiAddictionModel", ["require", "pro", "global/model/BaseModel", "global/model/BaseList", "global/utils/Json", "global/Broadcast"], function (e) {
  function t() {
    var e = this;
    this.applySuper(arguments), this.receive(l.CART_IDENTITY_CHECK_SUCC, function () {
      e.resetLevel()
    })
  }

  function i(e) {
    var t = "";
    t = e.data ? a.stringify(e.data) : a.stringify(this.get("orderItems")), this.request({
      api: "check",
      data: {orderItems: t},
      success: function (t) {
        this.set(t), this.set("orderItems", []), e.success && e.success.call(this)
      },
      error: e.error
    })
  }

  function o(e, t) {
    this.request({
      api: "unfreeze", success: function (t) {
        this.resetLevel(), e && e.call(this)
      }, error: t
    })
  }

  function s(e, t) {
    var i = new this;
    i.unfreeze.apply(i, arguments)
  }

  function n() {
    this.set("level", 1)
  }

  var r = (e("pro"), e("global/model/BaseModel")), a = (e("global/model/BaseList"), e("global/utils/Json")), l = e("global/Broadcast");
  return r.extend({
    constructor: t,
    overrides: {
      apis: {check: "post:/antiaddi/inf/check.do", unfreeze: "post:/antiaddi/inf/unfreeze.do"},
      data: {
        orderItems: [], level: 0, levelTitle: "", levelInfo: "", isNeedUnfreeze: function (e) {
          return 3 == e.level
        }, isNeedCertification: function (e) {
          return 5 == e.level
        }
      }
    },
    statics: {CODE_LEVEL_0: 0, CODE_LEVEL_1: 1, CODE_LEVEL_2: 2, CODE_LEVEL_3: 3, CODE_LEVEL_5: 5, unfreeze: s},
    members: {check: i, unfreeze: o, resetLevel: n}
  })
}), define("global/model/AvatarCostModel", ["require", "pro", "global/model/BaseModel"], function (e) {
  function t(e, t) {
    this.request({
      api: "check", success: function (t) {
        this.set(t), e && e.call(this, t)
      }, error: t
    })
  }

  var i = (e("pro"), e("global/model/BaseModel"));
  return i.extend({
    overrides: {apis: {check: "/user/avatar/pre.do"}, data: {valid: !1, cost: 0, value: 0}},
    statics: {GEMS_LOW_CODE: -540},
    members: {check: t}
  })
}), define("global/model/BankModel", ["require", "pro", "global/model/BaseModel"], function (e) {
  function t() {
    var e = this.get();
    return e
  }

  var i = (e("pro"), e("global/model/BaseModel")), o = i.extend({
    overrides: {
      data: {
        bankMap: {
          "0023": {
            name: "支付宝",
            type: 0,
            logo: !0
          },
          9999: {name: "网易宝", type: 3, logo: !0},
          9998: {name: "易信支付", type: 5, logo: !1},
          WEBO: {name: "微博支付", type: 8, logo: !1},
          MOWB: {name: "微博支付", type: 8, logo: !1},
          PCWB: {name: "微博支付", type: 8, logo: !1},
          "0001": {name: "工商银行", type: 1, logo: !0},
          "0004": {name: "建设银行", type: 1, logo: !0},
          "0002": {name: "农业银行", type: 1, logo: !0},
          "0009": {name: "中国银行", type: 1, logo: !0},
          "0006": {name: "邮储银行", type: 1, logo: !0},
          "0003": {name: "招商银行", type: 1, logo: !0},
          "0014": {name: "交通银行", type: 1, logo: !0},
          "0013": {name: "民生银行", type: 1, logo: !0},
          "0200": {name: "中信银行", type: 1, logo: !1},
          "0016": {name: "华夏银行", type: 1, logo: !1},
          "0008": {name: "光大银行", type: 1, logo: !1},
          "0007": {name: "兴业银行", type: 1, logo: !1},
          "0010": {name: "平安银行", type: 1, logo: !1},
          "0011": {name: "浦发银行", type: 1, logo: !1},
          "0022": {name: "广发银行", type: 1, logo: !1},
          "0017": {name: "温州银行", type: 1, logo: !1},
          "0019": {name: "渤海银行", type: 1, logo: !1},
          "0021": {name: "汉口银行", type: 1, logo: !1},
          "0032": {name: "浙商银行", type: 1, logo: !1},
          "0033": {name: "宁波银行", type: 1, logo: !1},
          "0155": {name: "杭州银行", type: 1, logo: !1},
          "0061": {name: "建设银行", type: 2, logo: !0},
          "0039": {name: "招商银行", type: 2, logo: !0},
          "0067": {name: "招商银行", type: 2, logo: !0, hidden: !0},
          "0060": {name: "中国银行", type: 2, logo: !0},
          "0206": {name: "中信银行", type: 2, logo: !0},
          "0071": {name: "工商银行", type: 2, logo: !0},
          "0066": {name: "兴业银行", type: 2, logo: !0},
          "0059": {name: "交通银行", type: 2, logo: !0},
          "0069": {name: "民生银行", type: 2, logo: !0},
          "0064": {name: "光大银行", type: 2, logo: !1},
          "0065": {name: "平安银行", type: 2, logo: !1},
          "0070": {name: "浦发银行", type: 2, logo: !1},
          "0057": {name: "汉口银行", type: 2, logo: !1},
          "0058": {name: "广发银行", type: 2, logo: !1},
          "0072": {name: "支付宝(移动)", type: 4},
          6001: {name: "银联移动支付(移动)", type: 4},
          8003: {name: "招商银行(移动)", type: 4},
          "0205": {name: "建设银行(移动)", type: 4},
          "0130": {name: "中国银行(移动)", type: 4},
          "0120": {name: "农业银行(移动)", type: 4},
          8123: {name: "招商银行(移动)", type: 4},
          2404: {name: "建设银行(移动)", type: 4},
          8128: {name: "中国银行(移动)", type: 4},
          8129: {name: "交通银行(移动)", type: 4},
          2402: {name: "农业银行(移动)", type: 4},
          9968: {name: "江负银行", type: -9, logo: !1},
          AZFB: {name: "支付宝App", type: 0, logo: !1},
          IZFB: {name: "支付宝App", type: 0, logo: !1},
          AWYB: {name: "网易宝App", type: 0, logo: !1},
          IWYB: {name: "网易宝App", type: 0, logo: !1},
          JSWX: {name: "微信支付", type: 6, logo: !1},
          SMWX: {name: "微信支付", type: 6, logo: !0},
          SKWX: {name: "微信支付", type: 6, logo: !1},
          MOWX: {name: "微信支付", type: 6, logo: !1},
          AGXM: {name: "米币支付", type: 7, logo: !1},
          S001: {name: "系统赠送", type: -1, logo: !1},
          S002: {name: "系统赠送", type: -1, logo: !1},
          M001: {name: "晒单奖励", type: -1, logo: !1},
          NEWS: {name: "新闻钱包支付", type: 9, logo: !1}
        }
      }
    }, members: {getBankList: t}
  });
  return o
}), define("global/model/BonusModel", ["require", "pro", "global/model/BaseModel"], function (e) {
  function t(e) {
    function t(e) {
      var t = new Date(app.getServerTime());
      return t.setDate(t.getDate() + e), {year: t.getFullYear(), month: t.getMonth() + 1, date: t.getDate()}
    }

    var i = t(0), o = t(-1), s = t(-2), n = t(1), r = t(2), a = e.substring(0, 4) - 0, l = e.substring(5, 7) - 0, c = e.substring(8, 10) - 0;
    return a == i.year && l == i.month && c == i.date ? 0 : a == o.year && l == o.month && c == o.date ? 1 : a == s.year && l == s.month && c == s.date ? 2 : a == n.year && l == n.month && c == n.date ? 1 : a == r.year && l == r.month && c == r.date ? 2 : NaN
  }

  var i = (e("pro"), e("global/model/BaseModel"));
  return i.extend({
    overrides: {
      data: {
        id: "",
        pid: "",
        uid: "",
        bonusDictId: "",
        name: "",
        value: "",
        valueUsed: "",
        gids: [],
        createTime: "",
        startTime: "",
        deadTime: "",
        useTime: "",
        condPayValue: "",
        bonusDesc: "",
        status: "",
        bonusUrl: "",
        activateEnd: "",
        activateDesc: "",
        valueArr: function (e) {
          var t = e.value;
          return 1e4 > t ? (t + "").split("") : !1
        },
        gteMillion: function (e) {
          var t = e.value;
          return t >= 1e4 ? !0 : !1
        },
        isUseNow: function (e) {
          return 1 == e.status
        },
        isUsed: function (e) {
          return 2 == e.status
        },
        isExpired: function (e) {
          return 3 == e.status
        },
        isTocome: function (e) {
          return 4 == e.status || 7 == e.status
        },
        isActivate: function (e) {
          return 7 == e.status
        },
        isWillExpire: function (e) {
          var t = this.Class.transformDayTime(e.deadTime);
          return 1 == e.status && 2 > t
        },
        isNewCome: function (e) {
          var t = this.Class.transformDayTime(e.createTime);
          return (1 == e.status || 4 == e.status || 7 == e.status) && 1 > t
        },
        isNewToUse: function (e) {
          var t = this.Class.transformDayTime(e.startTime);
          return 1 == e.status && e.startTime != e.createTime && 1 > t
        },
        isUnUsable: function (e) {
          return 2 == e.status || 3 == e.status
        },
        showStart: function (e) {
          return !!e.startTime
        },
        expire: function (e) {
          return e.deadTime
        },
        showExpire: function (e) {
          return !!e.deadTime
        },
        balance: function (e) {
          return e.value - e.valueUsed
        },
        showBalance: function (e) {
          return e.valueUsed > 0
        },
        gteThousand: function (e) {
          return e.value - e.valueUsed >= 1e3 ? !0 : !1
        },
        gteTenThousand: function (e) {
          return e.value - e.valueUsed >= 1e4 ? !0 : !1
        }
      }
    }, statics: {transformDayTime: t}
  })
}), define("global/model/BonusModelList", ["require", "pro", "global/model/BaseList", "global/model/BonusModel"], function (e) {
  function t(e, t) {
    var i = this, o = [i.Class.BONUS_STATUS_USABLE, i.Class.BONUS_STATUS_USED, i.Class.BONUS_STATUS_OVERDUE, i.Class.BONUS_STATUS_STAYOUT, i.Class.BONUS_STATUS_GROUP, i.Class.BONUS_STATUS_STOP, i.Class.BONUS_STATUS_MISSION], s = [i.Class.BONUS_STATUS_USABLE, i.Class.BONUS_STATUS_STAYOUT, i.Class.BONUS_STATUS_MISSION], n = {
      status: o.join(","),
      pageNum: 1,
      pageSize: 1,
      limit30d: 1
    };
    this.request({
      api: "get", data: n, success: function (t) {
        for (var i = {usableTotal: 0, unUseTotal: 0}, n = "," + s.join(",") + ",", r = 0; r < o.length; r++) {
          var a = o[r];
          i[a] = t.cntDetail[a] || 0, -1 == n.indexOf("," + a + ",") ? i.unUseTotal += i[a] : i.usableTotal += i[a]
        }
        e && e.call(this, i)
      }, error: t
    })
  }

  function i(e, t, i) {
    var o = this;
    e.pageSize = e.pageSize ? e.pageSize : this.pageSize, this.request({
      api: "get", data: e, success: function (e) {
        o.formatData(e.list), o.set(e.list), o.totalCnt = e.totalCnt, o.pageNum = e.pageNum, t && t.call(this, e)
      }, error: i
    })
  }

  function o(e, t, i) {
    var o = this;
    e.pageSize = e.pageSize ? e.pageSize : this.pageSize, e.pageNum = ++this.pageNum, this.request({
      api: "get",
      data: e,
      success: function (e) {
        o.formatData(e.list), o.push(e.list), o.totalCnt = e.totalCnt, o.pageNum = e.pageNum, t && t.call(this, e)
      },
      error: i
    })
  }

  function s(e, t, i) {
    this.request({
      api: "getCouponsNum", data: {cid: e}, success: function (e) {
        t && t.call(this, e)
      }, error: i
    })
  }

  function n(e, t, i) {
    var o = this;
    this.request({
      api: "submit", data: e, success: function (e) {
        o.formatData(e.list), o.set(e.list), t && t.call(this, e)
      }, error: function (e) {
        i && i.call(this, e)
      }
    })
  }

  function r(e) {
    for (var t = e, i = 0, o = t.length; o > i; i++) {
      var s = t[i];
      s.isEven = i % 2 == 1
    }
    return t
  }

  var a = (e("pro"), e("global/model/BaseList")), l = e("global/model/BonusModel"), c = a.extend({
    overrides: {
      Model: l,
      apis: {
        get: "/bonus/humlist.do",
        getCouponsNum: "/qun/coupons/getnum.do",
        submit: {
          url: "/kpimission/codefec.do", type: "get", onResponse: function (e) {
            return {code: 200 == e.code ? 0 : e.code, result: e.result, msg: e.errormsg}
          }
        }
      }
    },
    statics: {
      EXCHANGE_STATUS_SUC: 200,
      EXCHANGE_STATUS_NEED_CAPTCHA: 203,
      EXCHANGE_STATUS_PARAM_ERR: 401,
      EXCHANGE_STATUS_EXCHANGED: 409,
      EXCHANGE_STATUS_MANY_TIMES: 410,
      EXCHANGE_STATUS_INVALID: 411,
      EXCHANGE_STATUS_NO_LOGIN: 412,
      EXCHANGE_STATUS_USED: 413,
      EXCHANGE_STATUS_VERIFY_ERR: 414,
      EXCHANGE_STATUS_CUSTOM_ERR: 416,
      EXCHANGE_STATUS_SERVER_ERR: 502,
      BONUS_STATUS_USABLE: "1",
      BONUS_STATUS_USED: "2",
      BONUS_STATUS_OVERDUE: "3",
      BONUS_STATUS_STAYOUT: "4",
      BONUS_STATUS_GROUP: "5",
      BONUS_STATUS_STOP: "6",
      BONUS_STATUS_MISSION: "7",
      BONUS_STATUS_WILLEXPIRE: "8",
      BONUS_USE_SRATUS: "1,4,7",
      BONUS_UNUSE_SRATUS: "2,3"
    },
    members: {
      fetch: i,
      pushPage: o,
      getCouponsNum: s,
      submit: n,
      formatData: r,
      getUsableCount: t,
      pageSize: 10,
      pageNum: 1
    }
  });
  return c
}), define("global/model/BonusShareModel", ["require", "pro", "global/model/BaseModel"], function (e) {
  function t(e) {
    this.applySuper(arguments), this.set({
      user: {
        avatarUrl: function () {
          return null === e.user.avatarPrefix ? "http://mimg.127.net/p/yy/lib/img/avatar/40.jpeg" : e.user.avatarPrefix + "40.jpeg"
        }, nickname: e.user.nickname || "", cid: e.user.cid || ""
      }
    })
  }

  var i = (e("pro"), e("global/model/BaseModel")), o = i.extend({
    constructor: t,
    overrides: {
      data: {user: {avatarUrl: "", nickname: "", cid: ""}, amount: 0, message: "", shareTime: 0},
      isLucky: !1
    },
    statics: {}
  });
  return o
}), define("global/model/BonusShareModelList", ["require", "pro", "global/model/BaseList", "global/model/BonusShareModel"], function (e) {
  function t(e, t, i) {
    var o = this;
    this.request({
      api: "get", data: e, success: function (e) {
        var i = o.formatData(e);
        o.set(i.shareList), t && t.call(this, e)
      }, error: i
    })
  }

  function i(e) {
    var t = this.getApplication().getCID(), i = e.shareList;
    e.myAmount = -1, e.hasBonus = !1, e.myBonusGotTime = "";
    for (var o = 0, s = i.length; s > o; o += 1) {
      var n = i[o];
      n.isLucky = "" + n.user.cid == "" + e.luckyCid, "" + n.user.cid == "" + t && (e.myBonusAmount = n.amount, e.myBonusGotTime = n.shareTime, e.hasBonus = !0)
    }
    return e
  }

  var o = (e("pro"), e("global/model/BaseList")), s = e("global/model/BonusShareModel"), n = o.extend({
    overrides: {
      Model: s,
      apis: {get: "/qun/coupons/detail.do"}
    }, members: {fetch: t, formatData: i}
  });
  return n
}), define("global/model/GoodsModel", ["require", "pro", "global/model/BaseModel", "global/utils/Url"], function (e) {
  function t(e, t, i) {
    var o = this.__cache[e];
    o ? t && t.call(this, o) : this.request({
      api: "query", data: {gid: e}, success: function (i) {
        i = i[0], this.__cache[e], t && t.call(this, i)
      }, error: i
    })
  }

  function i(e, t) {
    var i = this.get("gid"), o = this.Class.__cache[i];
    o ? (this.set(o), e && e.call(this, o)) : this.request({
      api: "query", data: {gid: i}, success: function (t) {
        t = t[0], this.Class.__cache[i] = t, this.set(t), e && e.call(this, t)
      }, error: t
    })
  }

  function o(e) {
    return r.getDetail(e)
  }

  function s(e, t, i, o) {
    var s = 1;
    return i > 1 ? s = i : 1 == t && (e > this.PRICE_SEGMENT_1 && e < this.PRICE_SEGMENT_2 ? s = 5 : e >= this.PRICE_SEGMENT_2 && (s = 10)), s
  }

  var n = (e("pro"), e("global/model/BaseModel")), r = e("global/utils/Url"), a = n.extend({
    overrides: {
      data: {
        gid: 0,
        gname: "",
        gpic: [],
        desc: "",
        price: 0,
        priceType: 1,
        priceUnit: 1,
        totalTimes: 0,
        channelId: 0,
        supplierId: 0,
        priceBase: 0,
        wishSetable: 0,
        wishGid: 0,
        goodsType: 0,
        typeId: 0,
        buyable: !1,
        regularBuyMax: 1,
        buyUnit: 1,
        tag: "",
        property: "",
        icon: [],
        flagList: [],
        addAttributes: "00",
        needContract: function (e) {
          return !!(e.addAttributes || "00").substr(1)
        },
        needIdentity: function (e) {
          return !!(e.addAttributes || "00").substr(2)
        },
        smallPic: function (e) {
          return e.gpic[0]
        },
        normalPic: function (e) {
          return e.gpic[1]
        },
        largePic: function (e) {
          return e.gpic[2]
        },
        iconImage: function (e) {
          var t = "", i = e.flagList || [];
          return i.length > 0 && i[0].pic && (t = '<img src="' + i[0].pic + '" class="ico ico-label ico-label-goods">'), t
        },
        url: function (e) {
          return this.Class.getUrl(e.gid)
        },
        priceDesc: function (e) {
          return e.price + (1 == e.priceType ? "元" : "赠币")
        },
        totalDesc: function (e) {
          return e.totalTimes + "人次"
        },
        isTen: function (e) {
          return e.buyUnit && 10 == e.buyUnit
        },
        isMallGoods: function (e) {
          return e.goodsType == this.Class.TYPE_MALL_GOODS
        },
        isWishSetable: function (e) {
          return 1 == e.wishSetable
        },
        isVirtual: function (e) {
          return /(?:^|,)1(?=$|,)/.test(e.property)
        },
        baseBuyTimes: function (e) {
          return this.Class.getBaseBuyTimes(e.price, e.priceUnit, e.buyUnit, e.regularBuyMax)
        },
        hasFlag: function (e) {
          return e.flagList.length > 0
        }
      }, apis: {query: "/goods/query.do"}
    },
    statics: {
      query: t,
      getUrl: o,
      getBaseBuyTimes: s,
      PRICE_SEGMENT_1: 3500,
      PRICE_SEGMENT_2: 5e3,
      TYPE_WISH_GOODS: 1,
      TYPE_MALL_GOODS: 2,
      __cache: {}
    },
    members: {query: i}
  });
  return a
}), define("global/model/CartModel", ["require", "pro", "global/model/BaseModel", "global/model/GoodsModel"], function (e) {
  function t(e, t) {
    var i = this.Class;
    this.request({
      api: "del", data: this.toData("id"), success: function (t) {
        this.destroy(), e && e.call(this)
      }, error: function (e) {
        var o = e.code;
        o == i.CODE_PARAM_INCORRECT ? t && t.call(this, i.TEXT_PARAM_INCORRECT, i.CODE_PARAM_INCORRECT) : o == i.CODE_REQUEST_TIMEOUT && t && t.call(this, i.TEXT_REQUEST_TIMEOUT, i.CODE_REQUEST_TIMEOUT)
      }
    })
  }

  function i(e, t, i, o) {
    var s = this.Class;
    this.request({
      api: "update", data: {id: this.get("id"), num: e, regularBuy: t}, success: function (o) {
        this.set({num: e, regularBuy: t}), i && i.call(this, o)
      }, error: function (e) {
        var t = e.code;
        t == s.CODE_PARAM_INCORRECT ? o && o.call(this, s.TEXT_PARAM_INCORRECT, s.CODE_PARAM_INCORRECT) : t == s.CODE_REQUEST_TIMEOUT && o && o.call(this, s.TEXT_REQUEST_TIMEOUT, s.CODE_REQUEST_TIMEOUT)
      }
    })
  }

  function o(e, t, i, o, s) {
    this.request({api: "buy", data: {gid: e, num: t, period: i, regularBuy: o || 1, isFreeCoin: s || !1}})
  }

  function s(e, t, i, o, s) {
    var n = new this;
    n.buy.apply(n, arguments)
  }

  var n = (e("pro"), e("global/model/BaseModel")), r = e("global/model/GoodsModel");
  return n.extend({
    overrides: {
      data: {
        id: "",
        info: {status: 0, gid: 0, period: 0, existingTimes: 1, isLimit: 0, goods: r},
        num: 0,
        regularBuy: 0,
        renew: 0,
        cut: 0,
        proofLimitNum: -1,
        proofTips: "",
        checked: !0,
        totalAmount: function (e) {
          return e.num * e.regularBuy * e.info.goods.priceUnit
        },
        isTen: function (e) {
          return 10 == e.info.goods.buyUnit
        },
        restTimes: function (e) {
          return e.info.goods.totalTimes - e.info.existingTimes
        },
        gurl: function (e) {
          return "/detail/" + e.info.gid + "-" + e.info.period + ".html"
        },
        hasTag: function (e) {
          return e.info.goods.hasFlag
        },
        flagTag: function (e) {
          var t = null, i = "", o = "", s = "";
          return this.get("hasTag") && (t = e.info.goods.flagList[0], i = t.titleBg, o = t.title, s = '<i class="w-tag" style="background-color:' + i + '">' + o + "</i>"), s
        }
      }, apis: {del: "post:/cart/del.do", update: "post:/cart/update.do", buy: "submit:/cart/index.do"}
    },
    statics: {
      CODE_FREQUENT_OPERATION: -7,
      CODE_ACCOUNT_FREEZE: -8,
      CODE_REQUEST_TIMEOUT: -9,
      CODE_PARAM_INCORRECT: -16,
      CODE_NUM_OVER_LIMIT: -250,
      CODE_GOODS_CANNOT_BUY: -251,
      TEXT_FREQUENT_OPERATION: "您的操作有点频繁，要不稍作休息后再来夺宝吧~",
      TEXT_ACCOUNT_FREEZE: "您的账户已被冻结，请解冻后再使用，谢谢！",
      TEXT_REQUEST_TIMEOUT: "请求超时，请稍后再试~",
      TEXT_PARAM_INCORRECT: "网络错误，请刷新页面后再操作~",
      TEXT_NUM_OVER_LIMIT: "",
      TEXT_GOODS_CANNOT_BUY: "",
      buy: s
    },
    members: {del: t, update: i, buy: o}
  })
}), define("global/model/CartModelList", ["require", "pro", "global/model/CartModel", "global/model/BaseList", "global/utils/Json"], function (e) {
  function t(e, t, i) {
    e.num || 1, e.regularBuy || 1;
    e instanceof Array ? this.request({
      api: "batchAdd", data: {goods: e}, success: function () {
        this.fetch(t)
      }, error: i
    }) : e && this.request({
      api: "add", data: e, success: function (e) {
        this.set(e), t && t.call(this)
      }, error: i
    })
  }

  function i() {
    var e = 0;
    return this.each(function (t) {
      e += t.get("totalAmount")
    }), e
  }

  function o(e, t) {
    this.request({
      api: "get", success: function (t) {
        this.set(t), e && e.call(this, t)
      }, error: t
    })
  }

  function s(e, t) {
    var i = this.Class, o = [];
    if (this.each(function (e) {
        e.get("checked") && o.push(e.get("id"))
      }), o.length > 0)this.request({
      api: "submit", data: {id: o.join(",")}, success: e, error: function (e) {
        var o = e.code, s = e.errorMsg;
        switch (o) {
          case i.CODE_PARAM_INCORRECT:
            t && t.call(this, i.TEXT_PARAM_INCORRECT, i.CODE_PARAM_INCORRECT);
            break;
          case i.CODE_ACCOUNT_FREEZE:
            t && t.call(this, i.TEXT_ACCOUNT_FREEZE, i.CODE_ACCOUNT_FREEZE);
            break;
          case i.CODE_NETWORK_ERR:
            t && t.call(this, i.TEXT_NETWORK_ERR, i.CODE_NETWORK_ERR);
            break;
          case i.CODE_SYSTEM_ERR:
            t && t.call(this, i.TEXT_SYSTEM_ERR, i.CODE_SYSTEM_ERR);
            break;
          case i.CODE_GOODS_CANNOT_BUY:
            t && t.call(this, s ? s : i.TEXT_GOODS_CANNOT_BUY, i.CODE_GOODS_CANNOT_BUY);
            break;
          case i.CODE_USER_IN_BLACKLIST:
            t && t.call(this, i.TEXT_USER_IN_BLACKLIST)
        }
      }
    }); else {
      var s = "请选上商品后再提交~";
      t && t.call(this, s)
    }
  }

  function n(e, t, i) {
    this.request({api: "del", data: {id: e}, success: t, error: i})
  }

  var r = (e("pro"), e("global/model/CartModel")), a = e("global/model/BaseList");
  e("global/utils/Json");
  return a.extend({
    overrides: {
      Model: r,
      apis: {
        add: "post:/cart/add.do",
        get: "/cart/get.do",
        batchAdd: "post:/cart/batchAdd.do",
        submit: "post:/cart/submit.do",
        del: "post:/cart/del.do"
      }
    },
    statics: {
      CODE_FREQUENT_OPERATION: -7,
      CODE_ACCOUNT_FREEZE: -8,
      CODE_REQUEST_TIMEOUT: -9,
      CODE_NETWORK_ERR: -10,
      CODE_SYSTEM_ERR: -11,
      CODE_PARAM_INCORRECT: -16,
      CODE_NUM_OVER_LIMIT: -250,
      CODE_GOODS_CANNOT_BUY: -251,
      CODE_USER_IN_BLACKLIST: -253,
      TEXT_NETWORK_ERR: "系统错误，请稍后再试~",
      TEXT_SYSTEM_ERR: "系统错误，请稍后再试~",
      TEXT_FREQUENT_OPERATION: "您的操作有点频繁，要不稍作休息后再来夺宝吧~",
      TEXT_ACCOUNT_FREEZE: "您的账户已被冻结，请解冻后再使用，谢谢！",
      TEXT_REQUEST_TIMEOUT: "请求超时，请稍后再试~",
      TEXT_PARAM_INCORRECT: "网络错误，请刷新后再操作~",
      TEXT_NUM_OVER_LIMIT: "",
      TEXT_GOODS_CANNOT_BUY: "该账户存在安全风险，为避免可能的损失，请电脑登录一元夺宝（1.163.com）参与",
      TEXT_USER_IN_BLACKLIST: "您的账号无法使用一元夺宝服务，如有疑问，请与客服联系。"
    },
    members: {add: t, fetch: o, submit: s, delList: n, getAmount: i}
  })
}), define("global/model/CertificationModel", ["require", "pro", "global/model/BaseModel", "global/utils/Utils", "global/utils/Json", "global/enum/CertificationString"], function (e) {
  function t(e) {
    this.request({
      api: "idcardcheck",
      data: {
        realName: this.get("realName"),
        identityNo: this.get("identityNo"),
        mobile: this.get("mobile"),
        vcode: this.get("vcode"),
        pid: app.getCID()
      },
      success: function (t) {
        t.valid && (t.realName || t.identityNo || t.certMobile) && this.set({
          realName: t.realName,
          identityNo: t.identityNo,
          mobile: t.certMobile,
          isReturnRes: !0
        }), e.success && e.success.call(this, t)
      },
      error: e.error
    })
  }

  function i(e) {
    this.request({
      api: "getcode",
      data: {mobile: this.get("mobile"), pid: app.getCID()},
      success: e.success,
      error: e.error
    })
  }

  function o(e) {
    this.request({
      api: "check", data: {pid: app.getCID()}, success: function (t) {
        t.validated && this.set({
          realName: t.realName,
          identityNo: t.identityNo,
          mobile: t.certMobile
        }), e.success && e.success.call(this, t)
      }, error: e.error
    })
  }

  var s = (e("pro"), e("global/model/BaseModel")), n = e("global/utils/Utils"), r = (e("global/utils/Json"), e("global/enum/CertificationString"));
  return s.extend({
    overrides: {
      apis: {
        idcardcheck: "post:/one.user/ajax/submitIdCard.do",
        getcode: "post:/one.user/ajax/getVcodeForIdCard.do",
        check: "post:/one.user/ajax/preSubmitIdCard.do"
      },
      data: {
        realName: "",
        identityNo: "",
        pid: app.getCID() || 0,
        uid: app.getUID() || "",
        mobile: "",
        vcode: "",
        isValidate: !1
      },
      validators: {
        realName: function (e) {
          var e = n.trim(e), t = n.stringLen(e);
          return 2 > t || t > 16 ? r.TXT_ERR_NAME_LENGTH : void 0
        }, identityNo: function (e) {
          var e = n.trim(e).toUpperCase(), t = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/g;
          return e && !t.test(e) || !e ? r.TXT_ERR_IDENTITYNO : void 0
        }, mobile: function (e) {
          var t = /^1[345678]\d{9}$/g;
          return e ? e && !t.test(e) ? r.ERR_MOBILE : void 0 : r.ERR_MOBILE_EMPTY
        }, vcode: function (e) {
          var t = /^\d{6}$/g;
          return e ? e && !t.test(e) ? r.ERR_SN : void 0 : r.ERR_SN_EMPTY
        }
      }
    }, members: {idCardCheck: t, getCode: i, check: o}
  })
}), define("global/model/ChargeRecordModel", ["require", "pro", "global/model/BaseList", "global/model/BaseModel"], function (e) {
  var t = (e("pro"), e("global/model/BaseList"), e("global/model/BaseModel")), i = t.extend({
    overrides: {
      data: {
        amount: "",
        code: "1",
        coin: "",
        freeCoin: "",
        from: "",
        nfSize: "",
        orderType: "",
        status: 0,
        time: "",
        url: "",
        isPay: function (e) {
          return 0 == e.status
        },
        isNoPay: function (e) {
          return 1 == e.status
        },
        isExpire: function (e) {
          return 2 == e.status
        }
      }
    }
  });
  return i
}), define("global/model/PagerList", ["require", "pro", "global/model/BaseList"], function (e) {
  function t() {
    this.fetchPage(1)
  }

  function i() {
    this.fetchPage(this.pageTotal || 1)
  }

  function o(e, t) {
    "string" == typeof e ? this._extraData[e] = t : "object" == typeof e && (this._extraData = e)
  }

  function s(e, t) {
    "string" == typeof e ? this._extraData[e] = t : "object" == typeof e && m.mix(this._extraData, e)
  }

  function n() {
    return this._extraData
  }

  function r(e, t) {
    this.nextPage(e, t, !0)
  }

  function a(e, t, i, o) {
    var s = this.Class;
    "number" == typeof e && this.setPageNum(e), this.request({
      api: s.API_FETCH,
      data: m.mix({pageNum: this.pageNum, pageSize: this.pageSize, totalCnt: this.totalCnt}, this.getExtraData()),
      success: function (e) {
        this.setPageTotal(Math.ceil(e[s.KEY_TOTAL_CNT] / e[s.KEY_PAGE_SIZE])), this.setTotalCnt(e[s.KEY_TOTAL_CNT]);
        var i = e[s.KEY_LIST] || [];
        o ? this.push(i) : this.set(i), t && t.call(this, e)
      },
      error: i
    })
  }

  function l(e, t, i) {
    this.setPageNum(this.pageNum + 1) ? this.fetchPage(null, e, t, i) : this.trigger("nonextpage", this.pageNum, this.pageTotal)
  }

  function c(e, t) {
    this.setPageNum(this.pageNum - 1) ? this.fetchPage(null, e, t) : this.trigger("noprevpage", this.pageNum, this.pageTotal)
  }

  function u(e) {
    var t = this.pageTotal, i = (this.pageNum, !1);
    return e && t ? e > 0 && t >= e && (this.pageNum = e, i = !0) : (this.pageNum = e, i = !0), i
  }

  function d(e) {
    this.pageSize = e
  }

  function h(e) {
    this.totalCnt = e
  }

  function g(e) {
    this.pageTotal = e
  }

  var m = e("pro"), p = e("global/model/BaseList"), f = p.extend({
    statics: {
      API_FETCH: "get",
      KEY_LIST: "list",
      KEY_TOTAL_CNT: "totalCnt",
      KEY_PAGE_SIZE: "pageSize",
      KEY_PAGE_NUM: "pageNum"
    },
    members: {
      setPageNum: u,
      setPageSize: d,
      setTotalCnt: h,
      setPageTotal: g,
      setExtraData: o,
      getExtraData: n,
      updateExtraData: s,
      pushPage: r,
      fetchPage: a,
      nextPage: l,
      prevPage: c,
      firstPage: t,
      lastPage: i,
      pageNum: 1,
      pageSize: 10,
      pageTotal: 0,
      totalCnt: 0,
      _extraData: {}
    }
  });
  return f
}), define("global/model/ChargeRecordModelList", ["require", "pro", "global/model/BaseList", "global/model/BaseModel", "global/model/ChargeRecordModel", "global/model/PagerList", "global/model/BankModel"], function (e) {
  function t(e, t, i) {
    this.fetchPage(e, t, i)
  }

  function i() {
    var e = new a;
    return e.getBankList().bankMap
  }

  function o(e, t, i) {
    var o = this;
    return this.request({
      api: "get",
      data: {
        pageNum: e,
        pageSize: o.pageSize,
        region: o.region,
        startTime: o.startTime || null,
        endTime: o.endTime || null
      },
      success: function (e) {
        t && t.call(this, e)
      },
      error: function (e) {
        i && i.call(this, e)
      }
    }), this
  }

  function s(e, t, i) {
    var o = this, s = o.getBankList();
    o.getList(e, function (e) {
      for (var i in e.list)~function (t) {
        void 0 !== s[t] ? e.list[i].from = s[t].name : e.list[i].from = e.list[i].from
      }(e.list[i].from);
      this.set(e.list), t && t.call(this, e)
    }, function (e) {
      i && i.call(this, e.list)
    })
  }

  var n = (e("pro"), e("global/model/BaseList"), e("global/model/BaseModel"), e("global/model/ChargeRecordModel")), r = e("global/model/PagerList"), a = e("global/model/BankModel"), l = r.extend({
    overrides: {
      apis: {get: "/user/charge/get.do"},
      Model: n
    },
    members: {
      fetch: t,
      getBankList: i,
      getList: o,
      convertData: s,
      region: 0,
      pageSize: 10,
      startTime: null,
      endTime: null
    }
  });
  return l
}), define("global/model/ChargeResModel", ["require", "pro", "global/model/BaseModel"], function (e) {
  function t(e, t, i, o) {
    var s = this;
    return this.request({
      api: "check", data: {id: e}, success: function (e) {
        s.set({isWait: !1, coin: e.coin, balanceCoin: e.balanceCoin}), i && i.call(this, e)
      }, error: function (e) {
        s.set({isWait: t}), o && o.call(this)
      }
    }), this
  }

  var i = (e("pro"), e("global/model/BaseModel")), o = i.extend({
    overrides: {
      apis: {
        check: {
          url: "/newpay/recharge/result.do",
          type: "get",
          onResponse: function (e) {
            return {code: 200 == e.code ? 0 : e.code, result: {coin: e.coin, balanceCoin: e.balanceCoin}}
          }
        }
      }, data: {
        coin: null, balanceCoin: null, isSuc: function (e) {
          return e.coin ? !0 : void 0
        }, isWait: !0, isErr: function (e) {
          return e.coin || e.isWait ? void 0 : !0
        }
      }
    }, members: {getRes: t}
  });
  return o
}), define("global/model/CodeModel", ["require", "pro", "global/model/BaseModel"], function (e) {
  function t() {
    return this.get("code").length
  }

  var i = (e("pro"), e("global/model/BaseModel")), o = i.extend({
    overrides: {
      data: {code: [], time: "", multi: 0},
      members: {getCodeCount: t}
    }
  });
  return o
}), define("global/model/CodeModelList", ["require", "pro", "global/model/BaseList", "global/model/CodeModel"], function (e) {
  function t() {
    for (var e = this.getData(), t = [], i = 0; i < e.length; i++)Array.prototype.push.apply(t, e[i].code);
    return t.length
  }

  function i() {
    for (var e = this.getData(), t = [], i = [], o = 0, s = e.length; s > o; o += 1) {
      i = e[o].code;
      for (var n = 0, r = i.length; r > n; n++)t.push(i[n])
    }
    return t
  }

  function o(e, t, i) {
    var o = this;
    this.request({
      api: "get", data: {gid: e.gid, period: e.period, cid: e.cid, rid: e.rid}, success: function (e) {
        o.set(e.list), t && t.call(this, e)
      }, error: i
    })
  }

  var s = (e("pro"), e("global/model/BaseList")), n = e("global/model/CodeModel"), r = s.extend({
    overrides: {
      Model: n,
      apis: {get: "/code/get.do"}
    }, members: {totalCount: null, getTotal: t, getCodes: i, fetch: o}
  });
  return r
}), define("global/model/ShipInfoModel", ["require", "pro", "global/model/BaseModel", "global/model/AddressModel"], function (e) {
  var t = (e("pro"), e("global/model/BaseModel")), i = e("global/model/AddressModel"), o = t.extend({
    statics: {
      STATUS_NO_ADDR: 0,
      STATUS_WAIT_DELIVER: 1,
      STATUS_DELIVERED: 2,
      STATUS_RECEIVED: 3,
      STATUS_OVERDUE: 4,
      STATUS_REIMBURSE: 5,
      STATUS_BARTER: 6,
      STATUS_OVER_ABANDON: 7,
      STATUS_ABANDON_REVIEW: 8,
      STATUS_0_DESC: "待确认收货地址",
      STATUS_1_DESC: "待发货",
      STATUS_2_DESC: "已发货",
      STATUS_3_DESC: "已确认收货",
      STATUS_4_DESC: "已过期",
      STATUS_5_DESC: "用户接受补偿",
      STATUS_6_DESC: "退换货",
      STATUS_7_DESC: "已过期",
      STATUS_8_DESC: "补偿申请审核中"
    },
    overrides: {
      data: {
        status: 0,
        address: i,
        company: null,
        code: "",
        gname: "",
        shiptime: "",
        statusDesc: function (e) {
          var t = "";
          switch (e.status - 0) {
            case 0:
              t = this.Class.STATUS_0_DESC;
              break;
            case 1:
              t = this.Class.STATUS_1_DESC;
              break;
            case 2:
              t = this.Class.STATUS_2_DESC;
              break;
            case 3:
              t = this.Class.STATUS_3_DESC;
              break;
            case 4:
              t = this.Class.STATUS_4_DESC;
              break;
            case 5:
              t = this.Class.STATUS_5_DESC;
              break;
            case 6:
              t = this.Class.STATUS_6_DESC;
              break;
            case 7:
              t = this.Class.STATUS_7_DESC;
              break;
            case 8:
              t = this.Class.STATUS_8_DESC;
              break;
            default:
              t = "其它状态"
          }
          return t
        },
        isNoAddr: function (e) {
          return 0 == e.status
        },
        isWaitDeliver: function (e) {
          return 1 == e.status
        },
        isDelivered: function (e) {
          return 2 == e.status
        },
        isReceived: function (e) {
          return 3 == e.status
        },
        isOverdue: function (e) {
          return 4 == e.status
        },
        isReimburse: function (e) {
          return 5 == e.status
        },
        isBarter: function (e) {
          return 6 == e.status
        },
        isOverAbandon: function (e) {
          return 7 == e.status
        },
        isAbandonReview: function (e) {
          return 8 == e.status
        },
        isAddrConfirmed: function (e) {
          return "" != e.address.name
        },
        isSendEd: function (e) {
          return null != e.company
        }
      }
    }
  });
  return o
}), define("global/model/ConfirmAddressModel", ["require", "pro", "global/model/BaseModel", "global/model/ShipInfoModel", "global/model/AddressModel"], function (e) {
  function t(e, t) {
    this.validate("address") && this.request({
      api: "confirm",
      data: {winId: this.get("winId"), addressId: this.get("address.id")},
      success: e,
      error: t
    })
  }

  var i = (e("pro"), e("global/model/BaseModel")), o = (e("global/model/ShipInfoModel"), e("global/model/AddressModel"));
  return i.extend({
    overrides: {
      apis: {confirm: "/user/ship/submit.do"},
      data: {winId: 0, address: o},
      validators: {
        address: function (e) {
          return e ? void 0 : this.Class.ERR_NO_ADDRESS
        }
      }
    },
    statics: {
      ERR_NO_ADDRESS: "没有选择收货地址",
      CODE_WRONG_ADDRESS: -522,
      CODE_SHIPPING: -523,
      CODE_CONFIRMED_ADDRESS: -526,
      CODE_NEED_IDENTITY: -537,
      CODE_INVALID_IDENTITY: -538,
      CODE_INVALID_IDENTITY_MAX: -539
    },
    members: {confirm: t}
  })
}), define("global/model/ConfirmDeliveryModel", ["require", "pro", "global/model/BaseModel"], function (e) {
  function t(e, t, i) {
    var o = this.from({winId: e});
    return o.confirm(t, i), o
  }

  function i(e, t) {
    this.validate() && this.request({api: "confirm", data: {winId: this.get("winId")}, success: e, error: t})
  }

  var o = (e("pro"), e("global/model/BaseModel"));
  return o.extend({
    overrides: {
      apis: {confirm: "/user/ship/confirm.do"},
      data: {winId: 0},
      validators: {
        winId: function (e) {
          return e ? void 0 : this.Class.NO_WIN_ID
        }
      }
    }, statics: {NO_WIN_ID: "no win id", CODE_NO_SHIPPING: -524, CODE_RECEIVED: -525, confirm: t}, members: {confirm: i}
  })
}), define("global/model/ConfirmMallDeliveryModel", ["require", "pro", "global/model/BaseModel"], function (e) {
  function t(e, t, i) {
    var o = this.from({orderId: e});
    return o.confirm(t, i), o
  }

  function i(e, t) {
    this.validate() && this.request({api: "confirm", data: {orderId: this.get("orderId")}, success: e, error: t})
  }

  var o = (e("pro"), e("global/model/BaseModel"));
  return o.extend({
    overrides: {
      apis: {confirm: "/mall/ship/confirm.do"},
      data: {orderId: 0},
      validators: {
        orderId: function (e) {
          return e ? void 0 : this.Class.NO_ORDER_ID
        }
      }
    },
    statics: {NO_ORDER_ID: "no order id", CODE_NO_SHIPPING: -524, CODE_RECEIVED: -525, confirm: t},
    members: {confirm: i}
  })
}), define("global/model/ContractModel", ["require", "pro", "global/model/BaseModel"], function (e) {
  function t(e) {
    e ? this.Class.isConfirm = !0 : this.Class.isConfirm = !1
  }

  function i(e) {
    var t = e.success, i = e.error;
    this.request({
      api: "confirm", data: this.toData({contains: ["winId", "contractId"]}), success: function () {
        this.Class.isConfirm = !0, t && t.call(this)
      }, error: i
    })
  }

  var o = (e("pro"), e("global/model/BaseModel"));
  return o.extend({
    overrides: {
      data: {
        winId: "",
        id: "",
        versionId: "",
        title: "",
        content: "",
        status: 0,
        refer: "",
        contractId: function (e) {
          return e.id
        }
      }, apis: {confirm: "/user/win/contract/check.do"}
    },
    statics: {isConfirm: !1, CODE_ERR_CONFIRM: -16, TEXT_ERR_CONFIRM: "电子合约确认错误，请稍后再试~"},
    members: {setStatus: t, confirmContract: i}
  })
}), define("global/model/UserModel", ["require", "pro", "global/model/BaseModel", "global/utils/Url"], function (e) {
  function t(e) {
    return r.getUser(e)
  }

  function i(e, t) {
    var i = this;
    this.request({
      api: "get", data: {cid: app.getCID()}, success: function (t) {
        i.set(t), e && e.call(this, t)
      }, error: t
    })
  }

  function o(e, t) {
    return r.getAvatar(this.get("avatarPrefix"), e, t)
  }

  function s(e, t) {
    var i = this;
    i.request({
      api: "getCoin", data: {pid: app.getCID(), ver: "0.0.1"}, success: function (t) {
        i.set("coin", t.coinbalance), i.set("coinLock", t.coinlock), e && e.call(this, t)
      }, error: t
    })
  }

  var n = (e("pro"), e("global/model/BaseModel")), r = e("global/utils/Url"), a = n.extend({
    overrides: {
      apis: {
        get: "/user/info.do",
        getCoin: "/cashier/money/query.do"
      },
      data: {
        cid: "",
        uid: "",
        nickname: "",
        isFirstLogin: 0,
        coin: 0,
        coinLock: 0,
        freeCoin: 0,
        total: 0,
        mobile: "",
        avatarPrefix: "",
        IP: "",
        IPAddress: "",
        smallAvatar: function (e) {
          return this.getAvatarUrl(40, !1)
        },
        middleAvatar: function (e) {
          return this.getAvatarUrl(90, !1)
        },
        largeAvatar: function (e) {
          return this.getAvatarUrl(180, !1)
        },
        defautAvatar_s: function (e) {
          return this.getAvatarUrl(40, !0)
        },
        defautAvatar_m: function (e) {
          return this.getAvatarUrl(90, !0)
        },
        defautAvatar_l: function (e) {
          return this.getAvatarUrl(180, !0)
        },
        url: function (e) {
          return this.Class.getUrl(e.cid)
        }
      }
    }, statics: {getUrl: t}, members: {fetch: i, getAvatarUrl: o, getCoin: s}
  });
  return a
}), define("global/model/PeriodModel", ["require", "pro", "global/model/BaseModel", "global/model/GoodsModel", "global/model/UserModel", "global/enum/DuobaoStatus", "global/utils/Url"], function (e) {
  function t(e, t, i) {
    return d.getDetail(e, t, i)
  }

  function i(e, t) {
    var i = e;
    return i > t && (i = t), i
  }

  function o(e) {
    function t(e) {
      var t = new Date(app.getServerTime());
      return t.setDate(t.getDate() + e), {year: t.getFullYear(), month: t.getMonth() + 1, date: t.getDate()}
    }

    var i = t(0), o = t(-1), s = t(-2), n = e.substring(0, 4) - 0, r = e.substring(5, 7) - 0, a = e.substring(8, 10) - 0;
    return n != i.year ? e.substring(0, 16) : r == i.month && a == i.date ? "今天 " + e.substring(11, 16) : r == o.month && a == o.date ? "昨天 " + e.substring(11, 16) : r == s.month && a == s.date ? "前天 " + e.substring(11, 16) : e.substring(5, 16)
  }

  function s(e) {
    var t = this.get("goods").baseBuyTimes;
    e && (t = e);
    var i = this.get("goods").totalTimes - this.get("existingTimes");
    return t > i && (t = i), t
  }

  function n(e, t, i) {
    var o = this;
    this.request({
      api: "getPeriodInfo", data: e, success: function (e) {
        var i = null;
        i = e.periodIng ? e.periodIng : e.periodWillReveal ? e.periodWillReveal : e.periodWinner, o.set(i), t && t.call(this, i)
      }, error: i
    })
  }

  function r(e, t, i) {
    var o = this;
    this.request({
      api: "getWinner", data: e, success: function (e) {
        o.set(e), t && t.call(this, e)
      }, error: i
    })
  }

  var a = (e("pro"), e("global/model/BaseModel")), l = e("global/model/GoodsModel"), c = e("global/model/UserModel"), u = e("global/enum/DuobaoStatus"), d = e("global/utils/Url"), h = a.extend({
    overrides: {
      data: {
        status: 0,
        isLimit: 0,
        totalPeriod: 0,
        period: 0,
        existingTimes: 0,
        remainTimes: function (e) {
          return e.goods.totalTimes - e.existingTimes
        },
        goods: l,
        listIcons: [],
        lastPeriod: 0,
        cpPeriod: "",
        thirdParty: 0,
        limitTime: 0,
        isJoined: 0,
        duobaoType: 0,
        wishSetted: 0,
        remainTime: 0,
        lotteryTimestamp: 0,
        calcTime: "yyyy-MM-dd hh:mm:ss.sss",
        duobaoTime: "yyyy-MM-dd hh:mm:ss.sss",
        luckyCode: "",
        owner: c,
        ownerAllCode: [],
        ownerCost: 0,
        cpCode: "",
        regularBuy: 1,
        url: function (e) {
          return this.Class.getUrl(e.goods.gid, e.period, e.status)
        },
        percent: function (e) {
          var t = e.existingTimes / e.goods.totalTimes * 100;
          return 1 > t && t > 0 ? 1 : 100 > t && t > 99 ? 99 : Math.round(t)
        },
        iconImage: function (e) {
          var t = "";
          return e.listIcons.length > 0 ? t = e.listIcons[0] : e.goods.icon.length > 0 && (t = e.goods.icon[0]), t
        },
        isOngoing: function (e) {
          return e.status == u.GOING
        },
        isCounting: function (e) {
          return e.status == u.WAITING && 0 == e.ownerCost
        },
        isPublished: function (e) {
          return e.status == u.PUBLISHED || e.ownerCost > 0
        },
        isLotteryError: function (e) {
          return 864e5 == e.remainTime
        },
        isSystemError: !1,
        isLimited: function (e) {
          return 1 == e.isLimit && e.limitTime > 0
        },
        isLimitEnd: function (e) {
          return 1 == e.isLimit && 0 == e.limitTime
        },
        isOutOfStock: function (e) {
          return 1 == e.lastPeriod && e.existingTimes == e.goods.totalTimes
        },
        isFailToGetResult: !1,
        calcTimeFixedToSeconds: function (e) {
          return e.calcTime.substring(0, 19)
        },
        transformedDayTime: function (e) {
          return this.Class.transformDayTime(e.calcTime)
        },
        defaultBuyTimes: function (e) {
          return this.Class.getDefaultBuyTimes(e.goods.baseBuyTimes, e.goods.totalTimes - e.existingTimes)
        }
      }, apis: {getPeriodInfo: "/goods/getPeriod.do", getWinner: "/goods/getWinner.do"}
    },
    statics: {getUrl: t, getDefaultBuyTimes: i, transformDayTime: o},
    members: {getDefaultBuyTimes: s, getPeriod: n, getWinner: r}
  });
  return h
}), define("global/model/MyWinRecordModel", ["require", "pro", "global/model/BaseModel", "global/model/GoodsModel", "global/model/PeriodModel", "global/enum/DuobaoStatus", "global/utils/Utils", "global/utils/Url"], function (e) {
  function t(e, t, i) {
    return l.getShare(e, t, i)
  }

  function i(e, t) {
    return l.getAddShare(e, t)
  }

  function o(e) {
    return l.getWinDetail(e)
  }

  var s = (e("pro"), e("global/model/BaseModel")), n = e("global/model/GoodsModel"), r = e("global/model/PeriodModel"), a = e("global/enum/DuobaoStatus"), l = (e("global/utils/Utils"), e("global/utils/Url")), c = s.extend({
    statics: {
      getUrl: o,
      getShareUrl: t,
      getAddShareUrl: i
    },
    overrides: {
      data: {
        id: 0,
        period: 0,
        goods: n,
        luckyCode: "",
        winTime: "",
        buyTime: "",
        status: 0,
        addrTime: "",
        shipinfo: {},
        shipinfos: [],
        shipTime: "",
        type: 0,
        confirmTime: "",
        share: 0,
        total: 0,
        detailUrl: function (e) {
          return this.Class.getUrl(e.id)
        },
        goodsUrl: function (e) {
          return r.getUrl(e.goods.gid, e.period, a.PUBLISHED)
        },
        shareUrl: function (e) {
          return this.Class.getShareUrl(app.getCID(), e.goods.gid, e.period)
        },
        addShareUrl: function (e) {
          return this.Class.getAddShareUrl(e.goods.gid, e.period)
        },
        isUnconfirmed: function (e) {
          return 0 == e.status
        },
        isConfirmed: function (e) {
          return 1 == e.status
        },
        isShipping: function (e) {
          return 2 == e.status
        },
        isReceived: function (e) {
          return 3 == e.status
        },
        isExpired: function (e) {
          return 4 == e.status
        },
        isPayback: function (e) {
          return 5 == e.status
        },
        isReturns: function (e) {
          return 6 == e.status
        },
        isGiveup: function (e) {
          return 7 == e.status
        },
        isGiveupReviewing: function (e) {
          return 8 == e.status
        },
        isAbnormal: function (e) {
          return e.status >= 4
        },
        isShared: function (e) {
          return 1 == e.share
        },
        emailUrl: function () {
          return l.getEmailEntry(app.getUID())
        }
      }
    }
  });
  return c
}), define("global/model/ShareModel", ["require", "pro", "global/model/BaseModel", "global/model/UserModel", "global/model/MyWinRecordModel", "global/utils/Url", "global/utils/Utils"], function (e) {
  function t(e) {
    var t = this.getRaw("images");
    t.push(e), this.set("images", t)
  }

  function i(e, t, i) {
    this.request({
      api: "delPic",
      data: {gid: this.get("gid"), period: this.get("period"), image: e},
      success: t,
      error: i
    })
  }

  function o(e, t) {
    this.request({api: "upload", data: {gid: this.get("gid"), period: this.get("period")}, success: e, error: t})
  }

  function s(e, t) {
    this.request({
      api: "submit",
      data: {gid: this.get("gid"), period: this.get("period"), title: this.get("title"), content: this.get("content")},
      success: e,
      error: t
    })
  }

  var n = (e("pro"), e("global/model/BaseModel")), r = e("global/model/UserModel"), a = e("global/model/MyWinRecordModel"), l = e("global/utils/Url"), c = e("global/utils/Utils"), u = n.extend({
    statics: {
      ERR_NO_TITLE: "请填写晒单主题",
      ERR_NO_CONTENT: "请填写幸运感言",
      ERR_NO_LESS_SIX_TITLE: "不能少于6个字",
      ERR_NO_LESS_FIFTY_CONTENT: "不能少于30个字",
      ERR_NO_MORE_SIXTEEN_TITLE: "不能超过16个字",
      ERR_NO_MORE_ONETHOUSAND_CONTENT: "不能超过1000个字",
      ERR_NO_LESS_THREE_IMAGES: "至少上传3张图片"
    },
    overrides: {
      data: {
        title: "",
        content: "",
        images: [],
        author: r,
        date: "",
        winRecord: a,
        status: 0,
        isMyself: function (e) {
          return app.getCID() == e.author.cid
        },
        smallPics: function (e) {
          for (var t = [], i = 0; i < e.images.length; i++)t.push(e.images[i] + "s.jpg");
          return t
        },
        middlePics: function (e) {
          for (var t = [], i = 0; i < e.images.length; i++)t.push(e.images[i] + "m.jpg");
          return t
        },
        largePics: function (e) {
          for (var t = [], i = 0; i < e.images.length; i++)t.push(e.images[i] + "l.jpg");
          return t
        },
        firstSmallPic: function (e) {
          return e.images[0] + "s.jpg"
        },
        firstMiddlePic: function (e) {
          return e.images[0] + "m.jpg"
        },
        firstLargePic: function (e) {
          return e.images[0] + "l.jpg"
        },
        sharePic_m: function (e) {
          for (var t = [], i = 0; 3 > i; i++)t.push(e.images[i] + "l.jpg");
          return t
        },
        statusText: function (e) {
          var t = {};
          switch (e.status) {
            case 0:
              t.flag = "toAudit", t.desc = "等待审核";
              break;
            case 1:
              t.flag = "txt-suc", t.desc = "审核通过";
              break;
            case 2:
              t.flag = "txt-impt", t.desc = "审核不通过";
              break;
            default:
              t.flag = "toAudit", t.desc = "等待审核"
          }
          return t
        },
        shareDetailPage: function (e) {
          return l.getShare(e.author.cid, e.winRecord.goods.gid, e.winRecord.period)
        },
        abbContent: function (e) {
          var t = e.content;
          return t = t.length > 150 ? t.substring(0, 150) + "..." : t
        },
        abbContent_m: function (e) {
          var t = e.content;
          return t = t.length > 50 ? t.substring(0, 50) + "..." : t
        },
        dateInShow: function (e) {
          return e.date.split(" ")[0].slice(5) + " " + e.date.split(" ")[1].slice(0, 5)
        }
      },
      apis: {
        addPic: "/user/share/addPic.do",
        delPic: "/user/share/picDel.do",
        upload: "/user/share/picUpload.do",
        submit: "post:/user/share/submit.do"
      },
      validators: {
        title: function (e) {
          var t = c.stringLen(e);
          return e ? 12 > t ? this.Class.ERR_NO_LESS_SIX_TITLE : t > 32 ? this.Class.ERR_NO_MORE_SIXTEEN_TITLE : void 0 : this.Class.ERR_NO_TITLE
        }, content: function (e) {
          var t = c.stringLen(e);
          return e ? 60 > t ? this.Class.ERR_NO_LESS_FIFTY_CONTENT : t > 2e3 ? this.Class.ERR_NO_MORE_ONETHOUSAND_CONTENT : void 0 : this.Class.ERR_NO_CONTENT
        }, images: function (e) {
          return e.length < 3 ? this.Class.ERR_NO_LESS_THREE_IMAGES : void 0
        }
      }
    },
    members: {addPic: t, delPic: i, upload: o, submit: s}
  });
  return u
}), define("global/model/DetailShareModelList", ["require", "pro", "global/model/ShareModel", "global/model/PagerList"], function (e) {
  function t(e, t, i) {
    this.fetchPage(e, t, i)
  }

  var i = (e("pro"), e("global/model/ShareModel")), o = e("global/model/PagerList");
  return o.extend({overrides: {Model: i, apis: {get: "/share/getList.do"}}, members: {fetch: t}})
}), define("global/model/MultiRecordModel", ["require", "pro", "global/model/BaseModel", "global/model/GoodsModel"], function (e) {
  var t = (e("pro"), e("global/model/BaseModel")), i = e("global/model/GoodsModel"), o = t.extend({
    overrides: {
      data: {
        recordType: "multi",
        id: null,
        type: 0,
        status: 1,
        duobaoNum: 0,
        periodNum: 0,
        remainNum: 0,
        time: "",
        goods: i,
        isTen: function (e) {
          return 10 == e.goods.buyUnit
        },
        isExpire: function (e) {
          return 0 == e.status
        },
        isPerioding: function (e) {
          return 1 == e.status
        },
        isCancel: function (e) {
          return 2 == e.status
        }
      }
    }
  });
  return o
}), define("global/model/DuobaoRecordModel", ["require", "pro", "global/model/BaseModel", "global/model/GoodsModel", "global/utils/Url"], function (e) {
  var t = (e("pro"), e("global/model/BaseModel")), i = e("global/model/GoodsModel"), o = e("global/utils/Url"), s = t.extend({
    overrides: {
      data: {
        recordType: "normal",
        period: 0,
        type: 0,
        num: 1,
        status: 0,
        goods: i,
        existingTimes: 0,
        codes: [],
        isMulti: !1,
        calcTime: "",
        ownerId: "",
        ownerName: "",
        luckyCode: "",
        ownerTotal: "",
        saleOff: !1,
        ownerUrl: function (e) {
          return o.getUser(e.ownerId)
        },
        goodsUrl: function (e) {
          return o.getDetail(e.goods.gid, e.period)
        },
        isExpire: function (e) {
          return 0 == e.status
        },
        isPerioding: function (e) {
          return 1 == e.status
        },
        iswillReveal: function (e) {
          return 2 == e.status
        },
        isRevealed: function (e) {
          return 3 == e.status
        },
        isShowPreprogress: function (e) {
          return 1 == e.status || 2 == e.status
        },
        isTen: function (e) {
          return 10 == e.goods.buyUnit
        },
        isFree: function (e) {
          return 2 == e.type
        },
        isLimit: function (e) {
          return 1 == e.type
        },
        percent: function (e) {
          if (1 == e.status || 2 == e.status) {
            var t = e.existingTimes / e.goods.totalTimes * 100;
            return 100 == t ? "100%" : t > 98 ? t.toFixed(2) + "%" : Math.round(t) + "%"
          }
          return null
        },
        remain: function (e) {
          return 1 == e.status || 2 == e.status ? e.goods.totalTimes - e.existingTimes : null
        },
        isMyWin: function (e) {
          var t = "";
          try {
            t = userFrame.getCid()
          } catch (i) {
          }
          return t == e.ownerId
        }
      }
    }
  });
  return s
}), define("global/model/DuobaoOrderModel", ["require", "pro", "global/model/BaseModel", "global/model/BaseList", "global/model/MultiRecordModel", "global/model/DuobaoRecordModel"], function (e) {
  var t = (e("pro"), e("global/model/BaseModel")), i = e("global/model/BaseList"), o = e("global/model/MultiRecordModel"), s = e("global/model/DuobaoRecordModel"), n = t.extend({
    overrides: {
      data: {
        code: null,
        price: 0,
        status: 1,
        time: "",
        payUrl: "",
        record: i.extend({overrides: {Model: s}}),
        multi: i.extend({overrides: {Model: o}}),
        isPayAble: function (e) {
          return 1 === e.status
        }
      }
    }
  });
  return n
}), define("global/model/DuobaoOrderModelList", ["require", "pro", "global/model/PagerList", "global/model/DuobaoOrderModel"], function (e) {
  function t(e, t, i) {
    this.fetchPage(e, t, i)
  }

  var i = (e("pro"), e("global/model/PagerList")), o = e("global/model/DuobaoOrderModel"), s = i.extend({
    overrides: {
      apis: {get: "/user/order/list.do"},
      Model: o
    }, members: {fetch: t}
  });
  return s
}), define("global/model/DuobaoRecordModelList", ["require", "pro", "global/model/PagerList", "global/model/DuobaoRecordModel"], function (e) {
  function t(e, t, i) {
    this.fetchPage(e, t, i)
  }

  var i = (e("pro"), e("global/model/PagerList")), o = e("global/model/DuobaoRecordModel"), s = i.extend({
    overrides: {
      apis: {get: "/user/duobaoRecord/get.do"},
      Model: o
    }, members: {fetch: t}
  });
  return s
}), define("global/model/FileUploadModel", ["require", "pro", "global/model/BaseModel", "global/utils/Utils"], function (e) {
  function t(e) {
    var t = r.isArray(e), i = this.get("fileType").join("|"), o = new RegExp("\\.(?:\\w+)$", "i"), s = i ? new RegExp("\\.(?:" + i + ")$", "i") : o, n = this.get("isFlashUpload") ? this.get("multiple") : 1, a = 0, l = 0, c = "", u = "", d = [], h = [];
    return t ? (a = e.length, a > 0 ? n >= a ? (r.each(e, function (e) {
      u = e.name, l = e.size / 1024 / 1024, c = o.test(u) ? o.exec(u)[0] : "", s.test(c) ? l > this.get("maxSize") && h.push(e) : d.push(e)
    }, this), h.length > 0 && d.length > 0 ? (d = [], h = [], this.Class.TEXT_ERR_FILES) : h.length > 0 ? (h = [], this.Class.TEXT_ERR_FILESSIZE) : d.length > 0 ? (d = [], this.Class.TEXT_ERR_FILESFORMAT) : void 0) : this.Class.TEXT_ERR_FILESAMOUNT : this.Class.TEXT_ERR_FILESEMPTY) : this.Class.TEXT_ERR_PARAM
  }

  function i(e) {
    var t = e.flash, i = e.files, o = e.data || {}, s = i[0].id, n = app.getHost() + this._getApi("idcardpicupload").url;
    o["Content-Type"] = "multipart/form-data", this.Class.isUploading = !0, t.startUpload(s, n, o)
  }

  function o(e) {
    var t = e.file, i = e.success, o = e.error, s = e.complete;
    this.Class.isUploading = !0, this.ajaxUpload({
      file: t, success: function (e) {
        this.Class.isUploading = !1, e.code == this.Class.CODE_UPLOAD_SUCCESS ? i && i.call(this, e.result) : e.code == this.Class.CODE_ERR_NOT_LOGIN ? YyHelper.exec("login") : o && o.call(this, e)
      }, error: function (e) {
        this.Class.isUploading = !1, o && o.call(this, e)
      }, complete: function () {
        this.Class.isUploading = !1, s && s.call(this)
      }
    })
  }

  function s(e) {
    var t = this, i = new XMLHttpRequest, o = this._getApi("idcardpicupload"), s = o.type || "post", n = o.url, a = e.success, l = e.error, c = e.complete, u = e.file, d = this.get("uploadParams"), h = !0, g = new FormData;
    r.each(d, function (e, t) {
      g.append(t, e)
    }, this), g.append("Filedata", u), i.open(s, n, h), i.setRequestHeader("Accept", "*/*"), i.setRequestHeader("Cache-Control", "no-cache"), i.onreadystatechange = function () {
      var e = i.readyState, o = 4 == e;
      if (o)if (c && c.call(t), i.status >= 200 && i.status < 400) {
        try {
          var s = r.parseJSON(i.responseText)
        } catch (n) {
          throw l && l.call(t, i.responseText), n
        }
        a && a.call(t, s)
      } else l && l.call(t, i.status, i.responseText)
    };
    try {
      i.send(g)
    } catch (m) {
      throw m
    }
  }

  var n = (e("pro"), e("global/model/BaseModel")), r = e("global/utils/Utils");
  return n.extend({
    overrides: {
      data: {
        isFlashReady: !1,
        isUploading: !1,
        isFlashUpload: !1,
        fileType: [],
        multiple: 1,
        maxSize: 5,
        isUploaded: 0
      },
      apis: {idcardpicupload: "post:/user/win/picupload.do", sharepicupload: "/user/share/picUpload.do"},
      validators: {
        filesCheck: function (e) {
          return this.checkFiles(e)
        }
      }
    },
    statics: {
      isUploading: !1,
      isUploaded: !1,
      CODE_UPLOAD_SUCCESS: 0,
      CODE_ERR_NOT_LOGIN: -1,
      CODE_ERR_UPLOAD: -16,
      TEXT_ERR_UPLOAD: "文件上传错误，请稍后重新上传~",
      TEXT_ERR_FILESAMOUNT: "每次只能上传一个文件/图片~",
      TEXT_ERR_FILESEMPTY: "您未选择文件！",
      TEXT_ERR_PARAM: "参数错误，请稍后再试！",
      TEXT_ERR_FILES: "您上传的文件有误，请重新上传！",
      TEXT_ERR_FILESFORMAT: "您上传的文件格式不正确，请重新上传~",
      TEXT_ERR_FILESSIZE: "您上传的文件大于5M，请重新上传~",
      TEXT_ERR_FILEUPLOADING: "文件正在上传！请稍后再操作！"
    },
    members: {checkFiles: t, fileUploadByFlash: i, fileUploadByHtml5: o, ajaxUpload: s}
  })
}), define("global/model/GoodsHistoryModelList", ["require", "pro", "global/model/BaseList", "global/model/GoodsModel", "global/utils/Cookie"], function (e) {
  function t(e, t, i) {
    var e = "" + e, o = n.get(this.Class.VIEW_HISTORY_KEY) || "", s = [];
    "" != o && (s = o.split("|"));
    for (var r = 0, a = s.length; a > r; r += 1)if (e == s[r])return void(i && i.call(this, o));
    s.unshift(e), s.length > this.Class.MAX_VIEW_HISTORY_LENGTH && s.pop(), o = s.join("|"), n.set(this.Class.VIEW_HISTORY_KEY, o, this.Class.VIEW_HISTORY_DURATION), t && t.call(this, o)
  }

  function i(e, t) {
    this.request({
      api: "get", data: {gids: n.get(this.Class.VIEW_HISTORY_KEY)}, success: function (t) {
        this.set(t.list), e && e.call(this, t)
      }, error: function () {
        t && t.call(this)
      }
    })
  }

  var o = (e("pro"), e("global/model/BaseList")), s = e("global/model/GoodsModel"), n = e("global/utils/Cookie"), r = o.extend({
    statics: {
      VIEW_HISTORY_KEY: "viewhst",
      MAX_VIEW_HISTORY_LENGTH: 9,
      VIEW_HISTORY_DURATION: "d365"
    }, overrides: {Model: s, apis: {get: "/goods/history.do"}}, members: {add: t, fetch: i}
  });
  return r
}), define("global/model/GoodsModelList", ["require", "pro", "global/model/BaseList", "global/model/GoodsModel"], function (e) {
  function t(e, t, i) {
    this.request({
      api: "query", data: {gid: e}, success: function (e) {
        this.set(e), t && t.call(this, e)
      }, error: i
    })
  }

  var i = (e("pro"), e("global/model/BaseList")), o = e("global/model/GoodsModel"), s = i.extend({
    overrides: {
      Model: o,
      apis: {query: "/goods/query.do"}
    }, statics: {}, members: {fetch: t}
  });
  return s
}), define("global/model/GoodsRecommendList", ["require", "pro", "global/model/PagerList", "global/model/PeriodModel"], function (e) {
  function t() {
    var e, t = this;
    if (null == t._pageNum)e = 1; else if (1 == t._pageNumTotal)e = 1; else {
      for (var i = [], o = 0; o < t._pageNumTotal; o++)o + 1 != t._pageNum && i.push(o + 1);
      var s = Math.floor(Math.random() * i.length);
      e = i[s]
    }
    return e
  }

  function i(e, t) {
    this.fetch(this.getPageNumRan(), e, t)
  }

  function o(e, t, i) {
    var o = this;
    this.fetchPage(e, function (e) {
      o._pageNum = o.pageNum, o._pageNumTotal = o.pageTotal, t && t.call(o, e)
    }, i)
  }

  var s = (e("pro"), e("global/model/PagerList")), n = e("global/model/PeriodModel"), r = s.extend({
    overrides: {
      Model: n,
      apis: {get: "/goods/rcmd.do"}
    }, members: {_pageNum: null, _pageNumTotal: null, fetch: o, randomFetch: i, getPageNumRan: t}
  });
  return r
}), define("global/model/GroupBonusModel", ["require", "pro", "global/model/BaseModel"], function (e) {
  function t(e) {
    this.applySuper(arguments)
  }

  var i = (e("pro"), e("global/model/BaseModel")), o = i.extend({
    constructor: t,
    overrides: {
      data: {
        id: "",
        name: "",
        expire: "",
        amount: 0,
        status: 0,
        shareTimes: 0,
        shareTotal: 0,
        shareLinks: {},
        shareText: "",
        description: "",
        img: "",
        isFinish: function (e) {
          return 2 == e.status
        },
        isExpired: function (e) {
          return 3 == e.status
        },
        hasShared: function (e) {
          return e.shareTimes > 0
        }
      }
    },
    statics: {}
  });
  return o
}), define("global/model/GroupBonusModelList", ["require", "pro", "global/model/BaseList", "global/model/GroupBonusModel"], function (e) {
  function t(e, t, i) {
    var o = this;
    e.pageSize = e.pageSize ? e.pageSize : this.pageSize, this.request({
      api: "get", data: e, success: function (e) {
        o.formatData(e.list), o.set(e.list), o.totalCnt = e.totalCnt, t && t.call(this, e)
      }, error: i
    })
  }

  function i(e) {
    for (var t = e, i = 0, o = t.length; o > i; i++) {
      var s = t[i];
      s.isEven = i % 2 == 1
    }
    return t
  }

  var o = (e("pro"), e("global/model/BaseList")), s = e("global/model/GroupBonusModel"), n = o.extend({
    overrides: {
      Model: s,
      apis: {get: "/qun/coupons/list.do"}
    }, members: {fetch: t, formatData: i, pageSize: 10, pageNum: 1}
  });
  return n
}), define("global/model/HistoryModel", ["require", "pro", "global/model/BaseModel", "global/model/UserModel", "global/enum/DuobaoStatus", "global/utils/Url"], function (e) {
  function t(e, t, i) {
    return n.getDetail(e, t, i)
  }

  var i = (e("pro"), e("global/model/BaseModel")), o = e("global/model/UserModel"), s = e("global/enum/DuobaoStatus"), n = e("global/utils/Url"), r = i.extend({
    overrides: {
      data: {
        gid: 0,
        period: 0,
        remainTime: 0,
        calcTime: "yyyy-MM-dd hh:mm:ss.sss",
        duobaoTime: "yyyy-MM-dd hh:mm:ss.sss",
        luckyCode: "",
        owner: o,
        cost: 0,
        url: function (e) {
          return this.Class.getUrl(e.gid, e.period, e.status)
        },
        status: function (e) {
          return e.cost > 0 ? s.PUBLISHED : e.remainTime > 0 ? s.WAITING : void 0
        },
        isCounting: function (e) {
          return e.remainTime > 0 && 0 == e.cost
        },
        isPublished: function (e) {
          return e.cost > 0
        },
        isLotteryError: function (e) {
          return 864e5 == e.remainTime
        },
        isSystemError: !1
      }, apis: {}
    }, statics: {getUrl: t}, members: {}
  });
  return r
}), define("global/model/HistoryModelList", ["require", "pro", "global/model/PagerList", "global/model/HistoryModel"], function (e) {
  function t(e, t, i) {
    this.fetchPage(e, t, i)
  }

  function i() {
    this.each(function (e, t) {
      e.set("gid", this._extraData.gid)
    })
  }

  var o = (e("pro"), e("global/model/PagerList")), s = e("global/model/HistoryModel"), n = o.extend({
    overrides: {
      Model: s,
      apis: {get: "/win/getList.do"}
    }, members: {fetch: t, onSet: i}
  });
  return n
}), define("global/model/IndexShareModelList", ["require", "pro", "global/model/ShareModel", "global/model/PagerList"], function (e) {
  function t(e, t, i) {
    this.fetchPage(e, t, i)
  }

  var i = (e("pro"), e("global/model/ShareModel")), o = e("global/model/PagerList");
  return o.extend({overrides: {Model: i, apis: {get: "/global/share/list.do"}}, members: {fetch: t}})
}), define("global/model/LocalCartModel", ["require", "pro", "global/utils/Cookie", "global/model/CartModel"], function (e) {
  function t(e, t) {
    var i = this;
    this.getNest("info.goods").query(function () {
      e && e.call(i)
    }, function () {
      t && t.call(i)
    })
  }

  function i(e, t) {
    var i = this.Class, s = o.get(i.COOKIE_KEY) || "", n = new RegExp("(" + this.get("info.goods.gid") + "):(\\d+):(\\d+):(\\d+)(?:,|$)");
    n.test(s) && (s = s.replace(n, ""), o.set(i.COOKIE_KEY, s), e && e.call(this), this.destroy())
  }

  var o = (e("pro"), e("global/utils/Cookie")), s = e("global/model/CartModel"), n = s.extend({
    overrides: {del: i},
    members: {query: t},
    statics: {COOKIE_KEY: "cart_2"}
  });
  return n
}), define("global/model/LocalCartModelList", ["require", "pro", "global/utils/Cookie", "global/model/CartModel", "global/model/CartModelList", "global/model/LocalCartModel", "global/model/GoodsModelList", "global/utils/Utils", "global/model/BaseList"], function (e) {
  function t(e) {
    e = e || new a;
    var t = [];
    this.each(function (e) {
      t.push({id: e.get("info.gid"), period: e.get("info.period"), num: e.get("num"), regularBuy: e.get("regularBuy")})
    }), e.add(t), r.set(l.COOKIE_KEY, "")
  }

  function i(e, t, i, o) {
    var s = this;
    if (e instanceof Array)return u.each(e, function (e) {
      this.add(e, null, null, !0)
    }, this), void this.query();
    var n = e.id, a = e.period, c = e.num || 1, d = e.regularBuy || 1, h = r.get(l.COOKIE_KEY) || "", g = new RegExp("(" + n + "):(\\d+):(\\d+):(\\d+)(?=,|$)");
    if (n && a && c && d) {
      if (g.test(h)) {
        var m = c;
        h = h.replace(g, function (e, t, i, o) {
          return m = c + (o - 0), [t, i, m, d].join(":")
        }), this.find({"info.gid": n}, function (e) {
          e.set({num: m}), s.trigger("change")
        })
      } else {
        h += (h ? "," : "") + [n, a, c, d].join(":");
        var p = this.createModel(n, a, c, d);
        o ? this.push(p) : p.query(function () {
          s.push(this)
        })
      }
      try {
        r.set(l.COOKIE_KEY, h), t && t.call(this)
      } catch (f) {
        i && i.call(this)
      }
    }
  }

  function o(e, t, i) {
    var o = r.get(l.COOKIE_KEY) || "", s = [];
    if (this.__requested = !0, e = e !== !1, o)for (var n = o.split(","), a = 0, c = n.length; c > a; a++) {
      var u = n[a].split(":"), d = u[0], h = u[1] - 0, g = u[2] - 0, m = u[3] - 0;
      s.push(this.createModel(d, h, g, m)), this.set(s)
    } else this.set(s);
    e && this.query()
  }

  function s() {
    var e = this, t = new c, i = [];
    this.each(function (e) {
      i.push(e.get("info.gid"))
    }), t.fetch(i.join(","), function (t) {
      u.each(t, function (t, i) {
        var o = e.get(i);
        o && o.set({info: {goods: t}})
      }), e.trigger("change")
    })
  }

  function n(e, t, i, o) {
    return l.from({info: {gid: e - 0, period: t, goods: {gid: e}}, num: i, regularBuy: o})
  }

  var r = (e("pro"), e("global/utils/Cookie")), a = (e("global/model/CartModel"), e("global/model/CartModelList")), l = e("global/model/LocalCartModel"), c = e("global/model/GoodsModelList"), u = e("global/utils/Utils"), d = (e("global/model/BaseList"), a.extend({
    overrides: {
      Model: l,
      add: i,
      fetch: o
    }, members: {sync: t, createModel: n, query: s}
  }));
  return d
}), define("global/model/LoginModel", ["require", "pro", "global/model/BaseModel", "global/utils/Location"], function (e) {
  function t(e) {
    var t = "", i = (window.location.host, this.Class.THIRD_PARTY_MAP), o = s.getParam("url"), n = top.location.href;
    if (o)var r = encodeURIComponent(o); else var r = encodeURIComponent(n);
    return e in i && (t = "http://reg.163.com/outerLogin/oauth2/connect.do?target=" + i[e] + "&amp;product=mail_one&amp;url=" + r + "&amp;url2=" + r), t
  }

  function i() {
    this.request({api: "submit", data: this.toData()})
  }

  var o = (e("pro"), e("global/model/BaseModel")), s = e("global/utils/Location"), n = o.extend({
    statics: {
      ERR_NO_USERNAME: "请输入帐号",
      ERR_NO_PASSWORD: "请输入密码",
      ERR_INVALID_URL: "",
      THIRD_PARTY_MAP: {qq: 1, weixin: 13, weibo: 3}
    },
    overrides: {
      apis: {submit: "submit:https://reg.163.com/logins.jsp"},
      data: {
        username: "",
        password: "",
        product: "mail163",
        url: window.location.href,
        savelogin: 0,
        isNTES: function () {
          return app.isNTES()
        },
        thirdPartyUrl: function () {
          var e = this.Class.THIRD_PARTY_MAP, t = {};
          for (var i in e)t[i] = this.getThirdPartyUrl(i);
          return t
        }
      },
      validators: {
        username: function (e) {
          return e ? void 0 : this.Class.ERR_NO_USERNAME
        }, password: function (e) {
          return e ? void 0 : this.Class.ERR_NO_PASSWORD
        }, url: function (e) {
          return e && !/^https?:\/\/(?:[^\/]+\.)?(?:163\.com|126\.com|yeah\.net|188\.com)(?=\/|$)/.test(e) ? this.Class.ERR_INVALID_URL : void 0
        }
      }
    },
    members: {submit: i, getThirdPartyUrl: t}
  });
  return n
}), define("global/model/MallGoodsModel", ["require", "pro", "global/model/BaseModel", "global/model/GoodsModel"], function (e) {
  function t(e, t, i) {
    var o = this;
    this.request({
      api: "get", data: {gid: e}, success: function (e) {
        o.set(e), t && t.call(o, e)
      }, error: i
    })
  }

  var i = (e("pro"), e("global/model/BaseModel")), o = e("global/model/GoodsModel"), s = i.extend({
    overrides: {
      data: {
        gid: 0,
        mgid: "",
        goods: o,
        discount: 0,
        price: 0,
        status: 0,
        available: 0,
        stocksDesc: "",
        isOutOfStock: function (e) {
          return e.status == this.Class.STATUS_OUT_OF_STOCK || e.available <= 0
        },
        isOneGoods: function (e) {
          return e.status == this.Class.STATUS_EXPIRED
        },
        isReady: function (e) {
          return e.status == this.Class.STATUS_READY
        }
      }, apis: {get: "/mall/goodsinfo.do"}
    }, statics: {STATUS_READY: 0, STATUS_ONGOING: 1, STATUS_OUT_OF_STOCK: -1, STATUS_EXPIRED: -2}, members: {fetch: t}
  });
  return s
}), define("global/model/OrderGoodsModelList", ["require", "pro", "global/utils/Url", "global/model/BaseModel", "global/model/BaseList", "global/model/GoodsModel"], function (e) {
  var t = (e("pro"), e("global/utils/Url")), i = e("global/model/BaseModel"), o = e("global/model/BaseList"), s = e("global/model/GoodsModel");
  return o.extend({
    overrides: {
      Model: i.extend({
        overrides: {
          data: {
            gid: 0,
            goods: s,
            amount: 0,
            available: 0,
            desc: "",
            detailUrl: "",
            price: 0,
            originalPrice: "",
            total: function (e) {
              return ((this.get("priceInYuan") - 0) * e.amount).toFixed(2)
            },
            priceInYuan: function (e) {
              return (e.price / 100).toFixed(2)
            },
            originalPriceInYuan: function (e) {
              return (e.originalPrice / 100).toFixed(2)
            },
            goodsUrl: function (e) {
              return e.detailUrl ? e.detailUrl : e.goods.url
            },
            orderUrl: function (e) {
              return t.getMallOrder(e.goods.gid, 1)
            },
            hasOriginalPrice: function (e) {
              return e.price != e.originalPrice
            }
          }
        }
      })
    }
  })
}), define("global/model/MallRecordModel", ["require", "pro", "global/model/BaseModel", "global/model/BaseList", "global/model/OrderGoodsModelList", "global/utils/Url", "global/utils/Utils"], function (e) {
  function t(e, t) {
    this.request({api: "close", data: {orderId: this.get("orderId")}, success: e, error: t})
  }

  function i(e, t) {
    this.request({api: "confirm", data: {orderId: this.get("orderId")}, success: e, error: t})
  }

  function o(e, t) {
    this.request({
      api: "check", data: {orderId: this.get("orderId")}, success: function (t) {
        this.set({payUrl: t.url, payStatus: t.payStatus}), e && e.call(this)
      }, error: t
    })
  }

  function s(e, t) {
    this.request({
      api: "detail",
      data: {orderId: this.get("orderId"), interests: this.get("interests")},
      success: function (t) {
        this.set(t), this.trigger("fetch"), e && e.call(this)
      },
      error: t
    })
  }

  function n(e) {
    return "/user/mallDetail.do?orderId=" + e
  }

  var r = (e("pro"), e("global/model/BaseModel")), a = e("global/model/BaseList"), l = e("global/model/OrderGoodsModelList"), c = e("global/utils/Url"), u = e("global/utils/Utils"), d = r.extend({
    overrides: {
      apis: {
        detail: "/mall/order/detail.do",
        check: "/mall/order/check.do",
        confirm: "/mall/ship/confirm.do",
        close: "/mall/order/close.do"
      },
      data: {
        orderId: "",
        status: 0,
        checkTime: 0,
        createTime: 0,
        expiresTime: 0,
        cost: 0,
        money: 0,
        bmoney: 0,
        carriage: 0,
        itemList: l.extend({
          overrides: {
            Model: l.Model.extend({
              mixes: {
                data: {
                  priceInYuan: function () {
                    return this.get("price").toFixed(2)
                  }, originalPriceInYuan: function () {
                    return this.get("originalPrice").toFixed(2)
                  }
                }
              }
            })
          }
        }),
        couponList: [],
        shipInfoList: a,
        deliverAddress: "",
        interests: "1111",
        payUrl: "",
        payStatus: 0,
        total: function () {
          return this.get("cost")
        },
        showCouponCost: function (e) {
          var t = 0, i = 0;
          return u.each(e.couponList, function (e) {
            1 == e.type && (i += e.money), t += e.money
          }), {all: (t / 100).toFixed(2), bonus: (i / 100).toFixed(2), other: ((t - i) / 100).toFixed(2)}
        },
        showCarriage: function (e) {
          return (e.carriage / 100).toFixed(2)
        },
        showCost: function (e) {
          return (e.cost / 100).toFixed(2)
        },
        showMoney: function (e) {
          return (e.money / 100).toFixed(2)
        },
        showAddress: function (e) {
          var t = e.deliverAddress;
          return t ? [t.name, t.mobile, t.province, t.city, t.district, t.address].join(" ") : void 0
        },
        showCheckTime: function (e) {
          return e.checkTime > 0 && u.formatDate(new Date(e.checkTime))
        },
        showCreateTime: function (e) {
          return u.formatDate(new Date(e.createTime))
        },
        orderDetailUrl: function (e) {
          return this.Class.getUrl(e.orderId)
        },
        orderUrl: function (e) {
          return c.getMallOrder(e.orderId, 1)
        },
        isNotPaid: function (e) {
          return 0 == e.status
        },
        isPaid: function (e) {
          return 2 == e.status
        },
        isExpired: function (e) {
          return -2 == e.status
        },
        isCanceled: function (e) {
          return -1 == e.status
        },
        isWaiting: function (e) {
          return 11 == e.status
        },
        isShipping: function (e) {
          return 12 == e.status
        },
        isReceived: function (e) {
          return 13 == e.status
        },
        afterPay: function (e) {
          return e.status >= 2
        },
        afterShip: function (e) {
          return e.status >= 12
        },
        isInvalid: function (e) {
          return e.status < 0
        },
        isNotPayOrInvalid: function (e) {
          return e.status <= 0
        },
        remainTime: function (e) {
          return e.expiresTime - app.getServerTime()
        }
      }
    }, statics: {getUrl: n}, members: {fetch: s, check: o, confirm: i, close: t}
  });
  return d
}), define("global/model/MallRecordModelList", ["require", "pro", "global/model/PagerList", "global/model/MallRecordModel"], function (e) {
  function t() {
    this.applySuper(arguments), this.setExtraData("interests", this.getInterests())
  }

  function i(e, t) {
    this._interests[e] = t ? 1 : 0, this.setExtraData("interests", this.getInterests())
  }

  function o() {
    return this._interests.join("")
  }

  function s(e) {
    this.setInterests(3, e)
  }

  function n(e) {
    this.setInterests(2, e)
  }

  function r(e) {
    this.setInterests(1, e)
  }

  function a(e) {
    this.setInterests(0, e)
  }

  function l(e, t, i) {
    this.fetchPage(e, function (e) {
      t && t.call(this, e)
    }, i)
  }

  var c = (e("pro"), e("global/model/PagerList")), u = e("global/model/MallRecordModel"), d = c.extend({
    constructor: t,
    overrides: {Model: u, apis: {get: "/mall/order/list.do"}},
    members: {
      fetch: l,
      needDetail: s,
      needCoupon: n,
      needAddress: r,
      needShip: a,
      setInterests: i,
      getInterests: o,
      _interests: [1, 1, 1, 1]
    }
  });
  return d
}), define("global/model/MallListModel", ["require", "pro", "global/model/BaseModel", "global/model/MallRecordModelList"], function (e) {
  function t(e) {
    var t = this.getList();
    this.status = e, t.setTotalCnt(0), t.setExtraData("status", e)
  }

  function i(e) {
    var t = this.getList();
    this.region = e, t.setTotalCnt(0), t.setExtraData("region", e)
  }

  function o() {
    return this.getNest("records")
  }

  function s(e, t, i) {
    var o = this;
    this.getList().fetch(e, function (e) {
      o.set({
        notPaid: e.payCnt,
        notDelivery: e.deliveryCnt,
        notReceive: e.confirmCnt,
        received: e.receivedCnt
      }), o.trigger("fetch", e), t && t.call(o)
    }, i)
  }

  var n = (e("pro"), e("global/model/BaseModel")), r = e("global/model/MallRecordModelList"), a = n.extend({
    overrides: {
      data: {
        records: r,
        notPaid: 0,
        notDelivery: 0,
        notReceive: 0,
        received: 0,
        isAll: function () {
          return this.status == this.Class.STATUS_ALL
        },
        isNotPaid: function () {
          return this.status == this.Class.STATUS_NOT_PAID
        },
        isNotDelivery: function () {
          return this.status == this.Class.STATUS_NOT_DELIVERY
        },
        isNotReceive: function () {
          return this.status == this.Class.STATUS_NOT_RECEIVE
        },
        isReceived: function () {
          return this.status == this.Class.STATUS_RECEIVED
        }
      }
    },
    statics: {
      STATUS_ALL: 0,
      STATUS_NOT_PAID: 1,
      STATUS_NOT_DELIVERY: 2,
      STATUS_NOT_RECEIVE: 3,
      STATUS_RECEIVED: 4,
      REGION_ALL: 0,
      REGION_TODAY: 1,
      REGION_WEEK: 2,
      REGION_MONTH: 3,
      REGION_THREE_MONTH: 4
    },
    members: {setStatus: t, setRegion: i, status: 0, region: 0, fetch: s, getList: o}
  });
  return a
}), define("global/model/MobileCheckModel", ["require", "pro", "global/model/BaseModel"], function (e) {
  function t(e, t, i) {
    this.save("mobile", e) && this.request({
      api: "get", data: this.toData("mobile"), success: function () {
        t && t.call(this, this.Class.SUCCESS_SN)
      }, error: function (e) {
        e === this.Class.CODE_MOBILE_ERROR ? i && i.call(this, this.Class.ERR_MOBILE) : i && i.call(this, this.Class.ERR_GET_SN)
      }
    })
  }

  function i(e, t, i) {
    this.save("sn", e.sn) && (this.get("mobile") && this.get("sn") ? (this.set("switcher", e.checked), this.request({
      api: "submit",
      data: this.toData(),
      success: function () {
        t && t.call(this, this.get("mobile"))
      },
      error: function (e) {
        var t = e.code;
        t === this.Class.CODE_SN_ERROR ? i && i.call(this, this.Class.ERR_SN) : t === this.Class.CODE_SN_SEND_TOO_OFTEN ? i && i.call(this, this.Class.ERR_SN_SEND_TOO_OFTEN) : t === this.Class.CODE_SN_EXPIRED ? i && i.call(this, this.Class.ERR_SN_EXPIRED) : t === this.Class.CODE_SN_OVER_LIMIT ? i && i.call(this, this.Class.ERR_SN_OVER_LIMIT) : i && i.call(this, this.Class.ERR_OTHERS)
      }
    })) : i && i.call(this, this.Class.ERR_OTHERS))
  }

  function o(e, t) {
    this.request({api: "check", success: e, error: t})
  }

  var s = (e("pro"), e("global/model/BaseModel"));
  return s.extend({
    statics: {
      CODE_SN_SEND_TOO_OFTEN: -517,
      CODE_SN_ERROR: -518,
      CODE_MOBILE_ERROR: -519,
      CODE_SN_OVER_LIMIT: -520,
      CODE_SN_EXPIRED: -521,
      ERR_MOBILE_EMPTY: "手机号码不为空",
      ERR_MOBILE: "请输入正确的手机号码",
      ERR_SN: "验证码错误，请重新输入",
      ERR_SN_EMPTY: "请输入验证码",
      ERR_SN_EXPIRED: "验证码已过期，请重新获取",
      ERR_SN_SEND_TOO_OFTEN: "验证码发送太过频繁，请稍后再试",
      ERR_SN_OVER_LIMIT: "一个手机号一天内最多能接收三个验证码，您已超限",
      ERR_MOBILE_VALIDATED: "该手机号码已验证，无需重复验证",
      ERR_GET_SN: "验证码获取失败，请检查操作或稍后再试",
      ERR_OTHERS: "验证失败，请检查操作或稍后再试",
      ERR_MOBILE_DISACCORD: "您输入的手机号与收验证码的手机号不一致",
      SUCCESS_SN: "验证码发送成功",
      SUCCESS_MOBILE: "手机号码验证成功"
    },
    overrides: {
      apis: {
        get: "/user/mobile/getCode.do",
        submit: "/user/mobile/submitCode.do",
        check: "/user/lotteryNotify/checkSmsPush.do"
      }, data: {sn: "", mobile: "", switcher: !1}, validators: {
        sn: function (e) {
          var t = /^\d{6}$/g;
          return e ? e && !t.test(e) ? this.Class.ERR_ERR_SN : void 0 : this.Class.ERR_SN_EMPTY
        }, mobile: function (e) {
          var t = /^1[345678]\d{9}$/g;
          return e ? e && !t.test(e) ? this.Class.ERR_MOBILE : void 0 : this.Class.ERR_MOBILE_EMPTY
        }
      }
    },
    members: {getCode: t, submitCode: i, checkAble: o}
  })
}), define("global/model/MultiRecordModelList", ["require", "pro", "global/model/PagerList", "global/model/MultiRecordModel"], function (e) {
  function t(e, t, i) {
    this.fetchPage(e, t, i)
  }

  var i = (e("pro"), e("global/model/PagerList")), o = e("global/model/MultiRecordModel"), s = i.extend({
    overrides: {
      apis: {get: "/user/multiRecord/get.do"},
      Model: o
    }, members: {fetch: t}
  });
  return s
}), define("global/model/MultiRecordSingleModel", ["require", "pro", "global/model/BaseModel", "global/model/GoodsModel", "global/utils/Url"], function (e) {
  var t = (e("pro"), e("global/model/BaseModel")), i = (e("global/model/GoodsModel"), e("global/utils/Url")), o = t.extend({
    overrides: {
      data: {
        gid: null,
        period: null,
        type: 0,
        status: 1,
        codes: [],
        existingTimes: 0,
        time: "",
        calcTime: "",
        ownerId: "",
        ownerName: "",
        luckyCode: "",
        ownerTotal: 0,
        codesSimple: function (e) {
          var t = e.codes.concat();
          return t.splice(0, 6)
        },
        isNeedunfold: function (e) {
          return e.codes.length > 6
        },
        index: function (e) {
          return this.getIndex() + 1
        },
        url: function (e) {
          return i.getDetail(e.gid, e.period)
        },
        hasCodes: function (e) {
          return 0 !== e.codes.length
        },
        thisTimes: function (e) {
          return e.codes.length
        },
        isFree: function (e) {
          return 2 == e.type
        },
        isLimit: function (e) {
          return 1 == e.type
        },
        isExpire: function (e) {
          return 0 == e.status
        },
        isPerioding: function (e) {
          return 1 == e.status;
        },
        iswillReveal: function (e) {
          return 2 == e.status
        },
        isRevealed: function (e) {
          return 3 == e.status
        },
        isWillBegin: function (e) {
          return 4 == e.status
        },
        isRefund: function (e) {
          return 5 == e.status
        }
      }
    }
  });
  return o
}), define("global/model/MultiRecordSingleModelList", ["require", "pro", "global/model/BaseList", "global/model/MultiRecordSingleModel"], function (e) {
  function t(e) {
    this._gid = e
  }

  function i(e) {
    this._mid = e
  }

  function o(e, t) {
    var i = this, o = userFrame.getCid();
    this.request({
      api: "get", data: {gid: i._gid, mid: i._mid, cid: o}, success: function (t) {
        for (var o = 0; o < t.list.length; o++)t.list[o].gid = i._gid;
        i.set(t.list), e && e.call(this, t.list)
      }, error: function (e) {
        var i = e.code - 0;
        t && t.call(this, i)
      }
    })
  }

  var s = (e("pro"), e("global/model/BaseList")), n = e("global/model/MultiRecordSingleModel"), r = s.extend({
    overrides: {
      Model: n,
      apis: {get: "/user/multiDetail/get.do"}
    }, members: {_gid: null, _mid: null, setGID: t, setMID: i, fetch: o}
  });
  return r
}),define("global/model/NewModel", ["require", "pro", "global/model/BaseModel"], function (e) {
  var t = (e("pro"), e("global/model/BaseModel")), i = t.extend({
    overrides: {
      data: {
        id: "",
        time: "",
        date: function (e) {
          var t = new Date(e.time), i = t.getMonth() + 1, o = t.getDate();
          return t.getFullYear() + "." + (10 > i ? "0" + (i + "") : i) + "." + (10 > o ? "0" + (o + "") : o)
        },
        title: 0,
        bValid: !1,
        summary: "",
        content: "",
        url: function (e) {
          return "/news/detail/" + e.id + ".html"
        }
      }
    }
  });
  return i
}),define("global/model/NewListModel", ["require", "pro", "global/model/PagerList", "global/model/NewModel"], function (e) {
  function t(e, t, i) {
    this.fetchPage(e, t, i)
  }

  var i = (e("pro"), e("global/model/PagerList")), o = e("global/model/NewModel"), s = i.extend({
    overrides: {
      Model: o,
      apis: {get: "/news/getList.do"}
    }, members: {fetch: t}
  });
  return s
}),define("global/model/NicknameModel", ["require", "pro", "global/Broadcast", "global/model/BaseModel", "global/utils/Utils"], function (e) {
  function t(e, t) {
    this.validate() && this.request({
      api: "checkCost", success: function (t) {
        this.set(t), e && e.call(this, t)
      }, error: t
    })
  }

  function i(e, t) {
    var i = this;
    this.validate() && this.request({
      api: "submit", data: {nickname: i.get("nickname")}, success: function (t) {
        var i = t.nickname;
        this.set(t), this.send(o.USER_NICKNAME_CHANGE, i), e && e.call(this, i)
      }, error: function (e) {
        var i = e.code - 0, o = "";
        switch (i) {
          case-16:
            o = this.Class.ERR_PARAM;
            break;
          case-527:
            o = this.Class.ERR_NOT_ALLOW;
            break;
          case-500:
            o = this.Class.ERR_MAXLIMIT;
            break;
          case-501:
            o = this.Class.ERR_ONLY;
            break;
          case-502:
            o = this.Class.ERR_LESS;
            break;
          case-503:
            o = this.Class.ERR_NO_NAME;
            break;
          case-540:
            o = this.Class.ERR_GEMS_LOW;
            break;
          default:
            o = this.Class.ERR_COMM
        }
        t && t.call(this, i, o)
      }
    })
  }

  var o = (e("pro"), e("global/Broadcast")), s = e("global/model/BaseModel"), n = e("global/utils/Utils");
  return s.extend({
    statics: {
      ERR_NO_NAME: "昵称不能为空！",
      ERR_LESS: "昵称不能少于2个字符！",
      ERR_ONLY: "只能包含“汉字、字母、数字、下划线”等字符！",
      ERR_MAXLIMIT: "昵称不能大于20个字符！！",
      ERR_NOT_ALLOW: "昵称不能含有敏感文字，请修改！",
      ERR_GEMS_LOW: "修改失败！宝石余额不足~",
      ERR_PARAM: "参数错误，请修改！",
      ERR_COMM: "提交有误！"
    },
    overrides: {
      apis: {
        submit: "post:/user/profile/updateNickname.do",
        checkCost: "post:/user/profile/preUpdateNickname.do"
      }, data: {nickname: "", gemsCost: 0, valid: !1, cost: 0, value: 0}, validators: {
        nickname: function (e) {
          var t = n.stringLen(e);
          return e ? 2 > t ? this.Class.ERR_LESS : t > 20 ? this.Class.ERR_MAXLIMIT : /^[\w\u3E00-\u9FA5]+$/g.test(e) ? void 0 : this.Class.ERR_ONLY : this.Class.ERR_NO_NAME
        }
      }
    },
    members: {submit: i, checkCost: t}
  })
}),define("global/model/OrderBonusModel", ["require", "pro", "global/model/BaseModel"], function (e) {
  var t = (e("pro"), e("global/model/BaseModel"));
  return t.extend({
    overrides: {
      data: {
        id: "",
        name: "",
        price: 0,
        value: 0,
        expire: "",
        limit: "",
        dictId: 0,
        available: 0,
        rejectCoin: !1,
        minPay: 0,
        threhold: 0,
        gteThousand: function (e) {
          return e.value >= 1e3 ? !0 : !1
        },
        gteTenThousand: function (e) {
          return e.value >= 1e4 ? !0 : !1
        }
      }
    }
  })
}),define("global/model/OrderBonusModelList", ["require", "pro", "global/model/BaseList", "global/model/OrderBonusModel", "global/utils/Json"], function (e) {
  function t(e, t, i) {
    var o = a.stringify({itemList: e});
    this.request({api: "getMallCoupons", data: {param: o}, success: t, error: i})
  }

  function i(e, t, i) {
    var o = new this;
    o.getCoupons.apply(o, arguments)
  }

  function o(e, t, i) {
    var o = a.stringify(e);
    this.request({
      api: "getDuobaoCoupons", data: {buyinfo: o}, success: function (e) {
        this.set(e), t && t.call(this, e)
      }, error: i
    })
  }

  function s(e, t, i) {
    var o = new this;
    o.getDuobaoCoupons.apply(o, arguments)
  }

  var n = (e("pro"), e("global/model/BaseList")), r = e("global/model/OrderBonusModel"), a = e("global/utils/Json");
  return n.extend({
    overrides: {
      Model: r,
      apis: {getMallCoupons: "/mall/order/getCoupons.do", getDuobaoCoupons: "/bonus/scValidList.do"}
    }, statics: {getMallCoupons: i, getDuobaoCoupons: s}, members: {getMallCoupons: t, getDuobaoCoupons: o}
  })
}),define("global/model/OrderGroupBonusModel", ["require", "pro", "global/model/BaseModel", "global/model/GroupBonusModel"], function (e) {
  function t(e, t, i, o, s) {
    var n = this.from({cid: e, gid: t, period: i});
    return n.query(o, s), n
  }

  function i(e, t) {
    this.request({
      api: "query",
      data: {cid: this.get("cid"), gid: this.get("gid"), period: this.get("period"), scansrc: "zj"},
      success: function (t) {
        this.set({bonus: t.bonus, status: t.status}), e && e.call(this, t.status == this.Class.STATUS_HAS_NEW_BONUS)
      },
      error: t
    })
  }

  var o = (e("pro"), e("global/model/BaseModel")), s = e("global/model/GroupBonusModel");
  return o.extend({
    overrides: {
      apis: {query: "/qun/orderQuery.do"},
      data: {cid: "", gid: "", period: 0, status: 0, bonus: s}
    }, statics: {STATUS_HAS_NEW_BONUS: 1, STATUS_HAS_BONUS: 2, STATUS_NO_BONUS: 3, query: t}, members: {query: i}
  })
}),define("global/model/OrderModel", ["require", "pro", "global/model/BaseModel", "global/model/BaseList", "global/model/GoodsModel", "global/model/AddressModel", "global/model/OrderBonusModel", "global/model/OrderBonusModelList", "global/model/OrderGoodsModelList"], function (e) {
  var t = (e("pro"), e("global/model/BaseModel")), i = e("global/model/BaseList"), o = (e("global/model/GoodsModel"), e("global/model/AddressModel")), s = e("global/model/OrderBonusModel"), n = e("global/model/OrderBonusModelList"), r = e("global/model/OrderGoodsModelList");
  return t.extend({
    overrides: {
      data: {
        itemList: r,
        couponNum: 0,
        availableCoupons: n,
        coupon: s,
        orderInfo: i.extend({overrides: {Model: t.extend({data: {itemName: "", itemValue: "0", itemDesc: ""}})}}),
        payMoney: 0,
        payMoneyInCents: 0,
        shipAddress: o,
        notUseCoupon: 0,
        isHasCoupon: function (e) {
          return e.couponNum > 0
        },
        isUseCoupon: function (e) {
          var t = !0;
          return (!e.coupon || e.couponNum <= 0) && (t = !1), t
        },
        payMoneyFormat: function (e) {
          return (e.payMoneyInCents / 100).toFixed(2) - 0
        },
        formatCoupons: function (e) {
          var t = e.availableCoupons, i = [], o = e.coupon;
          if (e.couponNum > 0)for (var s = 0; s < t.length; s++)i.push({
            text: t[s].name + "（红包余额：&#165;&nbsp;" + t[s].price + "）",
            value: t[s].id + "," + t[s].available + "," + t[s].price,
            selected: o ? o.id == t[s].id : !1
          }); else i.push({text: "暂无可用红包", value: 0, selected: !0});
          return i
        }
      }
    }
  })
}),define("global/model/OrderModelList", ["require", "pro", "global/model/BaseList", "global/model/OrderModel", "global/model/GoodsModel", "global/utils/Json"], function (e) {
  function t(e, t, i) {
    var o = this.Class, s = r.stringify(e);
    this.request({
      api: "getList", data: {param: s}, success: function (e) {
        this.set([e]), t && t.call(this)
      }, error: function (t) {
        var s = t.code, r = t.errorMsg;
        s == o.CODE_LOW_STOCKS ? n.query(e.itemList[0].gid, function (e) {
          i && i.call(this, r, s, e.gname)
        }, function (e) {
          i && i.call(this, r, s)
        }) : s == o.CODE_PARAMS_ERR ? r ? i && i.call(this, r, s) : i && i.call(this, o.TEXT_PARAMS_ERR, s) : s == o.CODE_SYSTEM_ERR && i && i.call(this, o.TEXT_SYSTEM_ERR, s)
      }
    })
  }

  function i(e, t) {
    var i = this.Class, o = this.get(0), s = r.stringify({
      addressId: o.get("shipAddress") ? o.get("shipAddress.id") : "",
      couponList: o.get("coupon") ? [{id: o.get("coupon.id"), money: o.get("coupon.available")}] : [],
      itemList: [{gid: o.get("itemList")[0].gid, amount: o.get("itemList")[0].amount}]
    }), n = "";
    o.get("shipAddress") ? this.request({
      api: "submit", data: {param: s}, success: e, error: function (e) {
        var o = e.code, s = e.errorMsg;
        o == i.CODE_REQUEST_TIMEOUT ? t && t.call(this, i.TEXT_REQUEST_TIMEOUT, i.CODE_REQUEST_TIMEOUT) : o == i.CODE_NETWORK_ERR ? t && t.call(this, i.TEXT_NETWORK_ERR, i.CODE_NETWORK_ERR) : o == i.CODE_SYSTEM_ERR ? t && t.call(this, i.TEXT_SYSTEM_ERR, i.CODE_SYSTEM_ERR) : o == i.CODE_PARAMS_ERR ? s ? t && t.call(this, s, o) : t && t.call(this, i.TEXT_PARAMS_ERR, i.CODE_PARAMS_ERR) : o == i.CODE_ADDRESS_OR_NAME_PARAMS_ERR ? t && t.call(this, i.TEXT_ADDRESS_OR_NAME_PARAMS_ERR, i.CODE_ADDRESS_OR_NAME_PARAMS_ERR) : o == i.CODE_LOW_STOCKS ? t && t.call(this, s, o) : o == i.CODE_NEED_IDENTIFY ? t && t.call(this, "", o) : o == i.CODE_IDENTIFY_FAILED ? t && t.call(this, "", o) : o == i.CODE_IDENTIFY_OVER_LIMITED && (s ? t && t.call(this, s, o) : t && t.call(this, i.TEXT_IDENTIFY_OVER_LIMITED, o))
      }
    }) : (n = "请填写收货地址~", t && t.call(this, n))
  }

  var o = (e("pro"), e("global/model/BaseList")), s = e("global/model/OrderModel"), n = e("global/model/GoodsModel"), r = e("global/utils/Json");
  return o.extend({
    overrides: {
      Model: s,
      apis: {submit: "post:/mall/order/submit.do", getList: "post:/mall/order/ready.do"}
    },
    statics: {
      CODE_REQUEST_TIMEOUT: -9,
      CODE_NETWORK_ERR: -10,
      CODE_SYSTEM_ERR: -11,
      CODE_PARAMS_ERR: -16,
      CODE_LOW_STOCKS: -100,
      CODE_ADDRESS_OR_NAME_PARAMS_ERR: -516,
      CODE_NEED_IDENTIFY: -537,
      CODE_IDENTIFY_FAILED: -538,
      CODE_IDENTIFY_OVER_LIMITED: -539,
      TEXT_REQUEST_TIMEOUT: "请求超时，请稍后再试~",
      TEXT_NETWORK_ERR: "系统错误，请稍后再试~",
      TEXT_SYSTEM_ERR: "系统错误，请稍后再试~",
      TEXT_PARAMS_ERR: "参数不正确，请稍后再试~",
      TEXT_ADDRESS_OR_NAME_PARAMS_ERR: "收货人或收货地址长度不对，请检查后在提交~",
      TEXT_IDENTIFY_OVER_LIMITED: "身份证验证失败次数超过限制"
    },
    members: {getOrderList: t, submit: i}
  })
}),define("global/model/PayOrderModel", ["require", "pro", "global/model/BaseModel", "global/model/OrderBonusModelList"], function (e) {
  function t(e, t, i) {
    var o = this.Class;
    this.request({
      api: "confirm", data: e, success: t, error: function (e) {
        var t = e.code, s = e.errorMsg, n = e.result ? e.result.token : "";
        switch (t) {
          case o.CODE_CART_EMPTY:
            s ? i && i.call(this, s, t) : i && i.call(this, o.TEXT_CART_EMPTY, t);
            break;
          case o.CODE_SYSTEM_ERROR:
            i && i.call(this, o.TEXT_SYSTEM_ERROR, t);
            break;
          case o.CODE_PARAM_INCORRECT:
            s ? i && i.call(this, s, t) : i && i.call(this, o.TEXT_PARAM_INCORRECT, t);
            break;
          case o.CODE_ORDER_INFO_INCORRECT:
            i && i.call(this, o.TEXT_ORDER_INFO_INCORRECT, t);
            break;
          case o.CODE_NETWORK_ERR:
            i && i.call(this, o.TEXT_NETWORK_ERR, t);
            break;
          case o.CODE_BONUS_NEED_VALID_CODE:
            i && i.call(this, "", t, n);
            break;
          case o.CODE_VALID_CODE_ERROR:
            i && i.call(this, "", t, n);
            break;
          case o.CODE_VALID_CODE_TOO_MANY_ERRORS:
            i && i.call(this, s, t);
            break;
          case o.CODE_USER_OPERATION_FREQUENTLY:
            i && i.call(this, s, t);
            break;
          case o.CODE_USER_OPERATION_BE_FROZEN:
            i && i.call(this, s, t);
            break;
          case o.CODE_PAY_CLOSE:
            i && i.call(this, o.TEXT_PAY_CLOSE, t);
            break;
          default:
            i && i.call(this, o.TEXT_ERROR_DEFAULT)
        }
      }
    })
  }

  function i(e, t, i) {
    var o = new this;
    o.submit.apply(o, arguments)
  }

  var o = (e("pro"), e("global/model/BaseModel")), s = e("global/model/OrderBonusModelList");
  return o.extend({
    overrides: {
      data: {orderId: "", total: 0, orderBonusList: s},
      apis: {confirm: "post:/newpay/order/confirm.do"}
    },
    statics: {
      CODE_NETWORK_ERR: -10,
      CODE_SYSTEM_ERROR: -11,
      CODE_PAY_UNFINISH: -400,
      CODE_PAY_FAIL: -401,
      CODE_PARAM_INCORRECT: -16,
      CODE_ORDER_INFO_INCORRECT: -17,
      CODE_CART_EMPTY: -410,
      CODE_BONUS_NEED_VALID_CODE: -414,
      CODE_VALID_CODE_ERROR: -415,
      CODE_VALID_CODE_TOO_MANY_ERRORS: -416,
      CODE_USER_OPERATION_FREQUENTLY: -417,
      CODE_USER_OPERATION_BE_FROZEN: -418,
      CODE_PAY_CLOSE: -900,
      CODE_PAY_CLOSE: -900,
      TEXT_ERROR_DEFAULT: "系统错误！请返回购物车重新下单~",
      TEXT_SYSTEM_ERROR: "系统错误！请返回购物车重新下单~",
      TEXT_NETWORK_ERR: "系统错误！请返回购物车重新下单~",
      TEXT_PARAM_INCORRECT: "参数不正确！请返回购物车重新下单~",
      TEXT_CART_EMPTY: "订单已失效，请返回购物车重新下单~",
      TEXT_ORDER_INFO_INCORRECT: "订单信息有误！请返回购物车重新下单~",
      TEXT_VALID_CODE_ERROR: "请输入验证码/验证码输入错误",
      TEXT_VALID_CODE_TOO_MANY_ERRORS: "验证码错误次数过多，请稍后再试~",
      TEXT_USER_OPERATION_FREQUENTLY: "您的异常操作过于频繁，休息一下再来吧~",
      TEXT_USER_OPERATION_BE_FROZEN: "您暂时不能进行该操作，请稍后再试~",
      TEXT_PAY_CLOSE: "夺宝工程师们正在进行系统维护，请稍后再试",
      TEXT_PAY_CLOSE: "夺宝工程师们正在进行系统维护，请稍后再试",
      submit: i
    },
    members: {submit: t}
  })
}),define("global/model/PaymentTypeModel", ["require", "global/model/BaseModel"], function (e) {
  function t() {
    return this.Class.isCredit(this.get("type"))
  }

  function i() {
    return this.Class.isDeposit(this.get("type"))
  }

  function o(e) {
    var t = "";
    switch (e -= 0) {
      case this.DEPOSIT:
      case this.MOBILE_DEPOSIT:
        t = this.NAME_DEPOSIT;
        break;
      case this.CREDIT:
      case this.MOBILE_CREDIT:
        t = this.NAME_CREDIT
    }
    return t
  }

  function s(e) {
    return e == this.CREDIT || e == this.MOBILE_CREDIT
  }

  function n(e) {
    return e == this.DEPOSIT || e == this.MOBILE_DEPOSIT
  }

  function r(e, t) {
    var t = void 0 !== t ? t : e[0].get("bankType");
    return new this({name: this.getName(t), type: t, payments: e})
  }

  function a(e) {
    return new this({
      name: e.get("bankDesc"),
      logo: e.get("bankImg"),
      type: e.get("bankType"),
      text: e.get("extDesc"),
      payments: [e]
    })
  }

  var l = e("global/model/BaseModel"), c = l.extend({
    statics: {
      DEPOSIT: 0,
      CREDIT: 2,
      MOBILE_DEPOSIT: 1,
      MOBILE_CREDIT: 3,
      NAME_DEPOSIT: "储蓄卡",
      NAME_CREDIT: "信用卡",
      WEB: 0,
      MOBILE: 1,
      YIXIN: 2,
      WEIXIN: 3,
      IOS: 4,
      ANDROID: 5,
      data: {
        name: "", logo: "", type: 0, terminal: 0, payments: [], single: function (e) {
          return e.payments.length <= 1
        }
      },
      getName: o,
      isCredit: s,
      isDeposit: n,
      fromPayment: a,
      fromPayments: r
    }, members: {isCredit: t, isDeposit: i}
  });
  return c
}),define("global/model/PaymentModelList", ["require", "global/model/BaseList", "global/model/PaymentModel", "global/model/PaymentTypeModel"], function (e) {
  function t(e) {
    this.cpid = e
  }

  function i(e) {
    this.terminal = e
  }

  function o(e) {
    var t;
    return this.deposits ? t = this.deposits : (this.deposits = t = [], this.each(function (e) {
      u.isDeposit(e.get("bankType")) && t.push(e)
    })), e >= 0 ? t[e] : t
  }

  function s(e) {
    var t;
    return this.credits ? t = this.credits : (this.credits = t = [], this.each(function (e) {
      u.isCredit(e.get("bankType")) && t.push(e)
    })), e >= 0 ? t[e] : t
  }

  function n(e) {
    var t;
    return this.others ? t = this.others : (this.others = t = [], this.each(function (e) {
      var i = e.get("bankType");
      !u.isDeposit(i) && !u.isCredit(i) && t.push(e)
    })), e >= 0 ? t[e] : t
  }

  function r(e, t) {
    var i = this.cpid;
    if (void 0 === i)return void app.error("no cpid");
    this.request({
      api: "get", data: {cpid: this.cpid}, success: function (t) {
        t.list.sort(function (e, t) {
          return t.weight - e.weight
        }), t.list.sort(function (e, t) {
          return t.bankImg && !e.bankImg ? 1 : -1
        }), this.set(t.list), e && e.call(this, t.list)
      }, error: t
    })
  }

  function a(e, t) {
    this.applySuper(), this.setCpid(e), this.setTerminal(t)
  }

  var l = e("global/model/BaseList"), c = e("global/model/PaymentModel"), u = e("global/model/PaymentTypeModel"), d = l.extend({
    constructor: a,
    overrides: {Model: c, apis: {get: "/cashier/banklist.do"}},
    statics: {
      TERMINAL_WEB: 0,
      TERMINAL_MOBILE: 1,
      TERMINAL_YIXIN: 2,
      TERMINAL_WEIXIN: 3,
      TERMINAL_IOS: 4,
      TERMINAL_ANDROID: 5,
      TERMINAL_XIAOMI: 6
    },
    members: {fetch: r, getDeposits: o, getCredits: s, getOthers: n, setCpid: t, setTerminal: i}
  });
  return d
}),define("global/model/PushsmsModel", ["require", "pro", "global/model/BaseModel", "global/utils/Utils", "global/utils/Json"], function (e) {
  function t(e, t, i, o) {
    var s = this, n = {};
    null !== e && (n.switcher = e), null !== t && (n.dndSwitcher = t), s.request({
      api: "smsSwitcher",
      data: n,
      success: function (e) {
        s.set(e), i && i.call(s, e)
      },
      error: function (e) {
        o && o.call(s, e)
      }
    })
  }

  function i(e, t) {
    var i = this;
    i.request({
      api: "getStatus", success: function (t) {
        i.set(t), e && e.call(i, t)
      }, error: function (e) {
        t && t.call(i, e)
      }
    })
  }

  var o = (e("pro"), e("global/model/BaseModel")), s = (e("global/utils/Utils"), e("global/utils/Json"), o.extend({
    overrides: {
      apis: {
        getStatus: "post:/user/lotteryNotify/checkSmsPush.do",
        smsSwitcher: "post:/user/lotteryNotify/setSmsPush.do"
      }, data: {enable: !1, smsPush: !1, smsPushDND: !1}
    }, members: {fetchStatus: i, setSmsPush: t}
  }));
  return s
}),define("global/model/RecordModel", ["require", "pro", "global/model/BaseModel", "global/model/UserModel"], function (e) {
  var t = (e("pro"), e("global/model/BaseModel")), i = e("global/model/UserModel"), o = t.extend({
    overrides: {
      data: {
        rid: "",
        user: i,
        time: "2015-01-01 00:00:00.000",
        num: 0,
        regularBuy: 0,
        device: 0,
        deviceName: function (e) {
          return this.Class.DEVICE_NAMES_MAP[e.device]
        },
        isFromMobile: function (e) {
          return e.device != this.Class.WEB_DEVICE
        },
        isFromRegularBuy: function (e) {
          return 1 == e.regularBuy
        },
        timeDate: function (e) {
          return e.time.split(" ")[0]
        },
        timeHMS: function (e) {
          return e.time.split(" ")[1]
        }
      }
    },
    statics: {
      WEB_DEVICE: 0,
      IOS_DEVICE: 1,
      ANDROID_DEVICE: 2,
      DEVICE_NAMES_MAP: {0: "Web浏览器端", 1: "iPhone客户端", 2: "Android客户端"}
    },
    members: {}
  });
  return o
}),define("global/model/RecordModelList", ["require", "pro", "global/model/PagerList", "global/model/RecordModel"], function (e) {
  function t(e, t, i) {
    this.fetchPage(e, t, i)
  }

  var i = (e("pro"), e("global/model/PagerList")), o = e("global/model/RecordModel"), s = i.extend({
    overrides: {
      Model: o,
      apis: {get: "/record/getDuobaoRecord.do"}
    }, members: {fetch: t}
  });
  return s
}),define("global/model/ResultsModelList", ["require", "pro", "global/model/PagerList", "global/model/PeriodModel"], function (e) {
  function t(e, t) {
    this.isLoading || (this.isLoading = !0, this.fetchPage(1, function (t) {
      this.isLoading = !1, e && e.call(this, t)
    }, function (e) {
      this.isLoading = !1, t && t.call(this, e)
    }))
  }

  function i(e, t) {
    this.isLoading || (this.isLoading = !0, this.pushPage(function (t) {
      this.isLoading = !1, e && e.call(this, t)
    }, function (e) {
      this.isLoading = !1, t && t.call(this, e)
    }))
  }

  var o = (e("pro"), e("global/model/PagerList")), s = e("global/model/PeriodModel"), n = o.extend({
    overrides: {
      Model: s,
      apis: {get: "/goods/revealList.do"}
    }, members: {fetch: t, getPage: i}
  });
  return n
}),define("global/model/ShareModelList", ["require", "pro", "global/model/ShareModel", "global/model/PagerList", "global/model/BaseList"], function (e) {
  function t(e, t, i) {
    this.fetchPage(e, t, i)
  }

  function i(e, t) {
    this.request({
      api: "getToShareCnt", success: function (t) {
        e && e.call(this, t)
      }, error: t
    })
  }

  var o = (e("pro"), e("global/model/ShareModel")), s = e("global/model/PagerList"), n = (e("global/model/BaseList"), s.extend({
    overrides: {
      Model: o,
      apis: {get: "/user/share/list.do", getToShareCnt: "/user/toshare/num.do"}
    }, members: {fetch: t, getToShareCnt: i}
  }));
  return n
}),define("global/model/WebMailUserModel", ["require", "pro", "global/model/UserModel"], function (e) {
  var t = (e("pro"), e("global/model/UserModel")), i = t.extend({
    overrides: {
      data: {
        user: t,
        duobaoToCome: 0,
        duobaoUnderWay: 0
      }
    }
  });
  return i
}),define("global/model/WinRecordModelList", ["require", "pro", "global/model/PagerList", "global/model/MyWinRecordModel"], function (e) {
  function t() {
    return this._cid
  }

  function i(e) {
    this._cid = e, this.setExtraData({cid: this.getCID()})
  }

  function o(e, t, i) {
    this.fetchPage(e, t, i)
  }

  var s = (e("pro"), e("global/model/PagerList")), n = e("global/model/MyWinRecordModel"), r = s.extend({
    overrides: {
      Model: n,
      apis: {get: "/user/win/get.do"}
    }, members: {fetch: o, getCID: t, setCID: i, _cid: null}
  });
  return r
}),define("global/model/WishGoodsModel", ["require", "pro", "global/model/BaseModel", "global/model/GoodsModel"], function (e) {
  var t = (e("pro"), e("global/model/BaseModel")), i = e("global/model/GoodsModel"), o = t.extend({
    statics: {
      STATUS_WISHING: 0,
      STATUS_LOCK_DONE: 1,
      STATUS_LOCK_OVER: 2,
      STATUS_DONE: 3,
      STATUS_UNDONE: 4
    },
    overrides: {
      data: {
        cid: "",
        wid: "",
        status: 4,
        goods: i,
        raise: 0,
        supporter: 0,
        remainTime: 0,
        wishes: "",
        weixinCode: "",
        yixinCode: "",
        supportUrl: "",
        mergedWishlistId: "",
        price: 0,
        shareInfo: null,
        remainMoney: function (e) {
          var t = e.price, i = t - e.raise;
          return 0 > i && (i = 0), i
        },
        pect: function (e) {
          var t = Math.ceil(e.raise / e.price * 100);
          return 100 == t && e.raise != e.price && (t = 99), t + "%"
        },
        remainTimeDesc: function (e) {
          var t = "";
          return t = e.remainTime <= 36e5 ? "不足1小时" : e.remainTime <= 864e5 ? Math.ceil(e.remainTime / 36e5) + "小时" : Math.ceil(e.remainTime / 864e5) + "天"
        },
        isWishing: function (e) {
          return e.status - 0 === 0
        },
        isLockByDone: function (e) {
          return e.status - 0 === 1
        },
        isLockByTimeup: function (e) {
          return e.status - 0 === 2
        },
        isDone: function (e) {
          return e.status - 0 === 3
        },
        isUndone: function (e) {
          return e.status - 0 === 4
        },
        statusInfo: function (e) {
          var t = {};
          switch (e.status - 0) {
            case this.Class.STATUS_WISHING:
              t.flag = "wishing", t.desc = "正在进行中";
              break;
            case this.Class.STATUS_LOCK_DONE:
              t.flag = "lock", t.desc = "心愿单完成，确认中";
              break;
            case this.Class.STATUS_LOCK_OVER:
              t.flag = "lock", t.desc = "心愿单到期，确认中";
              break;
            case this.Class.STATUS_DONE:
              t.flag = "done", t.desc = "心愿完成，获得礼物！";
              break;
            case this.Class.STATUS_UNDONE:
              t.flag = "undone", t.desc = e.raise > 0 ? "未完成，获得夺宝币红包~" : "未完成~";
              break;
            default:
              t.flag = "wishing", t.desc = "正在进行中"
          }
          return t
        },
        isHasDoneBonus: function (e) {
          return e.status - 0 !== 3 ? !1 : e.raise > e.price
        },
        doneBonus: function (e) {
          if (e.status - 0 !== 3)return null;
          var t = e.raise - e.price;
          return 0 > t && (t = 0), t
        },
        isHasUndoneBonus: function (e) {
          return e.status - 0 === 4 ? e.raise > 0 : !1
        },
        bonusSplit: function (e) {
          var t = e.raise + "", i = t.split("");
          e.raise > 99999 && (t = "9999p");
          var o = t.split("");
          return {all: i, limit: o}
        }
      }
    }
  });
  return o
}),define("global/model/WishDetailModel", ["require", "pro", "global/model/BaseModel", "global/model/WishGoodsModel", "global/model/ShipInfoModel"], function (e) {
  function t(e, t, i) {
    var o = this;
    o.request({
      api: "get", data: {wid: e}, success: function (e) {
        o.set(e), t && t.call(o, e)
      }, error: function (e) {
        i && i.call(o, e)
      }
    })
  }

  var i = (e("pro"), e("global/model/BaseModel")), o = e("global/model/WishGoodsModel"), s = e("global/model/ShipInfoModel"), n = i.extend({
    overrides: {
      data: {
        wishInfo: o,
        shipInfo: s
      }, apis: {get: "/wish/detail.do"}
    }, members: {fetch: t}
  });
  return n
}),define("global/model/WishGoodsModelList", ["require", "pro", "global/model/PagerList", "global/model/WishGoodsModel"], function (e) {
  function t(e, t, i) {
    this.fetchPage(e, t, i)
  }

  var i = (e("pro"), e("global/model/PagerList")), o = e("global/model/WishGoodsModel"), s = i.extend({
    overrides: {
      Model: o,
      apis: {get: "/wish/list.do"}
    }, members: {fetch: t}
  });
  return s
}),define("global/model/WishSettingCheckModel", ["require", "pro", "global/model/BaseModel", "global/model/GoodsModel"], function (e) {
  function t(e, t, i) {
    this.request({
      api: "check", data: e, success: function (e) {
        t && t.call(this, e)
      }, error: i
    })
  }

  var i = (e("pro"), e("global/model/BaseModel")), o = e("global/model/GoodsModel"), s = i.extend({
    overrides: {
      data: {
        hasIng: !1,
        goods: o,
        gids: []
      }, apis: {check: "/wish/check.do"}
    }, statics: {OUT_OF_STOCK: 405}, members: {check: t}
  });
  return s
}),define("global/model/WishSettingDaysModel", ["require", "pro", "global/model/BaseModel"], function (e) {
  function t(e, t, i) {
    this.request({api: "init", data: e, success: t, error: i})
  }

  var i = (e("pro"), e("global/model/BaseModel")), o = i.extend({
    overrides: {
      data: {days: [], defaultDay: 0},
      apis: {init: "/wish/init.do"}
    }, statics: {}, members: {fetch: t}
  });
  return o
}),define("global/model/WishSettingModel", ["require", "pro", "global/model/BaseModel"], function (e) {
  function t(e, t, i) {
    var o = this;
    this.request({
      api: "create",
      data: {gid: e.gid, nickname: e.nickname, days: e.days, wishes: e.wishes, wishSourceId: e.wishSourceId},
      success: function (e) {
        o.set(e), t && t.call(this, e)
      },
      error: i
    })
  }

  var i = (e("pro"), e("global/model/BaseModel")), o = i.extend({
    overrides: {
      data: {
        wid: 0,
        url: "",
        weixinCode: "",
        yixinCode: ""
      }, apis: {create: "post:/wish/create.do"}
    }, statics: {NICKNAME_TOO_LONG: 505, HAS_ONGOING: 307, OUT_OF_STOCK: 405}, members: {create: t}
  });
  return o
}),define("global/model/WishShipInfoModel", ["require", "pro", "global/model/BaseModel", "global/model/ShipInfoModel"], function (e) {
  function t(e, t) {
    var i = this;
    return i.validate() ? void this.request({
      api: "confirmReceive",
      data: {wid: i.get("wid")},
      success: e,
      error: t
    }) : void(t && t.call(i, "心愿单ID不正确"))
  }

  function i(e, t, i) {
    var o = this;
    return o.validate() ? void this.request({
      api: "confirmAddr",
      data: {wid: o.get("wid"), addressId: e},
      success: t,
      error: i
    }) : void(i && i.call(o, "心愿单ID不正确"))
  }

  function o(e, t) {
    var i = this;
    return i.validate() ? void this.request({
      api: "get", data: {wid: i.get("wid")}, success: function (t) {
        i.set(t.shipInfo), e && e.call(this)
      }, error: t
    }) : void(t && t.call(i, "心愿单ID不正确"))
  }

  var s = (e("pro"), e("global/model/BaseModel"), e("global/model/ShipInfoModel")), n = s.extend({
    mixes: {
      apis: {
        get: "/wish/shipInfo.do",
        confirmAddr: "post:/wish/address.do",
        confirmReceive: "post:/wish/confirm.do"
      }, data: {wid: ""}, validators: {
        wid: function (e) {
          return "" == e ? "心愿单ID不能为空" : void 0
        }
      }
    }, members: {fetch: o, confirmAddr: i, confirmReceive: t}
  });
  return n
}),define("global/model/WishSupporterModel", ["require", "pro", "global/model/BaseModel", "global/model/UserModel"], function (e) {
  var t = (e("pro"), e("global/model/BaseModel")), i = e("global/model/UserModel"), o = t.extend({
    overrides: {
      data: {
        time: "",
        ipAddress: "",
        friendName: "",
        raise: 0,
        sendWord: "",
        user: i,
        hasUserInfo: function (e) {
          return null == e.user ? !1 : "" != e.user.cid
        }
      }
    }
  });
  return o
}),define("global/model/WishSupporterModelList", ["require", "pro", "global/model/PagerList", "global/model/WishSupporterModel"], function (e) {
  function t(e, t, i) {
    this.fetchPage(e, t, i)
  }

  var i = (e("pro"), e("global/model/PagerList")), o = e("global/model/WishSupporterModel"), s = i.extend({
    overrides: {
      Model: o,
      apis: {get: "/wish/support/list.do"}
    }, members: {fetch: t}
  });
  return s
}),define("global/model/ZoneModel", ["require", "pro", "global/model/BaseModel"], function (e) {
  var t = (e("pro"), e("global/model/BaseModel"));
  return t.extend({
    overrides: {
      data: {
        id: 0,
        level: 0,
        zonename: "",
        code: "",
        parentid: 0,
        province: "",
        city: "",
        valid: !0
      }
    }
  })
}),define("global/model/ZoneModelList", ["require", "pro", "global/model/BaseList", "global/model/ZoneModel"], function (e) {
  function t(e, t) {
    this.request({
      api: "province", success: function (t) {
        this.set(t), e && e.call(this, t)
      }, error: t
    })
  }

  function i(e, t, i) {
    this.request({
      api: "city", data: {id: e - 0}, success: function (e) {
        this.set(e), t && t.call(this, e)
      }, error: i
    })
  }

  function o(e, t, i) {
    this.request({
      api: "district", data: {id: e - 0}, success: function (e) {
        this.set(e), t && t.call(this, e)
      }, error: i
    })
  }

  var s = (e("pro"), e("global/model/BaseList")), n = e("global/model/ZoneModel");
  return s.extend({
    overrides: {
      Model: n,
      apis: {province: "/zoneinfo/province.do", city: "/zoneinfo/city.do", district: "/zoneinfo/district.do"}
    }, members: {getProvince: t, getCity: i, getDistrict: o}
  })
}),define("global/special/BaseSpecial", ["require", "pro"], function (e) {
  function t(e) {
    return this.__instance || (this.__instance = new this(e)), this.__instance
  }

  function i(e, t) {
    this.applySuper(arguments);
    var e = this.context = e;
    this.view = e.view, this.model = e.model, this.controller = e.controller
  }

  var o = e("pro");
  return o.Base.extend({
    constructor: i,
    statics: {getInstance: t, __instance: null},
    members: {onRender: null, context: null, rules: null}
  })
}),define("global/transition/BaseTransition", ["require", "pro"], function (e) {
  function t(e) {
    e && e.call(this)
  }

  function i() {
    this._reverse = !this._reverse
  }

  function o(e, t) {
    this.done(t)
  }

  function s(e, t) {
    this.done(t)
  }

  var n = e("pro");
  return n.Base.extend({statics: {show: o, hide: s, done: t, reverse: i, _reverse: !1}})
}),define("global/transition/SlideTransition", ["require", "global/transition/BaseTransition"], function (e) {
  function t(e, t) {
    e.show(), t && t.call(this)
  }

  function i(e, t) {
    e.hide(), t && t.call(this)
  }

  var o = e("global/transition/BaseTransition");
  return o.extend({statics: {show: t, hide: i}})
}),define("global/utils/Lazyload", ["require", "jquery", "pro"], function (e) {
  function t(e) {
    var t = this, i = e || {}, o = window;
    t.__win = o, t.__doc = o.document;
    var s = i.container;
    "undefined" == typeof s ? t.__dom = n(t.__doc.body) : s instanceof n ? t.__dom = s : "string" == typeof s ? t.__dom = n("#" + s) : t.__dom = s.dom;
    var r = i.dataName || "data-src";
    t.__dataName = r;
    var a = i.time - 0 || 200;
    t.__time = a, i.minWidth && (t.__minWidth = i.minWidth), i.minHeight && (t.__minHeight = i.minHeight), t.__domList = t.__dom.find(t.__tag + "[" + t.__dataName + "]"), t.__domList.each(function (e, i) {
      var o = i.style, s = o.cssText || "";
      i.setAttribute("data-cssText", s), o.cssText += ";min-height:" + t.__minHeight + "px;min-width:" + t.__minWidth + "px;"
    }), t.__initListen(), window.setTimeout(n.proxy(t.__show, t), 200), t.fire("afterinit")
  }

  function i() {
    var e = this, t = function (e) {
      return function () {
        window.setTimeout(function () {
          e.__show.apply(e)
        }, e.__time)
      }
    }(e);
    e.__handler = t, n(e.__win).on("scroll", e.__handler), n(e.__win).on("resize", e.__handler)
  }

  function o() {
    var e = this;
    n(e.__win).off("scroll", e.__handler), n(e.__win).off("resize", e.__handler), e.__domList = e.__dom = e.__win = e.__doc = null, e.callSuper("destroy"), e = null
  }

  function s() {
    var e = this, t = e.__doc;
    if (t) {
      var i, o, s, n, r, a, l = parseInt(t.documentElement.clientHeight), c = e.__domList, u = c.length;
      if (!u)return !1;
      for (var d = 0; u > d; d++)i = c[d], i && (o = i.getAttribute(e.__dataName), s = i.getBoundingClientRect(), n = parseInt(s.top), r = parseInt(s.bottom), (o && 0 > n * r || n >= 0 && r > 0 && l > n) && (i.onload = function () {
        var e = this.className;
        this.className = e.replace(/\s*fn-lazyLoading/, ""), this.style.cssText = this.getAttribute("data-cssText"), this.removeAttribute("data-cssText")
      }, a = i.className, /\s*fn-lazyLoading\s*/.test(a) || (i.className += a ? " fn-lazyLoading" : "fn-lazyLoading"), i.setAttribute("src", o), i.removeAttribute(e.__dataName), c[d] = null))
    }
  }

  var n = e("jquery"), r = e("pro"), a = r.Base.extend({
    constructor: t,
    members: {
      __time: null,
      __dom: null,
      __dataName: null,
      __tag: "img",
      __domList: null,
      __initListen: i,
      __win: null,
      __doc: null,
      __show: s,
      __handler: null,
      __minWidth: 40,
      __minHeight: 40,
      destroy: o
    }
  });
  return a
}),define("global/view/BaseAdapterView", ["require", "pro", "global/view/BaseView", "global/Broadcast"], function (e) {
  function t() {
    a.send.apply(a, arguments)
  }

  function i(e, t) {
    a.receive(e, t, this)
  }

  function o(e, t) {
    a.receive(e, t)
  }

  function s() {
    this.applySuper(arguments);
    var e = this.__config, t = this.Class, i = t.template, o = !i || i.indexOf(' ui="') > 0;
    this.context = e.context, o && this.listen("create", this.parseComponents), this.listen("beforecreate", this.onBeforeCreate), this.listen("create", this.onCreate), this.listen("render", this.onRender), this.listen("update", this.onUpdate), this.listen("show", this.onShow), this.listen("hide", this.onHide), this.listen("beforeDestroy", this.onBeforeDestroy), this.listen("destroy", this.onDestroy), this.listen("componentrender", this.onComponentRender), this.listen("allcomponentsrender", this.onAllComponentsRender)
  }

  var n = e("pro"), r = e("global/view/BaseView"), a = e("global/Broadcast");
  return n.AdapterView.extend({
    constructor: s,
    members: {
      onCreate: null,
      onRender: null,
      onUpdate: null,
      onShow: null,
      onHide: null,
      onBeforeDestroy: null,
      onDestroy: null,
      onComponentRender: null,
      onAllComponentsRender: null,
      onBeforeCreate: null,
      context: null,
      send: t,
      receive: i,
      unreceive: o,
      getTag: r.getTag,
      getApplication: r.getApplication,
      parseComponents: r.parseComponents,
      __tags: {}
    }
  })
}),define("global/view/LoadingView", ["require", "global/view/BaseView"], function (e) {
  var t = e("global/view/BaseView");
  return t.extend({overrides: {template: '<div class="w-loading"><b class="w-loading-ico"></b><span class="w-loading-txt">正在努力加载……</span></div>'}})
}),define("global/view/ErrorView", ["require", "global/view/BaseView"], function (e) {
  var t = e("global/view/BaseView");
  return t.extend({overrides: {template: '<div class="w-error"><b class="ico ico-face-sad"></b><div class="i-desc">列表获取失败~</div></div>'}})
}),define("global/view/BaseListView", ["require", "global/view/BaseView", "global/view/BaseAdapterView", "global/view/LoadingView", "global/view/ErrorView", "global/utils/Utils"], function (e) {
  function t() {
    var e = this.Class.LoadingView;
    this.autoShowLoadingAfterItems || this.hideItems(), this.hideEmpty(), this.__loadingView && !this.__loadingView.isDestroyed() ? this.__loadingView.show() : (this.__loadingView = new e, this.addView(this.__loadingView))
  }

  function i() {
    this.__loadingView && (this.__loadingView.hide(), this.list.getCount() || this.showEmpty(), this.autoShowLoadingAfterItems || this.showItems())
  }

  function o() {
    this.eachItems(function (e) {
      e.show()
    })
  }

  function s() {
    this.eachItems(function (e) {
      e.hide()
    })
  }

  function n(e) {
    var t = this.Class.ErrorView, i = this.__errorView;
    p.delay(this.hideEmpty, this), i && !i.isDestroyed() ? (e && i.update(), i.show()) : (i = this.__errorView = new t({model: this.model}), this.addView(i))
  }

  function r() {
    this.__errorView && this.__errorView.hide()
  }

  function a() {
    this.listen(this.list, "error", function () {
      this.showError()
    }), this.listen(this.list, "requeststart", function () {
      this.hideError()
    })
  }

  function l() {
    var e = this.list;
    e.isRequesting() && this.showLoading(), this.listen(e, "requeststart", function () {
      this.showLoading()
    }), this.listen(e, "requestcomplete", function () {
      this.hideLoading()
    })
  }

  function c() {
    this.applySuper(arguments);
    this.Class;
    this.autoShowLoading = this.autoShowLoading || this.autoShowLoadingAfterItems, this.autoShowLoading && this._listenLoading(), this.autoShowError && this._listenError()
  }

  function u(e) {
    var t = this.Class;
    return new t.ItemView({bind: this.bindItem, model: e})
  }

  var d = e("global/view/BaseView"), h = e("global/view/BaseAdapterView"), g = e("global/view/LoadingView"), m = e("global/view/ErrorView"), p = e("global/utils/Utils");
  return h.extend({
    constructor: c,
    statics: {ItemView: d, LoadingView: g, ErrorView: m},
    overrides: {bindList: !0, adapter: u},
    members: {
      autoShowError: !1,
      autoShowLoading: !1,
      autoShowLoadingAfterItems: !1,
      bindItem: !0,
      showLoading: t,
      hideLoading: i,
      showError: n,
      hideError: r,
      showItems: o,
      hideItems: s,
      _listenLoading: l,
      _listenError: a
    }
  })
}),define("global/view/DialogView", ["require", "pro", "global/view/BaseView"], function (e) {
  function t() {
    this.applySuper("destroy", arguments);
    var e = this.wrapper;
    e && !e.isDestroyed() && e.destroy()
  }

  function i(e) {
    e = e || {};
    var t = new this(e);
    this.wrapper = app.msgbox({
      className: e.wrapperClassName || this.wrapperClassName,
      text: t.getHtml(),
      listeners: {
        destroy: function () {
          !t.isDestroyed() && t.destroy(), t = null
        }
      }
    })
  }

  var o = (e("pro"), e("global/view/BaseView"));
  return o.extend({overrides: {destroy: t}, statics: {wrapperClassName: "", show: i}})
}),define("global/view/InfiniteScrollView", ["require", "global/view/BaseView", "global/view/BaseListView", "global/Broadcast"], function (e) {
  function t(e) {
    e.listen("reachbottom", e.onReachBottom), e.receive(n.GLOBAL_SCROLL, function () {
      var e = document.documentElement;
      if (this.dom) {
        var t = this.dom.getBoundingClientRect(), i = t.bottom, o = i <= e.clientHeight;
        o && this.trigger("reachbottom")
      }
    })
  }

  function i() {
    this.applySuper(arguments), this.Class.use(this)
  }

  var o = e("global/view/BaseView"), s = e("global/view/BaseListView"), n = e("global/Broadcast");
  return s.extend({
    constructor: i,
    statics: {ItemView: o, use: t},
    members: {onReachBottom: null},
    overrides: {bindList: !0, bottomInView: !1}
  })
}),define("global/view/PromptView", ["require", "global/view/BaseView"], function (e) {
  function t() {
    return this.getTag("input").getValue()
  }

  var i = e("global/view/BaseView");
  return i.extend({
    overrides: {
      template: '<div style="text-align: center;" class="w-prompt"><label>{{label}}</label> <div tag="input" ui="ui/Input" width="300"></div></div>',
      data: function (e) {
        return {label: e.label}
      }
    }, members: {getValue: t}
  })
}),define("global-tmp", function () {
});
define("login/LoginView", ["require", "pro", "global/view/BaseView", "ui/Menu", "global/utils/Utils"], function (e) {
  function i(e, i) {
    "username" == e ? this.username.showError(i) : "password" == e && this.password.showError(i)
  }

  function t(e, i) {
    13 == i.keyCode && this.onSubmit()
  }

  function o() {
    this.hideAutoComplete()
  }

  function s() {
    this.autoComplete && this.autoComplete.destroy()
  }

  function n(e) {
    this.username.setValue(e)
  }

  function r(e, i) {
    for (var t = this, o = [], s = 0, n = e.length; n > s; s++) {
      var r = e[s];
      o.push({text: r})
    }
    this.autoComplete ? this.autoComplete.update({
      items: o,
      offset: [0, this.username.dom.offsetHeight]
    }) : this.autoComplete = c.show({
      className: "m-autoComplete",
      destroyOnScroll: !1,
      autoFocus: !1,
      rel: this.username,
      offset: [0, this.username.dom.offsetHeight],
      listeners: {
        destroy: function () {
          t.autoComplete = null
        }, click: function (e, o) {
          i && i.call(t, e, o), t.password.focus()
        }, focus: function () {
          this.focused = !0
        }, blur: function () {
          this.focused = !1
        }
      },
      items: o
    })
  }

  function l() {
    this.username = this.getTag("username"), this.password = this.getTag("password"), this.listen(this.password, "focus", function () {
      this.hideAutoComplete()
    }), this.listen(this.username, "keyup", function (e, i) {
      var t = this.autoComplete;
      this.trigger("usernamechange", this.username.getValue()), t && 40 == e && (t.quietlyFocus(), t.select(0), h.cancelBubble(i))
    }), this.listen(this.username, "keydown", function (e) {
      9 == e && this.trigger("usernametab", this.username.getValue())
    }), this.listen(this.username, "focus", function () {
      this.username.hideError()
    }), this.listen(this.password, "focus", function () {
      this.password.hideError()
    })
  }

  function a() {
    var e = this.username.getValue(), i = this.password.getValue();
    this.trigger("submitclick", e, i)
  }

  var u = (e("pro"), e("global/view/BaseView")), c = e("ui/Menu"), h = e("global/utils/Utils");
  return u.extend({
    overrides: {
      events: {"@/keydown": t, "@submit": a},
      template: ['<div class="m-login w-form">', '<div class="w-form-item"><i class="ico ico-username"></i><input tag="username" ui="ui/Input" placeholder="网易邮箱" /></div>', '<div class="w-form-item"><i class="ico ico-password"></i><input tag="password" ui="ui/Input" placeholder="密码" type="password" /></div>', '<button class="w-button w-button-main m-login-btn" pro="submit"><span>登 录</span></button>', '<div class="m-login-ext"><a href="http://reg.email.163.com/unireg/call.do?cmd=register.entrance&from=one" target="_blank">马上注册</a></div>', '<div class="m-login-extLogin"><div class="hd"><span>第三方登录</span></div><div class="bd"><a class="ico ico-thirdLogin ico-thirdLogin-qq" title="QQ帐号登录" href="{{thirdPartyUrl.qq}}"></a><a class="ico ico-thirdLogin ico-thirdLogin-weixin" title="微信帐号登录" href="{{thirdPartyUrl.weixin}}"></a><a class="ico ico-thirdLogin ico-thirdLogin-weibo" title="微博帐号登录" href="{{thirdPartyUrl.weibo}}"></a></div></div>', '{{#isNTES}}<div style="margin-top:10px;text-align:center" class="m-login-ext"><a href="/wy" target="_blank">网易员工账号登录</a></div>{{/isNTES}}', "</div>"].join(""),
      onAllComponentsRender: l,
      onDestroy: o
    }, members: {setUsername: n, showAutoComplete: r, hideAutoComplete: s, onSubmit: a, showError: i}
  })
}), define("login/Login", ["require", "pro", "global/module/BaseModule", "global/controller/LoginController", "login/LoginView", "global/model/LoginModel", "ui/Msgbox"], function (e) {
  function i(e, i) {
    var t = l.show({
      header: this.TITLE, hideClose: i.hideClose, listeners: {
        ok: function () {
          return !1
        }
      }
    }), o = this.run({context: e, scale: t, params: i});
    o.listen(t, "destroy", function () {
      this.destroy()
    })
  }

  function t() {
    this.listen(this.view, "allcomponentsrender", function () {
      this.callSpecial("onRender", this.view)
    })
  }

  var o = (e("pro"), e("global/module/BaseModule")), s = e("global/controller/LoginController"), n = e("login/LoginView"), r = e("global/model/LoginModel"), l = e("ui/Msgbox");
  return o.extend({
    overrides: {name: "login", Controller: s, View: n, Model: r, listenSpecial: t},
    statics: {TITLE: "请使用网易邮箱帐号登录", show: i}
  })
});
define("ui/Button", ["require", "global/component/Button"], function (e) {
  var t = e("global/component/Button"), i = t.extend({
    overrides: {
      css: "",
      baseClassName: "w-button",
      template: '<{{__tag}} class="w-button"{{#href}} href="{{href}}"{{#target}} target="{{target}}"{{/target}}{{/href}}{{^href}}{{#type}} type="{{type}}"{{/type}}{{/href}}><span>{{text}}</span></{{__tag}}>'
    }
  });
  return i
}), define("ui/Checkbox", ["require", "global/component/Checkbox"], function (e) {
  var t = e("global/component/Checkbox"), i = t.extend({
    overrides: {
      baseClassName: "w-checkbox",
      template: '<label class="w-checkbox">{{#right}}{{#text}}<span>{{text}}</span> {{/text}}{{/right}}<input type="checkbox"{{#name}} name="{{name}}"{{/name}}{{#value}} value="{{value}}"{{/value}}{{#checked}} checked{{/checked}}/>{{^right}} {{#text}}<span>{{text}}</span>{{/text}}{{/right}}</label>'
    }
  });
  return i
}), define("ui/Input", ["require", "global/component/Input"], function (e) {
  var t = e("global/component/Input"), i = t.extend({
    overrides: {
      css: "",
      baseClassName: "w-input",
      template: '<div class="w-input"><input class="w-input-input" pro="input" type="{{type}}"{{#maxLength}} maxlength="{{maxLength}}"{{/maxLength}}{{#__rawPlaceholder}}{{#placeholder}} placeholder={{placeholder}}{{/placeholder}}{{/__rawPlaceholder}} /></div>',
      Tips: t.Tips.extend({overrides: {template: '<span class="w-input-tips">{{#icon}}<i class="ico ico-{{icon}}"></i>{{/icon}}{{text}}</span>'}}),
      Placeholder: t.Placeholder.extend({overrides: {template: '<span class="w-input-placeholder">{{text}}</span>'}})
    }, members: {
      showError: function (e) {
        return this.showTips(e, "txt-err", "err-s")
      }, showSuccess: function (e) {
        return this.showTips(e, "txt-suc", "suc-s")
      }, hideError: function () {
        return this.hideTips()
      }, hideSuccess: function () {
        return this.hideTips()
      }
    }
  });
  return i
}), define("ui/ChooseMoney", ["require", "pro", "global/component/Base", "global/view/BaseView", "global/view/BaseListView", "ui/Input", "global/utils/Utils"], function (e) {
  function t() {
    this.setValue(), this.renderMoney(this.getData("money"))
  }

  function i() {
    for (var e = this.getParent().getChildrenCount(), t = 0; e > t; t++)this.getParent().children[t].removeClass("w-select-true"), this.getParent().children[t].addClass("w-select-false");
    this.addClass("w-select-true")
  }

  function s(e) {
    var t = e.getElementsByTagName("input").item(0).value, i = this.getParent().checkInputValue(t);
    i ? this.children[1].showSuccess() : this.children[1].showError()
  }

  function n() {
    this.addView(new v.View({template: "<span>其他金额</span>"}), 0), this.addView(new w({subclass: "other"}), 1), this.getData("other_value") && (this.find("input").value = this.getData("other_value"))
  }

  function r(e) {
    var t = this, i = t.Class, s = i.Item, n = null;
    b.each(e, function (e) {
      t._isNum(e.value, function () {
        n = new s, n.addOtherView()
      }, function () {
        n = new s({data: e})
      }), t.listen(n, "changeMon", function () {
        this.trigger("change", e.value)
      }), t.addView(n)
    }), t._addClearFloat()
  }

  function o(e) {
    e && (e = parseInt(e)), this._evalMoney = e
  }

  function a() {
    return this._evalMoney
  }

  function l() {
    var e = this.getValue();
    this._isNum(e, function () {
      e = this.getInputValue(), e && (validator = this.checkInputValue(e), validator || (e = !1))
    }), this.setMoney(e)
  }

  function c() {
    var e = null, t = null, i = null, s = !0;
    if (void 0 == this.__config.data) {
      var e = {
        money: [{value: 20, sel: !1}, {value: 50, sel: !1}, {value: 100, sel: !0}, {
          value: 200,
          sel: !1
        }, {value: "其他金额", sel: !1}]
      };
      this.setData(e)
    } else {
      t = this.__config.data.money;
      for (var n = 0; n < t.length; n++)1 == t[n].sel && s ? s = !1 : this.__config.data.money[n].sel = !1;
      e = this.__config
    }
    t = this.getData("money"), b.each(t, function (e) {
      1 == e.sel && (i = e.value)
    }), null == i && (i = null), this.setMoney(i)
  }

  function u() {
    for (var e = this.getChildrenCount(), t = null, i = null, s = 0; e > s; s++)i = this.children[s].getDom().className, tempMatchItem = i.match(/w-select-true/g), null != tempMatchItem && (t = this.children[s].getDom().innerHTML);
    return t
  }

  function d() {
    return void 0 != this.find("input") ? (val = this.find("input").value, "" != val ? val : !1) : !1
  }

  function h(e) {
    if (0 == e || void 0 == e || null == e || "" == e)return !1;
    var t = /^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/;
    return valTmp = t.test(e), 0 == valTmp ? (console.log("输入的金额必须为小数点前8位，小数点后2位"), e = null, !1) : !0
  }

  function p(e, t, i) {
    var s = this;
    if (void 0 != e && null != e && 0 != e) {
      e = e.toString();
      var n = null;
      n = e.match(/^(\d)+/g)
    }
    null == n ? void 0 == t ? "" : t.call(this) : void 0 == i ? "" : i.call(s)
  }

  function m() {
    var e = this.Class.ClearFloat;
    this.addView(new e)
  }

  var v = e("pro"), f = e("global/component/Base"), g = e("global/view/BaseView"), w = (e("global/view/BaseListView"), e("ui/Input")), b = e("global/utils/Utils"), x = f.extend({
    overrides: {
      data: function (e) {
        return {money: e.money}
      },
      bind: !0,
      template: ['<div class="pay-money-wrap" pro="money-wrap" tag="ChooseMoney">', "</div>"].join(""),
      listeners: {
        create: t, change: function (e) {
          this.valueChange()
        }
      }
    },
    statics: {
      ClearFloat: g.extend({overrides: {template: '<br clear = "both" />'}}),
      Item: g.extend({
        overrides: {
          data: {value: null, sel: null},
          bind: !0,
          template: '<span class="w-pay-money w-select-{{sel}}" pro="pay-money" tag="payMoney">{{value}}{{#value}}元{{/value}}</span>',
          doms: {"w-pay-money": "@w-pay-money", input: "@input"},
          events: {
            "@/click": function () {
              this.trigger("changeMon")
            }, "@/change": function (e) {
              this.showMessage(e), this.trigger("changeMon")
            }
          },
          listeners: {
            changeMon: function () {
              this.choose()
            }, inputMoney: function () {
            }
          }
        }, members: {choose: i, showMessage: s, addOtherView: n}
      })
    },
    members: {
      _evalMoney: null,
      renderMoney: r,
      setMoney: o,
      getMoney: a,
      valueChange: l,
      setValue: c,
      getValue: u,
      getInputValue: d,
      checkInputValue: h,
      _isNum: p,
      _addClearFloat: m
    }
  });
  return x
}), define("ui/HoverTips", ["require", "pro", "global/component/Base"], function (e) {
  var t = (e("pro"), e("global/component/Base"));
  return t.extend({})
}), define("ui/IntervalScroll", ["require", "jquery", "pro", "global/component/Base"], function (e) {
  var t = e("jquery"), i = (e("pro"), e("global/component/Base")), s = i.extend({
    constructor: function () {
      this.applySuper(arguments);
      this.__config;
      s.current = this, s.current.interval = null
    },
    statics: {
      template: '<ul class="w-intervalScroll {{classname}}">						{{#items}}						<li pro="item" class="w-intervalScroll-item">{{&content}}</li>						{{/items}}						{{^items}}{{&defaultTxt}}{{/items}}					</ul>',
      doms: {item: "@item"},
      data: function (e) {
        return {
          isFresh: void 0 === e.isFresh ? !1 : e.isFresh,
          classname: e.classname || "",
          items: e.items || [],
          line: e.line || 1,
          perLine: e.perLine || 1,
          minLine: e.minLine || 5,
          speed: e.speed || 500,
          gap: e.gap || 5e3,
          defaultTxt: e.defaultTxt || "暂无内容"
        }
      },
      listeners: {
        render: function () {
          var e = (this.__config, this.dom), i = (t(e), t(this.find("@item")));
          i.length && (this.model.set("listLength", this.findAll("li").length), this.model.set("lineHeight", i.outerHeight()))
        }
      }
    },
    members: {
      scrollUp: function (e) {
        function i() {
          n.animate({marginTop: 0 - s.model.get("lineHeight") * o}, s.model.get("speed"), function () {
            for (var e = 0, t = l * o; t > e; e++)s.model.get("isFresh") ? n.find(".w-intervalScroll-item").eq(0).remove() : n.find(".w-intervalScroll-item").eq(0).appendTo(n);
            n.css("marginTop", 0), n.find(".w-intervalScroll-item").length / (l * o) < a + 1 && s.fire("runout")
          })
        }

        var s = e || this, n = t(s.dom), r = s.model.get("listLength"), o = s.model.get("line"), a = s.model.get("minLine"), l = s.model.get("perLine");
        void 0 === r || a >= r || (s.interval = setInterval(i, s.model.get("gap")), s.pause(s.scrollUp, s))
      }, scrollDown: function (e) {
      }, pause: function (e, i) {
        var s = i || this, n = t(s.dom);
        n.hover(function () {
          clearInterval(s.interval)
        }, function () {
          clearInterval(s.interval), e(i)
        })
      }
    }
  });
  return s
}), define("ui/Layer", ["require", "global/component/Layer"], function (e) {
  var t = e("global/component/Layer"), i = t.extend({
    overrides: {
      baseClassName: "w-layer",
      template: '<div class="w-layer" tabindex="0">{{text}}</div>',
      css: ""
    }
  });
  return i
}), define("ui/Menu", ["require", "global/component/Menu"], function (e) {
  var t = e("global/component/Menu"), i = t.extend({
    overrides: {
      css: "",
      baseClassName: "w-menu",
      template: '<div class="w-menu" tabindex="0">{{text}}</div>',
      Item: t.Item.extend({
        overrides: {
          baseClassName: "w-menu-item",
          template: '<div class="w-menu-item" tabindex="0" data-index="{{index}}" data-value="{{value}}">{{text}}</div>'
        }
      })
    }
  });
  return i
}), define("ui/Select", ["require", "global/component/Select", "ui/Menu"], function (e) {
  var t = e("global/component/Select"), i = e("ui/Menu"), s = t.extend({
    overrides: {
      Menu: i,
      baseClassName: "w-select",
      template: '<div class="w-select" tabindex="0"><span pro="text"></span><i class="w-select-arr">{{arr}}</i>{{#name}}<input type="hidden" name="{{name}}" />{{/name}}</div>',
      css: ""
    }
  });
  return s
}), define("ui/ListFilterView", ["require", "pro", "global/view/BaseView", "global/utils/Utils", "ui/Select"], function (e) {
  function t(e, t) {
    var i = this, s = this.Class, n = 0, r = this.__config.always;
    e && e.length && (u.each(e, function (e, o) {
      var a = new s.FilterItemView({
        text: e.text,
        number: e.number,
        value: e.value,
        always: r || e.always,
        listeners: {
          click: function () {
            i.switchFilterTo(this), i.trigger("filterchange", this.getData("value"), this.getIndex())
          }
        }
      });
      i.addView(a), (e.selected || t == e.value) && (n = o)
    }), this.silently(function () {
      this.switchFilterTo(n)
    }))
  }

  function i(e, t) {
    var i = this;
    e && e.length && (this.select = new d({
      left: !0, options: e, onChange: function (e, t) {
        i.trigger("selectchange", e, t)
      }
    }).render(this.find("@select")), void 0 !== t && this.silently(function () {
      this.select.setValue(t)
    }))
  }

  function s() {
    this.addClass("w-filters-filter-focus")
  }

  function n() {
    this.removeClass("w-filters-filter-focus")
  }

  function r(e) {
    "number" == typeof e && (e = this.getChild(e)), this.each(function (e) {
      e.blur()
    }), e.focus()
  }

  function o(e) {
    this.select.select(e)
  }

  function a() {
    this.select && this.select.destroy()
  }

  function l() {
    var e = this.__config;
    this.Class;
    this.renderFilters(e.filters, e.selectFilter), this.renderSelect(e.options, e.selectOptions)
  }

  var c = (e("pro"), e("global/view/BaseView")), u = e("global/utils/Utils"), d = e("ui/Select"), h = c.extend({
    overrides: {
      data: function (e) {
        return {filters: e.filters, options: e.options}
      },
      entry: "@filters",
      template: ['<div class="w-filter">', '<ul pro="filters" class="w-filter-filters"></ul>', '<div pro="select" class="w-filter-select"></div>', "</div>"].join("")
    },
    statics: {
      FilterItemView: c.extend({
        overrides: {
          template: '<li><a href="javascript:void(0);">{{text}}{{#showNumber}} <span class="txt-red">{{number}}</span>{{/showNumber}}</a></li>',
          data: function (e) {
            return {value: e.value, number: e.number - 0, text: e.text, showNumber: e.always || e.number > 0}
          },
          events: {"@": "click"}
        }, members: {focus: s, blur: n}
      })
    },
    members: {switchFilterTo: r, switchSelectTo: o, renderFilters: t, renderSelect: i, onCreate: l, onDestroy: a}
  });
  return h
}), define("ui/MoneySelector", ["require", "pro", "global/component/Base", "ui/Input", "global/utils/Utils"], function (e) {
  function t() {
    a.each(this.options, function (e) {
      this.add(e)
    }, this)
  }

  function i(e) {
    this.each(function (t, i) {
      return t.model.get("value") == e ? (this.focus(i), !1) : void(t.model.get("isInput") && (this.focus(i), t.setValue(e)))
    })
  }

  function s() {
    return this.model.get("value")
  }

  function n() {
    this.applySuper(arguments);
    var e = this.__config, t = e.options || this.options;
    this.options = "string" == typeof t ? t.split(",") : t, this.__renderItems()
  }

  var r = (e("pro"), e("global/component/Base")), o = e("ui/Input"), a = e("global/utils/Utils");
  return r.extend({
    constructor: n,
    overrides: {
      template: '<div class="w-pay w-money">{{#showTitle}}<div class="w-pay-title">{{title}}</div>{{/showTitle}}<div class="w-pay-selector" pro="selector"></div></div>',
      entry: "@selector"
    },
    statics: {
      Money: r.extend({
        overrides: {
          template: '<div class="w-pay-money">							{{#value}}								{{value}}元							{{/value}}							{{^value}}								<span>其他金额</span>&nbsp;&nbsp;<input/>							{{/value}}						</div>',
          events: {"@": "click"},
          listeners: {
            create: function () {
              if (!this.model.get("value")) {
                var e = this.find("input"), t = this.input = new o({width: 50, maxLength: 6}).renderBy(e);
                this.listen(t, "change", function () {
                  var e = t.getValue();
                  /\D/.test(e) ? (app.alert("请输入正确的金额"), this.fire("error")) : (this.model.set("value", e - 0), this.fire("click"))
                }), this.model.set("isInput", !0)
              }
            }
          }
        }, members: {
          setValue: function (e) {
            this.model.get("isInput") && this.input.setValue(e)
          }
        }
      })
    },
    members: {
      options: "10,20,100,200,0", add: function (e) {
        var t = this.constructor, i = new t.Money({data: {value: e - 0}}).join(this).render(this), s = this.getChildrenCount() - 1;
        this.listen(i, "click", function () {
          this.focus(s)
        })
      }, focus: function (e) {
        var t = this.getChildrenCount() - 1;
        e > t && (e = t), this.each(function (t, i) {
          if (e === i) {
            t.addClass("w-pay-money-selected");
            var s = t.model.get("value");
            this.model.set("value", s), this.fire("change", s, t)
          } else t.removeClass("w-pay-money-selected")
        })
      }, getValue: s, setValue: i, __renderItems: t
    }
  })
}), define("ui/Msgbox", ["require", "global/utils/Utils", "ui/Button", "global/component/Msgbox"], function (e) {
  function t(e) {
    var t = !!e.hideClose;
    e.okSubclass = e.okSubclass || "main", e.cancelSubclass = e.cancelSubclass || "aside", this.applySuper(arguments);
    var s = this.Class;
    if (e.ico) {
      var n = "";
      switch (e.ico) {
        case s.ICO_ALERT:
          n = "alert-m";
          break;
        case s.ICO_SUCCESS:
          n = "suc-m";
          break;
        case s.ICO_ERROR:
          n = "err-m"
      }
      this.model.set({ico: n})
    }
    t && this.listen("create", function () {
      i.removeDom(this.find("@close"))
    }), e.center && this.listen("create", function () {
      this.addClass("w-msgbox-center")
    }), this.listen("afterrender", function () {
      this.center()
    })
  }

  var i = e("global/utils/Utils"), s = e("ui/Button"), n = e("global/component/Msgbox"), r = n.extend({
    constructor: t,
    overrides: {
      css: "",
      baseClassName: "w-msgbox",
      template: '<div class="w-msgbox" tabindex="0">							<a pro="close" href="javascript:void(0);" class="w-msgbox-close">×</a>							<div class="w-msgbox-hd" pro="header">{{header}}</div>							<div class="w-msgbox-bd{{#ico}} w-msgbox-bd-hasIcon{{/ico}}" pro="entry">							    {{#ico}}<i class="w-msgbox-ico ico ico-{{ico}}"></i>{{/ico}}							    {{#ico}}<div class="w-msgbox-cont">{{/ico}}                                {{#title}}<h2 class="w-msgbox-title">{{title}}</h2>{{/title}}{{text}}</div>                                {{#ico}}</div>{{/ico}}							{{#__hasFooter}}								<div pro="footer" class="w-msgbox-ft">{{footer}}</div>							{{/__hasFooter}}						</div>',
      Button: s,
      Mask: n.Mask.extend({overrides: {template: '<div class="w-mask"></div>'}})
    },
    statics: {ICO_ALERT: "alert", ICO_SUCCESS: "suc", ICO_ERROR: "err"}
  });
  return r
}), define("ui/NewBonusView", ["require", "global/view/DialogView"], function (e) {
  var t = e("global/view/DialogView");
  return t.extend({
    overrides: {
      wrapperClassName: "w-msgbox-special w-msgbox-getBonus",
      template: '<a pro="ok" target="_blank" class="btn" href="/user/bonus.do" title="马上去看看"></a>'
    }
  })
}), define("ui/NewPrizeView", ["require", "global/view/DialogView"], function (e) {
  var t = e("global/view/DialogView");
  return t.extend({
    overrides: {
      wrapperClassName: "w-msgbox-special w-msgbox-getPrize",
      template: ['<div class="w-msgbox-getPrize-wrap">', '<p class="period">期号：{{period}}</p>', '<p class="name f-txtabb" title="{{gname}}">{{gname}}</p>', '<a pro="ok" class="btn" href="{{url}}" target="_blank">', "{{#isVirtual}}立即查看{{/isVirtual}}{{^isVirtual}}立即确认收货地址{{/isVirtual}}", "</a>", "</div>"].join("")
    }
  })
}), define("ui/NewWishView", ["require", "global/view/DialogView"], function (e) {
  function t(e) {
    var t = e.data;
    t.done ? this.applySuper("show", arguments) : t.undone ? app.msgbox({
      text: '<p style="text-align:center"><b>您的心愿单在指定时间内未完成！</b><br/>' + (t.supporter > 0 ? '<span style="font-size:12px;color:#808080">朋友们支持的款项已转为红包了哦！</span></p>' : "</p>"),
      okText: "立即查看",
      onok: function () {
        window.location.href = G.host + "/user/wishlist.do"
      }
    }) : t.soon && app.msgbox({
      text: '<p style="text-align:center"><b>您的心愿单即将到期结束，凑单仍未满额！</b><br/><span style="font-size:12px;color:#808080">您可以：赶快叫更多朋友来凑单；自己也可以补足余额实现心愿</span></p>',
      okText: "立即查看",
      onok: function () {
        window.location.href = G.host + "/user/wishlist.do"
      }
    })
  }

  var i = e("global/view/DialogView");
  return i.extend({
    overrides: {
      show: t,
      wrapperClassName: "w-msgbox-special w-msgbox-getPrize",
      template: ['<div class="w-msgbox-getPrize-wrap">', "<p>获得礼物</p>", '<p class="name f-txtabb" title="{{gname}}">{{gname}}</p>', '<a pro="ok" class="btn" href="{{url}}" target="_blank">', "{{#isVirtual}}立即查看{{/isVirtual}}{{^isVirtual}}立即确认收货地址{{/isVirtual}}", "</a>", "</div>"].join("")
    }
  })
}), define("ui/NumberInput", ["require", "global/component/NumberInput"], function (e) {
  var t = e("global/component/NumberInput");
  return t.extend({
    overrides: {
      template: '<div class="w-number"><a class="w-number-btn w-number-btn-minus" pro="minus" href="javascript:void(0);">－</a><input class="w-number-input" pro="input" type="text" value="{{value}}" /><a class="w-number-btn w-number-btn-plus" pro="plus" href="javascript:void(0);">＋</a></div>',
      css: "",
      baseClassName: "w-number"
    }, mixes: {
      events: {
        "@/mouseover": function () {
          var e = this.doms.input;
          e.select(), e.focus()
        }
      }
    }
  })
}), define("ui/Pager", ["require", "pro", "global/component/Base", "ui/Button"], function (e) {
  function t(e) {
    e = e || 0;
    var t = this._href;
    return t && (t = this.Class.fill(t, {page: e})), t
  }

  function i(e, t) {
    return t = "number" == typeof t ? t : 2, this._renderPages(e - t, e + t)
  }

  function s() {
    var e = new c({html: '<span class="w-pager-ellipsis">...</span>'});
    return this.addView(e), e
  }

  function n(e, t, i) {
    e = e > 0 ? e : 1, !t || t > this._total ? t = this._total : e > t && (t = e);
    for (var s = this, n = !1, r = e; t >= r; r++)if (i || !this.__renderedPages[r]) {
      var o = this._current == r, a = new u({
        subclass: o ? "main" : "aside",
        text: r + "",
        href: this._parseHref(r),
        onClick: o ? null : function () {
          s.trigger("click", this.page)
        }
      });
      a.page = r, this.addView(a), this.__renderedPages[r] = a
    } else n = !0;
    return n
  }

  function r() {
    var e = this, t = this._current, i = t - 1;
    this.addView(new u({
      subclass: "aside",
      text: "上一页",
      disabled: 1 >= t,
      href: this._parseHref(i),
      onClick: function () {
        e.trigger("prevclick"), e.trigger("click", i)
      }
    }))
  }

  function o() {
    var e = this, t = this._current, i = t + 1;
    this.addView(new u({
      subclass: "aside",
      text: "下一页",
      disabled: t >= this._total,
      href: this._parseHref(i),
      onClick: function () {
        e.trigger("nextclick"), e.trigger("click", i)
      }
    }))
  }

  function a() {
    var e = this.__config, t = this._total = e.total - 0, i = this._current = e.current - 0 || 1, s = (this._href = e.href, 10), n = 1, r = 2, o = n + r;
    if (this.__renderedPages = {}, this._renderPrev(), s >= t)this._renderPages(); else {
      this._renderAround(n, r);
      var a = this._renderEllipsis();
      i >= o ? this._renderAround(i, r) && a.hide() : a.hide();
      var l = this._renderEllipsis();
      this._renderAround(t, 0) && l.hide()
    }
    this._renderNext()
  }

  function l() {
    this.applySuper(arguments);
    var e = this.__config;
    this.listen("click", e.onClick), this.listen("prevclick", e.onPrevClick), this.listen("nextclick", e.onNextClick), this.listen("change", e.onChange), /msie\s9/i.test(navigator.userAgent) && this.listen("click", function () {
      setTimeout(function () {
        var e = document.documentElement.scrollLeft, t = document.documentElement.scrollTop;
        window.scrollTo(e, t - 1)
      }, 0)
    }), e.autoUpdate && this.listen("click", function (e) {
      this.trigger("change", e), this.update({current: e})
    })
  }

  var c = (e("pro"), e("global/component/Base")), u = e("ui/Button"), d = c.extend({
    constructor: l,
    overrides: {listeners: {create: a}, baseClassName: "w-pager", template: '<div class="w-pager"></div>'},
    members: {
      _total: 0,
      _current: 0,
      _href: null,
      _renderPrev: r,
      _renderNext: o,
      _renderPages: n,
      _renderAround: i,
      _renderEllipsis: s,
      _parseHref: t
    }
  });
  return d
}), define("ui/Radio", ["require", "global/component/Radio", "ui/Checkbox"], function (e) {
  var t = e("global/component/Radio"), i = e("ui/Checkbox"), s = t.extend({
    overrides: {
      baseClassName: "w-radioGroup",
      template: '<div class="w-radioGroup"></div>',
      Item: i.extend({
        overrides: {
          baseClassName: "w-radio",
          template: '<label class="w-radio">{{#right}}{{#text}}<span>{{text}}</span> {{/text}}{{/right}}<input type="radio"{{#name}} name="{{name}}"{{/name}}{{#value}} value="{{value}}"{{/value}}{{#checked}} checked{{/checked}}/>{{^right}} {{#text}}<span>{{text}}</span>{{/text}}{{/right}}</label>'
        }
      })
    }
  });
  return s
}), define("ui/RadioButton", ["require", "ui/Checkbox"], function (e) {
  var t = e("ui/Checkbox"), i = t.extend({
    overrides: {
      baseClassName: "w-radio",
      template: '<label class="w-radio">{{#right}}{{#text}}<span>{{text}}</span> {{/text}}{{/right}}<input type="radio"{{#name}} name="{{name}}"{{/name}}{{#value}} value="{{value}}"{{/value}}{{#checked}} checked{{/checked}}/>{{^right}} {{#text}}<span>{{text}}</span>{{/text}}{{/right}}</label>'
    }
  });
  return i
}), define("ui/ScrollToTopView", ["require", "global/view/BaseView"], function (e) {
  var t = e("global/view/BaseView");
  return t.extend({
    overrides: {
      template: '<a href="javascript:void(0);" class="w-back-top"><b class="ico ico-top"></b></a>',
      events: {
        "@": function () {
          window.scrollTo(0, 0)
        }
      }
    }
  })
}), define("ui/SlideShow", ["require", "jquery", "pro", "global/component/Base"], function (e) {
  var t = e("jquery"), i = (e("pro"), e("global/component/Base")), s = i.extend({
    constructor: function () {
      this.applySuper(arguments);
      this.__config;
      s.current = this, s.current.frame = 0, s.current.interval = null
    },
    statics: {
      css: {},
      template: '<div class="w-slide {{classname}}"						<div class="w-slide-wrap">							<ul class="w-slide-wrap-list" pro="list">								{{#items}}								<li pro="item" class="w-slide-wrap-list-item">{{&content}}</li>								{{/items}}							</ul>						</div>						<div class="w-slide-controller">							{{#hasBtn}}							<div class="w-slide-controller-btn" pro="controllerBtn" style="display: none;">                                <a class="prev" data-pro="prev" href="javascript:void(0)"><i class="ico ico-arrow-large ico-arrow-large-l"></i></a>                                <a class="next" data-pro="next" href="javascript:void(0)"><i class="ico ico-arrow-large ico-arrow-large-r"></i></a>                            </div>                            {{/hasBtn}}                            {{#hasNav}}                            <div class="w-slide-controller-nav" pro="controllerNav"></div>                            {{/hasNav}}						</div>					</div>',
      doms: {list: "@list", item: "@item", controllerBtn: "@controllerBtn", controllerNav: "@controllerNav"},
      data: function (e) {
        return {
          classname: e.classname || "",
          items: e.items || [],
          autoPlay: void 0 === e.autoPlay ? !0 : e.autoPlay,
          hasBtn: void 0 === e.hasBtn ? !0 : e.hasBtn,
          hasNav: void 0 === e.hasNav ? !0 : e.hasNav,
          perGroup: e.perGroup || 1,
          speed: e.speed || 500,
          gap: e.gap || 5e3
        }
      },
      events: {
        "@next": function () {
          this.fire("nextclick"), this.fire("slideChange", !0)
        }, "@prev": function () {
          this.fire("prevclick"), this.fire("slideChange", !0)
        }, "@item": function () {
          this.trigger("slideCLick", this.frame, this.itemsDom[this.frame])
        }
      },
      listeners: {
        render: function () {
          var e = this, i = e.doms, s = t(e.find("@item"));
          this.itemsDom = e.findAll("li");
          var n = this.itemsDom.length, r = e.model.get("perGroup"), o = 1, a = 0;
          if (!(r >= n)) {
            e.model.set("listLength", n), e.model.set("group", n / r), o = e.model.get("group"), e.model.set("moveLen", s.outerWidth() * r), a = e.model.get("moveLen");
            var l = this.__config.statisticalKey || "";
            if (e.model.get("hasNav") && o > 1) {
              for (var c = "", u = 0, d = Math.ceil(o); d > u; u++)c += '<a class="dot' + (0 == u ? " curr" : "") + '" href="javascript:void(0)">' + l + "导航</a>";
              i.controllerNav.innerHTML = c, i.navs = t(i.controllerNav).find("a"), i.navs.bind("click", function () {
                e.fire("navclick", this)
              })
            }
            t(i.list).css("width", n * a), t(e.dom).hover(function () {
              e.fire("pauseslide")
            }, function () {
              e.fire("startslide")
            })
          }
        }, startslide: function () {
          this.start(), this.doms.controllerBtn && (this.doms.controllerBtn.style.display = "none")
        }, pauseslide: function () {
          this.interval && (clearInterval(this.interval), this.interval = null), this.doms.controllerBtn && (this.doms.controllerBtn.style.display = "block")
        }, nextclick: function () {
          this.frame < this.model.get("group") - 1 ? this.frame++ : this.frame = 0, this.switchTo()
        }, prevclick: function () {
          this.frame > 0 ? this.frame-- : this.frame = this.model.get("group") - 1, this.switchTo()
        }, navclick: function (e) {
          var i = t(e).index();
          return this.frame == i ? !1 : (this.frame = i, void this.switchTo())
        }
      }
    },
    members: {
      start: function (e) {
        var t = e || this, i = t.model.get("autoPlay"), s = t.model.get("gap");
        i && (t.interval && clearInterval(t.interval), t.interval = setInterval(function () {
          t.fire("nextclick"), t.fire("slideChange")
        }, s))
      }, switchTo: function (e) {
        var i = e || this, s = t(i.doms.controllerNav).find("a");
        s.removeClass("curr"), s.eq(i.frame).addClass("curr"), t(i.doms.list).animate({left: 0 - i.model.get("moveLen") * i.frame + "px"}, i.model.get("speed"), function () {
          i.start()
        })
      }
    }
  });
  return s
}), define("ui/Tabs", ["require", "global/component/Base", "global/component/Tabs"], function (e) {
  var t = (e("global/component/Base"), e("global/component/Tabs")), i = t.extend({
    overrides: {
      baseClassName: "w-tabs",
      template: '<div class="w-tabs"><div class="w-tabs-tab" pro="tab"></div><div class="w-tabs-panel" pro="panel"></div></div>',
      css: "",
      Tab: t.Tab.extend({
        overrides: {
          baseClassName: "w-tabs-tab-item",
          template: '<div class="w-tabs-tab-item" tabindex="0">{{text}}</div>'
        }
      }),
      Panel: t.Panel.extend({
        overrides: {
          template: '<div class="w-tabs-panel-item">{{text}}</div>',
          baseClassName: "w-tabs-panel-item"
        }
      })
    }
  });
  return i
}), define("ui/Textarea", ["require", "ui/Input"], function (e) {
  var t = e("ui/Input"), i = t.extend({overrides: {template: '<div class="w-input w-input-textarea"><textarea class="w-input-input" pro="input"{{#__rawPlaceholder}}{{#placeholder}} placeholder={{placeholder}}{{/placeholder}}{{/__rawPlaceholder}} >{{value}}</textarea></div>'}});
  return i
}), define("ui/TipLayer", ["require", "jquery", "pro", "global/component/Base"], function (e) {
  var t = e("jquery"), i = (e("pro"), e("global/component/Base")), s = i.extend({
    constructor: function (e) {
      this.applySuper(arguments), e = this.__config, e = e || {}, e.delay = e.delay || 200, s.current && s.current.destroy(), s.current = this, this.listen("render", function (i) {
        var s = t(e.ref);
        i.style.width = e.width ? e.width + "px" : "auto", i.style.top = s.offset().top - t(i).outerHeight() - 10 + "px", i.style.left = s.offset().left + s.outerWidth() / 2 - 6 + "px"
      })
    },
    statics: {
      template: '<div class="w-tipsLayer {{classname}}">						<i class="ico ico-arrow ico-arrow-tipArr"></i>						{{text}}					</div>',
      data: function (e) {
        return {classname: e.classname || "", title: e.title || "", text: e.text || ""}
      },
      listeners: {
        create: function () {
          t(this.dom).css({opacity: 0})
        }, render: function () {
          t(this.dom).animate({opacity: 1}, this.__config.delay)
        }
      },
      show: function (e) {
        return s.current ? void 0 : (new this(e).render(document.body), s.current)
      }
    },
    members: {
      destroy: function () {
        var e = this;
        t(this.dom).animate({opacity: 0}, this.__config.delay, function () {
          i.prototype.destroy.call(e), s.current = null
        })
      }
    }
  });
  return s
}), define("ui/Video", ["require", "pro", "global/component/Base", "ui/Button"], function (e) {
  function t() {
    this.applySuper(arguments);
    var e = (this.__config, navigator.userAgent);
    /MSIE 6/.test(e) || /MSIE 7/.test(e) || /MSIE 8/.test(e) ? this.isLowVersionIE = !0 : this.isLowVersionIE = !1
  }

  function i() {
    var t = this, i = this.__config;
    this.doms.wrap.style.width = i.width + "px", this.doms.wrap.style.height = i.height + "px", this.isLowVersionIE && i.sources.swf && "" != i.sources.swf ? e(["http://mimg.127.net/p/one/web/lib/js/swfobject.js"], function () {
      t.renderVideo()
    }) : t.renderVideo()
  }

  function s() {
    this.renderCover(), this.renderBtnPlay()
  }

  function n() {
    var e = this.__config;
    e.hasCover && (this.cover = document.createElement("img"), this.cover.className = "w-video-wrap-cover", this.cover.src = e.cover, this.cover.width = e.width, this.cover.height = e.height, this.doms.wrap.appendChild(this.cover))
  }

  function r() {
    var e = this, t = this.__config;
    this.btnPlay = new h({
      className: "w-video-wrap-btnPlay", onClick: function () {
        t.hasCover && (e.cover.style.display = "none"), e.btnPlay.hide(), e.play()
      }
    }), this.btnPlay.render(this.doms.wrap).join(this)
  }

  function o() {
    this.isPlay = !0, this.renderBtnStop(), this.isLowVersionIE ? this.renderLowVersionIEVideo() : this.renderModernBrowserVideo()
  }

  function a() {
    var e = this;
    this.btnStop = new h({
      className: "w-video-wrap-btnStop", onClick: function () {
        e.stop()
      }
    }), this.btnStop.render(this.doms.wrap).join(this)
  }

  function l() {
    var e = this.__config, t = document.createElement("video");
    this.videoDomID = "rawVideo" + (new Date).getTime(), t.setAttribute("id", this.videoDomID), t.setAttribute("src", e.sources.mp4), t.setAttribute("width", e.width), t.setAttribute("height", e.height), t.setAttribute("controls", "controls"), t.setAttribute("preload", "preload"), t.setAttribute("autoplay", "autoplay"), t.setAttribute("class", "w-video-wrap-rawVideo"), this.doms.wrap.appendChild(t)
  }

  function c() {
    var e = this.__config;
    this.videoDomID = "rawVideo" + (new Date).getTime();
    var t = document.createElement("span");
    t.setAttribute("id", this.videoDomID), this.doms.wrap.appendChild(t);
    var i = {}, s = {loop: !1, wmode: "opaque"}, n = {"class": "w-video-wrap-rawVideo"};
    swfobject.embedSWF(e.sources.swf, this.videoDomID, e.width, e.height, 10, this.Class.EXPRESS_INSTALL_URL, i, s, n)
  }

  function u() {
    this.isPlay && (this.doms.wrap.removeChild(document.getElementById(this.videoDomID)), this.__config.hasCover && (this.cover.style.display = "block"), this.btnPlay.show(), this.trigger("stop"), this.btnStop.destroy(), this.isPlay = !1)
  }

  var d = (e("pro"), e("global/component/Base")), h = e("ui/Button"), p = d.extend({
    constructor: t,
    overrides: {
      baseClassName: "w-video",
      template: ['<div class="w-video" pro="video">', '   <div class="w-video-wrap" pro="videoWrap"></div>', "</div>"].join(""),
      doms: {wrap: "@videoWrap"},
      data: function (e) {
        return {sources: e.sources || {mp4: "", swf: ""}, cover: e.cover || ""}
      },
      listeners: {create: i}
    },
    statics: {EXPRESS_INSTALL_URL: "http://mimg.127.net/p/one/web/swf/expressInstall.swf"},
    members: {
      renderVideo: s,
      renderCover: n,
      renderBtnPlay: r,
      play: o,
      renderBtnStop: a,
      renderModernBrowserVideo: l,
      renderLowVersionIEVideo: c,
      stop: u
    }
  });
  return p
}), define("common/Tongji", ["require", "global/utils/Utils"], function (e) {
  var t = e("global/utils/Utils"), i = window.location.pathname, s = (window.location.href, "add_event"), n = "click";
  return {
    SEPARATOR: "_",
    PAGE_LOAD: "PageLoad",
    INDEX_MOD: "IndexMod",
    DETAIL_MOD: "IndexMod",
    ATTEND: "attend",
    ADD_CART: "addCart",
    GOTO_CART: "gotoCart",
    RULES: {
      Index: /^\/(?:index\.do)?$/,
      Reveal: "/results.html",
      ShareOrder: "/share.do",
      ShareOrderDetail: "/user/shareDetail.do",
      ShareEdit: "/user/shareAdd.do",
      GoodsDetail: {
        path: "/detail/", params: function () {
          return {gid: i.match(/\/(\d+)(?:\-\d+)\.html$/)[1]}
        }
      },
      Discover: "",
      Shake: "",
      Personal: "/user/index.do",
      ParticipateRecord: "/user/duobao.do",
      WinRecord: "/user/win.do",
      MallOrderrecord: "/user/mallrecord.do",
      BonusList: "/user/bonus.do",
      Jewel: "/user/gems.do",
      WishRecord: "/user/wishlist.do",
      WishDetail: "/user/wishDetail.do",
      MyShareRecord: "/user/share.do",
      Setting: "/user/setting.do",
      AddressRecord: "/user/address.do",
      RechargeRecord: "/user/chargeRecord.do",
      ShoppingCart: "/cart/index.do",
      SubmitOrder: "/newpay/order/info.do",
      PayOrder: "/cashier/order/info.do",
      PayResult: "/newpay/order/result.do",
      Recharge: "/cashier/recharge/info.do",
      SearchResult: "/search.do",
      Nav: "",
      Kind0: "/list.html",
      Kind1001: "/ten/index.html",
      Kind1: "/list/1-0-1-1.html",
      Kind2: "/list/2-0-1-1.html",
      Kind3: "/list/3-0-1-1.html",
      Kind4: "/list/4-0-1-1.html",
      Kind5: "/list/5-0-1-1.html",
      Kind6: "/list/6-0-1-1.html",
      Kind7: "/list/7-0-1-1.html",
      Kind8: "/list/8-0-1-1.html",
      Login: "",
      Register: ""
    },
    use: function () {
      this.sendPageLoad(), this.bindingClick()
    },
    matchPath: function () {
      function e(e) {
        var t = !1;
        return e && ("string" == typeof e && 0 == i.indexOf(e) ? t = !0 : "function" == typeof e && e(s) ? t = !0 : e.test && e.test(i) && (t = !0)), t
      }

      var t = this.RULES;
      for (var s in t) {
        var n = t[s];
        if (n.path && e(n.path) || e(n))return {key: s, params: n.params && n.params()}
      }
    },
    getKey: function () {
      for (var e = [], t = 0, i = arguments.length; i > t; t++)e.push(arguments[t]);
      return e.join(this.SEPARATOR)
    },
    sendPageLoad: function () {
      var e = this.matchPath();
      e && this.send(this.getKey(this.PAGE_LOAD, e.key), e.params)
    },
    send: function (e, t) {
      Countly.q.push([s, {key: e, segmentation: t}])
    },
    bindingClick: function () {
      var e = this, i = document.documentElement;
      t.addEvent(i, n, function (t) {
        var s = t || window.event, n = s.srcElement || s.target;
        do {
          var r = n.getAttribute("tj");
          if (r) {
            var o = e.parseAttr(r);
            e.send(o.key, o.params)
          }
          n = n.parentNode
        } while (n && n !== i)
      })
    },
    parseAttr: function (e) {
      for (var t = e.split("?"), i = t[0], s = (t[1] || "").split("&"), n = 0, r = s.length; r > n; n++) {
        var o = s[n].split("=");
        s[n][o[0]] = o[1]
      }
      return {key: i, params: s}
    }
  }
}), define("common/Application", ["require", "pro", "global/Application", "global/Broadcast", "global/view/PromptView", "ui/NewBonusView", "ui/NewPrizeView", "ui/NewWishView", "ui/ScrollToTopView", "ui/Msgbox", "global/utils/Url", "common/Tongji", "global/utils/Utils"], function (e) {
  function t() {
    (app.isRelease() || app.isTest()) && _.use(), this.feedback(C.$("btnFooterFeedback")), this.applySuper("init", arguments)
  }

  function i() {
    this.receive(m.HEADER_FIXED, function () {
      this.showScrollToTop()
    }), this.receive(m.HEADER_UNFIXED, function () {
      this.hideScrollToTop()
    })
  }

  function s(e) {
    if (e)this.autoShowScrollToTop(); else {
      var t = this._scrollToTop;
      t ? t.show() : (t = this._scrollToTop = new b, t.render(document.body))
    }
  }

  function n() {
    this._scrollToTop && this._scrollToTop.hide()
  }

  function r(e, t, i) {
    return app.msgbox({className: i, text: new e({data: t})})
  }

  function o() {
    var e = this._notification.get("once.wishlist"), t = e.status, i = {UNDONE: 0, SOON: 1, DONE: 2};
    e.done = t == i.DONE, e.soon = t == i.SOON, e.undone = t == i.UNDONE, e.isVirtual = 1 == e.property, e.url = "/user/wishDetail.do?wid=" + e.wid, w.show({data: e})
  }

  function a() {
    f.show()
  }

  function l() {
    var e = this._notification.get("once.prize");
    e.url = y.getUserWin(), e.isVirtual = 1 == e.property, g.show({data: e})
  }

  function c(t, i) {
    var s = this;
    e(["login/Login"], function (e) {
      e.show(s, {hideClose: "hd" == s.getName() || t, url: i})
    })
  }

  function u() {
    var e = window.location.search;
    if (/[?&]needLogin=1(?=&|$)/.test(e) && !this.isLogin()) {
      var t = (e.match(/[?&]url=(.+?)(?=&|$)/) || [])[1];
      this.login(!1, t)
    }
  }

  function d() {
    var e = this;
    this.applySuper("_listenEvents", arguments), h.addEvent(window, "scroll", function (t) {
      e.send(m.GLOBAL_SCROLL, document.body.scrollTop || document.documentElement.scrollTop)
    }), this.receive(m.COMMAND_LOGIN, this.login), this.receive(m.GLOBAL_DATA_READY, this._parseUrl), this.receive(m.GLOBAL_HAS_NEW_BONUS, this.showNewBonus), this.receive(m.GLOBAL_HAS_NEW_PRIZE, this.showNewPrize), this.receive(m.GLOBAL_HAS_NEW_WISH, this.showNewWish)
  }

  var h = e("pro"), p = e("global/Application"), m = e("global/Broadcast"), v = e("global/view/PromptView"), f = e("ui/NewBonusView"), g = e("ui/NewPrizeView"), w = e("ui/NewWishView"), b = e("ui/ScrollToTopView"), x = e("ui/Msgbox"), y = e("global/utils/Url"), _ = e("common/Tongji"), C = e("global/utils/Utils");
  return p.extend({
    overrides: {Msgbox: x, PromptView: v, login: c, init: t, _listenEvents: d},
    members: {
      showNewBonus: a,
      showNewPrize: l,
      showNewWish: o,
      showNotification: r,
      autoShowScrollToTop: i,
      showScrollToTop: s,
      hideScrollToTop: n,
      _parseUrl: u,
      _scrollToTop: null
    }
  })
}), define("ui-tmp", [], function () {
});
define("header/HeaderView", ["require", "pro", "global/view/BaseView"], function (e) {
  function i() {
    var e = this.dom;
    return "index" == app.getName() ? e.scrollHeight : e.offsetHeight
  }

  function t() {
    return this.doms.nav ? this.doms.nav.offsetHeight : 0
  }

  function o() {
    this.addClass(this.Class.CLASS_FIXED), this.dom.style.paddingBottom = this.getNavHeight() + "px"
  }

  function n() {
    this.removeClass(this.Class.CLASS_FIXED), this.dom.style.paddingBottom = ""
  }

  var r = (e("pro"), e("global/view/BaseView"));
  return r.extend({
    overrides: {doms: {nav: ".m-nav"}},
    statics: {CLASS_FIXED: "g-header-fixed"},
    members: {fix: o, unfix: n, getNavHeight: t, getHeight: i}
  })
}), define("header/Header", ["require", "pro", "global/module/BaseModule", "header/HeaderView", "global/Broadcast", "global/utils/Utils"], function (e) {
  function i() {
    this.listen("launchall", function () {
      this.callSpecial("onRender", this.view)
    })
  }

  function t() {
    var e = this, i = e.getView(), t = i.getHeight();
    this.getParams("fix") !== !1 && this.receive(r.GLOBAL_SCROLL, function (e) {
      e >= t ? this.fixed || (this.fixed = !0, this.send(r.HEADER_FIXED), i.fix()) : this.fixed && (this.fixed = !1, this.send(r.HEADER_UNFIXED), i.unfix())
    })
  }

  var o = (e("pro"), e("global/module/BaseModule")), n = e("header/HeaderView"), r = e("global/Broadcast");
  e("global/utils/Utils");
  return o.extend({overrides: {name: "header", View: n, onLaunchAll: t, listenSpecial: i}})
}), define("toolbar/ToolbarUserInfoView", ["require", "pro", "global/view/BaseView", "global/utils/Url"], function (e) {
  var i = (e("pro"), e("global/view/BaseView")), t = e("global/utils/Url");
  return i.extend({
    overrides: {
      events: {".m-toolbar-login-btn": "loginclick", ".m-toolbar-logout-btn": "logoutclick"},
      template: [''].join(""),
      data: function () {
        return {userUrl: t.getUser()}
      }
    }
  })
}), define("toolbar/ToolbarView", ["require", "pro", "global/view/BaseView", "toolbar/ToolbarUserInfoView"], function (e) {
  function i() {
    this.applySuper(arguments), this.listenEvents()
  }

  function t() {
    this.transmit("loginclick"), this.transmit("logoutclick")
  }

  function o(e) {
    var i = new r({bind: !0, model: e});
    this.addView(i, this.doms.userInfo)
  }

  var n = (e("pro"), e("global/view/BaseView")), r = e("toolbar/ToolbarUserInfoView");
  return n.extend({
    constructor: i,
    overrides: {
      doms: {userInfo: ".m-toolbar-login", duobaoMenu: ".m-toolbar-myDuobao-menu"},
      events: {
        ".m-toolbar-myDuobao/mouseover": function (e) {
          this.addClass("m-toolbar-myDuobao-hover", e)
        }, ".m-toolbar-myDuobao/mouseout": function (e) {
          this.removeClass("m-toolbar-myDuobao-hover", e)
        }
      }
    },
    members: {renderUserInfo: o, listenEvents: t}
  })
}), define("toolbar/ToolbarController", ["require", "pro", "global/controller/BaseController", "global/Broadcast"], function (e) {
  function i() {
    var e = this.model, i = this.view;
    this.context;
    this.listenEvents(), i.renderUserInfo(e)
  }

  function t() {
    this.listen(this.view, "logoutclick", function () {
      app.logout()
    }), this.listen(this.view, "loginclick", function () {
      app.login()
    })
  }

  function o() {
    this.applySuper(arguments), this.model = app.getAccount(), this.init()
  }

  var n = (e("pro"), e("global/controller/BaseController"));
  e("global/Broadcast");
  return n.extend({constructor: o, members: {listenEvents: t, init: i}})
}), define("toolbar/Toolbar", ["require", "pro", "global/module/BaseModule", "toolbar/ToolbarView", "toolbar/ToolbarController"], function (e) {
  function i() {
    this.listen(this.view, "afterrender", function () {
      this.callSpecial("onRender", this.view)
    })
  }

  var t = (e("pro"), e("global/module/BaseModule")), o = e("toolbar/ToolbarView"), n = e("toolbar/ToolbarController");
  return t.extend({overrides: {name: "toolbar", Controller: n, View: o, listenSpecial: i}})
}), define("minicart/menu/MiniCartItemView", ["require", "pro", "global/view/BaseView"], function (e) {
  var i = (e("pro"), e("global/view/BaseView"));
  return i.extend({
    overrides: {
      events: {"@del": "delclick"},
      template: ['<li class="w-miniCart-item">', '<div class="w-miniCart-item-pic">', '<img src="{{info.goods.smallPic}}" onerror="this.src=\'http://mimg.127.net/p/yy/lib/img/products/s.png\'" alt="{{info.goods.gname}}">', "</div>", '<div class="w-miniCart-item-text">', "<p><strong>{{info.goods.gname}}</strong></p>", "<p><em>{{num}}人次 × {{regularBuy}}期</em>", '<a class="w-miniCart-item-del" href="javascript:void(0);" pro="del">删除</a></p>', "</div>", "</li>"].join("")
    }
  })
}), define("minicart/menu/MiniCartMenuView", ["require", "pro", "global/view/BaseView", "global/view/BaseListView", "minicart/menu/MiniCartItemView"], function (e) {
  function i() {
    this.transmit("delclick"), this.transmit("goclick")
  }

  function t(e, i) {
    var t = this.Class, o = this.model;
    this.title = new t.TitleView({bind: !0, model: o}), this.footer = new t.FooterView({
      bind: !0,
      model: o
    }), this.addView(this.title, this.find("@title")), this.addView(this.footer, this.dom)
  }

  function o() {
    this.applySuper(arguments), this.listenEvents()
  }

  var n = (e("pro"), e("global/view/BaseView")), r = e("global/view/BaseListView"), s = e("minicart/menu/MiniCartItemView");
  return r.extend({
    constructor: o,
    overrides: {
      ItemView: s,
      EmptyView: n.extend({overrides: {template: '<li class="w-miniCart-empty">您的清单中还没有任何商品</li>'}}),
      entry: "@list",
      template: ['<div class="w-layer w-miniCart-layer">', '<div pro="title"></div>', '<ul pro="list" class="w-miniCart-list"></ul>', "</div>"].join(""),
      onCreate: t
    },
    statics: {
      TitleView: n.extend({overrides: {template: '{{#count}}<p class="w-miniCart-layer-title"><strong>最近加入的商品</strong></p>{{/count}}'}}),
      FooterView: n.extend({
        overrides: {
          doms: {count: "@count", amonut: "@amount"},
          events: {"@go": "goclick"},
          template: ['{{#count}}<div pro="footer" class="w-miniCart-layer-footer">', '<p><strong>共有<b pro="count">{{count}}</b>件商品，金额总计：<em><span pro="amount">￥{{amount}}</span></em></strong></p>', '<p><button pro="go" class="w-button w-button-main">查看清单并结算</button></p>', "</div>{{/count}}"].join("")
        }
      })
    },
    members: {listenEvents: i}
  })
}), define("minicart/MiniCartView", ["require", "pro", "global/view/BaseView", "minicart/menu/MiniCartMenuView", "global/utils/Utils", "jquery"], function (e) {
  function i(e) {
    e = c(e);
    var i = c(this.dom), t = e.clone(), o = 700;
    t.css({
      position: "absolute",
      top: e.offset().top,
      left: e.offset().left,
      "z-index": 100
    }), c("body").append(t), t.animate({
      left: i.offset().left + 60,
      top: i.offset().top + 17,
      width: 0,
      height: 0,
      opacity: .2
    }, o, function () {
      t.remove()
    })
  }

  function t() {
    this.listen(this.menu, "goclick", function () {
      this.trigger("click")
    }), this.listen(this.menu, "delclick", function (e) {
      this.trigger("delclick", e)
    })
  }

  function o(e) {
    var i = this.Class, t = this.bubble;
    t ? (t.update({text: e}), t.show()) : (this.bubble = new i.BubbleView({data: {text: e}}), this.bubble.render(this.doms.btn))
  }

  function n() {
    var e = this.menu;
    e && (a.cancelDelay(this.__during), this.__during = a.delay(function () {
      e.isRendered() ? e.show() : (this.addView(e), this.trigger("menurender", e)), this.trigger("menushow", e)
    }, this, this.__duringTime))
  }

  function r() {
    var e = this.menu;
    e && (a.cancelDelay(this.__during), this.__during = a.delay(function () {
      e.hide(), this.trigger("menuhide")
    }, this, this.__duringTime))
  }

  function s(e) {
    this.list = e.list, this.model = e.model, this.initMenu()
  }

  function l() {
    this.menu || (this.menu = new u({
      list: this.list,
      model: this.model
    }), this.listenMenuEvents(), this.trigger("menuinit", this.menu))
  }

  var a = e("pro"), d = e("global/view/BaseView"), u = e("minicart/menu/MiniCartMenuView"), c = (e("global/utils/Utils"), e("jquery"));
  return d.extend({
    overrides: {
      doms: {btn: ".w-miniCart-btn"},
      events: {".w-miniCart-btn": "click", "@/mouseover": n, "@/mouseout": r}
    },
    statics: {BubbleView: d.extend({overrides: {template: '<b class="w-miniCart-count"><i class="ico ico-arrow-white-solid ico-arrow-white-solid-l"></i>{{text}}</b>'}})},
    members: {listenMenuEvents: t, setData: s, showBubble: o, initMenu: l, fly: i, __during: 0, __duringTime: 200}
  })
}), define("minicart/MiniCartController", ["require", "pro", "global/controller/BaseController", "global/model/CartModelList", "global/model/LocalCartModelList", "global/model/CartModel", "global/model/LocalCartModel", "global/model/BaseModel", "global/Broadcast", "global/utils/Utils"], function (e) {
  function i() {
    this.list.fetch()
  }

  function t() {
    var e = this.list, i = this.model;
    this.context;
    i.set({amount: e.getAmount(), count: e.getCount()}), this.view.showBubble(i.get("count"))
  }

  function o() {
    this.list.fetch()
  }

  function n(e, i) {
    function t(e) {
      "gid" in e && (e.id = e.gid - 0, delete e.gid)
    }

    var o = this;
    e instanceof Array ? m.each(e, t) : t(e), this.list.add(e, function () {
      i && o.view.fly(i), e.success && e.success.call(o), o = null, i = null
    }, function () {
      e.error && e.error.call(o), o = null
    })
  }

  function r() {
    var e = app.isLogin(), i = this.view, t = this.model = new c, o = this.local = new u, n = this.list = e ? new d : this.local;
    this.context;
    i.setData({
      list: n,
      model: t
    }), this.listenEvents(), e ? (o.fetch(!1), o.getCount() ? o.sync(n) : n.fetch()) : n.fetch()
  }

  function s() {
    this.applySuper(arguments), app.isHistory() ? this.receive(h.GLOBAL_DATA_READY, this.init) : this.init()
  }

  function l() {
    var e = this.view, i = this.list;
    this.listen(e, "delclick", function (e) {
      e.model.del()
    }), this.listen(i, "change", this.onListChange), this.listen(e, "click", function () {
      app.go("cart")
    }), this.receive(h.CART_CHANGED, this.onCartChangeNotice), this.receive(h.COMMAND_ADD_TO_CART, this.onAddToCartCommand), this.receive(h.COMMAND_UPDATE_CART, this.onUpdateCartCommand)
  }

  var a = (e("pro"), e("global/controller/BaseController")), d = e("global/model/CartModelList"), u = e("global/model/LocalCartModelList"), c = (e("global/model/CartModel"), e("global/model/LocalCartModel"), e("global/model/BaseModel")), h = e("global/Broadcast"), m = e("global/utils/Utils");
  return a.extend({
    constructor: s,
    members: {
      listenEvents: l,
      init: r,
      onUpdateCartCommand: i,
      onAddToCartCommand: n,
      onCartChangeNotice: o,
      onListChange: t
    }
  })
}), define("minicart/MiniCart", ["require", "pro", "global/module/BaseModule", "minicart/MiniCartView", "minicart/MiniCartController"], function (e) {
  function i() {
    this.listen(this.list, "change", function () {
      this.callSpecial("onChange", this.list)
    }), this.listen(this.view, "menurender", function (e) {
      this.callSpecial("onMenuRender", e)
    }), this.listen(this.view, "afterrender", function () {
      this.callSpecial("onAfterRender", this.view)
    })
  }

  var t = (e("pro"), e("global/module/BaseModule")), o = e("minicart/MiniCartView"), n = e("minicart/MiniCartController");
  return t.extend({overrides: {name: "miniCart", View: o, Controller: n, listenSpecial: i}})
}), define("searchbar/SearchBarView", ["require", "pro", "global/view/BaseView", "ui/Input"], function (e) {
  function i() {
    return this.getTag("input").getValue()
  }

  function t(e) {
    this.listen(e, "enter", function () {
      this.trigger("submit", this.getValue())
    })
  }

  var o = (e("pro"), e("global/view/BaseView"));
  e("ui/Input");
  return o.extend({
    overrides: {
      events: {
        ".w-search-btn": function () {
          this.trigger("submit", this.getValue())
        }, "@shortcut": function (e) {
          this.trigger("submit", e.innerHTML)
        }
      }, listeners: {"componentrender:input": t}
    }, members: {getValue: i}
  })
}), define("searchbar/SearchBarController", ["require", "pro", "global/controller/BaseController"], function (e) {
  function i() {
    this.applySuper(arguments), this.listenEvents()
  }

  function t() {
    this.listen(this.view, "submit", function (e) {
      e ? app.go("search", {keyword: e}) : app.alert("请先输入您要查找的关键字，多个关键词请用空格隔开~")
    })
  }

  var o = (e("pro"), e("global/controller/BaseController"));
  return o.extend({constructor: i, members: {listenEvents: t}})
}), define("searchbar/SearchBar", ["require", "pro", "global/module/BaseModule", "searchbar/SearchBarView", "searchbar/SearchBarController"], function (e) {
  function i() {
    this.listen(this.view, "afterrender", function () {
      app.callSpecial("onRender", this.view)
    })
  }

  var t = (e("pro"), e("global/module/BaseModule")), o = e("searchbar/SearchBarView"), n = e("searchbar/SearchBarController");
  return t.extend({overrides: {name: "searchBar", View: o, Controller: n, listenSpecial: i}})
}), define("nav/NavDropdownView", ["require", "pro", "global/view/BaseView"], function (e) {
  var i = (e("pro"), e("global/view/BaseView"));
  return i.extend({
    overrides: {
      template: ['<ul class="m-menu-dropdown-list">', '{{^ready}}<li style="text-align: center;"><img style="margin:10px auto;" src="http://mimg.127.net/p/yy/lib/img/common/loading_s.gif"></li>{{/ready}}', '{{#list}}<li pro="item" data-id="{{id}}"><a href="{{url}}" target="_blank">{{actname}}{{#isNew}}{{^isRead}}<i class="ico-dot"></i>{{/isRead}}{{/isNew}}</a></li>{{/list}}', "</ul>"].join(""),
      events: {
        "@item": function (e) {
          this.trigger("itemclick", e.getAttribute("data-id"))
        }
      }
    }
  })
}), define("nav/NavView", ["require", "pro", "global/view/BaseView", "nav/NavDropdownView", "global/utils/Utils"], function (e) {
  function i(e) {
    var i;
    return v.each(this.doms.items, function (t) {
      return t.getAttribute("data-name") == e ? (i = t, !1) : void 0
    }), i
  }

  function t(e) {
    var i = this.findItemByTag(e), t = f.from(i);
    i && (this.__dots[e] = new f({html: '<i class="ico ico-dot"></i>'}).render(t.find("a")))
  }

  function o(e) {
    var i = this.__dots[e];
    i && i.destroy()
  }

  function n(e, i) {
    var t = this.__dropdownDoms[e], o = this.__dropdownViews[e];
    t && (o ? o.show() : (o = this.__dropdownViews[e] = new w({
      data: {
        ready: i.isReady(),
        list: i.toArray()
      }
    }).render(t), o.dom.style.width = t.offsetWidth - 17 + "px", this.listen(i, "change", function () {
      o.update({ready: i.isReady(), list: i.toArray()})
    }), this.listen(o, "itemclick", function (e) {
      this.trigger("dropdownitemclick", e)
    })))
  }

  function r(e) {
    var i = this.__dropdownDoms[e];
    i && this.addClass("open", i)
  }

  function s(e) {
    var i = this.__dropdownDoms[e], t = this.__dropdownViews[e];
    i && this.removeClass("open", i), t && t.hide()
  }

  function l(e) {
    var i = e.getAttribute("data-name");
    this.__dropdownDoms[i] = e, this.trigger("dropdownover", i), this.showDropdown(i)
  }

  function a(e) {
    var i = e.getAttribute("data-name");
    this.trigger("dropdownout", i), this.hideDropdown(i)
  }

  function d() {
    this.__fixed || this.showMenu()
  }

  function u() {
    this.__fixed || this.hideMenu()
  }

  function c() {
    this.showMenu(), this.doms.menu.className = "m-catlog m-catlog-normal", this.__fixed = !0
  }

  function h() {
    this.doms.menu.className = "m-catlog m-catlog-unfold", this.doms.menuDropdown.style.height = this.menuDropdownHeight + "px", this.__fixed = !1
  }

  function m() {
    this.doms.menu.className = "m-catlog m-catlog-fold", this.doms.menuDropdown.style.height = 0, this.__fixed = !1
  }

  function g() {
    this.menuDropdownHeight = this.doms.menuDropdown.offsetHeight, this.doms.items = this.findAll(".m-menu-list-item")
  }

  var f = (e("pro"), e("global/view/BaseView")), w = e("nav/NavDropdownView"), v = e("global/utils/Utils");
  return f.extend({
    overrides: {
      doms: {menu: ".m-catlog", menuDropdown: ".m-catlog-wrap"},
      events: {".m-catlog/mouseover": d, ".m-catlog/mouseout": u, ".dropdown/mouseover": l, ".dropdown/mouseout": a},
      onCreate: g
    },
    members: {
      hideMenu: m,
      showMenu: h,
      showDropdown: r,
      hideDropdown: s,
      renderDropdown: n,
      showDot: t,
      hideDot: o,
      fixMenu: c,
      findItemByTag: i,
      menuDropdownHeight: 0,
      __fixed: !0,
      __dropdownDoms: {},
      __dropdownViews: {},
      __dots: {}
    }
  })
}), define("nav/NavController", ["require", "pro", "global/controller/BaseController", "global/Broadcast", "global/model/ActivityList"], function (e) {
  function i() {
    var e = this;
    this.listenEvents(), this.activityList.fetch(function () {
      this.find({isNew: !0, isRead: !1}).length > 0 && e.view.showDot("find")
    }), this.isIndex || this.view.hideMenu()
  }

  function t() {
    this.applySuper(arguments), this.activityList = new s, this.isIndex = "index" == app.getData("name"), this.init()
  }

  function o() {
    this.listen(this.view, "dropdownover", function (e) {
      "find" == e && this.view.renderDropdown(e, this.activityList)
    }), this.listen(this.view, "dropdownitemclick", function (e) {
      this.activityList.read(e)
    }), this.receive(r.HEADER_FIXED, function () {
      this.view.hideMenu()
    }), this.receive(r.HEADER_UNFIXED, function () {
      this.isIndex ? this.view.fixMenu() : this.view.hideMenu()
    })
  }

  var n = (e("pro"), e("global/controller/BaseController")), r = e("global/Broadcast"), s = e("global/model/ActivityList");
  return n.extend({constructor: t, members: {init: i, listenEvents: o, isIndex: !1}})
}), define("nav/Nav", ["require", "pro", "global/module/BaseModule", "nav/NavView", "nav/NavController"], function (e) {
  function i() {
    this.listen(this.view, "afterrender", function () {
      this.callSpecial("onRender", this.view)
    })
  }

  var t = (e("pro"), e("global/module/BaseModule")), o = e("nav/NavView"), n = e("nav/NavController");
  return t.extend({overrides: {name: "nav", Controller: n, View: o, listenSpecial: i}})
}), define("base-ratio", function () {
});
!function () {
  var i = "http://mimg.127.net", e = requirejs.__mock__ ? "" : i, o = e + "/p/one", r = o + "/web", u = r + "/release", p = r + "/lib", l = o + "/global";
  requirejs.config({
    baseUrl: u,
    paths: {
      "pro-old": e + "/p/tools/pro/pro-1.3.5.min",
      pro: i + "/p/tools/pro/pro-2.2.1.min",
      jquery: i + "/p/tools/jquery/jquery-1.11.0.min",
      jqureyui: p + "/jqui/jquery-ui-1.10.4.custom.min",
      jqureyzh: p + "/jqui/jquery.ui.datepicker-zh-CN",
      jqureyzclip: p + "/js/jquery.zclip.min",
      "plugin-hd": r + "/hd",
      polyline: p + "/js/polyline.min",
      svg: p + "/js/svg.min",
      global: l,
      ui: u + "/common/ui"
    },
    shim: {jquery: {exports: "$"}}
  })
}();