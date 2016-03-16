"use strict";

$(document).ready(function () {

JSAV.init();

	var jsav = new JSAV("MLES"),
      code = jsav.code(["tmp = a", "a = b", "b = tmp"]);
  jsav.displayInit();
  code.setCurrentLine(1);
  jsav.step();
  code.setCurrentLine(2);
  jsav.step();
  code.setCurrentLine(3);
  jsav.step();
  code.setCurrentLine(0);
  jsav.recorded();
	
});