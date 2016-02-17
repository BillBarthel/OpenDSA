"use strict";

$(document).ready(function () {


    JSAV.init();

    var av = new JSAV("CheenouShuffle");
    var theArray = [20, 30, 44, 54, 55, 11, 78, 14, 13, 79, 12, 98];
    theArray.sort();
    var arr = av.ds.array(theArray, {indexed: true});
    av.umsg("Sorted array");
    
    // Note: av.displayInit() will not affect the number of slides.
    // All that it will do is affect what you get to see on the
    // initial slide.
    av.displayInit();
    // We are now starting a new slide (#2)
    av.umsg("Swap highlighted index with a random index within the array (No swaps means it swapped with itself)", {preserve: false});
    //arr.swap(1,2);
    arr.highlight(0);
    av.step();
    
    
    for(var i = 0; i < theArray.length; i++)
    {
        
        arr.highlight(i+1);
        var rand = Math.floor(Math.random() * (11-0 +1)) + 0; 
        arr.swap(i,rand);
        arr.unhighlight(i);
        av.step();
    }
    // We are now starting a new slide (#3)
    av.umsg("Array has been randomly shuffled");
    av.recorded();
    // If you add av.umsg after av.recorded, it will add new slides in
    // ways that you probably do not expect and probably cannot
    // control in the way that you want. As av.recorded() rewinds the
    // slideshow, the new slides would go to the beginning of the slideshow.
    // So, unless you are trying to add slides on-the-fly
    // interactively, you don't want to do this.
    // av.umsg("Text after av.recorded()");

});
