/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operationswitch (operation) 

        switch (operation) {
            case "addition" :
                var one = document.getElementById("op-one").value;
                var two = document.getElementById("op-two").value;
                alert(parseInt(one) + parseInt(two));
                break;
            case "substraction":
                var one = document.getElementById("op-one").value;
            var two = document.getElementById("op-two").value;
                alert(parseInt(one) - parseInt(two));
                break;
            case "multiplication":
                var one = document.getElementById("op-one").value;
            var two = document.getElementById("op-two").value;
                alert(parseInt(one) * parseInt(two));
                break;
            case "division":
                var one = document.getElementById("op-one").value;
            var two = document.getElementById("op-two").value;
               alert(parseInt(one) / parseInt(two));
                break;
        }
        };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();