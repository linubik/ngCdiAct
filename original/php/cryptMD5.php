<?PHP
header('Content-Type: text/plain; charset=utf-8');

//-------------------  INFOS ---------------------------- //

//Denis Weiss. juillet 2021
//https://emi.re/CDIAct/
//Code "pédagogique" à plat et non optimisé pour faciliter la compréhension

//-------------------  Récupération des données  ---------------------------- //
function clean($text)
{
    $text = trim( preg_replace( '/\s+/', ' ', $text ) );  
     return trim(preg_replace('/\\\\r|\\\\n|\\\\t/i', ' ', $text));
}

$sPW       = (isset($_POST["sPW"]))     ?    $_POST["sPW"]    : NULL;

$sPW        = md5($sPW);          

//----------
if ( $fPW  ) {
    echo $sPW;
    exit;
} else {
    print "Problème de chiffrage" ;

	exit;
}

//-------------------  Fin ajout des données ---------------------------- //


?>