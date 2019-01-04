console.log('work!');

  $(window).scroll(function() {
      if ($(".b--navbar").offset().top > 50 ) {
            $(".b--navbar").addClass("b--navbar--scrolled-active");

      }
      else {
          $(".b--navbar").removeClass("b--navbar--scrolled-active");
          $(".b--header-promo").css("opacity", "1");
      }
  });

//
// if ($(".b--navbar").hasClass("b--navbar--scrolled-active")) {
//   $('#navSearch').css("cssText", "z-index: 57");
// } else{
//   $('#navSearch').css("cssText", "z-index: 50");
// }

  $(window).scroll(function() {
      if ($(window).width() < 767) {
            $(".b--navbar").removeClass("d-block");
            $('.b--navbar--scrolled-active .b--navbar__primary').show();
      }
  });




  $(document).on('DOMNodeInserted', function(e) {
      if ( $(e.target).hasClass('MyClass') ) {
         //element with .MyClass was inserted.
      }
  });


$( document ).ready(function() {




  $( "#exampleInputEmail1" ).focus(function() {
    $('.searchModal').show();
    $('body').addClass('noscroll');
    $('body').addClass('nopopup');
    $('.form-group-search').addClass('form-group-search--active');
    $(this).attr('placeholder', 'Type to search...');
  });


  $('#search_close').click(function(){
    $('.searchModal').hide();
    $('#exampleInputEmail1').attr('placeholder', 'Search');
    $(" input[type=email]").val('');
    $('body').removeClass('noscroll');
    $('body').removeClass('nopopup');

  });

  $('#clear').click(function(){
    $(" input[type=email]").val('');
  });



  $( " input[type=email]" ).focus(function() {
    console.log("focused 1");
    $('.b--navbar--mobile__primary__menu-wrapper').addClass("wrapper--is-active");
   }).blur(function(){
    $('.b--navbar--mobile__primary__menu-wrapper').removeClass("wrapper--is-active");
   })
  });

    function hideallsubnavs(){
      $('.b--overlay-menu').css('opacity', 0);
      $('.b--overlay-menu').removeClass("opacity-full");
    }

    function closeallsubnavs(){
      $('.b--overlay-menu').removeClass('b--overlay-menu-active');
    }


    $(".b--navbar__secondary__nav a[data-trigger='overlap-menu']").hover(function(e) {
      e.preventDefault();
      hideallsubnavs();
      var escape = true;
      var triggerTarget = $(this).attr('trigger-target');
      $("#" + triggerTarget).css('opacity', 1);
      $("#" + triggerTarget + '.b--overlay-menu').addClass("opacity-full");
      $('.b--menu-backdrop').addClass("b--menu-backdrop--is-active");
      $(document).keyup(function(e) {
        if ((e.keyCode === 27) && escape)  {
          hideallsubnavs();
          $('.b--overlay-menu').removeClass("opacity-full");
          $('.b--menu-backdrop').removeClass("b--menu-backdrop--is-active");
          escape = false;
        }
      });
    });


    $("b--navbar__secondary__nav").mouseleave(function(e){
      hideallsubnavs();
      $('.b--overlay-menu').removeClass("opacity-full");
      $('.b--menu-backdrop').removeClass("b--menu-backdrop--is-active");
      });

    $('.b--menu-backdrop').hover(function(){
      hideallsubnavs();
      $('.b--menu-backdrop').removeClass("b--menu-backdrop--is-active");
      $("#" + triggerTarget + '.b--overlay-menu').removeClass("opacity-full");
    });

    $('.b--navbar--mobile__primary__trigger').click(function(){
      $('.b--navbar--mobile__nav-primary').toggleClass("b--navbar--mobile__nav-primary--is-active");
      $('.b--navbar--mobile__primary__b--wrapper').toggleClass('b--navbar--mobile__primary__b--wrapper--is-active');
      $('.b--navbar').toggleClass("b--navbar--is-active");
      $('body').addClass('noscroll');
      $('body').addClass('nopopup');

    });

    $('#b--navbar__third__close').click(function(){
      $('.b--navbar--mobile__nav-primary').removeClass("b--navbar--mobile__nav-primary--is-active");
      $('.b--navbar--mobile__primary__b--wrapper').removeClass('b--navbar--mobile__primary__b--wrapper--is-active');
      $('.b--navbar').removeClass("b--navbar--is-active");
      $('body').removeClass('noscroll');
      $('body').removeClass('nopopup');
      closeallsubnavs();
      $('.b--navbar__third .b--mobile').removeClass('third-mobile--is-active');

    });

    $('#b--navbar__third__prev').click(function(){
      closeallsubnavs();
      $('.b--navbar__third .b--mobile').removeClass('third-mobile--is-active');
    });

    $('.b--navbar__third__user--status').hover(function(e) {
      e.preventDefault();
      $('.b--navbar__modal').show();
    });

    $(".b--navbar__third__user--status" ).mouseleave(function(e) {
      e.preventDefault();
      $('.b--navbar__modal').hide();
    });

    $(".b--navbar--mobile__nav-primary a[data-trigger='overlap-menu']").click(function(e){
      console.log('click');
      e.preventDefault();
      $(this).addClass('child-is-open');
      if (  $(this).hasClass('child-is-open')) {
        closeallsubnavs();
        $('.b--navbar__third .b--mobile').addClass('third-mobile--is-active');
      }
      var triggerTarget = $(this).attr('trigger-target');
      $("#" + triggerTarget + '.b--overlay-menu').toggleClass('b--overlay-menu-active');
    });



      var $headerPromo = $('.b--slider--header-promo');
      var settingsheaderPromo= {
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '.b--header-promo__wrapper__next',
        prevArrow: '.b--header-promo__wrapper__prev'
        // arrows: false,
      };
      $headerPromo.slick(settingsheaderPromo);
