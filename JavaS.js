class Carta{
    constructor (nombre, esp, tipo, ataque, vida){
        this.nombre = nombre
        this.especialidad = esp
        this.tipo = tipo
        this.ataque = ataque
        this.vida = vida
    }

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
        console.log(`La carta ${this.nombre} se fue a mimir`)
        } else{
            console.log(`La carta ${this.nombre} sigue con ${this.vida} de salud`)
        }
        
    }
}


const cartaBestia = new Carta("Obelisco el Atormentador","Bestia Divina","Epico",4000, 2300)
const cartaDragon = new Carta("Dragon de ojos Azules","Dragon","Legendario", 3900, 2700)
const cartaEsbirro = new Carta("Gusano Blindado","Terrestre","Comun",1500, 6000)
const cartaSoldado = new Carta("Smorkl Escudero","Terrestre","Comun",1700, 5200)


alert("Hola, me presento, soy Yugi Moto... quizas me conoces, jugamos un duelo de cartas? si? o no?")
let pelea = prompt("Si o no rey?").toLowerCase();
if (pelea === "si"){
    alert("Eeee...eso es, alguien con agallas, vamos rapido, arma tu mazo")
    console.table(cartaBestia)
    console.table(cartaDragon)
    console.table(cartaEsbirro)
    console.table(cartaSoldado)
    alert("Bien, en la consola te saldran los distintos tipos de cartas para elegir, por el momento podras elegir 2 de 4, de esas 4, 1 tanque y 1 ataque trata de elegir bien o perderas!")
    alert("Para elegir una carta introduce el numero que aparece a continuacion del nombre")
    let ataque = Number(prompt("Cartas de ataque 1-Obelisco el Atormentador. 2-Dragon de ojos Azules."))
    if (ataque === 1 ){
       let defensa = Number(prompt("Bien has elegido a Obelisco, ahora defensa. 3- Gusano Blindado, 4-Smorkl Escudero"))
       if(defensa === 3){
           alert("Bien ya tienes tu mazo, has elegido a Obelisco y a Gusano")
       }
        if (defensa === 4){
            alert("Ya tienes tu mazo completo, Obelisco el Atormentador y a Smorlk Escudero, a pelear")
        }
        alert("Bien es tu turno, que vas a realizar? Vas a atacar o defenderte?")
        let ataque = prompt("ATACA - DEFIENDE").toLowerCase()
        if(ataque === "ataca"){
            do{
                cartaBestia.atacar(cartaSoldado)
                if(cartaSoldado.vida <= 0){
                    break
                }
                cartaSoldado.atacar(cartaBestia)
            } while (cartaBestia.vida > 0 && cartaEsbirro.vida > 0)
        }
        if(ataque === "defiende"){
            do{
                cartaSoldado.defenderse(cartaDragon)
                if(cartaSoldado.vida <= 0){
                    break
                }
                cartaSoldado.defenderse(cartaDragon)
            } while (cartaDragon.vida > 0 && cartaSoldado.vida > 0)
        }
    }
    if(ataque === 2){
        let defensa = Number(prompt("Bien has elegido a el Dragon de ojos Azules, ahora defensa. 3- Gusano Blindado, 4-Smorkl Escudero"))
        if (defensa === 3){
            alert("Bien ya tienes tu mazo, has elegido a el Dragon de ojos Azules y a Gusano Blindado")
            alert("Bien es tu turno, que vas a realizar? Vas a atacar o defenderte?")
        let ataque = prompt("ATACA - DEFIENDE").toLowerCase()
        if(ataque === "ataca"){
            do{
                cartaDragon.atacar(cartaEsbirro)
                if(cartaEsbirro.vida <= 0){
                    break
                }
                cartaEsbirro.atacar(cartaDragon)
            } while (cartaDragon.vida > 0 && cartaEsbirro.vida > 0)
        }
        if(ataque === "defiende"){
            do{
                cartaEsbirro.defenderse(cartaBestia)
                if(cartaBestia.vida <= 0){
                    break
                }
                cartaEsbirro.defenderse(cartaBestia)
            } while (cartaBestia.vida > 0 && cartaEsbirro.vida > 0)
        }
    }
        if (defensa === 4){
            alert("Ya tienes tu mazo completo, el Dragon de ojos Azules y a Smorlk Escudero, a pelear")
        }
    }
} 
else {
    alert("Y? que pasa no te dio? :(");
}

