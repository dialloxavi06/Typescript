import { ItérateurListeChaînée, ListeChaînée } from "./ListeChainee";

function affichage(liste: ListeChaînée): void {
  let it = new ItérateurListeChaînée(liste);

  while (!it.fin()) {
    console.log(it.valeurCourante);
    it.avancer();
  }
}

function main(): void {
  let liste = new ListeChaînée();

  liste.ajouter(4);
  liste.ajouter(3);
  liste.ajouter(2);
  liste.ajouter(1);

  console.log("Affichage avec la fonction :");
  affichage(liste);

  console.log("Affichage avec la méthode");
  liste.affichage();
}

main();
