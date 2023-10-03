

var timer = false;
let count = 0;
let second = 0;
let minute = 0;
let hour = 0;


function swatch () {
    if (timer == true){

        count = count + 1;

        if (count == 100){
            second = second + 1;
            count = 0
        }

        if (second == 60){
            minute = minute + 1;
            second = 0;
        }

        if (minute == 60){
            hour = hour + 1;
            minute = 0;
            second = 0;
            count = 0;
        }

        let countStr = count;
        let secondStr = second;
        let minuteStr = minute;
        let hourStr = hour;

        if (count < 10 ){
            countStr = "0" + countStr;
        }

        if (second < 10 ){
            secondStr = "0" + secondStr;
        }

        if (minute < 10 ){
            minuteStr = "0" + minuteStr;
        }

        if (hour < 10 ){
            hourStr = "0" + hourStr;
        }

        document.getElementById ("spn4").innerHTML = countStr;  
        document.getElementById ("spn3").innerHTML = secondStr; 
        document.getElementById ("spn2").innerHTML = minuteStr;  
        document.getElementById ("spn1").innerHTML = hourStr;  

        setTimeout("swatch()" ,10);  
    }
}

function startsw(){
    timer = true;
    swatch();
}

function stopsw(){
    timer = false
}

function resetsw(){
    timer = false;

    count = 0;
    second = 0;
    minute = 0;
    hour = 0;
    
    document.getElementById ("spn4").innerHTML = "00";  
    document.getElementById ("spn3").innerHTML = "00"; 
    document.getElementById ("spn2").innerHTML = "00";  
    document.getElementById ("spn1").innerHTML = "00";  

}