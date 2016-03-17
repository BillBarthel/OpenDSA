.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-13 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata:: 
   :author: Cheenou Thao

=======================================
Illustrating How RSA Algorithm Works 
=======================================

What is RSA
-----------
RSA is one of the first practical public-key cryptosystems and is widely used for secure data transmission. In such a cryptosystem, 
the encryption key is public and differs from the decryption key which is kept secret. In RSA, this asymmetry is based on the practical 
difficulty of factoring the product of two prime numbers, the factoring problem. 

Basics of RSA Algorithm
-----------------------

The following slideshow demonstrates the generation of the initial variables needed for the RSA algorithm to function.

.. inlineav:: rsaproj1 ss
   :output: show
   
   
Extended Euclidean Algorithm
----------------------------

The following slideshow demonstrates the generation of our private key, 'd', by using the Extended Euclidean algorithm.

.. inlineav:: rsaproj ss
   :output: show
   
RSA Encrypting and Decrypting 
-----------------------------

The following slideshow demonstrates how to Encrypt (c(m)=m^e mod n) a message of a given value and Decrypt (z(c)=c^d mod n) an
Encrypted message

.. inlineav:: rsaproj3 ss
   :output: show

RSA Algorithm in Action
-----------------------

Here we have a visualization of the RSA Algorithm Encrypting a message. But
unlike the previous slide, you get to choose values for p, q, m and e. Due to some restrictions,
m is maxed out to 21 and e is maxed out at 12. When entering values for p and q, make sure they are 
different prime numbers and leave a space in between them. Other restrictions are given below.

.. avembed:: AV/Development/rsaproj2.html ss


RSA Encrypting Exercise 1
-----------------------

In this exercise, you are given two variables needed to solve the equation.

.. avembed:: Exercises/Development/Rsa-ex1.html ka


.. odascript:: AV/Development/Rsa-ex1.js


RSA Encrypting Exercise 2
-----------------------

In this exercise, you are given the three variables needed to compute
the Encrypt Key. After computing the answer, select one of the given values.

.. avembed:: Exercises/Development/Rsaproj_ex3.html ka


.. odsascript:: AV/Development/rsaproj1.js
.. odsascript:: AV/Development/rsaproj.js
.. odsascript:: AV/Development/rsaproj3.js





