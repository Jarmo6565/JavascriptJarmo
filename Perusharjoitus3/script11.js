

//Tee ohjelma, joka pyytää käyttäjältä kahta numeroa (jälkimmäinen tulee olla isompi)
//ja tulostaa tuolla välillä parilliset ja parittomat numerot sekä niiden summat

//              Tehtävä 11.
//******************************************************************************

function ehtoSilmukka(luku)
{
  if(luku%2==0)
  {
    console.log("luku on pariton");
  }
  else{
    console.log("luku on parillinen");
  }
  document.getElementById("pariton").innerHTML = "tulos";
  {
  document.getElementById("parillinen").innerHTML = "tulos";
  }
}
//*********************************************************************




//  vaihtoehto
/*
      function llisettomat()
      {
        var nro1, nro2, palku, ralku, psumma=0, rsumma=0, pluvut='', rluvut='';
        nro1 = parseInt(document.getElementById('pnro').value);
        nro2 = document.getElementById('inro').value;
        if(nro1%2 == 0)
        {
          palku = nro1;
        }
        else {
          palku = nro1+1;
        }
        for(var b = palku; b<=nro2; b+=2)
        {
          pluvut += b + ' ';
          psumma += b;
          //alert(pluvut + ' ' + psumma);
        }
        if(nro1%2 == 0)
        {
          ralku = nro1+1;
        }
        else {
          ralku = nro1;
        }
        for(var r = ralku; r<=nro2; r+=2)
        {
          rluvut += r + ' ';
          rsumma += r;
        }
        document.getElementById('lukujenTulostusPari').innerHTML = '<p>Parilliset numerot: ' + pluvut +' ja niiden summa: ' + psumma + '</p><p>Parittomat luvut: ' + rluvut + ' ja niiden summa: '+ rsumma + '</p>';
      }

*/
