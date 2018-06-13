document.addEventListener('DOMContentLoaded',main,false);

var x_pos = 0, y_pos = 0;
var canvas = document.getElementById('canvas');

function main(){
    var context = canvas.getContext('2d');
    window.requestAnimationFrame(function loop(){
        x_pos += 1;
        y_pos += .5;

        context.clearRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = 'red';
        context.fillRect(x_pos, 0, 100, 100);

        context.fillStyle = 'green';
        context.fillRect(0, y_pos, 100, 100);

        window.requestAnimationFrame(loop);
    });

    document.addEventListener('mousedown',  mouseDown);
}

function mouseDown(event){
    if (event.button === 0){
        x_pos += 10;
    }
}