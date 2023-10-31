    
document.addEventListener( "keydown" , event=>{

    let name = event.key;
    console.log(name);
   
    if(name=="b"){
    var audio = new Audio("sounds/boom.wav");
    audio.play();}
    else if(name=="c"){
        var audio = new Audio("sounds/clap.wav");
        audio.play();
    }
    else if(name=="k"){
        var audio = new Audio("sounds/kick.wav");
        audio.play();
    }
    else if(name=="r"){
        var audio = new Audio("sounds/ride.wav");
        audio.play();
    }
    else if(name=="s"){
        var audio = new Audio("sounds/snare.wav");
        audio.play();
    }
    else{
        alert("Try S R K B C ");
    }

});