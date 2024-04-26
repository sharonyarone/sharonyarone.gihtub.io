function compte_a_rebours() {
  var compte_a_rebours = document.getElementById("compte_a_rebours");
  var date_actuelle = new Date();
  var date_evenement = new Date("Sep 25 2024 09:00:00");
  var total_secondes = (date_evenement - date_actuelle) / 1000;
  var prefixe = '<div class="prefixe">Rendez-vous dans : </div>';
  if (total_secondes < 0) {
    prefixe = "Compte à rebours terminé il y a ";
    total_secondes = Math.abs(total_secondes);
  }

  if (total_secondes > 0) {
    var jours = Math.floor(total_secondes / (60 * 60 * 24));
    var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
    minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
    secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));

    if (secondes < 10) {
      secondes = '0' + secondes;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (heures < 10) {
      heures = '0' + heures;
    }

    var mot_jour = "jours";
    var mot_heure = "heures";
    var mot_minute = "minutes";
    var mot_seconde = "secondes";

    if (secondes < 2) {
      mot_seconde = "seconde";
    }

    compte_a_rebours.innerHTML = prefixe + '<br /><div class="block">' 
      + '<div class="nb">' + jours + '</div><br />' + mot_jour + '</div><div class="block">' 
      + '<div class="nb">' + heures + '</div><br />' + mot_heure + '</div><div class="block">'
      + '<div class="nb">' + minutes + '</div><br />' + mot_minute + '</div><div class="block"> '
      + '<div class="nb">' + secondes + '</div><br />' + mot_seconde + '</div>';
  } else {
    compte_a_rebours.innerHTML = 'Compte à rebours terminé.';
  }

  var actualisation = setTimeout("compte_a_rebours();", 1000);
}
compte_a_rebours();
