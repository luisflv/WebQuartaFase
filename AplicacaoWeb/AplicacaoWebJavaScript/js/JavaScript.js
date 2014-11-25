

var msg = "Seja bem-vindo!";
alert(msg);
console.log(msg);
console.log("msg é do tipo:" + typeof (msg));

var numero = 2;
console.log("numero é do tipo: " + typeof (numero));

var trueFalse = true;
console.log(typeof (trueFalse))

var teste;
console.log(typeof (teste))

var teste2 = null;
console.log(typeof (teste2))

var paragrafo = document.getElementById("paragrafo");
paragrafo.innerHTML = ("<p>Rodapé via JavaScript!</p>");

var sections = document.getElementsByTagName("section");
sections[0].setAttribute("hidden", "true");

var sections2 = document.getElementsByClassName("cabecalho")
sections[0].style.color = "gray";