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
 *   - Encontrar todas as músicas de um determinado gênero.
 *   - Calcular a duração total da playlist.
 *   - Listar as músicas por ordem de duração.
 */

const songs = [
  {
    id: 1000,
  },
  {
    id: 1001,
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

// try {
//   removeMusicFromPlaylistById(songs, 1005);
//   console.log("Musica removida com sucesso");
//   console.log(songs);
// } catch (error) {
//   console.log(error);
// }
