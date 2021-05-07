//Kirjoita ohjelma, joka muunttaa käyttäjän antaman sanan salasanaksi siten,
//että laittaa joka toiseksi kirjaimeksi ison ö-kirjaimen, eli josta
//sana on Kaappi - -> KÖaÖaÖpÖpÖiÖ


//               Tehtävä 2.
//******************************************************************************

    function salasana2()
        {
          var salasana2 = document.getElementById("muuta salasanaksi").value;
          var salasana = "<p>";
          for(var x = 0; x < salasana2.length; x++)
          {
            salasana += salasana2[x] + "Ö"-;
          }
            salasana += "</p>";
          document.getElementById("salasanaksi1").innerHTML = salasana;
        }

//     Laittaa salasanan jokaisen kirjaimen väliin nimen Jyri
//******************************************************************************
