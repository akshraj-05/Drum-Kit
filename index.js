
// this type of calling function is called as announymous function there is no need to give it name
// document.querySelector("button").addEventListener("click", function () {

//     alert("hello");
// });



/* annonymous function ****/

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // var audio=new Audio("sounds/crash.mp3");
        // audio.play();
        // // this element thi aplne je te element no access thai sake 6
        // this.style.color="white";
        var ButtonInnerHtml = this.innerHTML;
        sound(ButtonInnerHtml);
        animation(ButtonInnerHtml);

    });



}

// this is for addint event listener to keypress
//be aware of this 
document.addEventListener("keypress", function (event) {
    //event.key(event is the variable) who passiss the which key is pressed
    sound(event.key);
    animation(event.key);
});
function sound(word) {

    switch (word) {
        case "w": {
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        }
        case "a": {
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        }
        case "s": {
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        }
        case "d": {
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        }
        case "j": {
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        }
        case "k": {
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        }
        case "l": {
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        }
        default: {
        }
    }

}


function animation(word) {
    var pressedButton = document.querySelector("." + word);
    //je button click thay ema press class add karva mate no code 6
    pressedButton.classList.add("pressed");


    // set time out 1 vakhat click thai gya pachhi oroginal possition ma avva mate no code 
    //6 aa e na andar nu system kevu 6 e net ma joi levanu
    setTimeout(function () {
        pressedButton.classList.remove("pressed");
    }, 100);
}