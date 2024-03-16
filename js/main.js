const btnContractRegistration = document.querySelectorAll(
    ".btn_contract_registration"
)

btnContractRegistration.forEach((btn) => {
    btn.addEventListener("click", () => {
        location.href = "contract.html"
    })
})

const btnPayment = document.querySelector(".btn_payment")
const btnWireTransferManagement = document.querySelector(
    ".btn_wiretransfer_management"
)
btnPayment.addEventListener("click", () => {
    location.href = "payment.html"
})
btnWireTransferManagement.addEventListener("click", () => {
    location.href = "wiretransfer.html"
})
