/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here
    document.getElementById('run').addEventListener('click' , () =>{
        //you can combine 2 arrays with map method
        var array = keys.map((el, i) => {
        return [keys[i], values[i]];
});
        // then convert it with Object.fromEntries

        var output = Object.fromEntries(array);

        console.log(output);


    })  
})();
