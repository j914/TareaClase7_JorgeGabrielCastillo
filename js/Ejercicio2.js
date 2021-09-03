//ejercicio 2
// obtiene el total de la categoria de precioproduct
const Categoria = [
  {
    Producto: "coca",
    PrecioProduct: 23,
  },

  {
    Producto: "fanta",
    PrecioProduct: 40,
  },

  {
    Producto: "te frio",
    PrecioProduct: 100,
  },
];
// se usa filtro
const sum = Categoria.filter((prodsum) => {
  return prodsum;
});
let categoria = sum.reduce((sum, value) => sum + value.PrecioProduct, 0);
//console.log('la suma de los productos es:',categoria)
var linew = document.createElement("hr");
let container = (document.querySelector("#dmoArray1Object").innerHTML = categoria);
console.log('Total:');
console.log(categoria);
