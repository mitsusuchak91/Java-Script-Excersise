/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        var oldDay = document.getElementById("dob-day").value;
        var oldMonth = document.getElementById("dob-month").value;
        //old month day year value is in number but it is still "string". check with typeof for confirmation
        var oldYear = document.getElementById("dob-year").value;
        day = parseInt(oldDay);
        month = parseInt(oldMonth);
        year = parseInt(oldYear);
        var date = new Date();
        var currentYear = date.getFullYear();
        var currentMonth = date.getMonth() + 1;
        //month is given from 0 to 11
        var currentDay = date.getDate();
        var age = 0;
    //    var age =  currentYear - year;
     
      if(currentMonth === month){
        if(currentDay >= day) {
            age =  currentYear - year;
        }
        else {
            age = currentYear - year -1;
        }
      }
      else if(currentMonth < month){
        age = currentYear - year -1;
    }
      else {
         age =  currentYear - year;
      }
      console.log(age);
    })
})();
