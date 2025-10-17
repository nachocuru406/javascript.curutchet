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


let misDatos={
    nombre:"Matias",
    apellido:"Scrush",
    edad:18,
    dni: 47963330,
    comidasFavoritas:["Milanesa", "Fideos", "Hamburguesa"],
    saludar:function(){
        return "Hola mi nombre es "+ this.nombre + this.apellido + " y tengo " + this.edad + " años. Mi primer comida favorita es " + this.comidasFavoritas[0]
    }
}
console.log(misDatos.saludar())


let auto={
    marca: "Audi",
    modelo: "A5",
    anio: 2018,
    color: "Negro",
    posicion: 0,
    avanzar:function(n){
        return this.posicion = this.posicion + n
    },
    retroceder:function(n){
        return this.posicion = this.posicion - n
    }
}
auto.avanzar(10)
console.log(auto.posicion)


let nuevoAuto={
    marca: "Audi",
    modelo: "A5",
    anio: 2018,
    color: "Negro",
    posicion: 0,
    moverse:function(n){
        return this.posicion = this.posicion + n
    }
}
nuevoAuto.moverse(10)
console.log(auto.posicion)


let ironMan={
    nombre:"Iron Man",
    equipo:"Avengers",
    poderes:["Volar", "Lanzar Misiles", "Disparar Laser"],
    energia:100,
    getPoder:function(n){
        this.energia=this.energia - 10
        return "Poder elegido de " + this.nombre + ": " + this.poderes[n] + " Energia Restante: " + this.energia
    }
}
console.log(ironMan.getPoder(0))


let hulk={
    nombre:"Hulk",
    equipo:"Avengers",
    poderes:["Aplastar", "Gritar", "Golpear"],
    energia:100,
    getPoder:function(n){
        this.energia=this.energia - 10
        return "Poder elegido de " + this.nombre + ": " + this.poderes[n] + " Energia Restante: " + this.energia
    }
}
console.log(hulk.getPoder(2))

console.log(ironMan.getPoder(2))
console.log(hulk.getPoder(1))
console.log(ironMan.getPoder(0))
console.log(hulk.getPoder(2))
console.log(ironMan.getPoder(2))
console.log(hulk.getPoder(0))
console.log(ironMan.getPoder(1))
console.log(hulk.getPoder(2))
console.log(ironMan.getPoder(0))
console.log(hulk.getPoder(0))
console.log(ironMan.getPoder(1))
console.log(hulk.getPoder(2))
console.log(ironMan.getPoder(1))
console.log(hulk.getPoder(1))
console.log(ironMan.getPoder(0))
console.log(hulk.getPoder(0))
console.log(ironMan.getPoder(2))
console.log(hulk.getPoder(2))


for (let i=0;i<5;i++){
    console.log("Practicando con el bucle for " + i)
}
for (let i=0;i<10;i++){
    console.log("La variable i tiene como valor " + i)
}


let ganancias=[3213, -4829, 756, 8970, -3051, -8705, 1601, 2630, 5875,  -7301, 3041, 686]
let suma = 0;
for (let i=0; i<ganancias.length; i++){
    suma = ganancias[i] + suma
    console.log(suma)
}




let healingIsDifficult = [ 'Fear', 'Drink to Get Drunk', 'Taken for Granted', 'Blow It All Away', 'Get Me', 'Im Not Important to You', 'Sober and Unkissed', 'Healing Is Difficult', 'Judge Me', 'Little Man', 'Insidiously']
for (let i=0; i<healingIsDifficult.length; i++){
    console.log(healingIsDifficult[i])
}



let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
        
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]
for (let i=0; i<got.length; i++){
    console.log("Soy "+ got[i].nombre + " "+ got[i].apellido+ " de la ciudad "+ got[i].ciudad)
}
