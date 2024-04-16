var tabElm = [];
var nbElm = 2;

var main = () => {

	console.log("TABLEAU");

	

	var obj = {
		name : "Lebouseuh ft Inox",
		author : "Pince",
		file : "PIDI-_Ca_va_aller_Clip_Officiel.mp3",
		img : "pidi.jpg"
	};

	tabElm.push(obj);

	var obj = {
		name : "Inoxtag ft Kazey",
		author : "Funkinox",
		file : "PIDI-_Ca_va_aller_Clip_Officiel.mp3",
		img : "inox.webp"
	}

	tabElm.push(obj);

	var obj = {
		name : "LeBouseuh feat pidi",
		author : "Les boss",
		file : "PIDI-_Ca_va_aller_Clip_Officiel.mp3",
		img : "lebousepidi.webp"
	}

	tabElm.push(obj);

	console.log(tabElm);

	localStorage.setItem('str', JSON.stringify(tabElm));

	// Récupère ton tableau :
	var tableau = JSON.parse(localStorage.getItem('str'));

	console.log(tableau[0].img);

	// Ajoute les élements du tableau
	for (let i=0; i < tableau.length; i++)
	{
		const musiquesContainer = document.querySelector('.content-musique');

		musiquesContainer.appendChild(document.createElement('br'));

		// Création d'un nouvel élément div pour la musique
		const nouvelleMusique = document.createElement('div');
		nouvelleMusique.classList.add('music');

		// Création de l'élément image
		const imgElement = document.createElement('img');
		imgElement.setAttribute('src', "./images/" + tableau[i].img);
		imgElement.setAttribute('height', '100');
		imgElement.setAttribute('width', '100');

		// Création de l'élément div pour les informations de la musique
		const infosDiv = document.createElement('div');
		infosDiv.classList.add('infos');

		// Création de l'élément paragraphe pour le nom de l'artiste
		const youtubeurPara = document.createElement('p');
		youtubeurPara.classList.add('Youtubeur');
		youtubeurPara.textContent = tableau[i].name;

		// Création de l'élément paragraphe pour le titre de la musique
		const titrePara = document.createElement('p');
		titrePara.classList.add('Titre');
		titrePara.textContent = tableau[i].author;

		// Ajout des éléments dans leur parent respectif
		infosDiv.appendChild(youtubeurPara);
		infosDiv.appendChild(titrePara);
		nouvelleMusique.appendChild(imgElement);
		nouvelleMusique.appendChild(infosDiv);

		// Ajout de la nouvelle musique à la liste des musiques
		musiquesContainer.appendChild(nouvelleMusique);
	}

}

const premiumLink = document.getElementById('test');
var audioElement;
var imageElement;


document.getElementById('music-upload').addEventListener('change', function(e) {
	var file = e.target.files[0];
	var reader = new FileReader();

	reader.onload = function(e) {
		audioElement = file.name;
		// Vous pouvez maintenant utiliser audioElement pour lire le fichier audio
		// Par exemple, pour le lire immédiatement :

		// Récupérer le nom du fichier audio
		const nomFichierAudio = file.name;
		console.log("Nom du fichier audio:", nomFichierAudio);
	};

	reader.readAsDataURL(file);
});


document.getElementById('image-upload').addEventListener('change', function(e) {

	var file = e.target.files[0];
	var reader = new FileReader();

	reader.onload = function(e) {
		imageElement = file.name;
	};

	reader.readAsDataURL(file);
});

document.getElementById('Ajouter-musique').addEventListener('click', function(event) {
	// Empêcher le comportement par défaut du lien (par exemple, la redirection)
	event.preventDefault();
	// Votre code ici...
	localStorage.setItem('str', JSON.stringify(tabElm));
	var tableau = JSON.parse(localStorage.getItem('str'));

	var obj ={
		name : audioElement,
		author : "",
		file : audioElement,
		img : imageElement
	}

	tabElm.push(obj);
	nbElm++;
	ajoutMusic();
});

function ajoutMusic() {

	localStorage.setItem('str', JSON.stringify(tabElm));
	var tableau = JSON.parse(localStorage.getItem('str'));
	console.log(tableau);
	console.log(tabElm);
	console.log("test fin");
	console.log(tableau[nbElm]);
	const musiquesContainer = document.querySelector('.content-musique');

	musiquesContainer.appendChild(document.createElement('br'));

	// Création d'un nouvel élément div pour la musique
	const nouvelleMusique = document.createElement('div');
	nouvelleMusique.classList.add('music');

	// Création de l'élément image
	const imgElement = document.createElement('img');
	imgElement.setAttribute('src', "./images/" + tableau[nbElm].img);
	imgElement.setAttribute('height', '100');
	imgElement.setAttribute('width', '100');

	// Création de l'élément div pour les informations de la musique
	const infosDiv = document.createElement('div');
	infosDiv.classList.add('infos');

	// Création de l'élément paragraphe pour le nom de l'artiste
	const youtubeurPara = document.createElement('p');
	youtubeurPara.classList.add('Youtubeur');
	if (tableau[nbElm].name.length < 20)
	{
		youtubeurPara.textContent = tableau[nbElm].name;
	}
	else
	{
		youtubeurPara.textContent = formatString(tableau[nbElm].name, 20) + "...";
	}

	// Création de l'élément paragraphe pour le titre de la musique
	const titrePara = document.createElement('p');
	titrePara.classList.add('Titre');
	titrePara.textContent = tableau[nbElm].author;

	// Ajout des éléments dans leur parent respectif
	infosDiv.appendChild(youtubeurPara);
	infosDiv.appendChild(titrePara);
	nouvelleMusique.appendChild(imgElement);
	nouvelleMusique.appendChild(infosDiv);

	// Ajout de la nouvelle musique à la liste des musiques
	musiquesContainer.appendChild(nouvelleMusique);
}


function formatString(input, maxLength) {
    if (input.length <= maxLength) {
        return input;
    } else {
        return input.substring(0, maxLength);
    }
}






// Style









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


