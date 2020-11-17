function criarRedeSociais(){
    const divPai = document.getElementById("redes-sociais-div")
    
    //facebook
    const facebook = document.createElement("a")
    facebook.innerHTML = `<img style="width: 40px; height: 40px; margin: 10px 0px" src="https://i.imgur.com/LpEfNiv.png" alt="" id="facebook">`
    facebook.href = "https://www.facebook.com/Scanaticos-102594551621681/"
    facebook.target = "_blank"

    //discord
    const discord = document.createElement("a")
    discord.innerHTML = `<img style="width: 45px; height: 45px; margin: 10px 20px" src="https://i.imgur.com/mroJ0Hv.png" alt="" id="discord">`
    discord.href = "https://discord.gg/xBvDbgZ26C"
    discord.target = "_blank"


    divPai.appendChild(facebook)
    divPai.appendChild(discord)
}

criarRedeSociais()

document.getElementById("facebook").addEventListener("mouseenter", () => {
    document.getElementById("facebook").src = "https://i.imgur.com/ox9JyJx.png"
})
document.getElementById("facebook").addEventListener("mouseout", () => {
    document.getElementById("facebook").src = "https://i.imgur.com/LpEfNiv.png"
})

document.getElementById("discord").addEventListener("mouseenter", () => {
    document.getElementById("discord").src = `https://i.imgur.com/r0x6Q7Y.png`
})
document.getElementById("discord").addEventListener("mouseout", () => {
    document.getElementById("discord").src = `https://i.imgur.com/mroJ0Hv.png`
})
