var x = $(document);
x.ready(inicializarEventos);

function inicializarEventos(){
    var x = $('#boton1');
    x.click(presionBoton)
}

function presionBoton(){
    alert('se presionó el boton usando jQuery')
}