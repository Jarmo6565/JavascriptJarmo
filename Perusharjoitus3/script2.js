




/*

Function muutaSalaSana1()
    {
      var teksti1 = "";
      var salasana1 = document.getElementById('salasana').value;
      for(x = 0; x < salasana2.length; x++)
      {
        teksti1 += salasana1[x] + "x";
      }
      dukument.getElementById('vastaus1').inneHTML = teksti1;
    }

*/
/*
    Function salasana2()
        {
          var teksti2 = "";
          var salasana2 = document.getElementById('salasana').value;
          var salasana2 = "<p>"
          for(x = 0; x < salasana2.length; x++)
          {
            teksti2 += salasana2[x] + "Ö"-;
          }
            salasana2 += "</p>";
          dokument.getElementById('teksti2').inneHTML = teksti2;
        }

//     Laittaa salasanan jokaisen kirjaimen väliin nimen Jyri


        Function muutaSalaSana3()
            {
              var teksti3 = "";
              var salasana3 = document.getElementById('salasana').value

              for(x = 0; x < salasana3.length; x++)
              {
                teksti3 += salasana3[x] + "Jarmo";
              }
              dokument.getElementById('vastaus1').inneHTML = teksti3;
            }

*/









          //  <SCRIPT LANGUAGE="JavaScript">

          //  <!-- Begin
            function LogIn(){
            loggedin=false;
            username="";
            password="";
            username=prompt("Username:","");
            username=username.toLowerCase();
            password=prompt("Password:","");
            password=password.toLowerCase();
            if (username=="testi" && password=="salasana") {
            loggedin=true;
            window.location="membersarea.html";
            }
            if (username=="guest2" && password=="login2") {
            loggedin=true;
            window.location="home-page2.html";
            }
            if (loggedin==false) {
            alert("Invalid login!");
            }
            }
            // End -->
