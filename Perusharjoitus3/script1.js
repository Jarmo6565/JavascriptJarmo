


// *********************************************************************

function tulostaParilliset()
{
  var myFun = parseInt(document.getElementById('tiikeri').value);
  var jono = "<p>";
  for(var i = 2; i <= myFun; i= i+2);
  {
  jono+= i;
  jono+= " ";
}
  jono+= "</p>";
  document.getElementById('tiikeri').innerHTML = jono;

//  *********************************************************************
