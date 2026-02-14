const songs = [
  { title: "Don't Say You Love Me", artist: 'Jin', color: 'linear-gradient(135deg,#2a4558,#5aa6d8)' },
  { title: 'Asmalibrasi', artist: 'Soegi Bornean', color: 'linear-gradient(135deg,#36475a,#7ba2c6)' },
  { title: 'Cinta Tak Ada Nahkoda', artist: 'Rizky Febian', color: 'linear-gradient(135deg,#5d3525,#bd8a57)' },
  { title: 'Lantas', artist: 'Juicy Luicy', color: 'linear-gradient(135deg,#41596d,#9ec9df)' },
  { title: 'Poker Face', artist: 'Lady Gaga', color: 'linear-gradient(135deg,#1d6ba2,#dd305f)' },
  { title: 'Just The Way You Are', artist: 'Bruno Mars', color: 'linear-gradient(135deg,#7b4a28,#df9a59)' },
  { title: 'Senja Teduh Pelita', artist: "Maliq & D'Essentials", color: 'linear-gradient(135deg,#32424f,#798fa0)' }
];

const songGrid = document.getElementById('songGrid');
const queueList = document.getElementById('queueList');
const currentSong = document.getElementById('currentSong');
const currentArtist = document.getElementById('currentArtist');
const footerSong = document.getElementById('footerSong');
const footerArtist = document.getElementById('footerArtist');
const progress = document.getElementById('progress');
const currentTime = document.getElementById('currentTime');
const playBtn = document.getElementById('playBtn');

songs.slice(0, 4).forEach((song) => {
  const card = document.createElement('article');
  card.className = 'song-card';
  card.innerHTML = `
    <div class="song-art" style="background:${song.color}"></div>
    <div class="meta">
      <h4>${song.title}</h4>
      <p>${song.artist}</p>
    </div>
  `;
  card.onclick = () => selectSong(song);
  songGrid.appendChild(card);
});

songs.slice(4).forEach((song) => {
  const li = document.createElement('li');
  li.innerHTML = `<span>${song.title}</span><span>${song.artist}</span>`;
  li.onclick = () => selectSong(song);
  queueList.appendChild(li);
});

function selectSong(song) {
  currentSong.textContent = song.title;
  currentArtist.textContent = song.artist;
  footerSong.textContent = song.title;
  footerArtist.textContent = song.artist;
}

progress.addEventListener('input', () => {
  const seconds = Number(progress.value);
  const m = Math.floor(seconds / 60);
  const s = String(seconds % 60).padStart(2, '0');
  currentTime.textContent = `${m}:${s}`;
});

playBtn.addEventListener('click', () => {
  playBtn.textContent = playBtn.textContent === '▶' ? '⏸' : '▶';
});
