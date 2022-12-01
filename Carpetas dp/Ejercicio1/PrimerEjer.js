let Digito = Number(prompt(" Opcion 1 = suma\n Opcion 2 = resta\n Opcion 3 = Multiplicacion\n Opcion 4 = division\n Elige un numero del menu"));
let operador = Number(prompt("Ingrese un numero"));
let	operando = Number(prompt("Ingrese otro numero"));

if (Digito == 1) {
    let suma = operador+operando;
    document.write("La suma de ",operador," + ",operando," es igual a: ",suma);
}
if (Digito == 2) {
    let resta = operador-operando;
    document.write("La resta de ",operador," - ",operando," es igual a: ",resta);
}
if (Digito == 3) {
    let multiplicacion = operador*operando;
    document.write("La multiplicación de ",operador," * ",operando," es igual a: ",multiplicacion);
}
if (Digito == 4) {
    let division = operador/operando;
    document.write("La division de ",operador," / ",operando," es igual a: ",division);
}