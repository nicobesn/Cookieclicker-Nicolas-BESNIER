var HTML_berry = document.querySelector("#berry");
var HTML_luffy = document.querySelector("#luffy");
var HTML_image = document.querySelector("#image");
var clickers = 0;
var autoclicker_cost = 1000;
var adition_cost = 10;
var multi5_cost = 100;

// variables bpc = berry par click //

var bpc = 1;
var bpc1 = 0;
var bpc2 = 0;

// variable SCORE //

var score = 0;

// variables AUDIOS //
var bruit = new Audio();
bruit.src = "image/gear2.mp3"

var gear2 = new Audio();
gear2.src = "image/gear2.mp3"

var gear4 = new Audio();
gear4.src = "image/gear4.mp3"

var gear4tank = new Audio();
gear4tank.src = "image/gear4-tank.mp3"

var gear4snake = new Audio();
gear4snake.src = "image/gear4-snake.mp3"

var fart = new Audio();
fart.src = "image/fart.mp3"

luffy.addEventListener("click", play)


// AUTOCLICK // 

function autoclick() {
    if (autoclicker_cost > score) {
        alert("Tu ne peux pas acheter ");
    }
    else {
        score -= autoclicker_cost;
        clickers = clickers + 1;
        autoclicker_cost = Math.round(autoclicker_cost * 1.2);
        document.getElementById('autoclicker_cost').innerHTML = autoclicker_cost;

    }
}

function play_autoclickers() {
    for (let i = 0; i < clickers; i++) {
        play2()
    }
}
window.setInterval(play_autoclickers, 1000);

function play2() {
    score = score + bpc
    HTML_berry.textContent = Math.round(score);
}

// CLICK + 1 //
function play() {
    score = score + bpc;
    score = score + bpc1;
    score = score + bpc2;
    HTML_berry.textContent = Math.round(score);
}

// fonction d'adition + 1 

function adition() {

    if (adition_cost > score) {
        alert("Tu ne peux pas acheter");
    }
    else {
        score -= adition_cost;
        bpc1 = Math.round(bpc1 + 1);
        adition_cost = Math.round(adition_cost * 2);
        document.getElementById('adition_cost').innerHTML = adition_cost;
    }

}

// fonction de multiplication par 5 

function multi5() {
    if (multi5_cost > score) {
        alert("Tu ne peux pas acheter");
    }
    else {
        score -= multi5_cost;
        if (bpc2 == 0) { bpc2 = 1 }
        bpc2 = Math.round(bpc2 * 5)
        multi5_cost = Math.round(multi5_cost * 5);
        document.getElementById('multi5_cost').innerHTML = multi5_cost;
    }
}


// function pour le changement d'image 
// bien mettre le son pour les gear 2/3/4

function changement_image() {
    var HTML_luffy = document.querySelector("#luffy");
    nouvelle_url = HTML_luffy.src

    if (score < 5000) {
    }
    else if (score < 30000000) {
        nouvelle_url = "image/eastblue.png"
    }
    else if (score < 100000000) {
        nouvelle_url = "image/alabasta.png"
    }
    else if (score < 200000000) {
        nouvelle_url = "image/celeste.png"
    }
    else if (score < 210000000) {
        nouvelle_url = "image/davy.png"
    }
    else if (score < 250000000) {
        nouvelle_url = "image/gear2.png"
        if (!gear2.ended) {
            gear2.play();
        }
    }
    else if (score < 300000000) {
        nouvelle_url = "image/gear3.png"
    }
    else if (score < 350000000) {
        nouvelle_url = "image/nightmare.png"
    }
    else if (score < 400000000) {
        nouvelle_url = "image/marineford.png"
    }
    else if (score < 450000000) {
        nouvelle_url = "image/lucy.png"
    }
    else if (score < 1000000000) {
        nouvelle_url = "image/gear4-boundman.png"
        if (!gear4.ended) {
            gear4.play()
        }
    }
    else if (score < 1200000000) {
        nouvelle_url = "image/gear4-tankman.png"
        if (!gear4tank.ended) {
            gear4tank.play()
        }
    }
    else if (score < 1500000000) {
        nouvelle_url = "image/gear4-snakeman.png"
        if (!gear4snake.ended) {
            gear4snake.play()
        }
    }
    else if (score > 3000000000) {
        nouvelle_url = "image/gear5.png"
    }
    HTML_luffy.src = nouvelle_url
}



function blague() {
    var HTML_luffy = document.querySelector("luffy");

    if (score >= 10) {
        if (!fart.ended) {
            fart.play()
        }
    }
}
