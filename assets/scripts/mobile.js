const navButton = document.querySelector('.mobile-button')
const navMenu = document.querySelector('.mobile-menu')
const mobileTag = document.querySelectorAll('.mobile-menu a')

navButton.addEventListener('click', function(){
    navMenu.classList.toggle("open")

})

navMenu.addEventListener('click', function() {
    navMenu.classList.remove("open")
})