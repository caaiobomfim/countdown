//Configurar data final da contagem regressiva (getTime == Time in Milissegundos)
let launchDate = new Date("2023-01-01T00:00:00").getTime();

//Configurar temporizador para marcar a cada 1 segundo
let timer = setInterval(tick, 1000);

function tick() {
    let now = new Date().getTime();
    let t = launchDate - now;
    if (t > 0) {
        //Configurar dias, horas, minutos e segundos
        //Algoritmo de cálculo de dias
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        //Definir prefixo zero para qualquer número abaixo de 10
        if (days < 10) {
            days = "0" + days;
        }
        //Algoritmo de cálculo de horas
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10) {
            hours = "0" + hours;
        }
        //Algoritmo de cálculo de minutos
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if (mins < 10) {
            mins = "0" + mins;
        }
        //Algoritmo de cálculo de segundos
        let secs = Math.floor((t % (1000 * 60)) / 1000);
        if (secs < 10) {
            secs = "0" + secs;
        }
        //Criação da String de tempo
        let time = `${days} : ${hours} : ${mins} : ${secs}`;
        //Definir o tempo no documento
        document.querySelector('.time-countdown').innerText = time;
    }
}