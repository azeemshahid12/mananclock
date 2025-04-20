function formatWithZero(num) {
    return num < 10 ? "0" + num : num;
}

function updateClock() {
    var now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = "AM";

    // am OR pm
    if (hours >= 12) {
        ampm = "PM";
    }
    
    hours = hours % 12;
    hours = hours ? hours : 12; 

    document.getElementById("hr").innerText = formatWithZero(hours);
    document.getElementById("min").innerText = formatWithZero(minutes);
    document.getElementById("sec").innerText = formatWithZero(seconds);
    document.getElementById("ampm").innerText = ampm;
}

setInterval(updateClock, 1000);

updateClock();