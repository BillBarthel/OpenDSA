/*global window */
(function() {
  "use strict";
    var my_array;

    var rsa-ex1 = {

    // Initialise the exercise
      initArr: function(arr_size) {
	  var i;
	  var next_val;
	  var array_str;
	  my_array = ["2", "3", "5", "7", "11", "13", "15", "17", "19", "23", "29", "31", "37", "41", "43", "47", "53", "59", "61", "67", "71", "73", "79", "83", "89", "97"];
	  }
	  array_str = "";
	  for (i = 0; i < arr_size; i++) {
	      array_str = array_str + " " + my_array[i];
	  }
	  console.log(array_str);
	  return array_str;
      },

      pickP: function() {
		  var i;
		  i = (Math.random() * (24 + 1));
		  var p = my_array[i];
	      return p;
	  },

	  pickQ: function(p) {
		  var keepChecking = true;

		  while(keepChecking)
		  {
			  var i = (Math.random() * (25))
			  var q = my_array[i];

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
