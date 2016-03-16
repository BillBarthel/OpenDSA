"use strict";
/* 
 * In this js file, we explain on how the Extended Euclidean algorithm was used to get 'd'
 * 
 * Author: Cheenou Thao
 * Date: 3/10/16
**/


$(document).ready(function () {

    JSAV.init();

    var av = new JSAV("rsaproj");
    var arr = av.ds.matrix([["7", "8", " "], ["e", "ϕ(n)", "d"]]);
    var arr2 = av.ds.matrix([[" ", " ", " "], ["a", "m", "x"]]);
    av.umsg("For the RSA Algorithm, the Extended Euclidean algorithm is used to find the modular multiplicative inverse of e(mod ϕ(n)).");
    
    av.displayInit();
    av.umsg("We use 'e'=7 and 'ϕ(n)'=8 from slides 1.1.2 to show how the modular multiplicative inverse of e(mod ϕ(n)) is used to compute for d.");
    av.label("Variables used from 1.1.2 slides", {before: arr});
    av.label("Variables of the modular multiplicative inverse equation", {before: arr2});
    av.step();
    
    av.umsg("The modular multiplicative inverse equation is: x ≡ a^-1 (mod m).");
    av.step();
    
    av.umsg("So to solve for 'd' we would replace 'a' with 'e', 'x' with 'd' and 'm' with 'ϕ(n)':");
    av.step();
    
    av.umsg(" x ≡ a^-1 (mod m) -> d ≡ e^-1 (mod ϕ(n))", {preserve: true});
    arr2.value(0, 0, "e");
    arr2.value(0, 1, "ϕ(n)");
    arr2.value(0, 2, "d");
    arr2.highlight(0,0);
    arr2.highlight(0,1);
    arr2.highlight(0,2);
    av.step();
    
    av.umsg("To find the solution for d ≡ e^-1 (mod ϕ(n)), we multiply both 'd' and 'e^-1' by 'e' such that we get the solution form of: e*d ≡ 1 (mod m)");
    arr2.unhighlight(0,0);
    arr2.unhighlight(0,1);
    arr2.unhighlight(0,2);
    av.step();
    
    av.umsg("Now that we have that we are in the form of e*d ≡ 1 (mod ϕ(n)), we just compute for d, such that e*d is one greater than a multiple of m:");
    av.step();
    
    av.umsg(" (7*d = 8n+1)", {preserve: true});
    av.step();
    
    av.umsg(" => 7*(7) = 8*(6)+1)", {preserve: true});
    av.step();
    
    av.umsg(" => 49 = 48+1", {preserve: true});
    av.step();
    
    av.umsg(": True, so d = 7.", {preserve: true});
    av.step();

    av.umsg("", {preserve: true});
    arr.highlight(0,2);
    arr.value(0,2,7);
    av.step();
    
    av.umsg("", {preserve: true});
    arr.unhighlight(0,2);
    av.recorded();
});
