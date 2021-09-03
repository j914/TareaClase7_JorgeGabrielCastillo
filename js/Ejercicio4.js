
//ejercicio 4
let values = [10, 20, 30, 20, 30, 40, 60];
let count = values.length;
values = values.reduce((previous, current) => current += previous);
values /= count;

console.log('[10, 20, 30, 20, 30, 40, 60]');
console.log('el promedio del array arreglo es:',values);

let container = document.querySelector('#dmoPromedioArray').innerHTML= (values);
console.log(values);