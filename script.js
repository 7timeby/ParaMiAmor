const reasons = [
    "Porque tienes unos ojos azules que me hacen perderme en ellos cada vez que te miro.",
    "Porque tu voz es tan dulce y encantadora que podría escucharla todo el día.",
    "Porque tu sonrisa ilumina mi día y me hace sentir que todo es posible.",
    "Porque eres mi mejor amiga, confidente, y la mujer con la que quiero pasar mi vida.",
    "Porque te amo con todo mi corazón y siempre te amaré, sin importar la distancia."
];

const loveButton = document.getElementById('loveButton');
const reasonDiv = document.getElementById('reason');

loveButton.addEventListener('click', () => {
    const reason = reasons[Math.floor(Math.random() * reasons.length)];
    const heart = document.createElement('span');
    heart.textContent = '❤️';
    heart.classList.add('heart');
    document.body.appendChild(heart);

    reasonDiv.style.display = 'block';
    reasonDiv.textContent = reason;
    setTimeout(() => {
        reasonDiv.style.animation = 'fadeIn 1.5s forwards';
    }, 100);

    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 2000);
});
