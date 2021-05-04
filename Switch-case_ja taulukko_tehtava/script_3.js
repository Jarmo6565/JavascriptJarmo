


function haeNumerot(){

	var taulukko = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

  //tässä kerrotaan että tehdään taulukon seinät
  var tulostus = "<table border = '1'>";

 //tässä luetellan akioiden lukumäärät
	for (var x = 0 ; x < 5 ; x++){

  //tässä kerrotaan monta ruudukkoa tehdään alkioille
  //" montako huonetta kuuluu tähän"
    tulostus += "<tr>";

      //tässä luetellaan alkioitten sisällä olevat numerot
      for(var y =0 ; y < 4 ; y++) {

        // tässä kerrotaan alkioitten sisällä olevien numeroiteen määrä
        // "huonekalujen lukumäärä per huone"
        tulostus += "<td>" + taulukko [x][y] + "</td><br>";
      }
      tulostus += "</tr><br>";
  }
      tulostus += "</table>";


      document.getElementById("tulostus").innerHTML = tulostus;
}

















/*
function haeNumerot(){
  var numerot = "";
	var  taulukko1 = [1, 2, 1, 24];
  var  taulukko1 = [1, 2, 1, 24];
  var  taulukko2 = [8, 11, 9, 4];
  var  taulukko3 = [7, 0, 7, 27];
  var  taulukko4 = [7, 4, 28, 14];
  var  taulukko5 = [3, 10, 26, 7];

	for (var i=0 ; i < 5 ; i++){
  };

  console.log(taulukko1);
  console.log(taulukko2);
  console.log(taulukko3);
  console.log(taulukko4);
  console.log(taulukko5);

 //document.getElementById("numerot").value = numerot;
 document.write(numerot);

//window.alert(taulukko1);
//window.alert(taulukko2);
//window.alert(taulukko3);
//window.alert(taulukko4);
//window.alert(taulukko5);
}


*/





















//functio tukko()
//    {
//var  taulukko1 = [1, 2, 1, 24];
//var  taulukko3 = [7, 0, 7, 27];
//var  taulukko4 = [7, 4, 28, 14];
//var  taulukko5 = [3, 10, 26, 7];
//int [][] taulukko1 = [[1, 2, 1, 24][8, 11, 9, 4][7, 0, 7, 27][7, 4, 28, 14][3, 10, 26, 7]];


/*
function haeNumerot(){
  var numerot = [];
	var  taulukko1 = [1, 2, 1, 24];
  var  taulukko2 = [8, 11, 9, 4];
  var  taulukko3 = [7, 0, 7, 27];
  var  taulukko4 = [7, 4, 28, 14];
  var  taulukko5 = [3, 10, 26, 7];

	for (var i=0 ; i < 5 ; i++){
  };

  console.log(taulukko1);
  console.log(taulukko2);
  console.log(taulukko3);
  console.log(taulukko4);
  console.log(taulukko5);

  document.getElementById("numerot").innerHTML = numerot;

//window.alert(taulukko1);
//window.alert(taulukko2);
//window.alert(taulukko3);
//window.alert(taulukko4);
//window.alert(taulukko5);
}

//<input type="button" value="Ilmoita numerot" onClick="haeNumerot();" />
*/
