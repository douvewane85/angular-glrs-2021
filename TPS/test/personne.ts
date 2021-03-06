function first() {
   console.log("first(): factory evaluated");
   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
     console.log("first(): called");
   };
 }
 
 function second() {
   console.log("second(): factory evaluated");
   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
     console.log("second(): called");
   };
 }
export class Personne {
   constructor(private nom){
      this.nom=nom;
   }
   @first()
   @second()
   affiche(){
      console.log(this.nom)
   }
  
}