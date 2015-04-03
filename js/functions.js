

// If JavaScript is enabled remove 'no-js' class and give 'js' class
jQuery('html').removeClass('no-js').addClass('js');

// Add .osx class to html if on Os/x
if (navigator.appVersion.indexOf("Mac") !== -1) {
  jQuery('html').addClass('osx');
}
// When DOM is fully loaded
jQuery(document).ready(function($) {
  "use strict";  


$('.animated').appear(function() {
  $(this).each(function(){   
    $(this).css('visibility','visible');
    $(this).addClass($(this).data('type'));
  });
},{accY: -150});


/*  STICKY  */
$('.navbar').sticky({topSpacing:15});


/* nav */ 
$('.navbar, .select-menu').onePageNav({
  currentClass: 'active',
  changeHash: false,
  scrollSpeed: 750,
  scrollOffset: 60,
  scrollThreshold: 0.1,
  filter: '',
  easing: 'swing',
});

/*  MOBILE MENU */
  $("<option />", {
     "selected": "selected",
     "value"   : "",
     "text"    : "Navigation"
  }).appendTo(".select-menu");


  $(".nav a").each(function() {
   var select = $(this);
   $("<option />", {
       "value"   : select.attr("href"),
       "text"    : select.attr("title")
   }).appendTo(".select-menu");
  });

  
 var detectmob = false; 
   if(navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {             
      detectmob = true;
  }


  /*  PARALLAX */

  if (detectmob === true) {
    $( '.home-parallax' ).each(function(){
        $(this).addClass('parallax-mobile');
    });
  }
  else {
    //.parallax(xPosition, speedFactor, outerHeight) options:
    //xPosition - Horizontal position of the element
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    $( '.home-parallax' ).parallax("10%", 0.1,true);
  }  


  /* FULL SCREEN BACKGROUND */

  function updateHeight(firstLoad)
  {
      var newWidth = $(window).width();
      var newHeight = $(window).height();
      var heightChange = Math.abs(newHeight - $('.home-parallax').height());
      var widthChange = Math.abs(newWidth - $('.home-parallax').width());

      //alert("Height increased by: "+ heightChange);

      /*  The heightChange is to prevent the page jumping on 
          browsers with dynamic address bars (mobile chrome) */
      if(firstLoad || heightChange > 60 || widthChange > 0) {
        $('.home-parallax').css({
          'height': $(window).height() + 'px',
          'width': $(window).width() + 'px',
          'max-width': $(window).width() + 'px'
        });
        //alert($(window).height() + "*" + $(window).width());
      }
  }

  updateHeight(true);

  $(window).resize(function() {
    updateHeight(false);
  });


/* SWIPEBOX */
$( '.swipebox' ).swipebox();

/* SCROLL   */
$(".select-menu").change(function() {
  
    $('html, body').animate({
          scrollTop: $($(this).find("option:selected").val()).offset().top
      }, 750, function(){
        window.location.hash = $(this).find("option:selected").val();
      });
  });



/* FITTEXT */   
    $(".fittext1").fitText(1, { minFontSize: '15px', maxFontSize: '30px' });
    $(".fittext2").fitText(0.4, { minFontSize: '30px', maxFontSize: '86px' });
    $(".fittext3").fitText(0.4, { minFontSize: '15px', maxFontSize: '45px' });
    $(".fittext4").fitText(1.5, { minFontSize: '15px', maxFontSize: '24px' });


/*  External Links  */  
  (function() {
      $(window).load(function() {
      $('a[rel=external]').attr('target','_blank'); 
    });                                            
  })();  


  /*  Flex Initialize */  
  $(window).load(function() {
 
  /*header carousel slider */
  $('.slider1').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 300, 
    itemMargin: 0,
    slideshow: false,
    useCSS : false,
    directionNav: false
  });


  /* gallery slider */
  $('.flexslider').flexslider({ 
    animation: "slide",
    slideshow: false,
    useCSS : false,
    directionNav: false
  });
  
  $('.bottom-nav-content-slider').flexslider({
    animation: "slide",
    slideshow: false,
    useCSS : false,
    prevText: "",
    nextText: "",
    animationLoop: true   
  });
  
     
  // center nav slider
  $('.center-nav-content-slider').flexslider({
    animation: "slide",
    slideshow: true,
    useCSS : false,
    prevText: "",
    nextText: "",    
    animationLoop: true   
  });
 

});


/* preloading */
$(window).load(function() {
  $("#loadind").fadeOut();
  $("#loading-wrap").delay(150).fadeOut("fast");
})

}); 