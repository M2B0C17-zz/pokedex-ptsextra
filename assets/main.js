$(document).ready(function(){

    $.ajax({
      url: 'http://pokeapi.co/api/v2/pokemon',
      type: 'GET',
      dataType: 'json',
      data: {'limit': '15'},
    })
    .done(function(respuesta) {
      respuesta.results.forEach(function(el){
      document.write(el.name + "<br>");
    })
    .done(function(respuesta) {
      respuesta.results.forEach(function(el){
      document.write("<br>" + el.short_effect);
    })
      llamarHabilidades(el.url)
    })
    .done(function(){
      document.write("Este es el mensaje de despues de la llamada ajax" + "<br>") 
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    }); 

  // Imprimir pokemon + habilidad
    $.ajax({
    url: 'http://pokeapi.co/api/v2/ability',
    type: 'GET',
    dataType: 'json',
    data: {'limit': '15'},
  })

})


//Imprimir pokemon + habilidad 10ptos
//Imprimir pokemon + todas las habilidades 15puntos
//Imprimir pokemon habilidades y cualquier otra cosas del pokemon +20ptos
//No hacerlo con document.write 30pts
//Hacerlo con jquery 35ptos
//Agregar CSS 45ptos