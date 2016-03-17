"use strict";
/* 
 * In this js file, we explain on how the Extended Euclidean algorithm was used to get 'd'
 * During the subtraction step in the Extended Euclid algorithm, if you get a negative result in a step, you must
 * take the negative subtraction result mod ϕ(n) to get a positive number.  Replace the negative value with the
 * result from the previous step and continue on as normal.
 * 
 * Author: Bill Barthel
 * Date: 3/16/16
**/

$(document).ready(function () {

    JSAV.init();

    var av = new JSAV("rsaproj");
    var arr = av.ds.matrix([["7", "8", " "], ["e", "ϕ(n)", "d"]]);
    var arr2 = av.ds.matrix([[" ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " "]]);
    av.step();
    av.umsg("To generate our private key, we will want to use the the inverse of 'e' mod ϕ(n).  Also known as the modular multiplicative inverse of 'e' and ϕ(n). To do this, we will be using the Extended Euclidean algorithm");
    
    av.displayInit();
    av.umsg("We will use 'e'=7 and 'ϕ(n)'=8 from slides 1.1.2 to show how the Extended Euclidean algorithm computes for d.");
    av.label("Variables used from 1.1.2 slides", {before: arr});
    av.label("Here is a 7x3 matrix that will help us walk through the steps of the Extended Euclidean algorithm.  Imagine this as two seperate 3x3 columns.", {before: arr2});
    av.step();
    
    
    
    av.umsg("In column 2, row 1, insert ϕ(n).  And in column 2, row 2, insert 'e'.");
    arr2.value(0, 1, "8");
    arr2.value(1, 1, "7");
    arr2.highlight(0,1);
    arr2.highlight(1,1);
    av.step();
    
    av.umsg("In column 5, row 1, insert ϕ(n).  And in column 5, row 2, insert the number '1'.");
    arr2.unhighlight(0,1);
    arr2.unhighlight(1,1);
    arr2.value(0, 5, "8");
    arr2.value(1, 5, "1");
    arr2.highlight(0,5);
    arr2.highlight(1,5);
    av.step();
    
    av.umsg("In column 2, we will divide the top number by the middle number.  So 8/7=1.");
    arr2.unhighlight(0,5);
    arr2.unhighlight(1,5);
    arr2.value(2, 1, "1");
    arr2.highlight(2,1);
    av.step();

    av.umsg("Then, multiply that result with the middle value of each column.");
    arr2.unhighlight(2,1);
    arr2.value(1, 0, "1");
    arr2.value(1, 1, "*");
    arr2.value(1, 2, "7");
    arr2.value(2, 1, " ");
    arr2.value(1, 4, "1");
    arr2.value(1, 5, "*");
    arr2.value(1, 6, "1");
    arr2.highlight(1,0);
    arr2.highlight(1,1);
    arr2.highlight(1,2);
    arr2.highlight(1,4);
    arr2.highlight(1,5);
    arr2.highlight(1,6);
    av.step();

    av.umsg("This results in 7 on the left and 1 on the right.  Place these numbers at the bottom of their respective columns.");
    arr2.unhighlight(1,0);
    arr2.unhighlight(1,1);
    arr2.unhighlight(1,2);
    arr2.unhighlight(1,4);
    arr2.unhighlight(1,5);
    arr2.unhighlight(1,6);
    arr2.value(1, 0, " ");
    arr2.value(1, 1, "7");
    arr2.value(1, 2, " ");
    arr2.value(2, 1, " ");
    arr2.value(1, 4, " ");
    arr2.value(1, 5, "1");
    arr2.value(1, 6, " ");
    arr2.value(2, 1, "7");
    arr2.value(2, 5, "1");
    arr2.highlight(2,1);
    arr2.highlight(2,5);
    av.step();

    av.umsg("We then subtract those results from the top number in each column.");
    arr2.value(2, 0, "8");
    arr2.value(2, 1, "-");
    arr2.value(2, 2, "7");
    arr2.value(2, 4, "8");
    arr2.value(2, 5, "-");
    arr2.value(2, 6, "1");
    arr2.highlight(2,0);
    arr2.highlight(2,2);
    arr2.highlight(2,4);
    arr2.highlight(2,6);
    av.step();

    av.umsg("This results in 1 on the left and 7 on the right.  Place these number at the bottom of their respective columns");
    arr2.unhighlight(2,0);
    arr2.unhighlight(2,2);
    arr2.unhighlight(2,4);
    arr2.unhighlight(2,6);
    arr2.value(2, 0, " ");
    arr2.value(2, 1, "1");
    arr2.value(2, 2, " ");
    arr2.value(2, 4, " ");
    arr2.value(2, 5, "7");
    arr2.value(2, 6, " ");
    av.step();

    av.umsg("Seeing we have a 1 in the bottom row in the left column means we are done!");
    arr2.unhighlight(2,5);
    av.step();

    av.umsg("Our 'd' value is the in the bottom row in the right column.");
    arr2.unhighlight(2,1);
    arr2.highlight(2,5);
    arr.highlight(0,2);
    arr.value(0, 2, "7");
    av.step();

    av.umsg("To verify that we have found the correct 'd' value, the following equation will be true: 'e' * 'd' mod ϕ(n) = 1.");
    arr2.unhighlight(2,5);
    arr.unhighlight(0,2);
    av.step();

    av.umsg("Would you look at that!  7 * 7 mod 8 = 1!");
    av.step();

    av.umsg("Let's take a step back now to slide 10 where we got the bottom left column to equal 1 and look at some extra cases that can occur while applying the Extended Euclidean algorithm to other 'e' and ϕ(n) values.");
    av.step();

    av.umsg("Instead of 1, what would happen if we had 2 as the number in the last row of the left column?");
    arr2.value(2, 1, "2");
    arr2.highlight(2,1);
    av.step();

    av.umsg("In that case, simply delete the top row and shift everything else up a row.  At that point we restart the pattern as seen in slide 5 where we took the top of each column and divided it by the number underneath it.  This cycle continues until you get a 1 in the bottom left column.");
    arr2.unhighlight(2,1);
    arr2.highlight(0,1);
    arr2.highlight(0,5);
    av.step();

    arr2.value(0, 1, " ");
    arr2.value(0, 5, " ");
    av.step();

    arr2.value(0, 1, "7");
    arr2.value(0, 5, "1");
    arr2.value(1, 1, "2");
    arr2.value(1, 5, "7");
    arr2.value(2, 1, " ");
    arr2.value(2, 5, " ");
    arr2.highlight(1,1);
    arr2.highlight(1,5);
    av.step();

    av.umsg("Another possibility is that after the subtraction step, a variable in the bottom row may be negative.  Say the bottom right column resulted in the number -7.");
    arr2.unhighlight(0,1);
    arr2.unhighlight(1,1);
    arr2.unhighlight(0,5);
    arr2.unhighlight(1,5);
    arr2.value(0, 1, "8");
    arr2.value(0, 5, "8");
    arr2.value(1, 1, "7");
    arr2.value(1, 5, "1");
    arr2.value(2, 1, "2");
    arr2.value(2, 5, "-7");
    arr2.highlight(2,5);
    av.step();

    av.umsg("In that case, you take the negative value and mod it by ϕ(n).  With the resulting positive number, simply carry on to the next iteration of the equation if you haven't gotten a 1 at the bottom of the left column yet.");
    arr2.value(2, 4, "-7");
    arr2.value(2, 5, "mod");
    arr2.value(2, 6, "8");
    arr2.highlight(2,4);
    arr2.highlight(2,6);
    av.step();

    arr2.unhighlight(2,4);
    arr2.unhighlight(2,6);
    arr2.value(2, 4, " ");
    arr2.value(2, 5, "1");
    arr2.value(2, 6, " ");
    av.step();

    av.umsg("That's how you generate your private key!");
    arr2.unhighlight(2,5);

    av.recorded();
});
