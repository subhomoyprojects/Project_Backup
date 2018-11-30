function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/* Show More and Less */

$(document).ready(function() {
    $('.product-text-controller > div').showMore({
    minheight: 265,
    buttontxtmore: 'Read More',
    buttontxtless: 'Read Less',
    animationspeed: 250
  });

});
/* Show More and Less */

var owl = $('.owl1');
      owl.owlCarousel({
        margin: 10,
		/*autoplay: true,*/
        autoplayTimeout: 2000,
        /*loop: true,*/
		nav: true,
		margin:20,
		navText : ["<img src='images/update_prev.png'>","<img src='images/update_next.png'>"],
        responsive: {
          0: {
            items: 1
          },
          480: {
            items: 2
          },
		      768: {
            items: 2
          },
          991: {
            items: 3
          }
        }
      })
	  
	  $('.owl-carousel').on('mouseleave',function(e){
    owl.trigger('play.owl.autoplay');
})
$('.owl-carousel').on('mouseover',function(e){
    owl.trigger('stop.owl.autoplay');
})

