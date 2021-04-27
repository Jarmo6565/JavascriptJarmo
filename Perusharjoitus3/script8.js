
//Kirjoita ohjelma, joka kysyy käyttäjältä kahta lukua ja laskee ensimmäisen
//potenssiin toinen esim. 5 ja 2 = 5^2 = 25

//  Anna korotettava luku:

// Anna potenssi:

/*

    var luku2 = 5;
    var potenssi = 2;
    document.getElementById("matikka2").innerHTML = Math.pow(luku2,potenssi);

*/
//                          Tehtävä 8.
//*****************************************************************************

  function kerLuku()
    {
  var kerLuku = document.getElementById('kertoma').value;
    var laskettu = 1;
      for(var z = 1; z <= kerLuku; Z++
    {
      laskettu* = Z;
    }
  document.getElementById("kertomaVastaus").innerHTML = '<p>Luvun ' + kerLuku + 'kertoma on '+laskettu + '</p>';
}
