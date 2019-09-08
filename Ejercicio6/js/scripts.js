
$(document).ready(function(){
    $('p').click(function(){
        $(this).hide('slow');
    });
    
    $('#boton2').click(function(){
        $('p').show('5000',function(){
            $('p').css({
                'background-color':'blue'
            });
        });
    });

});