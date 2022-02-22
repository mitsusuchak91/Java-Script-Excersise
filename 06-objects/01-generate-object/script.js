/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const personne1 = {
        lastname : 'francis' ,
        firstname :'pera' ,
        age : 25 ,
        city : 'bruxelles',
        country :' belgique'
    }
    document.getElementById('run').addEventListener('click' , () =>{
        
        const personne1 = {
            lastname : 'francis' ,
            firstname :'pera' ,
            age : 25 ,
            city : 'bruxelles',
            country :' belgique'
        }

        console.log(personne1.firstname + " " + personne1.lastname + " is " + personne1.age + " years old " + "and lives in" + " " + personne1.city + "," + personne1.country) ;
        
    })

})();
