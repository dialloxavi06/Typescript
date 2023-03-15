// Question 1
const nbreSecJour = 24 * 60 * 60;
// Question 2
const nbreSecAn = nbreSecJour * 365.2425;
// Question 3
const nbreSecMois = nbreSecAn / 12;

const annéeRef = 1900;

// Question 4
function nbreSecDepuis(jour: number, mois: number, année: number, annéeRéférence: number): number {
  let nbreAnnées = année - annéeRéférence;
  let nbreMois = mois - 1;
  let nbreJour = jour - 1;

  return nbreJour * nbreSecJour + nbreMois * nbreSecMois + nbreAnnées * nbreSecAn;
}

// Question 5
function nbreSecDepuis1900(jour: number, mois: number, année: number): number {
  return nbreSecDepuis(jour, mois, année, annéeRef);
}

// Question 6
function ageEnSecDate(
  jourNaissance: number,
  moisNaissance: number,
  annéeNaissance: number,
  jour: number,
  mois: number,
  année: number
): number {
  return (
    nbreSecDepuis1900(jour, mois, année) -
    nbreSecDepuis1900(jourNaissance, moisNaissance, annéeNaissance)
  );
}

// Question 7
function ageEnSec(jourNaissance: number, moisNaissance: number, annéeNaissance: number): number {
  let date = new Date();

  let jour = date.getDate();
  let mois = date.getMonth() + 1;
  let année = date.getFullYear();

  return ageEnSecDate(jourNaissance, moisNaissance, annéeNaissance, jour, mois, année);
}

function main(): void {
  console.log(ageEnSec(23, 4, 1965));
}

main();
