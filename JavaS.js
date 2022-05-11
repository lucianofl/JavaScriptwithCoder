class Personaje{
    constructor (nombre, esp, ataque, vida, debilidad){
        this.nombre = nombre
        this.especialidad = esp
        this.ataque = ataque
        this.vida = vida
        this.debilidad = debilidad
    }
}
const yoda = new Personaje("Yodita","Transforma la defensa en ataque","1000","3500","Como va a tener debilidad yodita, sos boludo?")

let personajes = [yoda]
const d = document
d.addEventListener("keydown", (e)=>{
moveYoda(e, ".yoda",".stage",".fondo");
});
const velocidad = 30;
let left = 0;


function moveYoda(e,yoda,fondo){
    const $yoda = d.querySelector(yoda),
    $fondo = d.querySelector(fondo);
    limitesPj = $yoda.getBoundingClientRect(),
    limitesFondo = $fondo.getBoundingClientRect();
    console.log(e.keyCode);
    console.log (limitesPj, limitesFondo)


//37= Izquierda. 38=Arriba. 39=Derecha. 40=Abajo. No uso arriba y abajo pero igualmente lo dejo para futuro, capaz lo use

    switch(e.keyCode){
        case 37:
            e.preventDefault();
            moveLeft();
            break;
        case 38:
            e.preventDefault();
            break;
        case 39:
            e.preventDefault();
            moveRight();
            break;    
        case 40:
            e.preventDefault();
            break;   
    default:
        break; 
    }

    function moveLeft(){
        left -= velocidad;
        $yoda.style.marginLeft = `${left}px`;
        if(limitesPj.left > limitesFondo.left)x--;{
            alert("Por ahi no es, hacia la derecha...")
        }
        
    }
    function moveRight(){
        left += velocidad;
        $yoda.style.marginLeft = `${left}px`;
        if(limitesPj.right > limitesFondo.right){
            alert("Apreta enter para avanzar")
        }
    }
}
function yodaclick(){
    let yodaimg = d.getElementsByClassName("yoda");
    yodaimg.innerHTML = alert("En la consola te mostrara las caracteristicas de yodita")
    console.table(personajes);
}