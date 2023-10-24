//////////////////////////////////////////////////////////////////////////////////////////////
//CDIACt : Denis Weiss, février 2023, BY-NC-ND
//https://emi.re/CDIAct-V2/
//Contact : weiss.denis@gmail.com
//////////////////////////////////////////////////////////////////////////////////////////////

/**
 * DIVERSES FONCTIONS
 * fuso() => Affichage du fuseau horaire genre GMT+0400
 * heure() => Affichage de l'heure : h:mm
 * dateFr() => Affichage de la data jour de la semaine / mois / année
 * jourAn() => Affichage du jour de l'année : 267
 * TimestampToDateCourtIn(TS) et Out => transforme un timestamp en j + "/" + m + "/" + a  et l'affiche;
 * TimestampToJourSemaineFr(TSJ) => transforme un timestamp en jour de la semaine (l,m,m,j,v,s,d)
 * TimestampZero(TZ) => retourne le timestamp à minuit sous forme de 1661205600
 */

function fuso() {
  let d = new Date()
  let dS = d.toTimeString()
  let fuso = dS.slice(9, 17)
  return fuso
}
//Affichage du fuseau horaire (GMT+-minutes)
document.getElementById('fuso').innerHTML = fuso()

function heure() {
  var date = new Date()
  var heure = date.getHours()
  var minutes = date.getMinutes()
  if (minutes < 10) minutes = '0' + minutes
  return heure + ': ' + minutes
}
//Affichage de l'heure
document.getElementById('hms').innerHTML = heure()

function dateFr() {
  let jours = new Array(
    'dimanche',
    'lundi',
    'mardi',
    'mercredi',
    'jeudi',
    'vendredi',
    'samedi',
  )
  let mois = new Array(
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'aout',
    'septembre',
    'octobre',
    'novembre',
    'décembre',
  )

  let date = new Date()
  let dateEnFR = jours[date.getDay()] + ' ' // nom du jour
  dateEnFR += date.getDate() + ' ' // numero du jour
  dateEnFR += mois[date.getMonth()] + ' ' // mois
  dateEnFR += date.getFullYear()
  return dateEnFR
}
//Affichage date du jour
document.getElementById('maDt').innerHTML = dateFr()

function jourAn() {
  const myDate = new Date()
  const year = myDate.getFullYear()
  const firstJan = new Date(year, 0, 1)
  const differenceInMillieSeconds = myDate - firstJan
  const jour = differenceInMillieSeconds / (1000 * 60 * 60 * 24) + 1
  return Math.round(jour)
}

function jourAnVersDate(j) {
  const dayOfYear = j
  const date = new Date(new Date().getFullYear(), 0, dayOfYear)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const formattedDate = date.toLocaleDateString('fr-FR', options)
  return formattedDate
}

function TimestampToDateCourtIn(TS) {
  let jours = new Array(
    'dimanche',
    'lundi',
    'mardi',
    'mercredi',
    'jeudi',
    'vendredi',
    'samedi',
  )
  var mois = new Array(
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'août',
    'septembre',
    'octobre',
    'novembre',
    'décembre',
  )
  var timeStamp = TS
  var d = new Date(timeStamp * 1000)
  var a = d.getFullYear()
  var j = d.getDate()
  var m = d.getMonth() + 1
  var h = d.getHours()
  var min = d.getMinutes()
  var sec = d.getSeconds()
  document.getElementById('jourIn').innerHTML = jours[d.getDay()]
  document.getElementById('moisIn').innerHTML = mois[d.getMonth()]
  document.getElementById('chiffreIn').innerHTML = j
  document.getElementById('anneeIn').innerHTML = a

  //return jours[d.getDay()] + " " + j + " " + mois[d.getMonth()] + " " + a;
}
//OK
function TimestampToDateCourtOut(TS) {
  let jours = new Array(
    'dimanche',
    'lundi',
    'mardi',
    'mercredi',
    'jeudi',
    'vendredi',
    'samedi',
  )
  var mois = new Array(
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'août',
    'septembre',
    'octobre',
    'novembre',
    'décembre',
  )
  var timeStamp = TS
  var d = new Date(timeStamp * 1000)
  var a = d.getFullYear()
  var j = d.getDate()
  var m = d.getMonth() + 1
  var h = d.getHours()
  var min = d.getMinutes()
  var sec = d.getSeconds()
  document.getElementById('jourOut').innerHTML = jours[d.getDay()]
  document.getElementById('moisOut').innerHTML = mois[d.getMonth()]
  document.getElementById('chiffreOut').innerHTML = j
  document.getElementById('anneeOut').innerHTML = a
  //return jours[d.getDay()] + " " + j + " " + mois[d.getMonth()] + " " + a;
}

function TimestampToJourSemaineFr(TSJ) {
  var jours = new Array(
    'dimanche',
    'lundi',
    'mardi',
    'mercredi',
    'jeudi',
    'vendredi',
    'samedi',
  )
  var timeStamp = TSJ
  var d = new Date(timeStamp * 1000)
  return jours[d.getDay()]
}

//ok
function TimestampZero(TZ) {
  var timeStamp = TZ
  var d = new Date(timeStamp * 1000)
  var a = d.getFullYear()
  var j = d.getDate()
  var m = d.getMonth() + 1
  var tempZero
  var tempDate = a + ' ' + m + ' ' + j + ' 00:00:00'
  tempZero = Date.parse(tempDate)
  return tempZero / 1000
}
function TimestampToDate(TSS) {
  let jours = new Array(
    'dimanche',
    'lundi',
    'mardi',
    'mercredi',
    'jeudi',
    'vendredi',
    'samedi',
  )
  var mois = new Array(
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'août',
    'septembre',
    'octobre',
    'novembre',
    'décembre',
  )
  var timeStamp = TSS
  var d = new Date(timeStamp * 1000)
  var a = d.getFullYear()
  var j = d.getDate()
  var m = d.getMonth() + 1
  var h = d.getHours()
  var min = d.getMinutes()
  var sec = d.getSeconds()
  return jours[d.getDay()] + ' ' + j + ' ' + mois[d.getMonth()] + ' ' + a
}
//---------------------------------------------------------------------//
//                                 Init                                //
//---------------------------------------------------------------------//

$('#retour').hide()
$('#sectionStats').hide()

let sTot, dIn, dOut, nbrJourUtiles, nbrHeuresUtiles
let tJsLu,
  tJsMa,
  tJsMe,
  tJsJe,
  tJsVe,
  tJsSa,
  tJsDi = 0
let tpsPres1,
  tpsPres2,
  tpsPres3,
  tpsPres4,
  tpsPres5,
  tpsPres6,
  tpsPres7,
  tpsPres8
let jourMini,
  jourMaxi,
  jourMoy = 0

//let tNm = [];//tableau des noms
let tPs = [] //tableau des temps de présence
let tTs = [] //tableau des timestamp
let tID = [] //tableau des identifiant
let tJs = [] //jours de la semaine
let pJr = [] //nbre présents par jour
let pHr = [] //nbre présents par heure
let dIs = [] //nombre de passages par élève

/*let tCl = [];//tableau des temps de passage */

let t1 = 'passage éclair'
let t2 = 'interclasse'
let t3 = 'récréation'
let t4 = "moins d'une heure"
let t5 = 'une heure'
0
let t6 = 'deux heures'
let t7 = 'trois heures'
let t8 = 'plus de trois heures'

let passe_1, passe_2, passe_3, passe_4, passe_10, passe_50 //nombre de passages par élève

//////////////////////////////////////////////////////////////////////////////////////////////
//CHARGEMENT DES DONNEES STOCKEES EN LOCALSTORAGE
//objActPW => hash du pw
//objActNM => Nom de l'établissement
//objActEM => Elèves =>{ "em": "Mouss Tique", "cl": "LLL", "id": "1" }
//CDIActStats =>Stats =>[6;1670845945;3335,1;1670902370;3873]
//let valInJour = TimestampMinuit() - 86400; //* 5; //timestamp du jour//1673046000
///////////////////////////////////////////////////////////////////////////////////////////////

/**
 * toutes les fonctions chargées, puis lance successivement
 * verif()
 * chargeStats()
 * nOut() => date de début et de fin
 * parseNbreParJour() => nombre de jours mesurés
 * parseNbreParHeure() => présents par heure
 * JourParSemaine() => présents par jour de la semaine
 * tempsPresence() => durés
 * frequence() => hit parade des présents
 * parClasses() => hit parade des classes
 */

function verif() {
  //Vérification du nom de l'établissement, objet "objActNM"
  if (localStorage.getItem('objActNM') !== null) {
    document.getElementById('titre').innerHTML = localStorage.getItem(
      'objActNM',
    )
  } else {
    document.getElementById('titre').innerHTML = '[Etablissement]'
  }

  //Nombre d'emprunteurs objet "objActEM"
  if (localStorage.getItem('objActEM') !== null) {
    let datasComptes = JSON.parse(localStorage.getItem('objActEM'))
    //affichage nombre élèves
    document.getElementById('nbrEleve').innerHTML = datasComptes.length
  } else {
    document.getElementById('nbrEleve').innerHTML = 'pas de données emprunteurs'
  }
  chargeStats()
}

function chargeStats() {
  //charge les stats, alerte si vide
  let dataS
  if (localStorage.getItem('CDIActStats') !== null) {
    dataS = localStorage.getItem('CDIActStats') //6;1670845945;3335,
  } else {
    alert('🤔 Objet "CDIActStats" vide ou non conforme')
  }

  let dataSL
  try {
    dataSL = dataS.split(',')
  } catch (error) {
    // ✅
    console.log('❌ Problème de virgule! 🤔', error)
  }

  if (dataSL !== null) {
    $('#sectionStats').show()

    dataSL.forEach((element) => {
      let c = element.split(';')
      tPs.push(c[0]) //tableau des temps de présence
      tTs.push(c[1]) //tableau des timestamp
      tID.push(c[2]) //tableau des ID
      tJs.push(TimestampToJourSemaineFr(c[1])) //jours de la semaine
    })
  } else {
    $('#retour').show('slow')
  }
  inOut()
}

//affiche les bornes début => fin
function inOut() {
  sTot = tTs.length //total des passages
  //affichage nombre passage
  document.getElementById('nbrPass').innerHTML += sTot
  dIn = TimestampToDateCourtIn(parseInt(tTs[0]))
  dOut = TimestampToDateCourtOut(parseInt(tTs[sTot - 1]))
  parseNbreParJour()
}

let jourClair = []

function parseNbreParJour() {
  let jourZero = TimestampZero(tTs[0]) //1661205600

  let plageFin = parseInt(jourZero) + 86400
  let j = 0
  let tempo
  nbrJourUtiles = 0
  for (let i = 0; i < tTs.length; i++) {
    if (tTs[i] < plageFin) {
      j++
      tempo = tTs[i] - plageFin
    } else {
      pJr.push(j)
      nbrJourUtiles++
      j = 1
      jourClair.push(TimestampToDate(plageFin))
      plageFin = parseInt(plageFin) + 86400
    }
  }

  parseNbreParHeure()
  console.log('jourClair : ' + jourClair)
}

function parseNbreParHeure() {
  let jourZero = TimestampZero(tTs[0]) //1661205600
  let plageFin = parseInt(jourZero) + 3600
  nbrHeuresUtiles = 0

  let j = 0

  let tempo

  for (let i = 0; i < tTs.length; i++) {
    if (tTs[i] < plageFin) {
      j++
      tempo = tTs[i] - plageFin
    } else {
      pHr.push(j)
      j = 1
      plageFin = parseInt(plageFin) + 3600
    }
  }
  //affichage nombre de passage par jours utiles
  document.getElementById('totPass').innerHTML =
    '<span class="chiffre-leg text-orange">' +
    nbrJourUtiles +
    '</span><span class="text-blanc"> jours mesurés</span>' +
    '<span class="text-rouge fs-3"> / </span><span class="chiffre-leg text-bleu"> ' +
    sTot +
    '</span><span class="text-blanc"> passages </span> '
  //Minis,maxis, moyennes
  jourMini = Math.min.apply(null, pJr)
  jourMaxi = Math.max.apply(null, pJr)
  jourMoy = Math.ceil(sTot / nbrJourUtiles)
  document.getElementById('visMoy').innerHTML = jourMoy

  //affichage minis,maxis, moyennes
  document.getElementById('visMoins').innerHTML = jourMini
  document.getElementById('visPlus').innerHTML = jourMaxi
  JourParSemaine()
}

function JourParSemaine() {
  let valToCount

  let count = 0
  valToCount = 'lundi'
  count = tJs.filter((item) => item === valToCount).length
  tJsLu = count

  count = 0
  valToCount = 'mardi'
  count = tJs.filter((item) => item === valToCount).length
  tJsMa = count

  count = 0
  valToCount = 'mercredi'
  count = tJs.filter((item) => item === valToCount).length
  tJsMe = count

  count = 0
  valToCount = 'jeudi'
  count = tJs.filter((item) => item === valToCount).length
  tJsJe = count

  count = 0
  valToCount = 'vendredi'
  count = tJs.filter((item) => item === valToCount).length
  tJsVe = count

  count = 0
  valToCount = 'samedi'
  count = tJs.filter((item) => item === valToCount).length
  tJsSa = count

  count = 0
  valToCount = 'dimanche'
  count = tJs.filter((item) => item === valToCount).length
  tJsDi = count

  $('#loader').fadeOut(1000, function () {
    $('#cont').fadeIn()
  })
  tempsPresence()
}

function tempsPresence() {
  tpsPres1 = tPs.filter((item) => item == 1).length
  tpsPres2 = tPs.filter((item) => item == 2).length
  tpsPres3 = tPs.filter((item) => item == 3).length
  tpsPres4 = tPs.filter((item) => item == 4).length
  tpsPres5 = tPs.filter((item) => item == 5).length
  tpsPres6 = tPs.filter((item) => item == 6).length
  tpsPres7 = tPs.filter((item) => item == 7).length
  tpsPres8 = tPs.filter((item) => item == 8).length
  countOccurences(tID)
}

//Hit parade des présents

function countOccurences(tab) {
  let result = []
  let dIsI = []
  tab.forEach(function (elem) {
    if (elem in result) {
      result[elem] = ++result[elem]
    } else {
      result[elem] = 1
    }
  })

  for (let val in result) {
    dIs.push(result[val])
  }
  //console.log("dIs :" + dIs.length);
  const ratioP = sTot / dIs.length

  document.getElementById('ratioPass').innerHTML =
    "Un élève passe en moyenne : <strong><span class='fs-3'> " +
    ratioP.toFixed(1) +
    ' </strong></span>fois'
  partition()
}

function partition() {
  passe_1 = dIs.reduce((sum, value) => (value == 1 ? sum + 1 : sum), 0)
  passe_2 = dIs.reduce((sum, value) => (value == 2 ? sum + 1 : sum), 0)
  passe_3 = dIs.reduce((sum, value) => (value == 3 ? sum + 1 : sum), 0)
  passe_4 = dIs.reduce(
    (sum, value) => (value > 3 && value < 11 ? sum + 1 : sum),
    0,
  )
  passe_10 = dIs.reduce(
    (sum, value) => (value > 10 && value < 51 ? sum + 1 : sum),
    0,
  )
  passe_50 = dIs.reduce((sum, value) => (value > 50 ? sum + 1 : sum), 0)
  parClasses()
}

function parClasses() {
  /* const obj = tCl.reduce(function (occur, i) {
		return occur[i] ? ++occur[i] : (occur[i] = 1), occur;
	}, {});
	console.log("Object.values :" + " typOf dIs : " + typeof dIs + " I " + dIs);
	const classes = JSON.stringify(obj);
	
		console.log(
		"reduce classes : " +
			classes +
			" classes.length : " +
			classes.length +
			" : " +
			classes[0].CPP1
	); */
  // =>{"CPP1":4,"LLL YYPC":3,"LLL YYPSI":2,"LLL TS2":1,"LLL YCI2":2,"TS2":2,"LLL TSTMG3":1,"LLL XXPCSI":1,"LLL YMUC2":3}
  //document.getElementById("dateTests").textContent = "éreine";
  toutTPS()
}

window.onload = function () {
  verif()
}

/**
 * Partie Highcharts
 * Affichages des graphiques
 *
 */
//------------------- tous les passages ---------------//

function toutTPS() {
  Highcharts.chart('contTous', {
    chart: {
      type: 'column',
    },
    accessibility: {
      description: 'Graphique représentant tous les passages par élève.',
    },
    title: {
      text: '',
    },
    xAxis: {
      title: {
        text: "passages par jour de l'année",
      },
      labels: {
        enabled: false,
      },
      categories: jourClair,
    },
    yAxis: {
      title: {
        text: 'nombre de passages',
      },
      labels: { enabled: false },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        stacking: 'normal',
      },
    },
    tooltip: {
      formatter: function () {
        return '<b>' + this.y + '</b> passages le <b>' + this.x + '</b>'
      },
    },
    series: [
      {
        name: null,
        data: pJr,
      },
    ],
  })
  highJour()
}

//------------------- Totaux par jour de la semaine ---------------//
function highJour() {
  Highcharts.chart('jourSemaine', {
    chart: {
      type: 'column',
    },
    accessibility: {
      description:
        'Graphique représentant le nombre de passages par jour de la semaine.',
    },
    title: {
      text: '',
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: 'category',
    },
    legend: {
      enabled: false,
    },
    yAxis: {
      title: {
        text: null,
      },
      labels: { enabled: false },
    },

    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
        },
      },
    },
    tooltip: {
      formatter: function () {
        return '<b>' + this.y + '</b> passages'
      },
    },
    series: [
      {
        name: null,
        colorByPoint: true,
        data: [
          {
            name: 'Lundi',
            y: tJsLu,
            drilldown: 'Lundi',
          },
          {
            name: 'Mardi',
            y: tJsMa,
            drilldown: 'Mard',
          },
          {
            name: 'mercredi',
            y: tJsMe,
            drilldown: 'mercredi',
          },
          {
            name: 'jeudi',
            y: tJsJe,
            drilldown: 'jeudi',
          },
          {
            name: 'vendredi',
            y: tJsVe,
            drilldown: 'vendredi',
          },
          {
            name: 'samedi',
            y: tJsSa,
            drilldown: 'samedi',
          },
        ],
      },
    ],
  })
  highPres()
}

//------------------- temps de présence ---------------//

function highPres() {
  Highcharts.chart('tempsPresence', {
    chart: {
      type: 'bar',
    },
    accessibility: {
      description: 'Graphique représentant le temps de passages par élève.',
    },
    title: {
      text: null,
    },
    xAxis: {
      categories: [t1, t2, t3, t4, t5, t6, t7, t8],
    },
    colors: [
      '#4572A7',
      '#AA4643',
      '#89A54E',
      '#80699B',
      '#3D96AE',
      '#DB843D',
      '#92A8CD',
      '#A47D7C',
      '#B5CA92',
    ],
    plotOptions: {
      series: {
        colorByPoint: true,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        enabled: false,
      },
      plotOptions: {
        series: {
          colorByPoint: true,
        },
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      formatter: function () {
        return '<b>' + this.y + '</b>'
      },
    },
    series: [
      {
        name: null,
        data: [
          tpsPres1,
          tpsPres2,
          tpsPres3,
          tpsPres4,
          tpsPres5,
          tpsPres6,
          tpsPres7,
          tpsPres8,
        ],
      },
    ],
  })
  highPass()
}

//------------------- par élèves ---------------//
function highPass() {
  Highcharts.chart('contPass', {
    chart: {
      type: 'area',
    },
    accessibility: {
      description: 'Graphique représentant le nombre de passages par élève.',
    },
    title: {
      text: '',
    },
    xAxis: {
      title: {
        text: 'élèves (identifiants)',
      },
      labels: {
        enabled: false,
      },
    },
    yAxis: {
      title: {
        text: 'passages par élève',
      },
      labels: {
        enabled: false,
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        stacking: 'normal',
      },
    },
    tooltip: {
      formatter: function () {
        return (
          "L'identifiant <b>" +
          this.x +
          '</b> est passé <b>' +
          this.y +
          ' fois</b>'
        )
      },
    },
    series: [
      {
        name: null,
        data: dIs,
      },
    ],
  })
  highFois()
}

//------------------- Nombe de fois ---------------//

function highFois() {
  Highcharts.chart('repTition', {
    chart: {
      type: 'lollipop',
    },

    accessibility: {
      point: {
        valueDescriptionFormat: '{index}. {xDescription}, {point.y}.',
      },
    },

    legend: {
      enabled: false,
    },

    title: {
      text: null,
    },

    tooltip: {
      shared: true,
    },

    xAxis: {
      type: 'category',
    },

    yAxis: {
      title: {
        text: "nombre d'élèves'",
      },
    },
    tooltip: {
      formatter: function () {
        return '<b>' + this.y + '</b> élèves<b>'
      },
    },
    series: [
      {
        name: 'Population',
        data: [
          {
            name: '1 fois',
            y: passe_1,
          },
          {
            name: '2 fois',
            y: passe_2,
          },
          {
            name: '3 fois',
            y: passe_3,
          },
          {
            name: 'De 4 à 10 fois',
            y: passe_4,
          },
          {
            name: 'De 11 à 50 fois',
            y: passe_10,
          },
          {
            name: 'Plus de 50 fois',
            y: passe_50,
          },
        ],
      },
    ],
  })
  //highClasses()
}
