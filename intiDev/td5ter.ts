// L'expression est bien parenthésée si quand on parcours la chaîne
// - A aucun moment, elle devient négative car on fermerait des parenthèses sans en avoir ouverte : ")", "(()))()"
// - A la fin, le compteur vaut 0 sinon on a des parenthèses ouvertes non fermées

function bienParenthésée(ch: string): boolean {
  let compteur = 0;

  for (let c of ch) {
    // On met à jour le compteur
    if (c === "(") compteur++;
    else if (c === ")") compteur--;

    // A-t'on un déséquilibre ?
    if (compteur < 0) return false;
  }

  // Le compteur est-il revenu à 0 ?
  return compteur === 0;
}

// A chaque fois que le compteur revient à 0 pendant le parcours de la chaîne, on a un nouveau facteur

function nbreFacteurs(ch: string): number {
  let compteur = 0;
  let res = 0;

  for (let c of ch) {
    // On met à jour le compteur
    if (c === "(") compteur++;
    else if (c === ")") compteur--;

    // Le compteur est-il revenu à 0 et a-t'on un nouveau facteur ?
    if (compteur === 0) res++;
  }

  return res;
}

// On va recopier la chaîne et ajouter quand le compteur revient à 0 sauf quand on est à la fin de la chaîne

function factorisation(ch: string): string {
  let res = "";
  let compteur = 0;

  for (let i = 0; i < ch.length; i++) {
    res += ch[i];

    // On met à jour le compteur
    if (ch[i] === "(") compteur++;
    else if (ch[i] === ")") compteur--;

    // Le compteur est-il revenu à 0 et a-t'on un nouveau facteur et reste-t'il des caractères à lire?
    if (compteur === 0 && i != ch.length - 1) res += "*";
  }

  return res;
}

function main(): void {
  console.log('bienParenthésée("(()())") =', bienParenthésée("(()())"));
  console.log('bienParenthésée("(()()") =', bienParenthésée("(()()"));
  console.log('bienParenthésée("(())(") =', bienParenthésée("(())("));

  console.log('nbreFacteurs("(()())") =', nbreFacteurs("(()())"));
  console.log('nbreFacteurs("()(()())") =', nbreFacteurs("()(()())"));
  console.log(
    'nbreFacteurs("(())()(()())") =',
    nbreFacteurs("(())()(()())")
  );

  console.log('factorisation("(()())") =', factorisation("(()())"));
  console.log('factorisation("()(()())") =', factorisation("()(()())"));
  console.log(
    'factorisation("(())()(()())") =',
    factorisation("(())()(()())")
  );
}

main();
