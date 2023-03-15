export class MaillonDC {
  private donnée_: number;
  private précédant_: MaillonDC | null;

  private suivant_: MaillonDC | null;

  constructor(
    donnée: number,
    précédant: MaillonDC | null = null,
    suivant: MaillonDC | null = null
  ) {
    this.donnée_ = donnée;
    this.suivant_ = suivant;
    this.précédant_ = précédant;
  }

  get donnée(): number {
    return this.donnée_;
  }

  set donnée(valeur: number) {
    this.donnée_ = valeur;
  }

  get suivant(): MaillonDC | null {
    return this.suivant_;
  }

  set suivant(valeur: MaillonDC | null) {
    this.suivant_ = valeur;
  }

  get précédant(): MaillonDC | null {
    return this.précédant_;
  }

  set précédant(valeur: MaillonDC | null) {
    this.précédant_ = valeur;
  }
}

export class ListeDoublementChaînée {
  private tête_: MaillonDC | null = null;
  private fin_: MaillonDC | null = null;

  afficher(): void {
    let aux = this.tête_;

    while (aux) {
      console.log(aux.donnée);
      aux = aux.suivant;
    }
  }

  estVide(): boolean {
    return !this.tête_ && !this.fin_;
  }

  ajoutDebut(e: number): void {
    let aux = new MaillonDC(e, null, this.tête_);

    if (!this.tête_) this.fin_ = aux;
    else this.tête_.précédant = aux;

    this.tête_ = aux;
  }

  ajoutFin(e: number): void {
    let aux = new MaillonDC(e, this.fin_, null);

    if (!this.tête_) this.tête_ = aux;
    else this.fin_!.suivant = aux;

    this.fin_ = aux;
  }

  retirerDebut(): void {
    if (this.estVide()) throw new Error("Liste vide");

    this.tête_ = this.tête_!.suivant;
    // A-t'on vidé la liste ?
    if (!this.tête_) this.fin_ = null;
    else this.tête_.précédant = null;
  }

  retirerFin(): void {
    if (this.estVide()) throw new Error("Liste vide");

    this.fin_ = this.fin_!.précédant;
    // A-t'on vidé la liste ?
    if (!this.fin_) this.tête_ = null;
    else this.fin_.suivant = null;
  }

  recherche(e: number): MaillonDC | null {
    let aux = this.tête_;

    while (aux && aux.donnée != e) aux = aux.suivant;

    return aux;
  }

  accesMaillon(i: number): MaillonDC | null {
    let aux = this.tête_;

    while (aux && i > 1) {
      aux = aux.suivant;
      --i;
    }

    return aux;
  }

  insertion(e: number, m: MaillonDC | null): MaillonDC {
    if (!m) {
      this.ajoutFin(e);
      return this.fin_!;
    } else if (m === this.tête_) {
      this.ajoutDebut(e);
      return this.tête_;
    } else {
      let aux = new MaillonDC(e, m.précédant, m);
      if (m.précédant) m.précédant.suivant = aux;
      m.précédant = aux;
      return aux;
    }
  }
}
