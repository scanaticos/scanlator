function visitou(visitante){
    const novaVisita = Number(visitante)+1
    firebase.database().ref("views").child('tower_into').set(novaVisita)
}

function mostrarVisitantes(all){
    const visitantes = all
    const view = document.getElementById("views")

    view.innerHTML = `Views: ${visitantes}`
}

document.addEventListener("DOMContentLoaded", async function (){
    firebase.database().ref("views").child("tower_into").once("value").then(async function(snapshot) {
        const url = window.location.href
        if(url.slice(0, 64) == "https://scanaticos.site/projetos/tower_into_the_clouds/capitulos"){
            
        if(!!document.getElementById("views")){
            await visitou(snapshot.val())
            await mostrarVisitantes(snapshot.val())
        }else{
            await visitou(snapshot.val())
        }
        }
    })
})
