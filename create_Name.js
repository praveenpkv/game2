const numberLetterString = "0123456789 @.abcdefghijklmnopqrstuvwxyz";

function readName() {
  return prompt('enter your name');
}

function delay(time) {
  for (let i = 0; i <= time * 100000000; i++) {}
}

function createString(name, index, string) { 
  if (index === name.length) {
    return;
  }

  for (let j = 0; j < numberLetterString.length; j++) {
    console.log(string + numberLetterString[j]);
   
    delay(0.5);
    console.clear();
  
    if (name[index] === numberLetterString[j]) {
      string += numberLetterString[j];
      break;
    }
  }

  createString(name, index + 1, string);
}

function createName() {
  const name = readName();
  let string = "";

  createString(name, 0, string);
}

createName();
