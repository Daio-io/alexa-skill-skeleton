# tooly.js

[![Build Status](https://travis-ci.org/Daio-io/tooly.svg)](https://travis-ci.org/Daio-io/tooly)

A micro utility library for Javascript


## API

```
existy(value);
```

Checks the existence of any value given. Under the hood it checks if the value is null or undefined and returns a bool.
 If the value passed in is a ```string``` it checks for empty strings and string representations of null and undefined.


```
defaulty(value, default);
```      
Does the same checks as ```existy(value);``` but if the value does not existy it will return your desired default.


```
cleansey(string);
```     
Removes any characters which you would not expect to be included in an English word.


```
removey(remove, string);
```     
Removes any desired string or character from a string


```
clippy(string, clipLength);
```
Clips the end of a string to the desired clip length


```
inty(stringInteger);
```
Safely converts any string value number to an integer value of that string.


```
floaty(stringFloat);
```
Safely converts any string value number to a float value of that string.
