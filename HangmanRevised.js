document.addEventListener('DOMContentLoaded',main,false);
//document.addEventListener('DOMContentLoaded',countdown,false);

var x_pos = 0, y_pos = 0;
var canvas = document.getElementById('canvas');
var worker;

function main(){
    var hit_right = false, hit_bottom = false;
    var context = canvas.getContext('2d');
    context.beginPath();
    context.arc(canvas.width/2,0,10,0,2*Math.PI);
    context.stroke();

    window.requestAnimationFrame(function loop(){
        if (x_pos >= 0 && x_pos < canvas.width - 100 & !hit_right){
            x_pos += 1;
        }
        if (x_pos === canvas.width - 100){
            hit_right = true;
        }
        if (hit_right && x_pos !== 0){
            x_pos -= 1;
        }
        if (x_pos === 0){
            hit_right = false;
        }
        if (y_pos >= 0 && y_pos < canvas.height - 100 & !hit_bottom){
            y_pos += 1;
        }
        if (y_pos === canvas.height - 100){
            hit_bottom = true;
        }
        if (hit_bottom && y_pos !== 0){
            y_pos -= 1;
        }
        if (y_pos === 0){
            hit_bottom = false;
        }
        
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = 'red';
        context.fillRect(x_pos, 10, 100, 100);

        context.fillStyle = 'green';
        context.fillRect(10, y_pos, 100, 100);

        window.requestAnimationFrame(loop);
    });

    document.addEventListener('mousedown',  mouseDown);
}

// TODO: Web Worker for a timer - does not work, gives an error in dev. tools
/*function countdown(){
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
}*/


function mouseDown(event){
    if (event.button === 0){
        x_pos += 10;
    }
}