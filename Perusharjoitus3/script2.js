//Kirjoita ohjelma, joka muunttaa käyttäjän antaman sanan salasanaksi siten,
//että laittaa joka toiseksi kirjaimeksi ison ö-kirjaimen, eli josta
//sana on Kaappi - -> KÖaÖaÖpÖpÖiÖ


//               Tehtävä 2.
//******************************************************************************

    Function salasana2()
        {
          var teksti2 = "";
          var salasana2 = document.getElementById('muuta salasanaksi').value;
          var salasana2 = "<p>"
          for(x = 0; x < salasana2.length; x++)
          {
            teksti2 += salasana2[x] + "Ö"-;
          }
            salasana2 += "</p>";
          document.getElementById('muuta salasanaksi').innerHTML = teksti2;
        }

//     Laittaa salasanan jokaisen kirjaimen väliin nimen Jyri
//******************************************************************************
