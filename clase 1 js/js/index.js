function rectangulo(altura,ancho){
    return altura*ancho
}
let resultado=rectangulo(5,7)
console.log(resultado)


function triangulo(base,altura){
    return (base*altura)/2
}
let area=triangulo(6,5)
console.log(area)


function dolarHoy(preciopesos){
    return preciopesos/1400
}
let dolares=dolarHoy(100000)
console.log(dolares)


function precioFinal(precio){
    return precio*1.21
}
let final=precioFinal(200)
console.log(final)


function mitad(num1){
    return num1/2
}
let division=mitad(4)
console.log(division)


function sumar (num1, num2){
    return num1 + num2
}
function multiplicar (num1, num2){
    return num1 * num2
}
function restar (num1, num2){
    return num1 - num2
}
function dividir (num1, num2){
    return num1 / num2
}
function calculadora (num1, num2, calculo) {
    return calculo(num1,num2)
}
console.log(calculadora(2,4,sumar));
console.log(calculadora(4,6,multiplicar));
console.log(calculadora(6,8,restar));
console.log(calculadora(8,10,dividir));