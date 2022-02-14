var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log('Auto ${this.modelo} ${this.annio}' )
    }
}

console.log(miAuto.marca);


function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;

}
var auto1 = new auto("Tesla", "Model 3", 2020);