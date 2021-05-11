$(document).ready( function() {
    $('.menu__btn').click(function(event){
        $('body').toggleClass('lock');
});
    $('.slider').slick({
        arrows:false,
        dots:true,
        adaptiveHeight:false,
        slidesToShow:1,
        slidesToScroll:1,
        speed:1000,
        easing:'linear',
        infinite:true,
        autoplay:true,
        autoplaySpeed:2500,
        pauseOnFocus:true,
        pauseOnHover:false,
        pauseOnDotsHover:true,
        draggable:true,
        swipr:true,
        tiuchThreshold:5,
        touchMove:true,
        waitForAnimate:true,
        centerMode:false,
        varianleWidth:false,
        rows:1,
        slidesPerRow:1,
        vertical:false,
        verticalSwiping:false,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
});
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  jQuery(document).ready(function() {
    var btn = $('#button');  
    $(window).scroll(function() {     
      if ($(window).scrollTop() > 300) {
         btn.addClass('show');
       } else {
         btn.removeClass('show');
       }
     });
     btn.on('click', function(e) {
       e.preventDefault();
       $('html, body').animate({scrollTop:0}, '300');
     });
  });