async function add1(valores){
    
    const novaMedia = await valores.media+1
    const novoAcumulador = await valores.acumulador+1
    const novaNota = await novoAcumulador/novaMedia

    await firebase.database().ref("rating").child("immortal_weakling").child("media").set(novaMedia)
    await firebase.database().ref("rating").child("immortal_weakling").child("nota").set(novaNota)
    await firebase.database().ref("rating").child("immortal_weakling").child("acumulador").set(novoAcumulador)

    alert("Obrigado por votar!")

    const notaText = document.getElementById("nota-text")
    notaText.innerHTML = `Nota: ${Number(novaNota).toFixed(2)} (${novaMedia} Votos)`


}

document.getElementById("star-1").addEventListener("click", function (){
    firebase.database().ref("rating").child("immortal_weakling").once("value").then(snapshot => {
        add1(snapshot.val())
    })
})


//votar duas estrelas
async function add2(valores){
    
    const novaMedia = await valores.media+1
    const novoAcumulador = await valores.acumulador+2
    const novaNota = await novoAcumulador/novaMedia

    await firebase.database().ref("rating").child("immortal_weakling").child("media").set(novaMedia)
    await firebase.database().ref("rating").child("immortal_weakling").child("nota").set(novaNota)
    await firebase.database().ref("rating").child("immortal_weakling").child("acumulador").set(novoAcumulador)

    alert("Obrigado por votar!")

    const notaText = document.getElementById("nota-text")
    notaText.innerHTML = `Nota: ${Number(novaNota).toFixed(2)} (${novaMedia} Votos)`
}

document.getElementById("star-2").addEventListener("click", function (){
    firebase.database().ref("rating").child("immortal_weakling").once("value").then(snapshot => {
        add2(snapshot.val())
    })
})


//votar 3 estrelas
async function add3(valores){
    
    const novaMedia = await valores.media+1
    const novoAcumulador = await valores.acumulador+3
    const novaNota = await novoAcumulador/novaMedia

    await firebase.database().ref("rating").child("immortal_weakling").child("media").set(novaMedia)
    await firebase.database().ref("rating").child("immortal_weakling").child("nota").set(novaNota)
    await firebase.database().ref("rating").child("immortal_weakling").child("acumulador").set(novoAcumulador)

    alert("Obrigado por votar!")

    const notaText = document.getElementById("nota-text")
    notaText.innerHTML = `Nota: ${Number(novaNota).toFixed(2)} (${novaMedia} Votos)`
}

document.getElementById("star-3").addEventListener("click", function (){
    firebase.database().ref("rating").child("immortal_weakling").once("value").then(snapshot => {
        add3(snapshot.val())
    })
})


//votar 4 estrelas
async function add4(valores){

    const novaMedia = await valores.media+1
    const novoAcumulador = await valores.acumulador+4
    const novaNota = await novoAcumulador/novaMedia

    await firebase.database().ref("rating").child("immortal_weakling").child("media").set(novaMedia)
    await firebase.database().ref("rating").child("immortal_weakling").child("nota").set(novaNota)
    await firebase.database().ref("rating").child("immortal_weakling").child("acumulador").set(novoAcumulador)

    alert("Obrigado por votar!")

    const notaText = document.getElementById("nota-text")
    notaText.innerHTML = `Nota: ${Number(novaNota).toFixed(2)} (${novaMedia} Votos)`
}

document.getElementById("star-4").addEventListener("click", function (){
    firebase.database().ref("rating").child("immortal_weakling").once("value").then(snapshot => {
        add4(snapshot.val())
    })
})


//votar 5 estrelas
async function add5(valores){
    
    const novaMedia = await valores.media+1
    const novoAcumulador = await valores.acumulador+5
    const novaNota = await novoAcumulador/novaMedia

    await firebase.database().ref("rating").child("immortal_weakling").child("media").set(novaMedia)
    await firebase.database().ref("rating").child("immortal_weakling").child("nota").set(novaNota)
    await firebase.database().ref("rating").child("immortal_weakling").child("acumulador").set(novoAcumulador)

    alert("Obrigado por votar!")

    const notaText = document.getElementById("nota-text")
    notaText.innerHTML = `Nota: ${Number(novaNota).toFixed(2)} (${novaMedia} Votos)`
}

document.getElementById("star-5").addEventListener("click", function (){
    firebase.database().ref("rating").child("immortal_weakling").once("value").then(snapshot => {
        add5(snapshot.val())
    })
})

document.addEventListener("DOMContentLoaded", async function (){
    firebase.database().ref("rating").child("immortal_weakling").once("value").then(async function(snapshot) {
        const notaText = document.getElementById("nota-text")
        notaText.innerHTML = `Nota: ${Number(snapshot.val().nota).toFixed(2)} (${snapshot.val().media} Votos)`
    })
})