// Web Worker: Count down from 30 to 0, repeats, starts at 30 again
// Used in HangmanRevised.js file
// Note: document doesn't exist in web workers
var count = 15;

function timedCount() {
    if (count >= -1){
        if (count === -1){
            count = 15;
        }
        postMessage(count);
        count -= 1;
        setTimeout("timedCount()",700);
    }
}

timedCount();