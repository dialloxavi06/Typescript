// Exercice 1.1
function egal(x: number, y: number, z: number): boolean {
  return x === y && y === z; // il n'est pas nécessaire de tester : x === z
}

// Exercice 1.2
function entre(x: number, y: number, z: number): boolean {
  // cas 1 : expression booléenne qui vaut vraie ssi x <= z et x <= y <= z
  // let cas1 = x <= y && y <= z;
  // cas 2 : expression booléenne qui vaut vraie ssi x > z et z <= y <= x
  // let cas2 = z <= y && y <= x;

  // retourne une expression booléenne basée sur cas1 et cas2
  // return cas1 || cas2;
  return (x <= y && y <= z) || (z <= y && y <= x);
}

// Exercice 1.3
function estDivisible(x: number, y: number): boolean {
  return x % y === 0;
}

function estPair(x: number): boolean {
  // return x % 2 === 0;
  return estDivisible(x, 2);
}

function estImpair(x: number): boolean {
  // return x % 2 !== 0;
  // return x % 2 === 1;
  // return !estDivisible(x, 2);
  return !estPair(x);
}

// Exercice 2
function i1(x: number): boolean {
  return x >= -1 && x <= 3;
}

function i2(x: number): boolean {
  return x > -1 && x <= 3;
}

function i3(x: number): boolean {
  // return (x > -1 && x <= 3) || (x >= 8 && x <= 10);
  return i2(x) || (x >= 8 && x <= 10);
}

function i4(x: number): boolean {
  return i2(x) || x >= 8;
}

// Exercice 3
function estPositif(x: number): boolean {
  return x >= 0;
}

function estNégatif(x: number): boolean {
  return !estPositif(x);
}

function mêmeSigne(x: number, y: number): boolean {
  // return (x >= 0 && y >= 0) || (x < 0 && y < 0);
  // return (estPositif(x) && estPositif(y)) || (estNégatif(x) && estNégatif(y));
  return estPositif(x) === estPositif(y);
}

// Exercice 4
function plusPetit(a: number, b: number, c: number): boolean {
  return a < b && b < c; // Il n'est pas nécessaire de tester a < c
}

// Exercice 5
function estBissextile(année: number): boolean {
  // cas1 : divisible par 4 mais pas par 100
  // let cas1 = estDivisible(année, 4) && !estDivisible(année, 100);
  // cas2 : divisible par 400
  // let cas2 = estDivisible(année, 400);

  // return cas1 || cas2;

  return (estDivisible(année, 4) && !estDivisible(année, 100)) || estDivisible(année, 400);
}

// Exercice 6
function checkFermat(a: number, b: number, c: number, n: number): void {
  if (n >= 2 && a ** n + b ** n === c ** n) console.log("Fermat avait tort");
  else console.log("Cela ne marche pas");
}

// Exercice 7
// Retourne vrai ssi z <= x + y
function plusPetitSomme(x: number, y: number, z: number): boolean {
  return z <= x + y;
}

function triangle(a: number, b: number, c: number): boolean {
  // if (c <= a + b) return true;
  // else if (a <= b + c) return true;
  // else if (b <= a + c) return true;
  // else return false;

  // if (c <= a + b || a <= b + c || b <= a + c) return true;
  // else return false;

  // if (plusPetitSomme(a, b, c) || plusPetitSomme(b, c, a) || plusPetitSomme(c, a, b)) return true;
  // else return false;

  return plusPetitSomme(a, b, c) || plusPetitSomme(b, c, a) || plusPetitSomme(c, a, b);
}

// Exercice 8
function calculTauxRemise(prixTTC: number): number {
  if (prixTTC < 1000) return 0;
  else if (prixTTC < 2000) return 0.01;
  else if (prixTTC < 5000) return 0.02;
  else return 0.05; // prixTTC >= 5000
}

function prixRemisé(prixHT: number): void {
  let prixTTC = prixHT * 1.1926;
  let tauxRemise = calculTauxRemise(prixTTC); // sous forme 0.x
  let remise = prixTTC * tauxRemise;
  let prixFinal = prixTTC - remise;

  console.log("remise =", remise);
  console.log("prix final =", prixFinal);
}

// Exercice 9
function nbreJours(mois: number, année: number): number {
  if (mois === 4 || mois === 6 || mois === 9 || mois === 11) return 30;
  else if (mois === 2 && estBissextile(année)) return 29;
  else if (mois === 2) return 28;
  else return 31;
}

function demain(jour: number, mois: number, année: number): void {
  jour = jour + 1;

  if (jour > nbreJours(mois, année)) {
    jour = 1;
    mois = mois + 1;
  }

  if (mois > 12) {
    mois = 1;
    année = année + 1;
  }

  console.log(jour, "/", mois, "/", année);
}

// Exercice 10
function nbrePiecesRendus(montant: number, valeurPièce: number, nbreMaxPieces: number): number {
  let nbrePièces = Math.floor(montant / valeurPièce);
  if (nbrePièces > nbreMaxPieces) nbrePièces = nbreMaxPieces;
  return nbrePièces;
}

function rendu(
  montantARendre: number,
  nbreMax10: number,
  nbreMax5: number,
  nbreMax2: number,
  nbreMax1: number
): void {
  let nbrePièces10 = nbrePiecesRendus(montantARendre, 10, nbreMax10);
  montantARendre = montantARendre - nbrePièces10 * 10;

  let nbrePièces5 = nbrePiecesRendus(montantARendre, 5, nbreMax5);
  montantARendre = montantARendre - nbrePièces5 * 5;

  let nbrePièces2 = nbrePiecesRendus(montantARendre, 2, nbreMax2);
  montantARendre = montantARendre - nbrePièces2 * 2;

  let nbrePièces1 = nbrePiecesRendus(montantARendre, 1, nbreMax1);
  montantARendre = montantARendre - nbrePièces1;

  if (montantARendre === 0) {
    console.log("Nombre de pièces de 10 à rendre :", nbrePièces10);
    console.log("Nombre de pièces de 5 à rendre :", nbrePièces5);
    console.log("Nombre de pièces de 2 à rendre :", nbrePièces2);
    console.log("Nombre de pièces de 1 à rendre :", nbrePièces1);
  } else console.log("Monnaie insuffisante");
}

function main(): void {
  // console.log("egal(10, 10, 10) =", egal(10, 10, 10));
  // console.log("egal(10, 10, 20) =", egal(10, 10, 20));
  // console.log("egal(10, 20, 10) =", egal(10, 20, 10));
  // console.log("egal(20, 10, 10) =", egal(20, 10, 10));
  // console.log("egal(20, 10, 20) =", egal(20, 10, 20));
  // console.log("egal(10, 20, 30) =", egal(10, 20, 30));
}

main();
