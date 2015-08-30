$(document).ready(function(){
  $('.contact').animate({'margin-left': '-37px'}, 3000, 'easeOutQuart');
  $('.contact').fadeIn({queue: false, duration: 1500});
  $('.contact').css('display', 'block');
  
  //var delaytime = 600;
  
  //$('.left li').each(function() {
  //	  $(this).delay(delaytime).animate({'margin-top': '0px'}, 3000, 'easeOutQuart');
  //	  delaytime += 600;
  //  });
  
  //$('.right li').each(function() {
	  //$(this).delay({queue: false, delaytime}).animate({'margin-top': '0px'}, 3000, 'easeOutQuart');
	  //delaytime += 600;
  //});
  
  function delayAnimate() {
	  var delaytime = 600;
	  $(this).delay({queue: false, delaytime}).animate({'margin-top': '0px'}, 3000, 'easeOutQuart');
	  delaytime += 600;
  }
  
  $('.left li').each(delayAnimate);
});
