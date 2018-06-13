var count = 30;

function timedCount() {
    if (count >= -1){
        if (count === -1){
            count = 30;
        }
        postMessage(count);
        count -= 1;
        setTimeout("timedCount()",1000);
    }
}

timedCount();