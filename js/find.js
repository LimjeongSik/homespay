const findId = document.querySelector(".find_id")
const findPassword = document.querySelector(".find_password")

findId.querySelector(".confirm_bx button").addEventListener("click", () => {
    findId.querySelector(".user_find_id").style.display = "block"
})
findPassword
    .querySelector(".confirm_bx button")
    .addEventListener("click", () => {
        findPassword.querySelector(".user_find_password_id").style.display =
            "block"
        findPassword.querySelector(".user_find_password_change").style.display =
            "block"
    })

document.addEventListener("DOMContentLoaded", () => {
    const id = getQueryParameterValue("value")
    if (id === "password") {
        const swiper = document.querySelector(".findSwiper").swiper
        swiper.slideTo(1)
    } else {
        const swiper = document.querySelector(".findSwiper").swiper
        swiper.slideTo(0)
    }
})
const swiperTabs = document.querySelector(".swiper_tabs")
const swiperTabBtns = swiperTabs.querySelectorAll("button")
var swiper = new Swiper(".findSwiper", {
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
