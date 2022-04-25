
//detedcting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttonInnerHTML = this.innerHTML;

         makeSound(buttonInnerHTML);
         buttonAnimation(buttonInnerHTML);


  });
}
//dectecting keyboard press
   document.addEventListener("keypress",function(event){
     makeSound(event.key);

     buttonAnimation(event.key);
   });

   function makeSound(key){

     switch (key) {
       case "w":
       var tom1 = new Audio("sounds/duck.wav");
        tom1.play();
         break;

         case "a":
         var tom2 = new Audio("sounds/kit-flute.wav");
         tom2.play();
           break;

         case "s":
           var tom3 = new Audio("sounds/kit-toy-robot.wav");
           tom3.play();
             break;

           case "d":
             var tom4 = new Audio("sounds/kit-toy-train.wav");
             tom4.play();
               break;

           case "j":
               var crash = new Audio("sounds/kit-toy-drums.wav");
               crash.play();
                 break;

           case "l":
                   var snare = new Audio("sounds/kit-toy-whistler.wav");
                   snare.play();
                   break;
       default:console.log("buttonInnerHTML");

     }
   }
   function buttonAnimation(currentkey){

    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){

      activeButton.classList.remove("pressed");
    },100);


   }
