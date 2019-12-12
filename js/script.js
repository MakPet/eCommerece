$('.slider').slick({
	prevArrow:"<div class='arrow arrow-prev'></div>",
    nextArrow:"<div class='arrow arrow-next'></div>"
});

document.body.addEventListener('click', function(e) {
  if (e.target.matches('button')) {
    console.log('btn!')
    const icon = e.target.closest('div.add-to-inner').querySelector('.add-to .icon')
    icon.classList.add('visible')
  }
})