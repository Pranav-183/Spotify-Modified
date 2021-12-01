console.log('Welcome To Spotify');

// Constants And Variables
let title = document.querySelector('title');
const songItemContainer = document.getElementById('songItemContainer')
const nowPlayingSong = document.getElementById('nowPlayingSong')
const albumName = document.getElementById('albumName')
const songInfoName = document.getElementById('songInfoName')
let bottomBarPlayPause = document.getElementById('bottomBarPlayPause')
const previous = document.getElementById('previous')
const next = document.getElementById('next')
const shuffle = document.getElementById('shuffle')
const repeat = document.getElementById('repeat')
let songsFour = JSON.parse(localStorage.getItem('songsArray'))[0];
songsFour = JSON.parse(songsFour)
let songIndex = localStorage.getItem('AlbumFourAudioSource')
let audioElement = new Audio(`../../songs/${songsFour[songIndex].songName}.mp3`)

// Initialize Information
const createSongItem = (i, container) => {
   const songItem = document.createElement('div')
   songItem.classList.add('songItem')
   songItem.innerHTML = `
      <div class="songNumberOrIcon">
         <span class="songNumber">${i+1}</span>
         <span class="playIcon"><i class="material-icons">play_arrow</i></span>
         <span class="pauseIcon"><i class="material-icons">pause</i></span>
         <span class="playingGif"><img src="../../images/playing.gif" alt="playingGif"></span>
      </div>
      <div class="songCover"><img src="../../images/${songsFour[i].albumName}.jpg" alt="songCover"></div>
      <div class="songNameArtist">
         <span class="songName">${songsFour[i].songName}</span>
         <span class="songArtist"><a href="">${songsFour[i].artistName}</a></span>
      </div>
      <div class="songDuration">${songsFour[i].duration}</div>
   </div>
   `
   container.appendChild(songItem)
}

createSongItem(parseInt(songIndex), nowPlayingSong)
albumName.innerHTML = `<a href="./index.html">${songsFour[songIndex].albumName}</a>`
for (let i = 1; i < songsFour.length; i++) {
   createSongItem(i, songItemContainer)
}

const songItems = Array.from(document.getElementsByClassName('songItem'))
const songNumber = Array.from(document.getElementsByClassName('songNumber'))
const playIcon = Array.from(document.getElementsByClassName('playIcon'))
const pauseIcon = Array.from(document.getElementsByClassName('pauseIcon'))
const playingGif = Array.from(document.getElementsByClassName('playingGif'))
const songName = Array.from(document.getElementsByClassName('songName'))

// Functions

const bottomBarPlayPauseFunc = () => {
   if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      bottomBarPlayPause.innerText = 'pause_circle_filled';
      title.innerText = `${songInfoName.innerText} - One Direction`;
      songItems[songIndex].backgroundColor = '#FFFFFF1A';
      songName[songIndex].style.color = '#1DB954';
      playingGif[songIndex].classList.add('displayBlock');
      songNumber[songIndex].classList.remove('displayBlock');
      songNumber[songIndex].classList.add('displayNone');
      songItems[songIndex].onmouseleave = () => {
         playingGif[songIndex].classList.add('displayBlock')
         pauseIcon[songIndex].classList.remove('displayBlock')
      }
      songItems[songIndex].onmouseover = () => {
         pauseIcon[songIndex].classList.add('displayBlock')
         playIcon[songIndex].classList.add('displayNone')
         playingGif[songIndex].classList.remove('displayBlock')
      }
   } else {
      audioElement.pause();
      bottomBarPlayPause.innerText = 'play_circle_filled';
      title.innerText = `Play Queue - One Direction`;
      songNumber[songIndex].classList.add('displayBlock')
      playingGif[songIndex].classList.remove('displayBlock')
      songItems[songIndex].onmouseleave = () => {
         songNumber[songIndex].style.marginTop = '0'
      }
      songItems[songIndex].onmouseover = () => {
         playIcon[songIndex].classList.add('displayNone')
         songNumber[songIndex].style.marginTop = '2px'
      }
   }
}

const nextFunc = () => {
   if (songIndex >= parseInt(songsFour.length - 1)) {
      songIndex = 0;
   } else {
      songIndex++
   }
   audioElement.src = `../../songs/${songsFour[songIndex].songName}.mp3`;
   audioElement.currentTime = 0;
   audioElement.play();
   bottomBarPlayPause.innerText = 'pause_circle_filled';
   songInfoName.innerText = songsFour[songIndex].songName;
   title.innerText = `${songInfoName.innerText} - One Direction`;
   songNumber[songIndex].classList.add('displayNone');
   playingGif[songIndex].classList.add('displayBlock');
   createSongItem(parseInt(songIndex), nowPlayingSong)
}

bottomBarPlayPause.onclick = () => bottomBarPlayPauseFunc()
document.addEventListener('keyup', (e) => {
   if (e.code === 'Space') {
      bottomBarPlayPauseFunc();
   }
})

next.onclick = () => {
   nextFunc()
}