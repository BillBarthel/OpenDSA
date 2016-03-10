"use strict";

$(document).ready(function () {


    JSAV.init();

    var av = new JSAV("rsaproj3");
    var arr = av.ds.matrix([[" ", " ", " ", " ", " ", " ", " "], ["p", "q", "n", "ϕ(n)", "e", "d", "m"]]);
    av.umsg("Here is a visual of the variables neeeded");
    // Note: av.displayInit() will not affect the number of slides.
    // All that it will do is affect what you get to see on the
    // initial slide.
    av.displayInit();
    // We are now starting a new slide (#2)
    av.umsg("Here we choose two prime numbers for p and q (p=61 and q=53)", {preserve: false});
    arr.value(0, 0, "61");
    arr.value(0, 1, "53");
    arr.highlight(0,0);
    arr.highlight(0,1);
    //av.label().text("p = 61, q = 53");
    av.step();
    // We are now starting a new slide (#3)
    arr.unhighlight(0,0);
    arr.unhighlight(0,1);
    arr.highlight(0,2);
    av.umsg("Now we compute for n. (n=pq)");
    arr.value(0, 2, "3233");
    av.step();
    // We are now starting a new slide (#3)
    arr.unhighlight(0,2);
    arr.highlight(0,3);
    av.umsg("Given n, we can now compute the totient of n.(ϕ(n)=(p-1)(q-1))");
    arr.value(0, 3, "3120");
    av.step();
    // We are now starting a new slide (#3)
    arr.unhighlight(0,3);
    arr.highlight(0,4);
    av.umsg("With the totient of the product, now we choose any number between 1 and 3120.(ex. e=17)");
    arr.value(0, 4, "17");
    av.step();
    // We are now starting a new slide (#3)
    arr.unhighlight(0,4);
    arr.highlight(0,5);
    av.umsg("Given e, we can now compute d.(e*d mod(ϕ(n)) = 1)");
    arr.value(0, 5, "2753");
    av.step();
    // We are now starting a new slide (#3)
    arr.unhighlight(0,5);
    arr.highlight(0,6);
    av.umsg("Now, if we are given a value for 'm', we can encrypt or decrypt it.(ex. 'm' = 65)");
    arr.value(0, 6, "65");
    av.step();
    av.umsg("Encrypt message: c(m)=m^e mod n = (65)^17 mod 3233 = 2790");
    av.step();
    av.umsg("Decrypt message: m=c^d mod n = (2790)^2753 mod 3233 = 65");
    av.recorded();
    // If you add av.umsg after av.recorded, it will add new slides in
    // ways that you probably do not expect and probably cannot
    // control in the way that you want. As av.recorded() rewinds the
    // slideshow, the new slides would go to the beginning of the slideshow.
    // So, unless you are trying to add slides on-the-fly
    // interactively, you don't want to do this.
    // av.umsg("Text after av.recorded()");

});
