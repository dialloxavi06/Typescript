function randint(inf: number, sup: number): number {
  return Math.floor(Math.random() * (sup - inf + 1) + inf);
}

function comptage(n: number): void {
  let nbrePositif = 0;
  let nbreNégatif = 0;

  for (let i = 0; i < n; ++i) {
    let nbre = randint(-10, 10);

    process.stdin.write(nbre + " ");

    if (nbre >= 0) nbrePositif++;
    else nbreNégatif++;
  }

  console.log();
  console.log("Nbre positif =", nbrePositif);
  console.log("Nbre négatif =", nbreNégatif);
}

function accumulation(n: number): number {
  let somme = 0;

  for (let i = 0; i < n; i++) {
    somme += randint(-10, 10);
    // let nbre = randint(-10, 10);
    // somme += nbre;
  }

  return somme;
}

function accumulationSelective(n: number): number {
  let produit = 1;

  for (let i = 0; i < n; i++) {
    let nbre = randint(-10, 10);
    if (nbre > 0) produit *= nbre;
  }

  return produit;
}

function minMax(n: number, a: number, b: number): void {
  let maximum = a;
  let minimum = b;

  for (let i = 0; i < n; i++) {
    let nbre = randint(a, b);

    if (maximum < nbre) maximum = nbre;
    if (minimum > nbre) minimum = nbre;
  }

  console.log("maximum =", maximum);
  console.log("minumum =", minimum);
}

function minMaxV2(n: number, a: number, b: number): void {
  if (n === 0) return;

  let nbre = randint(a, b);
  let maximum = nbre;
  let minimum = nbre;

  for (let i = 0; i < n - 1; i++) {
    let nbre = randint(a, b);

    if (maximum < nbre) maximum = nbre;
    if (minimum > nbre) minimum = nbre;
  }

  console.log("maximum =", maximum);
  console.log("minumum =", minimum);
}

function afficheLigne(n: number): void {
  // afficher une ligne
  for (let j = 0; j < n; j++) process.stdout.write("o");
  console.log();
}

function affichageCarré(n: number): void {
  for (let i = 0; i < n; i++) {
    // afficher une ligne
    // for (let j = 0; j < n; j++) process.stdout.write("o");
    // console.log();
    afficheLigne(n);
  }
}

// ind est dans [0, n-1]
function afficheLigneX(n: number, ind: number): void {
  for (let i = 0; i < n; i++)
    if (i === ind) process.stdout.write("x");
    else process.stdout.write("o");

  console.log();
}

function afficheDiagonale(n: number): void {
  // for (let i = 0; i < n; i++) afficheLigneX(n, i);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++)
      if (i === j) process.stdout.write("x");
      else process.stdout.write("o");

    console.log();
  }
}

function afficheTriangle(n: number): void {
  // for (let i = 0; i < n; i++) afficheLigne(i + 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) process.stdout.write("o");
    console.log();
  }
}

function sommeCarré(n: number): void {
  // for (let i = 1; i <= n; i++)
  //   for (let j = 1; j <= n; j++)
  //     for (let k = 1; k <= n; k++)
  //       if (j <= i && i < k && i ** 2 + j ** 2 === k ** 2)
  //         console.log(i, j, k);

  for (let i = 1; i < n; i++)
    for (let j = 1; j <= i; j++)
      for (let k = i + 1; k <= n; k++)
        if (i ** 2 + j ** 2 === k ** 2) console.log(i, j, k);

  let i = 1;
  while (i < n) {
    let j = 1;
    while (j <= i) {
      let k = i + 1;
      while (k <= n) {
        if (i ** 2 + j ** 2 === k ** 2) console.log(i, j, k);
        k++;
      }
      j++;
    }
    i++;
  }
}

function main(): void {
  // comptage(10);
  // console.log("accumulation(10) =", accumulation(10));
  // console.log("accumulatioSelective(10) =", accumulationSelective(10));
  // minMax(10, -10, 10);
  // affichageCarré(5);
  // afficheDiagonale(5);
  // afficheTriangle(5);
  sommeCarré(27);
}

main();
