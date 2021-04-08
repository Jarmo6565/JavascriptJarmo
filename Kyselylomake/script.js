
function myFunction() {
  var nimi = document.getElementById("etunimi").value
  var lastname = document.getElementById("sukunimi").value;
  var sleepyes = document.getElementById("unijoo").value;
  var sleepno = document.getElementById("uniei").value;
  var car1 = document.getElementById("kulku1").value;
  var car2 = document.getElementById("kulku2").value;
  var car3 = document.getElementById("kulku3").value;
  var feedback = document.getElementById("palaute").value;
  var gender = document.getElementById("sukupuoli").value;

  //jos nimikenttä tyhjä
  if(name == "") {
    alert("Syötä nimesi");
    return false;
    //Jos sukunimesi on tyhjä
  }else if(lastname == "") {
    alert("Syötä sukunimesi");
    return false;
    //Jos sukupuoli sarake on tyhjä
  }else if(gender == "") {
    alert("valitse jokin vaihtoehto sukupuoli valikosta");
    return false;
    //jos nukutko hyvin ei ole vastattu mitäänote
  } else if (sleepyes.checked == false && sleepno.checked == false) {
    alert("vvalitse nukutko öisin hyvin");
    return false;
    //Jos kulkuneuvoa ei ole valittu
  } else if(car1.checked  == false && car2.checked  == false && car3.checked == false) {
    alert("valitse käyttämäsi kulkuneuvot");
    return false
    //jos palautetta ei ole valittu
  } else if(feedback == "") {
    alert(Ole hyvä ja anna meille palautetta");
    return false;
    //kun kaikkeen on vastattu tulee kiitos viesti
  } else {
    alert("Kiitos vastauksestasi!");
  }
}








  if(nimi == "") {
  alert("Syötä nimesi");
  return false;
} else if(sukunimi == "") {
alert("Syötä sukunimesi");
return false;
}
}
