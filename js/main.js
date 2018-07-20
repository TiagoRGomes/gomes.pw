// SINGLE PAGE NAV
	
		$(document).ready(function() {
			$('#nav').onePageNav();
		});


//RSLIDES 

$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
});

$(".rslides_portifolio").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
});

// ON VISIBLE
Visibility.onVisible(function(){
	setTimeout(function () {
		$(".introduction h4").addClass("animated fadeInDown");
	}, 400);
	setTimeout(function () {
		$(".about li").addClass("animated flipInX");
	}, 400);
	setTimeout(function () {
		$(".portifolio img").addClass("animated flipInX");
	}, 400);

});

