$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".block").each(function() {
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        if (objectBottom < windowBottom+50) {
          if ($(this).css("opacity")==0.1) {$(this).fadeTo(200,1);}
          
        }else{
          if ($(this).css("opacity")==1) {$(this).fadeTo(200,0.1);}
        }
      });
    }).scroll();


    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $("#phone").each(function() {
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        var hrBottom = $("#divide").offset().top + $("#divide").outerHeight();
        if (objectBottom > hrBottom) {
          if ($(this).css("opacity")==1) {$(this).fadeTo(100,0);}
          if ($("#third").css("opacity")==1) {$("#third").fadeTo(300,0.1);}
        }else{
          if ($(this).css("opacity")==0) {$(this).fadeTo(100,1);}
          if ($("#third").css("opacity")==0.1) {$("#third").fadeTo(300,1);}
        }
      });
    }).scroll();
  });