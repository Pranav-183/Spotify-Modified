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

function searchResult(index) {
    // container
    const container = document.createElement('div')
    container.classList.add('container')
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

/* <div class="container">
        <div class="songCover">
            <img src="../images/Up All Night.jpg" alt="cover" class="songCovers">
            <i class="material-icons songPlause">play_arrow</i>
        </div>
        <div class="songName">
            Stole My Heart - 
            <a href="" class="songArtist">One Direction</a>
        </div>
        <div class="songDuration">03:23</div>
    </div> */

songs.forEach((element, i) => {
    searchResult(i)
    // container[i].style.display = 'none'
})