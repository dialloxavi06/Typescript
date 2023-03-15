import * as readLineSync from "readline-sync";

function paire(n: number): Array<number> {
  let nbPaires = new Array<number>();

  for (let i = 0; i < n; i++) {
    let nbre = Number(readLineSync.question("Entrez un nombre : "));

    if (nbre % 2 === 0) nbPaires.push(nbre);
  }

  return nbPaires;
}

function ajouterUn(t: Array<number>): void {
  for (let i in t) t[i]++;
  //   for (let i = 0; i < t.length; i++) t[i]++;
}

function plusUn(t: Array<number>): Array<number> {
  //   let res = [...t];
  //   ajouterUn(res);

  let res = new Array<number>();

  for (let e of t) res.push(e + 1);

  return res;
}

function decalage(t: Array<number>): void {
  let aux = t[t.length - 1];

  // boucle
  // t[t.length - 1] = t[t.length - 2]
  // t[t.length - 2] = t[t.length - 3]
  // t[t.length - 3] = t[t.length - 4]
  // ...
  // t[i] = t[i - 1]
  // ...
  // t[1] = t[0]
  for (let i = t.length - 1; i > 0; i--) t[i] = t[i - 1];

  t[0] = aux;
}

function inverse(t: Array<number>): void {
  for (let i = 0; i < Math.floor(t.length / 2); i++) {
    let aux = t[i];
    t[i] = t[t.length - 1 - i];
    t[t.length - 1 - i] = aux;
  }
}

function randInt(lb: number, ub: number): number {
  return Math.floor(Math.random() * (ub - lb + 1)) + lb;
}

function tirages(n: number): Array<number> {
  let nbreTirages = new Array<number>();

  for (let i = 0; i < 13; i++) nbreTirages.push(0);

  for (let i = 0; i < n; i++)
    nbreTirages[randInt(1, 6) + randInt(1, 6)] += 1;

  return nbreTirages;
}

function affichageNombres(nbreTirages: Array<number>): void {
  for (let i = 2; i < nbreTirages.length; i++)
    console.log("somme =", i, ":", nbreTirages[i]);
}

function barre(n: number): string {
  let ch = "";

  for (let i = 0; i < n; i += 100) ch += "*";

  return ch;
}

function affichageHistogrammes(nbreTirages: Array<number>): void {
  for (let i = 2; i < nbreTirages.length; i++)
    console.log(barre(nbreTirages[i]));
}

function main(): void {
  //   let t = paire(5);
  //   console.log(t);
  //   console.log(paire(5));
  //   let tmain = [1, 2, 3];
  //   ajouterUn(tmain);
  //   console.log(tmain);
  //   let tres = plusUn(tmain);
  //   console.log(tmain);
  //   console.log(tres);
  //   let t = [23, 28, 6, 49, 50];
  //   decalage(t);
  //     console.log(t);
  //   inverse(t);
  //   console.log(t);

  let nbreTirages = tirages(10000);
  console.log(nbreTirages);
  affichageNombres(nbreTirages);
  affichageHistogrammes(nbreTirages);
}

main();
