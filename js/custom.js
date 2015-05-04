/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function(){

	$("#preloader").fadeOut("slow");

});

jQuery(document).ready(function(){
	
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
            $("#options").css("background-color","rgb(14, 180, 147)");
        } else {
			$("#options").css("background-color","rgba(13, 96, 80, 0.3)");
        }
    });

	jQuery('.cv').hover(function() {
		jQuery(this).find('.movable-contentFormations').stop().animate({
			left: '620px'
		}, 200);
	}, function() {
		jQuery(this).find('.movable-contentFormations').stop().animate({
			left: '0px'
		}, 200);
	});

	jQuery('.cv').hover(function() {
		jQuery(this).find('.movable-content').stop().animate({
			left: '300px'
		}, 200);
	}, function() {
		jQuery(this).find('.movable-content').stop().animate({
			left: '0px'
		}, 200);
	});
	
	jQuery('.realisations').hover(function() {
		jQuery(this).find('.movable-content').stop().animate({
			left: '300px',
		}, 200);
	}, function() {
		jQuery(this).find('.movable-content').stop().animate({
			left: '0px'
		}, 200);
	});
	
	jQuery('.stages').hover(function() {
		jQuery(this).find('.movable-content').stop().animate({
			left: '300px'
		}, 200);
	}, function() {
		jQuery(this).find('.movable-content').stop().animate({
			left: '0px'
		}, 200);
	});


	jQuery(window).load(function() {
			jQuery('.infosFormations').css({
			display: 'inline-block',
		});
		
		jQuery('.infosStages').css({
			display: 'inline-block',
		});
		jQuery('.infosPerso').css({
			display: 'inline-block',
		});
		jQuery('.infos').css({
			display: 'inline-block',
		});
	/* ========================================================================= */
	/*	Back to Top
	/* ========================================================================= */
	
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#back-top").fadeIn(200)
        } else {
            $("#back-top").fadeOut(200)
        }
    });
    $("#back-top").click(function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    });
	
	
	$("#lAccueil").click(function () {
        $("html, body").stop().animate({
             scrollTop:  $(window).height() - 40 +'px'
        }, 1500, "easeInOutExpo")
    });
	
    $("#leBts").click(function () {
        $("html, body").stop().animate({
             scrollTop:  $(window).height() - 40 +'px'
        }, 1500, "easeInOutExpo")
    });
	
	 $("#leCv").click(function () {
        $("html, body").stop().animate({
             scrollTop:  $(window).height() - 40 +'px'
        }, 1500, "easeInOutExpo")
    });
	
	 $("#leStage").click(function () {
        $("html, body").stop().animate({
             scrollTop:  $(window).height() - 40 +'px'
        }, 1500, "easeInOutExpo")
    });
	
	 $("#laReal").click(function () {
        $("html, body").stop().animate({
             scrollTop:  $(window).height() - 40 +'px'
        }, 1500, "easeInOutExpo")
    });
	 $("#laMusique").click(function () {
        $("html, body").stop().animate({
             scrollTop:  $(window).height() - 40 +'px'
        }, 1500, "easeInOutExpo")
    });
	
	
	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */	

	var slideHeight = $(window).height();
	
	$('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height',slideHeight);
	$('#owl-demo, .owl-item div, .owl-item img').css('height',slideHeight);
	
	$(window).resize(function(){
	
		var slideHeight = $(window).height();
		$('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height',slideHeight);
		$('#owl-demo, .owl-item div, .owl-item img').css('height',slideHeight);
		$
		
	});
	

	
});

	$(".fancybox").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 650,

		closeEffect : 'elastic',
		closeSpeed  : 550,

		closeClick : true,
	});
	
	$("#owl-demo").owlCarousel({
	  autoPlay : 3000,
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
  
  //Automatisme du slider
  
  
	var options = {

			$AutoPlay: true,                                  
			$DragOrientation: 1
		};

		var jssor_slider1 = new $JssorSlider$("slider1_container", options);
	
	
});	



