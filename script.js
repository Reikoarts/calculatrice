document.addEventListener("DOMContentLoaded", function() {

    // récuperation de tout les champs que l'on a besoin pour afficher / récuperer des infos
    let number = document.querySelectorAll('.calcBoutton');
    let screen = document.querySelector('.screen');
    let reset = document.querySelector('.AC');
    let operateur = document.querySelector('.select');
    let formulaire = document.querySelector('.grid');
    let boutonAffichage = document.querySelector('.calcAffiche');
    let boutonText = document.querySelector('.calcAffiche');
    let divInfobulle = document.querySelector('.calcInfobulle');
    let infobulle = document.querySelector('.infobulleText');
    let boutonSubmit = document.querySelector('.submit');
    let nombreFinal = "";


    // Ajout sur chaque number un event au click, au hover, et lorsque la souris sors de la div
    /* Pour le click on va stocker le chiffre dans la variable nombreFinal et on va ajouter a la 
    suite les autres chiffre pour créer un calcule*/
    // On utilise .trim() pour supprimer les espaces et ne garder que le textContent
    number.forEach(chiffre => {
        chiffre.addEventListener('click', function(e){
            nombreFinal = nombreFinal + e.target.textContent.trim();
            screen.value = nombreFinal;
        })

        /* Au hover on va afficher dans l'info bulle le chiffre survolé */
        chiffre.addEventListener('mouseover', function(e){
            infobulle.innerHTML = "Cliquez pour ajouter le chiffre " + e.target.textContent.trim()
        })

        /* Lorsque la souris sors du champ on vide l'infobulle */
        chiffre.addEventListener('mouseleave', function(e){
            infobulle.innerHTML = ""
        })
    });



    // Ajout sur reset un event au click, au hover, et lorsque la souris sors de la div
    /* Pour le click on va vidé l'input text screen qui affiche le calcule et la variable nombreFinal*/
    reset.addEventListener('click', function(){
        screen.value="";
        nombreFinal = "";
    });

    /* Au hover on va afficher dans l'info bulle "videz la calculatrice" */
    reset.addEventListener('mouseover', function(e){
        infobulle.innerHTML = "Videz la calculatrice"
    })

    /* Lorsque la souris sors du champ on vide l'infobulle */
    reset.addEventListener('mouseleave', function(e){
        infobulle.innerHTML = ""
    })



    // Ajout sur operateur un event au click, au hover, et lorsque la souris sors de la div
    /* Pour le click on ajoute la value de l'opérateur au calcule dans la variable nombreFinal,
    on mes un if pas égale a "Opé" car ce n'est pas un opérateur */
    operateur.addEventListener('change', function(e){
        if(e.target.value !== "Opé"){
            nombreFinal = nombreFinal + e.target.value;
            screen.value = nombreFinal;
            operateur.value='Opé';
        }
    });

    /* Au hover on va afficher dans l'info bulle "Choisisez l'opérateur voulu : - + / *" */
    operateur.addEventListener('mouseover', function(e){
        infobulle.innerHTML = "Choisisez l'opérateur voulu : - + / *"
    })

    /* Lorsque la souris sors du champ on vide l'infobulle */
    operateur.addEventListener('mouseleave', function(e){
        infobulle.innerHTML = ""
    })




    /* Au hover on va afficher dans l'info bulle "Afficher le resultat" */
    boutonSubmit.addEventListener('mouseover', function(e){
        infobulle.innerHTML = "Afficher le resultat"
    })

    /* Lorsque la souris sors du champ on vide l'infobulle */
    boutonSubmit.addEventListener('mouseleave', function(e){
        infobulle.innerHTML = ""
    })
    

    // Fonction de calcule
    // On utilise eval qui revent le resultat avec pour entrer une chine de caractaire
    // On try catch pour récuperer l'erreur par exemple si l'utilisateur mes 2 + a la suite ca renvoi une erreur
    const calcule = () => {
        try {
            screen.value = eval(nombreFinal);
            nombreFinal = "";
        } catch(e) {
            alert('Erreur ' + e);
        }

    };

    // Lance le calcule au submit du formulaire
    formulaire.addEventListener('submit', function(event) {
        event.preventDefault();
        calcule();
    });


    /* Sur le clique du bouton d'affichage on regarde si les éléments on la classe hidden
    Si c'est le cas on l'enleve sinon on l'ajoute, ensuite on change le texte du bouton pour passer
    de reduire la calculatrice a afficher la calculatrice */
    boutonAffichage.addEventListener('click', function(){
        screen.classList.toggle('hidden');
        formulaire.classList.toggle('hidden');
        divInfobulle.classList.toggle('hidden');

        if(boutonText.textContent === "Réduire la calculatrice"){
            boutonText.innerHTML = "Afficher la calculatrice"
        } else {
            boutonText.innerHTML = "Réduire la calculatrice"
        }
    });

})