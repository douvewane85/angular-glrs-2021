var nbre:number;
console.log(nbre)
var chaine:string="Bonjour"
console.log(chaine+" à tous");
console.log(`${chaine} à tous`);

var nbres:number[]=[1,4,5.5]
nbres.forEach((elt)=> console.log(elt))

var tab:[number,string,boolean]=[1,"Bonjour",true];
var x:any ;
x="Bonjour" 
console.log(x)
x=12 
console.log(x)
//Interdit
var y:number =x
console.log(y)

var t:unknown 
t=12 
console.log(t)
t="Bonjour"
var ch1:any =t 
//Type 
enum Resultat{Reussie=1,Echec} 
var rs:Resultat 
rs=Resultat.Reussie  
console.log(rs) 
enum DataStateMember {
    LOADED,
    LOADING,
    ERROR
}


var person={
    nom:"Diop",
    prenom:"Amadou",
    age:22
}

console.log(person)
console.log(person.nom)

var numbers: number[]|null=null;



