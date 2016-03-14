"use strict";

$(document).ready(function () {


     JSAV.init();

    var av = new JSAV("rsaproj3");
    var arr = av.ds.matrix([["15", "7", "11", "7", " ", " "], ["n", "e", "m", "d", "c", "z"]]);
    av.umsg("'n' and 'm' are given from the first slide, 'c' will be the encrypted value, and 'z' will be the decrypted value of 'c'", {preserve: false});
    // Note: av.displayInit() will not affect the number of slides.
    // All that it will do is affect what you get to see on the
    // initial slide.
    av.displayInit();
    // We are now starting a new slide (#2)
    av.umsg("To encrypt a message, we use the equation 'c(m)=m^e mod n'");
    arr.highlight(0,0);
    arr.highlight(0,1);
    arr.highlight(0,2);
    av.step();
    
    av.umsg("Compute c(m): c(m) = (11^7) mod 15 = 5");
    arr.unhighlight(0,0);
    arr.unhighlight(0,1);
    arr.unhighlight(0,2);
    arr.highlight(0,4);
    arr.value(0, 4, "5");
    av.step();
    
    av.umsg("To decrypt a message given a 'c' value, we use the equation 'z(c)=c^d mod n', which in return be equal to 'm'");
    arr.unhighlight(0,4);
    av.step();
    av.umsg("Compute z(c): z(c)=5^7 mod 15 = 11");
    arr.highlight(0,5);
    arr.value(0, 5, "11");
    av.step();
    av.umsg("These are examples of how Encrypting and Decrypting are done using the RSA algorithm");
    arr.unhighlight(0,5);
    av.recorded();
    // If you add av.umsg after av.recorded, it will add new slides in
    // ways that you probably do not expect and probably cannot
    // control in the way that you want. As av.recorded() rewinds the
    // slideshow, the new slides would go to the beginning of the slideshow.
    // So, unless you are trying to add slides on-the-fly
    // interactively, you don't want to do this.
    // av.umsg("Text after av.recorded()");

});
