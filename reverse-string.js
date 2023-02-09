function reverseString(text) {
  for (let i = 0; i < text.length; i++) {
    const element = text[i];
    console.log(element);
  }
}

const myString= "i am the eminence in shadow";
const reversed= reverseString(myString);
// console.log(reversed)


// reverse er khetre

function reverseString0(text){
    let reversed0= '';
    for (let i = text.length- 1; i >= 0; i--){
      const element0 = text[i];
      reversed0= reversed0+ element0;
      console.log(element0, reversed0);
    }
    return reversed0;
  }
  
  const myString0= "i am the Eminence In Shadow";
  const reversed0= reverseString0(myString0);
  console.log("reversed string", reversed0);