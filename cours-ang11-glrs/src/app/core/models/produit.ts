export interface Produit {
    id?:number
    name:string,
    quantity:number ,
    prix:number,
    selected?:boolean,
    promo?:boolean,
    createAt?:Date
}
