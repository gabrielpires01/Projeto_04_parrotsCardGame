const images = ['bobrossparrot','explodyparrot', 'fiestaparrot', 'metalparrot','revertitparrot','tripletsparrot','unicornparrot']

let clicked = 0;
let plays = 0;
let numCards = 0;
let seconds = 0;
let pair = [];
let done = 0;
let stoptime = false;

function getNumCards () {
    numCards = Number(prompt("Quantas cartas quer jogar?"))
    while (isNaN(numCards) || numCards%2 !== 0 || numCards > 14 || numCards < 4) {
        numCards = prompt("Quantas cartas quer jogar?")
    }
    return numCards
}


function inicializer() {
    done = 0;
    seconds = 0;
    clicked = 0;
    plays = 0;
    stoptime = false;

    numCards = getNumCards()

    const element = document.querySelector('.cards');
    images.sort(comparador);

    const imagens = images.slice(0, numCards/2);
    let index = 0;
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < numCards/2; j++) {

            let front = document.createElement('div');
            let back = document.createElement('div');
            let cards = document.createElement('div');
            let parrot = document.createElement('img');
            let gif = document.createElement('img');
    
            element.appendChild(cards).setAttribute('class', 'card');
            let card = document.getElementsByClassName('card')[index];

            card.setAttribute('onclick', 'choose(this)')
            card.appendChild(front).setAttribute('class', 'front face');
            card.appendChild(back).setAttribute('class', 'back face');

            let parrotImg = document.getElementsByClassName('front')[index];
            parrotImg.appendChild(parrot).setAttribute('src', './img/front.png')
    
            let gifparrotImg = document.getElementsByClassName('back')[index];
            gifparrotImg.appendChild(gif).setAttribute('src', `./img/${imagens[j]}.gif`)

            index ++
        }
        imagens.sort(comparador);
    }
    timer()
}


function choose(e) {
    if (clicked < 2) {
        e.querySelector('.back').style.transform = 'rotateY(0deg)'
        e.querySelector('.front').style.transform = 'rotateY(-180deg)'
        pair.push(e)
        clicked ++
        plays ++
        if (clicked === 2){
            if (pair[0].querySelector('.back img').attributes.src.value !== pair[1].querySelector('.back img').attributes.src.value) {
                setTimeout(function(){
                    pair[0].querySelector('.back').style.transform = 'rotateY(-180deg)'
                    pair[0].querySelector('.front').style.transform = 'rotateY(0deg)'
                    pair[1].querySelector('.back').style.transform = 'rotateY(-180deg)'
                    pair[1].querySelector('.front').style.transform = 'rotateY(0deg)'
                    clicked = 0
                    pair = []
                }, 1000);
            } else {
                done ++
                clicked = 0
                pair = []
            }
        }
    }
    if (done === numCards/2) {
        stoptime = true
        alert(`Você ganhou em ${plays} jogadas e em ${seconds} segundos`)
    }
}

function timer(){
    if (stoptime === false) {
        document.getElementById('safeTimerDisplay').innerHTML = seconds + 's';
        seconds ++
        setTimeout(timer, 1000)
    }
}

function restart () {
    document.querySelector('.cards').innerHTML = '';
    inicializer()
}

// Randomizador
function comparador() { 
	return Math.random() - 0.5; 
}

inicializer()