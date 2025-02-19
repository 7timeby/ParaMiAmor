const frases = [
    "Porque tienes unos ojos azules que me hacen perderme en ellos cada vez que te miro.",
    "Porque tu voz es tan dulce y encantadora que podría escucharla todo el día, incluso desde lejos.",
    "Porque tu sonrisa ilumina mi día, y aunque estemos lejos, me da la paz que necesito.",
    "Porque eres lo que más amo, y aunque la distancia nos separa, mi amor por ti sigue creciendo.",
    "Porque te amo con todo mi corazón, a pesar de la distancia que nos separa.",
    "Porque tu risa es mi melodía favorita, y aunque no pueda escucharla todos los días, siempre la llevo en mi mente.",
    "Porque aunque estemos lejos, cada día me siento más cerca de ti en espíritu.",
    "Porque la distancia solo hace que te ame más, me hace valorarte aún más.",
    "Porque no importa cuán lejos estemos, siempre estás en mis pensamientos y en mi corazón.",
    "Porque aunque no pueda abrazarte ahora, en mi corazón siempre te siento cerca.",
    "Porque tus palabras tienen el poder de calmar mi alma, incluso cuando no estamos juntos.",
    "Porque la distancia no me impide pensar en ti todo el tiempo y seguir soñando con nuestro futuro juntos.",
    "Porque me haces querer ser la mejor versión de mí mismo, incluso cuando no estamos juntos físicamente.",
    "Porque aunque estemos separados, cada vez que te pienso, siento tu amor envolviéndome.",
    "Porque tus mensajes y llamadas me llenan de felicidad, y aunque no pueda verte, siento que te tengo cerca.",
    "Porque aunque no pueda ver tu sonrisa todos los días, siempre la llevo en mi corazón.",
    "Porque me haces sentir especial, incluso desde lejos, con cada palabra que me dedicas.",
    "Porque la distancia no es un obstáculo, solo un recordatorio de cuánto te extraño y te amo.",
    "Porque tu inteligencia me enamora cada vez más, aunque solo pueda admirarla a través de las palabras que me compartes.",
    "Porque tu belleza es tan única que, aunque no pueda verte todos los días, la tengo presente en mi mente.",
    "Porque aunque la distancia nos separe, siempre estarás en mi corazón, y eso nunca cambiará.",
    "Porque cada llamada tuya es un recordatorio de lo afortunado que soy de tenerte en mi vida, aunque no te tenga cerca físicamente.",
    "Porque aunque estemos lejos, siento que nuestro amor crece más cada día.",
    "Porque tus palabras me dan esperanza, y aunque la distancia sea grande, sé que podemos superarlo.",
    "Porque aunque estemos separados, siempre estoy pensando en ti, y eso me llena de alegría.",
    "Porque el amor que siento por ti no tiene límites, y la distancia solo me hace amarte más.",
    "Porque cada momento que pasamos separados, me da más razones para esperar con ansias el momento en que estemos juntos.",
    "Porque tus palabras y tus recuerdos me acompañan todos los días, y eso me da fuerzas para seguir adelante.",
    "Porque aunque no pueda abrazarte ahora, siempre te llevo en mis pensamientos, y eso me da paz.",
    "Porque la distancia no cambia lo que siento por ti; al contrario, lo fortalece cada día.",
    "Porque aunque no pueda verte cada día, siempre me siento cerca de ti en mi corazón.",
    "Porque cada día que pasa, me acerco más a ti, y eso me hace sentirte cerca, a pesar de la distancia.",
    "Porque aunque no podamos estar juntos físicamente, siempre compartimos nuestros sueños y esperanzas.",
    "Porque a pesar de la distancia, mi amor por ti sigue siendo tan fuerte como siempre.",
    "Porque tu amor me da fuerzas para seguir, incluso cuando la distancia parece difícil de soportar.",
    "Porque cuando te extraño, me doy cuenta de cuánto te amo, y cuánto deseo estar juntos.",
    "Porque la distancia no hace que te ame menos, al contrario, me hace valorarte aún más.",
    "Porque aunque estemos separados, siempre hay una conexión entre nosotros que trasciende cualquier distancia.",
    "Porque tus mensajes de buenos días y buenas noches me llenan de calidez, incluso cuando estamos lejos.",
    "Porque tus pensamientos y palabras siempre están conmigo, como si estuvieras a mi lado.",
    "Porque aunque no pueda tocarte, cada día siento tu amor rodeándome de una manera única.",
    "Porque siempre te siento a mi lado, aunque la distancia nos separe.",
    "Porque aunque no esté contigo físicamente, en mi corazón siempre estás cerca.",
    "Porque cada día, aunque estemos separados, nuestro amor se hace más fuerte.",
    "Porque cada vez que pienso en ti, mi amor por ti crece, y la distancia se hace más llevadera.",
    "Porque la distancia no cambia mi amor por ti, me hace esperar con más ansias el momento de verte.",
    "Porque aunque estemos lejos, siempre estarás en mis pensamientos y en mi corazón.",
    "Porque la distancia solo es temporal, pero lo que siento por ti es eterno."
];

// Obtener los elementos
const loveButton = document.getElementById("loveButton");
const reasonDiv = document.getElementById("reason");

// Función para mostrar las razones y animación de corazones
loveButton.addEventListener("click", function () {
    // Mostrar una razón aleatoria
    const randomIndex = Math.floor(Math.random() * frases.length);
    const reason = frases[randomIndex];
    reasonDiv.textContent = reason;
    reasonDiv.style.opacity = 1;

    // Crear corazones
    createHear
});

// Función para crear corazones con animación
function createHearts() {
    const heart = document.createElement("span");
    heart.classList.add("heart");
    heart.textContent = "❤️";
    
    // Añadir el corazón al body
    document.body.appendChild(heart);

    // Posicionar el corazón aleatoriamente en la pantalla
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    // Eliminar el corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, 2000); // Coincide con el tiempo de la animación
}
