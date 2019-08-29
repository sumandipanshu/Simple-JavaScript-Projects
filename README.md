# Simple-JavaScript-Projects
## Implementation of JavaScript Basics

This repository contains some of my Beginner-level projects in JavaScript.

### 1.Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Program includes a function which takes a ROT13 encoded string as input(
All letters will be uppercase) and returns a decoded string.

<b>Note:</b> It does not transforms any non-alphabetic character (i.e. spaces, punctuation), but passes them on.

### 2.Cash Register
Program includes a function that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The function always returns an object with a status key and a change key.

It Returns: <ul>
  <li>{status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.</li>
  <li>{status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.</li>
  <li>{status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.</li>
  </ul>
  
  ### 3.Palindrome Checker
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

It Returns true if the given string is a palindrome. Otherwise, return false.

### 4.Roman NUmeral Converter
Program converts the given number into a roman numeral.

<b>Note:</b> Input number should be in the range 1-3999.

### 5.Telephone Number Validator
Program returns true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of some valid formats for US numbers:

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555
