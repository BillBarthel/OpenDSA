"use strict";

$(document).ready(function () {


    JSAV.init();

    var av = new JSAV("billslideshow");
    var theArray = [20, 30, 44, 54, 55, 11, 78, 14, 13, 79, 12, 98];
    var arr = av.ds.array(theArray, {indexed: true});
    av.umsg("Let's scramble this array!!");
    
    av.displayInit();
    av.step();
    
    for(var i = 0; i < theArray.length; i++)
    {
    	 var rand = Math.floor((Math.random() * 10) + 1);
    	 if(i === 0)
		 {
		    av.umsg("First swap slot " + i + " and " + rand);
		 }
		 else if(i === theArray.length)
		 {
		    av.umsg("Finally swap slot " + i + " and " + rand);		 
		 }
		 else 
		 {
		 	av.umsg("Next swap slot " + i + " and " + rand);
		 }
       
       arr.swap(i,rand);
       av.step();
    }

    av.recorded();
});
