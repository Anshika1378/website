const slider = document.querySelector('.slider');
let index = 0;
let cardWidth = document.querySelector('.card').offsetWidth + 20;
let totalCards = document.querySelectorAll('.card').length;

function slideNext() {
    if (index < totalCards - 1) {
        index++;
    } else {
        index = 0;
    }
    slider.style.transform = `translateX(-${index * cardWidth}px)`;
}

// Auto Slide Every 3 Seconds
setInterval(slideNext, 3000);	