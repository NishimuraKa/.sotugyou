$('.burger-btn').on('click',function(){
  $('.burger-btn').toggleClass('close');
  $('.nav-wrapper').toggleClass('slide-in');
  $('body').toggleClass('noscroll');
});

//�ǂݍ��݂�������������s
$(window).on('load',function () {
  // ���[�f�B���O��10�b�ȓ��ŏI���ꍇ�A�ǂݍ��݊����ネ�[�f�B���O��\��
  endLoading();
});

//10�b�o�߂����i�K�ŁA��L�̏������㏑���A�����I��
setTimeout('endLoading()', 10000);

//���[�f�B���O��\������
function endLoading(){
  // 0.8�b�����ă��S���\���ɂ��A���̌�0.5�b�����Ĕw�i���\���ɂ���
  $('.js-loading img').fadeOut(50, function(){
    $('.js-loading').fadeOut(100);
  });
}


//���[�_������
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

function TextTypingAnime() {
  $('.TextTyping').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var thisChild = "";
    if (scroll >= elemPos - windowHeight) {
      thisChild = $(this).children(); //span�^�O���擾
      //span�^�O�̗v�f�̂P�P������ǉ�
      thisChild.each(function (i) {
        var time = 100;
        //�����ŕ\������ׂ�delay���w�肵���̎��Ԍ��fadeIn�ŕ\��������
        $(this).delay(time * i).fadeIn(time);
      });
    } else {
      thisChild = $(this).children();
      thisChild.each(function () {
        $(this).stop(); //delay�������~�߂�
        $(this).css("display", "none"); //span�^�O��\��
      });
    }
  });
}


// ��ʂ��ǂݍ��܂ꂽ�炷���ɓ����������ꍇ�̋L�q
$(window).on('load', function () {
  //span�^�O��ǉ�����
  var element = $(".TextTyping");
  element.each(function () {
    var text = $(this).html();
    var textbox = "";
    text.split('').forEach(function (t) {
      if (t !== " ") {
        textbox += '<span>' + t + '</span>';
      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);

  });

  TextTypingAnime();/* �A�j���[�V�����p�̊֐����Ă�*/
});// �����܂ŉ�ʂ��ǂݍ��܂ꂽ�炷���ɓ����������ꍇ�̋L�q
