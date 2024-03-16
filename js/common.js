// 파라미터값 가져오는 함수
function getQueryParameterValue(parameterName) {
    var queryString = window.location.search.substring(1)
    var parameters = queryString.split("&")
    for (var i = 0; i < parameters.length; i++) {
        var pair = parameters[i].split("=")
        if (pair[0] === parameterName) {
            return decodeURIComponent(pair[1])
        }
    }
    return null
}

const btnPrev = document.querySelector(".btn_prev")
if (btnPrev)
    btnPrev.addEventListener("click", () => {
        history.back()
    })

const btnMenu = document.querySelector(".btn_menu")
const toggleMenu = document.querySelector(".toggle_menu")
const btnToggleClose = document.querySelector(".btn_toggle_close")

if (btnMenu)
    btnMenu.addEventListener("click", () => {
        toggleMenu.classList.add("active")
    })
if (btnToggleClose)
    btnToggleClose.addEventListener("click", () => {
        toggleMenu.classList.remove("active")
    })
