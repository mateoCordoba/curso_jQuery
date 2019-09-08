$(document).ready(function(){
    $('h2').addClass("titulo");
 
    $('#lista1 li,#lista2 li').click(function(){
        $(this).hide();
    });

    $('h2').mousemove(function(){
        $('#lista1 li,#lista2 li').show();        
    });
 

    $('#boton1').click(function(){
        $('#lista1 li,#lista2 li').text("has dado click en el boton");
        $(this).attr("value","ahora doble click");
        $('table').removeAttr('border');
        $(this).css({
            'background':'black',
            'color':'yellow',
            'border-radius':'50px'
        });
        $('h2').toggle("slow");
    });
    $('#boton1').dblclick(function(){
        $('table').attr('border','1');
       
    });
});




