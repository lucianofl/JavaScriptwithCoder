let numero = parseInt(prompt("Ingrese un numero del 1 al 60 para saber cual es par"));

while (numero <= 60){
    if (numero % 2 == 0){
        console.log(`${numero} - Este numero es par`);
        numero++;
        continue;
    }
    if(numero == 60) break;
    console.log(numero);
    numero++;
}alert("Ingresa un numero entre 1 y 60")
