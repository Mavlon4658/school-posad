let checkboxs = document.querySelectorAll('.checkbox');

if (checkboxs.length) {
    checkboxs.forEach(el => {
        el.onclick = () => {
            el.querySelector('input[type="checkbox"]').click();
        }
    })
}

var init = false;
var swiper;
function swiperCard() {
    if (window.innerWidth <= 992) {
        if (!init) {
            init = true;
            swiper = new Swiper(".reach__card", {
                slidesPerView: 1,
                spaceBetween: 30,
                pagination: {
                    el: ".reach__card_pagination",
                    clickable: true,
                },
            });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}
swiperCard();
window.addEventListener("resize", function () {
    swiperCard()
});

let instructorSwp = new Swiper('.instructor .swiper', {
    slidesPerView: "auto",
    spaceBetween: 16,
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    },
    pagination: {
        el: '.instructor .swiper_pagination',
        clickable: true,
    }
})

let tarifSwp = new Swiper('.tarif .swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
})