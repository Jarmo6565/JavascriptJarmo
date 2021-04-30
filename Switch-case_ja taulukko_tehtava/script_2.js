



function arvo()
{
  var numerot = [];
  while(numerot.length < 7)
  {
    var uusinumero = randomInt(39);
    if (numerot.indexOf(uusinumero) == -1)
    {
    numerot.push(uusinumero);
  }
}

document.getElementById('numerot').innerHTML = numerot.toString();
}

function randomInt(max) {
  return Math.floor((Math.random() * max) + 1);
}
