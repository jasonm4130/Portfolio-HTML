$( document ).ready(function() {

  // Burger Menu Animation
  $('.navbar-toggler').bind('click', function(){
    $('.burg').toggleClass('activeBurg');
  });

  // Menu Smoth Scroll and Active Change
  $(document).on("scroll", onScroll);

    //smoothscroll
    $('.navbar li').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $('.navbar li').each(function () {
        $(this).removeClass('active');
      })
      $(this).addClass('active');

      var target = this.hash,
        menu = target;
      $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      });
    });

    //About Image Overlay
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }

    //My Skills Slider
    $('.skillbar').each(function () {
      var percent = $(this).attr('data-percent');
      $(this).find('.skillbar-bar').css('width', percent);
      $(this).find('.skillbar-percent').css('padding-left', percent);
    })

});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.navbar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar ul li').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
};
