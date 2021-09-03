//BuscarSumaPar([3, 34, 4, 12, 5, 2], 9);

    let arr = [3, 34, 4, 12, 5, 2];
    const value = 9;

// se cre una funcion de flecha y se agregan dos parametros
const BuscarSumaPar= ((arr, value) => {
    // array vacio
    let result = [];
    // se rrecorre el array
    for(let i= 0; i< arr.length-1; i++) {
        if(arr[i] > value) {
            continue;
        }
        //evalua los datos del arreglo 
        if(arr.includes(value-arr[i])) {
            result.push(arr[i]);
            result.push(value-arr[i]);
            break;;
        }   
    }
      return result;// devuelve el valor 
    });
console.log("Retorna los Digitos del array que suma el 9")

    console.log(BuscarSumaPar(arr, value));

    
let container = document.querySelector('#dmoBuscarNumeroArray').innerHTML= ('[ '+ BuscarSumaPar(arr, value)+'] ');
