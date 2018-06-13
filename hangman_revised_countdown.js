var count = 0;

function timedCount() {
    count += 1;
    postMessage(count);
    setTimeout("timedCount()",30);
}

timedCount();