"use strict";

$(document).ready(function () {


     JSAV.init();

    var av = new JSAV("rsaproj3");
    var arr = av.ds.matrix([["15", "7", "11", "7", " ", " "], ["n", "e", "m", "d", "c", "z"]]);
    
    // First Slide
    av.umsg("'n' and 'm' are given from slides 1.1.2, 'c' will be the encrypted value, and 'z' will be the decrypted value of 'c'", {preserve: false});
    av.displayInit();
    av.umsg("To encrypt a message, we use the equation 'c(m)=m^e mod n'");
    arr.highlight(0,0);
    arr.highlight(0,1);
    arr.highlight(0,2);
    av.step();
    
    // Second Slide
    av.umsg("Compute c(m): c(m) = (11^7) mod 15 = 5");
    arr.unhighlight(0,0);
    arr.unhighlight(0,1);
    arr.unhighlight(0,2);
    arr.highlight(0,4);
    arr.value(0, 4, "5");
    av.label("c=Encrypt Key", {before: arr});
    av.step();
    
    // Third Slide
    av.umsg("To decrypt a message given a 'c' value, we use the equation 'z(c)=c^d mod n', which in return be equal to 'm'");
    arr.unhighlight(0,4);
    av.step();
    
    // Fourth Slide
    av.label("z=Decrypt Key", {before: arr});
    av.umsg("Compute z(c): z(c)=5^7 mod 15 = 11");
    arr.highlight(0,5);
    arr.value(0, 5, "11");
    av.step();
    
    // Fifth Slide
    av.umsg("These are examples of how Encrypting and Decrypting are done using the RSA algorithm");
    arr.unhighlight(0,5);
    av.recorded();

});
