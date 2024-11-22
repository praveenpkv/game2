function getLoadingMessage() {
  return "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t LOADING GAME             ";
}

function getWelcomeMessage() {
  return "\n\n******************* welcome to the game"
    + " 'ROCK', 'PAPER' & 'SCISSOR' ********************"
    + "\n\nINSTRUCTIONS:\n"
    + "\nEnter r: for rock"
    + "\nEnter p: for paper"
    + "\nEnter s: for scissor";
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

  return middleLine
}

function getDesignedMessage(message) {
  let topAndBottomLine = getTopAndBottomLine(message);
  let middleLine = getMiddleLine(message)

  return topAndBottomLine + '\n' + middleLine + '\n' + topAndBottomLine;
}

function goodByeMessage(playerName) {
  const message = "good bye 😊 " + playerName;
  
  return "\n" + getDesignedMessage(message);
}

function winningMessage(choice) {
  const computersChoice = "\nCOMPUTER'S CHOICE: " + convertChoiceTOText(choice);
  const message =  'congratulations you WON!!!🏆🏆🏆';

  return computersChoice + '\n\n' + getDesignedMessage(message);
}

function loosingMessage(choice) {
  const computersChoice = "\nCOMPUTER'S CHOICE: " + convertChoiceTOText(choice);
  const message =  'oops! you LOST, Better Luck next time.🥶🥶🥶';

  return computersChoice + '\n\n' + getDesignedMessage(message);
}

function tieMessage(choice) {  
  const computersChoice = "\nCOMPUTER'S CHOICE: " + convertChoiceTOText(choice);
  const message =  'Match TIE, you can try again.👍👍👍';

  return computersChoice + '\n\n' + getDesignedMessage(message);
}

function printBreakLine(line) {
  for (let i = 0; i < 100; i++) {
    line += '-'  
  }

  return line;
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

function showLoadingScreen(loaderSize) {
  let loader = getLoadingMessage();
  for (let i = 0; i <= 10; i++) {
    console.clear();
    loader = replace(loader, loaderSize + i, "❥");
    console.log(loader);
    delay(3);
  }

  console.clear();
}

function readPlayerName() {
  const playerName = prompt("Enter your name :");

  if (playerName !== '') {
    return playerName;
  }

  console.log("\nplease enter your name\n");

  return readPlayerName();
}

function convertChoiceTOText(choice) {  
  if (choice === "r" || choice === 1) {
    return "ROCK 🪨";
  }

  if(choice === "p" || choice === 2) {
    return "PAPER 📃";
  }
 
  return "SCISSOR ✂️";
}

function computersChoice() {
  return Math.ceil(Math.random() * 3);
}

function checkComputerForR() {
  const computerChoice = computersChoice();

  if (computerChoice === 1) {
    return tieMessage(1);
  }

  if(computerChoice === 2) {
    return loosingMessage(2);
  }

  return winningMessage(3);
}

function checkComputerForP() {
  const computerChoice = computersChoice();

  if (computerChoice === 2) {
    return tieMessage(2);
  }

  if(computerChoice === 3) {
    return loosingMessage(3);
  }

  return winningMessage(1);
}

function checkComputerForS() {
  const computerChoice = computersChoice();

  if (computerChoice === 3) {
    return tieMessage(3);
  }

  if(computerChoice === 1) {
    return loosingMessage(1);
  }

  return winningMessage(2);
}

function result(choice) {
  if (choice === 'r') {
    return checkComputerForR();
  }

  if (choice === 'p') {
    return checkComputerForP();
  }

  return checkComputerForS(); 
}

function wantToplayAgain() {
  const wantToplay = confirm('\ndo you want to play Again:');

  if (wantToplay) {
    startGame();
  }
}

function readChoice() {
  const choice = prompt("\nEnter your choice(r, p, s): ");
  
  if (choice === "r" || choice === "p" || choice === "s") {
    return choice;
  }
  
  console.log("\nplease enter a valid choice");
  return readChoice();
}

function startGame() {
  const choice = readChoice();
  const userChoice = convertChoiceTOText(choice);

  console.log("\nYOUR CHOICE:", userChoice);
  
  console.log(result(choice));
  console.log(printBreakLine(''));

  wantToplayAgain();
}

function welcomeScreen() {
  showLoadingScreen(40);
  
  let playerName = readPlayerName();
  
  console.clear();
  console.log("Hello ", playerName, getWelcomeMessage());
  
  startGame();
  
  console.log(goodByeMessage(playerName));
  console.log(printBreakLine(''), '\n');
}

welcomeScreen();
