"use strict";
/**
 * This file computes the encryption key based on either the user's inputs for 'p', 'q', 'm', and 'e'
 * or on randomly generated values for those variables.
 * 
 * Author: Cheenou Thao
*/

(function ($) {
  var av;
 

function runit() {
    ODSA.AV.reset(true);

    var theArray = [];
    var prime1;
    var prime2;
    var phi;
    var primeArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
    var max_e = 12;
    var max_m = 21;
    var eValue;
    var mValue;
    var inputPrimeArr;
    var validPrime = false;
    var useGeneratedArr;
    var temp;
    var temp2;
    var nValue;
    
    alert("***Beind the scene, ϕ(n) has been produced by using (p-1)*(q-1) in order to validate the 'e' value***");
    
    inputPrimeArr = document.getElementById("primeNumbers").value.trim().split(" ");
    mValue = parseInt(document.getElementById("mValue").value);
    eValue = parseInt(document.getElementById("eValue").value);
    
    // Checks for valid input
    if(mValue < max_m && mValue > 0 && eValue < max_e && eValue > 0){
        for(var i = 0; i < primeArray.length; i++)
        {
            if(inputPrimeArr[0] == primeArray[i])
                validPrime = true;
        }
        if(validPrime == true)
        {
            validPrime = false;
            for(var i = 0; i < primeArray.length; i++)
            {
                if(inputPrimeArr[1] == primeArray[i])
                    validPrime = true;
            }
            if (validPrime == false)
                useGeneratedArr=true;
            else
            {
                phi = (inputPrimeArr[0]-1) * (inputPrimeArr[1]-1);
                nValue = inputPrimeArr[0] * inputPrimeArr[1];
                if(nValue < mValue || phi < eValue)
                    useGeneratedArr = true;
            }
        }
        else
            useGeneratedArr = true;
    }
    else
        useGeneratedArr = true;
    
    // If empty input or invalid input, then random values get generated
    if(useGeneratedArr == true){
        alert("No input was entered or invalid input! Using random generated values!");
        prime1 = primeArray[Math.floor((Math.random() * 11))];
        prime2 = primeArray[Math.floor((Math.random() * 11))];
        while(prime2 == prime1)
        {
            prime2 = primeArray[Math.floor((Math.random() * 11))];      
        }   
        
        nValue = prime1 * prime2;
        phi = (prime1 -1) * (prime2 -1);
        if(nValue < max_m)
        {
            temp = Math.floor((Math.random() * (nValue-1)) + 1);
            temp2 = Math.floor((Math.random() * (nValue-1)) + 1);
        }
        else
        {
            temp = Math.floor((Math.random() * max_m) + 1);
            temp2 = Math.floor((Math.random() * max_e) + 1);
        }
        
        theArray = [prime1, prime2, phi, temp, temp2];
	}
    else
    {
        theArray = [inputPrimeArr[0], inputPrimeArr[1], phi, mValue, eValue];
    }


    av = new JSAV($('.avcontainer'), $('.jsavindex'));
    var arr = av.ds.matrix([[theArray[0], theArray[1], theArray[2], theArray[3], theArray[4], " ", " "], ["p", "q", "ϕ(n)", "m", "e", "n", "c(m)"]]);
    var n = arr.value(0, 0) * arr.value(0, 1);
    var mToTheE = Math.pow(arr.value(0, 3), arr.value(0, 4));
    var encryptKey = mToTheE % n;
    console.log(n);
    
    av.umsg("First step into computing the Encypt key is to get 'n', which is done by multiplying the two prime numbers (p * q).");

    av.displayInit();

    //First slide
    av.umsg("n = p * q");
    arr.highlight(0,0);
    arr.highlight(0,1);
    av.step();
    
    //Second Slide
    av.umsg(" = " + theArray[0] + " * " + theArray[1], {preserve: true});
    av.step();
    
    //Third Slide
    av.umsg(" = " + n, {preserve: true});
    arr.unhighlight(0,0);
    arr.unhighlight(0,1);
    arr.highlight(0,5);
    arr.value(0,5,n);
    av.step();
    
    //Fourth Slide
    av.umsg("Now that we have 'n', we can just use the Encryption equation: c(m) = m^e mod n");
    arr.unhighlight(0,5);
    av.step();
    
    //Fifth Slide
    av.umsg("m^e = " + theArray[3] + "^" + theArray[4]);
    arr.highlight(0,3);
    arr.highlight(0,4);
    av.step();
    
    //Sixth Slide
    av.umsg(" = " + mToTheE, {preserve: true});
    arr.unhighlight(0,3);
    arr.unhighlight(0,4);
    av.step();
    
    //Seventh Slide
    av.umsg("... Now that we know m^e = " + mToTheE + ", we just mod n: ", {preserve: true});
    av.step();
    
    //Eighth Slide
    av.umsg( + mToTheE + " mod " + n, {preserve: true});
    av.step();
    
    //Nineth Slide
    av.umsg(" = " + encryptKey, {preserve: true});
    arr.highlight(0,6);
    arr.value(0,6,encryptKey);
    av.step();
    
    //Tenth Slide
    av.umsg("Encryption key: c(" + arr.value(0,3) + ") = " + encryptKey);
    av.step();
    
    //Eleventh Slide
    av.umsg("c(m) = " + encryptKey);
    arr.unhighlight(0,6);
    av.recorded();

}


function about() {
   alert("Demonstrating how to Encrypt a message using RSA Cryptosystem Algorithm");
}
  
function help() {
   alert("Help for simple RSA Encryption");
}
  
$('#about').click(about);
$('#runit').click(runit);
$('#help').click(help);
$('#reset').click(ODSA.AV.reset);
}(jQuery));
