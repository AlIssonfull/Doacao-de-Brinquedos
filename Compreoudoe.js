const carrossel = document.querySelector(".Carrossel");
const setas = carrossel.querySelectorAll(".seta");
let cards = [...carrossel.querySelectorAll(".card")];

function atualizar() {
    cards.forEach((card, i) => {
        card.classList.remove("lef", "rig");
        if (i === 0) {
            card.classList.add("lef");
        }
        if (i === 2) {
            card.classList.add("rig");
        }
    });
}
setas[0].onclick = () => {
    cards.push(cards.shift());
    atualizar();
};
setas[1].onclick = () => {
    cards.unshift(cards.pop());
    atualizar();
};

atualizar();