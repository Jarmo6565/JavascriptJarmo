





                        function pieninSuurin()
                        {
                            var taulu[0] =  documentgetElementById("poppeli").value;
                            taulu[1] = documentgetElementById("pujo")= Anna 2. numero;
                            taulu[2]documentgetElementById("kuusi")(= Anna 3. numero;
                            taulu[3] documentgetElementById("manty")= Anna 4. numero;
                            taulu[4] documentgetElementById("paju")= Anna 5. numero;



                            taulu.sort ((a,b) => a - b );

                            var suurin = taulu.pop();

                            console.log("taulukon suurin oli:" +  pieninSuurin  + "suurin");
                        }







/*

                            function kokkeli(arr)
                            {

                            var documentgetElementById=


                                arr.sort();
                                var suurin = arr.pop();
                                    console.log("Suurin " );
                            }

*/







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
