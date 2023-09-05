console.log("vinculado");

//capturando cosas

const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const btnProductos = document.querySelectorAll(".card .btn");
console.log(btnProductos);

//creando el fragment para evitar el reflow
const fragment = document.createDocumentFragment();

//objeto carrito
objetoCarrito = {};



//funcion agregar productos al carrito

const agregarCarrito = (evento) =>{
    // console.log(evento);
    console.log(evento.target.dataset.fruta); //mostrando en contenido de cada boton
    const objetoEvento = { //creando objeto para ir guardando en objeto carrito
        nombre: evento.target.dataset.fruta,
        id: evento.target.id,
        cantidad: 1
    };

    if (objetoCarrito.hasOwnProperty(objetoEvento.nombre)){
        objetoEvento.cantidad = objetoCarrito[objetoEvento.nombre].cantidad + 1; //
    };

    objetoCarrito[objetoEvento.nombre] = objetoEvento;

    // console.log(objetoEvento);
    // console.log(objetoCarrito);
    

    pintarCarrito();

};

// evento click boton agregar

btnProductos.forEach(btn =>{
    // console.log(btn);
    btn.addEventListener("click",agregarCarrito);//agregando evento a cada boton
});

//pintar carrito

const pintarCarrito = () =>{
    
    carrito.textContent = null; //vacio para que no se repita todos los elementos agregados antes

    Object.values(objetoCarrito).forEach(item => {  //con object.values paso los objetos a un array??

        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.nombre;
        clone.querySelector(".badge").textContent = item.cantidad;

        fragment.appendChild(clone);

    });

    carrito.appendChild(fragment);
};




