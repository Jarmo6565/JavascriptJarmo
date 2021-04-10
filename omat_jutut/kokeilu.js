public static void tulostaTahtia(int maara) {
    // yhden tähden saat tulostettua komennolla
    // System.out.print("*");
    // kutsu tulostuskomentoa n kertaa
/*    // System.out.println("");
}

public static void main(String[] args) {
    tulostaTahtia(5);
    tulostaTahtia(3);
    tulostaTahtia(9);
}
*/
<script language="JavaScript">

function tarkista3(){

	var arvaus = 1*document.getElementById("luku2").value;

	if (arvaus == 6){
		window.alert("Arvasit oikein!");
	}else if (arvaus < 6){
		window.alert("Arvasit liian pienen luvun!");
	}else if (arvaus > 6){
		window.alert("Arvasit liian suuren luvun!");
	}else{
		window.alert("Yritä edes.");
	};
}

</script>

<h4>Arvaa luku 1-10</h4>

<input type="text" id="luku2" value="0" />
<input type="button" value="Arvaa" onClick="tarkista3();" />
