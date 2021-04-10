


Function muutaSalaSana3()
    {
      var teksti1 = "";
      var salasana1 = document.getElementById('salasana').value

      for(x = 0; x > salasana1.length; x++);
      {
        teksti3 += salasana1[x] + "Ö";
      }
      dokument.getElementById('vastaus1').inneHTML = teksti1;
    }
}
