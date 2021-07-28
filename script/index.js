const images = ['bobrossparrot','explodyparrot', 'fiestaparrot', 'metalparrot','revertitparrot','tripletsparrot','unicornparrot']

function inicializer() {
    let numCards = Number(prompt("Quantas cartas quer jogar?"))
    while (isNaN(numCards) || numCards%2 !== 0 || numCards > 14 || numCards < 4) {
        numCards = prompt("Quantas cartas quer jogar?")
    }
    const element = document.querySelector('.cards');
    images.sort(comparador);

    const imagens = images.slice(0, numCards/2);
    console.log(imagens)
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
    
            card.appendChild(front).setAttribute('class', 'front face');
            card.appendChild(back).setAttribute('class', 'back face');
            
            let parrotImg = document.getElementsByClassName('front')[index];
            parrotImg.appendChild(parrot).setAttribute('src', './img/front.png')
    
            let gifparrotImg = document.getElementsByClassName('back')[index];

            gifparrotImg.appendChild(gif).setAttribute('src', `./img/${imagens[j]}.gif`)
            console.log(index)

            index ++
        }
        imagens.sort(comparador);
    }   
}

// Randomizador
function comparador() { 
	return Math.random() - 0.5; 
}

inicializer()