
// Kirjoita ohjelma, joka laskee annetun luvun kertoman
//(esim: 4 -> 4*3*2*1 = 24)
// Anna luku josta lasketaan kertoma:


//                  Tehtävä 4.
//******************************************************************************


function laskeKertoma()
  {
     var laskettu = 1;
    for(var z = 1; z <= kerluku; z++)
    {
      laskettu*= z
    }
    document.getElementById('kertomaVastaus').innerHTML = '<p>'Luvun ' + kerLuku + kertoma on ' + ' laskettu ' + '</p>';
  }


  //****************************************************************************
