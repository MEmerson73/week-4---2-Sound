
/*this establishes the sound function and allows it to play*/

function sound(src){// add play function
    this.sound = document.createElement("audio") ;//create audio
    this.sound.src = src;//define src
    this.play = function() {//music function
        this.sound.play();//play sound
    }
}


/* this is the name of the function for the sounds*/
function semperP()
{
   /*this is the name of the sound file to be played*/
    mySound = new sound ("semperP.mp3");
    mySound.play();
}

function stop()
{
    window.location.reload();
}