<?php
header('Content-Type: text/plain; charset=utf-8');
//header('Content-Type: text/plain; charset=iso-8859-1');
//-------------------  INFOS ---------------------------- //

//Denis Weiss. septembre 2023
//https://emi.re/CDIAct-V2/
//Code "pédagogique" à plat et non optimisé pour faciliter la compréhension

/*******************************************************
 *                   Récupération des données
 *******************************************************/

//-------------------  Récupération des données  ---------------------------- //

$nomEtab = isset($_POST['nomEtab']) ? $_POST['nomEtab'] : null;
$baseEl = isset($_POST['datasE']) ? $_POST['datasE'] : null;
$mdpDoc = isset($_POST['pwDoc']) ? $_POST['pwDoc'] : null;
$nomFic = isset($_POST['nomFichier']) ? $_POST['nomFichier'] : null;

if ($nomEtab):
    $dataEtab = htmlentities($nomEtab);
else:
    echo 'problème de transmission variable du nom de établissement ';
    exit();
endif;

if ($baseEl):
    //$dataBase = htmlentities($baseEl);
    //$dataBase = utf8_encode($baseEl);
    $dataBase = $baseEl;
else:
    echo 'problème de transmission variable datas élèves ';
    exit();
endif;

if ($mdpDoc):
    $dataPW = htmlentities($mdpDoc);
else:
    echo 'problème de transmission variable du mot de passe ';
    exit();
endif;

if ($nomFic):
    $dataFichier = '../confsTemp/' . $nomFic . '.html';
else:
    echo 'problème de transmission variable nom de fichier ';
    exit();
endif;

/*******************************************************
 *                  Ajout du HTML
 *******************************************************/
$partieHTML =
    "<!DOCTYPE html>
<html lang=\"fr\">

<head>
    <meta charset=\"utf-8\">
    <title>CDIAct-V2 - Installation, gestion</title>
    <meta name=\"og:title\" content=\"CDIAct-V2 - Installation, gestion\" />
    <link rel=\"shortcut icon\" href=\"./../img/icn/favicon.png\">

    <meta property=\"og:article:author\" content=\"Denis Weiss\">

    <link href=\"./../css/modale.css\" rel=\"stylesheet\" type=\"text/css\">
    <link href=\"./../css/styleGestion.css\" rel=\"stylesheet\" type=\"text/css\">
</head>

<body>
    <div class=\"container\">
        <header>
            <h1><span class=\"text-orange\">CDIAct -</span> Installation, gestion</h1>
            <div class=\"sousTitre\" id=\"titre\">" .
    $dataEtab .
    "</div>
        </header>

        <div class=\"space-30\"></div>

        <div id=\"gestionPW\" class=\"encart authPW\">
            <h3 class=\"text-center\">Veuillez saisir votre mot de passe</h3>
            <div class=\"space-30\"></div>
            <div class=\"text-center opa-5\">défaut : démo</div>

            <div class=\"text-center\">
                <form><input type=\"password\" class=\"inPw\" id=\"passwordInput\" required></form>
            </div>

            <div class=\"text-center\">
                <button id=\"btnPW\" class=\"btnBase btnValPw\">valider</button>
            </div>
        </div>

        <div id=\"cont\">
            <div class=\"sectionBis\">
                <div class=\"encart text-center\">
                    <div id=\"debug\" class=\"debug\">&nbsp;</div>

                    <div class=\"text-center\">
                        <script>
                            document.getElementById(\"debug\").innerHTML = \"JavaScript est actif\";
                        </script>
                        <noscript>
                            Pas de JavaScript&nbsp;! Le site consulté n'aura pas toutes les fonctionnalités prévues
                        </noscript>
                    </div>

                    <button id=\"btnAjouteConf\" class=\"btnBase btnInst\">installer la configuration</button>

                    <p class=\"explication\">Ce bouton permet d'installer la base élève et de personnaliser le titre de
                        l'écran
                        d'accueil en fonction des informations que vous avez données pour la configuration (<a
                            href=\"https://emi.re/CDIAct/lisezmoi.html\">voir site</a>). </p>
                </div>
            </div>

            <div class=\"space-50\"></div>

            <div id=\"gestionSup\">

                <div class=\"grid-2\">
                    <div class=\"encart text-center\">
                        <a href=\"presents.html\" target=\"_blank\">
                            <div id=\"btnVoirPresents\" class=\"btnBase btnStats\">présents du jour</div>
                            <p class=\"explication\">Permet d'afficher la liste des présents du jour.</p>
                        </a>
                    </div>
                    <div class=\"encart text-center\">
                        <a href=\"presentsPasse.html\" target=\"_blank\">
                            <div id=\"btnVoirPresentsPasse\" class=\"btnBase btnStats\">présents du passé</div></a>
                        <p class=\"explication\">Permet de retrouver la liste des présents à une date donnée.</p>
                    </div>
                    
                    <div class=\"space-50\"></div>
                    
                     <div class=\"encart text-center\">
                        <a href=\"maj-emprunteurs.html\" target=\"_blank\">
                            <div id=\"btnVoirMAJ\" class=\"btnBase btnStats\">mise à jour</div></a>
                        <p class=\"explication\">Permet de corriger des informations (noms, classes, ajouts emprunteurs etc.).</p>
                    </div>
                </div>

                <div class=\"space-50\"></div>



                <div class=\"encart text-center\">
                    <textarea id=\"infos\" class=\"debugInfos\">&nbsp;</textarea>

                    <button id=\"btnInfos\" class=\"btnBase btnStats\">infos de fonctionnement</button>
                    <p class=\"explication\">Diverses informations sur le bon fonctionnement&nbsp;: taille des stats,
                        exemple de données brutes etc.</p>
                </div>



                <div class=\"space-50\"></div>

                <div class=\"sectionBis\">
                    <div class=\"encart text-center\">
                        <a href=\"stats.html\" target=\"_blank\" class=\"btnBase btnStats\">voir les statistiques</a>
                        <p class=\"explication\">Lien vers une page regroupant les statistiques&nbsp;: plage
                            d'enregistrement, présents par jour de la semaine, mini/maxi etc.</p>
                    </div>
                </div>

                <div class=\"space-100\"></div>

                <div class=\"sectionBis\">
                    <h2 class=\"text-center\">Sauvegarder et restaurer</h2>
                    <div class=\"grid-2\">
                        <div class=\"encart text-center\">
                            <textarea id=\"txtCopie\" class=\"sauve\">&nbsp;</textarea>
                            <button id=\"btnCopie\" class=\"btnBase btnRestSauve\">copier les statistiques</button>

                            <div class=\"space-30\"></div>

                            <p>Pour faire une sauvegarde, faites un copié-collé des données ci-dessous dans un document
                                au
                                format texte (.txt) et enregistrez-le dans un
                                endroit sûr
                                (support amovible, espace sécurisé).</p>
                        </div>

                        <div class=\"encart text-center\">
                            <textarea id=\"txtRestaure\" class=\"sauve\" >&nbsp;</textarea>

                            <button id=\"btnRestaure\" class=\"btnBase btnRestSauve\">restaurer les statistiques</button>

                            <div class=\"space-30\"></div>

                            <p>Collez ci-dessous les données de votre sauvegarde puis cliquez sur le bouton
                                'restaurer les
                                statistiques'.</p>
                            <p>
                            <p><strong>Attention&nbsp;!</strong> Cette action efface toutes statistiques précédentes.
                            </p>
                        </div>
                    </div>


                    <div class=\"space-50\"></div>

                    <div class=\"modal-container\">
                        <div class=\"overlay modal-trigger\"></div>

                        <div class=\"modal\" role=\"dialog\" >
                            <button aria-label=\"close modal\" class=\"close-modal modal-trigger\">X</button>
                            <h1 class=\"text-noir\">Effacer les statistiques</h1>
                            <h2><strong>Attention&nbsp;!</strong></h2>
                            <p>Avez-vous pensé à faire une sauvegarde&nbsp;?</p>
                            <p>Cette opération est irréversible.</p>
                            <div class=\"space-20\"></div>
                            <div id=\"debug3\" class=\"debugEfface\">&nbsp;</div>

                            <div class=\"text-center\">
                                <button id=\"btnVideStats\" class=\"btnBase btnKill\">effacer les données</button>
                            </div>
                            <div class=\"space-20\"></div>
                        </div>
                    </div>


                    <div class=\"encart text-center\">

                        <button class=\"btnBase btnInst modal-btn modal-trigger\">Effacer les données</button>

                        <p class=\"explication\">Typiquement à ne faire (et à faire) qu'à la fin de l'année pour commencer
                            sur
                            une base vide.<br>
                            <strong>Attention&nbsp;!</strong>
                            Irréversible.<strong><br>Faites une sauvegarde avant si vous souhaitez conserver une
                                trace&nbsp;!.</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <footer class=\"text-center\">
            <hr class=\"hr-light\" />
            Denis Weiss, février 2023. Distribué selon les termes de la licence Creative
            Commons. Attribution - Pas d’utilisation commerciale - Partage dans les mêmes conditions 4.0
            International.<br>
            <a href=\"https://emi.re/contact.html\" target=\"_blank\" class=\"btn\">Contact</a>
        </footer>
    </div>

    <script>
        const emprunteurs = " .
    $dataBase .
    ";
        let pwMD = \"" .
    $dataPW .
    "\";
        let etabNM = \"" .
    $dataEtab .
    "\";
    </script>
    <script src=\"./../js/md5.min.js\"></script>
    <script src=\"./../js/jquery.min.js\"></script>
    <script src=\"./../js/gestion.js\"></script>
</body>

</html>";

$out = fopen($dataFichier, 'w+');

if (!$partieHTML) {
    echo 'Problème de fichier HTML ';
}

if (!$out) {
    echo "Problème d'ouverture du fichier ";
}

$ecritFichier = fprintf($out, $partieHTML);

if (!$ecritFichier) {
    echo "Problème d'écriture du fichier ";
}

fclose($out);

echo $partieHTML;

?>
