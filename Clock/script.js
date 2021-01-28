function currentTime(){
    let current = new Date();
    let hour = current.getHours();
    let minutes = current.getMinutes();
    let seconds = current.getSeconds();
    hour = updateTime(hour);
    minutes = updateTime(minutes);
    seconds = updateTime(seconds);
    let meridiem = checkingmeridiem(hour)
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    function checkingmeridiem(x){
        if(x < 12){
            document.getElementById("meridiem").innerHTML ="Am"
        }else{
            document.getElementById("meridiem").innerHTML ="Pm"
        }
    }
     
    function updateTime(k){
        if(k < 10){
            return  "0" + k;
        }else{
            return k;
        }
    }
    var t = setTimeout(function(){
        currentTime();
    },1000)
}

currentTime();
// console.log(current.getDate());