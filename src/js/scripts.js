document.addEventListener('DOMContentLoaded', () => {
    const carrossel = document.querySelector('.carrossel');
    const cards = document.querySelectorAll('.card-carrossel');
    const totalCards = cards.length;
    let index = 0;

    document.getElementById('voltar').addEventListener('click', () => {
        if (index > 0) {
            index--;
        } else {
            index = totalCards - 1;
        }
        updateCarrossel();
    });

    document.getElementById('avancar').addEventListener('click', () => {
        if (index < totalCards - 1) {
            index++;
        } else {
            index = 0;
        }
        updateCarrossel();
    });

    function updateCarrossel() {
        const offset = -index * 100;
        carrossel.style.transform = `translateX(${offset}%)`;
    }
});
