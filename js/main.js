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
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
        992: {
            slidesPerView: 4,
        }
    }
})

let tarfiCard = document.querySelectorAll('.tarif .swiper-slide');
if (tarfiCard.length) {
    tarfiCard.forEach(el => {
        let btn = el.querySelector('.show_more'),
            list = el.querySelector('ul');

        btn.onclick = () => {
            list.classList.toggle('active');
            btn.classList.toggle('active');
        }
    })
}

let comfortableSwp = new Swiper('.comfortable .swiper', {
    slidesPerView: 1,
    spaceBetween: 8,
    initialSlide: 1,
    loop: true,
    breakpoints: {
        992: {
            spaceBetween: 20,
        }
    },
    navigation: {
        nextEl: '.comfortable .swiper_btn__next',
        prevEl: '.comfortable .swiper_btn__prev'
    }
})

let reviewSwp = new Swiper('.review .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 21,
    loop: true,
    breakpoints: {
        1150: {
            slidesPerView: 3,
            spaceBetween: 98,
        },
        992: {
            slidesPerView: 3,
        }
    },
    navigation: {
        nextEl: '.review .swiper_btn__next',
        prevEl: '.review .swiper_btn__prev',
    },
    pagination: {
        el: '.review .swiper_pagination',
        clickable: true,
    }
})

let reviewCards = document.querySelectorAll('.review .swiper-slide');
if (reviewCards.length) {
    reviewCards.forEach(el => {
        let btn = el.querySelector('button'),
            video = el.querySelector('.video');

        btn.onclick = () => {
            reviewCards.forEach(item => {
                if (item != el) {
                    item.classList.remove('active');
                    item.querySelector('.video').pause();
                }
            })

            el.classList.add('active');
            video.currentTime = 0;
            video.play();
        }
    })
}

const accordion = document.querySelectorAll('.accordion');

accordion.forEach((item) => {
    const header = item.querySelector('.accordion__head');
    const content = item.querySelector('.accordion__body');

    header.addEventListener('click', () => {
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
        header.classList.toggle('active');
    });
});

let license = new Swiper('.license .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 64,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    },
    pagination: {
        el: '.license .swiper_pagination',
        clickable: true,
    }
})

let planBtn = document.querySelectorAll('.plan__form .step button');
if (planBtn.length) {
    planBtn.forEach(btn => {
        btn.onclick = () => {
            planBtn.forEach(el => {
                if (el == btn) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active')
                }
            })
        }
    })
}

let certificatImg = document.querySelectorAll('.license .swiper-slide img');
if (certificatImg.length) {
    certificatImg.forEach((img, imgID) => {
        img.onclick = () => {
            let src = [];
            certificatImg.forEach(item => {
                src.push({
                    'src': item.getAttribute('src'),
                    'thumb': item.getAttribute('src'),
                    'subHtml': ''
                });
            })
            if (document.getElementById('lightgallery')) {
                document.getElementById('lightgallery').remove();
            }
            const galleryContainer = document.createElement('div');
            galleryContainer.id = 'lightgallery';
            document.body.appendChild(galleryContainer);
            lightGallery(galleryContainer, {
                dynamic: true,
                dynamicEl: src,
                index: imgID,
            });
        }
    })
}

let tarifhead = document.querySelectorAll('.tarif__head ul a'),
    tarifBody = document.querySelectorAll('.tarif__body_item');

if (tarifhead.length) {
    tarifhead.forEach((hd, hdID) => {
        hd.onclick = e => {
            e.preventDefault();
            tarifBody.forEach((el, idx) => {
                if (idx == hdID) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })

            tarifhead.forEach(item => {
                if (hd == item) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            })
        }
    })
}