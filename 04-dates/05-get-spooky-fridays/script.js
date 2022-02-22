/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click",()=>{
        var year = parseInt(document.getElementById("year").value);
        //month and day(it's given in number) starts from 0 but date starts from 1
        for(i=0; i < 12; i++){
            var date = new Date(year,i,1);
            if(date.getDay() === 0){
                //if sunday is the first day of the month, you get friday the 13th
               var month = date.toLocaleString('default', {month: 'long'});
                console.log(month);
            }
        }
    })
})();
