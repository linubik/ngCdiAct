//////////////////////////////////////////////////////////////////////////////////////////////
//CDIACt : Denis Weiss, février 2023, BY-NC-ND
//https://emi.re/CDIAct-V2/
//Contact : weiss.denis@gmail.com
//////////////////////////////////////////////////////////////////////////////////////////////
let datasEleves //la base élève en CSV
let pwDoc = 'démo' //le mot de passe hasché
let nomEtab = 'ETABLISSEMENT' //le nom si pas modifié
let datasPHP //retour de PHP

$('#exMan').hide()
$('#exBCDI').hide()
$('#sect02').hide()
$('#sect03').hide()
$('#sect04').hide()
$('#sect05').hide()

//Retour smooth vers le haut
function addScrollSmooth() {
  const elTop = document.getElementById('topCont')
  window.scrollTo({
    top: elTop,
    behavior: 'smooth',
  })
}

$('#btnValide01').on('click', function () {
  $('#sect01').hide()
  $('#sect02').show('slow')
  $('#chem1').css('opacity', '.3')
  $('#chem2').css('opacity', '1')
  addScrollSmooth()
})

$('#btnValide02').on('click', function () {
  //CDI des lycées Leconte de Lisle et Lislet Geoffroy
  nomEtab = document.getElementById('eName').value
  console.log('en clair : ' + document.getElementById('ePass').value)
  pwDoc = md5(document.getElementById('ePass').value)

  $('#sect02').hide()
  $('#sect03').show('slow')
  $('#chem2').css('opacity', '.3')
  $('#chem3').css('opacity', '1')
  addScrollSmooth()
})

$('#exportMan').on('click', function () {
  $('#exBCDI').hide()
  $('#sect03').hide()
  $('#exMan').show('slow')
  addScrollSmooth()
})

$('#exportBCDI').on('click', function () {
  $('#exMan').hide()
  $('#sect03').hide()
  $('#exBCDI').show('slow')
  addScrollSmooth()
})

$('#btnValide03').on('click', function () {
  $('#sect03').hide()
  $('#sect04').show('slow')
  $('#chem3').css('opacity', '.3')
  $('#chem4').css('opacity', '1')
  addScrollSmooth()
})

$('#btnValide03A').on('click', function () {
  $('#sect03').hide()
  $('#sect04').show('slow')
  $('#exBCDI').hide()
  $('#exMan').hide()
  $('#chem3').css('opacity', '.3')
  $('#chem4').css('opacity', '1')
  addScrollSmooth()
})

$('#btnValide03B').on('click', function () {
  $('#sect03').hide()
  $('#sect04').show('slow')
  $('#exBCDI').hide()
  $('#exMan').hide()
  $('#chem3').css('opacity', '.3')
  $('#chem4').css('opacity', '1')
  addScrollSmooth()
})

$('#btnValide04').on('click', function () {
  //envoiDatas();
  if (datasEleves) {
    envoiDatas()
    //alert("ok")
  } else {
    alert('veuillez sélectionner un fichier valide nommé cartes.csv')
    return
  }
  $('#cheminFer').hide()
  $('#sect04').hide()
  $('#sect05').show('slow')
  addScrollSmooth()
})

/**
 * genererMDP() => Génère un nom aléatoire.
 * Ce nom unique est celui du fichier de gestion
 * Paramètre d'entrée : aucun, de sortie, un nom de 8 lettres
 * */

function genererMDP() {
  let r = ''
  for (
    let e = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz',
      a = 0,
      n = 0,
      o = 0;
    o < 8;
    o++
  )
    if ((0 == Math.floor(2 * Math.random()) && n < 3) || a >= 5) {
      ;(r += t = Math.floor(10 * Math.random())), (n += 1)
    } else {
      let t = Math.floor(Math.random() * e.length)
      ;(r += e.substring(t, t + 1)), (a += 1)
    }
  //nomAldeFichier = r;
  return r
}

const nomFichier = genererMDP()

//Affiche l'adresse du fichier (plan B si n'enregistre pas)
document.getElementById('lienUnique').innerHTML =
  "<a href='https://emi.re/CDIAct-V2/confsTemp/" +
  nomFichier +
  "'.html' target='_blank'>https://emi.re/CDIAct-V2/confsTemp/" +
  nomFichier +
  '.html</a>'

//console.log( 'ma girl / ' +   "<a href='https://emi.re/CDIAct-V2/confsTemp/" +  nomFichier +  ".html' target='_blank'>https://emi.re/CDIAct-V2/confsTemp/" +  nomFichier +   '.html</a>')

/**
 * Transforme des données CSV en json en ajoutant les entêtes
 * Paramètre d'entrée : données CSV
 * Paramètre de sortie : JSON avec  "em", "cl", "id"
 * =>[{"em":"LEV LAU","cl":"LLL","id":"1 "},{"em":"ROS CHR","cl":"LLL","id":"2 "},
 * */

function valueIsValid(valeur) {
  // Vérifiez si la valeur est une chaîne
  if (typeof valeur === 'string') {
    return true
  }

  // Vérifiez si la valeur est un nombre
  try {
    // Convertissez la valeur en nombre
    const nombre = Number(valeur)

    // Vérifiez si la conversion a réussi
    return !isNaN(nombre)
  } catch (e) {
    // La conversion a échoué
    return false
  }
}

function csvJSON(csv) {
  let lines = csv.split(/\r\n|\n/)

  // Vérifiez si le fichier a une en-tête

  //lines = lines.trim()

  console.log(lines)
  let result = []
  let headers = ['em', 'cl', 'id']

  for (let i = 1; i < lines.length; i++) {
    let obj = {}
    let currentline = lines[i].split(';')

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j]

      if (!valueIsValid(currentline[j])) {
        return false
      }
    }
    result.push(obj)
    //ERINGOM MANGALOM She�na//.toString() =>noon
  }

  return JSON.stringify(result) //JSON
  //return result
}

/*function jsFriendlyJSONStringify(s) {
  return JSON.stringify(s)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

var s = {
  a: String.fromCharCode(0x2028),
  b: String.fromCharCode(0x2029),
};
*/
/**
* Envoie les données en AJAX vers modifConf.php
* Paramètres d'entrée : data:
        "datasE=" + datasEleves + "&nomEtab=" + nomEtab + "&pwDoc=" + pwDoc +
        "&nomFichier=" +
        nomFichier,
* Paramètre de sortie : retourPHP renvoi et enregistrement du lien unique du fichier de gestion au format HTML
* */
//Partie fenêtre modalé
const modalContainer = document.querySelector('.modal-container')
const modalTriggers = document.querySelectorAll('.modal-trigger')

function envoiDatas() {
  document.getElementById('verif-cartes').innerHTML = ''

  datasEleves = encodeURI(datasEleves)

  //console.log("nom de fichier : " + nomFichier + " | " + nomEtab + " | " + pwDoc);

  document.getElementById('verif-cartes').innerHTML =
    'nomEtab=' + nomEtab + '&pwDoc=' + pwDoc + '&dataNomFichier=' + nomFichier

  $.ajax({
    url: '../php/modifConf.php',
    type: 'POST',
    data:
      'datasE=' +
      datasEleves +
      '&nomEtab=' +
      nomEtab +
      '&pwDoc=' +
      pwDoc +
      '&nomFichier=' +
      nomFichier,
    success: function (retourPHP) {
      $('#exBCDI').hide()
      $('#verif-cartes').show()

      //document.getElementById("verif-cartes").innerHTML = retourPHP;
      //alert("Configuration effectuée. Fermez cette fenêtre et enregistrez le fichier dans le répertoire gestion."	);

      datasPHP = retourPHP

      let link = document.createElement('a')
      //link.download = nomFichier + ".html";
      link.download = nomFichier + '.html'

      let blob = new Blob([retourPHP], { type: 'text/plain' })

      let reader = new FileReader()
      reader.readAsDataURL(blob)

      reader.onload = function () {
        link.href = reader.result // URL de données
        link.click()
      }
    },
    cache: false,
  })
}

//https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications

//---------- Charge le fichier cartes.csv  ------------------ //

/**
* Ouverture du gestionnaire de fichier
* Choix et vérification du nom et du format de cartes.csv
* Paramètres d'entrée :  <input type="file" id="file-upload" accept=".csv" hidden />
      <label for="file-upload" class="btnLoad">🔁 télécharger cartes.csv (répertoire 'sources')</label>
* Paramètre de sortie : données du fichier carte.csv dans la variable  datasEleves format json (function csvJSON() )
* Affichage du contenu dans verif-cartes pour info
CDI des lycées Lislet Geoffroy et Leconte de Lisle
*/
const sorties = document.getElementById('verif-cartes')
const actualBtn = document.getElementById('file-upload')
const fileChosen = document.getElementById('nom-select')

let datasCartes

actualBtn.addEventListener('change', function (e) {
  e.preventDefault()
  const tempNom = this.files[0].name

  if (tempNom != 'cartes.csv') {
    sorties.textContent = "veuillez sélectionner le fichier 'cartes.csv'"
    return
  }
  if (this.files[0].size > 140000) {
    sorties.textContent =
      'Taille du fichier cartes.csv limité à 140 ko soit environ 5000 comptes (' +
      this.files[0].size +
      'bits)'
    return
  } else {
    document.getElementById('nom-select').innerHTML =
      'nom du fichier : ' + tempNom + ' (' + this.files[0].size + 'bits)'
    datasCartes = this.files[0]
  }
  chargement()
})

function chargement() {
  const charge = new FileReader()

  charge.readAsText(datasCartes)

  charge.onloadend = function (e) {
    datasEleves = csvJSON(e.target.result)
    document.getElementById('verif-cartes').innerHTML = datasEleves
    $('#btnValide04').show('slow')
  }
}
