export class Personnes{
    #nom
    #prenom
    constructor(nom,prenom){
        this.#nom=nom 
        this.#prenom=prenom
    }

    get nom(){
        return this.#nom;
    }
    set nom(nom){
        this.#nom=nom
    }
}

export class Adresse{
    
}