let Digito1 = Number(prompt("De los tres, cual es el mayor?\nDigite el numero 1"));
let Digito2 = Number(prompt("Digite el numero 2"));
let Digito3 = Number(prompt("Digite el numero 3"));

if (Digito1 > Digito2 && Digito1 > Digito3){
    document.write("El numero mayor es: " ,Digito1);
} else if (Digito2 > Digito1 && Digito2 > Digito3) {
    document.write("El numero mayor es: " ,Digito2);
} else {
    document.write("El numero mayor es: " ,Digito3);
}