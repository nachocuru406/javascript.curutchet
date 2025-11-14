let miNombre = "Ignacio"
let minombretostring=JSON.stringify(miNombre)
localStorage.setItem("userName", minombretostring);
console.log(localStorage)
let recuperoStorage = localStorage.getItem("userName");
console.log(recuperoStorage)
let borroTodo = localStorage.clear();


let peliculasFavoritas = ["Toy Story", "Avengers", "Rocky"]
let peliString = JSON.stringify(peliculasFavoritas[2])
localStorage.setItem("peliculaFavorita", peliString);
console.log(localStorage)
recupStorage = localStorage.getItem("peliculaFavorita");
console.log(recupStorage)
localStorage.clear();


let pelisFavoritas = ["Toy Story", "Avengers", "Rocky"]
let peliculasJSON = JSON.stringify(pelisFavoritas);
localStorage.setItem("favoritos", peliculasJSON);
console.log(localStorage);
let recuStorage = localStorage.getItem("favoritos");
let pelisRecuperadas = JSON.parse(recuStorage);
let nuevapeli = pelisRecuperadas.push("Viernes 13")
let recJSON = JSON.stringify(pelisRecuperadas);
localStorage.setItem("favoritos", recJSON)
console.log(localStorage);


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
];
let winterIsComing = []
for (let i=0; i<got.length; i++){
    if (got[i].ciudad === "Winterfell"){
        winterIsComing.push(got[i])
    }
}   
let winterJSON = JSON.stringify(winterIsComing);
localStorage.setItem("Winterfell", winterJSON);
console.log(localStorage)