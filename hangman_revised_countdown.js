// Web Worker: Count down from 30 to 0, repeats, starts at 30 again
// Used in HangmanRevised.js file
var count = 30;
//var canvas = document.getElementById('canvas');
//var context = canvas.getContext('2d');

function timedCount() {
    if (count >= -1){
        if (count === -1){
            count = 30;
        }
        postMessage(count);
        count -= 1;
        setTimeout("timedCount()",1000);
    }

    //context.font = "20px Georgia";
    //context.strokeText(document.getElementById("countdown").textContent, 10, 100);
}

timedCount();