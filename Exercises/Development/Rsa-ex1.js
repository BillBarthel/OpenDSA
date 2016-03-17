/*global window */
(function() {
  "use strict";
    var my_array;

    var rsa-ex1 = {

    // Initialise the exercise
      initArr: function() {
	      var i;
	      var next_val;
	      var array_str;
	      my_array = ["2", "3", "5", "7", "11", "13", "15", "17", "19", "23", "29", "31", "37", "41", "43", "47", "53", "59", "61", "67", "71", "73", "79", "83", "89", "97"];
	      return my_array;
      },

      pickP: function(array) {
		  var i;
		  i = (Math.random() * (24 + 1));
		  var p = array[i];
	      return p;
	  },

	  pickQ: function(array, p) {
		  var keepChecking = true;

		  while(keepChecking)
		  {
			  var i = (Math.random() * (25))
			  var q = array[i];

			  if(q != p)
			  {
				  return q;
			  }
		  }
	  },

      findN: function(p, q) {
		  var n = p * q;

		  return n;
	  }
  };


  window.rsa-ex1 = window.rsa-ex1 || rsa-ex1;
}());
