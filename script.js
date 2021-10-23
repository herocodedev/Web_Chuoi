const timesBtn = document.querySelector('.icon-bars')
const navMenu = document.querySelector('.nav-menu')
const closeBtn = document.querySelector('.close')
timesBtn.onclick = function(e) {
    navMenu.style.transform = 'translateX(0%)'
}
closeBtn.onclick = function(e) {
    navMenu.style.transform = 'translateX(-100%)'
}

/* slide Hero*/
const slider1 = document.getElementById('glide_1')
const slider3 = document.getElementById('glide_3')

function createGlide1_3(glideEl) {
    if (glideEl) {
        new Glide(glideEl, {
            type: 'carousel',
            startAt: 0,
            autoplay: 3000,
            hoverpause: true,
            perView: true,
            animationDuration: 800,
            animationTimingFunc: 'linear'
        }).mount()
    }

}
createGlide1_3(slider1)
createGlide1_3(slider3)

/* animation */
const styleProduct = document.querySelector('.style-product')
const allProducts = document.querySelector('.all-products')
const productDetail = document.querySelector('.product-detail')
const facility = document.querySelector('.facility')
const author = document.querySelector('.author')

function createAnimate(element) {
    if (element) {
        AOS.init({
            offset: 200,
            duration: 1000,
        });
    }
}
createAnimate(styleProduct)
createAnimate(allProducts)
createAnimate(productDetail)
createAnimate(facility)
createAnimate(author)


/* slider Product */
/* slide */

const slider2 = document.getElementById('glide_2')

function createGlide2(slideEl) {
    if (slideEl) {
        new Glide(slideEl, {
            type: "carousel",
            startAt: 0,
            perView: 4,
            autoplay: 1000,
            hoverpause: true,
            rewin: false,
            animationDuration: 800,
            animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
            breakpoints: {
                1300: {
                    perView: 2,
                },
                768: {
                    perView: 2,
                },
            },
        }).mount();
    }
}

createGlide2(slider2)


/* click product detail */
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const productsAll = $('.products-all')
const trendingProducts = $('.trending-products')
const specialProducts = $('.special-products')
const featuredProducts = $('.featured-product')
const column = $$('.col')


productsAll.classList.add('active')

function renderProduct(className) {
    for (let i = 0; i < column.length; i++) {
        const tokenList = column[i].classList
        let result = tokenList.contains(className)
        const productEl = column[i]
        if (result) {
            productEl.classList.add('db')
            productEl.classList.remove('dl')
        } else {
            productEl.classList.add('dl')
            productEl.classList.remove('db')
        }
    }
}

productsAll.onclick = function(e) {
    const ActiveEl = $('.active')
    ActiveEl.classList.remove('active')
    this.classList.add('active')
    renderProduct('all')
}

trendingProducts.onclick = function(e) {
    const ActiveEl = $('.active')
    ActiveEl.classList.remove('active')
    this.classList.add('active')
    renderProduct('iphone')
}

specialProducts.onclick = function(e) {
    const ActiveEl = $('.active')
    ActiveEl.classList.remove('active')
    this.classList.add('active')
    renderProduct('samsung')
}
featuredProducts.onclick = function(e) {
    const ActiveEl = $('.active')
    ActiveEl.classList.remove('active')
    this.classList.add('active')
    renderProduct('headphone')
}

/* scroll to top */
const topBtn = document.querySelector('.btn-top-view')
console.log(topBtn)
topBtn.onclick = function(e) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// when scrollTop 100vh then appear
const heroEl = document.querySelector('.hero')
const heroWidth = heroEl.offsetHeight

document.onscroll = function(e) {
    let value = window.scrollY

    if (value > heroWidth / 2) {
        console.log(1)
        topBtn.style.opacity = 1
    } else {
        topBtn.style.opacity = 0

    }
}