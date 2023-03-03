$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".block").each(function() {
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        if (objectBottom < windowBottom) {
          if ($(this).css("opacity")==0) {$(this).fadeTo(200,1);}
          
        }else{
          if ($(this).css("opacity")==1) {$(this).fadeTo(200,0);}
        }
      });
    }).scroll();
  });