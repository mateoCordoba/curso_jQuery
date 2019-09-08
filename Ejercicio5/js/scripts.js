$(document).ready(function(){
    $('#crear').click(function(){
        $('#form').html('<form><input type="text" placeholder="usuario"><br><br><input type="password" placeholder="password"><br><br><input type="submit"></form>');

    });
    $('#crear').dblclick(function(){
        $('#form').show();
    });

    $('#borrar').click(function(){
        $('#form').hide();
        $('#crear').text('doble clic para mostrar de nuevo');

    })
});
