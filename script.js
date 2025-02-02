const messages = [
    "Esti sigura?",
    "Chiar vrei??",
    "Nu cred ca ai vrut sa zici asta",
    "Te rog...",
    "Mai gandestete la asta!",
    "Dacă spui nu, voi fi foarte trist...",
    "Voi fi foarte trist...",
    "Voi fi foarte foarte foarte trist...",
    "Ok bine, nu o sa mai intreb...",
    "Glumesc, spune DA te rog! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}