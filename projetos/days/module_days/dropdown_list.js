function addDropList(){
    const dropMenu = document.getElementById("dropdown-menu")

    for(let c = 1; c <= 5; c++){
        const capName  = document.createElement("a")
        capName.className = "dropdown-item"
        capName.innerHTML = `Cap. ${c}`
        capName.href = `./${c}.html` 
        dropMenu.appendChild(capName)
    }
}
addDropList()