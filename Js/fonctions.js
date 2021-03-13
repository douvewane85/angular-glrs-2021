//Fonction nommée
function somme(a, b){
    return a+b;
}

//Fonction Anonyme
var somme2 = function (a, b){
    return a+b;
}

var sommeArgsParDefaut = function (a=0, b=0){
    return a+b;
}

var sommePasArgs = function (){
    let result=0;
    for (let index = 0; index < arguments.length; index++) {
        result += arguments[index];  
    }
    return result;
}

var produit=function(a,b){
     return a*b
}

var callbackOperation=function(a,b,fonction){
     return fonction(a,b)
}

var asyncFonction= function(nbreSecond){
    setTimeout(function(){
            alert("Bonjour")    
    },nbreSecond*1000)

}

//Arrow fonction 

var sommeArrow= (a, b) =>{
    return a+b;
}

var sommePasArgsArrow = ()=>{
    let result=0;
    for (let index = 0; index < arguments.length; index++) {
        result += arguments[index];  
    }
    return result;
}

var showTab=(tab)=>{
    for (let elt of tab) {
         switch (typeof elt) {
             case 'function':
                 alert(elt(2,5))
                 break;
            case 'object':
                   alert(elt)
                    break;
             default:
                 alert(elt)
                 break;
         }
    }
}

var obj={
    nom:"Diop",
    prenom:"Amadou",
    direBonjour:function(){
       alert(this.nom+ " vous dit Bonjour")
    }
}
var obj1={
    nom:"Diop",
    prenom:"Amadou",
    direBonjour:function(){
       alert(this.nom+ " vous dit Bonjour")
    }
}
var parseObjetToJson=()=>{
    return  JSON.stringify(obj)
}

var parseJsonToObject= str=> JSON.parse(str)

//Classe
var Personne=function(nom,prenom){
    this.nom=nom,
    this.prenom=prenom,
    this.direBonjour=function(){
       alert(this.nom+ " vous dit Bonjour")
    }

}
