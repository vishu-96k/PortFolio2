var tablinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-links");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-links");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

//?SMOOTH EFFERC
const typewriterElement = document.getElementById("typewriter-text");

const words = ["Vishwajeet Gaikwad...", "Developer..."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const currentText = currentWord.substring(0, charIndex);

  typewriterElement.textContent = currentText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 150); // Typing speed
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 90); // Deleting speed
  } else {
    if (isDeleting) {
      // Finished deleting, instantly start next word
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 0);
    } else {
      // Finished typing, wait before deleting
      isDeleting = true;
      setTimeout(typeEffect, 1500); // Pause before deleting
    }
  }
}

typeEffect();
