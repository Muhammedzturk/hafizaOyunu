const scoreIcerik = document.querySelector("#score");
var hamle =0;
$(document ).ready(function(){
    $("#shuffle").on("click", function(){

    });

    var app = {
    cards: ["kedi", "kedi", "köpek", "köpek", "kaplan", "kaplan", "fil", "fil", "timsah", "timsah"],
    init: function() {
      app.shuffle();
    },
    shuffle: function() {
      var random = 0;
      var temp = 0;
      for (i = 1; i < app.cards.length; i++) {
        random = Math.round(Math.random() * i);
        temp = app.cards[i];
        app.cards[i] = app.cards[random];
        app.cards[random] = temp;
      }
      app.assignCards();
      console.log('Shuffled Card Array: ' + app.cards);
    },
    assignCards: function() {
      $('.card').each(function(index) {
        $(this).attr('data-card-value', app.cards[index]);
      });
      app.clickHandlers();
    },
    clickHandlers: function() {
      $('.card').on('click', function() {
        $(this).html('<img>'+$(this).data('cardValue')).addClass('selected');

        app.checkMatch();
      });
    },
    checkMatch: function() {
      if ($('.selected').length === 2) {
        hamle ++;
        scoreIcerik.innerText = "  " + hamle;
        if ('cardValue')
        if ($('.selected').first().data('cardValue') == $('.selected').last().data('cardValue')) {
          $('.selected').each(function() {
            $(this).css("background", "green").animate({
              opacity: 0
            }).removeClass('unmatched');
          });
          $('.selected').each(function() {
            $(this).removeClass('selected');
          });
          app.checkWin();
        } else {
          setTimeout(function() {
            $('.selected').each(function() {
              $(this).html('').removeClass('selected');
            });
          }, 1000);
        }
      }
    },
    checkWin: function() {
      if ($('.unmatched').length === 0) {
        setTimeout(function(){alert("Tebrikler!"+" "+hamle+" "+"hamlede ve "+sayac+" dakika "+kontrol+" saniye ile bitirdiniz.");},1000);
      }
    }
  };
  app.init();

});
var saniye=1;
var sayac=0;
var kontrol=0;
function zaman() {
    var dak=Math.floor(saniye/60);
    
    var dakika = dak%60;
     kontrol = saniye%60;
    if(kontrol == 0)sayac++;
    var zaman =document.querySelector(".zaman");
     var cek =document.querySelector(".cek");
    zaman.innerHTML=kontrol+" "+"saniye";
    cek.innerHTML=dakika+" "+"dakika";
    saniye ++;
}
setInterval(zaman,1000);