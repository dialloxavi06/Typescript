///// Exercice 1
function compteMots(chaîne: string): Map<string, number> {
  let m = new Map<string, number>();
  let mot = "";

  for (let i = 0; i < chaîne.length; i++)
  {
    if (chaîne[i] === " " || i === chaîne.length-1) {
      if (i === chaîne.length-1)
        mot += chaîne[i];
      if (mot.length > 0) {
        if (m.has(mot)) m.set(mot, m.get(mot)! + 1);
        else m.set(mot, 1);
      }
      mot = "";
    }
    else
      mot += chaîne[i];
  }
  return m;
}

console.log(compteMots("Ceci est une chaîne et cette chaîne est constituée de dix mots"));


///// Exercice 2

function multiple(t: Array<number>): boolean {
  let m = new Map<number, number>();

  for (let v of t)
    if (m.has(v)) return true;
    else m.set(v, 1);

  return false;
}

let t = new Array<number>();
t.push(1);
t.push(2);
t.push(3);
t.push(1);
t.push(2);
t.push(5);
t.push(1);

console.log(multiple(t));


///// Exercice 3

let mémoire = new Map<number, number>();
mémoire.set(0, 0);
mémoire.set(1, 1);

function fibonacci(n: number, mémoire: Map<number, number>): number {
  // Tester ici si on connaît déjà le résultat pour n, si oui le retourner
  if (mémoire.has(n)) return mémoire.get(n)!;
  else {
    // Sinon, faire l'appel récursif
    let résultat = fibonacci(n - 1, mémoire) + fibonacci(n - 2, mémoire);
    // Stocker le résultat dans mémoire
    mémoire.set(n, résultat);
    // Retourner le résultat
    return résultat;
  }
}

console.log(fibonacci(12, mémoire));  // fibo(12) = 144


///// Exercice 4

/// Fonction d'Ackermann version clé string m_n
console.log("Test de la fonction d'Ackermann");
let memoireAck = new Map<string, number>();

function ackermann(m: number, n: number): number
{
    // calcule de la clé m_n (string)
    let cle = m.toString();
    cle += "_";
    cle += n.toString();

    // Tester ici si on connaît déjà le résultat pour la clé m_n, si oui le retourner directement
    if (memoireAck.has(cle))
    {
        return memoireAck.get(cle)!;
    }
    else
    {
        // Sinon, la map ne contient pas la clé m_n alors, faire l'appel récursif et on ajouter le résultat à la map
        let res : number;
        if (m === 0)
            res = n+1;
        else if (m > 0 && n === 0)
            res = ackermann(m-1, 1);
        else
            // m > 0 et n > 0
            res = ackermann(m-1, ackermann(m, n-1));
        
        // ajout dans la map principal de la valeur calculée pour la clé m_n (string)
        memoireAck.set(cle, res);
        return res;
    }
}

// Test de la fonction d'Ackermann
for (let m = 0; m <= 3; m++)
{
    for (let n = 0; n <= 4; n++)
    {
        console.log("Ack(" + m + ", " + n + ") = " + ackermann(m, n));
    }
}


///// Exercice 5

function occurenceMaximum(t: Array<number>): [number, number] {
  let m = new Map<number, number>();

  for (let v of t)
    if (m.has(v)) m.set(v, m.get(v)! + 1);
    else m.set(v, 1);

  let valeur = -1;
  let nbreOccurences = -1;

  for (let entrée of m.entries())
    if (entrée[1] > nbreOccurences) {
      valeur = entrée[0];
      nbreOccurences = entrée[1];
    }

  return [valeur, nbreOccurences];
}

console.log(occurenceMaximum(t));
