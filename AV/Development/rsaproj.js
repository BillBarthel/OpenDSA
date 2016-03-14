"use strict";

/* global LAMBDA */

$(document).ready(function () {


    JSAV.init();

    var av = new JSAV("rsaproj");
    var arr = av.ds.matrix([["7", "8", " "], ["e", "ϕ(n)", "d"]]);
    var arr2 = av.ds.matrix([[" ", " ", " "], ["x", "a", "m"]]);
    av.umsg("Given from the first slide that e=7 and ϕ(n)=8, we use the modular multiplicative inverse of e(mod ϕ(n)) to compute for d.", {preserve: false});
    // Note: av.displayInit() will not affect the number of slides.
    // All that it will do is affect what you get to see on the
    // initial slide.
    av.displayInit();
    // We are now starting a new slide (#2)
    av.umsg("The modular multiplicative inverse equation is: 'x ≡ a^-1 (mod m)'. So to solve for 'd' we would use: 'd ≡ e^-1 (mod ϕ(n))'");
    arr2.value(0, 0, "");
    arr2.value(0, 1, "7^-1");
    arr2.value(0, 2, "8");
    arr2.highlight(0,0);
    arr2.highlight(0,1);
    arr2.highlight(0,2);
    av.step();
    
    av.umsg("To find the solution for the modular multiplicative inverse, we multiply both 'x' and 'a' by 'a' such that we get the solution form of: 'ax ≡ 1 (mod m)'");
    arr2.unhighlight(0,0);
    arr2.unhighlight(0,1);
    arr2.unhighlight(0,2);
    av.step();
    
    av.umsg("Now that we have that we are in the form of 'ax ≡ 1 (mod m)', we just compute for x, such that a*x is one greater than a multiple of m. (7*x = 8n+1) => (7*(7) = 8*(6)+1) => 49 = 48+1");
    arr2.unhighlight(0,0);
    arr2.unhighlight(0,1);
    arr2.unhighlight(0,2);
    arr2.value(0, 0, "7");
    arr.value(0, 2, "7");
    arr2.highlight(0,0);
    arr.highlight(0,2);
    av.step();
    // We are now starting a new slide (#3)
    av.umsg("Computed for 'd': d = 7");
    arr2.unhighlight(0,0);
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
