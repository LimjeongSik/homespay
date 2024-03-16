const swiperTabs = document.querySelector(".swiper_tabs")
const swiperTabBtns = swiperTabs.querySelectorAll("button")
var swiper = new Swiper(".registerSwiper", {
    autoHeight: true,
})

swiperTabBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        swiperTabBtns.forEach((btn) => {
            btn.classList.remove("active")
        })
        btn.classList.add("active")
        swiper.slideTo(index)
    })
})
swiper.on("slideChange", () => {
    swiperTabBtns.forEach((btn, index) => {
        if (index === swiper.activeIndex) {
            btn.classList.add("active")
        } else {
            btn.classList.remove("active")
        }
    })
})
