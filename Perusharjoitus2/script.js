function pieninSuurin()
{
  alert("toimii");
  var taulu = [];
  taulu[0] = ParseInt(document.getElementById("poppeli").value);
  taulu[1] = ParseInt.getElementById("pujo").value;
  taulu[2] = ParseInt.getElementById("kuusi").value;
  taulu[3] = ParseInt.getElementById("manty").value;
  taulu[4] = ParseInt.getElementById("paju").value;
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
