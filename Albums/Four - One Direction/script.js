console.log('Welcome To Spotify');

document.addEventListener('DOMContentLoaded', () => {
    volumeBar.value = localStorage.getItem('AlbumFourLocalVolume');
})

document.addEventListener('DOMContentLoaded', () => {
    songIndex = localStorage.getItem('AlbumFourAudioSource');
})

// CONSTANTS
const expandAlbums = document.getElementById('expandAlbums');
const expandOneD = document.getElementById('expandOneD');
const expandPlaylists = document.getElementById('expandPlaylists');
const albums = document.getElementById('albums');
const playlists = document.getElementById('playlists');
const OneDDrop = document.getElementById('OneDDrop');
const albumList = document.getElementById('albumList');
const playListList = document.getElementById('playListList');
const previous = document.getElementById('previous');
const bottomBarPlayPause = document.getElementById('bottomBarPlayPause');
const next = document.getElementById('next');
const progressBar = document.getElementById('progressBar');
const volumeBar = document.getElementById('volumeBar');
const volumeIcon = document.getElementById('volumeIcon');
const songItems = Array.from(document.getElementsByClassName('songItem'));
const songIconOrNumber = Array.from(document.getElementsByClassName('songIconOrNumber'));
const songNumber = Array.from(document.getElementsByClassName('songNumber'));
const Number = Array.from(document.getElementsByClassName('Number'));
const playIcon1 = Array.from(document.getElementsByClassName('playIcon1'));
const playIcon2 = Array.from(document.getElementsByClassName('playIcon2'));
const pauseIcon1 = Array.from(document.getElementsByClassName('pauseIcon1'));
const pauseIcon2 = Array.from(document.getElementsByClassName('pauseIcon2'));
const songName = Array.from(document.getElementsByClassName('songName'));
const gif = Array.from(document.getElementsByClassName('gif'));
const songInfoName = document.getElementById('songInfoName');
const title = document.querySelector('title');
const songs = [
    {songName: "Night Changes", filePath: "songs/1.mp3", duration: "04:00", number: "1"},
    {songName: "Steal My Girl", filePath: "songs/2.mp3", duration: "03:48", number: "2"},
    {songName: "18", filePath: "songs/3.mp3", duration: "04:08", number: "3"},
    {songName: "Ready To Run", filePath: "songs/4.mp3", duration: "03:16", number: "4"},
    {songName: "No Control", filePath: "songs/5.mp3", duration: "03:19", number: "5"},
    {songName: "Once In A Lifetime", filePath: "songs/6.mp3", duration: "02:38", number: "6"},
    {songName: "Stockholm Syndrome", filePath: "songs/7.mp3", duration: "03:34", number: "7"},
    {songName: "Where Do Broken Hearts Go", filePath: "songs/8.mp3", duration: "03:49", number: "8"},
    {songName: "Act My Age", filePath: "songs/9.mp3", duration: "03:18", number: "9"}
]

// VARIABLES
let songIndex = localStorage.getItem('AlbumFourAudioSource');
let audioElement = new Audio('../../songs/Night Changes.mp3');

// INFORMATION FOR ALL SONGS
songItems.forEach((element, i) => {
    element.getElementsByClassName('songNumber')[0].innerHTML = songs[i].number;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    element.getElementsByClassName('songDuration')[0].innerText = songs[i].duration;
})

songInfoName.innerText = songs[songIndex].songName;

// FUNCTIONS

const check = () => {
    for (let i = 0; i < songs.length; i++) {
        if (i != songIndex) {
            gif[i].classList.remove('displayBlock');
            gif[i].classList.add('displayNone');
            songNumber[i].classList.remove('displayNone');
            songItems[i].onmouseover = () => {
                songNumber[i].classList.add('displayNone');
                playIcon1[i].classList.add('displayBlock');
            }
            songItems[i].onmouseleave = () => {
                songNumber[i].classList.remove('displayNone');
                playIcon1[i].classList.remove('displayBlock');
            }
        }
        if (i == songIndex) {
            playIcon1[i].classList.remove('displayBlock');
        }
    }
}

const songItemPlauseHover = () => {
    songItems[songIndex].onmouseleave = () => {
        pauseIcon1[songIndex].classList.remove('displayBlock');
        pauseIcon1[songIndex].classList.add('displayNone');
        gif[songIndex].classList.remove('displayNone');
        gif[songIndex].classList.add('displayBlock');
        gif[songIndex].style.margin = '0 -23px 0 -12px';
    }
    songItems[songIndex].onmouseover = () => {
        gif[songIndex].classList.remove('displayBlock');
        gif[songIndex].classList.add('displayNone');
        pauseIcon1[songIndex].classList.remove('displayNone');
        pauseIcon1[songIndex].classList.add('displayBlock');
    }
}

const extra = () => {
    songItems[songIndex].onmouseover = () => {
        playIcon1[songIndex].classList.remove('displayBlock');
        playIcon1[songIndex].classList.add('displayNone');
        pauseIcon1[songIndex].classList.remove('displayNone');
        pauseIcon1[songIndex].classList.add('displayBlock');
        gif[songIndex].classList.remove('displayBlock');
    }
}

const bottomBarPlayPauseFunc = () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        bottomBarPlayPause.innerText = 'pause_circle_filled';
        audioElement.play();
        title.innerText = `${songInfoName.innerText} - One Direction`;
        songNumber[songIndex].classList.add('displayNone');
        gif[songIndex].classList.add('displayBlock');
        gif[songIndex].style.margin = '0 -23px 0 -12px';
        songItemPlauseHover();
        extra();
        check();
    } else {
        bottomBarPlayPause.innerText = 'play_circle_filled';
        audioElement.pause();
        songNumber[songIndex].classList.remove('displayNone');
        gif[songIndex].classList.remove('displayBlock');
    }
}

const nextFunc = () => {
    if (songIndex >= 8) {
        songIndex = 0;
    } else {
        songIndex ++
    }
    audioElement.src = `../../songs/${songs[songIndex].songName}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    bottomBarPlayPause.innerText = 'pause_circle_filled';
    songInfoName.innerText = songs[songIndex].songName;
    title.innerText = `${songInfoName.innerText} - One Direction`;
    songNumber[songIndex].classList.add('displayNone');
    gif[songIndex].classList.add('displayBlock');
    gif[songIndex].style.margin = '0 -23px 0 -12px';
    console.log(playIcon1[songIndex].classList);
    songItemPlauseHover();
    extra();
    check();
    saveLocalAudioSrcNumber(songIndex);
}

const previousFunc = () => {
    if (songIndex <= 0) {
        songIndex = 8
    } else {
        songIndex --
    }
    audioElement.src = `../../songs/${songs[songIndex].songName}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    bottomBarPlayPause.innerText = 'pause_circle_filled';
    songInfoName.innerText = songs[songIndex].songName;
    title.innerText = `${songInfoName.innerText} - One Direction`;
    songNumber[songIndex].classList.add('displayNone');
    gif[songIndex].classList.add('displayBlock');
    gif[songIndex].style.margin = '0 -23px 0 -12px';
    songItemPlauseHover();
    extra();
    check();
    saveLocalAudioSrcNumber(songIndex);
}

const volumeIconChange = () => {
    audioElement.volume = volumeBar.value / 100;
    if (volumeBar.value == 0) {
        volumeIcon.innerText = 'volume_off'
    } else if (volumeBar.value <= 33 && volumeBar.value > 0) {
        volumeIcon.innerText = 'volume_mute';
    } else if (volumeBar.value < 66 && volumeBar.value > 33) {
        volumeIcon.innerText = 'volume_down';
    } else if (volumeBar.value > 66) {
        volumeIcon.innerText = 'volume_up';
    }
}

const saveLocalVolume = (storedVolume) => {
    localStorage.setItem('AlbumFourLocalVolume', storedVolume);
}

const saveLocalAudioSrcNumber = (audioSrcNumber) => {
    localStorage.setItem('AlbumFourAudioSource', audioSrcNumber);
}

if (audioElement.paused) {
    title.innerText = 'Spotify - Four';
} else {
    title.innerText = `${songInfoName.innerText} - One Direction`;
}

// LISTEN TO EVENTS

saveLocalAudioSrcNumber(songIndex);
volumeIconChange();

bottomBarPlayPause.onclick = () => bottomBarPlayPauseFunc();

document.addEventListener('keyup', (event) => {
    if (event.code === 'Space') {
       bottomBarPlayPauseFunc();
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key === 'k') {
        bottomBarPlayPauseFunc();
    }
})

audioElement.onended = () => nextFunc();

next.onclick = () => nextFunc();

document.addEventListener('keyup', (event) => {
    if (event.key === 'l') {
        nextFunc();
    }
})

previous.onclick = () => previousFunc()

document.addEventListener('keyup', (event) => {
    if (event.key === 'j') {
        previousFunc();
    }
})

// SONGITEM JAVASCRIPT
playIcon1.forEach((element, i) => {
    element.onclick = () => {
        pauseIcon1[i].classList.add('displayBlock');
        songNumber[i].classList.add('displayNone');
        playIcon1[i].classList.add('displayNone');
        gif[i].classList.add('displayNone');
        songIndex = songItems[i].id;
        audioElement.src = `../../songs/${songs[songIndex].songName}.mp3`;
        audioElement.play();
        songInfoName.innerText = songs[i].songName;
        title.innerText = `${songInfoName.innerText} - One Direction`;
        bottomBarPlayPause.innerText = 'pause_circle_filled';
        songItemPlauseHover();
        check()
    }
})

pauseIcon1.forEach(element => {
    element.onclick = () => {
        audioElement.currentTime = 0;
        audioElement.play();
    }
})

// EXPAND ALBUMS AND PLAYLISTS
expandAlbums.addEventListener('click', () => {
    if (albums.style.height == '70px' || albums.style.height == '220px') {
        albums.style.height = '40px';
        albums.style.transition = 'height 0.3s ease';
        expandAlbums.innerText = 'expand_more';
        OneDDrop.style.display = 'none';
        albumList.style.display = 'none';
        
    } else {
        albums.style.height = '70px';
        albums.style.transition = 'height 0.3s ease';
        expandAlbums.innerText = 'expand_less';
        setTimeout(() => {
            OneDDrop.style.display = 'block';
        }, 100);
    }
})

expandOneD.addEventListener('click', () => {
    if (albums.style.height == '70px') {
        albums.style.height = '220px';
        albums.style.transition = 'height 0.3s ease';
        expandOneD.innerText = 'expand_less';
        setTimeout(() => {
            albumList.style.display = 'block';
        }, 100);
    } else {
        albums.style.height = '70px';
        albums.style.transition = 'height 0.3s ease';
        expandOneD.innerText = 'expand_more';
        albumList.style.display = 'none';
    }
})

expandPlaylists.addEventListener('click', () => {
    if (playlists.style.height == '130px') {
        playlists.style.height = '40px';
        playlists.style.transition = 'height 0.3s ease';
        expandPlaylists.innerText = 'expand_more';
        playListList.style.display = 'none';
    } else {
        playlists.style.height = '130px';
        playlists.style.transition = 'height 0.3s ease';
        expandPlaylists.innerText = 'expand_less';
        setTimeout(() => {
            playListList.style.display = 'block';
        }, 100);
    }
})

// PROGRESS BAR

audioElement.ontimeupdate = () => {
    let progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    progressBar.value = progress;
}

progressBar.onchange = () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
}

// VOLUME BAR

volumeBar.onmousemove = () => {
    volumeIconChange();
}

volumeBar.onchange = () => {
    volumeIconChange();
}

volumeIconChange();

volumeIcon.onclick = () => {
    if (volumeBar.value == 0) {
        volumeBar.value = 100;
        volumeIcon.innerText = 'volume_up';
        audioElement.volume = 1;
    } else {
        volumeBar.value = 0;
        volumeIcon.innerText = 'volume_off';
        audioElement.volume = 0;
    }
}

volumeBar.onchange = () => {
    saveLocalVolume(volumeBar.value);
}