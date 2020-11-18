function addDropList(){
    const dropMenu = document.getElementById("dropdown-menu")

    for(let c = 1; c <= 1; c++){
        const capName  = document.createElement("a")
        capName.className = "dropdown-item"
        capName.innerHTML = `Cap. ${c}`
        capName.href = `./${c}.html` 
        dropMenu.appendChild(capName)

        if(c == Number(dropdownMenuLink.text.split("")[24]+dropdownMenuLink.text.split("")[25])){
            capName.className = "dropdown-item active"
        }

    }
    for(let c = 21; c <= 24; c++){
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