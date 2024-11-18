let icon = document.querySelector("i")

icon.onclick = function () {
    if (icon.className === "bx bxs-sun") {
        icon.className = 'bx bxs-moon'
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
    }
    else {
        icon.className = "bx bxs-sun"
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"   
    }
}