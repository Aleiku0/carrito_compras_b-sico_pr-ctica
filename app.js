// console.log("vinculado");

// //capturando cosas

// const carrito = document.getElementById("carrito");
// const template = document.getElementById("template");
// const btnProductos = document.querySelectorAll(".card .btn");
// console.log(btnProductos);

// //creando el fragment para evitar el reflow
// const fragment = document.createDocumentFragment();

// //objeto carrito
// objetoCarrito = {};



// //funcion agregar productos al carrito

// const agregarCarrito = (evento) =>{
//     // console.log(evento);
//     console.log(evento.target.dataset.fruta); //mostrando en contenido de cada boton
//     const objetoEvento = { //creando objeto para ir guardando en objeto carrito
//         nombre: evento.target.dataset.fruta,
//         id: evento.target.id,
//         cantidad: 1
//     };

//     if (objetoCarrito.hasOwnProperty(objetoEvento.nombre)){
//         objetoEvento.cantidad = objetoCarrito[objetoEvento.nombre].cantidad + 1; //
//     };

//     objetoCarrito[objetoEvento.nombre] = objetoEvento;

//     // console.log(objetoEvento);
//     // console.log(objetoCarrito);


//     pintarCarrito();

// };

// // evento click boton agregar

// btnProductos.forEach(btn =>{
//     // console.log(btn);
//     btn.addEventListener("click",agregarCarrito);//agregando evento a cada boton
// });

// //pintar carrito

// const pintarCarrito = () =>{

//     carrito.textContent = null; //vacio para que no se repita todos los elementos agregados antes

//     Object.values(objetoCarrito).forEach(item => {  //con object.values paso los objetos a un array??

//         const clone = template.content.firstElementChild.cloneNode(true);
//         clone.querySelector(".lead").textContent = item.nombre;
//         clone.querySelector(".badge").textContent = item.cantidad;

//         fragment.appendChild(clone);

//     });

//     carrito.appendChild(fragment);
// };


/*_____________________________________________________________________________________
Array programacion funcional 
---------------------------------------------------------------------------------------*/

//map 

const frutas = ["🍎", "🍑", "🥝"];
const nuevoArrayFrutas = frutas.map((fruta) => {
    // console.log(fruta);
    return fruta; //siempre hay que retornar algo con el map
});

console.log(nuevoArrayFrutas);

//filter

const usuarios = [

    {
        nombre: "Cappu",
        edad: 12,
        id: 1
    },
    {
        nombre: "Elsa",
        edad: 8,
        id: 2
    }, {
        nombre: "Gigi",
        edad: 5,
        id: 3
    }

]

const arrayUsuarios = usuarios.filter(usuario => usuario.edad !== 8);

console.log(arrayUsuarios);


//find ,some y findIndex

const arrayUsuariosFind = usuarios.find(usuario => usuario.id === 2);
console.log(arrayUsuariosFind);
const{edad} = usuarios.find(usuario => usuario.id === 2);
console.log(edad);

const arrayUsuariosSome = usuarios.some(usuario => usuario.id === 2);
console.log(arrayUsuariosSome);

const indice = usuarios.findIndex(usuario => usuario.id === 3); // deberia ser index 2 ya que el esta en esa posicion en el array
console.log(indice);


//slice, concat y spread

//slice copia una parte de un array y lo pega en otro array.

const arrayCocktails = ["Martini","Negroni","Manhattan","Mojito"];
//                        0       [1             2]        3

const arrayCoffees = ["Cappuccino","Espresso","Latte","Macchiato"];

const nuevoArrayCocktails = arrayCocktails.slice(1,3); // para copiar solo negroni y manhattan *(inicio incluido , final no incluido)
console.log(nuevoArrayCocktails); 


const nuevoArrayConcat = arrayCocktails.concat(arrayCoffees);
console.log(nuevoArrayConcat);

const arrayJunto = [...arrayCocktails, ...arrayCoffees]; // spread syntax
console.log(arrayJunto);


//reduce

const numeros = [1,2,3,4,5,6,7,];

const sumarTodos = numeros.reduce((acc,valorActual) => {
    return acc + valorActual;  
});

console.log(sumarTodos);

const numerosMatriz = [[1,2],[3,4],[5,6]];
const numerosEnUnSoloArray = numerosMatriz.reduce((acc,valorActual) => {
    return acc.concat(valorActual)});

console.log(numerosEnUnSoloArray);


//split y join

const cadenaMeses = "ene,feb,mar,abr,may,jun,jul,ago,sep,oct,nov,dic";

const arrayMeses = cadenaMeses.split(",");
console.log(arrayMeses);

const textoMeses = arrayMeses.join(","); //indica separador que quiero que tenga
console.log(textoMeses);







