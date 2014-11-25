var ligado = false;

function ligar() {

    if (!ligado) {

        ligado = true;

        var arrayLampadasApagadas = document.getElementsByTagName ("img");

        for (var i = 0; i < arrayLampadasApagadas.length; i++) {
            arrayLampadasApagadas[i].src = "img/lampadaAcesa.jpg";
        }

    } else {
        ligado = false;

        var arrayLampadasAcesas = document.getElementsByTagName("img");

        for (var j = 0; j < arrayLampadasAcesas.length; j++) {
            arrayLampadasAcesas[j].src = "img/lampadaApagada.jpg";
        }

    }
}


function desligar() {
    //document.getElementById("lampada").src = "img/lampadaApagada.jpg";
}

function criarLampada(quantidade) {
    for (var i = 0; i < quantidade; i++) {
        document.getElementById("divLampada").innerHTML += "<img id = 'lampda' onclick = 'ligar()' src = 'img/lampadaApagada.jpg'/>";
    }

}



