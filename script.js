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
  $('.js-loading img').fadeOut(800, function(){
    $('.js-loading').fadeOut(500);
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
