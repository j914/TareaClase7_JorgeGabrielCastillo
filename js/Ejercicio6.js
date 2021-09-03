//1 usando forEach
    let toda_la_banda = [" Diana ", " Monica ", " Maria ", " Breny "];
    let text = "";
    // forEach
    toda_la_banda.forEach(myFunction);
    //demo para el html
    document.getElementById("demo").innerHTML = text;
     //funcion para importar la info
    function myFunction(item, index) {
      text += index+":"  + item + "<br>"; 
    }
    console.log('Desplegando el array con forEach');
    console.log(text);

var copybanda = toda_la_banda;
var remplace = toda_la_banda.slice(1,1);
console.log(remplace)

//3. copia del array removiendo a breny
copybanda.pop();
console.log("Se Removio Breny",copybanda);

var container = document.querySelector('#dmoRemoving').innerHTML=('[ '+copybanda+' ]');

//4. agregar un nuevo objeto al indice 0 
var copybandaAgg = copybanda;
copybandaAgg.unshift('Jose');
console.log('Agregando a Jose al Objeto',copybandaAgg);

var conteiners = document.querySelector('#dmoAggObject').innerHTML = ('[ '+copybandaAgg+' ]');

// 5. agregue mi nombre en un nuevo array copiando el array toda la banda
var arraySegundo = [];

// Recorrer los elementos del arreglo "arrayPrimero"
// para agregarlos al arreglo "arraySegundo".
for (var i = 0; i < copybanda.length; i++) {
   arraySegundo.push(copybanda[i]);
}

arraySegundo.push('Jorge Gabriel Castillo');
// Imprimir los resultados en la consola.
var conteiners = document.querySelector('#dmoAggObjectName').innerHTML = ('[ '+arraySegundo+' ]');

console.log('Se creo el nuevo array con mi nombre:',arraySegundo);

var conteiners = document.querySelector('#dmoAggObjectItem').innerHTML = ('[ '+arraySegundo [1]+' ]');
//6.  obtengo el item de diana
console.log('Obteniendo el item de Diana');
console.log(arraySegundo[1])

//7. copia del arreglo origginal utilizando slice
const arrayReplica = toda_la_banda = ["Diana", "Monica", "Maria", "Breny"];
console.log('array original es', arrayReplica)
// con el slice removi a diana y breny
var eliminarBanda = arrayReplica.slice(1,3)
console.log("copia del arreglo origginal utilizando slice:",eliminarBanda);// monica, maria 
var conteiners = document.querySelector('#dmoAggObjetExcluya').innerHTML = ('[ '+eliminarBanda+' ]');
//8. devolver indice de monica

const index = arrayReplica.findIndex( indice => indice === "Monica");
console.log('Devolver indice de monica');
console.log(index);
console.log(arrayReplica[index]);
var conteiners = document.querySelector('#dmoAggObjetIndice').innerHTML = ('[ '+arrayReplica[index]+' ]');




