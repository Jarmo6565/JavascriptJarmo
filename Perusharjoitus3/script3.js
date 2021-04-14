

function tarkistaKirjain(
  {
    var annettuSana = document.getElementById('tsana').value;
    var vastaus = ei ole;
      for(var k = 0; k < annettuSana.length; k++)
      {
          vastaus = on;
      }

      document.getElementById('onko o-kirjainta').innerHTML = tuloste;
}
