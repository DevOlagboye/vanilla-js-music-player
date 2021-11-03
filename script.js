//Let's Bring in all we need to bring in from the DOM
//Music-Container
const musicContainer = document.querySelector(".music-container");
//PlayBtn
const playBtn = document.querySelector("#play");
//PrevBtn
const prevBtn = document.querySelector("#prev");
//NextBtn
const nextBtn = document.querySelector("#next");
//RandomBtn
const randomBtn = document.querySelector("#random");
//Audio
const audio = document.querySelector("#audio");
//Progress
const progress = document.querySelector(".progress");
//Progress-Container
const progressContainer = document.querySelector(".progress-container");
//Song Title
const title = document.querySelector("#title");
//Song Duration
const songDuration = document.querySelector("#duration");
//Song Image
const cover = document.querySelector("#cover");

//Song Titles in an Array, it must match the name of the songs stored in the music folder

const songs = [
    "hey",
    "summer",
    "ukulele",
    "skeletun",
    "sinner",
    "high",
    "bounce",
    "understand",
];

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
    //Let's play the song with the audio tag API .play
    audio.play();
};

//Creating the pauseSong Function

let pauseSong = () => {
    musicContainer.classList.remove("play");
    playBtn.querySelector("i.fas").classList.remove("fa-pause");
    playBtn.querySelector("i.fas").classList.add("fa-play");

    //Let's pause the song with the audio tag API .pause
    audio.pause();
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

//Proceeding to the previous and Next button

//Previous Button
let prevSong = () => {
    //Decreasing the songIndex by one to get to the previous song
    songIndex--;
    //Checking if the songIndex is less than 0
    if (songIndex < 0) {
        //Changing the songIndex to start from begining once the songIndex is less than 0
        songIndex = songs.length - 1;
    }
    //Then Loaded the song back with the current songIndex
    loadSong(songs[songIndex]);
    //Playing the Song
    playSong();
};

prevBtn.addEventListener("click", prevSong);

let nextSong = () => {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
};
nextBtn.addEventListener("click", nextSong);

//Now ProgressBar of the audio, Because up till now the Progress Bar is not working yet

//updateProgress will take in an event object on this event object we can get the duration of the song, and the currentime
let updateProgress = (e) => {
    //From the srcElement let's deconstruct the duration and the currentTime
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;

    //Thinking of Getting the Total Duration too outside
    //Then Let's set the width of the Progressbar to whatever the progressPercent is
    progress.style.width = `${progressPercent}%`;
};
//Time update is an event that comes with the Html5 audio tag which is constantly run evertime an audio is playing and here on time update we want it to listen to a function updateProgress
audio.addEventListener("timeupdate", updateProgress);

//Now let's add being able to click on any area in the progressContainer to fastforward the song or backward the song

let setProgress = (e) => {
    //This will get the width of progressContainer
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
};
progressContainer.addEventListener("click", setProgress);

//The Last thing we want it to be when the song ends it should go to the next song
//The audio API gives us an event called "ended" i.e what happens when the song ends
//Since we already have a nextSong function created which is to play the next song we can easily add that
audio.addEventListener("ended", nextSong);

let randomFunc = () => {
    let randomNumber = Math.floor(Math.random() * songs.length);
    //console.log(randomNumber);
    songIndex = randomNumber;
    loadSong(songs[songIndex]);
    playSong();
};
randomBtn.addEventListener("click", randomFunc);

//Doing Some Testings with Toggle Learnt

// let inputDiv = document.querySelector("#inputdiv");
// let input = document.querySelector("#input");
// let eye = document.querySelector("#eye");

// let hideEye = () => {
//     inputDiv.classList.remove("clicked");
//     eye.classList.add("fa-eye");
//     eye.classList.remove("fa-eye-slash");
//     input.setAttribute("type", "password");
// };

// let showEye = () => {
//     inputDiv.classList.add("clicked");
//     eye.classList.add("fa-eye-slash");
//     eye.classList.remove("fa-eye");
//     input.setAttribute("type", "text");
// };

// eye.addEventListener("click", () => {
//     const isClicked = inputDiv.classList.contains("clicked");
//     if (isClicked) {
//         hideEye();
//     } else {
//         showEye();
//     }
// });

// const btnT = document.querySelector("#menu-toggle");
// const iconT = document.querySelector("#bars");

// let hideT = () => {
//     btnT.classList.add("clicked");
//     iconT.classList.add("fa-times");
//     iconT.classList.remove("fa-bars");
// };

// let showT = () => {
//     btnT.classList.remove("clicked");
//     iconT.classList.add("fa-bars");
//     iconT.classList.remove("fa-times");
// };

// iconT.addEventListener("click", () => {
//     const tClicked = btnT.classList.contains("clicked");
//     if (tClicked) {
//         showT();
//     } else {
//         hideT();
//     }
// });