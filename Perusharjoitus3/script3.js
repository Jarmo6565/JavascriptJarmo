
/*

var a = "mörkömölli";
console.log(a.charAt(2));  // palauttaa r

*/

function tarkistaKirjain(
  {
    var annettuSana = document.getElementById('tsana').value;
    var vastaus = ei ole;
      for(var k = 0; k < annettuSana.length; k++)
      {
          vastaus = on;
      }
  }
      document.getElementById('vastaus').innerHTML= '<p>'+ vastaus + '</p>';
