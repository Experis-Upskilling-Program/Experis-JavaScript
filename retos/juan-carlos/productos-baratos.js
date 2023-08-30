// Productos Baratos
// Escribe una función llamada productosBaratos que reciba un arreglo de objetos (que representan productos) y retorne un nuevo arreglo con los nombres de los productos cuyo precio esté entre 5 y 10:

//     let prods = [
//         { nombre: "Arroz", precio: 5 },
//         { nombre: "Pan", precio: 3 },
//         { nombre: "Tomate", precio: 8 },
//         { nombre: "Leche", precio: 15 }
//     ];
// Nota: No olvide usar console.log() para mostrar los resultados retornados por la función productosB
// Entrada:    productosBaratos( prods );
// Salida:     [ "Arroz", "Tomate" ]

let prods = [
    { nombre: "Arroz", precio: 5 },
    { nombre: "Pan", precio: 3 },
    { nombre: "Tomate", precio: 8 },
    { nombre: "Leche", precio: 15 }
];


// Version 1
const productosBaratos = ( listaProductos ) => 
    listaProductos
        .filter( producto => producto.precio >= 5 && producto.precio <= 10 )
        .map( producto => producto.nombre );

// console.log( productosBaratos( prods ) );

// Version 2
const productosBaratos2 = ( listaProductos ) => {
    let nuevaListaBaratos = [];                       // Obtenemos primer numero de la lista

    for ( let i = 0; i < listaProductos.length; i++ )
        if( listaProductos[ i ].precio >= 5 && listaProductos[ i ].precio <= 10 )
            nuevaListaBaratos = [ ...nuevaListaBaratos, listaProductos[ i ].nombre ];

    return nuevaListaBaratos;
}

// console.log( productosBaratos2( prods ) );

// Version 3
const productosBaratos3 = ( listaProductos ) => {
    let nuevaListaBaratos = [];                       // Obtenemos primer numero de la lista

    for( let [ key, { precio, nombre } ] of Object.entries( listaProductos ) ) {
        
        if( precio >= 5 && precio <= 10 ) {
            nuevaListaBaratos = [ ...nuevaListaBaratos, nombre ];
        }

    }

    return nuevaListaBaratos;
}

console.log( productosBaratos3( prods ) );