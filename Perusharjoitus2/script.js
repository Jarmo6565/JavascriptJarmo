function pieninSuurin()
{
  var taulu = [];
  taulu[0] = parseInt(document.getElementById("poppeli").value);
  taulu[1] = parseInt(document.getElementById("pujo").value);
  taulu[2] = parseInt(document.getElementById("kuusi").value);
  taulu[3] = parseInt(document.getElementById("manty").value);
  taulu[4] = parseInt(document.getElementById("paju").value);
  taulu.sort ((a,b) => a - b );
  var suurin = taulu.pop();
  console.log("taulukon suurin oli:" +  suurin  + "suurin");
}







/*

                            function kokkeli(arr)
                            {

                            var documentgetElementById=


                                arr.sort();
                                var suurin = arr.pop();
                                    console.log("Suurin " );
                            }









                            function testi(nro)
                                {
                                    if (nro%2== 0 )
                                {
                                    console.log("parillinen");
                                }
                                else{
                                    console.log("pariton");
                                }
                            }















                        function ikaTarkistus()
                        {

                              if(ika <= 16)
                        {

                              console.log("saa ajaa polkupyoraa");
                         }

                              else if(ika < 18)
                        {
                              console.log("saa ajaa mopoa");
                         }

                              else
                        {
                              console.log("saa ajaa mita vain");

                        }
                    }
*/
