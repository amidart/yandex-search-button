"use strict";
window.onload = function () {
  const wrapper = document.createElement("div");
  wrapper.classList.add('plgn-ybtn-srch');
  wrapper.innerHTML = `<button type="button" aria-label="Search in Yandex" class="plgn-ybtn-srch__btn"><span class="plgn-ybtn-srch__icon-wrapper"><span class="plgn-ybtn-srch__icon"></span></span></button>`;
  const btn = wrapper.querySelector('button');
  btn.onclick = function() {
    let partUrl = "https://yandex.ru/yandsearch";
    if (document.querySelector('.F7UV7d')){
      partUrl = "https://yandex.ru/images/search";
    };
    const url = partUrl+'?text=' + encodeURIComponent(document.querySelector('input[name=q]').value);
    const win = window.open(url, '_blank');
  };
  const target = document.querySelector('#sbtc, [jsname=RNNXgb]');
  if (!target) return;
  target.appendChild(wrapper);
  // target.style.position = 'relative';
};
