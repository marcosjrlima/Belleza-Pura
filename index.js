function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(() => {
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


const fifteenMinutes = 5 * 60;
const display = document.getElementById('timer');

startTimer(fifteenMinutes, display);

function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}


document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");

    emailError.textContent = ""; 

    if (!validarEmail(email)) {
        emailError.textContent = "Por favor, insira um e-mail válido.";
    } else {
        alert("Formulário enviado com sucesso!\nNome: " + nome + "\nE-mail: " + email);
       
    }
});

