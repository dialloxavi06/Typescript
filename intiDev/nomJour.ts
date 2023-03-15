import * as readLineSync from "readline-sync";

function estDivisible(x: number, y: number): boolean {
  return x % y === 0;
}

function estBissextile(année: number): boolean {
  return (estDivisible(année, 4) && !estDivisible(année, 100)) || estDivisible(année, 400);
}

function valeurCorrigée(mois: number, année: number): number {
  if (mois === 1 && !estBissextile(année)) return 4;
  else if (mois === 1) return 3;
  else if (mois === 2 && !estBissextile(année)) return 0;
  else if (mois === 2 || mois === 8) return 6;
  else if (mois === 3 || mois === 11) return 0;
  else if (mois === 4 || mois === 7) return 3;
  else if (mois === 5) return 5;
  else if (mois === 6) return 1;
  else if (mois === 9 || mois === 12) return 2;
  else if (mois === 10) return 4;
  else return -1;
}

function numJour(jour: number, mois: number, année: number): number {
  let ab = Math.floor(année / 100);
  let cd = année % 100;
  let j = jour;
  let k = Math.floor(cd / 4);
  let q = Math.floor(ab / 4);
  let M = valeurCorrigée(mois, année);

  return (k + q + cd + M + j + 2 + 5 * ab) % 7;
}

function numVersNom(numJour: number): string {
  if (numJour === 0) return "dimanche";
  else if (numJour === 1) return "lundi";
  else if (numJour === 2) return "mardi";
  else if (numJour === 3) return "mercredi";
  else if (numJour === 4) return "jeudi";
  else if (numJour === 5) return "vendredi";
  else if (numJour === 6) return "samedi";
  else return "";
}

function nomJour(jour: number, mois: number, année: number): string {
  return numVersNom(numJour(jour, mois, année));
}

function nbreJours(mois: number, année: number): number {
  if (mois === 4 || mois === 6 || mois === 9 || mois === 11) return 30;
  else if (mois === 2 && estBissextile(année)) return 29;
  else if (mois === 2) return 28;
  else return 31;
}

function moisValide(mois: number): boolean {
  return mois < 0 || mois > 12;
}

function jourValide(jour: number, mois: number, année: number): boolean {
  return jour < 0 || jour > nbreJours(mois, année);
}

function dateValide(jour: number, mois: number, année: number): boolean {
  // if (mois < 0 || mois > 12) return false;
  // else if (jour < 0 || jour > nbreJours(mois, année)) return false;
  // else return true;

  // if (mois < 0 || mois > 12 || jour < 0 || jour > nbreJours(mois, année)) return false;
  // else return true;

  // if (!moisValide(mois) || !jourValide(jour, mois, année)) return false;
  // else return true;

  // if (moisValide(mois) && jourValide(jour, mois, année)) return true;
  // else return false;

  return moisValide(mois) && jourValide(jour, mois, année);
}

function main(): void {
  let jour = Number(readLineSync.question("Entrez le jour : "));
  let mois = Number(readLineSync.question("Entrez le mois : "));
  let année = Number(readLineSync.question("Entrez l'année : "));

  if (dateValide(jour, mois, année)) console.log("On est un", nomJour(jour, mois, année));
  else console.log("La date n'est pas correcte");
}

main();
