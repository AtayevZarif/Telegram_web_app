let telegram = window.Telegram.WebApp;
let name = document.getElementById("name").value
let phone = document.getElementById("phone").value
let email = document.getElementById("email").value
let error = document.getElementById("error")
let buyBtn = document.querySelector("submit")

telegram.expand()

name = telegram.initDataUnsafe.user.first_name + " " + telegram.initDataUnsafe.user.last_name


buyBtn.addEventListener("click", () => {
    error.innerText = ""

    if (name.length < 5){
        error.innerText = "Ismda xato bor"
        return
    }

    if (phone.length < 5){
        error.innerText = "Telefon raqamda xato bor"
        return
    }

    if (email.length < 5){
        error.innerText = "Emailda xato bor"
        return
    }

    let data = {
        name: name,
        phone: phone,  
        email: email,
    }
    telegram.sendData("")

    telegram.close()
})
