.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-13 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata:: 
   :author: Cheenou Thao

=====================================================================
Illustrate slide shows and KA exercises in an OpenDSA learning module
=====================================================================

RSA Algorithm
-----------------------


The following slideshow demonstrates how the RSA algorithm works.

.. inlineav:: rsaproj1 ss
   :output: show
   
RSA Computing Broken Down
-----------------------


The following slideshow demonstrates a more indepth of how 
the algorithm is computing for "d".

.. inlineav:: rsaproj ss
   :output: show
   
RSA Encrypting Message
-----------------------


The following slideshow demonstrates how to encrypt a given message.

.. inlineav:: rsaproj3 ss
   :output: show
   
RSA Decrypting 
-----------------------


The following slideshow demonstrates how to depcrypt a given encryipted
message.

.. inlineav:: rsaproj4 ss
   :output: show

Swapping array elements with a reset button 
-------------------------------------------

Here we have the same visualization as in the previous inlineav, but
now as an embedded AV.  Although it is slightly more complicated this
way, it allows us to process input from the user on the embedded page.
Here the user can enter a space-separated list of numbers, or if they
choose to not do so, an OpenDSA utility randomly generates them for
the user.


.. avembed:: AV/Development/rsaproj2.html ss


A Khan Academy Exericse with JSAV object
----------------------------------------

This example shows how to embed a Khan Academy exercise that has the user identify the 
maximum by clicking on a JSAV array cell.

.. avembed:: Exercises/Development/Rsaproj_ex1.html ka

A Khan Academy Exericse with Fill-in-the-blank Question
-------------------------------------------------------

This example shows how to embed a Khan Academy exercise that has the user identify the 
maximum by typing the number into a text box.

.. avembed:: Exercises/Development/Rsaproj_ex2.html ka

A Khan Academy Exericse with Multiple Choice Question
-----------------------------------------------------

This example shows how to embed a Khan Academy exercise that has the user identify the 
maximum by picking it from a multiple-choice list.

.. avembed:: Exercises/Development/Rsaproj_ex3.html ka


.. odsascript:: AV/Development/rsaproj1.js
.. odsascript:: AV/Development/rsaproj.js
.. odsascript:: AV/Development/rsaproj3.js
.. odsascript:: AV/Development/rsaproj4.js