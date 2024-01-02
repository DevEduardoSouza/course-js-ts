/**
 * Exercício 5: Playlist Musical
 *
 * Crie um sistema para gerenciar uma playlist musical:
 *
 * - Tenha um array playlist contendo objetos que representem músicas.
 *
 * - Implemente funções para:
 *   - Adicionar uma nova música à playlist✅.
 *   - Remover uma música da playlist com base no título ou no artista.✅
 *   - Encontrar todas as músicas de um determinado gênero.✅
 *   - Calcular a duração total da playlist.
 *   - Listar as músicas por ordem de duração.
 */

const songs = [
  {
    id: 1000,
    genre: "pop",
    duration: 150,
  },
  {
    id: 1001,
    genre: "funk",
    duration: 100,
  },
  {
    id: 1002,
    genre: "rap",
    duration: 221,
  },
  {
    id: 1003,
    genre: "pop",
    duration: 228,
  },
];

const music = {
  title: "",
  artist: "",
  duration: 0,
  genre: "",
  filePaht: "",
  banner: "",
};

function Music(title, artist, duration, genre, filePaht, banner) {
  const id = Math.floor(Math.random() * 100000);
  this.id = id;
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.genre = genre;
  this.filePaht = filePaht;
  this.banner = banner;

  Object.defineProperty(this, "id", {
    value: this.id,
    writable: false, // Não pode ser modificado
    enumerable: true, // Pode ser iterado
    configurable: false, // Não pode ser reconfigurado ou removido
  });
}

const addNewMusicInPlaylist = (songs, musicCurrentAdd) => {
  let alreadyExistsInPlaylist = !!songs.find(
    (song) => song.id === musicCurrentAdd.id
  );

  if (alreadyExistsInPlaylist) {
    throw new Error("This song already exists on the playlist");
  }

  songs.push(musicCurrentAdd);
};

const removeMusicFromPlaylistById = (songs, id) => {
  let isExistsInPlaylist = !!songs.find((song, index) => {
    if (song.id === id) {
      return songs.splice(index, 1);
    }
  });

  if (!isExistsInPlaylist) {
    throw new Error("Music not found");
  }
};

const searchByGenre = (songs, genre) => {
  const result = songs.filter(
    (song) => song.genre.toLowerCase().trim() === genre.toLowerCase().trim()
  );

  if (result.length === 0) {
    throw new Error(`${genre} genre not found`);
  }

  return result;
};

const totalDurationPlaylist = (songs) => {
  if (!songs) throw new Error("playlist does not exit");

  const result = songs.reduce((ac, value) => (ac += value.duration), 0);
  const formmatToMinutes = result / 60;
  return Math.floor(formmatToMinutes);
};

try {
  console.log(totalDurationPlaylist(songs) + " minutos");
} catch (error) {
  console.log(error);
}
