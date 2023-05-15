let button = document.getElementById("Btn");

// When the user scrolls down  from the top of the document show the button
window.onscroll = function() {
    showButton()
};

function showButton() {
  if (document.body.scrollTop > 45 || /* (pour la difference des operateurs)*/ document.documentElement.scrollTop > 45) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // (pour la difference des operateurs)
  document.documentElement.scrollTop = 0; // (pour la difference des operateurs)
}