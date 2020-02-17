var themeSwitch = document.querySelector(".switch")
var bodyTag = document.querySelector("body")

themeSwitch.addEventListener("click" , switchTheme)

function switchTheme(){
    bodyTag.classList.toggle("light")
    bodyTag.classList.toggle("dark")
}