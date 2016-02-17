"use strict";

$(document).ready(function () {


    JSAV.init();

    var av = new JSAV("billslideshow");
    var theArray = [20, 30, 44, 54, 55, 11, 78, 14, 13, 79, 12, 98];
    var arr = av.ds.array(theArray, {indexed: true});
    av.umsg("Let's scramble this array!!");
    // Note: av.displayInit() will not affect the number of slides.
    // All that it will do is affect what you get to see on the
    // initial slide.
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

/*av.umsg("First swap " + i + " and " + rand);
    arr.swap(i,rand);
    i++;
    av.step();
    rand = Math.floor((Math.random() * 10) + 1);
    av.umsg("Next swap " + i + " and " + rand);
	 arr.swap(i,rand);
	 i++;
    av.step();
rand = Math.floor((Math.random() * 10) + 1);
    av.umsg("Next swap " + i + " and " + rand);
	 arr.swap(i,rand);
	 i++;
    av.step();
    rand = Math.floor((Math.random() * 10) + 1);
    av.umsg("Next swap " + i + " and " + rand);
	 arr.swap(i,rand);
	 i++;
    av.step();
    rand = Math.floor((Math.random() * 10) + 1);
    av.umsg("Next swap " + i + " and " + rand);
	 arr.swap(i,rand);
	 i++;
    av.step();
    rand = Math.floor((Math.random() * 10) + 1);
    av.umsg("Next swap " + i + " and " + rand);
	 arr.swap(i,rand);
	 i++;
    av.step();
    rand = Math.floor((Math.random() * 10) + 1);
    av.umsg("Next swap " + i + " and " + rand);
	 arr.swap(i,rand);
	 i++;
    av.step();
rand = Math.floor((Math.random() * 10) + 1);
    av.umsg("Next swap " + i + " and " + rand);
	 arr.swap(i,rand);
	 i++;
    av.step();
    rand = Math.floor((Math.random() * 10) + 1);
    av.umsg("Next swap " + i + " and " + rand);
	 arr.swap(i,rand);
	 i++;
    av.step();
    rand = Math.floor((Math.random() * 10) + 1);
    av.umsg("Next swap " + i + " and " + rand);
	 arr.swap(i,rand);
	 i++;
    av.step();
    rand = Math.floor((Math.random() * 10) + 1);
    av.umsg("Next swap " + i + " and " + rand);
	 arr.swap(i,rand);
	 i++;
    av.step();
rand = Math.floor((Math.random() * 10) + 1);
    av.umsg("Finally swap " + i + " and " + rand);
	 arr.swap(i,rand);
	 i++;
    av.step();
    av.recorded();*/
    av.umsg("done");
    av.recorded();
});
