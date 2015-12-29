window.onload = function () {
  var button = document.createElement("div");
  button.style.cssText = 'display:inline-block; vertical-align: top';
  button.innerHTML = '<button value="Search" style="width:60px;height:40px;border-radius:2px;background-color:#ffdb4c;border:solid 2px #fc0;cursor:pointer"><span style="color: red">Y</span>andex</button>';
  button.onclick = function() {
    var subdomain = '';
    if (document.querySelector('.hdtb-msel').textContent === 'Images') subdomain = 'images.';
    var url = 'http://' + subdomain + 'yandex.ru/yandsearch?text=' + encodeURIComponent(document.querySelector('#lst-ib').value);
    var win = window.open(url, '_blank');
  };
  document.querySelector('#sbds').appendChild(button);
  document.querySelector('.lsbb.kpbb').style.display = 'inline-block';
};
