.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-13 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata:: 
   :author: Cheenou Thao

=======================================
Illustrating How RSA Cryptosystem Works 
=======================================

What is RSA Cryptosystem?
-------------------------
RSA is one of the first practical public-key cryptosystems and is widely used for secure data transmission. In such a cryptosystem, 
the encryption key is public and differs from the decryption key which is kept secret. In RSA, this asymmetry is based on the practical 
difficulty of factoring the product of two large prime numbers, the factoring problem. RSA is made of the initial letters of the surnames 
of Ron Rivest, Adi Shamir, and Leonard Adleman, who first publicly described the algorithm in 1977. Clifford Cocks, an English mathematician 
working for the UK intelligence agency GCHQ, had developed an equivalent system in 1973, but it was not declassified until 1997.

RSA Cryptosystem Algorithm
--------------------------

The following slideshow demonstrates how the RSA Criptosystem algorithm works.

.. inlineav:: rsaproj1 ss
   :output: show
   
Modular Arithmetic
------------------

The following slideshow demonstrates how module arithmetic works. (A mod B = M)

.. inlineav:: rsaproj4 ss
   :output: show
   
Modular Multiplicative Inverse
------------------------------

The following slideshow demonstrates the computations for 'd' using Modular Multiplicative Inverse (x ≡ a^-1 (mod m))

.. inlineav:: rsaproj ss
   :output: show
   
RSA Encrypting and Decrypting 
-----------------------------

The following slideshow demonstrates how to Encrypt (c(m)=m^e mod n) a message of a given value and Decrypt (z(c)=c^d mod n) an
Encrypted message

.. inlineav:: rsaproj3 ss
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

RSA Encrypting Exercise
-----------------------

In this exercise, you are give the three variables needed to compute
the Encrypt Key. After computing the answer, select one of the given values.

.. avembed:: Exercises/Development/Rsaproj_ex3.html ka


.. odsascript:: AV/Development/rsaproj1.js
.. odsascript:: AV/Development/rsaproj4.js
.. odsascript:: AV/Development/rsaproj.js
.. odsascript:: AV/Development/rsaproj3.js