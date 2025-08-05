const phrases = [
  "Ehi, fermati un secondo...",
  "Scommetto che stai sorridendo già 👀",
  "Certe persone rendono le giornate più leggere...",
  "Indovina chi stava pensando a te proprio adesso?",
  "Spoiler: non sei sola a sorridere 💫",
  "Sei una di quelle piccole cose belle che rendono grandi le giornate 💖",
  "In un mondo di notifiche, tu sei l’unica che vale davvero la pena aprire ☁️"
];

function newPhrase() {
  const phraseElement = document.getElementById("phrase");
  const randomIndex = Math.floor(Math.random() * phrases.length);
  phraseElement.textContent = phrases[randomIndex];
}
