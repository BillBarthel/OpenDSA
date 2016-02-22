"use strict";

/* global LAMBDA */

$(document).ready(function () {


    JSAV.init();

    var av = new JSAV("RSA2_1");
    var theArray = ["p", "q", "n", "pn", "e", "m"];
    var arr = av.ds.array(theArray, {indexed: true});
    av.umsg("Here is a visual of the variables neeeded");
    // Note: av.displayInit() will not affect the number of slides.
    // All that it will do is affect what you get to see on the
    // initial slide.
    av.displayInit();
    // We are now starting a new slide (#2)
    av.umsg("... and text after displayInit()", {preserve: true});
    av.step();
    // We are now starting a new slide (#3)
    av.umsg("Text after av.step()");
    av.recorded();
    // If you add av.umsg after av.recorded, it will add new slides in
    // ways that you probably do not expect and probably cannot
    // control in the way that you want. As av.recorded() rewinds the
    // slideshow, the new slides would go to the beginning of the slideshow.
    // So, unless you are trying to add slides on-the-fly
    // interactively, you don't want to do this.
    // av.umsg("Text after av.recorded()");

});
