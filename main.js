let telegram = window.Telegram.WebApp;
let name = document.getElementById("name")
let phone = document.getElementById("phone")
let email = document.getElementById("email")
let buyBtn = document.querySelector("button")

name.value = telegram.initDataUnsafe.first_name + " " + telegram.initDataUnsafe.last_name

buyBtn.addEventListener("click", () => {
     
})
