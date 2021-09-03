// ejercicio 3

function InitMayusculas(palabra) {
    
    // espreciones regulares
let patron = /\w\S*/g;
return  palabra.replace(patron, (p) => p.charAt(0).toUpperCase() + p.substring(1).toLowerCase());
}
console.log('Datos de entrada: quezadillas de jutiapa');
console.log(InitMayusculas('quezadillas de jutiapa'));



let coteiner = document.querySelector('#dmoInitMayus').innerHTML= (InitMayusculas('quezadillas jutiapa'));

