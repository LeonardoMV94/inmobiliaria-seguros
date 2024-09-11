
var carouselInner = document.querySelector('.carousel-inner');
var carouselWidth = carouselInner.scrollWidth;
var cardWidth = document.querySelector('.carousel-item').offsetWidth;

var scrollPosition = 0;
scrollPosition += cardWidth;

document.querySelector('.carousel-control-next').addEventListener('click', function() {
    if(scrollPosition < (carouselWidth - (cardWidth*4))){
        console.log('netx')
        scrollPosition += cardWidth;
        carouselInner.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });

    }
  
});

document.querySelector('.carousel-control-prev').addEventListener('click', function() {
    scrollPosition -= cardWidth;
    if (scrollPosition < 0) {
        scrollPosition = 0;
    }

    carouselInner.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
  
});

