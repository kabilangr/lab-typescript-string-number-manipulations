import { StringManipulationService } from "./main-service";
import { NumberManipulationService } from "./main-service";
class StringManipulations implements StringManipulationService {
  print(word: string): void {
    console.log(word);
    console.log(word.toUpperCase());
    console.log(word.toLowerCase());
    console.log(word.charAt(0));
    console.log("Hello " + word);
    console.log(word.slice());
    console.log(word.length);
  }
  printWithSpace(sentence: string): void {
    var s: string = "";
    for (var i = 0; i < sentence.length; i++) {
      s = sentence.charAt(i) + "  ";
    }
    console.log(s);
  }
  findVowel(str: string): void {
    var ch = "";
    var k: number = 0;
    for (var i = 0; i < str.length; i++) {
      ch = str.charAt(i);
      if (
        ch == "a" ||
        ch == "e" ||
        ch == "i" ||
        ch == "o" ||
        ch == "u" ||
        ch == "A" ||
        ch == "E" ||
        ch == "I" ||
        ch == "O" ||
        ch == "U"
      )
        k = k + 1;
    }
    console.log(k);
  }
}
class NumbersManipulations implements NumberManipulationService {
  findPrime(num: number): void {
    var k = 0;
    for (var i = 1; i < num / 2; i++) {
      if (num % i == 0) k = k + 1;
    }
    if (k >= 2) {
      console.log("Not Prime");
    } else console.log("Prime");
  }
  findMagic(num: number): void {
    if (num % 9 == 1) console.log("Magic number");
    else console.log("Not Magic number");
  }
}
let stringman = new StringManipulations();
stringman.print("Prograd");
stringman.printWithSpace("ProGrads");
stringman.findVowel("CoolWORDS");
let numbertypes = new NumbersManipulations();
numbertypes.findPrime(23);
numbertypes.findMagic(199);
