window.onload = function () {
  var button = document.createElement("div");
  button.style.display = 'inline-block';
  button.innerHTML = '<button id="gbqfb2" aria-label="Yandex Search" class="gbqfb" name="btnY" style="color:#000!important;margin-left:15px;background-image:-webkit-linear-gradient(top,#fff09c,#f4be02);"><span style="color: red">Я</span>ндекс</button>';
  button.onclick = function() {
    var subdomain = '';
    if (document.getElementById('rg_s')) subdomain = 'images.';
    var url = 'http://' + subdomain + 'yandex.ru/yandsearch?text=' + encodeURIComponent(document.getElementById('gbqfq').value);
    var win = window.open(url, '_blank');
  };
  document.getElementById('gbqfbw').appendChild(button);
};
