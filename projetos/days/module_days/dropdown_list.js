function addDropList(){
    const dropMenu = document.getElementById("dropdown-menu")
    //const dropdownMenuLink = document.getElementById("dropdownMenuLink")

    for(let c = 1; c <= 5; c++){
        const capName  = document.createElement("a")
        capName.className = "dropdown-item"
        capName.innerHTML = `Cap. ${c}`
        capName.href = `./${c}.html` 
        dropMenu.appendChild(capName)

        if(c == Number(dropdownMenuLink.text.split("")[24]+dropdownMenuLink.text.split("")[25])){
            capName.className = "dropdown-item active"
        }
    }

    for(let c = 45; c <= 46; c++){
        const capName  = document.createElement("a")
        capName.className = "dropdown-item"
        capName.innerHTML = `Cap. ${c}`
        capName.href = `./${c}.html` 
        dropMenu.appendChild(capName)

    if(c == Number(dropdownMenuLink.text.split("")[24]+dropdownMenuLink.text.split("")[25])){
            capName.className = "dropdown-item active"
        }

    }
}



addDropList()