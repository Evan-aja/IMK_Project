function time(){
    var today = new Date();

    var month = today.getMonth();
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    var date = today.getDate();
    var hour = today.getHours();
    var minute = today.getMinutes();
    if(minute < 10) minute = "0" + minute;

    var text;
    var time = hour + ":" + minute
    if(hour > 5 && hour <= 10) text = "Pagi";
    else if (hour > 10 && hour <= 14) text = "Siang";
    else if (hour > 14 && hour <= 18) text = "Sore";
    else if (hour > 18 && hour <=24) text = "Malam";
    else if (hour > 24 && hour <=5) text = "Malam";

    var dateTime = date+' '+time;
    
    document.getElementById("date").innerHTML = months[month] + " " + dateTime + " " + text;
}
setInterval(time, 60);