
$(document).ready(function(){
  $("#enviar").click(presionSubmit);
});

function presionSubmit(){
  var v=$("#nro").attr("value");
  $.get("pagina1.php",{numero:v},llegadaDatos); 
  return false;
}

function llegadaDatos(datos/*contiene la pagina en viada como primer parámetro en la función $.get()*/ ){
  alert(datos);
}