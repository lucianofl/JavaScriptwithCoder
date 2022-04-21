let numero = parseInt(prompt("Ingrese un numero del 1 al 50 para saber cual es par"));

while (numero <= 50){
    if (numero % 2 == 0){
        console.log(`${numero} - Este numero es par`);
        numero++;
        continue;
    }
    if(numero == 50) break;
    console.log(numero);
    numero++;
}alert("Ingresa un numero entre 0 y 50")
..