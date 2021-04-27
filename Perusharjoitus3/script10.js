
// Muokataan salasana tehtävää siten, että se arpoo kirjaimen Ö:n sijasta
// Anna muokattava salasana

//          Tehtävä 10.
********************************************************************************

function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}
console.log(genCharArray('a', 'z')); // ["a", ..., "z"]

document.getElementById('onko Ö-kirjainta').innerHTML = tuloste;
}

********************************************************************************
