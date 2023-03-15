import * as readLineSync from "readline-sync";

function exercice_1(): void {
  let prénom = readLineSync.question("Entrez votre prénom : ");
  console.log("Bonjour,", prénom);
}

function exercice_2(): void {
  let prénom = readLineSync.question("Entrez votre prénom : ");
  let nom = readLineSync.question("Entrez votre nom : ");
  console.log("Bonjour,", prénom, nom);
}

function exercice_3(): void {
  let nombre1 = Number(readLineSync.question("Entrez le premier nombre : "));
  let nombre2 = Number(readLineSync.question("Entrez le second nombre : "));
  console.log("La somme est", nombre1 + nombre2);
}

function exercice_4(): void {
  let a = Number(readLineSync.question("Entrez le premier nombre : "));
  let b = Number(readLineSync.question("Entrez le second nombre : "));
  let c = Number(readLineSync.question("Entrez le troisième nombre : "));

  console.log("Le résultat est", (a + b) * c);
}

function exercice_5(): void {
  let nom = readLineSync.question("Entrez votre nom : ");
  let age = Number(readLineSync.question("Entrez votre age : "));

  console.log(nom, ", à votre prochain anniversaire vous aurez", age + 1);
}

function exercice_6(): void {
  const heuresParJour = 24;
  const minutesParHeures = 60;
  const secondesParMinutes = 60;

  let nbreJours = Number(readLineSync.question("Entrez le nombre de jour : "));

  let nbreHeures = nbreJours * heuresParJour;
  let nbreMinutes = nbreHeures * minutesParHeures;
  let nbreSecondes = nbreMinutes * secondesParMinutes;

  console.log("Le nombre d'heures est", nbreHeures);
  console.log("Le nombre de minutes est", nbreMinutes);
  console.log("Le nombre de secondes est", nbreSecondes);
}

function exercie_7(): void {
  const livresParKilo = 2.204;

  let poidsKilo = Number(readLineSync.question("Entrez un poids en kilo : "));
  let poidsLivre = poidsKilo * livresParKilo;

  console.log("Le poids en livre est", poidsLivre);
}

function exercice_8(): void {
  let a = Number(readLineSync.question("Entrez le premier nombre : "));
  let b = Number(readLineSync.question("Entrez le second nombre : "));

  let quotient = Math.floor(a / b);
  // let reste = a % b;

  console.log("on peut multiplier", b, "au plus", quotient, "fois avant de dépasser", a);
}

function exercice_9(): void {
  let a = 1;
  let b = 2;
  let c = 3;

  let d = a;
  a = b;
  b = c;
  c = d;

  console.log("a =", a, "b =", b, "c =", c);
}

function exercice_10(): void {
  let montant = Number(readLineSync.question("Entrez le montant : "));
  let sommePayée = Number(readLineSync.question("Entrez la somme payée : "));

  let montantARendre = sommePayée - montant;

  console.log("Montant à rendre :", montantARendre);

  let nbrePièces10 = Math.floor(montantARendre / 10);
  montantARendre = montantARendre % 10;
  // montantARendre %= 10;

  let nbrePièces5 = Math.floor(montantARendre / 5);
  montantARendre = montantARendre % 5;

  let nbrePièces2 = Math.floor(montantARendre / 2);
  montantARendre = montantARendre % 2;

  let nbrePièces1 = montantARendre;

  console.log("Nombre de pièces de 10 à rendre :", nbrePièces10);
  console.log("Nombre de pièces de 5 à rendre :", nbrePièces5);
  console.log("Nombre de pièces de 2 à rendre :", nbrePièces2);
  console.log("Nombre de pièces de 1 à rendre :", nbrePièces1);
}
