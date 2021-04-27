//Kirjoita ohjelma, joka tarkastaa, onko antamassasi
//sanassa ö-kirjainta ja kirjoittaa vastaukseksi joko: on tai ei ole


//                      Tehtävä 3.
//*****************************************************************************

function tarkistaKirjain(
  {
    var annettuSana = document.getElementById('Onko ö-kirjainta').value;
    var vastaus = ei ole;
      for(var k = 0; k < annettuSana.length; k++)
      {
          vastaus = on;
      }

      document.getElementById('Onko ö-kirjainta').innerHTML = tuloste;
}


//******************************************************************************
