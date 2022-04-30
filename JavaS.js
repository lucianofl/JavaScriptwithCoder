//Clase constructora
class Carta{
    constructor (nombre, esp, tipo, ataque, vida){
        this.nombre = nombre
        this.especialidad = esp
        this.tipo = tipo
        this.ataque = ataque
        this.vida = vida

    }
//Metodos
    atacar(cartaDamage){
        console.log(`La carta ${this.nombre} ha embestido a ${cartaDamage.nombre} con daño de ${this.ataque}`)
        cartaDamage.recibirDaño(this.ataque)
    }
    defenderse(cartaDef){
        console.log(`La carta ${this.nombre} se ha puesto en modo de defensa al ataque de ${cartaDef.nombre} recibiendo ${this.ataque}`)
        cartaDef.recibirDaño(this.ataque)
    }

    recibirDaño(dañoAtaque){
        this.vida -= dañoAtaque

        if(this.vida <= 0){
        console.log(`La carta ${this.nombre} se fue a mimir. Has ganado la batalla :)`)
        } else{
            console.log(`La carta ${this.nombre} sigue con ${this.vida} de salud`)
        }
        
    }
}

//Constantes
const cartaBestia = new Carta("Obelisco el Atormentador","Bestia Divina","Epico",4000, 2300)
const cartaDragon = new Carta("Dragon de ojos Azules","Dragon","Legendario", 3900, 2700)
const cartaEsbirro = new Carta("Gusano Blindado","Terrestre","Comun",1500, 6000)
const cartaSoldado = new Carta("Smorkl Escudero","Terrestre","Comun",1700, 5200)
//Arrays
let cartas = [cartaBestia, cartaDragon, cartaEsbirro, cartaSoldado]
let deck1 = [cartaBestia, cartaDragon]
let deck2 = [cartaBestia, cartaEsbirro]
let deck3 = [cartaBestia, cartaSoldado]
let deck4 = [cartaDragon, cartaEsbirro]
let deck5 = [cartaDragon, cartaSoldado]
let deck6 = [cartaEsbirro, cartaSoldado]

alert("Bienvenido a Yu Gi Oh");
let nombre = prompt("Introduce tu nombre");
while (nombre === "") {
alert("Por favor pone un nombre valido!")
} 
alert("Hola " + nombre);
//Filtrado de cartas para saber cual tiene mas daño
cartas = cartas.sort((cartaBestia, cartaDragon)=>{
    return cartaDragon.ataque - cartaBestia.ataque
})
console.log(cartas)
//Se usa console.table para mostrar diferentes decks cada una con difrentes cartas
console.table(deck1)
console.table(deck2)
console.table(deck3)
console.table(deck4)
console.table(deck5)
console.table(deck6)
alert("Vas a tener que realizar tu mazo, por el momento hay 6 combinaciones de mazos diferente, elige solo una combinacion, cada mazo sera mostrado en la consola. Del 1 al 6")
let deck = Number(prompt("Introduce tu deck"));

if (deck !== 1 && deck !== 2 && deck !== 3 && deck !== 4  && deck !== 5  && deck !== 6){
alert("Por favor introduce una deck valida")
} else {
alert("Bien has elegido a la " + deck + " deck");
}
let deckEnemiga = Number(prompt("Introduce una deck enemiga, a la cual te enfrentaras"))
if (deckEnemiga !== 1 && deckEnemiga !== 2 && deckEnemiga !== 3 && deckEnemiga !== 4  && deckEnemiga !== 5  && deckEnemiga !== 6){
    alert("Por favor introduce un deck enemiga valida")
} else{
    alert ("Bien tu oponente es la deck " + deckEnemiga)
}
alert("Ahora hagamos pelear a las decks")
//Accion de combate con metodos y ciclos
let atacarDeck = prompt("POSE DE ATAQUE O DE DEFENSA?").toLowerCase()
if (atacarDeck === "ataque")
    do{
        cartaBestia.atacar(cartaSoldado)
        if(cartaSoldado.vida <= 0){
            break
        }
        cartaSoldado.atacar(cartaBestia)
    } while (cartaBestia.vida > 0 && cartaSoldado.vida > 0)
if(atacarDeck === "defensa"){
    do{
        cartaSoldado.defenderse(cartaBestia)
        if(cartaSoldado.vida <= 0){
            break
        }
        cartaSoldado.defenderse(cartaBestia)
    } while (cartaBestia.vida > 0 && cartaSoldado.vida > 0)
}

//Calculo el promedo de daño y de vida de mis decks

function calculoPromedioDeDaño (cartaBestia,cartaDragon,cartaEsbirro,cartaSoldado){
    let promedio = (cartaBestia + cartaDragon + cartaEsbirro + cartaSoldado)/4;
    return 'el ataque promedio de cada carta es de ' + promedio
}
console.log(calculoPromedioDeDaño(cartaBestia.ataque,cartaDragon.ataque,cartaEsbirro.ataque,cartaSoldado.ataque))
