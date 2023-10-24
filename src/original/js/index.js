/*

*CDIACt : Denis Weiss, février 2023, BY-NC-ND
*https://emi.re/CDIAct-V2/
*Contact : weiss.denis@gmail.com
Objectifs :
- Afficher nom, prénom classe en autocompletion
- Récupérer temps de présence (timestamp) ; durée ; id de l'élève au clic 
- Ecrire ces données en localstorage dans la variable 'stats'
*/

/*-------------------- INIT DES VARIABLES -----------------------*/

var ts;// temps de présence (timestamp)
var tp;// type de présence
var li_cla; // classe
var rec_id;// nom ; classe
var li_id; // numéro emprunteur
var emprunteurs; // 
const suggestions = document.querySelector('.suggestions')

$('#inscB').hide();
$('#inscC').hide();

/*----------------------- AJOUT DE L'HEURE -----------------------*/

function heure() {
  var date = new Date()
  var heure = date.getHours()
  var minutes = date.getMinutes()
  if (minutes < 10) minutes = '0' + minutes
  return heure + 'h ' + minutes
}
document.getElementById('hms').innerHTML = heure()


/*---------------- PERSONNALISATION ETABLISSEMENT-----------------*/
try {
  localStorage.getItem('objActNM');
  document.getElementById('titre').innerHTML = localStorage.getItem('objActNM');
} catch (e) {
  document.getElementById('titre').innerHTML = '[Etablissement]';
}

/*---------------------- CHARGES NOMS --------------------------*/

if (localStorage.getItem('objActEM') !== null) {
  let objetDataTemp = JSON.parse(localStorage.getItem('objActEM'));
  emprunteurs = objetDataTemp;
} else {
  document.getElementById('confirme').innerHTML =
    "<div class='error'>problème de fichier des élèves</div>";
}

/*---------------------- AUTOCOMPLETION : Cherche valeurs--------------------------*/
//cherche toutes les valeurs contenant wordToMatch
function findMatches(wordToMatch, emprunteurs) {
  return emprunteurs.filter((place) => {
    const regex = new RegExp(wordToMatch, 'gi')
    //g= global, correspond à toutes les instances du modèle dans une chaîne
    //i= insensible à la casse
    return place.em.match(regex) || place.cl.match(regex)
  })
}

/*---------------------- AUTOCOMPLETION affiche les valeurs --------------------------*/

function displayMatches() {
  const matchArray = findMatches(this.value, emprunteurs)
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, 'g')
      //rec_id = place.id + ";" + place.cl;
      rec_id = place.id

      let noms = place.em.replace(
        regex,
        `<span class="hl">${this.value}</span>`,
      )

      let classes = place.cl.replace(
        regex,
        `<span class="hl">${this.value}</span>`,
      )

      return (
        `<li data-valeur="`
        + rec_id + `"   
          onclick="valEmp(this);" onmouseover="survol(this);" >
          <span class="name" >${noms}</span>
          <span class="population"> ${classes}</span >
          </li >`
      )
    })
    .join('')
  suggestions.innerHTML = html
}
//"onclick="valEmp(this);"
function function1() {
  alert("function1() est exécuté");
}


const searchInput = document.querySelector('.search')


searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)


//on récupère la valeur de l'ID de l'emprunteur
function valEmp(elt) {
  //console.log("vlcik 2" + document.activeElement)
  li_id = elt.dataset.valeur;
  $('#inscA').hide();
  $('#inscB').show().addClass('animated fadeInLeft');
}

function survol(e) {
  document.activeElement.blur();
}

/*---------------------------- TRAITEMENT ----------------------*/

$('#et01').mousedown(function () {
  tp = '1'
  finEtape2()
})
$('#et02').mousedown(function () {
  tp = '2'
  finEtape2()
})
$('#et03').mousedown(function () {
  tp = '3'
  finEtape2()
})
$('#et04').mousedown(function () {
  tp = '4'
  finEtape2()
})
$('#et05').mousedown(function () {
  tp = '5'
  finEtape2()
})
$('#et06').mousedown(function () {
  tp = '6'
  finEtape2()
})
$('#et07').mousedown(function () {
  tp = '7'
  finEtape2()
})
$('#et08').mousedown(function () {
  tp = '8'
  finEtape2()
})

function finEtape2() {
  $('#inscB').removeClass().addClass('animated fadeOutRight').hide()
  $('#inscC').show().removeClass().addClass('animated fadeInLeft')
  $('html, body').animate(
    {
      scrollTop: 0,
    },
    'slow',
  )
}

function sauveDatas() {
  document.getElementById('confirme').innerHTML = 'enregistrement...'
  //.toLocaleString("fr-FR", {timeZone: 'Indian/Reunion'})

  ts = Math.round(+new Date() / 1000) //timestamp

  let stats = [] //statistiques
  //let ajout = li_id + ";" + tp + ";" + ts;//li_id + ";" + tp + ";" + ts + ' \n';
  let ajout = +tp + ';' + ts + ';' + li_id

  if (localStorage.getItem('CDIActStats') != undefined) {
    stats.push(localStorage.getItem('CDIActStats'))
  }
  stats.push(ajout)

  localStorage.setItem('CDIActStats', stats)

  $('#inscC').hide('slow')
  let x = setTimeout(rechargePage, 500)
}

function rechargePage() {
  document.getElementById('confirme').innerHTML = 'saisie enregistrée...'
  location.reload()
}

$('#valide').mousedown(function () {
  document.getElementById('confirme').innerHTML = 'Traitement en cours... ! '
  sauveDatas()
})

$('html, body').animate(
  {
    scrollTop: 0,
  },
  'slow',
)
