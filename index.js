//detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// detecting keyboard press
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
 })

//document is the object
//addEventListner is a HIGH ORDER FUNCTION.    
//respondToKey is the CALLBACK FUNCTION
// document.addEventListener("keydown", respondToKey(event));
// function respondToKey(event) {
//         console.log("keys pressed.")
//     }


function makeSound(key) {
    
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
                    // function Audio(fileLocation) {
        //     this.fileLocation = fileLocation;
        //     this.play = function () {
        //         //tap into the audio hardware
        //         //check the file at fileLocation exists
        //         //check the file at file Location is a sound file
        //         //play the file at file Location
        //     }
        // }
            break;
        
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}






