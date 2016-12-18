window.onload = function () {
  var button = document.createElement("div");
  button.style.cssText = 'display:inline-block; vertical-align: top;margin-left:2px';
  button.innerHTML = '<button value="Search" style="width:60px;height:44px;border-radius:2px;background-color:#ffdb4c;border:solid 2px #fc0;cursor:pointer"><span style="color: red">Y</span>andex</button>';
  button.onclick = function() {
    var subdomain = '';
    if (document.querySelector('.hdtb-msel').textContent === 'Images') subdomain = 'images.';
    var url = 'http://' + subdomain + 'yandex.ru/yandsearch?text=' + encodeURIComponent(document.querySelector('#lst-ib').value);
    var win = window.open(url, '_blank');
  };
  document.querySelector('#sbtc .sbibtd').appendChild(button);
  document.querySelector('#sfdiv').style.display = 'inline-block';
  document.querySelector('#sfdiv').style.width = '100%';
};
