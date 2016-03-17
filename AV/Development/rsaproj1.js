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
    var arr = av.ds.matrix([[" ", " ", " ", " ", " ", " ", " "], ["p", "q", "n", "ϕ(n)", "e", "m", "d"]], {'width': '60px'});
    
    av.umsg("Shown here is a matrix of variables needed for the RSA algorithm.  Let's compute them!");
    av.displayInit();
    
    av.umsg("The first step is to choose two different prime numbers for 'p' and 'q'.");
    av.step()
    
    av.umsg("For this example, p=3 and q=5");
    arr.value(0, 0, "3");
    arr.value(0, 1, "5");
    arr.highlight(0,0);
    arr.highlight(0,1);
    av.step();
       
    av.umsg("The second step is to get the 'n' variable.");
    arr.unhighlight(0,0);
    arr.unhighlight(0,1);
    av.step()
    
    av.umsg("To get 'n', we must multiply p and q: ");
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
    
    av.umsg("The third step is to generate ϕ(n).");
    arr.unhighlight(0,2);
    av.step()
    
    av.umsg("To generate ϕ(n), We must multiply (p-1) and (q-1):");
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
    
    av.umsg("'e' can be any number between 2 and ϕ(n) as long as they have no common factors besides the number 1. For this example, 7.");
    av.step()
    
    av.umsg("", {preserve: true});
    arr.highlight(0,4);
    arr.value(0, 4, "7");
    av.step()
    
	 av.umsg("Next, we will choose any positive integer that is less than 'n' to represent our public encryption key.  We will call this variable 'm' and set it to 8 for this example.");
    arr.unhighlight(0,4);
    av.step();
    
    av.umsg(" 'm' = 8.", {preserve: true});
    arr.highlight(0,5);
    arr.value(0, 5, "8");
    av.step();
    
    av.umsg("Later, we will run 'm' through an equation and encrypt it.  'm' will no longer = 8, but a different number that represents an encrypted version of 8.  That way, if the information were to be maliciously intercepted, the attacker wouldn't know what the actual data they intercepted is.");
    av.step();
    av.umsg("Check Slides 1.1.4 for more detailed information on Encrypting and Decrypting."); 
    av.step();
    
    av.umsg("Finally, we will compute for 'd'.");
    arr.unhighlight(0,5);
    av.step();
    
    av.umsg("'d' is the private key needed to be able to return the encrypted representation of 'm' back into readable data.  It is also the most difficult variable to calculate in this algorithm and is what makes the algorithm so secure.");
    av.step();
    
    av.umsg("To keep this slide show simple, given the previous variables, our value for 'd' is 7.  Because of the complexity of finding this variable, a step by step slide show is given below in 1.1.3.");
	 arr.highlight(0,6);
    arr.value(0, 6, "7");    
    av.step();
    
    av.umsg("Now that we have the boring stuff out of the way, it's time to get to the fun stuff!");
    arr.unhighlight(0,6);
    av.step()
    av.recorded();
});
