
var target_mili_sec = new Date("May 11, 2024 00:00:0").getTime();
// var target_mili_sec = new Date("Apr 29, 2024 17:58:00").getTime();

function timer(){
    var now_milli_sec = new Date().getTime()
    var remaining_sec = Math.floor((target_mili_sec - now_milli_sec) / 1000)
    
    var day = Math.floor(remaining_sec / (3600 * 24))
    var hour = Math.floor((remaining_sec % (3600 * 24)) / 3600)
    var min = Math.floor((remaining_sec % 3600) / 60)
    var sec = Math.floor(remaining_sec %  60)

    document.querySelector("#day").innerHTML = day;
    document.querySelector("#hour").innerHTML = hour;
    document.querySelector("#min").innerHTML = min;
    document.querySelector("#sec").innerHTML = sec;

    if(day === 0 && hour === 0 && min === 0 && sec === 0){
        
        let elTimer = document.querySelector(".timer")
        elTimer.style.display = "none";

        let elNotify = document.querySelector(".container-notify")
         elNotify.style.display = "block";
        }
    }
setInterval(timer, 1000)

