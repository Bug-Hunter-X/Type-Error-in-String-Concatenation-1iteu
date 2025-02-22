# Type Error in String Concatenation in TypeScript

This example demonstrates a common type error in TypeScript when concatenating strings. The function `combineStrings` is defined to accept two string arguments, but the code attempts to call it with a number and a string. This results in a type error.

## Bug

The provided code has a type error because it tries to concatenate a number with a string.

## Solution

The solution involves explicitly converting the number to a string before concatenation, or ensuring that the function is defined to accept number type as well.