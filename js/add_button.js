window.onload = function () {
  var button = document.createElement("div");
  button.style.cssText = 'position:absolute;right:-65px;top:0;';
  button.innerHTML = '<button type="button" value="Search" style="width:60px;height:44px;border-radius:2px;background-color:#ffdb4c;border:solid 2px #fc0;cursor:pointer"><span style="color: red">Y</span>andex</button>';
  button.onclick = function() {
    let partUrl = "https://yandex.ru/yandsearch";
    if (document.querySelector('.F7UV7d')){
      partUrl = "https://yandex.ru/images/search";
    };
    var url = partUrl+'?text=' + encodeURIComponent(document.querySelector('input[name=q]').value);
    var win = window.open(url, '_blank');
  };
  var target = document.querySelector('#sbtc, [jsname=RNNXgb]');
  if (!target) return;
  target.appendChild(button);
  target.style.position = 'relative';
};
