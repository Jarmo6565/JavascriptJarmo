<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<script src="testi.js"></script>
</head>
<body>
<form class="" action="index.html" method="post">
<input id="nimi" placeholder="Anna tähän nimesi">
<button type="button" onclick="toimi()">Paina Minua</button>
</form>
</body>
</html>

function toimi()
{
  var nimi = document.getElementById('nimi').value;
  alert("Hei " + nimi + "Onpas sinulla todella komea nimi!");
  
}
