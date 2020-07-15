// Create a function which accepts one arbitrary string as an argument, 
//and return a string of length 26.
// The objective is to set each of the 26 characters of the output string 
//to either '1' or '0' based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).
// So if an 'a' or an 'A' appears anywhere in the input string (any number of times), 
//set the first character of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, set the second character to '1', and so on for the rest of the alphabet.
// For instance:
// "a   **&  cZ"  =>  "10100000000000000000000001"

function change(string){
    const string2 = string.toLowerCase();
    arrayEmpty = new Array(26).fill (0);
    arrayDiccionary = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const textInArray = (string2.split(""));
    for (let word of  textInArray){
          if (arrayDiccionary.includes (word)){
              //console.log (`${word} esta en el array en la posicion ${arrayDiccionary.indexOf(word)}`);
              arrayEmpty[arrayDiccionary.indexOf(word)] = 1;
          }
     
      }
  
      const finalResult = arrayEmpty.join('');
      return finalResult;
  }

  console.log (change("a   **&  cZ"));
  console.log (change("spiderman? peter"))
  console.log (change("66hw%&  -alone"))
