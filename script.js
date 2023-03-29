// Selecionando o elemento HTML com a classe "digital"
let digitalElement = document.querySelector('.digital');
// Selecionando o elemento HTML com a classe "p_s"
let sElement = document.querySelector('.p_s');
// Selecionando o elemento HTML com a classe "p_m"
let mElement = document.querySelector('.p_m');
// Selecionando o elemento HTML com a classe "p_h"
let hElement = document.querySelector('.p_h');
// Função que atualiza o relógio
function updateClock() {
    // Criando uma nova instância de data com a data e hora atual
    let now = new Date();
    // Armazenando o valor da hora atual
    let hour = now.getHours();
    // Armazenando o valor do minuto atual
    let minute = now.getMinutes();
    // Armazenando o valor do segundo atual
    let second = now.getSeconds();
    // Definindo o texto do elemento "digitalElement" com a hora formatada
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
    // Calculando o grau de rotação do ponteiro dos segundos
    let sDeg = ((360 / 60) * second) - 90;
    // Calculando o grau de rotação do ponteiro dos minutos
    let mDeg = ((360 / 60) * minute) - 90;
    // Calculando o grau de rotação do ponteiro das horas
    let hDeg = ((360 / 12) * hour) - 90;
    // Aplicando a rotação ao elemento "sElement"
    sElement.style.transform = `rotate(${sDeg}deg)`;
    // Aplicando a rotação ao elemento "mElement"
    mElement.style.transform = `rotate(${mDeg}deg)`;
    // Aplicando a rotação ao elemento "hElement"
    hElement.style.transform = `rotate(${hDeg}deg)`;
}
// Função que adiciona um zero à esquerda do número caso ele seja menor que 10
function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}
// Atualizando o relógio a cada segundo
setInterval(updateClock, 1000);
// Atualizando o relógio assim que a página é carregada
updateClock();