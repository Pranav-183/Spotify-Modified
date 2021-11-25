console.log('Welcome To Spotify');

document.addEventListener('DOMContentLoaded', () => {
    songInfoName.innerText = JSON.parse(localStorage.getItem('BottomBarInfo'))[0]
    songInfoImg.src = JSON.parse(localStorage.getItem('BottomBarInfo'))[1]
    songInfoArtistName.innerText = JSON.parse(localStorage.getItem('BottomBarInfo'))[2]
    volumeBar.value = localStorage.getItem('LocalVolume')
    audioElement.src = `../songs/${JSON.parse(localStorage.getItem('BottomBarInfo'))[0]}.mp3`
})

// Values

const songs = [
    {songName: "Up All Night", coverPath: "../images/Up All Night.jpg", artistName: "One Direction", duration: "03:14"},
    {songName: "What Makes You Beautiful", coverPath: "../images/Up All Night.jpg", artistName: "One Direction", duration: "03:21"},
    {songName: "More Than This", coverPath: "../images/Up All Night.jpg", artistName: "One Direction", duration: "03:49"},
    {songName: "Stole My Heart", coverPath: "../images/Up All Night.jpg", artistName: "One Direction", duration: "03:23"},
    {songName: "I Wish", coverPath: "../images/Up All Night.jpg", artistName: "One Direction", duration: "03:36"},
    {songName: "Save You Tonight", coverPath: "../images/Up All Night.jpg", artistName: "One Direction", duration: "03:24"},
    {songName: "I Want", coverPath: "../images/Up All Night.jpg", artistName: "One Direction", duration: "02:51"},
    {songName: "Gotta Be You", coverPath: "../images/Up All Night.jpg", artistName: "One Direction", duration: "04:01"},
    {songName: "Rock Me", coverPath: "../images/Take Me Home.jpg", artistName: "One Direction", duration: "03:19"},
    {songName: "C'mon C'mon", coverPath: "../images/Take Me Home.jpg", artistName: "One Direction", duration: "02:44"},
    {songName: "I Would", coverPath: "../images/Take Me Home.jpg", artistName: "One Direction", duration: "03:20"},
    {songName: "Kiss You", coverPath: "../images/Take Me Home.jpg", artistName: "One Direction", duration: "03:06"},
    {songName: "Back For You", coverPath: "../images/Take Me Home.jpg", artistName: "One Direction", duration: "02:58"},
    {songName: "Live While We're Young", coverPath: "../images/Take Me Home.jpg", artistName: "One Direction", duration: "03:20"},
    {songName: "She's Not Afraid", coverPath: "../images/Take Me Home.jpg", artistName: "One Direction", duration: "03:12"},
    {songName: "Heart Attack", coverPath: "../images/Take Me Home.jpg", artistName: "One Direction", duration: "03:00"},
    {songName: "They Dont Know About Us", coverPath: "../images/Take Me Home.jpg", artistName: "One Direction", duration: "03:20"},
    {songName: "Summer Love", coverPath: "../images/Take Me Home.jpg", artistName: "One Direction", duration: "03:27"},
    {songName: "Midnight Memories", coverPath: "../images/Midnight Memories.jpg", artistName: "One Direction", duration: "02:56"},
    {songName: "Best Song Ever", coverPath: "../images/Midnight Memories.jpg", artistName: "One Direction", duration: "03:20"},
    {songName: "Story Of My Life", coverPath: "../images/Midnight Memories.jpg", artistName: "One Direction", duration: "04:05"},
    {songName: "You And I", coverPath: "../images/Midnight Memories.jpg", artistName: "One Direction", duration: "03:57"},
    {songName: "Right Now", coverPath: "../images/Midnight Memories.jpg", artistName: "One Direction", duration: "03:20"},
    {songName: "Happily", coverPath: "../images/Midnight Memories.jpg", artistName: "One Direction", duration: "02:55"},
    {songName: "Diana", coverPath: "../images/Midnight Memories.jpg", artistName: "One Direction", duration: "03:04"},
    {songName: "Night Changes", coverPath: "../images/Four.jpg", artistName: "One Direction", duration: "04:00"},
    {songName: "Steal My Girl", coverPath: "../images/Four.jpg", artistName: "One Direction", duration: "03:48"},
    {songName: "18", coverPath: "../images/Four.jpg", artistName: "One Direction", duration: "04:08"},
    {songName: "Ready To Run", coverPath: "../images/Four.jpg", artistName: "One Direction", duration: "03:16"},
    {songName: "No Control", coverPath: "../images/Four.jpg", artistName: "One Direction", duration: "03:19"},
    {songName: "Once In A Lifetime", coverPath: "../images/Four.jpg", artistName: "One Direction", duration: "02:38"},
    {songName: "Stockholm Syndrome", coverPath: "../images/Four.jpg", artistName: "One Direction", duration: "03:34"},
    {songName: "Where Do Broken Hearts Go", coverPath: "../images/Four.jpg", artistName: "One Direction", duration: "03:49"},
    {songName: "Act My Age", coverPath: "../images/Four.jpg", artistName: "One Direction", duration: "03:18"},
    {songName: "A.M.", coverPath: "../images/Made In The A.M.jpg", artistName: "One Direction", duration: "03:28"},
    {songName: "Drag Me Down", coverPath: "../images/Made In The A.M.jpg", artistName: "One Direction", duration: "03:12"},
    {songName: "End Of The Day", coverPath: "../images/Made In The A.M.jpg", artistName: "One Direction", duration: "03:14"},
    {songName: "Infinity", coverPath: "../images/Made In The A.M.jpg", artistName: "One Direction", duration: "04:09"},
    {songName: "Perfect", coverPath: "../images/Made In The A.M.jpg", artistName: "One Direction", duration: "03:50"},
    {songName: "If I Could Fly", coverPath: "../images/Made In The A.M.jpg", artistName: "One Direction", duration: "03:50"},
    {songName: "Hey Angel", coverPath: "../images/Made In The A.M.jpg", artistName: "One Direction", duration: "04:00"},
    {songName: "I Want To Write You A Song", coverPath: "../images/Made In The A.M.jpg", artistName: "One Direction", duration: "02:59"},
    {songName: "Walking In The Wind", coverPath: "../images/Made In The A.M.jpg", artistName: "One Direction", duration: "03:22"},
    {songName: "History", coverPath: "../images/Made In The A.M.jpg", artistName: "One Direction", duration: "03:07"},
    {songName: "Olivia", coverPath: "../images/Made In The A.M.jpg", artistName: "One Direction", duration: "02:58"},
    {songName: "Temporary Fix", coverPath: "../images/Made In The A.M.jpg", artistName: "One Direction", duration: "02:55"},
    {songName: "Long Way Down", coverPath: "../images/Made In The A.M.jpg", artistName: "One Direction", duration: "03:12"},
    {songName: "Never Enough", coverPath: "../images/Made In The A.M.jpg", artistName: "One Direction", duration: "03:33"},
]

const filterArea = document.getElementById('filterArea')
const searchBar = document.forms['filterForm'].querySelector('input')
const resultArea = document.getElementById('resultArea')
const container = document.getElementsByClassName('container')
const songName = document.getElementsByClassName('songName')
const songCovers = document.getElementsByClassName('songCovers')
const songInfoName = document.getElementById('songInfoName')
const songInfoImg = document.getElementById('songInfoImg')
const songInfoArtistName = document.getElementById('songInfoArtistName')
const volumeBar = document.getElementById('volumeBar')
const bottomBarPlayPause = document.getElementById('bottomBarPlayPause')
const previous = document.getElementById('previous')
const next = document.getElementById('next')
const title = document.getElementsByTagName('title')
const progressBar = document.getElementById('progressBar')
const audioElement = new Audio(`../songs/${songs[0].songName}.mp3`)
const body = document.querySelector('body')
let songIndex = JSON.parse(localStorage.getItem('BottomBarInfo'))[3]

// Initialise Containers

const searchResult = (index) => {
    // container
    const container = document.createElement('div')
    container.classList.add('container')
    container.id = index;
    resultArea.appendChild(container)
    // songCover
    const songCover = document.createElement('div')
    songCover.classList.add('songCover')
    container.appendChild(songCover)
    const songCovers = document.createElement('img')
    songCovers.src = songs[index].coverPath
    songCovers.alt = 'cover'
    songCovers.classList.add('songCovers')
    songCover.appendChild(songCovers)
    const songPlause = document.createElement('i')
    songPlause.classList.add('material-icons')
    songPlause.classList.add('songPlause')
    songPlause.innerText = 'play_arrow'
    songCover.appendChild(songPlause)
    // songNameAndArtist
    const songName = document.createElement('div')
    songName.classList.add('songName')
    songName.innerHTML = `${songs[index].songName} - <a href="" class="songArtist">${songs[index].artistName}</a>`
    container.appendChild(songName)
    // songDuration
    const songDuration = document.createElement('div')
    songDuration.classList.add('songDuration')
    songDuration.innerText = songs[index].duration
    container.appendChild(songDuration)
}

songs.forEach((element, i) => {
    searchResult(i)
    container[i].style.display = 'none'
})

// Search For Songs

searchBar.addEventListener('keyup', function(e) {
    const term = e.target.value.toLowerCase()
    Array.from(songName).forEach(name => {
        const text = name.textContent
        if (text.toLowerCase().includes(term)) {
            name.parentElement.style.display = 'flex'
        } else {
            name.parentElement.style.display = 'none'
        }
        if (term == '') {
            name.parentElement.style.display = 'none'
        }
    })
})

// Functions

const SaveBottomBarInfo = (songName, songCover, songArtist, songIndex) => {
    BottomBarInfoArray = []
    BottomBarInfoArray.push(songName)
    BottomBarInfoArray.push(songCover)
    BottomBarInfoArray.push(songArtist)
    BottomBarInfoArray.push(songIndex)
    localStorage.setItem('BottomBarInfo', JSON.stringify(BottomBarInfoArray))
}


const check = (songIndex) => {
    for (let i = 0; i < container.length; i++) {
        if (i != songIndex) {
            container[i].style.backgroundColor = 'inherit'
            songCovers[i].style.opacity = 1
            songPlause[i].classList.remove('iconPause')
            container[i].onmouseover = () => {
                songCovers[i].style.opacity = 0.5
                songPlause[i].innerText = 'play_arrow'
            }
            container[i].onmouseleave = () => {
                songCovers[i].style.opacity = 1
                songPlause[i].innerText = 'pause'
            }
        }
    }
}

const bottomBarPlayPauseFunc = () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        bottomBarPlayPause.innerText = 'pause_circle_filled'
        audioElement.play()
        title.innerText = `${songInfoName.innerText} - ${songInfoArtistName.innerText}`
    } else {
        bottomBarPlayPause.innerText = 'play_circle_filled'
        audioElement.pause()
    }
}

const nextFunc = () => {
    if (songIndex >= 47) {
        songIndex = 0
    } else {
        songIndex ++
    }
    audioElement.src = `../songs/${songs[songIndex].songName}.mp3`
    audioElement.currentTime = 0
    audioElement.play()
    songInfoName.innerText = songs[songIndex].songName
    songInfoImg.src = songs[songIndex].coverPath
    songInfoArtistName.innerText = songs[songIndex].artistName
    bottomBarPlayPause.innerText = 'pause_circle_filled'
    title.innerText = `${songs[songIndex].songName} - ${songInfoArtistName.innerText}`
}

const previousFunc = () => {
    if (songIndex <= 0) {
        songIndex = 47
    } else {
        songIndex --
    }
    audioElement.src = `../songs/${songs[songIndex].songName}.mp3`
    audioElement.currentTime = 0
    audioElement.play()
    songInfoName.innerText = songs[songIndex].songName
    songInfoImg.src = songs[songIndex].coverPath
    songInfoArtistName.innerText = songs[songIndex].artistName
    bottomBarPlayPause.innerText = 'pause_circle_filled'
    title.innerText = `${songs[songIndex].songName} - ${songInfoArtistName.innerText}`
}

// Play Songs After Search

const songPlause = Array.from(document.getElementsByClassName('songPlause'))
songPlause.forEach((element, i) => {
    element.onclick = () => {
        if (element.innerText == 'play_arrow') {
            songCovers[i].style.opacity = 0.5
            element.innerText = 'pause'
            container[i].style.backgroundColor = 'rgba(18,18,18,0.8)'
            container[i].onmouseleave = () => {
                container[i].style.backgroundColor = 'rgba(18,18,18,0.8)'
                element.classList.add('iconPause')
                element.innerText = 'pause'
            }
            container[i].onmouseover = () => {return}
            audioElement.src = `../songs/${songs[i].songName}.mp3`
            audioElement.play()
            songInfoName.innerText = songs[i].songName
            songInfoImg.src = songs[i].coverPath
            songInfoArtistName.innerText = songs[i].artistName
            bottomBarPlayPause.innerText = 'pause_circle_filled'
        } else if (element.innerText == 'pause') {
            element.innerText = 'play_arrow'
            bottomBarPlayPause.innerText = 'play_circle_filled'
            audioElement.pause
            audioElement.currentTime = 0
            setTimeout(() => {
                element.innerText = 'pause'
                bottomBarPlayPause.innerText = 'pause_circle_filled'
                audioElement.play()
            }, 50);
        }
        songIndex = i
        SaveBottomBarInfo(songInfoName.innerText, songInfoImg.src, songInfoArtistName.innerText, i)
        check(songIndex)
    }
})

// Search Bar On Focus

let keyboardFocus

searchBar.addEventListener('focusin', () => {
    keyboardFocus = true
})

searchBar.addEventListener('focusout', () => {
    keyboardFocus = false
})

// Progress Bar

audioElement.ontimeupdate = () => {
    let progress = parseInt((audioElement.currentTime/audioElement.duration) * 100)
    progressBar.value = progress
}

progressBar.onchange = () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100
}

// Event Listening

audioElement.onended = () => nextFunc()

bottomBarPlayPause.onclick = () => bottomBarPlayPauseFunc()
document.addEventListener('keyup', (e) => {
    if (e.code === 'Space' && keyboardFocus != true) {
        bottomBarPlayPauseFunc()
    }
})
document.addEventListener('keyup', (e) => {
    if (e.key === 'k' && keyboardFocus != true) {
        bottomBarPlayPauseFunc()
    }
})

next.onclick = () => nextFunc()
document.addEventListener('keyup', (e) => {
    if (e.key === 'l' && keyboardFocus != true) {
        nextFunc()
    }
})

previous.onclick = () => previousFunc()
document.addEventListener('keyup', (e) => {
    if (e.key === 'j' && keyboardFocus != true) {
        previousFunc()
    }
})