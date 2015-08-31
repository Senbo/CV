$(document).ready(function(){
  $('.contact').animate({'margin-left': '-37px'}, 3000, 'easeOutQuart');
  $('.contact').fadeIn({queue: false, duration: 1500});
  $('.contact').css('display', 'block');

  function delayAnimate(e) {
	  $(e).each(function(index, value) {
      var $el = $(this);
      setTimeout(function () {
        $el.animate({'margin-top': '0px'}, 3000, 'easeOutQuart')
          .fadeIn({queue: false, duration: 1500})
          .css('display', 'block');
      }, 600 * (index + 1));
	  });
  }

  delayAnimate('.left li');
  delayAnimate('.right li');
});
