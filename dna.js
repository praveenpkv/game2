const amplitude = 20;
const wavelength = 40;

function delay(time) {
  for (let i = 0; i <= time * 100000000; i++) {}
}

function min(a, b) {
  return a < b ? a : b;
}

function repeat(times, char) {
  let string = "";

  for (let i = 0; i < times; i++) {
    string += char;
  }

  return string;
}

function createLine(x, y) {
  let symbol1 = "🔴";
  let symbol2 = "🟡";

  if (min(x, y) === y) {
    symbol1 = "🟡";
    symbol2 = "🔴";
  }

  return repeat(min(x, y), " ") + symbol1 + repeat(Math.abs(x - y), "-") + symbol2;
}

function createDna(angle,numberOfLines) {
  if(numberOfLines === 1) {
    return;
  }
  const x = Math.round(Math.sin(angle) * amplitude + wavelength);
  const y = Math.round(Math.sin(0.5 - angle) * amplitude + wavelength);
  
  console.log(createLine(x, y));
  delay(1);

  createDna(angle + 0.15, numberOfLines - 1);
}

createDna(10, 50);
