var listeATrier = ["chien","niche","chine","herp","table","derp","balte"];

// On affiche les Mots que l'on va trier

console.log("Nous allons trouver les anagrammes parmis les mots suivant:");

for(i=0; i<listeATrier.length; i++) {
  console.log(listeATrier[i]);
}

// Liste des fonctions
var contient = function contient(tableau1,tableau2) {
  for(var i=0; i<tableau1.length; i++) {
    if(tableau2.indexOf(tableau1[i]) == -1) {
      return false;
    }
  }
  return true;
}

var tableauxSontEgaux = function tableauxSontEgaux(tableau1,tableau2) {
  return contient(tableau1,tableau2) && contient(tableau2,tableau1);
}

var estInclusDans = function estInclusDans(element, tableau) {
  for (var i=0; i<tableau.length; i++) {
    if (tableauxSontEgaux(element,tableau[i])) {
      return true;
    }
  }
  return false;
}

var estInclusAuFond = function estInclusAuFond(element, tableauDeTableaux) {
  for (var i=0; i<tableauDeTableaux.length; i++) {
    for (var j=0; j<tableauDeTableaux[i].length; j++) {
      if (element === tableauDeTableaux[i][j]) {
        return true;
      }
    }
  }
  return false;
}

var dedoublonage = function dedoublonage(avecDoublons){
  var sansDoublons = [];
  for (var i=0; i<avecDoublons.length; i++) {
    var listeAComparer = avecDoublons[i];
    // si listeAComparer n'est pas inclue dans sansDoublons
    // alors, j'ajoute liste a comparer dans sansDoublons
    if (! estInclusDans(listeAComparer, sansDoublons)){
      sansDoublons.push(listeAComparer);
    }
  }
  return sansDoublons;
}


var estAnagram = function estAnagram(mot1,mot2) {
  //return Math.random() > 0.5;
  if (mot1.length != mot2.length) {
    return false;
  }
  return tableauxSontEgaux(mot1,mot2);
}

// Corps du programme

var listesAnagram = [];
var listeNonAnagram = [];

for( var i = 0; i<listeATrier.length; i++) {
  var motAComparer = listeATrier[i];
  // listAnagramCourant
  var listAnagramCourant = [];
  if( estInclusAuFond(motAComparer,listesAnagram) || estInclusAuFond(motAComparer,listeNonAnagram) ) {
    // le pb c'est que listesAnagram est un tableau de tableaux et je dois verifier les mots à l'intérieur
  } else {
    for(var j = i+1; j<listeATrier.length; j++){
      var motCandidat = listeATrier[j];
      if(estAnagram(motAComparer,motCandidat)) {
        listAnagramCourant.push(motCandidat);
        // ajouter a listAnagramCourant
      }
    }
    if (listAnagramCourant.length == 0) { // le tableau est vide
      listeNonAnagram.push(motAComparer);
    } else {
      listAnagramCourant.push(motAComparer);
    }
    // ajouter listAnagramCourant dans listesAnagram
    if (!listAnagramCourant[0] ) {
      //console.log("bite");
    } else {
    listesAnagram.push(listAnagramCourant);
    }
  }
}


//listesAnagram = dedoublonage(listesAnagram);

// Affichage du résultat

var be_anagram = "sont anagrammes.";
var non_anagram = " n'a pas d'anagrammes.";

console.log(" ");
console.log("----------------------------------------------------");
console.log(" ");

var afficheResult = function afficheResult(anagrams){
  var result_1 = "";
  for(var i=0; i<anagrams.length; i++) {
    result_1 += anagrams[i] + ", ";
  }
  result_1 += be_anagram;
  console.log(result_1);
};

for (var i=0; i<listesAnagram.length; i++) {
  afficheResult(listesAnagram[i]);
}

console.log(" ");
console.log("----------------------------------------------------");
console.log(" ");

var afficheNonAna = function afficheNonAna(nonAnagram) {
  var result_2 = "";
  for(var i=0; i<nonAnagram.length; i++) {
    result_2 += nonAnagram[i];
  }
  result_2 += non_anagram;
  console.log(result_2);
}

for (var i=0; i<listeNonAnagram.length; i++) {
  afficheNonAna(listeNonAnagram[i]);
}
