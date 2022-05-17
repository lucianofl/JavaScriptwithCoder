//Clase constructora de los PJ's
class Personaje{
    constructor (nombre, esp, ataque, vida, debilidad){
        this.nombre = nombre
        this.especialidad = esp
        this.ataque = ataque
        this.vida = vida
        this.debilidad = debilidad
    }
}
//Creando los PJ's
const yoda = new Personaje("Yodita","Transforma la defensa en ataque","1000","3500","Como va a tener debilidad yodita, sos boludo?")


//Lista de puntajes y ranking...

//----
let User = [];
//----

//Boton con evento click, para agregar usuario
document.querySelector("#btnSaveUser").addEventListener("click", saveUser);
drawRankingTable();

//Funcion que guarda al usuario
function saveUser(){
    let id = d.querySelector('#txtUser').value,
    edad = d.querySelector('#txtAge').value;

    addUserToSystem(id,edad);
    drawRankingTable();
}

//Funcion que agrega el nombre y usuario al array
function addUserToSystem(nombre, edad){
    let newUser = {
        nombre : nombre,
        edad : edad
    };
    console.log(newUser)
    User.push(newUser);
    localStorageUser(User);
}

//Funcion LocalStorage, almacena en la tabla, el user, la edad y los puntos obtenidos
function getTableRanking(){
    let storedUser = localStorage.getItem('localUser');
    if(storedUser == null){
        User = [];
    }
    else{
        User = JSON.parse(storedUser);
    }
    return User;
}
function localStorageUser(plist){
    localStorage.setItem('localUser', JSON.stringify(plist));
}

//Funcion que dibuja la tabla.
function drawRankingTable(){
    let list = getTableRanking(),
    tbody = document.querySelector('#userTable tbody');
    
    tbody.innerHTML = '';

  for(let i = 0; i < list.length; i++){
      let row = tbody.insertRow(i),
      nombreCell = row.insertCell(0),
      edadCell = row.insertCell (1);


      nombreCell.innerHTML = list[i].nombre;
      edadCell.innerHTML = list[i].edad;

      let inputSelect = document.createElement('input');
      inputSelect.type='radio';
      inputSelect.value= list[i].nombre;

    tbody.appendChild(row);
  }
}

//Variables
let personajes = [yoda]
const d = document
d.addEventListener("keydown", (e)=>{
moveYoda(e, ".yoda",".stage",".statsYoda","ricky");
});
const velocidad = 30;
let left = 0;
let yourHealth = 100;
let compHealth = 100;

var yodaMove;
var enemyMove;
let savedEnemyMove;
let resultado;
let mostraText = d.getElementById('announcements');
let yodaHealthBar = d.getElementById('yodaHealthBar');
let enemyHealthBar = d.getElementById('enemyHealthBar');
let attackButton = d.getElementById('attack');
let counterButton = d.getElementById('counter');
let playAgain = d.getElementById('playAgain');

//Habilitar botones

function enableButtons() {
	attackButton.disabled = false;
	counterButton.disabled = false;
}
// Funcion para empezar la pelea
function fight(id) {
	enemyMove(id);
	healthChange();
	gameOver();
}
// Dada la eleccion del jugador, devuelve la eleccion del enemigo
function enemyMove(id) {
	var move = Math.floor((Math.random()*4)+1);
	if (move <= 3) {
		savedEnemyMove =  'attack';
	} else {
		savedEnemyMove = 'counter';
	};
	damageStep(id, savedEnemyMove);
	roundResult(resultado);

}
//Funcion con condicionales... Si es un numero x... devuelve el resultado.
function counter(Def, Atk) {
	var move = Math.floor((Math.random()*5));
	if (move >= 3 && Def === 'attack') {
		resultado = 'El enemigo contrarresto tu ataque, recibes 10 de daño';
		yourHealth -= 10;
	} else if (move >= 3 && Def === 'counter') {
		resultado = 'Tu defensa fue exitosa, tu enemigo recibe 10 de daño';
		compHealth -= 10;
	} else if (move < 3 && Def === 'attack') {
		resultado = 'El enemigo se defendio y fallo, recibe 15 de daño';
		compHealth -= 15;
	} else if (move < 3 && Def === 'counter') {
		resultado = 'Evadiste y no fue eficaz, recibes 15 de daño';
		yourHealth -= 15;
	}

}
//
function damageStep(Atk, Def) {
	if ( Atk === 'attack' && Def === 'attack') {
		resultado = 'Ambos reciben daño';
		if (compHealth >= 10 && yourHealth >= 10) {
			compHealth -= 10;
			yourHealth -= 10;
		} else {
			compHealth = 0;
			yourHealth = 0;
		}
	} else if ( Atk === 'counter' && Def === 'counter') {
		resultado = 'La defensa no fue exitosa';
	} else if ( Atk === 'attack' && Def === 'counter') {
		resultado = 'El enemigo se prepara para defender, cuidado!';
		counter(Atk, Def);
	} else if ( Atk === 'counter' && Def === 'attack') {
		resultado = 'Elegiste defenderte, tienes ojos en la espalda';
		counter(Atk, Def);
	}
}
// Muestra el resultado del ataque
function roundResult(resultado) {
	mostraText.innerHTML += resultado + "<br>";
}
// Funcion para cambiar la barra de vida
function healthChange() {
	yodaHealthBar.style.width = yourHealth + "%";
	enemyHealthBar.style.width = compHealth + "%";
}
//Funcion fin del juego
function gameOver() {
	if (yourHealth === 0 || compHealth === 0) {
		resultado = 'Fin del juego';
		roundResult(resultado);
		attackButton.disabled = true;
		counterButton.disabled = true;
		playAgain.disabled = true;
	}
}


window.onload=enableButtons();


// Funciones de movimientos del juego------------------------------------------------------------------------
function moveYoda(e,yoda,fondo,statsYoda, ricky){
    const $yoda = d.querySelector(yoda),
    $fondo = d.querySelector(fondo)
    ricky = d.querySelector(ricky)
    statsYoda = d.querySelector(statsYoda);
    limitesPj = $yoda.getBoundingClientRect(),
    limitesFondo = $fondo.getBoundingClientRect();


//37= Izquierda. 38=Arriba. 39=Derecha. 40=Abajo. No uso arriba y abajo pero igualmente lo dejo para el futuro.

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
        statsYoda.style.marginLeft = `${left}px`;
        if(limitesPj.left < limitesFondo.left){
            alert("Por ahi no es, hacia la derecha...")
        }
        
    }
    function moveRight(){
        left += velocidad;
        $yoda.style.marginLeft = `${left}px`;
        statsYoda.style.marginLeft = `${left}px`;
        if(limitesPj.right > limitesFondo.right){
            alert("Tenes que matarlos, no besarlos :S")
        }
    }
}
function yodaclick(){
    let yodaimg = d.getElementsByClassName("yoda");
    yodaimg.innerHTML = alert("En la consola te mostrara las caracteristicas de yodita")
    console.table(personajes);
}
// Funciones de movimientos del juego------------------------------------------------------------------------

// Funcion de score.
score = 0;
d.getElementsByName('score').innerHTML = score;

function points(){
    
}