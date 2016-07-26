/**
 *   解决ios单页不能更新title
 **/
export function changeTitle(title) {
  setTimeout(function(){
    //利用iframe的onload事件刷新页面
    document.title = title ;
    //var iframe = document.createElement('iframe');
    //iframe.src="avatar.png"
    //iframe.style.visibility = 'hidden';
    //iframe.onload = function () {
    //  setTimeout(function () {
    //    document.body.removeChild(iframe);
    //  }, 0);
    //};
    //document.body.appendChild(iframe);
  },0);
}