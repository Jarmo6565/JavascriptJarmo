

Function lahetaVastaukset() {
  var yhteensa = 5;
  var pisteet = 0;

  //Hae käyttäjän syötteet
  var k1 = document.forms["kyselyLomake"]["k1"].value;
  var k2 = document.forms["kyselyLomake"]["k2"].value;
  var k3 = document.forms["kyselyLomake"]["k3"].value;
  var k4 = document.forms["kyselyLomake"]["k4"].value;
  var k5 = document.forms["kyselyLomake"]["k5"].value;

  var yhteensa = 5;
  var pisteet = 0;
  var huom = 0;

}

    //Tarkastus
    for(i = 1; i <= yhteensa; i++)
    {
      if(eval('k'+i) == null || eval('k'+i) == '')
      {
        alert('Et vastannut kysymykseen numero: ' +i);
        huom = 1;
      }
      if(huom == 1) return false;
    }

//Aseta oikeat lahetaVastaukset
  var vastaukset = ["b", "a", "d", "b", "d"];

  //Tarkasta oikeat lahetaVastaukset
  for(i = 1; i <= yhteensa; i++)
    {
      if(eval('k' +i) == vastaukset[i-1])
    {
      pisteet++;

      }
    }


    //Nayta tulokset
    var tulokset = document.getElementById('tulokset');
    alert('Sait ' + pisteet + ' pistettä, kun maksimi pistemäärä oli ' + yhteensa);
    tulokset.innerHTML = '<h3>Sait <span>' + pisteet + '</span>  pistettä, kun maksimi pistemaara oli <span>' +yhteensa + '<span></h3>';
    return false;
}