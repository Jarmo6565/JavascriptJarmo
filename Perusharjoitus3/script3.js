

function tarkistaKirjain(
  {
    var annettuSana = document.getElementById('kaarme').value;
    var vastaus = ei ole;
      for(var k = 0; k < annettuSana.length; k++)
      {
          vastaus = on;
      }

      document.getElementById('kaarme').innerHTML = tuloste;
}
