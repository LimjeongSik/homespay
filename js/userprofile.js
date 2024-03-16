const btnPhoneCertification = document.querySelector(".btn_phone_certification")
const btnSave = document.querySelector(".btn_save")

btnPhoneCertification.addEventListener("click", (e) => {
    e.target.textContent = "인증완료"
    btnSave.disabled = false
})
