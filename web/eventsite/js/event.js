console.log("kitanisikazuki");

let mySwiper = new Swiper('.swiper', {
    loop: true, //最後に達したら先頭に戻る
    navigation: {  //ナビゲーションのオプション（矢印ボタンの要素を指定）
      nextEl: '.btnR',
      prevEl: '.btnL',
    }
});
  
