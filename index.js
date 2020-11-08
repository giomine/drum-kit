// detecting button press

var drums = document.querySelectorAll(".drum");

for (let i = 0; i < drums.length; i++) {
     drums[i].addEventListener("click", function(){
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    });
  }

// detecting keyboard press

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;

    case "a":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
      break;

    case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;

    case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;

    case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;

    case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;

    case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;
    default:
  }
}

// animating the blocks

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 100);

}


// This was my solution before following through the course. It works! It's just not attractive code.
// if(this.innerHTML === "w") {
//   var audio = new Audio("sounds/crash.mp3");
//   audio.play();
// } else if (this.innerHTML === "a") {
//    audio = new Audio("sounds/kick-bass.mp3");
//   audio.play();
// } else if (this.innerHTML === "s") {
//    audio = new Audio("sounds/snare.mp3");
//   audio.play();
// } else if (this.innerHTML === "d") {
//    audio = new Audio("sounds/tom-1.mp3");
//   audio.play();
// } else if (this.innerHTML === "j") {
//    audio = new Audio("sounds/tom-2.mp3");
//   audio.play();
// } else if (this.innerHTML === "k") {
//    audio = new Audio("sounds/tom-3.mp3");
//   audio.play();
// } else if (this.innerHTML === "l") {
//    audio = new Audio("sounds/tom-4.mp3");
//   audio.play();
// } else {
//   alert("boo");
// }
