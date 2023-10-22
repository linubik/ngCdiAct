//////////////////////////////////////////////////////////////////////////////////////////////
//CDIACt : Denis Weiss, février 2023, BY-NC-ND
//https://emi.re/CDIAct-V2/
//Contact : weiss.denis@gmail.com
//////////////////////////////////////////////////////////////////////////////////////////////

//Affichage des présents du jour

//-------- INIT ---------//
$('#gestionPW').hide()
$('#cont').hide()
$('#table').hide()
$('#retour').hide()
$('table').tablesort()

//Valeurs des différentes durées de passage
let ta1 = 'passage éclair'
let ta2 = 'interclasse'
let ta3 = 'récréation'
let ta4 = "moins d'une heure"
let ta5 = 'une heure'
let ta6 = 'deux heures'
let ta7 = 'trois heures'
let ta8 = '+ de trois heures'

//Affichage du loader, petite tempo
document.getElementById('textLoader').innerHTML = 'Veuillez patienter!'

$('#loader').fadeOut(1000, function () {
  $('#gestionPW').fadeIn()
})

//Bouton gestion du mot de passe
//Redirige vers index.html en cas de 3 mauvais PW
let initNbPw = 0

$("#btnPW").on("click", function () {
  validePW();
});

$(document).keypress(function (event) {
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if (keycode == '13') {
    alert("Veuillez cliquer sur le bouton 'valider' ! ")
  }
});

function validePW() {
  let passwordSaisi = document.getElementById("passwordInput").value;
  passwordSaisi = md5(passwordSaisi);

  let passwordTest = localStorage.getItem("objActPW");
  if (passwordTest) {
    passwordHashe = passwordTest;
  } else {
    passwordHashe = "11caab0a0736c93f5ad775fdc39f8728"; //démo
  }

  if (passwordHashe != null) {
    if (passwordSaisi == passwordHashe) {
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

//Fonctions
//Renvoie le timestamp de minuit
function TimestampMinuit() {
  let d = new Date()
  let j = d.getDate()
  let m = d.getMonth() + 1
  let a = d.getFullYear()
  //d.setHours(0, 0, 0, 0);
  d = a + '/' + m + '/' + j
  tsMinuit = Date.parse(d) / 1000
  return tsMinuit
}

//Retourne h + ':' + min + ':' + sec
function TimestampToHeure(TS) {
  let timeStamp = TS
  let d = new Date(timeStamp * 1000)
  let h = d.getHours()
  if (h < 10) {
    h = '0' + h
  }
  let min = d.getMinutes()
  if (min < 10) {
    min = '0' + min
  }
  let sec = d.getSeconds()
  if (sec < 10) {
    sec = '0' + sec
  }
  return h + ':' + min
}

//Affiche l'heure de l'horloge "hms"
function heureHorloge() {
  var date = new Date()
  var heure = date.getHours()
  var minutes = date.getMinutes()
  if (minutes < 10) minutes = '0' + minutes
  return heure + ': ' + minutes
}
document.getElementById('hms').innerHTML = heureHorloge()

//Calendrier
//Affichage de la date
const dayNumber = new Date().getDate()
const year = new Date().getFullYear()
const dayName = new Date().toLocaleString('default', { weekday: 'long' })
const monthName = new Date().toLocaleString('default', { month: 'long' })

document.querySelector('.mois').innerHTML = monthName
document.querySelector('.jour').innerHTML = dayName
document.querySelector('.chiffre').innerHTML = dayNumber
document.querySelector('.annee').innerHTML = year

//////////////////////////////////////////////////////////////////////////////////////////////
//CHARGEMENT DES DONNEES STOCKEES EN LOCALSTORAGE
//objActPW => hash du pw
//objActNM => Nom de l'établissement
//objActEM => Elèves =>{ "em": "Mouss Tique", "cl": "LLL", "id": "1" }
//CDIActStats =>Stats =>[6;1670845945;3335,1;1670902370;3873]
//let valInJour = TimestampMinuit() - 86400; //* 5; //timestamp du jour//1673046000
//////////////////////////////////////////////////////////////////////////////////////////////

//Personnalisation du nom de l'établissement
if (localStorage.getItem('objActNM') !== null) {
  document.getElementById('titre').innerHTML = localStorage.getItem('objActNM')
} else {
  document.getElementById('titre').innerHTML = '[Etablissement]'
}

let valInJour = TimestampMinuit()

function parseDatas() {
  let j = 1
  let bascule = 0

  let dataS = localStorage.getItem('CDIActStats') //6;1670845945;3335,

  let dataC = JSON.parse(localStorage.getItem('objActEM')) //{ "em": "Mouss Tique", "cl": "LLL", "id": "1" }
  document.getElementById('retour').innerHTML = ''

  //const resSupA1 = dataS.find((el) => el == ",");

  /* 	if (dataS.indexOf(",") === -1) {
    document.getElementById("retour").innerHTML = "1 présent(e)&nbsp;!";
  } else {
    dataSL = dataS.split(",");
  } */
  let dataSL = dataS.split(',')
  if (dataSL) {
    dataSL.forEach((element) => {
      let dTp
      let dTt
      let idVN

      let c = element.split(';')
      if (parseInt(c[1]) > parseInt(valInJour)) {
        idVN = dataC.filter(function (entry) {
          return parseInt(entry.id) === parseInt(c[2])
        })

        if (c[0] == 1) {
          dTp = ta1
          dTt = "</div><div class='fle1'></div > <div>"
        }
        if (c[0] == 2) {
          dTp = ta2
          dTt = "</div><div class='fle2'></div > <div>"
        }
        if (c[0] == 3) {
          dTp = ta3
          dTt = "</div><div class='fle3'></div > <div>"
        }
        if (c[0] == 4) {
          dTp = ta4
          dTt = "</div><div class='fle4'></div > <div>"
        }
        if (c[0] == 5) {
          dTp = ta5
          dTt = "</div><div class='fle5'></div > <div>"
        }
        if (c[0] == 6) {
          dTp = ta6
          dTt = "</div><div class='fle6'></div > <div>"
        }
        if (c[0] == 7) {
          dTp = ta7
          dTt = "</div><div class='fle7'></div > <div>"
        }
        if (c[0] == 8) {
          dTp = ta8
          dTt = "</div><div class='fle8'></div > <div>"
        }

        let dateLineIn = Number(c[1])
        dateLineIn = TimestampToHeure(dateLineIn)

        let dateLineOut = dTp

        document.getElementById('presents').innerHTML +=
          '<tr><td>' +
          j +
          '</td> <td>' +
          idVN[0].em +
          '</td><td>' +
          idVN[0].cl +
          '</td><td>' +
          dateLineIn +
          '</td><td>' +
          dTt +
          '</td><td>' +
          dateLineOut +
          '</td></tr></tbody>'

        $('#table').show('slow')
        bascule = 1
        j++
      }
    })
  }
  if (bascule == 0) {
    $('#retour').show('slow')
  } else {
    $('#retour').hide()
  }
}

window.onload = function () {
  parseDatas()
}
