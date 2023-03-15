// Problèmes de recherche
// Données : collection, valeur
// Sortie : la valeur est-elle dans la collection ?

import { resourceUsage } from "process";

// entrées :
// collection <=> tableaux t
// valeur <=> un élément du type du tableau x
// a : indice de début
// b : indice de fin (exclus)

// Sortie <=> booléen <=> x est dans t[a:b]

// tableau non trié

function randInt(a: number, b: number): number {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function genTab(n: number): Array<number> {
  let t = new Array<number>();

  for (let i = 0; i < n; i++) t.push(randInt(-n * 10, n * 10));

  return t;
}

function présentSéquentielleNaive(
  t: Array<number>,
  x: number,
  a: number,
  b: number
): boolean {
  let res = false;
  let cpt = 0;

  for (let e of t) {
    cpt++;
    if (e === x) {
      res = true;
    }
  }

  console.log(cpt);

  return res;
}

function présentSéquentielle(
  t: Array<number>,
  x: number,
  a: number,
  b: number
): boolean {
  let cpt = 0;

  for (let e of t) {
    cpt++;
    if (e === x) {
      console.log(cpt);
      return true;
    }
  }

  console.log(cpt);

  return false;
}

// tableau trié
function présentSéquentielleTrié(
  t: Array<number>,
  x: number,
  a: number,
  b: number
): boolean {
  let cpt = 0;

  for (let e of t) {
    cpt++;
    if (e === x) {
      console.log(cpt, e, x);
      return true;
    } else if (e > x) {
      console.log(cpt, e, x);
      return false;
    }
  }

  console.log(cpt);

  return false;
}

function rechercheDichotomique(
  t: Array<number>,
  x: number,
  a: number,
  b: number
): boolean {
  let cpt = 0;

  while (a < b) {
    let m = Math.floor((a + b - 1) / 2);

    cpt++;
    if (t[m] === x) {
      console.log(cpt);
      return true;
    } else if (t[m] < x) a = m + 1;
    else b = m;
  }

  console.log(cpt);

  return false;
}

function main(): void {
  //   let t = [3, 1, 10, 7, 12, 20, 30, 4];

  //   console.log(présentSéquentielleNaive(t, 8, 0, t.length));
  //   console.log(présentSéquentielleNaive(t, 7, 0, t.length));

  let trand = genTab(1000);
  //   console.log(présentSéquentielleNaive(trand, 1000000, 0, trand.length));
  //   console.log(
  //     présentSéquentielleNaive(trand, trand[100], 0, trand.length)
  //   );

  //   console.log(présentSéquentielle(trand, 1000000, 0, trand.length));
  //   console.log(présentSéquentielle(trand, trand[100], 0, trand.length));

  let x = trand[100];

  trand.sort((n1: number, n2: number) => n1 - n2);

  console.log(présentSéquentielle(trand, 2, 0, trand.length));
  console.log(présentSéquentielle(trand, x, 0, trand.length));
  console.log(présentSéquentielleTrié(trand, 2, 0, trand.length));
  console.log(présentSéquentielleTrié(trand, x, 0, trand.length));
  console.log(rechercheDichotomique(trand, 2, 0, trand.length));
  console.log(rechercheDichotomique(trand, x, 0, trand.length));
}

main();
