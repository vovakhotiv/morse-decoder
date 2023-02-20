const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let arrExpr = [];
  let arrDec = [];

  for (let i = 0; i < expr.length; i += 10) {
    arrExpr.push(expr.slice(i, i + 10));
  }
  console.log(arrExpr);

  for (let i = 0; i < arrExpr.length; i++) {
    if (arrExpr[i] === '**********') {
      arrExpr[i] = ' ';
    }
    arrExpr[i] = arrExpr[i].replace(/^0+/, '');
  }
  console.log(arrExpr);

  for (let i = 0; i < arrExpr.length; i++) {
    arrExpr[i]= arrExpr[i].replace(/11/g, '-').replace(/10/g, '.')
  }
  console.log(arrExpr);

  for (element of arrExpr) {
    if (element === ' ') {
      arrDec.push(' ')
    } else {
      arrDec.push(MORSE_TABLE[element])
    }
  }
  return arrDec.join('')
}

module.exports = {
  decode,
};
