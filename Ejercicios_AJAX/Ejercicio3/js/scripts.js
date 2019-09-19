$(document).ready(function(){
    $('#boton1').click(function(){
        var v = $('#dni').val();
        console.log(v);
        $.getJSON('pagina1.php',{dni:v},function(datos){
            console.log("Ejecutando JSON...");
            $('#resultados').html('<h3>Nombre:',datos.nombre,'</h3>',' <h3>Apellido:',datos.apellido,'</h3>',' <h3>Direción:',datos.direccion,'</h3>' );
        });  
        return false

    });

})
