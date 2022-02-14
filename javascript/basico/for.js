var estudiantes = ["Miguel","Manuela","Alejandro","Fernanda"];

function saludar(estudiantes){
    console.log('Hola, ${estudiantes}');
}

for (var i= 0; i<estudiantes.length; i++){
    saludar(estudiantes[i]);
}

for( var estudiante of estudiantes){
    saludar(estudiantes[i]);
}