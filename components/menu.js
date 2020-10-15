function exibirMenu(){
    //classe
    const classe = "nav-item nav-link"

    //Div Pai
    const navbarNav = document.getElementById("navbar-nav")

    //Opt Menu
    const home = document.createElement("a")
    const projetos = document.createElement("a")

    //Escrevendo o texto
    home.innerHTML = "Home"
    projetos.innerHTML = "Projetos"

    //Atribuindo classe
    home.className = classe
    projetos.className = classe

    //Atribuindo link
    home.href = "https://scanaticos.site/home.html"
    projetos.href = "https://scanaticos.site/projetos.html"

    //Estilizando
    home.style = "margin-right: 20px;"
    projetos.style = "margin-right: 20px;"

    //Atribuindo ao Pai
    navbarNav.appendChild(home)
    navbarNav.appendChild(projetos)
}

exibirMenu()

