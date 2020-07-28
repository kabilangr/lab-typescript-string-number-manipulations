"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(0));
        console.log("Hello " + word);
        console.log(word.slice());
        console.log(word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        var s = "";
        for (var i = 0; i < sentence.length; i++) {
            s = sentence.charAt(i) + "  ";
        }
        console.log(s);
    };
    StringManipulations.prototype.findVowel = function (str) {
        var ch = "";
        var k = 0;
        for (var i = 0; i < str.length; i++) {
            ch = str.charAt(i);
            if (ch == "a" ||
                ch == "e" ||
                ch == "i" ||
                ch == "o" ||
                ch == "u" ||
                ch == "A" ||
                ch == "E" ||
                ch == "I" ||
                ch == "O" ||
                ch == "U")
                k = k + 1;
        }
        console.log(k);
    };
    return StringManipulations;
}());
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        var k = 0;
        for (var i = 1; i < num / 2; i++) {
            if (num % i == 0)
                k = k + 1;
        }
        if (k >= 2) {
            console.log("Not Prime");
        }
        else
            console.log("Prime");
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        if (num % 9 == 1)
            console.log("Magic number");
        else
            console.log("Not Magic number");
    };
    return NumbersManipulations;
}());
var stringman = new StringManipulations();
stringman.print("Prograd");
stringman.printWithSpace("ProGrads");
stringman.findVowel("CoolWORDS");
var numbertypes = new NumbersManipulations();
numbertypes.findPrime(23);
numbertypes.findMagic(199);
