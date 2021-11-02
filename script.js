//Let's Bring in all we need to bring in from the DOM
//Music-Container
const musicContainer = document.querySelector(".music-container");
//PlayBtn
const playBtn = document.querySelector("#play");
//PrevBtn
const prevBtn = document.querySelector("#prev");
//NextBtn
const nextBtn = document.querySelector("#next");
//Audio
const audio = document.querySelector("#audio");
//Progress
const progress = document.querySelector(".progress");
//Progress-Container
const progressContainer = document.querySelector(".progress-container");
//Song Title
const title = document.querySelector("#title");
//Song Image
const cover = document.querySelector("#cover");

//Song Titles in an Array, it must match the name of the songs stored in the music folder

const songs = ["hey", "summer", "ukulele"];

//Keeping Tracks of the Songs
//This means we have 3 songs in the array making it 0,1,2 it must be updated when songs are updated
let songIndex = 2;

//Let's Update Song Details
let loadSong = (song) => {
    //Here we fill in the information we want to update which are the title, actuall audio source and the image source

    //Make sure Song Name and Images matches well
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
};

//Let's Load the songs into the DOM
loadSong(songs[songIndex]);

//Event Listeners

//Creating the playSong function

let playSong = () => {
    musicContainer.classList.add("play");
    playBtn.querySelector("i.fas").classList.remove("fa-play");
    playBtn.querySelector("i.fas").classList.add("fa-pause");
};

//Creating the pauseSong Function

let pauseSong = () => {
    musicContainer.classList.remove("play");
    playBtn.querySelector("i.fas").classList.remove("fa-pause");
    playBtn.querySelector("i.fas").classList.add("fa-play");
};

//Creating the Pause and Play Toggle
playBtn.addEventListener("click", () => {
    const isPlaying = musicContainer.classList.contains("play");
    //if it is playing
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

let inputDiv = document.querySelector("#inputdiv");
let input = document.querySelector("#input");
let eye = document.querySelector("#eye");

let hideEye = () => {
    inputDiv.classList.remove("clicked");
    eye.classList.add("fa-eye");
    eye.classList.remove("fa-eye-slash");
    input.setAttribute("type", "password");
};

let showEye = () => {
    inputDiv.classList.add("clicked");
    eye.classList.add("fa-eye-slash");
    eye.classList.remove("fa-eye");
    input.setAttribute("type", "text");
};

eye.addEventListener("click", () => {
    const isClicked = inputDiv.classList.contains("clicked");
    if (isClicked) {
        hideEye();
    } else {
        showEye();
    }
});

const btnT = document.querySelector("#menu-toggle");
const iconT = document.querySelector("#bars");

let hideT = () => {
    btnT.classList.add("clicked");
    iconT.classList.add("fa-times");
    iconT.classList.remove("fa-bars");
};

let showT = () => {
    btnT.classList.remove("clicked");
    iconT.classList.add("fa-bars");
    iconT.classList.remove("fa-times");
};

iconT.addEventListener("click", () => {
    const tClicked = btnT.classList.contains("clicked");
    if (tClicked) {
        showT();
    } else {
        hideT();
    }
});