// You will be given an array a and a value x. 
// All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

function check(a, x) 
{
  var y = (a.indexOf(x));
  if (y < 0)
     {return false;}
  else
    {return true;}
 }

   
console.log (check([66, 101], 66));   //return true
console.log (check(['what', 'a', 'great', 'kata'], 'kata')); //return true
console.log (check(['what', 'a', 'great', 'kata'], 'car')); //return false
