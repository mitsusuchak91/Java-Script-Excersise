/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    //month is given from 0 to 11
    var m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for(let i=0; i <m.length; i++){
        if(month === i){
            month = m[i];
        }
    }
    var date = d.getDate();
    var day = d.getDay();
    //day starts from 0 and week starts from sunday
    // Sunday - Saturday : 0 - 6
    var week = ["Sunday","Monday","Tuesday","Wednesday","Thurday","Friday","Saturday"];
    for(let i=0; i <week.length; i++){
        if(day === i){
            day= week[i];
        } 
    }
    var hour = d.getHours();
   var min = d.getMinutes();
    if(min < 10){
        min= "0"+min;
    }
    var time ="";
    if(hour < 12){
        time = hour+":"+min+" am";
    }
    else {
        time =  hour-12+":"+min+" pm";
    }
    document.getElementById("target").innerHTML = day+" "+month+" "+date+", "+year+", "+time;
})();
