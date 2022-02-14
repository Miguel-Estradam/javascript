var articulos = [
    { nombre:"Bici", costo: 3000},
    { nombre:"Tv", costo: 2500},
    { nombre:"Celular", costo: 10000},
    { nombre:"Laptop", costo: 20000},
    { nombre:"Teclado", costo: 500},
    { nombre:"Audifonos", costo: 1700},
    
];

// filter para filtrar
var articulosFiltrados = articulos.filter(function(articulos){
    return articulos.costo <=500;
});
// map para hacer un mapeo de lo buscado
var nombreArticulos = articulos.map(function(articulos){
    return articulos.nombre;
});

//find para encontrar algo
var encontrarArticulos = articulos.find(function(articulos){
    return articulos.nombre === "Laptop";
});
//.forEach filtrar completo
articulos.forEach(function(articulos){
    console.log(articulos.nombre);
});
//.some 
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <=700;
});