var name = "Pochito"
var energy = 100

function POU(name, energy) {

    const Pou = {
        name: String,
        energy: Number
    }

    let pou = Object.create(Pou)
    pou.name = name
    pou.energy = energy


    pou.comer = function (suma) {
        console.log(this.name, "come")
        this.energy += suma
    }
    pou.jugar = function (resta) {
        console.log(this.name, "juega")
        this.energy -= resta
    }
    pou.dormir = function (suma) {
        console.log(this.name, "durmio")
        this.energy += suma
    }

    return pou
}

window.onload = function(){
    var pou=POU(name, energy)

    actualizarDatos(pou)

    var btnComer=document.getElementById("botonComer")
    btnComer.addEventListener("click", () => {
        pou.comer(10)
        actualizarDatos(pou)

        var ultimaAccion = document.getElementById("ultimaAccion")
        ultimaAccion.innerText = pou.name + " comió"
    })

    var btnJugar=document.getElementById("botonJugar")
    btnJugar.addEventListener("click", () => {
        pou.jugar(15)
        actualizarDatos(pou)
        
        var ultimaAccion = document.getElementById("ultimaAccion")
        ultimaAccion.innerText = pou.name + " jugó"
    })

    var btnDormir=document.getElementById("botonDormir")
    btnDormir.addEventListener("click", () => {
        pou.dormir(50)
        actualizarDatos(pou)

        var ultimaAccion = document.getElementById("ultimaAccion")
        ultimaAccion.innerText = pou.name + " durmió"
    })
}

function actualizarDatos(pou){
    var nombrePou = document.getElementById("nombrePou")
    var energiaPou = document.getElementById("energiaPou")

    nombrePou.innerText=pou.name
    energiaPou.innerText=pou.energy
}