var currentSlide = 0

var totalSlides = $('.holder div').length

var moveSlide = function (slide) {
  var leftPosition = (-slide * 100) +'vw'

var slideNumber = slide + 1 
$('.steps').text(slideNumber + '/' +totalSlides)
  
$('.holder').css('left', leftPosition)
}

var nextSlide = function() {
  currentSlide = currentSlide + 1

if (currentSlide >= totalSlides) {
  currentSlide = 0
}

  moveSlide(currentSlide)
  
}


 var previousSlide = function() {
   currentSlide = (currentSlide) - 1
    


      if (currentSlide < 0 ) {
   currentSlide = totalSlides - 1
   }  
   
   moveSlide(currentSlide)
   
 }
var autoSlide = setInterval(function(){
  
nextSlide()


},5000)



  $('.next').on('click', function(e) {
    clearInterval(autoSlide)
    e.preventDefault();
    nextSlide()
  })
  
  $('.prev').on('click', function(e) {
     clearInterval(autoSlide)
     e.preventDefault();
    previousSlide()
  })
  
  var slideNumber = currentSlide + 1 
  $('.steps').text(slideNumber + '/' +totalSlides)
 