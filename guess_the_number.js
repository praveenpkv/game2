function getLoadingMessage() {
  return "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t LOADING GAME             ";
}

function delay(time) {
  let iterations = time * 100000000;
  while (iterations > 0) {
    iterations--;
  }
}

function replace(text, index, char) {
  let string = "";

  for (let i = 0; i < text.length; i++) {
    string += i === index ? char : text[i];
  }

  return string;
}

function showInstructions() {
  return "👉🏻INSTRUCTIONS:\n\n" + "➡ there is a computer generated number between "
    + "50 to 100." + "\n➡ your goal is to guess the number in 5 chances."
    + "\n➡ you will be provided with hints after every guess.\n";
}

function getTopAndBottomLine(message) {
  let topAndBottomLine = "";

  for (let i = 0; i <= message.length + 9; i++) {
    topAndBottomLine += "*";
  }

  return topAndBottomLine;
}

function getMiddleLine(message) {
  let middleLine = ""

  for (let i = 0; i <= 4; i++) {
    if (i === 0 || i === 4) {
      middleLine += '*';
    }

    if(i === 2) {
      middleLine += message;
    }

    middleLine += '  ';
  }

  return middleLine;
}

function getDesignedMessage(message) {
  let topAndBottomLine = getTopAndBottomLine(message);
  let middleLine = getMiddleLine(message);

  return topAndBottomLine + '\n' + middleLine + '\n' + topAndBottomLine;
}

function printWelcomeMsg(text) {
  return getDesignedMessage(text);
}

function goodByeMessage(playerName) {
  const message = "good bye 😊 " + playerName;
  
  return "\n" + getDesignedMessage(message) + "\n";
}

function printLoosingMessage(randomNumber) {
  const loosingMessage = "\nyou exhausted all of your chances\n"
    + "the number was: " + randomNumber;

  const finalMessage = "you lost, better luck next time";

  return loosingMessage + "\n\n" + getDesignedMessage(finalMessage);
}

function printWiningMessage() {
  const message = "congratulations you won";

  return "\n" + getDesignedMessage(message);
}

function printHint(guess, randomNumber) {
  if (guess < randomNumber) {
    return "\nyou guess a number smaller than actual number";
  }

  return "\nyou guess a number greater than actual number";
}

function showLoadingScreen(loaderSize) {
  let loader = getLoadingMessage();
  for (let i = 0; i <= 10; i++) {
    console.clear();
    loader = replace(loader, loaderSize + i, "❥");
    console.log(loader);
    delay(3);
  }
}

function randomNumberGenerator(from, to) {
  return Math.ceil(Math.random() * (to - from) + from);
}

function wantToplayAgain() {
  const wantToplay = confirm('\ndo you want to play Again:');

  if (wantToplay) {
    console.clear();
    executeGame();
  }
}

function printBreakLine(line) {
  for (let i = 0; i < 100; i++) {
    line += '-'  
  }

  return line;
}   

function game(randomNumber, chances) {
  if (chances === 0) {
    console.log(printLoosingMessage(randomNumber), "\n");
    console.log(printBreakLine(""));
    return;
  }

  console.log("\nyou have", chances, "chances left");
  const guess = +prompt("enter your guess.....");
  
  if (guess === randomNumber) {
    console.log(printWiningMessage(), "\n");
    console.log(printBreakLine(""));
    return;
  }

  console.log(printHint(guess, randomNumber));

  game(randomNumber, chances - 1);
}

function executeGame() {
  const randomNumber = randomNumberGenerator(50, 100);
  const chances = 5;

  console.log("\nguess a number between 50 to 100");
  
  game(randomNumber, chances);
  wantToplayAgain();
}

function showWelcomeScreen (playerName) {
  console.clear();
  const welcomeMessage = "welcome to the game  'GUESS THE NUMBER'";
  
  console.log("hello", playerName, "\n");
  console.log(printWelcomeMsg(welcomeMessage), "\n");
  console.log(showInstructions());
  console.log(printBreakLine(""));


  executeGame();

  console.log(goodByeMessage(playerName));
}

function startGame() {
  showLoadingScreen(40);
  
  console.clear();
  const playerName = prompt("enter player name:");

  showWelcomeScreen(playerName);
}

startGame();
