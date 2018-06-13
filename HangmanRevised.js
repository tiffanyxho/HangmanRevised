document.addEventListener('DOMContentLoaded',main,false);

var canvas = document.getElementById('canvas');

function main(){
    // TODO: Web Worker for a timer - does not work, gives an error in Chrome dev. tools
    // Useful links: https://stackoverflow.com/questions/21408510/chrome-cant-load-web-worker?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
    // https://stackoverflow.com/questions/18586921/how-to-launch-html-using-chrome-at-allow-file-access-from-files-mode
    // Web Worker created in function countdown
    window.onload = function countdown(){
        if (typeof(Worker) !== "undefined"){
            var worker = new Worker("hangman_revised_countdown.js"); 
            worker.onmessage = function(event){
                document.getElementById("countdown").innerHTML = event.data;
            };
        }else{
            document.getElementById("countdown").innerHTML = "not supported";
        }
    }

    var context = canvas.getContext('2d');
    context.fillStyle = "orange";
    context.fillRect(0,0,canvas.width,canvas.height);

    context.beginPath();
    context.arc(canvas.width/2,0,10,0,2*Math.PI);
    context.stroke();

    context.font = "20px Georgia";
    context.strokeText(document.getElementById("countdown_text").textContent, 10, 100);
}