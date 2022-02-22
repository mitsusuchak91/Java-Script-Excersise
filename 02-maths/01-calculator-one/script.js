/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        var solution = 0;
    var one = document.getElementById("op-one").value;
    var two = document.getElementById("op-two").value;
    // solution = one + two;
        solution = parseInt(one) + parseInt(two);
        alert(solution);
    });
        document.getElementById("substraction").addEventListener("click", () => {
            //perform substraction
            var solution = 0;
        var one = document.getElementById("op-one").value;
        var two = document.getElementById("op-two").value;
        // solution = one - two;
        solution = parseInt(one) - parseInt(two);
        alert(solution);
    });
        document.getElementById("multiplication").addEventListener("click", () => {
            //perform multiplication
            var solution = 0;
        var one = document.getElementById("op-one").value;
        var two = document.getElementById("op-two").value;
        // solution = one * two;
        solution = parseInt(one) * parseInt(two);
        alert(solution);
    });
        document.getElementById("division").addEventListener("click", () => {
            //perform division
            var solution = 0;
        var one = document.getElementById("op-one").value;
        var two = document.getElementById("op-two").value;
        // solution = one / two;
        solution = parseInt(one) / parseInt(two);
        alert(solution);
    })
})();
