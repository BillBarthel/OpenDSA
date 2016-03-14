"use strict";

$(document).ready(function () {


    JSAV.init();

    var av = new JSAV("rsaproj4");
    var arr = av.ds.matrix([[" ", " ", " "], ["A", "B", "M"]]);
    av.umsg("Here is an example of modular arithmatic works", {preserve: false});
    // Note: av.displayInit() will not affect the number of slides.
    // All that it will do is affect what you get to see on the
    // initial slide.
    av.displayInit();
    // We are now starting a new slide (#2)
    av.umsg("Given an 'A' and 'B' value, we can mod(A, B) and get a value of 'M'. (ex. A=3, B=4)");
    arr.value(0, 0, "3");
    arr.value(0, 1, "4");
    arr.highlight(0,0);
    arr.highlight(0,1);
    av.step();
    
    av.umsg("Modular arithmatic can be written as, 'A' mod 'B' = 'M' or 'A' ≡ 'M' (mod 'B')");
    arr.unhighlight(0,0);
    arr.unhighlight(0,1);
    av.step();
    
    
    av.umsg("To compute 'M', use long division on 'A' and 'B' and just take the remainder as 'M'. (ex. 3/4 = 0 remainder 3, 'M' = 3)");
    arr.highlight(0,2);
    arr.value(0, 2, "3");
    av.step();
    arr.unhighlight(0,2);
    av.recorded();
    // If you add av.umsg after av.recorded, it will add new slides in
    // ways that you probably do not expect and probably cannot
    // control in the way that you want. As av.recorded() rewinds the
    // slideshow, the new slides would go to the beginning of the slideshow.
    // So, unless you are trying to add slides on-the-fly
    // interactively, you don't want to do this.
    // av.umsg("Text after av.recorded()");

});
