
var respuesta =confirm(" Esta es mi tienda")
let productos =[];
var estado = true;
while(estado){
    let articulos = prompt("Pongo algo en el carrito:");
    if(articulos.lenght >=1){
        productos.push(articulos);
        let agregar = prompt("Si pondras mas articulos escribe si:");
        if(agregar == "SI"|| agregar == "sI"|| agregar == "Si"){     
        }else{
            var estado = false
        }
        }else{
            var estado = false
            var respuesta = confirm("Agrega por lo menos un caracter");
    }
    }
    console.log("Productos")
    for (var i =0 ; i < productos.lenght; i++){
        console.log(productos[i]);
}


