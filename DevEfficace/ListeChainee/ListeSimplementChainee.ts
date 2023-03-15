export class Maillon {
  private donnée_: number;
  private suivant_: Maillon | null;

  constructor(donnée: number, suivant: Maillon | null = null) {
    this.donnée_ = donnée;
    this.suivant_ = suivant;
  }

  get donnée(): number {
    return this.donnée_;
  }

  set donnée(valeur: number) {
    this.donnée_ = valeur;
  }

  get suivant(): Maillon | null {
    return this.suivant_;
  }

  set suivant(valeur: Maillon | null) {
    this.suivant_ = valeur;
  }
}

export class ListeChaînée {
  private tête_: Maillon | null = null; // Initialement la liste est vide
  private fin_: Maillon | null = null;

  get tête(): Maillon | null {
    return this.tête_;
  }

  estVide(): boolean {
    // La liste est vide ssi tête_ et fin_ vallent null
    return this.tête_ === null && this.fin_ === null;
  }

  ajouter(v: number): void {
    let nouveauMaillon = new Maillon(v, this.tête_);
    this.tête_ = nouveauMaillon;

    // La liste était-elle vide avant ?
    if (this.fin_ === null) this.fin_ = nouveauMaillon;
  }

  get valeurTête(): number {
    if (this.estVide()) throw new Error("Liste vide");
    return this.tête_!.donnée;
  }

  get suite(): Maillon | null {
    if (this.estVide()) throw new Error("Liste vide");
    return this.tête_!.suivant;
  }

  retirer(): void {
    if (this.estVide()) throw new Error("Liste vide");
    this.tête_ = this.tête_!.suivant;

    // la liste devient-elle vide ?
    if (this.tête_ === null) this.fin_ = null;
  }

  ajouterFin(e: number): void {
    let aux = new Maillon(e);

    // Il faut faire attention si la liste est vide initialement
    if (this.tête_ === null) this.tête_ = aux;
    else this.fin_!.suivant = aux; // on est sûr qu'il n'est pas null

    this.fin_ = aux;
  }

  recherche(v: number): Maillon | null {
    let aux = this.tête_;

    while (aux != null && aux.donnée != v) aux = aux.suivant;

    return aux;
  }

  affichage(): void {
    let aux = this.tête_;

    while (aux != null) {
      console.log(aux.donnée);
      aux = aux.suivant;
    }
  }
}
