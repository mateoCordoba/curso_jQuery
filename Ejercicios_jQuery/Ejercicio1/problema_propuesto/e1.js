$(document).ready(function(){
    $("#p1").click(function(){
        $("#p2").css({
            'color': 'blue'
        });
    });
});

/* para cambiar lo estilos por jquery debemos hacerlo de la siguiente manera
 $('#p2').css({
        'color': 'blue'
    });
 Separando por comas los diferentes estilos
 y tanto el estilo como atributo como su valor deben ir entre comillas 
*/ 