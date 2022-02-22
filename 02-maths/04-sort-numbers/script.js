/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        // your code here
        let str = document.getElementById("numbers").value;
        let array1 = str.split(",");
        let array2 = [];
        for (let i = 0; i < array1.length; i++) {
            array2.push(parseInt(array1[i]));
        }
        console.log(array2.sort((a, b) => a - b));
    });
})();
