"use strict";
/**
 * In this file contains a slideshow explaining how to compute the Encrypt key and how to 
 * Decrypt an Encrypt key.
 * 
 * Author: Cheenou Thao
 */
$(document).ready(function () {

    JSAV.init();

    var av = new JSAV("rsaproj3");
    var arr = av.ds.matrix([["15", "7", "8", "7", " "], ["n", "e", "m", "d", "c"]]);

    av.umsg("We have been talking a lot about public keys and private keys in the last few slide shows, but what does it all mean?");
    av.step();
    
    av.displayInit();
    av.umsg("Let's say you have some confidential information that you want to send your friend, Joe.  Joe has conveniently generated the same public variables as seen in slideshow 1.1.2.");
    av.step();

    av.umsg("You take the data you want to send securely and attach Joe's public key, 'm', to that data.");
    arr.highlight(0,2);
    av.step();

    av.umsg("To encrypt your data, we send it through the equation 'm^e mod n = c', where 'c' is the encrypted version of your original data, 'm'.");
    arr.unhighlight(0,2);
    av.step();
    
    av.umsg("So the first thing to compute is m^e:");
    av.step();
    
    av.umsg(" 8^7", {preserve:true});
    arr.highlight(0,1);
    arr.highlight(0,2);
    av.step();
    
    av.umsg(" = 2097152", {preserve:true});
    arr.unhighlight(0,1);
    arr.unhighlight(0,2);
    av.step();
    
    av.umsg("Now that we got m^e, we mod that answer by n to get c:");
    arr.highlight(0,0);
    av.step();
    
    av.umsg(" 2097152 mod 15", {preserve:true});
    arr.unhighlight(0,0);
    av.step();
    
    av.umsg(" = 2", {preserve:true});
    arr.highlight(0,4);
    arr.value(0, 4, "2");
    av.step();

    av.umsg("There you have it!  The data you wanted to send is no longer recognizable.  The decrypted value of the data was 8, but after being encrypted it's representation is 2.  But now that it's encrypted, how will Joe be able to get the original data?");
    av.step();

    av.umsg("Luckily for Joe, when he generated all of the necessary RSA variables, he kept his 'd' value locked away privately on his computer where nobody else could access it.");
    arr.unhighlight(0,4);
    av.step();
 
    av.umsg("To decrypt a message given a 'c' value, we use the equation 'c^d mod n = m', where the encrypted data will return to normal!");
    av.step();
    
    av.umsg("So the first thing to compute is c^d:");
    av.step();
    
    av.umsg(" 2^7", {preserve:true});
    arr.highlight(0,3);
    arr.highlight(0,4);
    av.step();
    
    av.umsg(" = 128", {preserve:true});
    arr.unhighlight(0,3);
    arr.unhighlight(0,4);
    av.step();
    
    av.umsg("Now that we got c^d, we mod that answer by n to get m:");
    av.step();
    
    av.umsg(" 128 mod 15", {preserve:true});
    av.step();
    
    av.umsg(" = 8", {preserve:true});
    arr.highlight(0,2);
    av.step();
    
    av.umsg("Joe has successfully decrypted your data and the algorithm is complete!");
    arr.unhighlight(0,2);
    av.step();

    av.umsg("This may not seem overly complex with the variables we used, but in the real world much larger variable values are used when the RSA algorithm is used for security.  Without knowledge of the proper variables to use, it would take decades to brute force your way into deciphering a private key.");

    av.recorded();

});
