function criarRedeSociais(){
    const divPai = document.getElementById("redes-sociais-div")
    
    //facebook
    const facebook = document.createElement("a")
    facebook.innerHTML = `<img style="width: 40px; height: 40px; margin: 10px 0px" src="https://scontent.fpav1-1.fna.fbcdn.net/v/t1.0-9/121311799_125664749294330_5931478868733327624_n.jpg?_nc_cat=108&_nc_sid=8024bb&_nc_ohc=Q2gS2Kp4RzIAX-LfOxh&_nc_ht=scontent.fpav1-1.fna&oh=5fc3a96c51a6a95a339492b8506c5c22&oe=5FAE370D" alt="">`
    facebook.href = "https://www.facebook.com/Scanaticos-102594551621681/"
    facebook.target = "_blank"

    //discord
    const discord = document.createElement("a")
    discord.innerHTML = `<img style="width: 45px; height: 45px; margin: 10px 20px" src="https://scontent.fpav1-1.fna.fbcdn.net/v/t1.0-9/121444230_125664755960996_2471654480751919961_n.jpg?_nc_cat=107&_nc_sid=8024bb&_nc_ohc=Uzsof57oQtQAX_D-uo7&_nc_ht=scontent.fpav1-1.fna&oh=cf574992bd6086359f4fe72760ee0512&oe=5FADE1CF" alt="">`
    discord.href = "https://www.facebook.com/Scanaticos-102594551621681/"
    discord.target = "_blank"

    divPai.appendChild(facebook)
    divPai.appendChild(discord)
}

criarRedeSociais()