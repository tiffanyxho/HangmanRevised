document.addEventListener('DOMContentLoaded',main,false);

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var background_color = "#d9b3ff";
context.canvas.width  = window.innerWidth;
context.canvas.height = window.innerHeight;

function main(){
    // TODO: Web Worker for a timer - does not work, gives an error in Chrome dev. tools
    // Useful links: https://stackoverflow.com/questions/21408510/chrome-cant-load-web-worker?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
    // https://stackoverflow.com/questions/18586921/how-to-launch-html-using-chrome-at-allow-file-access-from-files-mode
    // Web Worker created in function countdown; hangman_revised_countdown.js file is Web Worker file, keeps counter going from 30 to 0 sec
    window.onload = function countdown(){
        if (typeof(Worker) !== "undefined"){
            var worker = new Worker("hangman_revised_countdown.js"); 
            worker.onmessage = function(event){
                document.getElementById("countdown").innerHTML = event.data;
                drawNewCount();
            };
        }else{
            document.getElementById("countdown").innerHTML = "not supported";
        }
    }
}

// ALTERNATIVE TO CLEARING COUNT TEXT: https://stackoverflow.com/questions/3008635/html5-canvas-element-multiple-layers, but this works
// Clears the previous count to display new count by recoloring background, also redraws the background semicircle
function clearCount(){
    // Fills in background color
    context.fillStyle = background_color;
    context.fillRect(0,0,canvas.width,canvas.height);

    // Black semicircle drawn
    context.beginPath();
    context.fillStyle = "black";
    context.arc(canvas.width/2,0,30,0,2*Math.PI);
    context.stroke();
}

// Clears previous count using clearCount() and draws new count, starts at 30 & decrements to 0, loops back to 30
function drawNewCount(){
    window.requestAnimationFrame(function loop(){
        clearCount();
        context.font = "24px Times New Roman";
        
        if (parseInt(document.getElementById("countdown").innerHTML) >= 10) {
            context.strokeText(document.getElementById("countdown").innerHTML, canvas.width/2 - 12, 21.5);
        }else{
            context.strokeText(document.getElementById("countdown").innerHTML, canvas.width/2 - 6, 21.5);
        }
    });
}