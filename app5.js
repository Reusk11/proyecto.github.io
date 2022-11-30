let nombre = prompt("Dame tu nombre");
console.log("Tu nombre es: " + nombre);

let num1 = parseInt(prompt("Dame un número"));
let num2 = parseInt(prompt("Dame el segundo numero"));
let res = num1 + num2;
console.log(res);

let num3 = parseInt(prompt("Dame un numero de 1 a 10"));
if (num3 > 1 && num3 > 10) {
    console.log("número fuera de rango");

} else {
    console.log("Tu numero es: " + num3);
}

let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(numeroMaquina);

let numeroUser = parseInt(prompt("adivina el numero de 1 a 10"));
if (numeroMaquina === numeroUser) {
    console.log("Acertaste")
}else{
    console.log("Fallaste :'( , el numero era: "+ numeroMaquina)
}

