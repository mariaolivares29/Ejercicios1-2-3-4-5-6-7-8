let Digito1 = Number(prompt("Cual numeros son positivos?\nIngrese el numero 1"));
let Digito2 = Number(prompt("Ingrese el numero 2"));

if (Digito1 >= 0 && Digito2 >= 0) {
  document.write("Ambos digitos son positivos");
}
if (Digito1 < 0 && Digito2 < 0) {
    document.write("Ambos digitos son negativos");
}
if (Digito1 >= 0 && Digito2 < 0) {
    document.write("Solo el #1 (", Num1, ") es positivo");
}
if (Digito1 < 0 && Digito2 >= 0) {
    document.write("Solo el #2 (", Num2, ") es positivo");
}