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
const closeSelect = document.querySelector(".close"); // declaration du bouton (ici une croix) à actionner

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event ==> ecoute l'evenement sur closSelect et renvoi la fonction closeModal si il y a un click
closeSelect.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form ==> active le display du 'div class="bground"' à "none" => la fenêtre disparaît
function closeModal() {
  modalbg.style.display = "none";
}



