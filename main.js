

// Converter 1 hora para segundos
const duration = 2 * 60 * 60;
const initialWidth = 100;
const decrementWidth = initialWidth / duration;
let currentWidth = initialWidth;

const intervalId = setInterval(() => {
    currentWidth -= decrementWidth;
    document.getElementById('progress').style.width = currentWidth + '%';

    // Calcular o tempo restante e exibir
    const timeRemaining = Math.ceil(currentWidth / decrementWidth);
    const hours = Math.floor(timeRemaining / (60 * 60));
    const minutes = Math.floor((timeRemaining % (60 * 60)) / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timer').innerText = `${hours}h ${minutes}m ${seconds}s`;
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
    document.getElementById('timer').innerText = ''; // Limpar o contador ao atingir 0s
    document.getElementById('message').innerHTML = 'Chegou a Cyber Monday';
}, duration * 1000);