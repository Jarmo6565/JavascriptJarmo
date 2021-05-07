

// Kirjoita ohjelma, joka laskee 10 ensimmäistä numeroa yhteen

//                            Tehtävä 7.
//******************************************************************************
function summa() {
var summa = 0; // alustetaan summa-muuttuja
for (var i = 1; i <= 10; i++) {
 summa = summa + i;
 console.log(summa);
}
document.getElementById('laskeYhteensa').innerHTML = '<p>'+ yhteensa+ '</p>';
}


//******************************************************************************
