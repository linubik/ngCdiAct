//////////////////////////////////////////////////////////////////////////////////////////////
//CDIACt : Denis Weiss, février 2023, BY-NC-ND
//https://emi.re/CDIAct-V2/
//Contact : weiss.denis@gmail.com
//////////////////////////////////////////////////////////////////////////////////////////////

/**
 * CHARGEMENT DES DONNEES STOCKEES EN LOCALSTORAGE
 * objActPW => hash du pw
 * objActNM => Nom de l'établissement
 * objActEM => Elèves =>{ "em": "Mouss Tique", "cl": "LLL", "id": "1" }
 * CDIActStats =>Stats =>6;1670845945;3335,1;1670902370;3873
 */

//init

$("#cont").hide();
$("#gestionSup").hide();

let timeOutInst; //temporisation des fonctions de tests
let empTemp = JSON.stringify(emprunteurs);

/**
 * Ajout du nom de l'établissement s'il existe, sinon rappel que ce n'est pas le cas : [Etablissement]
 */

if (localStorage.getItem("objActNM") !== null) {
	document.getElementById("titre").innerHTML = localStorage.getItem("objActNM");
} else {
	document.getElementById("titre").innerHTML = "[Etablissement]";
}

/**
 * Test du mot de passe, en démo c'est démo, sinon hash MD5 du mot de passe saisi
 * Redirige vers index.html en cas de 3 mauvais PW
 */
let initNbPw = 0;

$("#btnPW").on("click", function () {
	validePW();
});

$(document).keypress(function (event) {
	var keycode = event.keyCode ? event.keyCode : event.which;
	if (keycode == "13") {
		alert("Veuillez cliquer sur le bouton 'valider' ! ");
	}
});

function validePW() {
	let passwordSaisi = document.getElementById("passwordInput").value;
	passwordSaisi = md5(passwordSaisi);
	console.log(passwordSaisi);

	//let passwordTest = localStorage.getItem("objActPW");

	//passwordHashe = "11caab0a0736c93f5ad775fdc39f8728"; //démo
	if (passwordSaisi != null) {
		if (passwordSaisi == "11caab0a0736c93f5ad775fdc39f8728") {
			$("#gestionPW").hide();
			$("#cont").show("slow");
		} else {
			initNbPw++;
			alert("Problème de mot de passe, 3 essais en tout !");
			if (initNbPw == 3) {
				location.href = "../index.html";
			}
		}
	}
}

/**
 * Installation
 * Test de fonctionnement de locastorage => test =>infos
 * Init de lolastorage : localStorage.clear();
 * objActPW => ajout du hash du pw => test =>infos
 * objActNM => ajout du nom de l'établissement => test =>infos
 * objActEM => ajout des élèves =>{ "em": "Mouss Tique", "cl": "LLL", "id": "1" } => test =>infos
 */
//test du fonctionnement de localhost

function testStorage() {
	let test00 = localStorage.setItem("yoTest", "YoTest geht sooh!");

	if (localStorage.getItem("yoTest") !== null) {
		localStorage.clear();
		document.getElementById("debug").innerHTML =
			"Tout est OK, local storage fonctionne&nbsp;! ";
	} else {
		document.getElementById("debug").innerHTML =
			"<div class='error'>problème de compatibilité de locastorage</div>";
		return false;
	}
	timeOutInst = setTimeout(instConfig, 500);
}

//Installation de la configuration : hash du mot de passe et nom de l'établissement
function instConfig() {
	let test01 = localStorage.setItem("objActPW", pwMD);

	if (localStorage.getItem("objActPW") !== null) {
		document.getElementById("debug").innerHTML =
			"Mot de passe ajouté&nbsp;!<br>";
	} else {
		document.getElementById("debug").innerHTML =
			"<div class='error'>problème de mot de passe</div>";
		return false;
	}

	let test02 = localStorage.setItem("objActNM", etabNM);
	if (localStorage.getItem("objActNM") !== null) {
		document.getElementById("debug").innerHTML =
			"Nom de l'établissement ajouté&nbsp;!<br>";
	} else {
		document.getElementById("debug").innerHTML =
			"<div class='error'>problème de nom de l'établissement</div>";
		return false;
	}

	timeOutInst = setTimeout(instEmp, 1000);
}

//Installation des emprunteurs
function instEmp() {
	let test03 = localStorage.setItem("objActEM", empTemp);

	if (localStorage.getItem("objActEM") !== null) {
		document.getElementById("debug").innerHTML =
			"Ajout des élèves effectué&nbsp;!<br>";
	} else {
		document.getElementById("debug").innerHTML =
			"<div class='error'>problème d'ajout des élèves'</div>";
		return false;
	}
	timeOutInst = setTimeout(loadGraphisme, 1500);
}

//Fin d'installation, coche OK
function loadGraphisme() {
	document.getElementById("debug").innerHTML =
		"<div class='catchOK'>✅ installation réussie</div>";
}

//On ajoute la configuration avec des pauses de 1/2 s
$("#btnAjouteConf").on("click", function (e) {
	e.preventDefault();
	testStorage();
});

/** 
//Fin partie installation
//objActPW => hash du pw
//objActNM => Nom de l'établissement
//objActEM => Elèves =>{ "em": "Mouss Tique", "cl": "LLL", "id": "1" }
*/
/**
 * Traitement des boutons :
 * #btnInfos
 * - Choix et vérification du nom et du format de cartes.csv
 * - btnVoirStats => affiche
 * - Nom => objActNM
 * - Mot de passe => si non vide
 * - Stats => CDIActStats => tempDatas : Nombre d'enregistrements et début des données
 *
 * #btnVideStats
 * - Vide CDIActStats
 * - Affiche "Statistiques vides";
 *
 * #btnCopie
 * - Copie les données de txtCopie vers le presse papier
 * - Remplace le texte du bouton par "texte copié!"
 *
 * #btnRestaure
 * - Vérifie qu'il y a des données
 * - Vide CDIActStats
 * - Ajoute les stats collées dans $("#txtRestaure")
 */

$("#btnInfos").on("click", function () {
	//const tempStats = JSON.parse(localStorage.getItem("CDIActStats"));
	//const tempStats = JSON.stringify(localStorage.getItem("CDIActStats"));

	//Personnalisation du nom de l'établissement
	if (localStorage.getItem("objActNM") !== null) {
		document.getElementById("infos").innerHTML =
			"Nom : " + localStorage.getItem("objActNM") + "\n";
	} else {
		document.getElementById("infos").innerHTML =
			"Etablissement nom renseigné !\n";
	}

	//Mot de passe
	if (localStorage.getItem("objActPW") !== null) {
		document.getElementById("infos").innerHTML +=
			"Mot de passe renseigné " + "\n";
	} else {
		document.getElementById("infos").innerHTML +=
			"Etablissement nom renseigné !\n";
	}

	//Emprunteurs
	if (localStorage.getItem("objActEM") !== null) {
		document.getElementById("infos").innerHTML += "Emprunteurs ajoutés " + "\n";
		//document.getElementById("infos").innerHTML += JSON.stringify(
		localStorage.getItem("objActEM");
	} else {
		document.getElementById("infos").innerHTML +=
			"Pas de données emprunteurs !\n";
	}

	//datas

	if (localStorage.getItem("CDIActStats") !== null) {
		let tempDatas = localStorage.getItem("CDIActStats");
		document.getElementById("infos").innerHTML +=
			"Nombre d'enregistrements : " + tempDatas.length + "\n";

		tempDatas = tempDatas.substr(0, 60);
		document.getElementById("infos").innerHTML +=
			"début des données : " + tempDatas + "\n";
	} else {
		document.getElementById("infos").innerHTML +=
			"Pas de statistiques disponibles" + "\n";
	}
});

$("#btnVideStats").on("click", function () {
	//localStorage.removeItem("CDIActStats");
	localStorage.clear();
	document.getElementById("debug3").innerHTML = "Statistiques vides";
});

/**
 * Partie sauvegarde restauration
 * S'il n'y a pas de stats on informe via txtCopie
 */

// Init :
let tempDataSauve;
//S'il y a des stats on affiche le reste de la page de gestion
if (localStorage.getItem("CDIActStats") !== null) {
	tempDataSauve = localStorage.getItem("CDIActStats");
	document.getElementById("txtCopie").innerHTML += tempDataSauve;
	$("#gestionSup").show();
} else {
	document.getElementById("txtCopie").innerHTML +=
		"Pas de statistiques disponibles" + "\n";
}

$("#btnCopie").on("click", function () {
	navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
		if (result.state == "granted" || result.state == "prompt") {
			navigator.clipboard.writeText(tempDataSauve);
		}
	});
	document.getElementById("btnCopie").innerHTML = "Données copiées&nbsp;!";
	$("#txtCopie").hide("slow");
});

//récupération du contenu de #txtRestaure
//suppression des caractères interdits (uniquement chiffres ; et , pas d'espace)

function nettoyage(str) {
	let sortie = str.replace(/ /g, "");

	//On supprime les lettres simple
	const regexLettres = /[a-zA-Z]/gi;

	//On supprime les lettres accentuées
	const regexLettresA =
		/[áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ/]/gi;

	//On supprime les caractères spéciaux sauf les  ; et ,
	const regexLettresS = /[²é~"#'{([-|è`_ç@à@)=}<->:!€¨$¤ù%*µ?.§}&/]/gi;

	sortie = sortie.replace(regexLettres, "");
	sortie = sortie.replace(regexLettresA, "");
	sortie = sortie.replace(regexLettresS, "");
	console.log(sortie);
	return sortie;
}

$("#btnRestaure").on("click", function () {
	let tempRestaure = $("#txtRestaure").val();
	nettoyage(tempRestaure);
	if (tempRestaure.length < 12) {
		alert("Problème de données !");
		return;
	} else {
		localStorage.removeItem("CDIActStats");
		localStorage.setItem("CDIActStats", tempRestaure);
		$("#txtRestaure").val(
			"Statistiques restaurées " + " (" + tempRestaure.length + " octets)"
		);
	}
});

/**
 * Fenêtre modale
 * Le bouton effacer ouvre une fenêtre modale de confirmation de la demande
 * Bouton 'btnVideStats' dans la modale
 */
const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach((trigger) =>
	trigger.addEventListener("click", toggleModal)
);

function toggleModal() {
	modalContainer.classList.toggle("active");
}
