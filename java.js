var audio = document.getElementById("my-audio");
var playPauseButton = document.getElementById("play-pause-button");


playPauseButton.onclick = function() {
  if (audio.paused) {
    audio.play();
    playPauseButton.innerHTML = "Stop";
  } else {
    audio.pause();
    playPauseButton.innerHTML = "Play";
  }
};



var audio1 = document.getElementById("audio-ma");
var playPauseButton = document.getElementById("boton-ma");

playPauseButton.onclick = function() {
  if (audio1.paused) {
    audio1.play();
    playPauseButton.innerHTML = "Stop";
  } else {
    audio1.pause();
    playPauseButton.innerHTML = "Play";
  }
};



var audio2 = document.getElementById("audio-thi");
var playPauseButton = document.getElementById("boton-thi");

playPauseButton.onclick = function() {
  if (audio2.paused) {
    audio2.play();
    playPauseButton.innerHTML = "Stop";
  } else {
    audio2.pause();
    playPauseButton.innerHTML = "Play";
  }
};