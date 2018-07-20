// SINGLE PAGE NAV
	
		$(document).ready(function() {
			$('#nav').onePageNav();
		});




//RSLIDES 

$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 1000,            // Integer: Speed of the transition, in milliseconds
  timeout: 50000,          // Integer: Time between slide transitions, in milliseconds
});

$(".rslides_portifolio").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
});





// ----------- ON VIEWPORT -------------//

// ON VIEWPORT SECTION HOME
$(document).ready(function() {
			
var $win = $(window);
var $stat = $('.animation-home'); // Change this to affect your desired element.

$win.on('scroll', function () {
    var scrollTop = $win.scrollTop();

    $stat.each(function () {
        var $self = $(this);
        var prev=$self.offset();
        console.log(scrollTop);
        console.log(prev.top);
        if ( (scrollTop - prev.top) > -600) {
          $self.css('opacity', '1').addClass('animated flipInX');
        } else {
          console.log('n');
        }

    });

}).scroll();
  
});

// ON VIEWPORT SECTION ABOUT
$(document).ready(function() {
			
var $win = $(window);
var $stat = $('.animation-about'); // Change this to affect your desired element.

$win.on('scroll', function () {
    var scrollTop = $win.scrollTop();

    $stat.each(function () {
        var $self = $(this);
        var prev=$self.offset();
        console.log(scrollTop);
        console.log(prev.top);
        if ( (scrollTop - prev.top) > -600) {
          $self.css('opacity', '1').addClass('animated fadeIn');
        } else {
          console.log('n');
        }

    });

}).scroll();
  
});

// ON VIEWPORT SECTION SERVICE
$(document).ready(function() {
			
var $win = $(window);
var $stat = $('.animation-service'); // Change this to affect your desired element.

$win.on('scroll', function () {
    var scrollTop = $win.scrollTop();

    $stat.each(function () {
        var $self = $(this);
        var prev=$self.offset();
        console.log(scrollTop);
        console.log(prev.top);
        if ( (scrollTop - prev.top) > -600) {
          $self.css('opacity', '1').addClass('animated fadeIn');
        } else {
          console.log('n');
        }

    });

}).scroll();
  
});


// ON VIEWPORT SECTION PORTIFOLIO
$(document).ready(function() {
			
var $win = $(window);
var $stat = $('.animation-portifolio'); // Change this to affect your desired element.

$win.on('scroll', function () {
    var scrollTop = $win.scrollTop();

    $stat.each(function () {
        var $self = $(this);
        var prev=$self.offset();
        console.log(scrollTop);
        console.log(prev.top);
        if ( (scrollTop - prev.top) > -600) {
          $self.css('opacity', '1').addClass('animated flipInX');
        } else {
          console.log('n');
        }

    });

}).scroll();
  
});

// ON VIEWPORT SECTION CONTACT
$(document).ready(function() {
			
var $win = $(window);
var $stat = $('.animation-contact'); // Change this to affect your desired element.

$win.on('scroll', function () {
    var scrollTop = $win.scrollTop();

    $stat.each(function () {
        var $self = $(this);
        var prev=$self.offset();
        console.log(scrollTop);
        console.log(prev.top);
        if ( (scrollTop - prev.top) > -600) {
          $self.css('opacity', '1').addClass('animated fadeIn');
        } else {
          console.log('n');
        }

    });

}).scroll();
  
});

