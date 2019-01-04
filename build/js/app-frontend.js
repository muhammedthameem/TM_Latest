// window.onresize = function(){ location.reload(); }



$(document).ready(function() {



//this only works inside a Timeout, seconds after the slider gets initialized
  setTimeout(function() {
        $('.b--mobile .metadata-option .metadata-option__btn').click(function(e) {
          e.preventDefault();
          // alert("boton");
          var test = $(this).closest('.b--mobile .metadata-option');
          console.log(test);
          $(test).toggleClass('metadata-option--is-active');
          // toggleClass('metadata-option--is-active')
      });
    }, 300);


  //metadata changer
  // $('.metadata-option ul li a').click(function(e){
  //   e.preventDefault();
  //   $('.metadata-option ul li a').removeClass();
  //   $(this).addClass('active');
  //   var productID = $(this).attr('selector-product');
  //   var productvariation = $(this).attr('product-variation');
  //   var productToModify = $('.b--product[id="' + productID + '"]');
  //   $( productToModify).find('.b--product__img img').attr('src', productvariation);
  // });
  // end metadata changer







  $(function(){
    $("#slider").slick({
      autoplay: true,
      speed: 1000,
      arrows: false,
      asNavFor: "#thumbnail_slider"
    });
    $("#thumbnail_slider").slick({
      slidesToShow: 3,
      arrows:true,
      asNavFor: "#slider"
    });
  });




  var $shopLook = $('.b--slider--shopLook');
  var settingsShoopLook= {
    dots: true,
    arrows:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '<span class="arrow-prev"><i class="s s-chevron-left s-4x"></i></span>',
    nextArrow: '<span class="arrow-next"><i class="s s-chevron-right s-4x"></i></span>',
    responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         }
       },
       {
         breakpoint: 992,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,

         }
       },
       {
         breakpoint: 575,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         }
       }
   ]
  };

  $shopLook.slick(settingsShoopLook);


  var $promo = $('.b--slider--promo');
  var settingsPromo= {
    dots: false,
    arrows: false,
    // infinite:true,
    // slide: '',
    slidesToShow: 4,
    slidesToScroll: 2,
    // centerMode: true,
    // centerPadding: '50px',
    responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         }
       },
       {
         breakpoint: 992,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,

         }
       },
       {
         breakpoint: 575,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         }
       }
   ]
  };

  $promo.slick(settingsPromo);

  var $arrivals = $('.b--slider--arrivals');
  var settingsArrivals = {
    dots: false,
    arrows: false,

    // infinite:true,
    // slide: '',
    slidesToShow: 4,
    slidesToScroll: 2,
    // centerMode: true,
    // centerPadding: '50px',
    responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 4,
           slidesToScroll: 2,
         }
       },
       {
         breakpoint: 992,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,

         }
       },
       {
         breakpoint: 575,
         settings: {
           dots: false,
           arrows: false,
           slidesToShow: 1,
           centerMode: true,
           centerPadding: '50px',
         }
       }
   ]
  };



  $arrivals.slick(settingsArrivals);


  var $bestSellers = $('.b--slider--bestSellers');
  var settingsBestSellers = {
    dots: false,
    arrows: false,
    // infinite:true,
    // slide: '',
    slidesToShow: 4,
    slidesToScroll: 2,
    // centerMode: true,
    // centerPadding: '50px',
    responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 4,
           slidesToScroll: 2,
         }
       },
       {
         breakpoint: 992,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,

         }
       },
       {
         breakpoint: 575,
         settings: {
           dots: false,
           arrows: false,
           slidesToShow: 1,
           centerMode: true,
           centerPadding: '50px',
         }
       }
   ]
  };

  $bestSellers.slick(settingsBestSellers);

  var $occasion = $('.b--slider--occasion');
  var settingsOccasion = {
    dots: false,
    arrows: false,
    // infinite:true,
    // slide: '',
    slidesToShow: 5,
    slidesToScroll: 2,
    // centerMode: true,
    // centerPadding: '50px',
    responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 4,
           slidesToScroll: 2,
         }
       },
       {
         breakpoint: 992,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,

         }
       },
       {
         breakpoint: 575,
         settings: {
           dots: false,
           arrows: false,
           slidesToShow: 1,
           centerMode: true,
           centerPadding: '50px',
         }
       }
   ]
  };

  $occasion.slick(settingsOccasion);





      var $metadata= $('.metadata-slider');
      var settingsmetadata= {
        arrows:true,
        prevArrow: '<span class="arrow-prev"><i class="s s-chevron-left s-4x"></i></span>',
        nextArrow: '<span class="arrow-next"><i class="s s-chevron-right s-4x"></i></span>',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
           {
             breakpoint: 1200,
             settings: {
               slidesToShow: 4,
             }
           },
           {
             breakpoint: 1050,
             settings: {
               slidesToShow: 3,

             }
           },

       ]

      };

     if ($('.metadata-option ul > li').length > 4) {
         $metadata.slick(settingsmetadata);
     }




  //dropdown countries
  $(".b--subfooter .dropdown-menu li a").click(function(){

    $(".b--subfooter .btn:first-child").text($(this).text());
    $(".b--subfooter .btn:first-child").val($(this).text());
    $(".b--subfooter .btn:first-child").html($(this).html());

  });

  setTimeout(function(e) {
        $('#exampleModal').modal();
        $('body').addClass('noscroll');
    }, 10000);

    $( ".modal-content .close span" ).click(function() {
      $('body').removeClass('noscroll');
    });



});
