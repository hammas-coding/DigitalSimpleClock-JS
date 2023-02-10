let hrs = document.getElementById('hrs');
let mint = document.getElementById('mint');
let sec = document.getElementById('sec');
let session = document.getElementById('session');
setInterval(() => {
    let date = new Date;
    hour = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    if (hour > 12) {
        hour = hour - 12;
    }
    if (hour >= 12) {
        session.innerHTML = 'PM';
    }
    else {
        session.innerHTML = 'AM';
    }
    hrs.innerHTML = hour;
    mint.innerHTML = minutes;
    sec.innerHTML = seconds;
});