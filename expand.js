const expandAlbums = document.getElementById('expandAlbums');
const expandOneD = document.getElementById('expandOneD');
const expandPlaylists = document.getElementById('expandPlaylists');
const expandOthers = document.getElementById('expandOthers');
const expandMicrosoft = document.getElementById('expandMicrosoft');
const expandSchool = document.getElementById('expandSchool');
const expandMovies = document.getElementById('expandMovies');
const albums = document.getElementById('albums');
const playlists = document.getElementById('playlists');
const others = document.getElementById('others');
const microsoft = document.getElementById('microsoft');
const school = document.getElementById('school');
const movies = document.getElementById('movies');
const AlbumArtistDrop = document.getElementById('AlbumArtistDrop');
const albumList = document.getElementById('albumList');
const playListList = document.getElementById('playListList');
const othersList = document.getElementById('othersList');
const microsoftList = document.getElementById('microsoftList');
const schoolList = document.getElementById('schoolList');
const moviesList = document.getElementById('moviesList');

expandAlbums.onclick = () => {
    if (albums.style.height == '70px' || albums.style.height == '230px') {
        albums.style.height = '40px';
        expandAlbums.innerText = 'expand_more';
        AlbumArtistDrop.style.display = 'none';
        albumList.style.display = 'none';
    } else {
        albums.style.height = '70px';
        expandAlbums.innerText = 'expand_less';
        setTimeout(() => {
            AlbumArtistDrop.style.display = 'block';
        }, 100);
    }
}

expandOneD.onclick = () => {
    if (albums.style.height == '70px') {
        albums.style.height = '230px';
        expandOneD.innerText = 'expand_less';
        setTimeout(() => {
            albumList.style.display = 'block';
        }, 100);
    } else {
        albums.style.height = '70px';
        expandOneD.innerText = 'expand_more';
        albumList.style.display = 'none';
    }
}

expandPlaylists.onclick = () => {
    if (playlists.style.height == '145px') {
        playlists.style.height = '40px';
        expandPlaylists.innerText = 'expand_more';
        playListList.style.display = 'none';
    } else {
        playlists.style.height = '145px';
        expandPlaylists.innerText = 'expand_less';
        setTimeout(() => {
            playListList.style.display = 'block';
        }, 100);
    }
}

expandOthers.onclick = () => {
    if (others.style.height == '170px') {
        others.style.height = '40px';
        expandOthers.innerText = 'expand_more';
        othersList.style.display = 'none';
        microsoft.style.height = '32px';
        microsoftList.style.display = 'none';
        expandMicrosoft.innerText = 'expand_more';
        school.style.height = '32px';
        schoolList.style.display = 'none';
        expandSchool.innerText = 'expand_more';
        movies.style.height = '32px';
        moviesList.style.display = 'none';
        expandMovies.innerText = 'expand_more';
    } else {
        others.style.height = '170px';
        expandOthers.innerText = 'expand_less';
        setTimeout(() => {
            othersList.style.display = 'block';
        }, 110);
    }
}

expandMicrosoft.onclick = () => {
    if (expandMicrosoft.innerText == 'expand_more') {
        microsoft.style.height = '150px';
        expandMicrosoft.innerText = 'expand_less';
        setTimeout(() => {
            microsoftList.style.display = 'block';
        }, 130);
    } else {
        microsoft.style.height = '32px';
        expandMicrosoft.innerText = 'expand_more';
        microsoftList.style.display = 'none';
    }
}

expandSchool.onclick = () => {
    if (expandSchool.innerText == 'expand_more') {
        school.style.height = '95px';
        expandSchool.innerText = 'expand_less';
        setTimeout(() => {
            schoolList.style.display = 'block';
        }, 100);
    } else {
        school.style.height = '32px';
        expandSchool.innerText = 'expand_more';
        schoolList.style.display = 'none';
    }
}

expandMovies.onclick = () => {
    if (expandMovies.innerText == 'expand_more') {
        movies.style.height = '122px';
        expandMovies.innerText = 'expand_less';
        setTimeout(() => {
            moviesList.style.display = 'block';
        }, 100);
    } else {
        movies.style.height = '32px';
        expandMovies.innerText = 'expand_more';
        moviesList.style.display = 'none';
    }
}