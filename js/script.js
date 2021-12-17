$('.burger-btn').on('click',function(){
  $('.burger-btn').toggleClass('close');
  $('.nav-wrapper').toggleClass('slide-in');
  $('body').toggleClass('noscroll');
});

//読み込みが完了したら実行
$(window).on('load',function () {
  // ローディングが10秒以内で終わる場合、読み込み完了後ローディング非表示
  endLoading();
});

//10秒経過した段階で、上記の処理を上書き、強制終了
setTimeout('endLoading()', 10000);

//ローディング非表示処理
function endLoading(){
  // 0.8秒かけてロゴを非表示にし、その後0.5秒かけて背景を非表示にする
  $('.js-loading img').fadeOut(800, function(){
    $('.js-loading').fadeOut(500);
  });
}


//モーダル処理
$(function(){
    $('.js-modal-open').each(function(){
        $(this).on('click',function(){
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $(modal).fadeIn();
            return false;
        });
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    }); 
});
