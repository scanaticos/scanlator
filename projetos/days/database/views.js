function visitou(visitante){
    const novaVisita = Number(visitante)+1
    firebase.database().ref("days").set(novaVisita)
}

function mostrarVisitantes(all){
    const visitantes = all
    const view = document.getElementById("views")
    const url = window.location.href
    view.innerHTML = `Views: ${visitantes}`
}

document.addEventListener("DOMContentLoaded", async function (){
    firebase.database().ref("days").once("value").then(async function(snapshot) {
        const url = window.location.href
        if(url.slice(0, 45) == "https://scanaticos.site/projetos/days/capitul"){
            
        if(!!document.getElementById("views")){
            await visitou(snapshot.val())
            await mostrarVisitantes(snapshot.val())
        }else{
            await visitou(snapshot.val())
        }
        }
    })
})
