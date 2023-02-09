

var  numberOfButtons = document.querySelectorAll(".drum").length;
for (i = 0; i<numberOfButtons; i++)  {

 document.querySelectorAll(".drum")[i].addEventListener("click", function ()  { 

  console.log(this.innerHTML);
  var audio = new Audio("sounds/crash.mp3");
  audio.play();
 });

}

// var audio = new Audio("sounds/tom-1.mp3");
//   audio.play();
 