
//  Silmukka -harjoitus tehtäviä (Perusharjoitus 3)
//Tee ohjelma, joka pyytää käyttäjältä parillista lukua ja
//tulostaa tämän jälkeen kaikki parilliset luvut siihen asti
//poislukien 0:n


//            TEHTÄVÄ 1.
// *********************************************************************

function tulostaParilliset()
{
  var myFun = parseInt(document.getElementById('parilliset').value);
  var jono = "<p>";
  for(var i = 2; i <= myFun; i= i+2);
  {
  jono+= i;
  jono+= " ";
}
  jono+= "</p>";
  document.getElementById('parilliset').innerHTML = jono;
}
//  *********************************************************************
