/**
 *   解决ios单页不能更新title
 **/
export function changeTitle(title) {
  var body = document.getElementsByTagName('body')[0];
  document.title = title;
  var iframe = document.createElement("iframe");
  iframe.src =  "favicon.ico";
  iframe.style.display = 'none';
  iframe.addEventListener('load', function() {
    setTimeout(function() {
      iframe.removeEventListener('load',function () {
      }, false);
      document.body.removeChild(iframe);
    }, 0);
  },false);
  document.body.appendChild(iframe);
}