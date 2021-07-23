const burger = document.querySelector('.navbar-burger')
const menu = document.querySelector('.menu')

const toggle = (e) => {
    if (e || !e) {
        menu.classList.toggle('active')
        burger.classList.toggle('active')
    }
}

burger.addEventListener('click', (e) => {
    toggle()
})

menu.addEventListener('click', (e) => {
    toggle()
})

window.addEventListener("resize", function () {
    if (innerWidth < 769) {
        menu.classList.remove('active')
        burger.classList.remove('active')
    }
}, false);

const swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
    },
});