function arvoKortit()
{
  var korttipakka = [''];
  var maat = ['pata','risti','hertta','ruutu'];
  var numerot = ['2','3','4','5','6','7','8','9','10','jätkä','akka','Kuningas','Ässä'];
  laskuri = 0;
  for(m = 0; m < maat.length; m++)
  {
    for(n = 0; n < numerot.length; n++)
    {
      if(m == maat.length-1 && n == numerot.length-1)
      {
        korttipakka[laskuri] = maat[m] + numerot[n];
      }
      else
      {
        korttipakka[laskuri] =  maat[m]+numerot[n];
        laskuri++;
      }
    }
  }
  var kortit = [];
  for(l = 0; l < 5; l++)
  {
    temp = korttipakka[Math.floor(Math.random()*52)];
    kortit[l] = temp;
  }
  document.getElementById('parttikokka').innerHTML = '<p>'+kortit+'</p>';
}
