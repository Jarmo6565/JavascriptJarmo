/*
//Viikon 2 perustehtävä ensimmäiset harjoitukset





//Tehtävä 1. Järjestäluvut suuruusjärjestykseen

function jarjestaLuvut()
{
  var taulu = [];
  taulu[0] = parseInt(document.getElementById("peli").value);
  taulu[1] = parseInt(document.getElementById("ujo").value);
  taulu[2] = parseInt(document.getElementById("uusi").value);
  taulu[3] = parseInt(document.getElementById("anty").value);











//        Tehtävä 2.  Etsi suurin numero
function pieninSuurin()
{
  var taulu = [];
  taulu[0] = parseInt(document.getElementById("poppeli").value);
  taulu[1] = parseInt(document.getElementById("pujo").value);
  taulu[2] = parseInt(document.getElementById("kuusi").value);
  taulu[3] = parseInt(document.getElementById("manty").value);
  taulu[4] = parseInt(document.getElementById("manty").value);
  taulu[5] = parseInt(document.getElementById("paju").value);
  taulu.sort ((a,b) => a - b );
  var suurin = taulu.pop();
  console.log("taulukon suurin oli:" +  suurin  + "suurin");
}






//      Tehtävä 3.
function parillinenPariton()
{
  var taulu = [];
  taulu[0] = parseInt(document.getElementById("myFun").value);
  function testi(nro)
  {
    if (nro%2==0)
  {
    console.log("parillinen");
  }
    else{
    console.log("pariton");
    }
    }



//      Tehtävä 4.

      function ikaTarkistus()
      {
        var ika = 18;
        var taulu = [];
        taulu[0] = parseInt(document.getElementById("tehtavanelja").value);
            if(ika <= 16)
      {
            console.log("saa ajaa polkupyoraa");
       }
            else if(ika < 18)
      {
            console.log("saa ajaa mopoa");
       }
            else
      {
            console.log("saa ajaa mita vain");
      }
  }
