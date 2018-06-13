document.addEventListener('DOMContentLoaded',main,false);

var x_pos = 0, y_pos = 0;
var canvas = document.getElementById('canvas');

function main(){
    var hit_right = false, hit_bottom = false;
    var context = canvas.getContext('2d');
    context.beginPath();
    context.arc(canvas.width/2,0,10,0,2*Math.PI);
    context.stroke();

    context.font = "20px Georgia";
    context.strokeText("hello", 10, 100);
    console.log(document.getElementById("countdown"));
    
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

function mouseDown(event){
    if (event.button === 0){
        x_pos += 10;
    }
}