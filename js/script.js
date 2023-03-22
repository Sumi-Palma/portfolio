let valueDisplays = document.querySelectorAll(".fact-number");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-to"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function() {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

// init Isotope
var $grid = $('.portfolio-list').isotope({
    // options
});
// filter items on button click
$('.filter-button-group').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns();
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');

function resetFilterBtns() {
    filterBtns.each(function() {
        $(this).removeClass('active-filter-btn');
    })
}
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        items: 1,
        smartSpeed: 2000,

    })
});