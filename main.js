setInterval(()=>{
    const clockTime = document.querySelector(".clock");
    let time = new Date()
    let seconds = time.getSeconds();
    let minutes = time.getMinutes();
    let hours = time.getHours();
    let day = 'AM';
    if(hours>12)
    {
        day = 'PM';
        hours = hours - 12;
    }
    if(seconds<10)
    {
        seconds = '0' + seconds;
    }
    if(minutes<10)
    {
        minutes = '0' + minutes;
    }
    if(hours<10)
    {
        hours = '0' + hours;
    }
    clockTime.textContent = hours + ':' + minutes + ':' + seconds + " " + day;
});