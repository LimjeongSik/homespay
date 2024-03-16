const price = document.getElementById("price")
const totalPrice = document.querySelector(".total_price")
const actualPrice = document.querySelector(".actual_price")

price.addEventListener("input", (e) => {
    let value = e.target.value.trim()
    const numericValue = value.replace(/,/g, "").replace(/\D/g, "")
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    e.target.value = formattedValue

    if (!/^[1-9][0-9,]*$/.test(formattedValue)) {
        value = value.slice(0, -1).replace(/,/g, "")
        e.target.value = value
    }

    const priceValue =
        value.replace(/,/g, "") === "" ? 0 : parseInt(value.replace(/,/g, ""))
    const serviceCharge = Math.floor(priceValue * 0.044)
    const total = parseInt(priceValue) + serviceCharge

    if (priceValue === 0 || priceValue.length === 0) {
        totalPrice.textContent = "0원"
        actualPrice.textContent = "0원"
        return
    }

    totalPrice.textContent = total.toLocaleString() + "원"
    actualPrice.textContent = priceValue.toLocaleString() + "원"
})

const btnPayment = document.querySelector(".btn_payment")
btnPayment.addEventListener("click", () => {
    location.href = "payment_complete.html"
})
