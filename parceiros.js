const carrossel = document.querySelector(".carrossel");

let cards = [...carrossel.querySelectorAll(".card")];


// Corrige automaticamente o 6º card do seu HTML
const sextoCard = carrossel.querySelector(":scope > .fundo-card");

if (sextoCard) {
    const novoCard = document.createElement("div");

    novoCard.classList.add("card");

    sextoCard.parentNode.insertBefore(novoCard, sextoCard);

    novoCard.appendChild(sextoCard);

    cards.push(novoCard);
}


let atual = 0;


function atualizarCarrossel() {

    cards.forEach(card => {

        card.classList.remove(
            "destaque",
            "esquerda",
            "direita"
        );

    });


    // CARD DO MEIO

    cards[atual].classList.add("destaque");


    // CARD DA ESQUERDA

    const esquerda =
        (atual - 1 + cards.length) % cards.length;

    cards[esquerda].classList.add("esquerda");


    // CARD DA DIREITA

    const direita =
        (atual + 1) % cards.length;

    cards[direita].classList.add("direita");
}


// PASSAR PARA O PRÓXIMO

function proximo() {

    atual++;

    if (atual >= cards.length) {
        atual = 0;
    }

    atualizarCarrossel();
}


// CARROSSEL AUTOMÁTICO

setInterval(() => {

    proximo();

}, 3000);


// INICIAR

atualizarCarrossel();
