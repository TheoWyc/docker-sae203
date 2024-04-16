document.getElementById("download-michou").addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = 'music.zip/Michou_-_My_Life_Clip_Officiel.zip';
    link.download = 'Michou_-_My_Life_Clip_Officiel.mp3'; 
    link.target="_blank";
    link.style.display = 'none';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
    alert("téléchargement à commencé");
});

document.getElementById("download-gmt").addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = 'music.zip/GMT_-_Toujours_Le_Meme_Clip_Officiel.zip';
    link.download = 'GMT_-_Toujours_Le_Meme_Clip_Officiel.mp3'; 
    link.target="_blank";
    link.style.display = 'none';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
    alert("téléchargement à commencé");
});

document.getElementById("download-pidi").addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = 'music.zip/PIDI-_Ca_va_aller_Clip_Officiel.zip';
    link.download = 'PIDI-_Ca_va_aller_Clip_Officiel.mp3'; 
    link.target="_blank";
    link.style.display = 'none';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
    alert("téléchargement à commencé");
});

//audio 

var audioElement = document.getElementById('my-audio');
var volumeBar = document.getElementById('volume-bar');

audioElement.addEventListener('volumechange', function() {
    volumeBar.style.width = (audioElement.volume * 100) + '%';
});

var audioElement = document.getElementById('my-audio');
var progressBar = document.getElementById('progress-bar');

audioElement.addEventListener('timeupdate', function() {
    var percentage = (audioElement.currentTime / audioElement.duration) * 100;
    progressBar.style.width = percentage + '%';
});

function playAudio() {
    var audioElement = document.getElementById('my-audio');
    audioElement.play();
}

function pauseAudio() {
    var audioElement = document.getElementById('my-audio');
    audioElement.pause();
}

var progressBarContainer = document.getElementById('volume-bar-container');

progressBarContainer.addEventListener('click', function(e) {
    var rect = this.getBoundingClientRect();
    var clickPositionInElement = e.clientX - rect.left;
    var elementWidth = this.offsetWidth;
    var clickPositionRatio = clickPositionInElement / elementWidth;
    var audioElement = document.getElementById('my-audio');
    audioElement.currentTime = clickPositionRatio * audioElement.duration;
});


// Michou
var michouAudioElement = document.getElementById('my-audio');
var michouVolumeBar = document.getElementById('volume-bar');
var michouProgressBar = document.getElementById('progress-bar');
var michouProgressBarContainer = document.getElementById('volume-bar-container');

michouAudioElement.addEventListener('volumechange', function() {
    michouVolumeBar.style.width = (michouAudioElement.volume * 100) + '%';
});

michouAudioElement.addEventListener('timeupdate', function() {
    var percentage = (michouAudioElement.currentTime / michouAudioElement.duration) * 100;
    michouProgressBar.style.width = percentage + '%';
});

function playMichouAudio() {
    michouAudioElement.play();
}

function pauseMichouAudio() {
    michouAudioElement.pause();
}

michouProgressBarContainer.addEventListener('click', function(e) {
    var rect = this.getBoundingClientRect();
    var clickPositionInElement = e.clientX - rect.left;
    var elementWidth = this.offsetWidth;
    var clickPositionRatio = clickPositionInElement / elementWidth;
    michouAudioElement.currentTime = clickPositionRatio * michouAudioElement.duration;
});

// GMT
var gmtAudioElement = document.getElementById('gmt-audio');
var gmtVolumeBar = document.getElementById('gmt-volume-bar');
var gmtProgressBar = document.getElementById('gmt-progress-bar');
var gmtProgressBarContainer = document.getElementById('gmt-volume-bar-container');

gmtAudioElement.addEventListener('volumechange', function() {
    gmtVolumeBar.style.width = (gmtAudioElement.volume * 100) + '%';
});

gmtAudioElement.addEventListener('timeupdate', function() {
    var percentage = (gmtAudioElement.currentTime / gmtAudioElement.duration) * 100;
    gmtProgressBar.style.width = percentage + '%';
});

function playGmtAudio() {
    gmtAudioElement.play();
}

function pauseGmtAudio() {
    gmtAudioElement.pause();
}

gmtProgressBarContainer.addEventListener('click', function(e) {
    var rect = this.getBoundingClientRect();
    var clickPositionInElement = e.clientX - rect.left;
    var elementWidth = this.offsetWidth;
    var clickPositionRatio = clickPositionInElement / elementWidth;
    gmtAudioElement.currentTime = clickPositionRatio * gmtAudioElement.duration;
});

// Pidi
var pidiAudioElement = document.getElementById('pidi-audio');
var pidiVolumeBar = document.getElementById('pidi-volume-bar');
var pidiProgressBar = document.getElementById('pidi-progress-bar');
var pidiProgressBarContainer = document.getElementById('pidi-volume-bar-container');

pidiAudioElement.addEventListener('volumechange', function() {
    pidiVolumeBar.style.width = (pidiAudioElement.volume * 100) + '%';
});

pidiAudioElement.addEventListener('timeupdate', function() {
    var percentage = (pidiAudioElement.currentTime / pidiAudioElement.duration) * 100;
    pidiProgressBar.style.width = percentage + '%';
});

function playPidiAudio() {
    pidiAudioElement.play();
}

function pausePidiAudio() {
    pidiAudioElement.pause();
}

pidiProgressBarContainer.addEventListener('click', function(e) {
    var rect = this.getBoundingClientRect();
    var clickPositionInElement = e.clientX - rect.left;
    var elementWidth = this.offsetWidth;
    var clickPositionRatio = clickPositionInElement / elementWidth;
    pidiAudioElement.currentTime = clickPositionRatio * pidiAudioElement.duration;
});

