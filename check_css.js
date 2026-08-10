const fs = require('fs');
const css = fs.readFileSync('./css/components.css', 'utf8');

let openBraces = 0;
let closeBraces = 0;
let lines = css.split('\n');

lines.forEach((line, index) => {
  for (let char of line) {
    if (char === '{') openBraces++;
    if (char === '}') closeBraces++;
  }
});

console.log(`Open braces: ${openBraces}, Close braces: ${closeBraces}`);
if (openBraces !== closeBraces) {
  console.error('MISMATCH! There is an unclosed or extra brace!');
} else {
  console.log('Brace count matches!');
}
