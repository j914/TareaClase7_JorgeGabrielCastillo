
//arreglos 
let array1 = [2, 4, 6];
let array2 = [-3, 2, -8, 12, 5];
let array3 = [1, 2, 3, 4, 5];
//arreglo vacio y recorremos el arreglo ingresa los datos
let result1 = [];
for (let index = 0; index < array1.length; index ++){
    const item = array1[index];
    if (item > 0){
        result1.push(item);
    }
}
// se mapea
let arrays1 = result1.map(arrr =>{
    // returna el array que cumple con la condicion y lo eleva al cuadrado
    return Math.pow(arrr, 2);
})
var linew= document.createElement("hr");
let container = document.querySelector('#dmoArray1').innerHTML= ('['+arrays1+']');
console.log('Datos de salida:');
console.log (arrays1);


// obtiene los valores del segundo array
let result2 = [];
for (let index = 0; index < array2.length; index ++){
    const item = array2[index];
    if (item > 0){
        result2.push(item);
    }
}
// se mapea
let arrays2 = result2.map(arr2 =>{
    // returna el array que cumple con la condicion y lo eleva al cuadrado
    return Math.pow(arr2, 2);
})
var linew= document.createElement("hr");
let container2 = document.querySelector('#dmoArray2').innerHTML= ('['+arrays2+']');
console.log('Datos de salida:');
console.log (arrays2);



// obtiene los valores del tercer  array
let result3 = [];
for (let index = 0; index < array3.length; index ++){
    const item = array3[index];
    if (item > 0){
        result3.push(item);
    }
}
// se mapea
let arrays3 = result2.map(arr3 =>{
    // returna el array que cumple con la condicion y lo eleva al cuadrado
    return Math.pow(arr3, 2);
})
var linew= document.createElement("hr");
let container3 = document.querySelector('#dmoArray3').innerHTML= ('['+arrays3+']');
console.log('Datos de salida:');
console.log (arrays3);




