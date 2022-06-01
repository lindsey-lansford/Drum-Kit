//detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML)
    });
}

//detecting keyboard press
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
 })

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


// Constructor Function
// function HouseKeeper(skills, languages, age, name) {
//     this.skills = skills;
//     this.languages = languages;
//     this.age = age;
//     this.name = name;
//     this.clean = function() {
//         alert("Cleaning in progress...");
//         makeBeds();
//         cleanBathroom();
//     }
// }

// // // Initialize Object
// var houseKeeper1 = new HouseKeeper(["deep clean", "bedsheets", "ironing"], "french", 33, "nancy");
// var houseKeeper2 = new HouseKeeper(["bathroom", "beds"], "english", 27, "susan");
// var houseKeeper3 = new HouseKeeper(["folding", "beds", "mopping"], "spanish", 31, "anne");

// //calling the 'clean' function
// houseKeeper3.clean();



