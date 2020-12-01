var noOfDrumButtons=document.querySelectorAll(".drum").length;
//detecting button press
for(var i=0;i<noOfDrumButtons;i++){
	document.querySelectorAll(".drum")[i].addEventListener("click",function(){
		var btnInnerHTML=this.innerHTML;
		makeSound(btnInnerHTML);
        animation(btnInnerHTML);
		
	});
}
//detecting keyboard press

document.addEventListener("keydown",function(event){
makeSound(event.key);
animation(event.key);
   });


function makeSound(key){
	switch(key){
			case "w":
             var audio=new Audio("tom-1.mp3");
		     audio.play();
		     break;
			case "a":
			var audio=new Audio("tom-2.mp3");
		    audio.play();
		    break;
			case "s":
			var audio=new Audio("tom-3.mp3");
		    audio.play();
		    break;
            case "d":
            var audio=new Audio("tom-4.mp3");
		    audio.play();
		    break;
		    case "j":
		    var audio=new Audio("kick-bass.mp3");
		    audio.play();
		    break;
            case "k":
		    var audio=new Audio("crash.mp3");
		    audio.play();
		    break;
           case "l":
		    var audio=new Audio("snare.mp3");
		    audio.play();
		    break;
		    default:console.log(btnInnerHTML);
}
}
function animation(key){
var activebtn=document.querySelector("."+key);
activebtn.classList.add("pressed");
setTimeout(function(){activebtn.classList.remove("pressed");},100);
}




