
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("start").addEventListener("click", timer);
  document.getElementById("stop").addEventListener("click", pause);
  document.getElementById("clear").addEventListener("click", reset);
});
    var h1 = document.getElementsByTagName('h1')[0],
    //start = document.getElementById('start'),
    //stop = document.getElementById('stop'),
    //clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t,flag=0;
    document.getElementById('start').disabled = false;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}

function timer() {
    if(flag==0)
    {
        flag=1;
        document.getElementById('start').disabled = true;
    }
  
    t = setTimeout(add, 1000);
    
}




function pause() {
    flag=0;
    document.getElementById('start').disabled = false;
    clearTimeout(t);
    alert("You took "+hours+" hours "+ minutes +" minutes and "+seconds+ " seconds to complete the task");
    
}

/* Clear button */
 function reset() {
    flag=0;
    document.getElementById('start').disabled = false;
    clearTimeout(t);
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
    
}