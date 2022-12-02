var num1 = document.querySelector("#num1");
num1 = Number (num1.textContent);

var num2 = document.querySelector("#num2");
num2 = Number (num2.textContent);

var num3 = document.querySelector("#num3");
num3 = Number (num3.textContent);

var soma = document.querySelector("#soma");
var resultado = num1 + num2 + num3;

soma.textContent = resultado;
