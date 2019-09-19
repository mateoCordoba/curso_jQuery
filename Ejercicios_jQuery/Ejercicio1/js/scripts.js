addEvent(window,'load',inicializarEventos, false);
function inicializarEventos(){
    var boton1  = document.getElementById('boton1');
    addEvent(boton1,'click',presionBoton,false);
}

function presionBoton(){
    alert('se presionó el botón usando el DOM normal');
}

function addEvent(elemento,name_event,funcion,captura){
    if(elemento.attachEvent){
        elemento.attachEvent('on'+name_event,funcion);
        return true;
    }
    else if(elemento.addEventListener){
        elemento.addEventListener(name_event,funcion,captura);
        return true;

    }else{
        return false;
    }

}