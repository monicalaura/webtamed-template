
$(document).ready(function() {
 
//add active class to homepage toggle menu
$(function() {
  $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active-menu');
});

//toggler btn
const open_menu = document.querySelector('.toggler-btn');
const navbar = document.querySelector('.navbar');

$('.toggler-btn').click(function() {
   
  $('.toggler-btn').toggleClass('change');
 
});

open_menu.addEventListener('click', toggleMenu);



function toggleMenu () {
  navbar.classList.toggle('is-active');
}

  //Portfolio filter
    $('ul#filter a').click(function() {
      $(this).css('outline','none');
      $('ul#filter .current').removeClass('current');
      $(this).parent().addClass('current');
      
      var filterVal = $(this).text().toLowerCase().replace(' ','-');
          
      if(filterVal == 'all') {
        $('#projects article.hidden').fadeIn('slow').removeClass('hidden');
      } else {
        $('#projects article').each(function() {
          if(!$(this).hasClass(filterVal)) {
            $(this).fadeOut('normal').addClass('hidden');
          } else {
            $(this).fadeIn('slow').removeClass('hidden');
          }
        });
      }
      
      return false;
    });

    // Pricing toggle
    $('#togglePlan').change(function(){
      if($(this).is(":checked")) {
 
       $('.monthly').removeClass('show');
         $('.monthly').addClass('hide');
         $('.annually').addClass('show');      
        
     } else {
       $('.monthly').addClass('show');
       $('.annually').removeClass('show');     
 
     }
 });

 //main homepage slider
 $(function(){ 
   $('.carousel').carousel({ interval: 3000 });
   });

 //testimonial slider   
var prevButton = '<button type="button" data-role="none" class="slick-prev" aria-label="prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1"><path fill="#FFFFFF" d="M 16,16.46 11.415,11.875 16,7.29 14.585,5.875 l -6,6 6,6 z" /></svg></button>',
nextButton = '<button type="button" data-role="none" class="slick-next" aria-label="next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M8.585 16.46l4.585-4.585-4.585-4.585 1.415-1.415 6 6-6 6z"></path></svg></button>';

$('.single-item').slick({
infinite: true,
dots: true,
autoplay: true,
autoplaySpeed: 3000,
speed: 1000,
cssEase: 'ease-in-out',
prevArrow: prevButton,
nextArrow: nextButton
});

$('.quote-container').mousedown(function(){
$('.single-item').addClass('dragging');
});
$('.quote-container').mouseup(function(){
$('.single-item').removeClass('dragging');
});

//responsive height
$('.single-item').slick('setPosition');

//faq
$(function(){
	
	$("dd.answer")
		.hide();
	
	$("dl.faq dt")
		.append("<br /><a href='#' title='Show Answer' class='answer-tab'>Answer</a>");
		
	$(".answer-tab")
		.click(function(){
			$(this)
				.parent().parent()
				.find("dd.answer")
				.slideToggle();
            return false;
		});
});

  });

  //JS
  //widget-nav - add active class to the current link 
var list = document.getElementById("widget-nav");
var links = list.getElementsByClassName("widget-link");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}





