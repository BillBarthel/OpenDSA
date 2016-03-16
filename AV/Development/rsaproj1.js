"use strict";
/* 
 * In this js file, we use a matrix to explain the steps of RSA cryptosystem.
 * 
 * Author: Cheenou Thao
 * Date: 2/17/16
**/

$(document).ready(function () {


    JSAV.init();

    var av = new JSAV("rsaproj1");
    var arr = av.ds.matrix([[" ", " ", " ", " ", " ", " ", " "], ["p", "q", "n", "ϕ(n)", "e", "d", "m"]], {'width': '60px'});
    
    av.umsg("Shown here is a matrix of variables needed and it's values.");
    av.displayInit();
    
    av.umsg("The first step is to choose two different prime numbers for 'p' and 'q'.");
    av.step()
    
    av.umsg("For an example p=3 and q=5");
    arr.value(0, 0, "3");
    arr.value(0, 1, "5");
    arr.highlight(0,0);
    arr.highlight(0,1);
    av.step();
       
    av.umsg("The second step is to get the 'n' variable.");
    arr.unhighlight(0,0);
    arr.unhighlight(0,1);
    av.step()
    
    av.umsg("To get 'n', we must mulitply p and q: ");
    arr.highlight(0,0);
    arr.highlight(0,1);
    av.step();
    
    av.umsg("p * q = 3 * 5", {preserve: true});
    av.step();
    
    av.umsg(" = 15", {preserve: true});
    arr.unhighlight(0,0);
    arr.unhighlight(0,1);
    arr.highlight(0,2);
    arr.value(0, 2, "15");
    av.step();
    
    av.umsg("The third step is to get ϕ(n).");
    arr.unhighlight(0,2);
    av.step()
    
    av.umsg("To get ϕ(n). We must multply (p-1) and (q-1):");
    av.step();
    
    av.umsg(" (3-1) * (5-1)", {preserve: true});
    av.step();
    
    av.umsg(" = (2) * (4)", {preserve: true});
    av.step();
    
    av.umsg(" = 8", {preserve: true});
    arr.highlight(0,3);
    arr.value(0, 3, "8");
    av.step();
    
    av.umsg("In the fourth step, we now need to choose a value for 'e'.");
    arr.unhighlight(0,3);
    av.step()
    
    av.umsg("'e' can be any number between 1 and ϕ(n). For an example, 7.");
    av.step()
    
    av.umsg("", {preserve: true});
    arr.highlight(0,4);
    arr.value(0, 4, "7");
    av.step()
    
    av.umsg("In the fifth step now, we compute for 'd'.");
    arr.unhighlight(0,4);
    av.step()
    
    av.umsg("To compute for 'd', we need to use the Extended Euclidean Algorithm. (Extended Euclidean Algorithm in section 1.1.3)");
    av.step()
    
    av.umsg("Using the Extended Euclide Algorithm, we get an equation of a*x mod b = 1.");
    av.step()
    
    av.umsg("From here we replace those variables with: e*d mod(ϕ(n)) = 1.");
    av.step()
    
    av.umsg("Now, we just plug in our values for those variables we already computed: ");
    av.step()
    
    av.umsg("'e' = 7, ϕ(n) = 8.", {preserve: true});
    arr.highlight(0,3);
    arr.highlight(0,4);
    av.step()
    
    av.umsg(" From here we just need to find a value for 'd', such that 7*d is one greater than a multiple of 8.");
    av.step()
    
    av.umsg("So basically, we need to solve for 7*d = 8*x +1; where x is a positive integer: In this case, 7*(7) = 8*(6)+1 or 49 = 48+1.");
    av.step()
    
    av.umsg(" As a result, 'd' = 7.");
    arr.unhighlight(0,3);
    arr.unhighlight(0,4);
    arr.highlight(0,5);
    arr.value(0, 5, "7");
    av.step()
    
    av.umsg("With 'd' computed, all we need is a value for 'm' and we can start encrypting.");
    arr.unhighlight(0,5);
    av.step()
    
    av.umsg("'m' could be any positve integer value. For our example, we'll use 11.");
    av.step();
    
    av.umsg(" 'm' = 7.", {preserve: true});
    arr.highlight(0,6);
    arr.value(0, 6, "11");
    av.step();
    
    av.umsg("Now that all of these variables are accounted for, we can start Encrypting.");
    arr.unhighlight(0,6);
    arr.value(0, 6, "11");
    av.step();
    av.umsg("Check Slides 1.1.4 for Encrypting and Decrypting.");
    av.recorded();

});
