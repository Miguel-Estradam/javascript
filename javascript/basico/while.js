var estudiantes = ["Miguel","Manuela","Alejandro","Fernanda"];

function saludar(estudiantes){
    console.log('Hola, ${estudiantes}');
}
while (estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludar(estudiante);
}