const messages = [
  "Ehi, sorridi! La vita è una festa 🎉",
  "Hai mai provato a ridere senza motivo? Provalo ora!",
  "Sei più simpatica di quanto pensi 😜",
  "Ricorda: un sorriso al giorno toglie il medico di torno!",
  "Sei ufficialmente nella pagina più simpatica del web!",
  "Meglio ridere che piangere... o meglio, ridere mentre piangi 😂",
  "Attenzione: alto rischio di felicità contagiosa!"
];

let currentIndex = 0;
const messageElement = document.getElementById('message');
const genreSelect = document.getElementById('genre-select');
const stopButton = document.getElementById('stop-music');

let audio = null;

function showNextMessage() {
  currentIndex = (currentIndex + 1) % messages.length;
  messageElement.style.opacity = 0;
  setTimeout(() => {
    messageElement.textContent = messages[currentIndex];
    messageElement.style.opacity = 1;
  }, 500);
}

setInterval(showNextMessage, 5000);

genreSelect.addEventListener('change', () => {
  const genre = genreSelect.value;
  if (audio) {
    audio.pause();
    audio = null;
  }
  if (genre) {
    // per ora mettiamo un placeholder audio vuoto o link da sostituire dopo
    const audioFiles = {
      triste: "audios/triste.mp3",
      rock: "audios/rock.mp3",
      classica: "audios/classica.mp3",
      meglio: "audios/meglio.mp3"
    };
    const audioSrc = audioFiles[genre];
    audio = new Audio(audioSrc);
    audio.loop = true;
    audio.play().catch(() => {
      console.log("Nessun file audio trovato, metti i file nella cartella /audios");
    });
  }
});

stopButton.addEventListener('click', () => {
  if (audio) {
    audio.pause();
    audio = null;
    genreSelect.value = "";
  }
});
