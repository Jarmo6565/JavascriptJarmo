


  *********************************

  //         TEHTÄVÄ 1. Armstrong


  ********************************



  function testi1() {
    for(var i = 100; i < 10000; i++){
      x = i.toString().split(´´);
      // console.log(i + "" + x[0]+x[1]+x[2])
      if(Math.pow(x[0],3)+Math.pow(x[1],3)+Math.pow(x[2],3) == i)
      {
        console.log("Tämä": + i);
   }
  }
}


*********************************************



             Tehtävä 2. kuvio



********************************************

    function testi2()
    {
      var x,y,chr;
      for(x = 1  x <= 6; x++)
      {
        for(y = 1; y < x; y++)
        {
          chr=chr+("*")
        }
        console.log(chr);
        chr='';
      }
    }



******************************************


             Tehtävä 3. koodikieli


******************************************


function testi3(jono)
{
  taulukko = Array.from(jono);
  for(i = 0; i < jono.length; i++)
  switch(taulukko[i])
  {
    case "a":
    taulukko[i] = 4;
    break;
    case "e":
    taulukko[i] = 3;
    break;
    case "i":
    taulukko[i] = 1;
    break;
    case "o";
    taulukko[i] = 5;
    break;
  }
}
testi = taulukko.toString().replace(/,/g,");
console.log(teksti);
}


*******************************************


          4. Tehtävä Hik-up


*******************************************


function testi4(
  {
    for(i = 1;i <= 100; i++)
    {
      if(i%15 == 0)
      {
        console.log('Hik-up');
      }
      else if(i%5 == 0)
      {
        console.log('up');
      }
      else if(i%3 == 0)
      {
        console.log('Hik');
      }
      else{
        console.log(i);
      }
    }
  }
