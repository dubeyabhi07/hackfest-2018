
$(document).ready(function(){

	var sections = $("section");

	$(window).on("load",function(){
		$(".wrapper").fadeOut();
		$("section").css({
			"display": "block"
		});
		$("#review").css({
			"display":"flex"
		});

		$(".gallary").imagesLoaded(function(){
	  		$(".gallary").masonry({
	  			itemSelector: '.grid-item',
	  			columnWidth: '.grid-sizer',
			});
		});

	});


    var lastId,
        topMenu = $("#top-menu"),
        topMenuHeight = 0,
        menuItems = topMenu.find("a"),
        scrollItems = menuItems.map(function(){
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        });

    menuItems.click(function(e){
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
      $('html, body').stop().animate({
          scrollTop: offsetTop
      }, 500);
      e.preventDefault();
    });


	setInterval(function(){
		$("#register").toggleClass("bounce");
	},2000);

	$("#register").on("click",function(){
		$(this).addClass("bounceOutRight");
		setTimeout(function(){
			$("#register").removeClass("bounceOutRight");
		},1000)
	});



});


//For the image blur part
$(function() {

	var $container	= $('#mib-container'),
		$articles	= $container.children('div'),
		timeout;

	$articles.on( 'mouseenter', function( event ) {

		var $article	= $(this);
		clearTimeout( timeout );
		timeout = setTimeout( function() {

			if( $article.hasClass('active') ) return false;

			$articles.not( $article.removeClass('blur').addClass('active') )
					 .removeClass('active')
					 .addClass('blur');

		}, 65 );

	});

	$container.on( 'mouseleave', function( event ) {

		clearTimeout( timeout );
		$articles.removeClass('active blur');

	});

});
