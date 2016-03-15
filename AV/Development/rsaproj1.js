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
    
    // First slide
    av.umsg("Shown here is a matrix of variables needed and it's values.");
    av.displayInit();
    av.umsg("Here we choose two prime numbers for 'p' and 'q' (ex. p=3 and q=5)", {preserve: false});
    arr.value(0, 0, "3");
    arr.value(0, 1, "5");
    arr.highlight(0,0);
    arr.highlight(0,1);
    av.step();

    //Second slide
    arr.unhighlight(0,0);
    arr.unhighlight(0,1);
    arr.highlight(0,2);
    av.umsg("Using 'p' and 'q', we compute for 'n'. (n=pq)");
    arr.value(0, 2, "15");
    av.step();
    
    // Third Slide
    arr.unhighlight(0,2);
    arr.highlight(0,3);
    av.umsg("Given 'n', we need to compute the totient of 'n'. (ϕ(n)=(p-1)(q-1))");
    arr.value(0, 3, "8");
    av.step();
    
    // Fourth Slide
    arr.unhighlight(0,3);
    arr.highlight(0,4);
    av.umsg("With the totient of the product, now we need to choose any integer between 1 and 8 for variable 'e'. (ex. e=7)");
    arr.value(0, 4, "7");
    av.step();
    
    // Fifth Slide
    arr.unhighlight(0,4);
    arr.highlight(0,5);
    av.umsg("After choosing a value for 'e', we can now compute d (e*d mod(ϕ(n)) = 1) ***Explanination of the computation for 'd' in section 1.1.3");
    arr.value(0, 5, "7");
    av.step();
    
    // Sixth Slide
    arr.unhighlight(0,5);
    arr.highlight(0,6);
    av.umsg("Now that all of those variables are computed for, we can encrypt any message with a value that is less than 'n' for 'm'. (ex. 'm' = 11)");
    arr.value(0, 6, "11");
    av.step();
    av.umsg("*Encrypting and Decrypting the message are done in section 1.1.4");
    av.recorded();

});
