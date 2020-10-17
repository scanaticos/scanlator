function longPageFunc(){
    const longPage = document.getElementById("longpage")
    const passarPag = document.getElementById("passar-page")

    longPage.style.display = "block"
    passarPag.style.display = "none"
}

function passarPageFunc(){
    const longPage = document.getElementById("longpage")
    const passarPag = document.getElementById("passar-page")

    longPage.style.display = "none"
    passarPag.style.display = "block"
}