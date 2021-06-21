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

  //--#1 fermer la modale // recupération du bouton (ici une croix) à actionner
const closeSelect = document.querySelector(".close"); 

  
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

  //--#1 fermer la modale //  ecoute l'evenement sur closSelect et renvoi la fonction closeModal si il y a un click
closeSelect.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

  //--#1 fermer la modale // active le display du 'div class="bground"' à "none" => la fenêtre disparaît
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
const checkbox2 = document.getElementById("checkbox2");
const confirme = document.getElementById("confirmation");
const form = document .getElementById("formulaire");

let mailCaractere = /[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i;

let today = new Date()
const ddate = today.getDate();
const mdate = today.getMonth() + 1;
const ydate = today.getFullYear();
console.log(ddate, mdate,ydate);
console.log(today);



//--#2 ---------------------------------------------------------------------------------------
form.addEventListener("submit", val);
function val(){
  if (first.value === '' || first.value.length < 2)
  {
    alert ("Documentez votre prénom avec 2 lettres minimums");
    //--#3------ Ajouter validation ou messages d'erreur #3  ---------
    firstErr.textContent ="Veuillez renseigner votre prénom (2 lettres mini !)";
    firstErr.style.fontSize = "12px"; 
    firstErr.style.background ="yellow"; 
    firstErr.style.color ="black"; 
    event.preventDefault();
  }
  else{
    firstErr.textContent ="";
    // Pas de message d'erreur, nombre de caractères suffisant
  }

  if (last.value === '' || last.value.length < 2)
  {
    alert ("Documentez votre nom avec 2 lettres minimums"); 
    //--#3------ Ajouter validation ou messages d'erreur #3  ---------
    lastErr.textContent ="Veuillez renseigner votre nom (2 lettres mini !)";
    lastErr.style.fontSize = "12px"; 
    lastErr.style.background ="yellow"; 
    lastErr.style.color ="black";  
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
    alert ("Documentez une adresse mail valide "); 
    //--#3------ Ajouter validation ou messages d'erreur #3  ---------
    emailErr.textContent ="Veuillez renseigner votre adresse mail!";
    emailErr.style.fontSize = "12px"; 
    emailErr.style.background ="yellow"; 
    emailErr.style.color ="black";   
   event.preventDefault();
  }

  if (birth.value ===''){
    alert("Documentez votre date de naissance");
    //--#3------ Ajouter validation ou messages d'erreur #3  ---------
    birthErr.textContent ="Veuillez renseigner votre date de naissance!";
    birthErr.style.fontSize = "12px"; 
    birthErr.style.background ="yellow"; 
    birthErr.style.color ="black"; 
    event.preventDefault();
 
  }
  else{
    birthErr.textContent =" ";

    
    //  Pas de message d'erreur, une date est renseignée
  }

  if (tournamentNb.value === ''){
    alert ("Documentez un nombre de tournois GameOn");
    //--#3------ Ajouter validation ou messages d'erreur #3  ---------
    tournamentNbErr.textContent ="Veuillez renseigner le nombre de vos participation à un tournois GameOne!";
    tournamentNbErr.style.fontSize = "12px"; 
    tournamentNbErr.style.background ="yellow"; 
    tournamentNbErr.style.color ="black"; 
    event.preventDefault();
  }
  else{
    tournamentNbErr.textContent ="";
  }

  if ((tournamentLoc0.checked)|| (tournamentLoc1.checked)|| (tournamentLoc2.checked) || (tournamentLoc3.checked)
    ||(tournamentLoc4.checked) ||(tournamentLoc5.checked) ||(tournamentLoc6.checked)) {
      tournamentLocErr.textContent ="";
    // pas de message d'erreur, une ville est selectionnée
  }
  else{
    alert ("Selectionnez une ville"); 
    //--#3------ Ajouter validation ou messages d'erreur #3  ---------
    tournamentLocErr.textContent =" Veuillez choisir une ville!";
    tournamentLocErr.style.fontSize = "12px"; 
    tournamentLocErr.style.background ="yellow"; 
    tournamentLocErr.style.color ="black"; 
    event.preventDefault();
  }

  if(checkbox1.checked){
    conditionErr.textContent ="";
  //   Pas de message d'erreur, la case Condition selectionnée
  }
  else{
    alert("Veuillez accepter les condtions d'utilisation");
    //--#3------ Ajouter validation ou messages d'erreur #3  ---------
    conditionErr.textContent =" Veuillez vérifier que vous acceptez les termes et conditions!";
    conditionErr.style.fontSize = "12px"; 
    conditionErr.style.background ="red"; 
    conditionErr.style.color ="black"; 
    event.preventDefault();
  }
}
 
// birth.addEventListener("input", valdate);
// console.log(input.birth.value);
// let birthday = new Date(birth.addEventListener("input", valdate));
// let dbirth = birthday.getDate();
// let mdbirth = birthday.getMonth() + 1;
// let ybirth = birthday.getFullYear();
// console.log(dbirth, mdbirth, ybirth);

function valdate(){
  birth.addEventListener("input", valdate);
  console.log(input.birth.value);
  let birthday = new Date(birth.addEventListener("input", valdate));
  let dbirth = birthday.getDate();
  let mdbirth = birthday.getMonth() + 1;
  let ybirth = birthday.getFullYear();
  console.log(dbirth, mdbirth, ybirth);
  if( ydate<ybirth && mdate<mbirth && ddate<dbirth){
    alert("Veuillez modifier la date");
    birthErr.textContent =" Problème de date !";
    birthErr.style.fontSize = "12px"; 
    birthErr.style.background ="blue"; 
    birthErr.style.color ="white";
    console.log(dbirth, mdbirth, ybirth); 
    event.preventDefault();
}
else{
  birthErr.textContent =" ";
  console.log(dbirth, mdbirth, ybirth);
  //  Pas de message d'erreur, une date est renseignée
  }
}
   




//--#4--------- Ajouter confirmation quand envoie réussi #4  ---------
confirme.addEventListener("click", function conf() {
  if (first.value &&
    last.value && 
    birth.value && 
    email.value && 
    tournamentNb.value && 
    ((tournamentLoc0.checked) || 
    (tournamentLoc1.checked) || 
    (tournamentLoc2.checked) || 
    (tournamentLoc3.checked) ||
    (tournamentLoc4.checked) ||
    (tournamentLoc5.checked) ||
    (tournamentLoc6.checked)) && 
    checkbox1.checked === true) 
    {
      alert("Merci ! Votre réservation a été reçue.");
  }
  else{
    alert("C'est la loose");
  }})



