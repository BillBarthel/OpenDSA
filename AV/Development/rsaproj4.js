"use strict";
/* 
 * In this js file, we explain how modular arithmetic works.
 * 
 * Author: Cheenou Thao
 * Date: 3/10/16
**/

$(document).ready(function () {

    JSAV.init();

    var av = new JSAV("rsaproj4");
    var arr = av.ds.matrix([[" ", " ", " "], ["A", "B", "M"]]);
    
    // First Slide
    av.umsg("Here is an example of modular arithmetic works", {preserve: false});
    av.displayInit();
    av.umsg("Given an 'A' and 'B' value, we can mod(A, B) and get a value of 'M'. (ex. A=3, B=4)");
    arr.value(0, 0, "3");
    arr.value(0, 1, "4");
    arr.highlight(0,0);
    arr.highlight(0,1);
    av.step();
    
    // Second Slide
    av.umsg("To compute 'M', use long division on 'A' and 'B' and take the remainder. (ex. 3/4 = 0 remainder 3, 'M' = 3)");
    arr.highlight(0,2);
    arr.unhighlight(0,0);
    arr.unhighlight(0,1);
    arr.value(0, 2, "3");
    av.step();
    
    // Third Slide
    av.umsg("In conclusion, modular arithmetic is basically taking the remainder of two ");
    arr.unhighlight(0,2);
    av.recorded();

});
