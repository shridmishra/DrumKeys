    
document.addEventListener( "keydown" , event=>{

    let name = event.key;
    console.log(name);
   
    if(name=="b"){
    var audio = new Audio("boom.wav");
    audio.play();}
    else if(name=="c"){
        var audio = new Audio("clap.wav");
        audio.play();
    }
    else if(name=="k"){
        var audio = new Audio("kick.wav");
        audio.play();
    }
    else if(name=="r"){
        var audio = new Audio("ride.wav");
        audio.play();
    }
    else if(name=="s"){
        var audio = new Audio("snare.wav");
        audio.play();
    }
    else{
        alert("Try pressing S R K B C on keyboard");
    }

});
