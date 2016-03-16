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
    var arr = av.ds.matrix([["15", "7", "11", "7", " ", " "], ["n", "e", "m", "d", "c(m)", "z(c)"]]);

    av.umsg("Using values from slides 1.1.2, we will compute the Encrypt key and Decrypt an Encrypted key");
    av.displayInit();
    av.umsg("To encrypt a message, we use the equation 'c(m)=m^e mod n'");
    av.step();
    
    av.umsg("So the first thing to compute is m^e:");
    av.step();
    
    av.umsg(" 11^7", {preserve:true});
    arr.highlight(0,1);
    arr.highlight(0,2);
    av.step();
    
    av.umsg(" = 19487171", {preserve:true});
    arr.unhighlight(0,1);
    arr.unhighlight(0,2);
    av.step();
    
    av.umsg("Now that we got m^e, we mod n to get c:");
    av.step();
    
    av.umsg(" 19487171 mod(15)", {preserve:true});
    av.step();
    
    av.umsg(" = 11", {preserve:true});
    arr.highlight(0,4);
    arr.value(0, 4, "11");
    av.step();
 
    av.umsg("To decrypt a message given a 'c' value, we use the equation 'z(c)=c^d mod n', which should theoretically be equal to 'm'");
    arr.unhighlight(0,4);
    av.step();
    
    av.umsg("So the first thing to compute is c^d:");
    av.step();
    
    av.umsg(" 11^7", {preserve:true});
    arr.highlight(0,3);
    arr.highlight(0,4);
    av.step();
    
    av.umsg(" = 19487171", {preserve:true});
    arr.unhighlight(0,3);
    arr.unhighlight(0,4);
    av.step();
    
    av.umsg("Now that we got c^d, we mod n to get m:");
    av.step();
    
    av.umsg(" 19487171 mod(15)", {preserve:true});
    av.step();
    
    av.umsg(" = 11", {preserve:true});
    arr.highlight(0,5);
    arr.value(0, 5, "11");
    av.step();
    
    av.umsg("This is how Encrypting and Decrypting are done using the RSA algorithm");
    arr.unhighlight(0,5);
    av.recorded();

});
