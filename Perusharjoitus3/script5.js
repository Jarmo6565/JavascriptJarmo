
/*

function testi4()
{
  for(i = 1; i <= 100; i++)
  {
    var uloste = ' ';
     for( var y = 1; y <= 100; y++)
     {
     if(i%15 == 0)
    {
      console.log('hipheijaa');
    }
    else if(i%5 == 0)
    {
      console.log('heijaa');
    }
    else if(i%3 == 0)
    {
      console.log('hip');
    }
      else{
        console.log(i);
      }
    }
  }
*/
//  ***************    TAI   ***************************

function hipheijaa()
  {
    var tuloste = ' ';
     for( var i = 1; i <= 100; i++)
     {
     if(i%3 == 0 && i%5 == 0 )
    {
      console.log('hipheijaa ');
    }
    else if(i%5 == 0)
    {
      console.log('heijaa ');
    }
    else if(i%3 == 0)
    {
      console.log('hip ');
    }
      else{
        console.log(i+);
      }
      document.getElementById('lukujenTulostus').innerHTML = tuloste;
    }
  }
