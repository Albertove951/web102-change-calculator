// Write your JavaScript here

//functoin that will create the chnage 
function calculateChange(due, received){
    var due = document.getElementById('amount-due').value;
    var received = document.getElementById('amount-received').value;
    var change = (received - due).toFixed(2);
    
    return change;
}


function returnChange(){
    var dollars = Math.floor(calculateChange());
        var remainder =  ((calculateChange() - dollars).toFixed(2)) * 100;
    console.log(calculateChange());
    var quarters = Math.floor(remainder/25);
        remainder -= (quarters * 25);

    var dimes = Math.floor(remainder/10);
        remainder -=  (dimes * 10);

    var nickels = Math.floor(remainder/5);
        remainder -= (nickels * 5);

    var pennies = Math.floor(remainder/1);
     
        document.getElementById("dollars-output").innerHTML = (dollars) + ' dollars';
        document.getElementById("quarters-output").innerHTML = (quarters) + ' quarters';
        document.getElementById("dimes-output").innerHTML = (dimes) + ' dimes';
        document.getElementById("nickels-output").innerHTML = (nickels) + ' nickels';
        document.getElementById("pennies-output").innerHTML = (pennies) + ' pennies';
    
}


document.getElementById('calculate-change').onclick = function() {
    returnChange();
}

     
   
        
 