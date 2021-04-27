

// Kirjoita ohjelma, joka laskee 10 ensimmäistä numeroa yhteen

//                            Tehtävä 7.
//******************************************************************************
function yhteen()
  {
    yhteensa = 0;
for(var i = 1; i <=10; i++)
 {
 yhteensa += i;
}
document.getElementById('laskeYhteensa').innerHTML = '<p>'+ yhteensa+ '</p>';
}


//******************************************************************************
