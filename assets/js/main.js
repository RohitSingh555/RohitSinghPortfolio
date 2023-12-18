/*==================== MENU SHOW Y HIDDEN ====================*/


/*===== MENU SHOW =====*/
/* Validate if constant exists */


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*==================== REMOVE MENU MOBILE ====================*/


/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 
 
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 1000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};



if ( window.innerWidth>=700 || window.innerWidth==0){

$(function() {
    var $blocks = $('.animBlock.notViewed');
    var $window = $(window);
  
    $window.on('scroll', function(e){
      $blocks.each(function(i,elem){
        if($(this).hasClass('viewed')) 
          return;
          
        isScrolledIntoView($(this));
      });
    });
  });
  
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemOffset = 0;
    
    if(elem.data('offset') != undefined) {
      elemOffset = elem.data('offset');
    }
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    
    if(elemOffset != 0) { // custom offset is updated based on scrolling direction
      if(docViewTop - elemTop >= 0) {
        // scrolling up from bottom
        elemTop = $(elem).offset().top + elemOffset;
      } else {
        // scrolling down from top
        elemBottom = elemTop + $(elem).height() - elemOffset
      }
    }
    
    if((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
      // once an element is visible exchange the classes
      $(elem).removeClass('notViewed').addClass('viewed');
      
      var animElemsLeft = $('.animBlock.notViewed').length;
      if(animElemsLeft == 0){
        // with no animated elements left debind the scroll event
        $(window).off('scroll');
      }
    }
  }}


  



  jQuery(document).ready(function($) {
    "use strict";
    $('#customers-testimonials').owlCarousel( {
            loop: true,
            center: true,
            items: 3,
            margin: 30,
            autoplay: true,
            dots:true,
        nav:true,
            autoplayTimeout: 5000,
        autoplayHoverPause:true,
        stopOnHover:true,
            smartSpeed: 850,
          navText: ['<i style="font-size:30px;color:white"><img style="width:50px;filter: brightness(0) saturate(100%) invert(40%) sepia(12%) saturate(4469%) hue-rotate(259deg) brightness(89%) contrast(87%); border:none;" src="assets/img/left.svg"></i>','<i style="font-size:30px;color:white"><img style="width:50px;filter: brightness(0) saturate(100%) invert(40%) sepia(12%) saturate(4469%) hue-rotate(259deg) brightness(89%) contrast(87%);border:none;" src="assets/img/right.svg"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1170: {
                    items: 3
                }
            }
        });
    });

    $(window).mousemove(function(event) { 
  
      $('.cursor').css({
        left: event.pageX,
         top: event.pageY,
      })
      
    })
    
    $('h1,p,h3,h5')
    .on('mouseenter', function() {
      $('.cursor').addClass('focus')
      $('.cursor').css({"display": "block"})
    })
    .on('mouseleave', function() {  
      $('.cursor').removeClass('focus')
      $('.cursor').css({"display": "none"})
    })


    $(window).on('scroll', function(){
      function isScrollIntoView(elem, index) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        console.log(docViewTop)
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(window).height()*.5;
        if(elemBottom <= docViewBottom && elemTop >= docViewTop) {
          $(elem).addClass('active');
        }
        if(!(elemBottom <= docViewBottom)) {
          $(elem).removeClass('active');
        }
      }
      var timeline = $('.vertical-scrollable-timeline li');
      Array.from(timeline).forEach(isScrollIntoView);
    });


    // nsvba







    var container = document.querySelector('.bigcardis');
var image = container.querySelector('.cardis'); 
var imageWidth = image.offsetWidth;
var imageHeight = image.offsetHeight;
var imageCentreX = imageWidth/2;
var imageCentreY = imageHeight/2;

container.onmousemove = function(e) { 
  var x = e.pageX - this.offsetLeft; 
  var y = e.pageY - this.offsetTop; 
  var xfromCentre = (x - imageCentreX)/10;
  var yfromCentre = (y - imageCentreY)/10;
  image.style.transform = 'rotateX(' + yfromCentre + 'deg) rotateY(' + xfromCentre + 'deg)';
}
container.onmouseleave = function(e) {
  image.style.transform='rotateX(' + 0 + 'deg) rotateY(' + 0 + 'deg)';
}
$(document).ready(function() {
  // Function to handle loading completion
  function completeLoading() {
    $('.overlay, body').addClass('loaded');
    setTimeout(function() {
      $('.overlay').css({'display':'none'});
    }, 2000);
  }

  // Automatically skip after 1 second
  setTimeout(function() {
    completeLoading();
  }, 1000);

  // Users can skip the loading process if they want.
  $('.skip').click(function() {
    completeLoading();
  });

  // Ensure completeLoading is called even if the page is not fully ready after 1 second
  $(window).on('load', function() {
    setTimeout(function() {
      completeLoading();
    }, 1000);
  });
});

  





