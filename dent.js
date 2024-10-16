const prompt = require('prompt-sync')()


/* Outils : variables

brosse à dents
manche de la brosse à dent
tyete de la brosse à dent
tube de dentifrice
dentifrice
lavabo
serviette
eau
robinet
verre
bouche
main
bouchon
main gauche
main droite
dents


Actions : algo

prendre le tube de dentifrice avec la main gauche
devisser le bouchon du tube de dentifrice avec la main droite
poser le bouchon sur le lavabo
prendre brosse à dent avec la main droite
appuyer sur le tube de dentifrice pour faire sortir le dentifrice
mettre le dentifrice sur la tete de la brosse à dent
ouvrir la bouche
fermer les dents
frotter la brosse à dent avec le dentifrice sur les dents de haut en bas avec la main droite pendant 30 secondes
ouvrir le robinet du lavabo



Pour executer dans un terminal : node nomdufichier.js

/*
let nomVariable : creation de variable;
const nomConstante : creation de constante (variable dont la valeure ne peut pas changer)

// operateur : 

= : operateur d'affectation
+ : addition / concatenation de chaine de caractere
- : soustraction
/ : division 
* : multiplication
% : modulo / le reste du résultat d'une division euclidienne

// operateur de comparaison 
== : egalité simple (ne prend pas en compte le type)
=== : egalité stricte (prend en compte le type)
!= : different de (ne prend pas en compte le type)
!== : strictement different de  (prend en compte le type)
< : inferieur a 
<= : inferieur ou agal
> : superieur a
>= supperieur ou egal



types de variables : 

number : 
integer : 12. Nombre entier
float : 12,5. Nombre décimal

String : "Bpnjour tout le monde". Chaine de caractères alphanumérique.
boolean : vrai/faux



**************************test**************

let str = "Salut à vous l'équipe !"
let strtwo = "Vous allez bien ?"

let result = str+strtwo

console.log(result)


********************************************

let nombreone = 1
let nombretwo = 1

let estegal = nombreone==nombretwo

console.log(estegal)
*********************************************

let texteone = "It's dangerous to go alone ! "
let textetwo = "take this."

let result = texteone + textetwo

console.log(result)
*********************************************

let nombrefour = 4
let nombretwo = 2

let estegal = nombrefour * nombretwo

console.log(estegal)
*********************************************
Transformer une chaine de caractères en nombre

let str = "22"
str = Number(str)
let nmbr = 22



console.log(str + nmbr);
********************************************
Transformer un nombre en chaine de caractères

let nmbr = 3

nmbr = nmbr.toString()
********************************************
switcher les valeurs des variables (utilisation de variables intermédiaires)

let a = 5; 
let b = 6;
let c = a;
a = b;
b = c;

*******************************************************
Instruction de condition

 let password = "azerty"
 let passuser = "trululu"

 if(passuser==password){console.log("Vous vous etes connecté");}
 else{console.log("mot de passe incorrect");}
*******************************************************************
EXO


let passworduser = prompt('entrer un mot de passe')
let realpassword = 'azerty'

if(passworduser==realpassword){console.log("Vous vous etes connecté");}
else{console.log("mot de passe incorrect");}

console.log

*****************************************************************
EXO

let nmbr = prompt("entrer un nombre :")

if (nmbr > 0) { console.log('positif') }
else if (nmbr < 0) {console.log('négatif')}
else { console.log('égal à 0') }

**************************************************************

let password= prompt('entrer un mot de passe')
let realpassword = '12345'

if (password==realpassword){console.log('Accès autorisé')}
else {console.log('Accés refusé')}

********************************************************
Afficher le plus grand nombre

let numbrone = prompt('Entrer 1 nombre')
let numbrtwo = prompt('Entrer 1 nombre')
let numbrthree = prompt('Entrer 1 nombre')

if (numbrone>numbrtwo && numbrone>numbrthree){console.log(numbrone)}
else if (numbrtwo>numbrone && numbrtwo>numbrthree ){console.log(numbrtwo)}
else{console.log(numbrthree)}

******************************************************************


let tab = ["21", "15", "122", "65", "794", "2", "16.4", "145"]
let swap = 0
let i = 0

while (i <=6) {
    if ((Number(tab [i])) >  (Number(tab[i + 1]))) {
        console.log("tab[i]",(tab[i]), "est supérieur à tab[i+1]", (tab[i+1]), "à l'étape", i)
        console.log("Je change", tab[i], "et", tab[i + 1])
        swap = tab[i];
        tab[i] = tab[i + 1];
        tab[i + 1] = swap;
        i = 0;
    }
    else {
        console.log("les éléments", tab[i], "et", tab[i+1], "sont biens placés", "à l'étape", i)
        i = i + 1
    }
}
console.log(tab)
******************************************************************



/*

for (i = 1; i <= 14; i++) {
    if (tabordo[i] > tabordo[i + 1]) {
        swap = tabordo[i];
        tabordo[i] = tabordo[i + 1];
        tabordo[i + 1] = swap;
        i = 1
    }
}
console.log(swap)
console.log(tabordo[i])
console.log(tabordo[i + 1])

console.log(tabordo)
*/








/*
*************************************************************************

let numbr = prompt('Entrer un nombre de 1 à 7 : ')

if (numbr > 7) { console.log('Nombre invalide') }
else if (numbr < 0) {
    console.log('Nombre invalide')
}
else if (numbr == 1) { 
    console.log('Lundi') }
else if (numbr == 2) { 
    console.log('Mardi') }
else if (numbr == 3) { 
    console.log('Mercredi') }
else if (numbr == 4) { 
    console.log('Jeudi') }
else if (numbr == 5) { 
    console.log('Vendredi') }
else if (numbr == 6) { 
    console.log('Samedi') }
else if (numbr == 7) { 
    console.log('Dimanche') }

***************************************************
Prompt ne renvoie qu'une chaine de caractère donc il faut appiquer le construceur "number"

let numbr = Number(prompt('Entrer un nombre de 1 à 7 : '))


switch (numbr) {
    case 1:
        console.log("Lundi");
        break;
    case 2:
        console.log("Mardi");
        break;
    case 3:
        console.log("Mercredi");
        break;
    case 4:
        console.log("Jeudi");
        break;
    case 5:
        console.log("Vendredi");
        break;
    case 6:
        console.log("Samedi");
        break;
    case 7:
        console.log("Dimanche");
        break;
    default:
        console.log("Nombre invalide");
}

**********************************************************************
Écrire un algorithme qui demande deux nombres à l’utilisateur et l’informe ensuite si leur
produit est négatif ou positif.

let nmbr = prompt('Entrer 1 nombres')
let nmbrone = prompt('Entrer 1 nombres')
let nmbrtwo = nmbr*nmbrone


if(nmbrtwo>0){console.log('Produit positif')}
else{console.log('Produit négatif')}

***************************************************************************
Écrire un algorithme permettant d’afficher la plus petite des deux valeurs lues au clavier.

let numbr = prompt('Entrer un nombre')
let numbrtwo = prompt('Entrer un nombre')

if(numbr<numbrtwo){console.log(numbr)}
else{console.log(numbrtwo)}

************************************************************************************

Écrire un programme qui permet de lire la température de l’eau puis affiche son état (vapeur,
liquide, glace)

let number = prompt('Entrer une température en degré')

if(number>100){console.log(number + " degrés état gazeux")}
else if(number<0){console.log(number + " degrés état solide")}
else{console.log(number + ' degrés état liquide')}

****************************************************************************************************

Un magasin facture 20 euros les dix premiers cadres, 15 euros les vingt suivants et 5 euros audelà. Écrire un algorithme qui demande à l’utilisateur le nombre de cadres commandés puis
affiche le montant correspondant.

let number = prompt('nombre de cadres commandés')


if(number < 10){console.log(number*20)}
else if(number >30){console.log(10*20+15*20+(number-30)*5)}
else {console.log(10*20 + (number-10)*15)}

*****************************************************************************************************


Les habitants d’une ville paient l’impôt selon les règles suivantes :
- Les hommes de plus de 20 ans paient l’impôt
- Les femmes paient les impôts si elles ont entre 18 et 35 ans
- Les autres habitants ne paient rien
Écrire un algorithme qui demande l’âge et le sexe d’un habitant et affiche si celui-ci est
imposable.

let sexe = prompt('Quel est votre sexe')


let number = Number(prompt('Quel est votre age'))

if(sexe=='homme' && number>20){
    console.log('Imposable')
}

else if(sexe=='femme' && number>18 && number<35){
    console.log('Imposable')
}
else(console.log('Non imposable'))

*************************************************************************************
Randomizer


let test = random(0,10)
console.log(test)

function random(min, max ){
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

***************************************************************************************


let choice = prompt("choisi un chiffre entre 0 ou 1")
let test = random(0, 1)


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(test)
*****************************************************************************************
Pile ou face

let choice = prompt("choisi un chiffre entre 0 ou 1 ")

let test = random(0, 1)


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (test==choice){console.log('Gagné')}
else {console.log('perdu')}
**************************************************************************************

Faite moi un programme qui permet de savoir si un chiffre entré par l'utilisateur est pair ou impair.

let choice = prompt('tape un chiffre')

if (choice%2 == 0){
    console.log('pair')
}
else{
    console.log('Impair')
}

*************************************************************************************

Créez un programme qui devine l'humeur d'une personne en fonction de la couleur de ses vêtements, 
le programme demandera la couleur du vetement de l'user, 
Rouge: "colere" 
bleu: "calme"
gris : "l'algo ca fait chier",
vert: "pas d'internet c'est relou"


let color = prompt('Entrer une couleur ')


switch (color) {
    case 'rouge':
        console.log("Colère");
        break;
    case 'bleu':
        console.log("Calme");
        break;
    case 'gris':
        console.log("L'algo ça fait chier");
        break;
    case 'vert':
        console.log("pas d'internet c'est relou");
        break;
    default:
        console.log("Entrée invalide");
}

*****************************************************************************************

exercice 3 : 
Écrivez un programme qui donne des conseils en fonction de la météo :
exemple : l'utilisateur rentre "froid". le programme dira, "mettez un manteau"


let weather = prompt('Entrer Quel temps fait-il ? ')


switch (weather) {
    case 'beau':
        console.log("attention aux uv, met de la crème");
        break;
    case 'nuageux':
        console.log("Prend une veste on sait jamais");
        break;
    case 'pluvieux':
        console.log("Prend ton parapluie, ça me semble évident, connard");
        break;
    case 'canicule':
        console.log("boit de l'eau et enterre tes vieux");
        break;
    default:
        console.log("Entrée invalide");
}
***********************************************************************************

exercice 4 : 
Faites un quizz avec 3 questions et 4 reponses possible pour chacune.
a chaque bonne reponse de l'utilisateur, une variable score s'incrémentera.
a la fin du quizz, le programme affichera le score de l'user

let qone = prompt('Quel est la saison du froid? ')
let qtwo = prompt('Entre 1 et 4, quel est le meilleur diablo?')
let qthree = prompt ('Du vin, de la vodka, du rhum et de la bière, quel est le meilleur alcool?')
let score = 0


if (qone =="hiver"){
    score = score  + 1
}


if (qtwo =="2"){
    score = score  + 1
}

if (qthree =="rhum"){
    score = score  + 1
}


console.log(score)

*******************************************************************************************

console.log("Quel est la saison du froid? \n A.Hiver \n B.Eté \n C.Automne \n D.Printemps")

let qone = prompt('Réponse :  ')

console.log('Entre 1 et 4, quel est le meilleur diablo? \n A.Diablo 1 \n B.Diablo 2 \n C.Diablo 3 \n D.Diablo 4')

let qtwo = prompt('Réponse :  ')

console.log('Quel est le meilleur alcool? \n A.Du vin \n B.La vodka\n C.Du rhum \n D.La bière ')

let qthree = prompt ('Réponse :  ')

let score = 0


if (qone =="A"){
    score = score  + 1
}


if (qtwo =="B"){
    score = score  + 1
}

if (qthree =="A" || qthree =="C" ){
    score = score  + 1
}


console.log(score)
***************************************************************************************************
Boucle

const prompt = require('prompt-sync')()

let coins = prompt('pile ou face')

while(coins != 'pile' && coins != 'face'){
    console.log('tu tes gouré')
    coins = prompt('pile ou face')
}
************************************************************************************************
let index = 0

while(index<10){
    index=index+1
    console.log(index);
    
}
*************************************************************************************************
let doss = random(-1, 5)


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}



while(doss!=-1){
    doss = random(-1, 5)
    console.log(doss)
    
}
***************************************************************************
for(let i = 0; i <= 10; i++){
    console.log(i);

}
***************************************************************************
Ajouter les chiffre jusqu'à 100

let somme = 0



for (let i = 0; i <= 100; i++) {
    somme = i + somme
    console.log(somme)
}



*******************************************************************************

demander un nombre et présenter sa table de multipli de 1 à 10

let number = prompt('Tape un nombre')

for (let i = 0; i <= 10; i++) {
   let mult = i * number
    console.log(mult)
}
********************************************************************************

Écrivez un programme qui affiche une pyramide composée de chiffres 1 a l’aide d’une boucle
La pyramide doit avoir 5 étages
Voici un exemple de pyramide

1
11
111
1111
11111

let pyramid = '1'


for (let i = 0; i < 5; i++) {

    console.log(pyramid)
     pyramid = pyramid+'1'
}
     
**************************************************************************************************************
Lors d’un événement sportif, on souhaite saisir par ordre d’arrivée le numéro de chaque
concurrent, ainsi que son temps avant qu'ils n'aillent prendre l'apéro. Le processus doit continuer jusqu’à ce que l’on saisisse le
numéro de dossard -1.

let temps = 0
let doss = random(-1, 5)
let i = 1
let tab = [7, 8]
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

while (doss != -1) {
    doss = random(-1, 5)

    if (tab.includes(doss)) {
        console.log("le coureur", doss, "est déjà au bar")
    }
    else {
        
        console.log("Le dossard numéro", doss, "est arrivé en", i, "position")
        temps = prompt("Entrer le temps d'arrivée")
        console.log("et en", temps)
        let newLength = tab.push(doss);
        i = i + 1
    }
}

//console.log(tab.includes(doss)); Cherche dans le tab s'il y a la valeur "doss"//
// Expected output: true
******************************************************************************************************************
exercice d'avant en mode flemme

let dossard = (prompt('Entrer le num de dossard'))
i=1


while(dossard!=5){
    
    let temps = (prompt('Entrer le temps'))
    console.log('occurence', i)
    i=i+1
    dossard = (prompt('Entrer le num de dossard'))
}

***************************************************************************************************

Exercice 2 :
Écrire un algorithme qui permet de simuler les affichages d’un compte à rebours à partir d’un
temps (minutes, secondes) donné.





let min = Number(prompt('minute(s)'))
let sec = Number(prompt('seconde(s)'))

while (sec > 0 || min > 0) {
    console.log(min, ": ", sec)

    if (sec === 0) {
        sec = 59
        min = min-1
    }
    else {
        sec = sec - 1
    }

}
console.log('timesup')

*******************************************************************
Exercice 3

A la naissance de Paul, son père lui ouvre un compte bancaire. Ensuite, à chaque anniversaire,
il verse sur son compte 150 euros, auxquels il ajoute le triple de l’âge de Paul. Par exemple,
lorsqu’il a un an, il lui verse 153 euros, 2 ans, il lui verse 156 euros. Écrire un algorithme qui
permet de déterminer quelle somme aura Paul lors de son nième anniversaire.

let age = Number(prompt('age de paul'))
let i = 1
let argent = 0
let somme = 0
let nieme = age


for (i = 1; i <= age; i++) {
    argent = i * 3 + 150
    somme = somme + argent
    
}
console.log("Paul aura", somme, "euros")
******************************************************************************

Exercice 4 :
Écrire un algorithme qui demande successivement 20 nombres à l’utilisateur, et qui lui dise
ensuite quel était le plus grand parmi ces 20 nombres.
Modifiez ensuite l’algorithme pour que le programme affiche en quelle position avait été saisi
ce nombre.


let nombre = Number(prompt('Ecrire un nombre'))
top=nombre
position = 0


for (let i = 0; i < 3; i++) {
    nombre = Number(prompt('Ecrire un nombre'))
    
    if(nombre>top){
        console.log("nombre", nombre, " est supérieur à top", top)
        top=nombre
        position=Number(i+2)
        console.log('position', position)
        
        console.log(top)
    }
   
}
console.log('Le chiffre le plus grand est', top, 'à la', position, 'position')
************************************************************************************************************
Exercice 5

Écrire un algorithme qui demande de saisir au clavier la taille de 6 personnes et qui calcule le
nombre de personnes dont la taille est plus petite que 2,10 m.

let taille = 0
let nombre = 0
i = 0

while (i < 6) {
    
    taille = prompt('Entrer la taille en m')
    if (taille > 2.1) {
        console.log('occurence', i+1)
        nombre = nombre + 1
        console.log('la taille est supérieure à 2m10')
    }
    i = i + 1
    
}

console.log(nombre)
***************************************************************************************************************
Exercice 6

Un vote électronique est organisé, un ordinateur permet de saisir chaque vote et le
comptabilise. Les électeurs peuvent répondre par O(oui), N(non) ou B(blanc). Écrire un
algorithme qui demande à n électeurs leur vote et écrit à la fin du vote le pourcentage de Oui,
Non et de votes blancs.




let votant = prompt('nombre de votant')
console.log('O(oui)')
console.log('N(non)')
console.log('B(blanc)')
let oui = 0
let non = 0
let blanc = 0
let invalide = 0
let moy = 0



i = 0

while (i < votant) {

    let vote = prompt('Votez : ')

    if (vote == 'O' || vote == 'o') {
        oui = oui + 1
        moy = moy + 1
        console.log('a voté oui', oui)
    }
    else if (vote == 'N' || vote == 'n') {
        non = non + 1
        moy = moy + 1
        console.log('a voté non', non)
    }

    else if (vote == 'B' || vote == 'b') {
        blanc = blanc + 1
        moy = moy + 1
        console.log('a voté blanc', blanc)
    }

    else {
        console.log('Vote invalide')
        invalide = invalide + 1
        console.log('vote non pris en compte')
        moy = moy + 1
    }

    i = i + 1
}


console.log('oui :', oui*100/moy, '%')
console.log('non :', non*100/moy, '%')
console.log('blanc :', blanc*100/moy, '%')
console.log('abstention :', invalide*100/moy, '%')
console.log('moy :', moy)

**********************************************************************************

Exercice 8 :
Écrire un algorithme qui demande un nombre de départ et qui ensuite affiche les six nombres
suivants en utilisant la boucle Répéter jusqu’à et Tant que.
    
let nombre = Number(prompt('Tape un nombre'))
let somme = nombre
let i=0

while(i<6){

    somme = somme + 1
    console.log(somme)
    i=i+1
}

****************************************************************************************

Exercice 9 :
Un garage à Paris contient 50 voitures, ce nombre augmente chaque année de 100 voitures.
Un autre à Nantes possède 200 voitures qui augmentent de 12% par an.
Écrire un algorithme qui permet de déterminer dans combien d’années le nombre de voitures
dans le garage à Paris dépassera celles du garage à Nantes.

let paris = 50
let augparis = 100
let nantes = 200
let augnan = 1.2
year = 1

while (paris < nantes) {
    console.log('année : ',year)

    paris = paris + 100
    console.log('paris =', paris)

    nantes = nantes * 1.2
    console.log('nantes =', nantes)

    year = year + 1

}

console.log(year-1)

*****************************************************************************************

Exercice 10 :
Écrire un algorithme permettant de taper un entier n, puis qui calcule le produit des carrés
des n premiers entiers pairs.
Par exemple : si n= 4, on affichera : 2² x 4² x 6² x 8² = 147456

tentative : 

let entier = Number(prompt('Taper un entier'))

let i = 1
somme = 0

while (i < entier) {
    if (i % 2 == 0) {
        console.log(i,"²")
        i = i + 1
        
    }
    else {
        i = i + 1
    }
}
***************************************************************************
****************************************************************************

Correction :  


Exo 1
Lors d’un événement sportif, on souhaite saisir par ordre d’arrivée le numéro de chaque
concurrent, ainsi que son temps avant qu'ils n'aillent prendre l'apéro. Le processus doit continuer jusqu’à ce que l’on saisisse le
numéro de dossard -1.

let temps = 0
let doss = random(-1, 5)
let i = 1
let tab = [7, 8]
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

while (doss != -1) {
    doss = random(-1, 5)

    if (tab.includes(doss)) {
        console.log("le coureur", doss, "est déjà au bar")
    }
    else {
        
        console.log("Le dossard numéro", doss, "est arrivé en", i, "position")
        temps = prompt("Entrer le temps d'arrivée")
        console.log("et en", temps)
        let newLength = tab.push(doss);
        i = i + 1
    }
}

//console.log(tab.includes(doss)); Cherche dans le tab s'il y a la valeur "doss"//
// Expected output: true


***************************************************************************
Correction :  
****************************************************************************




let dossard = 0;
let time = 0;

while (dossard > -1) {

    dossard = Number(prompt('Entre le nuim de dossard'))
    while(isNaN(dossard) && dossard < 0) {
        dossard = Number(prompt('Entre le nuim de dossard valide')) 
    }
    if (dossard != -1) {
        time = number(prompt('Entre le temps'))
    }

}


****************************************************************

Penser à la gestion d'erreur comme suivant : 

let choice = prompt('choose a path "a" ou "b"')

while(choice!="b"&&choice!="a"){
    choice = prompt("choisi mieux")
}
if(choice=="b"){
    console.log(gagné)
}
else{
    console.log("perdu")
}
*************************************************************


Exo 2
Écrire un algorithme qui permet de simuler les affichages d’un compte à rebours à partir d’un
temps (minutes, secondes) donné.





let min = Number(prompt('minute(s)'))
let sec = Number(prompt('seconde(s)'))

while (sec > 0 || min > 0) {
    console.log(min, ": ", sec)

    if (sec === 0) {
        sec = 59
        min = min-1
    }
    else {
        sec = sec - 1
    }

}
console.log('timesup')

*************************************************************
Correction
*************************************************************

let min = Number(prompt('Entre minute'))
while (isNaN(min) || min < 0) {
    min = number(prompt('entre de vraies minutes'))
}

let sec = Number(prompt('Entre sec'))
while (isNaN(min) || sec < 0) {
    sec = number(prompt('entre de vraies sec'))
}


for (let i = min; i >= 0; i--) {
    for (let j = sec; j >= 0; j--) {
        console.log(i + "min," + j + "sec");
    }
    sec = 59
}
*************************************************************
Exo 3 


A la naissance de Paul, son père lui ouvre un compte bancaire. Ensuite, à chaque anniversaire,
il verse sur son compte 150 euros, auxquels il ajoute le triple de l’âge de Paul. Par exemple,
lorsqu’il a un an, il lui verse 153 euros, 2 ans, il lui verse 156 euros. Écrire un algorithme qui
permet de déterminer quelle somme aura Paul lors de son nième anniversaire.


let age = Number(prompt('age de paul'))
let i = 1
let argent = 0
let somme = 0
let nieme = age


for (i = 1; i <= age; i++) {
    argent = i * 3 + 150
    somme = somme + argent
    
}
console.log("Paul aura", somme, "euros")

*************************************************************
Correction
*************************************************************


let base = 0
let age = Number(promp('entre un age'))
while (isNaN(age) || age < 0) {
    age = Number(prompt('entre un age correct'))

}
for (let i = 0; i <= age; i++) {
    base = base + ((i + 1) * 3 + 150)
}
console.log(base)
*************************************************************
Exo 4
Écrire un algorithme qui demande successivement 20 nombres à l’utilisateur, et qui lui dise
ensuite quel était le plus grand parmi ces 20 nombres.
Modifiez ensuite l’algorithme pour que le programme affiche en quelle position avait été saisi
ce nombre.


let nombre = Number(prompt('Ecrire un nombre'))
let top=nombre
let position = 0


for (let i = 0; i < 3; i++) {
    nombre = Number(prompt('Ecrire un nombre'))

    while (isNaN(nombre) || nombre < 0) {
    nombre = Number(prompt('entre un nopmbre correct'))

    if(nombre>top){
        console.log("nombre", nombre, " est supérieur à top", top)
        top=nombre
        position=Number(i+2)
        console.log('position', position)
        
        console.log(top)
    }
   
}
console.log('Le chiffre le plus grand est', top, 'à la', position, 'position')

*************************************************************
Correction
*************************************************************




Exo6
Un vote électronique est organisé, un ordinateur permet de saisir chaque vote et le
comptabilise. Les électeurs peuvent répondre par O(oui), N(non) ou B(blanc). Écrire un
algorithme qui demande à n électeurs leur vote et écrit à la fin du vote le pourcentage de Oui,
Non et de votes blancs.








let votant = prompt('nombre de votant')
console.log('O(oui)')
console.log('N(non)')
console.log('B(blanc)')
let oui = 0
let non = 0
let blanc = 0
let invalide = 0
let moy = 0

i = 0

while (i < votant) {

    let vote = prompt('Votez : ')

    if (vote == 'O' || vote == 'o') {
        oui = oui + 1
        moy = moy + 1
        console.log('a voté oui', oui)
    }
    else if (vote == 'N' || vote == 'n') {
        non = non + 1
        moy = moy + 1
        console.log('a voté non', non)
    }

    else if (vote == 'B' || vote == 'b') {
        blanc = blanc + 1
        moy = moy + 1
        console.log('a voté blanc', blanc)
    }

    else {
        console.log('Vote invalide')
        invalide = invalide + 1
        console.log('vote non pris en compte')
        moy = moy + 1
    }

    i = i + 1
}


console.log('oui :', oui*100/moy, '%')
console.log('non :', non*100/moy, '%')
console.log('blanc :', blanc*100/moy, '%')
console.log('abstention :', invalide*100/moy, '%')
console.log('moy :', moy)


********************************************************************
BOSS
********************************************************************

Exercice 7 :
Écrire un programme qui lit un entier n puis affiche les nombres premiers. On appelle un
nombre premier tout nombre qui ne peut être divisé que par 1 ou par lui-même.

let number = Number(prompt('Entre un chiffre'))
let isprime = true


for (let i = 2; i <= number; i++) {
    let isprime = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isprime = false;
            break
        }

    }
    if (isprime == true) {
        console.log(i)
    }
}
***************************************************************

Cherche un chiffre : 

let nbr = Number(prompt('Entre un chiffre : '))
let win = "vous avez trouvé"
let test = random(0,10)
let tentative = 1
function random(min, max ){
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

while(nbr!=test && tentative<5){

    while (isNaN(nbr) || nbr < 0 || nbr >10) {
        nbr = Number(prompt('entre un nombre correct entre 0 et 10 : '))
    }

    if(nbr>test){
        console.log('Moins')
        tentative ++
        nbr = Number(prompt('Entre un chiffre'))
    }
    else{
        console.log('plus')
        tentative++
        nbr = Number(prompt('Entre un chiffre'))
    }
}

if(tentative<5){
    console.log(win)
}
else{
    console.log("perdu")
}

***************************************************************

Projet 1 : Dragon's lair

*/

let score = 0
let inventaire = 0
let gameover = 0
let pouch = 0
complete = 0
let torche = 0
let sword = 0
let shield = 0
let crown = 0



let story = console.log('Le héro marche dans la forêt et arrive à un croisement.')
let qone = console.log("Quel chemin prendre? \n A. Gauche \n B. Droite ")
let rep = prompt('Réponse :  ')


while (rep != 'A' && rep != 'a' && rep != 'b' && rep != 'B') {
    rep = prompt('entre une rep correct : ')
}


if (rep == "A" || rep == "a") {

    console.log(rep, "est un très bon choix, vous continuez l'aventure")
    score++
    console.log("Vous arrivez devant un chateau")
    console.log("Vous prenez quel chemin? \nC. l'entrée principale  \nD. les canalisations")
    rep = prompt('Réponse :  ')

    while (rep != 'C' && rep != 'c' && rep != 'D' && rep != 'd') {
        rep = prompt('entre une rep correct : ')
    }

    if (rep == "c" || rep == "C") {

        console.log(rep, "est un très bon choix, vous continuez l'aventure")
        score++
        console.log("Vous arrivez dans la salle du trone")
        console.log("\nE. Vous cherchez derrière le trône  \nF. Vous grimpez aux rideaux pour atteindre le niveau supérieur")
        rep = prompt('Réponse :  ')

        while (rep != 'E' && rep != 'e' && rep != 'F' && rep != 'f') {
            rep = prompt('entre une rep correct : ')
        }

        if (rep == "e" || rep == "E") {
            console.log(rep, "est un très bon choix, vous continuez l'aventure")
            score++
            console.log("Vous trouvez une torche que vous mettez dans votre inventaire")

            torche = 1
            console.log('Vous sortez du chateau par le chemin secret derrière le trône et vous retrouvez dans le jardin')
            console.log('Vous terminez le niveau 1')



        }
        else if (rep == "f" || rep == "F") {
            console.log(rep, "est un très bon choix, vous continuez l'aventure")
            score++
            console.log("Vous trouvez une épée que vous mettez dans votre inventaire")

            sword = 1
            console.log('Vous sortez du chateau par le toit et vous retrouvez dans le jardin')
            console.log('Vous terminez le niveau 1')

        }

        else {
            console.log('reponse invalide')
        }

    }
    else if (rep == "D" || rep == "d") {
        console.log("Game over")
        gameover++


    }

    else {
        console.log('reponse invalide')
    }


}
else if (rep == "B" || rep == "b") {
    console.log("Game over")
    gameover++


}
else {
    console.log('reponse invalide')
}



if (gameover == 1) {

    console.log('Score : ', score, 'points')
}
else {

    console.log('Bienvenue dans le niveau 2')
    gameover=0
    console.log("Tu avances dans l'allée de fleur et trouve un garde")
console.log("Quel action fais-tu? \n G. attaquer \n H. fuir ")
rep = prompt('Réponse :  ')


while (rep != 'G' && rep != 'g' && rep != 'h' && rep != 'H') {
    rep = prompt('entre une rep correct : ')
}

if (rep == "g" || rep == "G") {

    console.log("Tu as choisis", rep)
    console.log("Vous engagez le combat")


    if (torche == 1) {
        console.log("Vous degainez la torche et brulez les yeux du garde")
        console.log("Vous passez à coté de lui en lui piquant 10 rubis")
        pouch = pouch + 10
        complete++
        score++

    }
    else if (sword == 1) {
        console.log("Vous degainez l'épée et one shot le garde par derrière'")
        console.log("Vous ramassez son bouclier et 10 rubis")
        pouch = pouch + 10
        shield = 1
        complete++
        score++

    }
    else{
        console.log("Vous n'avez rien pour vous défendre, le garde vous met une hache dans la tronche, vous etes mort.") 
        console.log("Game over")
        gameover++
    }



}
else if (rep == "H" || rep == "h") {
    console.log("Tu as choisis", rep)
    console.log("Vous fuiyez le combat")
    score--
    complete++

}
else {
    console.log('reponse invalide')
}

console.log('Score : ', score, 'points')
console.log('Passé ce garde, vous arrivez devant le roi')
console.log("Le roi se retourne et dégaine sa hache. Que fais-tu?")
console.log("\nI. Tu t'agenouilles et te rend \nJ. Tu te bats à pleine puissance")
rep = prompt('Réponse :  ')

while (rep != 'i' && rep != 'I' && rep != 'j' && rep != 'J') {
    rep = prompt('entre une rep correct : ')
}
if (rep == "i" || rep == "I") {

    console.log("Tu as choisis", rep)
    console.log("Vous etes arreté et finissez en prison")
    console.log("Mauvaise fin")
    console.log('Score : ', score, 'points')


}
else if (rep == "j" || rep == "J") {
    if (sword == 1 && shield == 1) {
        console.log("Tu as choisis", rep)
        console.log("Tu assenes un coup au coeur du roi et lui prend son trône")
        score++
        crown = 1
        console.log("Bonne fin")
        console.log('Score : ', score, 'points')
    }
    else if (torche == 1) {
        console.log("Tu as choisis", rep)
        console.log("Tu te fait trancher la torche par la hache du roi")
        console.log("Tu jètes le bout de bois qu'il te reste dans la cheville et en profite pour t'enfuir")
        console.log("Tu es libre mais tu es un sdf et est banni du royaume")
        score++
        console.log("Fin numero 1")
        console.log('Score : ', score, 'points')

    }
    else if (sword == 1 && shield == 0) {
        console.log("Tu as choisis", rep)
        console.log("Tu te fait trancher par la hache du roi mais")
        console.log("Tu jètes tes dernières forces en plantant le roi")
        console.log("Tu es mort, le roi aussi et c'est vraiment une fin de merde")
        
        console.log("Fin numero 2")
        console.log('Score : ', score, 'points')

    }
}

if (crown == 1) {

    console.log("T'as la couronne, t'es un boss")
}


else if(gameover!=0){
    console.log("Perdu")
    console.log('Score : ', score, 'points')

}
else{
    console.log("T'as pas la couronne, t'es une merde. Try again")
}




}



