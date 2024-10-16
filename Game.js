const prompt = require('prompt-sync')()

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


