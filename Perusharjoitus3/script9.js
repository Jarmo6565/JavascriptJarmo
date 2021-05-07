

//Kirjoita ohjelma, joka etsii annetusta luvuista suurimman ja pienimmän arvon

//              Tehtävä 9.
//******************************************************************************


    function pieninSuurin()
    {
      var taulu = [];
      taulu[0] = parseInt(document.getElementById("poppeli").value);
      taulu[1] = parseInt(document.getElementById("pujo").value);
      taulu[2] = parseInt(document.getElementById("kuusi").value);
      taulu[3] = parseInt(document.getElementById("manty").value);
      taulu[4] = parseInt(document.getElementById("paju").value);
      taulu[5] = parseInt(document.getElementById("kataja").value);
      taulu.sort ((a,b) => a - b );
      var suurin = taulu.pop();
      console.log("taulukon suurin oli:" +  suurin  + "suurin");
    }


//********************************************************************************



  /*    vaihtoehto
   function etsiSuurinPienin()
          {
            var taulu = [], temp;
            for(var x = 0; x < 5; x++)
            {
              temp = document.getElementById('taulukko['+x+']').value;
              temp = parseInt(temp);
              taulu.push(temp);
              //alert(taulu);
            }
            taulu = taulu.sort((a,b) => a-b);
            document.getElementById('lukujenTulostusT').innerHTML = '<p>Pienin luku: ' + taulu[0] + ' ja suurin luku: '+ taulu[taulu.length-1];
          }
*/
