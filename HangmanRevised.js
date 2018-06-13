document.addEventListener('DOMContentLoaded',main,false);
document.addEventListener('DOMContentLoaded',countdown,false);

var x_pos = 0, y_pos = 0;
var canvas = document.getElementById('canvas');
var worker;

function main(){
    //countdown();
    var context = canvas.getContext('2d');
    context.beginPath();
    context.arc(canvas.width/2,0,10,0,2*Math.PI);
    context.stroke();

    /*window.requestAnimationFrame(function loop(){
        x_pos += 1;
        y_pos += .5;

        context.clearRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = 'red';
        context.fillRect(x_pos, 0, 100, 100);

        context.fillStyle = 'green';
        context.fillRect(0, y_pos, 100, 100);

        window.requestAnimationFrame(loop);
    });*/

    document.addEventListener('mousedown',  mouseDown);
}

function countdown(){
    if (typeof(Worker) !== "undefined"){
        if(worker === "undefined") {
            worker = new Worker("hangman_revised_countdown.js");
        }
        worker.onmessage = function(event){
            document.getElementById("countdown_text").innerHTML = event.data;
        };
    }else{
        document.getElementById("countdown_text").innerHTML = "not supported";
    }
}

function mouseDown(event){
    if (event.button === 0){
        x_pos += 10;
    }
}