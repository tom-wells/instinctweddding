
var currentQuote = 0

var totalQuotes = $('.quote-holder div').length

var moveQuote = function (quote) {
  var leftPosition = (-quote * 100) +'vw'

var quoteNumber = quote + 1 
$('.steps').text(quoteNumber + '/' +totalQuotes)
  
$('.quote-holder').css('left', leftPosition)
}

var nextQuote = function() {
  currentQuote = currentQuote + 1

if (currentQuote >= totalQuotes) {
  currentQuote = 0
}

  moveQuote(currentQuote)
  
}


 var previousQuote = function() {
   currentQuote = (currentQuote) - 1
    


      if (currentQuote < 0 ) {
   currentQuote = totalQuotes - 1
   }  
   
   moveQuote(currentQuote)
   
 }
var autoQuote = setInterval(function(){
  
nextQuote()

},10000)



  $('.next').on('click', function(e) {
    clearInterval(autoQuote)
    e.preventDefault();
    nextQuote()
  })
  
  $('.prev').on('click', function(e) {
     clearInterval(autoQuote)
     e.preventDefault();
    previousQuote()
  })
  
  // var slideNumber = currentSlide + 1 
  // $('.steps').text(slideNumber + '/' +totalSlides)
 