

/*
//<script type="text/javascript">

function toista(){
    var luku = 2;                      //valitaan luvulle arvo
	do {

        window.alert("Luku " + luku);  //toistettavat käskyt
        luku = luku + 2;               //muistettava kasvattaa lukua

	}while(luku < 20);
}

//</script>
*/

// *********************************************************************

function tulostaParilliset()
{
  var myFun = parseInt(document.getElementById('pluku').value);
  var jono = "<p>";
  for(var i = 2; i <= myFun; i= i+2);
  {
  jono+= i;
  jono+= " ";
}
  jono+= "</p>";
  document.getElementById('parilliset').innerHTML = jono;

//  *********************************************************************
