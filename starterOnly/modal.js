function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

 
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//-------------------   #1 fermer la modale  ------------------------------------
 // recupération du bouton (ici une croix) à actionner
const closeSelect = document.querySelector(".close"); 

//  ecoute l'evenement sur closSelect et renvoi la fonction closeModal si il y a un click
closeSelect.addEventListener("click", closeModal);

// active le display du 'div class="bground"' à "none" => la fenêtre disparaît
function closeModal() {
  modalbg.style.display = "none";
}


//--#2  recupere la valeur de form

const first = document.getElementById("first");
const firstErr = document.getElementById("first_error");
const last =  document.getElementById("last");
const lastErr = document.getElementById("last_error");
const email =  document.getElementById("email");
const emailErr = document.getElementById("email_error");
const birth = document.getElementById("birthdate");
const birthErr = document.getElementById("birth_error");
const tournamentNb = document.getElementById("quantity");
const tournamentNbErr = document.getElementById("quantity_error");
const tournamentLocErr = document.getElementById("loc_error");
const tournamentLoc0 = document.getElementById("location0");
const tournamentLoc1 = document.getElementById("location1");
const tournamentLoc2 =  document.getElementById("location2");
const tournamentLoc3 =  document.getElementById("location3");
const tournamentLoc4 =  document.getElementById("location4");
const tournamentLoc5 =  document.getElementById("location5");
const tournamentLoc6 =  document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");
const conditionErr = document.getElementById("condition_error");
const confirme = document.getElementById("confirmation");
const fermer = document.getElementById("fermer");
const formulaire = document.getElementById("formulaire");
const modalBody = document.querySelector(".modal-body");


let mailCaractere = /[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i;

//--#2 ---------------------------------------------------------------------------------------
formulaire.addEventListener("submit", val);
function val(){
  if (first.value === '' || first.value.length < 2){
    //--#3------ Ajouter validation ou messages d'erreur #3  ---------
    firstErr.textContent ="Veuillez renseigner votre prénom (2 lettres mini !)";
    firstErr.style.fontSize = "12px"; 
    firstErr.style.color ="red"; 
    event.preventDefault();
  }
  else{
    firstErr.textContent ="";
    // Pas de message d'erreur, nombre de caractères suffisant

  }

  if (last.value === '' || last.value.length < 2){
    //--#3------ Ajouter validation ou messages d'erreur #3  ---------
    lastErr.textContent ="Veuillez renseigner votre nom (2 lettres mini !)";
    lastErr.style.fontSize = "12px"; 
    lastErr.style.color ="red";  
    event.preventDefault();
  }
  else{
    lastErr.textContent ="";
    // Pas de message d'erreur, nombre de caractères suffisant
  
  }
  
  if(mailCaractere.test(email.value)){
    emailErr.textContent ="";
    // Pas de message d'erreur, caracteres valides
 
  }
  else{
    //--#3------ Ajouter validation ou messages d'erreur #3  ---------
    emailErr.textContent ="Veuillez renseigner votre adresse mail!";
    emailErr.style.fontSize = "12px"; 
    emailErr.style.color ="red";
    event.preventDefault();
  }

  if (birth.value ===''){
    //--#3------ Ajouter validation ou messages d'erreur #3  ---------
    birthErr.textContent ="Veuillez renseigner votre date de naissance!";
    birthErr.style.fontSize = "12px"; 
    birthErr.style.color ="red"; 
    event.preventDefault();
 
  }
  else{
    birthErr.textContent =" ";
    //  Pas de message d'erreur, une date est renseignée
  }

  if (tournamentNb.value === ''){
    //--#3------ Ajouter validation ou messages d'erreur #3  ---------
    tournamentNbErr.textContent ="Veuillez renseigner le nombre de vos participation à un tournois GameOne!";
    tournamentNbErr.style.fontSize = "12px"; 
    tournamentNbErr.style.color ="red"; 
    event.preventDefault();
  }
  else{
    tournamentNbErr.textContent ="";
  }

  if ((tournamentLoc1.checked)|| (tournamentLoc2.checked) || (tournamentLoc3.checked)
    ||(tournamentLoc4.checked) ||(tournamentLoc5.checked) ||(tournamentLoc6.checked)) {
      tournamentLocErr.textContent ="";
    // pas de message d'erreur, une ville est selectionnée
  }
  else{
    //--#3------ Ajouter validation ou messages d'erreur #3  ---------
    tournamentLocErr.textContent =" Veuillez choisir une ville!";
    tournamentLocErr.style.fontSize = "12px"; 
    tournamentLocErr.style.color ="red"; 
    event.preventDefault();
  }

  if(checkbox1.checked){
    conditionErr.textContent ="";
  //   Pas de message d'erreur, la case Condition selectionnée
  }
  else{
    //--#3------ Ajouter validation ou messages d'erreur #3  ---------
    conditionErr.textContent =" Veuillez vérifier que vous acceptez les termes et conditions!";
    conditionErr.style.fontSize = "12px"; 
    conditionErr.style.color ="red"; 
    event.preventDefault();
  } 
  
}
//--#4--------- Ajouter confirmation quand envoie réussi #4  ---------

confirme.addEventListener("click", function conf() {
  if (first.value &&
    last.value && 
    birth.value && 
    email.value && 
    tournamentNb.value && 
    ((tournamentLoc1.checked) || 
    (tournamentLoc2.checked) || 
    (tournamentLoc3.checked) ||
    (tournamentLoc4.checked) ||
    (tournamentLoc5.checked) ||
    (tournamentLoc6.checked)) && 
    checkbox1.checked === true) 
    { 
      modalBody.innerHTML = " Merci ! Votre réservation a bien été enregistrée.";
      modalBody.style.height = "600px";
      modalBody.style.paddingTop = "250px";
      modalBody.style.paddingLeft = "100px";
      modalBody.style.paddingRight = "100px";
      fermer.style.display = "block";
      fermer.addEventListener("click", closeModal);
     
    }
  }
  )