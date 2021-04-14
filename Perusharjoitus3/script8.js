


/*


    var luku2 = 5;
    var potenssi = 2;
    document.getElementById("matikka2").innerHTML = Math.pow(luku2,potenssi);

*/

      //  ******************   tai  ****************************

        function kerLuku()
              { 
              var kerLuku = document.getElementById('kertoma').value;
                var laskettu = 1;
                  for(var z = 1; z <= kerLuku; Z++
                {
                  laskettu* = Z;
                }
              document.getElementById('kertomaVastaus').innerHTML = '<p>Luvun ' + kerLuku + 'kertoma on '+laskettu + '</p>';
          }
