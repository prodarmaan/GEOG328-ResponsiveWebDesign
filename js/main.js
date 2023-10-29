// Get the element with the class "icon"
let icon = document.getElementsByClassName("icon")[0];

// Add an event listener for the 'click' event on the icon element
icon.addEventListener('click', responsive_control);

// Function to control the responsiveness of the navigation bar
function responsive_control() {
  // Get the element with the id "myTopnav"
  let x = document.getElementById("myTopnav");

  // Check if the class name of the element is "topnav"
  if (x.className === "topnav") {
    // If it is, add the "responsive" class to the element
    x.className += " responsive";
  } else {
    // If it's not, remove the "responsive" class from the element
    x.className = "topnav";
  }
}






// Flashlight Effect 
// From: https://codepen.io/tomhodgins/pen/egWjBb
// function update(e){
//   var x = e.clientX || e.touches[0].clientX
//   var y = e.clientY || e.touches[0].clientY

//   document.documentElement.style.setProperty('--cursorX', x + 'px')
//   document.documentElement.style.setProperty('--cursorY', y + 'px')
// }

// document.addEventListener('mousemove',update)
// document.addEventListener('touchmove',update)