const phrases = [
  "Ehi, fermati un secondo... due... tre... basta direi vai avanti",
  "Scommetto che stai sorridendo già 👀",
  "Certe persone rendono le giornate più leggere... tipo i ladri ",
  "Indovina chi stava pensando a te proprio adesso? Credo Gandhi",
  "Spoiler: non sei sola a sorridere 💫",
  "Sei una di quelle piccole cose belle che rendono grandi le giornate 💖",
  "In un mondo di notifiche, tu sei l’unica che se apro, al 95% mi esce scritto Esplodi"
];

function newPhrase() {
  const phraseElement = document.getElementById("phrase");
  const randomIndex = Math.floor(Math.random() * phrases.length);
  phraseElement.textContent = phrases[randomIndex];
}

const inutileBtn = document.getElementById('inutile-btn');

const testiInutili = {
  5: "Sono veramente inutile",
  10: "Perché insisti?",
  25: "Sei testarda ho capito",
  50: "Forse non sono così inutile",
  75: "Non ce la faccio più BASTA!",
};

let inutiliClicks = 0;

inutileBtn.addEventListener('click', () => {
  inutiliClicks++;

  if (inutiliClicks in testiInutili) {
    inutileBtn.textContent = testiInutili[inutiliClicks];
  } else if (inutiliClicks === 100) {
    inutileBtn.textContent = "CIUPPA";
    inutileBtn.disabled = true;
  }
});

const music = document.getElementById('bg-music');
const genreSelect = document.getElementById('genre-select');

const playlists = {
  pop: [
    'assets/pop1.mp3',
    'assets/pop2.mp3',
    'assets/pop3.mp3',
  ],
  rock: [
    'assets/rock1.mp3',
    'assets/rock2.mp3',
    'assets/rock3.mp3',
  ],
  classica: [
    'assets/classica1.mp3',
    'assets/classica2.mp3',
    'assets/classica3.mp3',
  ],
  quiet: []
};

let currentPlaylist = [];
let currentTrackIndex = 0;

function playTrack(index) {
  if (currentPlaylist.length === 0) {
    music.pause();
    music.src = "";
    return;
  }
  music.src = currentPlaylist[index];
  music.play();
}

music.addEventListener('ended', () => {
  currentTrackIndex++;
  if (currentTrackIndex >= currentPlaylist.length) {
    currentTrackIndex = 0;
  }
  playTrack(currentTrackIndex);
});

genreSelect.addEventListener('change', () => {
  const selectedGenre = genreSelect.value;
  currentPlaylist = playlists[selectedGenre];
  currentTrackIndex = 0;

  if (currentPlaylist.length === 0) {
    music.pause();
    music.src = "";
  } else {
    playTrack(currentTrackIndex);
  }
});

genreSelect.value = 'pop';
genreSelect.dispatchEvent(new Event('change'));
