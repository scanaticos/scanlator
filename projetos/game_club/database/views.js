function visitou(visitante){
    const novaVisita = Number(visitante)+1
    firebase.database().ref("views").child('game_club').set(novaVisita)
}

function mostrarVisitantes(all){
    const visitantes = all
    const view = document.getElementById("views")

    view.innerHTML = `Views: ${visitantes}`
}

document.addEventListener("DOMContentLoaded", async function (){
    firebase.database().ref("views").child("game_club").once("value").then(async function(snapshot) {
        const url = window.location.href
        if(url.slice(0, 52) == "https://scanaticos.site/projetos/game_club/capitulos"){
            
        if(!!document.getElementById("views")){
            await visitou(snapshot.val())
            await mostrarVisitantes(snapshot.val())
        }else{
            await visitou(snapshot.val())
        }
        }
    })
})